import React, { useEffect, useRef } from 'react';

/**
 * @typedef {Object.<string, (() => void)>} CleanupStore
 */

/**
 * @typedef {Window & typeof globalThis & {
 *   __visJsonTemplateCleanup?: CleanupStore;
 *   __visJsonTemplateRegisterCleanup?: ((fn?: (() => void) | null) => void) | undefined;
 * }} VisTemplateWindow
 */

/**
 * @returns {VisTemplateWindow}
 */
function getTemplateWindow() {
    return /** @type {VisTemplateWindow} */ (window);
}

/**
 * @param {string} code
 * @param {string} cleanupKey
 * @returns {string}
 */
function wrapInlineScript(code, cleanupKey) {
    const source = (code || '').trim();
    if (!source) {
        return '';
    }

    return `
(() => {
    const __cleanupKey = ${JSON.stringify(cleanupKey)};
    const __cleanupStore = (window.__visJsonTemplateCleanup = window.__visJsonTemplateCleanup || {});

    window.__visJsonTemplateRegisterCleanup = function (fn) {
        if (typeof fn === 'function') {
            __cleanupStore[__cleanupKey] = fn;
        } else {
            delete __cleanupStore[__cleanupKey];
        }
    };

    try {
${indentCode(source, 8)}
    } finally {
        try {
            delete window.__visJsonTemplateRegisterCleanup;
        } catch (e) {
            window.__visJsonTemplateRegisterCleanup = undefined;
        }
    }
})();
`.trim();
}

/**
 * @param {string} code
 * @param {number} spaces
 * @returns {string}
 */
function indentCode(code, spaces) {
    const pad = ' '.repeat(spaces);
    return String(code)
        .split('\n')
        .map(line => `${pad}${line}`)
        .join('\n');
}

/**
 * @param {HTMLScriptElement} scriptNode
 * @returns {boolean}
 */
function isClassicInlineScript(scriptNode) {
    const hasSrc = scriptNode.hasAttribute('src');
    if (hasSrc) {
        return false;
    }

    const type = (scriptNode.getAttribute('type') || '').trim().toLowerCase();
    return !type || type === 'text/javascript' || type === 'application/javascript';
}

/**
 * @param {Node} node
 * @param {string} cleanupKey
 * @returns {Node}
 */
function cloneNodeWithExecutableScripts(node, cleanupKey) {
    if (!node) {
        return node;
    }

    if (node.nodeType === Node.ELEMENT_NODE && node instanceof HTMLScriptElement) {
        const newScript = document.createElement('script');

        for (const attr of node.attributes) {
            newScript.setAttribute(attr.name, attr.value);
        }

        if (node.hasAttribute('src')) {
            return newScript;
        }

        if (isClassicInlineScript(node)) {
            newScript.textContent = wrapInlineScript(node.textContent || '', cleanupKey);
        } else {
            newScript.textContent = node.textContent || '';
        }

        return newScript;
    }

    const clone = node.cloneNode(false);

    for (const child of node.childNodes) {
        clone.appendChild(cloneNodeWithExecutableScripts(child, cleanupKey));
    }

    return clone;
}

/**
 * @param {string} html
 * @param {string} cleanupKey
 * @returns {DocumentFragment}
 */
function buildFragment(html, cleanupKey) {
    const template = document.createElement('template');
    template.innerHTML = html;

    const fragment = document.createDocumentFragment();
    for (const child of Array.from(template.content.childNodes)) {
        fragment.appendChild(cloneNodeWithExecutableScripts(child, cleanupKey));
    }

    return fragment;
}

/**
 * @param {string | undefined} cleanupKey
 * @returns {void}
 */
function runRegisteredCleanup(cleanupKey) {
    const tplWindow = getTemplateWindow();
    const store = tplWindow.__visJsonTemplateCleanup;

    if (!store || !cleanupKey) {
        return;
    }

    const fn = store[cleanupKey];
    if (typeof fn === 'function') {
        try {
            fn();
        } catch (e) {
            console.error('InnerHTML cleanup failed:', e);
        }
    }

    delete store[cleanupKey];
}

/**
 * @param {{
 *   html: string,
 *   allowRerender?: any
 * } & React.HTMLAttributes<HTMLDivElement>} props
 */
function InnerHTML({ html, allowRerender, ...rest }) {
    /** @type {React.RefObject<HTMLDivElement | null>} */
    const divRef = useRef(null);
    const instanceIdRef = useRef(`vis-json-template-${Math.random().toString(36).slice(2)}`);
    const renderCountRef = useRef(0);

    useEffect(() => {
        if (html == null) {
            throw new Error("html prop can't be null");
        }

        const container = divRef.current;
        if (!container) {
            return undefined;
        }

        renderCountRef.current += 1;
        const cleanupKey = `${instanceIdRef.current}:${renderCountRef.current}`;

        const previousCleanupKey = container.dataset.cleanupKey;
        if (previousCleanupKey) {
            runRegisteredCleanup(previousCleanupKey);
        }

        container.innerHTML = '';
        container.dataset.cleanupKey = cleanupKey;

        const fragment = buildFragment(html, cleanupKey);
        container.appendChild(fragment);

        return () => {
            const currentCleanupKey = container.dataset.cleanupKey;
            if (currentCleanupKey) {
                runRegisteredCleanup(currentCleanupKey);
            }
            container.innerHTML = '';
            delete container.dataset.cleanupKey;
        };
    }, [html, allowRerender]);

    return (
        <div
            {...rest}
            ref={divRef}
        />
    );
}

export default InnerHTML;
