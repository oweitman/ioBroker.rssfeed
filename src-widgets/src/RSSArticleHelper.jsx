import '@vitejs/plugin-react/preamble';
import React from 'react';

import Generic from './Generic';
import rssExample from './rss.json';

/**
 * @typedef {Object} RSSArticleHelperRxData
 * @property {string} oid
 * @property {number | string} article
 * @property {string} prefix
 */

/** @extends {Generic<RSSArticleHelperRxData>} */
class RSSArticleHelper extends Generic {
    /** @returns {import('@iobroker/types-vis-2').RxWidgetInfo} */
    static getWidgetInfo() {
        return {
            id: 'tplRSSArticleHelper',
            visSet: 'rssfeed',
            visName: 'RSSFeed Article Helper', // Name of widget
            visAttrs: [
                {
                    name: 'common', // group name
                    fields: [
                        {
                            name: 'oid', // name in data structure
                            type: 'id',
                            label: 'helper_oid', // translated field label
                        },
                        {
                            name: 'prefix', // name in data structure
                            type: 'text',
                            default: 'item',
                            label: 'helper_prefix', // translated field label
                        },
                        {
                            name: 'article', // name in data structure
                            type: 'number',
                            default: 1,
                            min: 1,
                            max: 9999,
                            step: 1,
                            label: 'helper_number', // translated field label
                        },
                    ],
                },
                // check here all possible types https://github.com/ioBroker/ioBroker.vis/blob/react/src/src/Attributes/Widget/SCHEMA.md
            ],
            visPrev: '',
        };
    }
    // eslint-disable-next-line class-methods-use-this
    propertiesUpdate() {
        // Widget has 3 important states
        // 1. this.state.values - contains all state values, that are used in widget (automatically collected from widget info).
        //                        So you can use `this.state.values[this.state.rxData.oid + '.val']` to get value of state with id this.state.rxData.oid
        // 2. this.state.rxData - contains all widget data with replaced bindings. E.g. if this.state.data.type is `{system.adapter.admin.0.alive}`,
        //                        then this.state.rxData.type will have state value of `system.adapter.admin.0.alive`
        // 3. this.state.rxStyle - contains all widget styles with replaced bindings. E.g. if this.state.styles.width is `{javascript.0.width}px`,
        //                        then this.state.rxData.type will have state value of `javascript.0.width` + 'px
    }

    componentDidMount() {
        super.componentDidMount();

        // Update data
        this.propertiesUpdate();
    }

    // Do not delete this method. It is used by vis to read the widget configuration.
    // eslint-disable-next-line class-methods-use-this
    getWidgetInfo() {
        return RSSArticleHelper.getWidgetInfo();
    }

    // This function is called every time when rxData is changed
    onRxDataChanged() {
        this.propertiesUpdate();
    }

    // This function is called every time when rxStyle is changed
    // eslint-disable-next-line class-methods-use-this
    onRxStyleChanged() {}

    // This function is called every time when some Object State updated, but all changes lands into this.state.values too
    // eslint-disable-next-line class-methods-use-this, no-unused-vars
    onStateUpdated(id, state) {}

    renderWidgetBody(props) {
        super.renderWidgetBody(props);

        /*         if (!this.state.values[`${this.state.rxData.oid}.val`]) {
            return null;
        } */

        /** @type {React.CSSProperties} */
        const thStyle = { whiteSpace: 'nowrap', textAlign: 'left', verticalAlign: 'top' };
        const rss = JSON.parse(this.getPropertyValue('oid') || JSON.stringify(rssExample));
        const article = parseInt(String(this.state.rxData.article), 10) || 1;
        const prefix = this.state.rxData.prefix || 'item';
        const item = rss.articles[article - 1];
        let result;

        if (item) {
            result = (
                <table>
                    <tbody>
                        <tr>
                        <th style={thStyle}>
                            {prefix}
                            .title
                        </th>
                        <td>{item.title}</td>
                        </tr>
                        <tr>
                        <th style={thStyle}>
                            {prefix}
                            .description
                        </th>
                        <td>
                            {/* eslint-disable-next-line react/no-danger */}
                            <div dangerouslySetInnerHTML={{ __html: item.description }}></div>
                        </td>
                        </tr>
                        <tr>
                        <th style={thStyle}>
                            {prefix}
                            .summary
                        </th>
                        <td>{item.summary}</td>
                        </tr>
                        <tr>
                        <th style={thStyle}>
                            {prefix}
                            .link
                        </th>
                        <td>{item.link}</td>
                        </tr>
                        <tr>
                        <th style={thStyle}>
                            {prefix}
                            .origlink
                        </th>
                        <td>{item.origlink}</td>
                        </tr>
                        <tr>
                        <th style={thStyle}>
                            {prefix}
                            .permalink
                        </th>
                        <td>{item.permalink}</td>
                        </tr>
                        <tr>
                        <th style={thStyle}>
                            {prefix}
                            .date
                        </th>
                        <td>{item.date}</td>
                        </tr>
                        <tr>
                        <th style={thStyle}>
                            {prefix}
                            .pubdate
                        </th>
                        <td>{item.pubdate}</td>
                        </tr>
                        <tr>
                        <th style={thStyle}>
                            {prefix}
                            .author
                        </th>
                        <td>{item.author}</td>
                        </tr>
                        <tr>
                        <th style={thStyle}>
                            {prefix}
                            .guid
                        </th>
                        <td>{item.guid}</td>
                        </tr>
                        <tr>
                        <th style={thStyle}>
                            {prefix}
                            .comments
                        </th>
                        <td>{item.comments}</td>
                        </tr>
                        <tr>
                        <th style={thStyle}>
                            {prefix}
                            .image.url
                        </th>
                        <td>{item.image.url}</td>
                        </tr>
                        <tr>
                        <th style={thStyle}>
                            {prefix}
                            .image.title
                        </th>
                        <td>{item.image.title}</td>
                        </tr>
                        <tr>
                        <th style={thStyle}>
                            {prefix}
                            .categories
                        </th>
                        <td>{item.categories}</td>
                        </tr>
                        <tr>
                        <th style={thStyle}>
                            {prefix}
                            .source
                        </th>
                        <td>{JSON.stringify(item.source)}</td>
                    </tr>
                    <tr>
                        <th style={thStyle}>
                            {prefix}
                            .enclosures
                        </th>
                        <td>{JSON.stringify(item.enclosures)}</td>
                        </tr>
                    </tbody>
                </table>
            );
        } else {
            result = (
                <table className="rssfeed attributes">
                    <tbody>
                        <tr>
                            <th>No Data. End of List of {rss.articles.length} Articles</th>
                        </tr>
                    </tbody>
                </table>
            );
        }
        return this.renderScrollableContent(result);
    }
}
export default RSSArticleHelper;
