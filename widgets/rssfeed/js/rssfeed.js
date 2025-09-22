/* xeslint-disable no-var */
/* xeslint-disable space-before-function-paren */
/*
    ioBroker.vis rssfeed Widget-Set

    Copyright 2020-2023 oweitman oweitman@gmx.de
*/
'use strict';
/* jshint -W069 */
/* globals $,window,document,systemDictionary,vis,ejs,ace,_ */

// add translations for edit mode
// add translations for edit mode
import { version as pkgVersion } from '../../../package.json';
var translations = require('../i18n/translations.json');
$.extend(true, systemDictionary, translations);

// this code can be placed directly in rssfeed.html
vis.binds['rssfeed'] = {
    version: pkgVersion,
    /**
     * Log the version of rssfeed and remove it.
     * Should be called from the main thread, as it logs to the console.
     */
    showVersion: function () {
        if (vis.binds['rssfeed'].version) {
            console.log(`Version rssfeed: ${vis.binds['rssfeed'].version}`);
            vis.binds['rssfeed'].version = null;
        }
    },
    rssfeedmultiwidget3: {
        /**
         * Initializes and creates an RSS feed multi widget.
         *
         * @param widgetID - The ID of the widget element.
         * @param view - The view object containing widget information.
         * @param data - Contains configuration data for the widget, including feed and data point counts.
         * @param style - Style settings for the widget.
         *
         * The function checks for the widget element by its ID. If not found, it retries after a delay.
         * It processes the RSS feed and data point configurations, binding them if necessary.
         * Finally, it renders the widget with the provided data and style.
         */
        createWidget: function (widgetID, view, data, style) {
            const $div = $(`#${widgetID}`);
            // if nothing found => wait
            if (!$div.length) {
                return setTimeout(function () {
                    vis.binds['rssfeed'].rssfeedmultiwidget3.createWidget(widgetID, view, data, style);
                }, 100);
            }
            const feedCount = data.rss_feedCount ? data.rss_feedCount : 1;
            const dpCount = data.rss_dpCount ? data.rss_dpCount : 1;
            const bound = [];

            for (let i1 = 1; i1 <= dpCount; i1++) {
                if (data[`rss_dp${i1}`]) {
                    bound.push(data[`rss_dp${i1}`]);
                    console.debug('bound');
                }
            }
            for (let i = 1; i <= feedCount; i++) {
                const rss = data[`rss_oid${i}`] ? JSON.parse(vis.states.attr(`${data[`rss_oid${i}`]}.val`)) : {};
                if (!Object.prototype.hasOwnProperty.call(rss, 'articles')) {
                    continue;
                }
                bound.push(data[`rss_oid${i}`]);
            }

            function onChange(e, newVal) {
                if (newVal) {
                    vis.binds['rssfeed'].rssfeedmultiwidget3.render(widgetID, data);
                }
            }
            if (bound.length > 0) {
                if (!vis.editMode) {
                    vis.binds['rssfeed'].bindStates($div, bound, onChange);
                }
            }
            this.render(widgetID, data, style);
        },
        /**
         * Renders the RSS feed multi widget.
         *
         * @param widgetID - The ID of the widget element.
         * @param data - Contains configuration data for the widget, including feed and data point counts.
         * @param style - Style settings for the widget.
         *
         * The function renders the widget with the provided data and style.
         * It checks for the widget element by its ID. If not found, it retries after a delay.
         * It processes the RSS feed and data point configurations, binding them if necessary.
         * Finally, it renders the widget with the provided data and style.
         * If no articles are available, it shows a message.
         */
        render: function (widgetID, data, style) {
            const articles = [];
            const datapoints = [];
            const feedCount = data.rss_feedCount ? data.rss_feedCount : 1;
            const dpCount = data.rss_dpCount ? data.rss_dpCount : 1;

            for (let i1 = 1; i1 <= dpCount; i1++) {
                if (data[`rss_dp${i1}`]) {
                    datapoints[data[`rss_dp${i1}`]] = vis.states.attr(`${data[`rss_dp${i1}`]}.val`);
                }
            }

            const defaulttemplate = `
<style>
  #<%- widgetid %> img {
    width: calc(<%- style.width || "230px" %> - 15px);
    height: auto;
  }
  #<%- widgetid %> img.rssfeed {
    width: auto;
    height: auto;
  }
</style>
<% rss.articles.forEach(function(item){ %>
<p><%- item.meta_name || item.meta_title || '' %></p>
<p><small><%- vis.formatDate(item.pubdate, "TT.MM.JJJJ SS:mm") %></small></p>
<h3><%- item.title %></h3>
<p><%- item.description %></p>
<div style="clear:both;" />
<% }); %>
                            `;
            const template = data['rss_template']
                ? data['rss_template'].trim()
                    ? data['rss_template'].trim()
                    : defaulttemplate
                : defaulttemplate;

            for (let i = 1; i <= feedCount; i++) {
                const rss = data[`rss_oid${i}`] ? JSON.parse(vis.states.attr(`${data[`rss_oid${i}`]}.val`)) : {};
                if (!Object.prototype.hasOwnProperty.call(rss, 'articles')) {
                    continue;
                }

                const filter = data[`rss_filter${i}`] ? data[`rss_filter${i}`] : '';
                let maxarticles = data[`rss_maxarticles${i}`] ? data[`rss_maxarticles${i}`] : 999;
                maxarticles = maxarticles > 0 ? maxarticles : 1;
                const name = data[`rss_name${i}`] ? data[`rss_name${i}`] : '';

                if (rss && rss.articles && rss.articles.length > maxarticles) {
                    rss.articles = rss.articles.slice(0, maxarticles);
                }

                if (filter != '') {
                    rss.articles = rss.articles.filter(item => {
                        return vis.binds['rssfeed'].checkHighlite(
                            item.title + item.description + item.categories.toString(),
                            filter,
                        );
                    });
                }

                rss.articles = rss.articles.map(item => {
                    item['meta_title'] = rss.meta.title;
                    item['meta_description'] = rss.meta.description;
                    item['meta_name'] = name;
                    return item;
                });
                articles.push(rss.articles);
            }

            let collect = [];
            articles.forEach(function (item) {
                collect = collect.concat(item);
            });

            collect.sort(function (a, b) {
                // Turn your strings into dates, and then subtract them
                // to get a value that is either negative, positive, or zero.
                return new Date(b.date) - new Date(a.date);
            });
            const meta = new Proxy(
                {},
                {
                    get(target, name) {
                        if (name == 'title' || name == 'description') {
                            return `meta.${name} is not available please use RSS Feed widget. Read the widget help`;
                        }
                        return 'meta is not available please use RSS Feed widget. Read the widget help.';
                    },
                },
            );

            let text = '';
            try {
                if (collect.length == 0) {
                    text = 'articles is empty, please select a RSS feed datapoint.';
                } else {
                    text = ejs.render(template, {
                        rss: { articles: collect, meta: meta },
                        dp: datapoints,
                        widgetid: widgetID,
                        style: style,
                    });
                }
            } catch (e) {
                text = vis.binds['rssfeed'].escapeHTML(e.message).replace(/(?:\r\n|\r|\n)/g, '<br>');
                text = text.replace(/ /gm, '&nbsp;');
                text = `<code style="color:red;">${text}</code>`;
            }

            $(`#${widgetID}`).html(text);
        },
    },
    marquee5: {
        /**
         * Initializes and creates a marquee widget for displaying RSS feed titles.
         *
         * @param widgetID - The ID of the widget element.
         * @param view - The view object containing widget information.
         * @param data - Contains configuration data for the widget, including feed and display settings.
         * @param style - Style settings for the widget, such as color and background.
         *
         * The function checks for the widget element by its ID and retries if not found. It processes the RSS feed configurations,
         * binds states if necessary, applies styles and animations for the marquee effect, and renders the widget with the provided
         * data and styles.
         */
        createWidget: function (widgetID, view, data, style) {
            const $div = $(`#${widgetID}`);
            // if nothing found => wait
            if (!$div.length) {
                return setTimeout(function () {
                    vis.binds['rssfeed'].marquee5.createWidget(widgetID, view, data, style);
                }, 100);
            }

            const bound = [];
            const feedCount = data.rss_feedCount ? data.rss_feedCount : 1;
            const pauseonhover = data.rss_pauseonhover ? true : data.rss_pauseonhover;
            const frontcolor = style.color ? style.color : undefined;
            const backcolor = style['background-color'] ? style['background-color'] : undefined;
            const opentype = data.rss_opentype ? data.rss_opentype : 'none';

            for (let i = 1; i <= feedCount; i++) {
                const rss = data[`rss_oid${i}`] ? JSON.parse(vis.states.attr(`${data[`rss_oid${i}`]}.val`)) : {};
                if (!Object.prototype.hasOwnProperty.call(rss, 'articles')) {
                    continue;
                }
                bound.push(data[`rss_oid${i}`]);
            }
            /**
             * Event handler triggered when a bound state changes.
             *
             * @param e - The event object containing event information.
             * @param newVal - The new value of the changed state.
             *
             * If the new value is truthy, the function triggers re-rendering
             * of the marquee widget with the updated data.
             */
            function onChange(e, newVal) {
                if (newVal) {
                    vis.binds['rssfeed'].marquee5.render(widgetID, data);
                }
            }

            if (bound.length > 0) {
                if (!vis.editMode) {
                    console.debug('bound');
                    vis.binds['rssfeed'].bindStates($div, bound, onChange);
                }
            }

            let text = '';
            text += '<style> \n';
            text += `#${widgetID} .marquee {\n`;
            text += '    max-width: 100vw; /* iOS braucht das */\n';
            text += '    white-space: nowrap;\n';
            text += '    overflow: hidden;\n';
            if (backcolor) {
                text += `    background-color: ${
                    backcolor
                }; /* Hintergrundfarbe des Lauftextes. Auskommentieren, um Transparent zu erhalten */\n`;
            }
            text += '    font-size:20px;\n';
            text += '}\n';
            text += `#${widgetID} .marquee span {\n`;
            text += '    display: inline-block;\n';
            text += '    padding-left: 100%;\n';
            text += `    animation: ${widgetID}marquee 100s linear infinite;\n`;
            if (frontcolor) {
                text += `    color: ${frontcolor}; /* Textfarbe des Lauftextes */\n`;
            }
            text += '}\n';
            if (pauseonhover) {
                text += '/* Optional: mouseover (oder Tipp auf dem Touchscreen) pausiert die Laufschrift */\n';
                text += `#${widgetID} .marquee span:hover {\n`;
                text += '    animation-play-state: paused \n';
                text += '}\n';
            }
            text += '/* Make it move */\n';
            text += `@keyframes ${widgetID}marquee {\n`;
            text += '    0%   { transform: translateX(0); }\n';
            text += '    100% { transform: translateX(-100%); }\n';
            text += '}\n';
            text += `#${widgetID} a {\n`;
            text += '    text-decoration: none;';
            text += '    color: inherit;';
            text += '}\n';
            text += '</style> \n';
            text += `<div class="${widgetID} marquee"><span>test test test</span></div>`;
            if (opentype == 'popup') {
                text += '<style> \n';
                text += `.${widgetID} .wrapper {\n`;
                text += '    position: relative;';
                text += '    width: 100%;';
                text += '    height: 100%;';
                text += '}\n';
                text += `dialog.${widgetID} {\n`;
                text += '    width: 90%;';
                text += '    height: 90%;';
                text += '    overflow: hidden;';
                text += '}\n';
                text += `iframe.${widgetID} {\n`;
                text += '    position: absolute;';
                text += '    top: 0;';
                text += '    left: 0;';
                text += '    width: 100%;';
                text += '    height: 100%;';
                text += '}\n';
                text += `.${widgetID} .close {\n`;
                text += '    position: absolute;';
                text += '    top: 8px;';
                text += '    right: 8px;';
                text += '    background-color: red;';
                text += '    color: #fff;';
                text += '    width: 30px;';
                text += '    height: 30px;';
                text += '    font-size: 1rem;';
                text += '    z-index: 999;';
                text += '}\n';
                text += '</style> \n';
                text += `<div class="${widgetID} wrapper">`;
                text += `    <dialog class="${widgetID}">`;
                text += `        <button class="${widgetID} close" onclick="document.querySelector('dialog.${widgetID}').close()">X</button>`;
                text += `        <iframe class="${widgetID}" src="" height="100%" width="100%"/>`;
                text += `        <div class="${widgetID} overlay"/>`;
                text += `    </dialog>`;
                text += `</div>`;
            }
            $(`#${widgetID}`).html(text);
            for (const attr in style) {
                if ('left,top,width,height'.indexOf(attr) < 0 && style[attr] != '') {
                    $(`#${widgetID} span`).css(attr, style[attr]);
                }
            }
            this.render(widgetID, data);
        },
        dialog: function (el, event, widgetID, link) {
            //debugger;
            event.stopPropagation();
            let dialog = document.querySelector(`#${widgetID} dialog`);
            let iframe = document.querySelector(`#${widgetID} dialog iframe`);
            iframe.src = link;
            dialog.showModal();
        },
        /**
         * Renders the RSS feed articles into a marquee format.
         *
         * @param widgetID - The ID of the widget element.
         * @param data - Contains configuration data for the widget, such as feed count,
         *                        display options (time, date, year, name), divider, link option, and speed.
         *
         * This function processes multiple RSS feeds, applies filters and limits on articles,
         * and constructs a concatenated string of titles or links. It updates the animation duration
         * based on the total length of titles and sets the generated HTML content to the specified widget.
         */
        render: function (widgetID, data) {
            const articles = [];
            const feedCount = data.rss_feedCount ? data.rss_feedCount : 1;
            const rss_withtime = data.rss_withtime ? data.rss_withtime : false;
            const rss_withdate = data.rss_withdate ? data.rss_withdate : false;
            const rss_withyear = data.rss_withyear ? data.rss_withyear : false;
            const rss_withname = data.rss_withname ? data.rss_withname : false;
            const divider = data.rss_divider ? data.rss_divider : '+++';
            const opentype = data.rss_opentype ? data.rss_opentype : 'none';
            const speed = data.rss_speed ? data.rss_speed : 6;

            for (let i = 1; i <= feedCount; i++) {
                const filter = data[`rss_filter${i}`] ? data[`rss_filter${i}`] : '';
                const rss = data[`rss_oid${i}`] ? JSON.parse(vis.states.attr(`${data[`rss_oid${i}`]}.val`)) : {};
                if (!Object.prototype.hasOwnProperty.call(rss, 'articles')) {
                    continue;
                }

                let maxarticles = data[`rss_maxarticles${i}`] ? data[`rss_maxarticles${i}`] : 999;
                maxarticles = maxarticles > 0 ? maxarticles : 1;
                const name = data[`rss_name${i}`] ? data[`rss_name${i}`] : '';
                if (filter) {
                    rss.articles = rss.articles.filter(item => {
                        return vis.binds['rssfeed'].checkHighlite(
                            item.title + item.description + item.categories.toString(),
                            filter,
                        );
                    });
                }
                if (rss && rss.articles && rss.articles.length > maxarticles) {
                    rss.articles = rss.articles.slice(0, maxarticles);
                }
                rss.articles = rss.articles.map(item => {
                    item['meta_title'] = rss.meta.title;
                    item['meta_description'] = rss.meta.description;
                    item['meta_name'] = name;
                    item['meta_image'] = rss.meta.image.url ? rss.meta.image.url : '';

                    return item;
                });
                articles.push(rss.articles);
            }
            let collect = [];
            articles.forEach(function (item) {
                collect = collect.concat(item);
            });

            collect.sort(function (a, b) {
                // Turn your strings into dates, and then subtract them
                // to get a value that is either negative, positive, or zero.
                return new Date(b.date) - new Date(a.date);
            });

            let titles = '';
            let titleslength = 0;
            if (collect && collect.length > 0) {
                titles = collect.reduce(function (t, item) {
                    let time = '';
                    titleslength += item.title.length;
                    if (rss_withtime) {
                        time = vis.formatDate(item.date, 'hh:mm');
                    }
                    if (rss_withdate) {
                        time = vis.formatDate(item.date, 'DD.MM/hh:mm');
                    }
                    if (rss_withyear) {
                        time = vis.formatDate(item.date, 'DD.MM.YY/hh:mm');
                    }
                    if (opentype == 'link') {
                        t += ` ${divider} ${time} ${
                            rss_withname ? `${item.meta_name || item.meta_title}: ` : ''
                        }<a href="${item.link}" target="rssarticle">${time} ${item.title}</a>`;
                    } else if (opentype == 'popup') {
                        t += ` ${divider} ${time} ${
                            rss_withname ? `${item.meta_name || item.meta_title}: ` : ''
                        }<a onclick="vis.binds.rssfeed.marquee5.dialog(this,event,'${widgetID}','${item.link}')">${time} ${item.title}</a>`;
                    } else {
                        t += ` ${divider} ${time} ${
                            rss_withname ? `${item.meta_name || item.meta_title}: ` : ''
                        }${item.title}`;
                    }
                    return t;
                }, titles);
                const duration = (titleslength / speed).toFixed();
                $(`#${widgetID} .marquee span`).css('animation-duration', `${duration}s`);
                $(`#${widgetID} .marquee span`).html(titles);
            }
        },
    },
    rssfeedwidget2: {
        /**
         * Create the widget content
         *
         * @param widgetID - the id of the widget
         * @param view - the view object
         * @param data - the data object
         * @param style - the style object
         */
        createWidget: function (widgetID, view, data, style) {
            const $div = $(`#${widgetID}`);
            // if nothing found => wait
            if (!$div.length) {
                return setTimeout(function () {
                    vis.binds['rssfeed'].rssfeedwidget2.createWidget(widgetID, view, data, style);
                }, 100);
            }
            const rss = data.rss_oid ? JSON.parse(vis.states.attr(`${data.rss_oid}.val`)) : {};
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
    width: calc(<%- style.width || "230px" %> - 15px);
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
            const errortemplate = `
            No Object ID set
            `;

            const template = data.rss_template ? data.rss_template : defaulttemplate;
            const filter = data.rss_filter ? data.rss_filter : '';
            let maxarticles = data.rss_maxarticles ? data.rss_maxarticles : 999;
            maxarticles = maxarticles > 0 ? maxarticles : 1;
            if (rss && rss.articles && rss.articles.length > maxarticles) {
                rss.articles = rss.articles.slice(0, maxarticles);
            }

            if (filter != '') {
                rss.articles = rss.articles.filter(function (item) {
                    return vis.binds['rssfeed'].checkHighlite(
                        item.title + item.description + item.categories.toString(),
                        filter,
                    );
                });
            }

            /**
             * Triggered when the object value changes.
             *
             * @param e Event object
             * @param newVal New value of the object
             */
            function onChange(e, newVal) {
                if (newVal) {
                    vis.binds['rssfeed'].rssfeedwidget2.createWidget(widgetID, view, data, style);
                }
            }

            if (data.rss_oid) {
                if (!vis.editMode) {
                    vis.binds['rssfeed'].bindStates($div, [data.rss_oid], onChange);
                }
            }

            let text = '';
            try {
                if (typeof rss.meta == 'undefined') {
                    text = ejs.render(errortemplate, rss);
                } else {
                    text = ejs.render(template, { rss: rss, widgetid: widgetID, style: style });
                }
            } catch (e) {
                text = vis.binds['rssfeed'].escapeHTML(e.message).replace(/(?:\r\n|\r|\n)/g, '<br>');
                text = text.replace(/ /gm, '&nbsp;');
                text = `<code style="color:red;">${text}</code>`;
            }

            $(`#${widgetID}`).html(text);
        },
    },
    jsontemplate2: {
        /**
         * Initializes and creates a JSON template widget.
         *
         * @param widgetID - The ID of the widget element.
         * @param view - The view object containing widget information.
         * @param data - Contains configuration data for the widget, including JSON object ID and template.
         * @param style - Style settings for the widget.
         *
         * The function checks for the widget element by its ID. If not found, it retries after a delay.
         * It parses the JSON data from the specified object ID, processes additional data points,
         * and binds states if necessary. It then renders the widget using the EJS template with
         * the provided data and style.
         */
        createWidget: function (widgetID, view, data, style) {
            const $div = $(`#${widgetID}`);
            // if nothing found => wait
            if (!$div.length) {
                return setTimeout(function () {
                    vis.binds['rssfeed'].jsontemplate2.createWidget(widgetID, view, data, style);
                }, 100);
            }
            const bound = [];
            const oiddata = data.json_oid ? JSON.parse(vis.states.attr(`${data.json_oid}.val`)) : {};
            const template = data.json_template ? data.json_template : '';
            if (data.json_oid) {
                bound.push(data.json_oid);
            }

            const dpCount = data.rss_dpCount ? data.rss_dpCount : 1;
            const datapoints = [];

            for (let i = 1; i <= dpCount; i++) {
                if (data[`rss_dp${i}`]) {
                    datapoints[data[`rss_dp${i}`]] = vis.states.attr(`${data[`rss_dp${i}`]}.val`);
                    bound.push(data[`rss_dp${i}`]);
                }
            }

            if (bound) {
                if (!vis.editMode) {
                    vis.binds['rssfeed'].bindStates(
                        $div,
                        bound,
                        vis.binds['rssfeed'].jsontemplate2.onChange.bind({
                            widgetID: widgetID,
                            view: view,
                            data: data,
                            style: style,
                        }),
                    );
                }
            }
            let text = '';
            try {
                text = ejs.render(template, { widgetID: widgetID, data: oiddata, dp: datapoints });
            } catch (e) {
                text = vis.binds['rssfeed'].escapeHTML(e.message).replace(/(?:\r\n|\r|\n)/g, '<br>');
                text = text.replace(/ /gm, '&nbsp;');
                text = `<code style="color:red;">${text}</code>`;
            }
            $(`#${widgetID}`).html(text);
        },

        /**
         * Will be called if the value of the bound data point changes.
         *
         * @param e event object
         * @param newVal new value of the bound data point
         */
        onChange: function (e, newVal) {
            if (newVal) {
                vis.binds['rssfeed'].jsontemplate2.render(this.widgetID, this.view, this.data, this.style);
            }
        },

        /**
         * Renders the widget using the provided EJS template.
         *
         * @param widgetID - The ID of the widget element to be rendered.
         * @param view - The view object containing widget information.
         * @param data - Contains configuration data for the widget, including JSON object ID and template.
         *
         * The function retrieves data associated with the JSON object ID and additional data points.
         * It then uses EJS to render the template with the provided data and updates the widget's HTML content.
         * In case of an error during rendering, it escapes and formats the error message to display it in the widget.
         */
        render: function (widgetID, view, data) {
            const oiddata = data.json_oid ? JSON.parse(vis.states.attr(`${data.json_oid}.val`)) : {};
            const dpCount = data.rss_dpCount ? data.rss_dpCount : 1;
            const template = data.json_template ? data.json_template : '';
            const datapoints = [];

            for (let i = 1; i <= dpCount; i++) {
                if (data[`rss_dp${i}`]) {
                    datapoints[data[`rss_dp${i}`]] = vis.states.attr(`${data[`rss_dp${i}`]}.val`);
                }
            }
            let text = '';
            try {
                text = ejs.render(template, { widgetID: widgetID, data: oiddata, dp: datapoints });
            } catch (e) {
                text = vis.binds['rssfeed'].escapeHTML(e.message).replace(/(?:\r\n|\r|\n)/g, '<br>');
                text = text.replace(/ /gm, '&nbsp;');
                text = `<code style="color:red;">${text}</code>`;
            }
            $(`#${widgetID}`).html(text);
        },
    },

    jsontemplate3: {
        /**
         * Initializes and creates a JSON template widget.
         *
         * @param widgetID - The ID of the widget element.
         * @param view - The view object containing widget information.
         * @param data - Contains configuration data for the widget, including JSON object ID and template.
         * @param style - Style settings for the widget.       *
         * The function checks for the widget element by its ID. If not found, it retries after a delay.
         * It parses the JSON data from the specified object ID, processes additional data points,
         * and binds states if necessary. It then renders the widget using the EJS template with
         * the provided data and style.
         
        Testtemplate:
         
            <%
         
            debugger;
            req = await sendToAsync("admin.0","selectSendTo");
            console.log(JSON.stringify(req));
            %>
            <%- JSON.stringify(req) %>
            <%
            async function sendToAsync(instance, command, sendData) {
                return new Promise((resolve, reject) => {
                    try {
                        vis.conn.sendTo(instance, command, sendData, function (receiveData) {
                            resolve(receiveData);
                        });
                    } catch (error) {
                        reject(error);
                    }
                });
            }
            %>
         */
        createWidget: function (widgetID, view, data, style) {
            const $div = $(`#${widgetID}`);
            // if nothing found => wait
            if (!$div.length) {
                return setTimeout(function () {
                    vis.binds['rssfeed'].jsontemplate3.createWidget(widgetID, view, data, style);
                }, 100);
            }
            const bound = [];
            // const oiddata = data.json_oid ? JSON.parse(vis.states.attr(`${data.json_oid}.val`)) : {};
            // const template = data.json_template ? data.json_template : '';
            if (data.json_oid) {
                bound.push(data.json_oid);
            }

            const dpCount = data.rss_dpCount ? data.rss_dpCount : 1;
            const datapoints = [];

            for (let i = 1; i <= dpCount; i++) {
                if (data[`rss_dp${i}`]) {
                    datapoints[data[`rss_dp${i}`]] = vis.states.attr(`${data[`rss_dp${i}`]}.val`);
                    bound.push(data[`rss_dp${i}`]);
                }
            }

            if (bound) {
                if (!vis.editMode) {
                    vis.binds['rssfeed'].bindStates(
                        $div,
                        bound,
                        vis.binds['rssfeed'].jsontemplate3.onChange.bind({
                            widgetID: widgetID,
                            view: view,
                            data: data,
                            style: style,
                        }),
                    );
                }
            }
            this.render(widgetID, view, data);
            // let text = '';
            // try {
            //     text = ejs.render(template, { widgetID: widgetID, data: oiddata, dp: datapoints });
            // } catch (e) {
            //     text = vis.binds['rssfeed'].escapeHTML(e.message).replace(/(?:\r\n|\r|\n)/g, '<br>');
            //     text = text.replace(/ /gm, '&nbsp;');
            //     text = `<code style="color:red;">${text}</code>`;
            // }
            // $(`#${widgetID}`).html(text);
        },

        /**
         * Will be called if the value of the bound data point changes.
         *
         * @param e event object
         * @param newVal new value of the bound data point
         */
        onChange: function (e, newVal) {
            if (newVal) {
                vis.binds['rssfeed'].jsontemplate3.render(this.widgetID, this.view, this.data, this.style);
            }
        },

        /**
         * Renders the widget using the provided EJS template.
         *
         * @param widgetID - The ID of the widget element to be rendered.
         * @param view - The view object containing widget information.
         * @param data - Contains configuration data for the widget, including JSON object ID and template.
         *
         * The function retrieves data associated with the JSON object ID and additional data points.
         * It then uses EJS to render the template with the provided data and updates the widget's HTML content.
         * In case of an error during rendering, it escapes and formats the error message to display it in the widget.
         */
        render: async function (widgetID, view, data) {
            const oiddata = data.json_oid ? JSON.parse(vis.states.attr(`${data.json_oid}.val`)) : {};
            const dpCount = data.rss_dpCount ? data.rss_dpCount : 1;
            const template = data.json_template ? data.json_template : '';
            const datapoints = [];

            for (let i = 1; i <= dpCount; i++) {
                if (data[`rss_dp${i}`]) {
                    datapoints[data[`rss_dp${i}`]] = vis.states.attr(`${data[`rss_dp${i}`]}.val`);
                }
            }
            let text = '';
            try {
                text = await ejs.render(
                    template,
                    { widgetID: widgetID, data: oiddata, dp: datapoints },
                    { async: true },
                );
            } catch (e) {
                text = vis.binds['rssfeed'].escapeHTML(e.message).replace(/(?:\r\n|\r|\n)/g, '<br>');
                text = text.replace(/ /gm, '&nbsp;');
                text = `<code style="color:red;">${text}</code>`;
            }
            $(`#${widgetID}`).html(text);
        },
    },
    metahelper: {
        /**
         * Creates the content of the meta helper widget.
         *
         * @param widgetID - the id of the widget
         * @param view - the view object
         * @param data - the data object
         * @param style - the style object
         *
         * The function waits until the widget HTML element is available and creates its content.
         * It retrieves data associated with the JSON object ID and additional data points.
         * It then uses this data to create a table containing the meta information of the feed.
         * Finally, it updates the widget's HTML content with the rendered table.
         */
        createWidget: function (widgetID, view, data, style) {
            const $div = $(`#${widgetID}`);
            // if nothing found => wait
            if (!$div.length) {
                return setTimeout(function () {
                    vis.binds['rssfeed'].metahelper.createWidget(widgetID, view, data, style);
                }, 100);
            }
            const rss = data.rss_oid ? JSON.parse(vis.states.attr(`${data.rss_oid}.val`)) : {};

            /**
             * This function is used as a state change callback for the data point binding.
             * It is called whenever the value of the bound data point changes.
             * If the new value is truthy, it recreates the widget content.
             *
             * @param e - the event object
             * @param newVal - the new value of the bound data point
             */
            function onChange(e, newVal) {
                if (newVal) {
                    vis.binds['rssfeed'].metahelper.createWidget(widgetID, view, data, style);
                }
            }

            if (data.rss_oid) {
                if (!vis.editMode) {
                    vis.binds['rssfeed'].bindStates($div, [data.rss_oid], onChange);
                }
            }

            let text = '';

            text += '<style> \n';
            text += `#${widgetID} .rssfeed th {\n`;
            text += '   white-space: nowrap;\n';
            text += '   text-align: left;\n';
            text += '   vertical-align: top;\n';
            text += '} \n';
            text += '</style> \n';

            text += '<table class="rssfeed attributes">';
            text += `<tr><th>meta.title</th><td>${rss.meta.title}</td></tr>`;
            text += `<tr><th>meta.description</th><td>${rss.meta.description}</td></tr>`;
            text += `<tr><th>meta.link</th><td>${rss.meta.link}</td></tr>`;
            text += `<tr><th>meta.xmlurl</th><td>${rss.meta.xmlurl}</td></tr>`;
            text += `<tr><th>meta.date</th><td>${rss.meta.date}</td></tr>`;
            text += `<tr><th>meta.pubdate</th><td>${rss.meta.pubdate}</td></tr>`;
            text += `<tr><th>meta.author</th><td>${rss.meta.author}</td></tr>`;
            text += `<tr><th>meta.language</th><td>${rss.meta.language}</td></tr>`;
            text += `<tr><th>meta.image.url</th><td>${rss.meta.image.url}</td></tr>`;
            text += `<tr><th>meta.image.title</th><td>${rss.meta.image.title}</td></tr>`;
            text += `<tr><th>meta.favicon</th><td>${rss.meta.favicon}</td></tr>`;
            text += `<tr><th>meta.copyright</th><td>${rss.meta.copyright}</td></tr>`;
            text += `<tr><th>meta.generator</th><td>${rss.meta.generator}</td></tr>`;
            text += `<tr><th>meta.categories</th><td>${rss.meta.categories.toString()}</td></tr>`;
            text += '</table>';

            $(`#${widgetID}`).html(text);
        },
    },
    articlehelper2: {
        /**
         * This function creates a widget that displays the properties of an RSS feed article.
         * It is called from the vis.binds['rssfeed'].articlehelper2.createWidget function.
         * It is used as a state change callback for the data point binding.
         * It is called whenever the value of the bound data point changes.
         * If the new value is truthy, it recreates the widget content.
         *
         * @param widgetID - the id of the widget
         * @param view - the vis.view object
         * @param data - the vis.data object
         * @param style - the vis.style object
         */
        createWidget: function (widgetID, view, data, style) {
            const $div = $(`#${widgetID}`);
            // if nothing found => wait
            if (!$div.length) {
                return setTimeout(function () {
                    vis.binds['rssfeed'].articlehelper2.createWidget(widgetID, view, data, style);
                }, 100);
            }
            const rss = data.rss_oid ? JSON.parse(vis.states.attr(`${data.rss_oid}.val`)) : {};
            const prefix = data.rss_prefix ? data.rss_prefix : 'item';
            let article = data.rss_article ? data.rss_article : 1;
            article = article > 0 ? article : 1;

            /**
             * State change callback for data point binding.
             * If the new value is truthy, recreate the widget content.
             *
             * @param e - the event object
             * @param newVal - the new value of the bound state
             */
            function onChange(e, newVal) {
                if (newVal) {
                    vis.binds['rssfeed'].articlehelper2.createWidget(widgetID, view, data, style);
                }
            }

            if (data.rss_oid) {
                if (!vis.editMode) {
                    vis.binds['rssfeed'].bindStates($div, [data.rss_oid], onChange);
                }
            }

            const item = rss.articles[article - 1];

            let text = '';

            if (item) {
                text += '<style> \n';
                text += `#${widgetID} .rssfeed th {\n`;
                text += '   white-space: nowrap;\n';
                text += '   text-align: left;\n';
                text += '   vertical-align: top;\n';
                text += '} \n';
                text += '</style> \n';

                text += '<table class="rssfeed attributes">';
                text += `<tr><th>${prefix}.title</th><td>${item.title}</td></tr>`;
                text += `<tr><th>${prefix}.description</th><td>${item.description}</td></tr>`;
                text += `<tr><th>${prefix}.summary</th><td>${item.summary}</td></tr>`;
                text += `<tr><th>${prefix}.link</th><td>${item.link}</td></tr>`;
                text += `<tr><th>${prefix}.origlink</th><td>${item.origlink}</td></tr>`;
                text += `<tr><th>${prefix}.permalink</th><td>${item.permalink}</td></tr>`;
                text += `<tr><th>${prefix}.date</th><td>${item.date}</td></tr>`;
                text += `<tr><th>${prefix}.pubdate</th><td>${item.pubdate}</td></tr>`;
                text += `<tr><th>${prefix}.author</th><td>${item.author}</td></tr>`;
                text += `<tr><th>${prefix}.guid</th><td>${item.guid}</td></tr>`;
                text += `<tr><th>${prefix}.comments</th><td>${item.comments}</td></tr>`;
                text += `<tr><th>${prefix}.image.url</th><td>${item.image.url}</td></tr>`;
                text += `<tr><th>${prefix}.image.title</th><td>${item.image.title}</td></tr>`;
                text += `<tr><th>${prefix}.categories</th><td>${item.categories}</td></tr>`;
                text += `<tr><th>${prefix}.source</th><td>${JSON.stringify(item.source)}</td></tr>`;
                text += `<tr><th>${prefix}.enclosures</th><td>${JSON.stringify(item.enclosures)}</td></tr>`;
                text += '</table>';
            } else {
                text += '<table class="rssfeed attributes">';
                text += `<tr><th>No Data. End of List of ${rss.articles.length} Articles</th></tr>`;
                text += '</table>';
            }

            $(`#${widgetID}`).html(text);
        },
    },
    /**
     * Check if any of the highlights is in the value.
     *
     * @param value - the value to be checked
     * @param highlights - semicolon separated list of highlights
     * @param [sep] - the separator to split the highlights
     * @returns true if any of the highlights is in the value
     */
    checkHighlite: function (value, highlights, sep) {
        sep = typeof sep !== 'undefined' ? sep : ';';
        const highlight = highlights.split(sep);
        return highlight.reduce(function (acc, cur) {
            if (cur == '') {
                return acc;
            }
            return acc || value.toLowerCase().indexOf(cur.toLowerCase()) >= 0;
        }, false);
    },
    /**
     * Bind states to an element.
     *
     * First unbind all previously bound states and then get the current values of the states.
     * Then subscribe to the states and bind the callback to the states.
     * Finally, update the states of the element.
     *
     * @param elem - the element to bind the states to
     * @param bound - the states to bind
     * @param change_callback - the callback to call if one of the states changes
     */
    bindStates: function (elem, bound, change_callback) {
        const $div = $(elem);
        const boundstates = $div.data('bound');
        if (boundstates) {
            for (let i = 0; i < boundstates.length; i++) {
                vis.states.unbind(boundstates[i], change_callback);
            }
        }
        $div.data('bound', null);
        $div.data('bindHandler', null);

        vis.conn.gettingStates = 0;
        vis.conn.getStates(
            bound,
            function (error, states) {
                vis.conn.subscribe(bound);
                $div.data('bound', bound);
                $div.data('bindHandler', change_callback);
                for (let i = 0; i < bound.length; i++) {
                    bound[i] = `${bound[i]}.val`;
                    vis.states.bind(bound[i], change_callback);
                }
                vis.updateStates(states);
            }.bind({ change_callback }),
        );
    },
    /**
     * Escapes HTML special characters in a given string.
     *
     * @param html - The string to escape.
     * @returns The escaped string.
     */
    escapeHTML: function (html) {
        let escapeEl = document.createElement('textarea');
        escapeEl.textContent = html;
        const ret = escapeEl.innerHTML;
        escapeEl = null;
        return ret;
    },
    /**
     * Shows a dialog for editing a template.
     *
     * @param widAttr - The attribute of the widget to edit.
     * @returns A object with two properties: 'input' and 'button'. 'input' is a string containing the HTML of a
     *      'textarea' element with id 'inspect_<widAttr>'. 'button' is an object with properties 'icon', 'text', 'title',
     *      'click'. 'click' is a function which is called when the button is clicked. The function shows a dialog with
     *      the 'textarea' element. The dialog has a 'save' and a 'cancel' button. The 'save' button saves the changes to
     *      the attribute and closes the dialog. The 'cancel' button just closes the dialog.
     */
    editEjs: function (widAttr) {
        const that = vis;
        const line = {
            input: `<textarea id="inspect_${widAttr}"></textarea>`,
        };

        line.button = {
            icon: 'ui-icon-note',
            text: false,
            title: _('Select color'),
            click: function (/*event*/) {
                const wdata = $(this).data('wdata');
                let data = {};
                if (that.config['dialog-edit-text']) {
                    data = JSON.parse(that.config['dialog-edit-text']);
                }
                ace.config.setModuleUrl('ace/mode/ejs', 'widgets/rssfeed/js/mode-ejs.js');
                const editor = ace.edit('dialog-edit-text-textarea');
                let changed = false;
                $('#dialog-edit-text')
                    .dialog({
                        autoOpen: true,
                        width: data.width || 800,
                        height: data.height || 600,
                        modal: true,
                        resize: function () {
                            editor.resize();
                        },
                        open: function (event) {
                            $(event.target).parent().find('.ui-dialog-titlebar-close .ui-button-text').html('');
                            $(this).parent().css({ 'z-index': 1000 });
                            if (data.top !== undefined) {
                                if (data.top >= 0) {
                                    $(this).parent().css({ top: data.top });
                                } else {
                                    $(this).parent().css({ top: 0 });
                                }
                            }
                            if (data.left !== undefined) {
                                if (data.left >= 0) {
                                    $(this).parent().css({ left: data.left });
                                } else {
                                    $(this).parent().css({ left: 0 });
                                }
                            }
                            editor.getSession().setMode('ace/mode/ejs');
                            editor.setOptions({
                                enableBasicAutocompletion: true,
                                enableLiveAutocompletion: true,
                            });
                            editor.$blockScrolling = Infinity;
                            editor.getSession().setUseWrapMode(true);
                            editor.setValue($(`#inspect_${wdata.attr}`).val());
                            editor.navigateFileEnd();
                            editor.focus();
                            editor.getSession().on('change', function () {
                                changed = true;
                            });
                        },
                        beforeClose: function () {
                            const $parent = $('#dialog-edit-text').parent();
                            const pos = $parent.position();
                            that.editSaveConfig(
                                'dialog-edit-text',
                                JSON.stringify({
                                    top: pos.top > 0 ? pos.top : 0,
                                    left: pos.left > 0 ? pos.left : 0,
                                    width: $parent.width(),
                                    height: $parent.height() + 9,
                                }),
                            );

                            if (changed) {
                                if (!window.confirm(_('Changes are not saved!. Continue?'))) {
                                    return false;
                                }
                            }
                        },
                        buttons: [
                            {
                                text: _('Ok'),
                                click: function () {
                                    $(`#inspect_${wdata.attr}`).val(editor.getValue()).trigger('change');
                                    changed = false;
                                    $(this).dialog('close');
                                },
                            },
                            {
                                text: _('Cancel'),
                                click: function () {
                                    $(this).dialog('close');
                                },
                            },
                        ],
                    })
                    .show();
            },
        };
        return line;
    },
};

vis.binds['rssfeed'].showVersion();

/* remember for strip tag function
str='this string has <i>html</i> code i want to <b>remove</b><br>Link Number 1 -><a href="http://www.bbc.co.uk">BBC</a> Link Number 1<br><p>Now back to normal text and stuff</p>
';
str=str.replace(/<br>/gi, "\n");
str=str.replace(/<p.*>/gi, "\n");
str=str.replace(/<a.*href="(.*?)".*>(.*?)<\/a>/gi, " $2 (Link->$1) ");
str=str.replace(/<(?:.|\s)*?>/g, "");
*/

/*
Remember JSON Path finder https://github.com/joebeachjoebeach/json-path-finder
Remember JSON Formatter https://github.com/mohsen1/json-formatter-js

*/
