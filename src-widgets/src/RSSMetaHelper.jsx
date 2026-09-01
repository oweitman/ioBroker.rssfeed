import '@vitejs/plugin-react/preamble';
import React from 'react';

import Generic from './Generic';
import rssExample from './rss.json';

/** @typedef {{ oid: string }} RSSMetaHelperRxData */

/** @extends {Generic<RSSMetaHelperRxData>} */
class RSSMetaHelper extends Generic {
    static getWidgetInfo() {
        return {
            id: 'tplRSSMetaHelper',
            visSet: 'rssfeed',
            visName: 'RSSFeed Meta Helper', // Name of widget
            visAttrs: [
                {
                    name: 'common', // group name
                    fields: [
                        {
                            name: 'oid', // name in data structure
                            type: 'id',
                            label: 'helper_oid', // translated field label
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
        return RSSMetaHelper.getWidgetInfo();
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

        /** @type {React.CSSProperties} */
        const thStyle = { whiteSpace: 'nowrap', textAlign: 'left', verticalAlign: 'top' };
        const rss = JSON.parse(this.getPropertyValue('oid') || JSON.stringify(rssExample));

        return (
            <table style={{ whiteSpace: 'nowrap' }}>
                <tbody>
                    <tr>
                    <th style={thStyle}>meta.title</th>
                    <td>{rss.meta.title}</td>
                    </tr>
                    <tr>
                    <th style={thStyle}>meta.description</th>
                    <td>{rss.meta.description}</td>
                    </tr>
                    <tr>
                    <th style={thStyle}>meta.link</th>
                    <td>{rss.meta.link}</td>
                    </tr>
                    <tr>
                    <th style={thStyle}>meta.xmlurl</th>
                    <td>{rss.meta.xmlurl}</td>
                    </tr>
                    <tr>
                    <th style={thStyle}>meta.date</th>
                    <td>{rss.meta.date}</td>
                    </tr>
                    <tr>
                    <th style={thStyle}>meta.pubdate</th>
                    <td>{rss.meta.pubdate}</td>
                    </tr>
                    <tr>
                    <th style={thStyle}>meta.author</th>
                    <td>{rss.meta.author}</td>
                    </tr>
                    <tr>
                    <th style={thStyle}>meta.language</th>
                    <td>{rss.meta.language}</td>
                    </tr>
                    <tr>
                    <th style={thStyle}>meta.image.url</th>
                    <td>{rss.meta.image.url}</td>
                    </tr>
                    <tr>
                    <th style={thStyle}>meta.image.title</th>
                    <td>{rss.meta.image.title}</td>
                    </tr>
                    <tr>
                    <th style={thStyle}>meta.favicon</th>
                    <td>{rss.meta.favicon}</td>
                    </tr>
                    <tr>
                    <th style={thStyle}>meta.copyright</th>
                    <td>{rss.meta.copyright}</td>
                    </tr>
                    <tr>
                    <th style={thStyle}>meta.generator</th>
                    <td>{rss.meta.generator}</td>
                </tr>
                <tr>
                    <th style={thStyle}>meta.categories</th>
                    <td>{rss.meta.categories}</td>
                    </tr>
                </tbody>
            </table>
        );
    }
}
export default RSSMetaHelper;
