// @ts-check

import React from 'react';

/**
 * @typedef {Window & {
 *     visRxWidget: typeof import('@iobroker/types-vis-2/visRxWidget').default
 * }} VisWidgetWindow
 */

/** @type {typeof import('@iobroker/types-vis-2/visRxWidget').default} */
const VisRxWidgetBase = /** @type {VisWidgetWindow} */ (window).visRxWidget;

/**
 * Common base for the RSS feed widgets.
 *
 * @template {Record<string, any>} RxData
 * @template {Partial<import('@iobroker/types-vis-2').VisRxWidgetState>} [State=import('@iobroker/types-vis-2').VisRxWidgetState]
 * @extends {VisRxWidgetBase<RxData, State>}
 */
export default class Generic extends VisRxWidgetBase {
    static getI18nPrefix() {
        return 'vis-2-widgets-rssfeed';
    }

    /**
     * @param {keyof RxData & string} stateName
     * @returns {any}
     */
    getPropertyValue(stateName) {
        const stateId = this.state.rxData[stateName];

        return this.state.values[`${String(stateId)}.val`];
    }

    /**
     * Keep widget content inside the configured VIS dimensions and show scrollbars only on overflow.
     *
     * @param {React.ReactNode} content
     * @returns {React.ReactElement}
     */
    renderScrollableContent(content) {
        return React.createElement(
            'div',
            {
                style: {
                    width: '100%',
                    height: '100%',
                    minWidth: 0,
                    minHeight: 0,
                    boxSizing: 'border-box',
                    overflow: 'auto',
                },
            },
            content,
        );
    }
}
