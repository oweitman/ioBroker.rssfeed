/* xeslint-disable no-var */
/* xeslint-disable space-before-function-paren */
/*
    ioBroker.vis rssfeed Widget-Set

    version: "2.8.1"

    Copyright 2020-2023 oweitman oweitman@gmx.de
*/
"use strict";
/* jshint -W069 */
/* globals $,systemDictionary,vis,ejs,ace,_,Proxy */

// add translations for edit mode
fetch("widgets/rssfeed/js/words.js")
    .then(response => response.text())
    .then(script => {
        let translation = script.substring(script.indexOf("{"), script.length);
        translation = translation.substring(0, translation.lastIndexOf(";"));
        $.extend(systemDictionary, JSON.parse(translation));
    })
    .catch(e => console.error("Cannot load translations for RSS feed: " + e));

// this code can be placed directly in rssfeed.html
vis.binds["rssfeed"] = {
    version: "2.9.2",
    showVersion: function () {
        if (vis.binds["rssfeed"].version) {
            console.log("Version rssfeed: " + vis.binds["rssfeed"].version);
            vis.binds["rssfeed"].version = null;
        }
    },
    rssfeedmultiwidget2: {
        createWidget: function (widgetID, view, data, style) {

            const $div = $("#" + widgetID);
            // if nothing found => wait
            if (!$div.length) {
                return setTimeout(function () {
                    vis.binds["rssfeed"].rssfeedmultiwidget2.createWidget(widgetID, view, data, style);
                }, 100);
            }

            const feedCount = data.rss_feedCount ? data.rss_feedCount : 1;
            const dpCount = data.rss_dpCount ? data.rss_dpCount : 1;
            const bound = [];

            for (let i1 = 1; i1 <= dpCount; i1++) {
                if (data["rss_dp" + i1]) {
                    bound.push(data["rss_dp" + i1]);
                    console.debug("bound");
                }
            }
            for (let i = 1; i <= feedCount; i++) {
                const rss = data["rss_oid" + i] ? JSON.parse(vis.states.attr(data["rss_oid" + i] + ".val")) : {};
                if (!Object.prototype.hasOwnProperty.call(rss, "articles")) continue;
                bound.push(data["rss_oid" + i]);
            }
            const that = this;
            // eslint-disable-next-line no-unused-vars
            function onChange(e, newVal, oldVal) {
                if (newVal) that.render(widgetID, data);
            }
            if (bound.length > 0) {
                // eslint-disable-next-line no-constant-condition
                if (1 || !vis.editMode) {
                    vis.binds["rssfeed"].bindStates($div, bound, onChange);
                }
            }
            this.render(widgetID, data, style);
        },
        render: function (widgetID, data, style) {

            const articles = [];
            const datapoints = [];
            const feedCount = data.rss_feedCount ? data.rss_feedCount : 1;
            const dpCount = data.rss_dpCount ? data.rss_dpCount : 1;

            for (let i1 = 1; i1 <= dpCount; i1++) {
                if (data["rss_dp" + i1]) {
                    datapoints[data["rss_dp" + i1]] = vis.states.attr(data["rss_dp" + i1] + ".val");
                }
            }

            const defaulttemplate = `
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
<% articles.forEach(function(item){ %>
    <p><%- item.meta_name || item.meta_title || '' %></p>
    <p><small><%- vis.formatDate(item.pubdate, "TT.MM.JJJJ SS:mm") %></small></p>
    <h3><%- item.title %></h3>
    <p><%- item.description %></p>
    <div style="clear:both;" />
<% }); %>
                            `;
            const template = (data["rss_template"] ? (data["rss_template"].trim() ? data["rss_template"].trim() : defaulttemplate) : defaulttemplate);

            for (let i = 1; i <= feedCount; i++) {
                const rss = data["rss_oid" + i] ? JSON.parse(vis.states.attr(data["rss_oid" + i] + ".val")) : {};
                if (!Object.prototype.hasOwnProperty.call(rss, "articles")) continue;

                const filter = data["rss_filter" + i] ? data["rss_filter" + i] : "";
                let maxarticles = data["rss_maxarticles" + i] ? data["rss_maxarticles" + i] : 999;
                maxarticles = maxarticles > 0 ? maxarticles : 1;
                const name = data["rss_name" + i] ? data["rss_name" + i] : "";

                if (rss && rss.articles && rss.articles.length > maxarticles) rss.articles = rss.articles.slice(0, maxarticles);

                if (filter != "") {
                    rss.articles = rss.articles.filter((item) => {
                        return vis.binds["rssfeed"].checkHighlite(item.title + item.description + item.categories.toString(), filter);
                    });
                }

                rss.articles = rss.articles.map((item) => {
                    item["meta_title"] = rss.meta.title;
                    item["meta_description"] = rss.meta.description;
                    item["meta_name"] = name;
                    return item;
                });
                articles.push(rss.articles);
            }

            let collect = [];
            articles.forEach(function (item) {
                collect = collect.concat(item);
            }
            );

            collect.sort(function (a, b) {
                // Turn your strings into dates, and then subtract them
                // to get a value that is either negative, positive, or zero.
                return new Date(b.date) - new Date(a.date);
            });
            const meta = new Proxy({}, {
                get(target, name) {
                    if (name == "title" || name == "description") {
                        return "meta." + name + " is not available please use RSS Feed widget. Read the widget help";
                    } else {
                        return "meta is not available please use RSS Feed widget. Read the widget help.";
                    }
                }
            });

            let text = "";
            try {
                if (collect.length == 0) {
                    text = "articles is empty, please select a RSS feed datapoint.";
                } else {
                    text = ejs.render(template, { "articles": collect, "meta": meta, "dp": datapoints, widgetid: widgetID, style: style });
                }
            }
            catch (e) {
                text = vis.binds["rssfeed"].escapeHTML(e.message).replace(/(?:\r\n|\r|\n)/g, "<br>");
                text = text.replace(/ /gm, "&nbsp;");
                text = '<code style="color:red;">' + text + "</code>";
            }

            $("#" + widgetID).html(text);
        }
    },
    marquee4: {
        createWidget: function (widgetID, view, data, style) {
            const $div = $("#" + widgetID);
            // if nothing found => wait
            if (!$div.length) {
                return setTimeout(function () {
                    vis.binds["rssfeed"].marquee4.createWidget(widgetID, view, data, style);
                }, 100);
            }

            const bound = [];
            const feedCount = data.rss_feedCount ? data.rss_feedCount : 1;
            const pauseonhover = (data.rss_pauseonhover) ? true : data.rss_pauseonhover;
            const frontcolor = style.color ? style.color : undefined;
            const backcolor = style["background-color"] ? style["background-color"] : undefined;

            for (let i = 1; i <= feedCount; i++) {
                const rss = data["rss_oid" + i] ? JSON.parse(vis.states.attr(data["rss_oid" + i] + ".val")) : {};
                if (!Object.prototype.hasOwnProperty.call(rss, "articles")) continue;
                bound.push(data["rss_oid" + i]);
            }
            const that = this;
            // eslint-disable-next-line no-unused-vars
            function onChange(e, newVal, oldVal) {
                if (newVal) that.render(widgetID, data);
            }

            if (bound.length > 0) {
                // eslint-disable-next-line no-constant-condition
                if (1 || !vis.editMode) {
                    console.debug("bound");
                    vis.binds["rssfeed"].bindStates($div, bound, onChange);
                }
            }

            let text = "";
            text += "<style> \n";
            text += "#" + widgetID + " .marquee {\n";
            text += "    max-width: 100vw; /* iOS braucht das */\n";
            text += "    white-space: nowrap;\n";
            text += "    overflow: hidden;\n";
            if (backcolor) text += "    background-color: " + backcolor + "; /* Hintergrundfarbe des Lauftextes. Auskommentieren, um Transparent zu erhalten */\n";
            text += "    font-size:20px;\n";
            text += "}\n";
            text += "#" + widgetID + " .marquee span {\n";
            text += "    display: inline-block;\n";
            text += "    padding-left: 100%;\n";
            text += "    animation: " + widgetID + "marquee 100s linear infinite;\n";
            if (frontcolor) text += "    color: " + frontcolor + "; /* Textfarbe des Lauftextes */\n";
            text += "}\n";
            if (pauseonhover) {
                text += "/* Optional: mouseover (oder Tipp auf dem Touchscreen) pausiert die Laufschrift */\n";
                text += "#" + widgetID + " .marquee span:hover {\n";
                text += "    animation-play-state: paused \n";
                text += "}\n";
            }
            text += "/* Make it move */\n";
            text += "@keyframes " + widgetID + "marquee {\n";
            text += "    0%   { transform: translateX(0); }\n";
            text += "    100% { transform: translateX(-100%); }\n";
            text += "}\n";
            text += "#" + widgetID + " a {\n";
            text += "    text-decoration: none;";
            text += "    color: inherit;";
            text += "}\n";
            text += "</style> \n";
            text += '<div class="' + widgetID + ' marquee"><span>test test test</span></div>';

            $("#" + widgetID).html(text);
            for (const attr in style) {
                if ("left,top,width,height".indexOf(attr) < 0 && style[attr] != "") $("#" + widgetID + " span").css(attr, style[attr]);
            }
            this.render(widgetID, data);
        },
        render: function (widgetID, data) {
            const articles = [];
            const feedCount = data.rss_feedCount ? data.rss_feedCount : 1;
            const rss_withtime = (data.rss_withtime) ? data.rss_withtime : false;
            const rss_withdate = (data.rss_withdate) ? data.rss_withdate : false;
            const rss_withyear = (data.rss_withyear) ? data.rss_withyear : false;
            const rss_withname = (data.rss_withname) ? data.rss_withname : false;
            const divider = data.rss_divider ? data.rss_divider : "+++";
            const link = (data.rss_link) ? data.rss_link : false;
            const speed = data.rss_speed ? data.rss_speed : 6;

            for (let i = 1; i <= feedCount; i++) {
                const filter = data["rss_filter" + i] ? data["rss_filter" + i] : "";
                const rss = data["rss_oid" + i] ? JSON.parse(vis.states.attr(data["rss_oid" + i] + ".val")) : {};
                if (!Object.prototype.hasOwnProperty.call(rss, "articles")) continue;

                let maxarticles = data["rss_maxarticles" + i] ? data["rss_maxarticles" + i] : 999;
                maxarticles = maxarticles > 0 ? maxarticles : 1;
                const name = data["rss_name" + i] ? data["rss_name" + i] : "";
                if (filter) {
                    rss.articles = rss.articles.filter((item) => {
                        return vis.binds["rssfeed"].checkHighlite(item.title + item.description + item.categories.toString(), filter);
                    });
                }
                if (rss && rss.articles && rss.articles.length > maxarticles) rss.articles = rss.articles.slice(0, maxarticles);
                rss.articles = rss.articles.map((item) => {
                    item["meta_title"] = rss.meta.title;
                    item["meta_description"] = rss.meta.description;
                    item["meta_name"] = name;
                    item["meta_image"] = (rss.meta.image.url ? rss.meta.image.url : "");

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

            let titles = "";
            let titleslength = 0;
            if (collect && collect.length > 0) {
                titles = collect.reduce(function (t, item) {
                    let time = "";
                    titleslength += item.title.length;
                    if (rss_withtime) time = vis.formatDate(item.date, "hh:mm");
                    if (rss_withdate) time = vis.formatDate(item.date, "DD.MM/hh:mm");
                    if (rss_withyear) time = vis.formatDate(item.date, "DD.MM.YY/hh:mm");
                    if (link) {
                        t += " " + divider + " " + time + " " + (rss_withname ? (item.meta_name || item.meta_title) + ": " : "") + '<a href="' + item.link + '" target="rssarticle">' + time + " " + item.title + "</a>";
                    } else {
                        t += " " + divider + " " + time + " " + (rss_withname ? (item.meta_name || item.meta_title) + ": " : "") + item.title;
                    }
                    return t;
                }, titles);
                const duration = (titleslength / speed).toFixed();
                $("#" + widgetID + " .marquee span").css("animation-duration", duration + "s");
                $("#" + widgetID + " .marquee span").html(titles);
            }
        }
    },
    rssfeedwidget2: {
        createWidget: function (widgetID, view, data, style) {

            const $div = $("#" + widgetID);
            // if nothing found => wait
            if (!$div.length) {
                return setTimeout(function () {
                    vis.binds["rssfeed"].rssfeedwidget2.createWidget(widgetID, view, data, style);
                }, 100);
            }
            const rss = data.rss_oid ? JSON.parse(vis.states.attr(data.rss_oid + ".val")) : {};
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
            const filter = data.rss_filter ? data.rss_filter : "";
            let maxarticles = data.rss_maxarticles ? data.rss_maxarticles : 999;
            maxarticles = maxarticles > 0 ? maxarticles : 1;
            if (rss && rss.articles && rss.articles.length > maxarticles) rss.articles = rss.articles.slice(0, maxarticles);

            if (filter != "") {
                rss.articles = rss.articles.filter(function (item) {
                    return vis.binds["rssfeed"].checkHighlite(item.title + item.description + item.categories.toString(), filter);
                });
            }

            // eslint-disable-next-line no-unused-vars
            function onChange(e, newVal, oldVal) {
                if (newVal) vis.binds["rssfeed"].rssfeedwidget2.createWidget(widgetID, view, data, style);
            }

            if (data.rss_oid) {
                // eslint-disable-next-line no-constant-condition
                if (1 || !vis.editMode) {
                    vis.binds["rssfeed"].bindStates($div, [data.rss_oid], onChange);
                }
            }

            let text = "";
            try {
                if (typeof rss.meta == "undefined") {
                    text = ejs.render(errortemplate, rss);
                } else {
                    text = ejs.render(template, { rss: rss, widgetid: widgetID, style: style });
                }
            }
            catch (e) {
                text = vis.binds["rssfeed"].escapeHTML(e.message).replace(/(?:\r\n|\r|\n)/g, "<br>");
                text = text.replace(/ /gm, "&nbsp;");
                text = '<code style="color:red;">' + text + "</code>";
            }

            $("#" + widgetID).html(text);
        },
    },
    jsontemplate2: {
        createWidget: function (widgetID, view, data, style) {

            const $div = $("#" + widgetID);
            // if nothing found => wait
            if (!$div.length) {
                return setTimeout(function () {
                    vis.binds["rssfeed"].jsontemplate2.createWidget(widgetID, view, data, style);
                }, 100);
            }
            const bound = [];
            const oiddata = data.json_oid ? JSON.parse(vis.states.attr(data.json_oid + ".val")) : {};
            const template = data.json_template ? data.json_template : "";
            if (data.json_oid) bound.push(data.json_oid);

            const dpCount = data.rss_dpCount ? data.rss_dpCount : 1;
            const datapoints = [];

            for (let i = 1; i <= dpCount; i++) {
                if (data["rss_dp" + i]) {
                    datapoints[data["rss_dp" + i]] = vis.states.attr(data["rss_dp" + i] + ".val");
                    bound.push(data["rss_dp" + i]);
                }
            }


            // eslint-disable-next-line no-unused-vars
            function onChange(e, newVal, oldVal) {
                if (newVal) vis.binds["rssfeed"].jsontemplate2.createWidget(widgetID, view, data, style);
            }

            if (bound) {
                // eslint-disable-next-line no-constant-condition
                if (1 || !vis.editMode) {
                    vis.binds["rssfeed"].bindStates($div, bound, vis.binds["rssfeed"].jsontemplate2.onChange.bind({ widgetID: widgetID, view: view, data: data, style: style }));
                }
            }
            let text = "";
            try {
                text = ejs.render(template, { "widgetID": widgetID, "data": oiddata, "dp": datapoints });
            }
            catch (e) {
                text = vis.binds["rssfeed"].escapeHTML(e.message).replace(/(?:\r\n|\r|\n)/g, "<br>");
                text = text.replace(/ /gm, "&nbsp;");
                text = '<code style="color:red;">' + text + "</code>";
            }
            $("#" + widgetID).html(text);
        },
        // eslint-disable-next-line no-unused-vars
        onChange: function (e, newVal, oldVal) {
            if (newVal) vis.binds["rssfeed"].jsontemplate2.render(this.widgetID, this.view, this.data, this.style);
        },
        // eslint-disable-next-line no-unused-vars
        render: function (widgetID, view, data, style) {
            const oiddata = data.json_oid ? JSON.parse(vis.states.attr(data.json_oid + ".val")) : {};
            const dpCount = data.rss_dpCount ? data.rss_dpCount : 1;
            const template = data.json_template ? data.json_template : "";
            const datapoints = [];

            for (let i = 1; i <= dpCount; i++) {
                if (data["rss_dp" + i]) {
                    datapoints[data["rss_dp" + i]] = vis.states.attr(data["rss_dp" + i] + ".val");
                }
            }
            let text = "";
            try {
                text = ejs.render(template, { "widgetID": widgetID, "data": oiddata, "dp": datapoints });
            }
            catch (e) {
                text = vis.binds["rssfeed"].escapeHTML(e.message).replace(/(?:\r\n|\r|\n)/g, "<br>");
                text = text.replace(/ /gm, "&nbsp;");
                text = '<code style="color:red;">' + text + "</code>";
            }
            $("#" + widgetID).html(text);
        }
    },
    metahelper: {
        createWidget: function (widgetID, view, data, style) {

            const $div = $("#" + widgetID);
            // if nothing found => wait
            if (!$div.length) {
                return setTimeout(function () {
                    vis.binds["rssfeed"].metahelper.createWidget(widgetID, view, data, style);
                }, 100);
            }
            const rss = data.rss_oid ? JSON.parse(vis.states.attr(data.rss_oid + ".val")) : {};

            // eslint-disable-next-line no-unused-vars
            function onChange(e, newVal, oldVal) {
                if (newVal) vis.binds["rssfeed"].metahelper.createWidget(widgetID, view, data, style);
            }

            if (data.rss_oid) {
                // eslint-disable-next-line no-constant-condition
                if (1 || !vis.editMode) {
                    vis.binds["rssfeed"].bindStates($div, [data.rss_oid], onChange);
                }
            }

            let text = "";

            text += "<style> \n";
            text += "#" + widgetID + " .rssfeed th {\n";
            text += "   white-space: nowrap;\n";
            text += "   text-align: left;\n";
            text += "   vertical-align: top;\n";
            text += "} \n";
            text += "</style> \n";

            text += '<table class="rssfeed attributes">';
            text += "<tr><th>meta.title</th><td>" + rss.meta.title + "</td></tr>";
            text += "<tr><th>meta.description</th><td>" + rss.meta.description + "</td></tr>";
            text += "<tr><th>meta.link</th><td>" + rss.meta.link + "</td></tr>";
            text += "<tr><th>meta.xmlurl</th><td>" + rss.meta.xmlurl + "</td></tr>";
            text += "<tr><th>meta.date</th><td>" + rss.meta.date + "</td></tr>";
            text += "<tr><th>meta.pubdate</th><td>" + rss.meta.pubdate + "</td></tr>";
            text += "<tr><th>meta.author</th><td>" + rss.meta.author + "</td></tr>";
            text += "<tr><th>meta.language</th><td>" + rss.meta.language + "</td></tr>";
            text += "<tr><th>meta.image.url</th><td>" + rss.meta.image.url + "</td></tr>";
            text += "<tr><th>meta.image.title</th><td>" + rss.meta.image.title + "</td></tr>";
            text += "<tr><th>meta.favicon</th><td>" + rss.meta.favicon + "</td></tr>";
            text += "<tr><th>meta.copyright</th><td>" + rss.meta.copyright + "</td></tr>";
            text += "<tr><th>meta.generator</th><td>" + rss.meta.generator + "</td></tr>";
            text += "<tr><th>meta.categories</th><td>" + rss.meta.categories.toString() + "</td></tr>";
            text += "</table>";

            $("#" + widgetID).html(text);
        },
    },
    articlehelper2: {
        createWidget: function (widgetID, view, data, style) {

            const $div = $("#" + widgetID);
            // if nothing found => wait
            if (!$div.length) {
                return setTimeout(function () {
                    vis.binds["rssfeed"].articlehelper2.createWidget(widgetID, view, data, style);
                }, 100);
            }
            const rss = data.rss_oid ? JSON.parse(vis.states.attr(data.rss_oid + ".val")) : {};
            const prefix = data.rss_prefix ? data.rss_prefix : "item";
            let article = data.rss_article ? data.rss_article : 1;
            article = article > 0 ? article : 1;

            // eslint-disable-next-line no-unused-vars
            function onChange(e, newVal, oldVal) {
                if (newVal) vis.binds["rssfeed"].articlehelper2.createWidget(widgetID, view, data, style);
            }

            if (data.rss_oid) {
                // eslint-disable-next-line no-constant-condition
                if (1 || !vis.editMode) {
                    vis.binds["rssfeed"].bindStates($div, [data.rss_oid], onChange);
                }
            }

            const item = rss.articles[article - 1];

            let text = "";

            if (item) {

                text += "<style> \n";
                text += "#" + widgetID + " .rssfeed th {\n";
                text += "   white-space: nowrap;\n";
                text += "   text-align: left;\n";
                text += "   vertical-align: top;\n";
                text += "} \n";
                text += "</style> \n";

                text += '<table class="rssfeed attributes">';
                text += "<tr><th>" + prefix + ".title</th><td>" + item.title + "</td></tr>";
                text += "<tr><th>" + prefix + ".description</th><td>" + item.description + "</td></tr>";
                text += "<tr><th>" + prefix + ".summary</th><td>" + item.summary + "</td></tr>";
                text += "<tr><th>" + prefix + ".link</th><td>" + item.link + "</td></tr>";
                text += "<tr><th>" + prefix + ".origlink</th><td>" + item.origlink + "</td></tr>";
                text += "<tr><th>" + prefix + ".permalink</th><td>" + item.permalink + "</td></tr>";
                text += "<tr><th>" + prefix + ".date</th><td>" + item.date + "</td></tr>";
                text += "<tr><th>" + prefix + ".pubdate</th><td>" + item.pubdate + "</td></tr>";
                text += "<tr><th>" + prefix + ".author</th><td>" + item.author + "</td></tr>";
                text += "<tr><th>" + prefix + ".guid</th><td>" + item.guid + "</td></tr>";
                text += "<tr><th>" + prefix + ".comments</th><td>" + item.comments + "</td></tr>";
                text += "<tr><th>" + prefix + ".image.url</th><td>" + item.image.url + "</td></tr>";
                text += "<tr><th>" + prefix + ".image.title</th><td>" + item.image.title + "</td></tr>";
                text += "<tr><th>" + prefix + ".categories</th><td>" + item.categories + "</td></tr>";
                text += "<tr><th>" + prefix + ".source</th><td>" + JSON.stringify(item.source) + "</td></tr>";
                text += "<tr><th>" + prefix + ".enclosures</th><td>" + JSON.stringify(item.enclosures) + "</td></tr>";
                text += "</table>";
            } else {
                text += '<table class="rssfeed attributes">';
                text += "<tr><th>No Data. End of List of " + rss.articles.length + " Articles</th></tr>";
                text += "</table>";
            }


            $("#" + widgetID).html(text);
        },
    },
    checkHighlite: function (value, highlights, sep) {
        sep = typeof sep !== "undefined" ? sep : ";";
        const highlight = highlights.split(sep);
        return highlight.reduce(function (acc, cur) {
            if (cur == "") return acc;
            return acc || value.toLowerCase().indexOf(cur.toLowerCase()) >= 0;
        }, false);
    },
    bindStates: function (elem, bound, change_callback) {
        const $div = $(elem);
        const boundstates = $div.data("bound");
        if (boundstates) {
            for (let i = 0; i < boundstates.length; i++) {
                vis.states.unbind(boundstates[i], change_callback);
            }
        }
        $div.data("bound", null);
        $div.data("bindHandler", null);

        vis.conn.gettingStates = 0;
        vis.conn.getStates(bound, function (error, states) {
            vis.conn.subscribe(bound);
            $div.data("bound", bound);
            $div.data("bindHandler", change_callback);
            for (let i = 0; i < bound.length; i++) {
                bound[i] = bound[i] + ".val";
                vis.states.bind(bound[i], change_callback);
            }
            vis.updateStates(states);
        }.bind({ change_callback }));
    },
    escapeHTML: function (html) {
        let escapeEl = document.createElement("textarea");
        escapeEl.textContent = html;
        const ret = escapeEl.innerHTML;
        escapeEl = null;
        return ret;
    },
    editEjs: function (widAttr) {
        const that = vis;
        const line = {
            input: '<textarea id="inspect_' + widAttr + '"></textarea>'
        };

        line.button = {
            icon: "ui-icon-note",
            text: false,
            title: _("Select color"),
            click: function (/*event*/) {
                const wdata = $(this).data("wdata");
                let data = {};
                if (that.config["dialog-edit-text"]) {
                    data = JSON.parse(that.config["dialog-edit-text"]);
                }
                ace.config.setModuleUrl("ace/mode/ejs", "widgets/rssfeed/js/mode-ejs.js");
                const editor = ace.edit("dialog-edit-text-textarea");
                let changed = false;
                $("#dialog-edit-text").dialog({
                    autoOpen: true,
                    width: data.width || 800,
                    height: data.height || 600,
                    modal: true,
                    resize: function () {
                        editor.resize();
                    },
                    open: function (event) {
                        $(event.target).parent().find(".ui-dialog-titlebar-close .ui-button-text").html("");
                        $(this).parent().css({ "z-index": 1000 });
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
                        editor.getSession().setMode("ace/mode/ejs");
                        editor.setOptions({
                            enableBasicAutocompletion: true,
                            enableLiveAutocompletion: true
                        });
                        editor.$blockScrolling = Infinity;
                        editor.getSession().setUseWrapMode(true);
                        editor.setValue($("#inspect_" + wdata.attr).val());
                        editor.navigateFileEnd();
                        editor.focus();
                        editor.getSession().on("change", function () {
                            changed = true;
                        });
                    },
                    beforeClose: function () {
                        const $parent = $("#dialog-edit-text").parent();
                        const pos = $parent.position();
                        that.editSaveConfig("dialog-edit-text", JSON.stringify({
                            top: pos.top > 0 ? pos.top : 0,
                            left: pos.left > 0 ? pos.left : 0,
                            width: $parent.width(),
                            height: $parent.height() + 9
                        }));

                        if (changed) {
                            if (!window.confirm(_("Changes are not saved!. Continue?"))) {
                                return false;
                            }
                        }
                    },
                    buttons: [
                        {
                            text: _("Ok"),
                            click: function () {
                                $("#inspect_" + wdata.attr).val(editor.getValue()).trigger("change");
                                changed = false;
                                $(this).dialog("close");
                            }
                        },
                        {
                            text: _("Cancel"),
                            click: function () {
                                $(this).dialog("close");
                            }
                        }
                    ]
                }).show();
            }
        };
        return line;
    },

};

vis.binds["rssfeed"].showVersion();

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
