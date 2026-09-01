import '@vitejs/plugin-react/preamble';
import React from 'react';
import PropTypes from 'prop-types';

import { I18n } from '@iobroker/adapter-react-v5';
import VisEJSAttributeField from './Components/VisEJSAttributeField';
import InnerHtml from './Components/InnerHTML';
import Generic from './Generic';
import ejs from 'ejs';
import rssExample from './rss.json';

/** @extends {Generic<Record<string, any>>} */
class RSSWidget extends Generic {
    /** @returns {import('@iobroker/types-vis-2').RxWidgetInfo} */
    static getWidgetInfo() {
        const defaulttemplate = `
<!--
 available variables:
 widgetid      ->  id of the widget 
 rss.meta      ->  all meta informations of an feed, details see Meta Helper widget 
 rss.articles  ->  all articles as array, details see Article Helper widget 
 style         ->  all style settings for the widget
 
 all variables are read only
-->
<style>
#<%- widgetid %> img {
    width: calc(<%- style.width %> - 15px);
    height: auto;
}
#<%- widgetid %> img.rssfeed  {
    width: auto;
    height: auto;
}

</style>
<p><%- rss.meta.title %> </p>
<% rss.articles.forEach(function(item){ %>
    <div class="article">
    <p><small><%- vis.formatDate(item.pubdate, "TT.MM.JJJJ SS:mm") %></small></p>    
    <h3><%- item.title %></h3>
    <p><%- item.description %></p>
    <div style="clear:both;"></div>
</div>
<% }); %> 
        `;
        return {
            id: 'tplRSSWidget',
            visSet: 'rssfeed',
            visSetLabel: 'setlabel',
            visName: 'RSSFeed Widget', // Name of widget
            visAttrs: [
                {
                    name: 'common', // group name
                    fields: [
                        {
                            name: 'oid', // name in data structure
                            type: 'id',
                            label: 'widget_oid', // translated field label
                        },
                        {
                            name: 'template', // name in data structure
                            type: 'custom',
                            label: 'widget_template', // translated field label
                            default: defaulttemplate,
                            component: (
                                // important
                                field, // field properties: {name, label, type, set, singleName, component,...}
                                data, // widget data
                                onDataChange, // function to call, when data changed
                                props, // additional properties : {socket, projectName, instance, adapterName, selectedView, selectedWidgets, project, widgetID}
                                // socket,      // socket object
                                // widgetID,    // widget ID or widgets IDs. If selecteld more than one widget, it is array of IDs
                                // view,        // view name
                                // project,      // project object: {VIEWS..., [view]: {widgets: {[widgetID]: {tpl, data, style}}, settings, parentId, rerender, filterList, activeWidgets}, __settings: {}}
                            ) => (
                                <VisEJSAttributeField
                                    field={field}
                                    data={data}
                                    onDataChange={onDataChange}
                                    props={props}
                                />
                            ),
                        },
                        {
                            name: 'max', // name in data structure
                            type: 'number',
                            default: 5,
                            min: 1,
                            max: 9999,
                            step: 1,
                            label: 'widget_maxarticles', // translated field label
                        },
                        {
                            name: 'filter', // name in data structure
                            type: 'text',
                            default: '',
                            label: 'widget_filter', // translated field label
                        },
                    ],
                },
                // check here all possible types https://github.com/ioBroker/ioBroker.vis/blob/react/src/src/Attributes/Widget/SCHEMA.md
            ],
            visDefaultStyle: {
                // default style
                width: 300,
                height: 300,
            },
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
        return RSSWidget.getWidgetInfo();
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

    // eslint-disable-next-line class-methods-use-this
    checkHighlite(value, highlights, sep) {
        sep = typeof sep !== 'undefined' ? sep : ';';
        const highlight = highlights.split(sep);
        return highlight.reduce((acc, cur) => {
            if (cur === '') return acc;
            return acc || value.toLowerCase().indexOf(cur.toLowerCase()) >= 0;
        }, false);
    }

    // // eslint-disable-next-line class-methods-use-this
    escapeHTML(html) {
        const escapeEl = document.createElement('textarea');
        escapeEl.textContent = html;
        const ret = escapeEl.innerHTML;
        return ret;
    }

    renderWidgetBody(props) {
        super.renderWidgetBody(props);
        const rss = JSON.parse(this.getPropertyValue('oid') || JSON.stringify(rssExample));
        const data = props.widget.data;

        const errortemplate = `
        No Object ID set
        `;
        const template = data.template;
        const filter = data.filter ? data.filter : '';
        let maxarticles = data.max ? data.max : 999;
        maxarticles = maxarticles > 0 ? maxarticles : 1;
        if (rss && rss.articles && rss.articles.length > maxarticles) rss.articles = rss.articles.slice(0, maxarticles);

        if (filter !== '') {
            rss.articles = rss.articles.filter(item =>
                this.checkHighlite(item.title + item.description + item.categories.toString(), filter),
            );
        }
        let text = '';
        try {
            if (typeof rss.meta === 'undefined') {
                text = ejs.render(errortemplate, {});
            } else {
                text = ejs.render(template, { rss, widgetid: props.id, style: props.style });
            }
        } catch (e) {
            text = this.escapeHTML(e instanceof Error ? e.message : String(e)).replace(/(?:\r\n|\r|\n)/g, '<br>');
            text = text.replace(/ /gm, '&nbsp;');
            text = `<code style="color:red;">${text}</code>`;
        }
        return <InnerHtml html={text} />;
    }
}
RSSWidget.propTypes = {
    systemConfig: PropTypes.object,
    socket: PropTypes.object,
    themeType: PropTypes.string,
    style: PropTypes.object,
    data: PropTypes.object,
};

export default RSSWidget;
