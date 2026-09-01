import React, { useEffect, useRef } from 'react';
import AceEditor from 'react-ace';

import 'ace-builds/src-noconflict/ace';
import 'ace-builds/src-noconflict/mode-ejs';
import 'ace-builds/src-noconflict/theme-clouds_midnight';
import 'ace-builds/src-noconflict/theme-chrome';
import 'ace-builds/src-noconflict/snippets/ejs';
import 'ace-builds/src-noconflict/ext-language_tools';

import { I18n } from '@iobroker/adapter-react-v5';

interface EJSAceEditorProps {
    onChange?: (value: string) => void;
    value: string;
    readOnly?: boolean;
    height?: number | string;
    width?: number | string;
    error?: boolean;
    focus?: boolean;
    themeType: string;
}

export const EJSAceEditor = (props: EJSAceEditorProps): React.JSX.Element => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let content: HTMLInputElement | null = null;
        let intervalTimer: ReturnType<typeof setInterval> | null = null;
        let initTimer: ReturnType<typeof setTimeout> | null = null;

        const keyDown = (e: KeyboardEvent): void => {
            if (e.key === 'f' && e.ctrlKey) {
                intervalTimer = setInterval(() => {
                    if (!content) {
                        return;
                    }

                    const parent = content.parentNode;
                    if (!parent) {
                        return;
                    }

                    const searchField = parent.querySelector<HTMLInputElement>('.ace_search_field');
                    if (searchField) {
                        if (intervalTimer) {
                            clearInterval(intervalTimer);
                            intervalTimer = null;
                        }
                    }

                    if (searchField?.placeholder === 'Search for') {
                        searchField.placeholder = I18n.t('ace_Search for');
                    }

                    const findAllBtn = parent.querySelector<HTMLElement>('.ace_searchbtn[action="findAll"]');
                    if (findAllBtn?.innerHTML === 'All') {
                        findAllBtn.innerHTML = I18n.t('ace_All');
                    }

                    const regexpBtn = parent.querySelector<HTMLElement>('.ace_button[action="toggleRegexpMode"]');
                    if (regexpBtn?.title === 'RegExp Search') {
                        regexpBtn.title = I18n.t('ace_RegExp Search');
                    }

                    const caseBtn = parent.querySelector<HTMLElement>('.ace_button[action="toggleCaseSensitive"]');
                    if (caseBtn?.title === 'CaseSensitive Search') {
                        caseBtn.title = I18n.t('ace_CaseSensitive Search');
                    }

                    const wholeWordBtn = parent.querySelector<HTMLElement>('.ace_button[action="toggleWholeWords"]');
                    if (wholeWordBtn?.title === 'Whole Word Search') {
                        wholeWordBtn.title = I18n.t('ace_Whole Word Search');
                    }

                    const selectionBtn = parent.querySelector<HTMLElement>('.ace_button[action="searchInSelection"]');
                    if (selectionBtn?.title === 'Search In Selection') {
                        selectionBtn.title = I18n.t('ace_Search In Selection');
                    }

                    const replaceBtn = parent.querySelector<HTMLElement>('.ace_button[action="toggleReplace"]');
                    if (replaceBtn?.title === 'Toggle Replace mode') {
                        replaceBtn.title = I18n.t('ace_Toggle Replace mode');
                    }

                    content?.removeEventListener('keydown', keyDown);
                    content = null;
                }, 100);
            }
        };

        if (I18n.getLanguage() !== 'en') {
            initTimer = setTimeout(() => {
                content = window.document.querySelector<HTMLInputElement>('.ace_text-input');
                content?.addEventListener('keydown', keyDown);
            }, 200);
        }

        return () => {
            if (initTimer) {
                clearTimeout(initTimer);
            }
            if (intervalTimer) {
                clearInterval(intervalTimer);
            }
            content?.removeEventListener('keydown', keyDown);
            content = null;
        };
    }, []);

    return (
        <div
            style={{
                width: props.width || '100%',
                height: props.height || '100%',
                border: props.error ? '1px solid #800' : '1px solid transparent',
            }}
            ref={containerRef}
        >
            <AceEditor
                mode="ejs"
                theme={props.themeType === 'dark' ? 'clouds_midnight' : 'chrome'}
                width="100%"
                height="100%"
                value={props.value}
                onChange={newValue => props.onChange?.(newValue)}
                readOnly={props.readOnly || false}
                focus={props.focus}
                highlightActiveLine
                enableBasicAutocompletion
                enableLiveAutocompletion
                enableSnippets
                setOptions={{
                    useWorker: false,
                }}
            />
        </div>
    );
};

export default EJSAceEditor;
