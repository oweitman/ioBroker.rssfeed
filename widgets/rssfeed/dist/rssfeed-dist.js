"use strict";
(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
    get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
  }) : x)(function(x) {
    if (typeof require !== "undefined") return require.apply(this, arguments);
    throw Error('Dynamic require of "' + x + '" is not supported');
  });
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
  var __commonJS = (cb, mod) => function __require2() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __async = (__this, __arguments, generator) => {
    return new Promise((resolve, reject) => {
      var fulfilled = (value) => {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      };
      var rejected = (value) => {
        try {
          step(generator.throw(value));
        } catch (e) {
          reject(e);
        }
      };
      var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
      step((generator = generator.apply(__this, __arguments)).next());
    });
  };

  // ../package.json
  var version;
  var init_package = __esm({
    "../package.json"() {
      version = "3.5.2";
    }
  });

  // rssfeed/js/rssfeed.js
  var require_rssfeed = __commonJS({
    "rssfeed/js/rssfeed.js"(exports) {
      "use strict";
      init_package();
      fetch("widgets/rssfeed/i18n/translations.json").then((res) => __async(exports, null, function* () {
        const i18n = yield res.json();
        $.extend(true, systemDictionary, i18n);
      }));
      vis.binds["rssfeed"] = {
        version,
        /**
         * Log the version of rssfeed and remove it.
         * Should be called from the main thread, as it logs to the console.
         */
        showVersion: function() {
          if (vis.binds["rssfeed"].version) {
            console.log(`Version rssfeed: ${vis.binds["rssfeed"].version}`);
            vis.binds["rssfeed"].version = null;
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
          createWidget: function(widgetID, view, data, style) {
            const $div = $(`#${widgetID}`);
            if (!$div.length) {
              return setTimeout(function() {
                vis.binds["rssfeed"].rssfeedmultiwidget3.createWidget(widgetID, view, data, style);
              }, 100);
            }
            const feedCount = data.rss_feedCount ? data.rss_feedCount : 1;
            const dpCount = data.rss_dpCount ? data.rss_dpCount : 1;
            const bound = [];
            for (let i1 = 1; i1 <= dpCount; i1++) {
              if (data[`rss_dp${i1}`]) {
                bound.push(data[`rss_dp${i1}`]);
                console.debug("bound");
              }
            }
            for (let i = 1; i <= feedCount; i++) {
              const rss = data[`rss_oid${i}`] ? JSON.parse(vis.states.attr(`${data[`rss_oid${i}`]}.val`)) : {};
              if (!Object.prototype.hasOwnProperty.call(rss, "articles")) {
                continue;
              }
              bound.push(data[`rss_oid${i}`]);
            }
            function onChange(e, newVal) {
              if (newVal) {
                vis.binds["rssfeed"].rssfeedmultiwidget3.render(widgetID, data);
              }
            }
            if (bound.length > 0) {
              if (!vis.editMode) {
                vis.binds["rssfeed"].bindStates($div, bound, onChange);
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
          render: function(widgetID, data, style) {
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
            const template = data["rss_template"] ? data["rss_template"].trim() ? data["rss_template"].trim() : defaulttemplate : defaulttemplate;
            for (let i = 1; i <= feedCount; i++) {
              const rss = data[`rss_oid${i}`] ? JSON.parse(vis.states.attr(`${data[`rss_oid${i}`]}.val`)) : {};
              if (!Object.prototype.hasOwnProperty.call(rss, "articles")) {
                continue;
              }
              const filter = data[`rss_filter${i}`] ? data[`rss_filter${i}`] : "";
              let maxarticles = data[`rss_maxarticles${i}`] ? data[`rss_maxarticles${i}`] : 999;
              maxarticles = maxarticles > 0 ? maxarticles : 1;
              const name = data[`rss_name${i}`] ? data[`rss_name${i}`] : "";
              if (rss && rss.articles && rss.articles.length > maxarticles) {
                rss.articles = rss.articles.slice(0, maxarticles);
              }
              if (filter != "") {
                rss.articles = rss.articles.filter((item) => {
                  return vis.binds["rssfeed"].checkHighlite(
                    item.title + item.description + item.categories.toString(),
                    filter
                  );
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
            articles.forEach(function(item) {
              collect = collect.concat(item);
            });
            collect.sort(function(a, b) {
              return new Date(b.date) - new Date(a.date);
            });
            const meta = new Proxy(
              {},
              {
                get(target, name) {
                  if (name == "title" || name == "description") {
                    return `meta.${name} is not available please use RSS Feed widget. Read the widget help`;
                  }
                  return "meta is not available please use RSS Feed widget. Read the widget help.";
                }
              }
            );
            let text = "";
            try {
              if (collect.length == 0) {
                text = "articles is empty, please select a RSS feed datapoint.";
              } else {
                text = ejs.render(template, {
                  rss: { articles: collect, meta },
                  dp: datapoints,
                  widgetid: widgetID,
                  style
                });
              }
            } catch (e) {
              text = vis.binds["rssfeed"].escapeHTML(e.message).replace(/(?:\r\n|\r|\n)/g, "<br>");
              text = text.replace(/ /gm, "&nbsp;");
              text = `<code style="color:red;">${text}</code>`;
            }
            $(`#${widgetID}`).html(text);
          }
        },
        marquee4: {
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
          createWidget: function(widgetID, view, data, style) {
            const $div = $(`#${widgetID}`);
            if (!$div.length) {
              return setTimeout(function() {
                vis.binds["rssfeed"].marquee4.createWidget(widgetID, view, data, style);
              }, 100);
            }
            const bound = [];
            const feedCount = data.rss_feedCount ? data.rss_feedCount : 1;
            const pauseonhover = data.rss_pauseonhover ? true : data.rss_pauseonhover;
            const frontcolor = style.color ? style.color : void 0;
            const backcolor = style["background-color"] ? style["background-color"] : void 0;
            for (let i = 1; i <= feedCount; i++) {
              const rss = data[`rss_oid${i}`] ? JSON.parse(vis.states.attr(`${data[`rss_oid${i}`]}.val`)) : {};
              if (!Object.prototype.hasOwnProperty.call(rss, "articles")) {
                continue;
              }
              bound.push(data[`rss_oid${i}`]);
            }
            function onChange(e, newVal) {
              if (newVal) {
                vis.binds["rssfeed"].marquee4.render(widgetID, data);
              }
            }
            if (bound.length > 0) {
              if (!vis.editMode) {
                console.debug("bound");
                vis.binds["rssfeed"].bindStates($div, bound, onChange);
              }
            }
            let text = "";
            text += "<style> \n";
            text += `#${widgetID} .marquee {
`;
            text += "    max-width: 100vw; /* iOS braucht das */\n";
            text += "    white-space: nowrap;\n";
            text += "    overflow: hidden;\n";
            if (backcolor) {
              text += `    background-color: ${backcolor}; /* Hintergrundfarbe des Lauftextes. Auskommentieren, um Transparent zu erhalten */
`;
            }
            text += "    font-size:20px;\n";
            text += "}\n";
            text += `#${widgetID} .marquee span {
`;
            text += "    display: inline-block;\n";
            text += "    padding-left: 100%;\n";
            text += `    animation: ${widgetID}marquee 100s linear infinite;
`;
            if (frontcolor) {
              text += `    color: ${frontcolor}; /* Textfarbe des Lauftextes */
`;
            }
            text += "}\n";
            if (pauseonhover) {
              text += "/* Optional: mouseover (oder Tipp auf dem Touchscreen) pausiert die Laufschrift */\n";
              text += `#${widgetID} .marquee span:hover {
`;
              text += "    animation-play-state: paused \n";
              text += "}\n";
            }
            text += "/* Make it move */\n";
            text += `@keyframes ${widgetID}marquee {
`;
            text += "    0%   { transform: translateX(0); }\n";
            text += "    100% { transform: translateX(-100%); }\n";
            text += "}\n";
            text += `#${widgetID} a {
`;
            text += "    text-decoration: none;";
            text += "    color: inherit;";
            text += "}\n";
            text += "</style> \n";
            text += `<div class="${widgetID} marquee"><span>test test test</span></div>`;
            $(`#${widgetID}`).html(text);
            for (const attr in style) {
              if ("left,top,width,height".indexOf(attr) < 0 && style[attr] != "") {
                $(`#${widgetID} span`).css(attr, style[attr]);
              }
            }
            this.render(widgetID, data);
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
          render: function(widgetID, data) {
            const articles = [];
            const feedCount = data.rss_feedCount ? data.rss_feedCount : 1;
            const rss_withtime = data.rss_withtime ? data.rss_withtime : false;
            const rss_withdate = data.rss_withdate ? data.rss_withdate : false;
            const rss_withyear = data.rss_withyear ? data.rss_withyear : false;
            const rss_withname = data.rss_withname ? data.rss_withname : false;
            const divider = data.rss_divider ? data.rss_divider : "+++";
            const link = data.rss_link ? data.rss_link : false;
            const speed = data.rss_speed ? data.rss_speed : 6;
            for (let i = 1; i <= feedCount; i++) {
              const filter = data[`rss_filter${i}`] ? data[`rss_filter${i}`] : "";
              const rss = data[`rss_oid${i}`] ? JSON.parse(vis.states.attr(`${data[`rss_oid${i}`]}.val`)) : {};
              if (!Object.prototype.hasOwnProperty.call(rss, "articles")) {
                continue;
              }
              let maxarticles = data[`rss_maxarticles${i}`] ? data[`rss_maxarticles${i}`] : 999;
              maxarticles = maxarticles > 0 ? maxarticles : 1;
              const name = data[`rss_name${i}`] ? data[`rss_name${i}`] : "";
              if (filter) {
                rss.articles = rss.articles.filter((item) => {
                  return vis.binds["rssfeed"].checkHighlite(
                    item.title + item.description + item.categories.toString(),
                    filter
                  );
                });
              }
              if (rss && rss.articles && rss.articles.length > maxarticles) {
                rss.articles = rss.articles.slice(0, maxarticles);
              }
              rss.articles = rss.articles.map((item) => {
                item["meta_title"] = rss.meta.title;
                item["meta_description"] = rss.meta.description;
                item["meta_name"] = name;
                item["meta_image"] = rss.meta.image.url ? rss.meta.image.url : "";
                return item;
              });
              articles.push(rss.articles);
            }
            let collect = [];
            articles.forEach(function(item) {
              collect = collect.concat(item);
            });
            collect.sort(function(a, b) {
              return new Date(b.date) - new Date(a.date);
            });
            let titles = "";
            let titleslength = 0;
            if (collect && collect.length > 0) {
              titles = collect.reduce(function(t, item) {
                let time = "";
                titleslength += item.title.length;
                if (rss_withtime) {
                  time = vis.formatDate(item.date, "hh:mm");
                }
                if (rss_withdate) {
                  time = vis.formatDate(item.date, "DD.MM/hh:mm");
                }
                if (rss_withyear) {
                  time = vis.formatDate(item.date, "DD.MM.YY/hh:mm");
                }
                if (link) {
                  t += ` ${divider} ${time} ${rss_withname ? `${item.meta_name || item.meta_title}: ` : ""}<a href="${item.link}" target="rssarticle">${time} ${item.title}</a>`;
                } else {
                  t += ` ${divider} ${time} ${rss_withname ? `${item.meta_name || item.meta_title}: ` : ""}${item.title}`;
                }
                return t;
              }, titles);
              const duration = (titleslength / speed).toFixed();
              $(`#${widgetID} .marquee span`).css("animation-duration", `${duration}s`);
              $(`#${widgetID} .marquee span`).html(titles);
            }
          }
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
          createWidget: function(widgetID, view, data, style) {
            const $div = $(`#${widgetID}`);
            if (!$div.length) {
              return setTimeout(function() {
                vis.binds["rssfeed"].marquee5.createWidget(widgetID, view, data, style);
              }, 100);
            }
            const bound = [];
            const feedCount = data.rss_feedCount ? data.rss_feedCount : 1;
            const pauseonhover = data.rss_pauseonhover ? true : data.rss_pauseonhover;
            const frontcolor = style.color ? style.color : void 0;
            const backcolor = style["background-color"] ? style["background-color"] : void 0;
            const opentype = data.rss_opentype ? data.rss_opentype : "none";
            for (let i = 1; i <= feedCount; i++) {
              const rss = data[`rss_oid${i}`] ? JSON.parse(vis.states.attr(`${data[`rss_oid${i}`]}.val`)) : {};
              if (!Object.prototype.hasOwnProperty.call(rss, "articles")) {
                continue;
              }
              bound.push(data[`rss_oid${i}`]);
            }
            function onChange(e, newVal) {
              if (newVal) {
                vis.binds["rssfeed"].marquee5.render(widgetID, data);
              }
            }
            if (bound.length > 0) {
              if (!vis.editMode) {
                console.debug("bound");
                vis.binds["rssfeed"].bindStates($div, bound, onChange);
              }
            }
            let text = "";
            text += "<style> \n";
            text += `#${widgetID} .marquee {
`;
            text += "    max-width: 100vw; /* iOS braucht das */\n";
            text += "    white-space: nowrap;\n";
            text += "    overflow: hidden;\n";
            if (backcolor) {
              text += `    background-color: ${backcolor}; /* Hintergrundfarbe des Lauftextes. Auskommentieren, um Transparent zu erhalten */
`;
            }
            text += "    font-size:20px;\n";
            text += "}\n";
            text += `#${widgetID} .marquee span {
`;
            text += "    display: inline-block;\n";
            text += "    padding-left: 100%;\n";
            text += `    animation: ${widgetID}marquee 100s linear infinite;
`;
            if (frontcolor) {
              text += `    color: ${frontcolor}; /* Textfarbe des Lauftextes */
`;
            }
            text += "}\n";
            if (pauseonhover) {
              text += "/* Optional: mouseover (oder Tipp auf dem Touchscreen) pausiert die Laufschrift */\n";
              text += `#${widgetID} .marquee span:hover {
`;
              text += "    animation-play-state: paused \n";
              text += "}\n";
            }
            text += "/* Make it move */\n";
            text += `@keyframes ${widgetID}marquee {
`;
            text += "    0%   { transform: translateX(0); }\n";
            text += "    100% { transform: translateX(-100%); }\n";
            text += "}\n";
            text += `#${widgetID} a {
`;
            text += "    text-decoration: none;";
            text += "    color: inherit;";
            text += "}\n";
            text += "</style> \n";
            text += `<div class="${widgetID} marquee"><span>test test test</span></div>`;
            if (opentype == "popup") {
              text += "<style> \n";
              text += `.${widgetID} .wrapper {
`;
              text += "    position: relative;";
              text += "    width: 100%;";
              text += "    height: 100%;";
              text += "}\n";
              text += `dialog.${widgetID} {
`;
              text += "    width: 90%;";
              text += "    height: 90%;";
              text += "    overflow: hidden;";
              text += "}\n";
              text += `iframe.${widgetID} {
`;
              text += "    position: absolute;";
              text += "    top: 0;";
              text += "    left: 0;";
              text += "    width: 100%;";
              text += "    height: 100%;";
              text += "}\n";
              text += `.${widgetID} .close {
`;
              text += "    position: absolute;";
              text += "    top: 8px;";
              text += "    right: 8px;";
              text += "    background-color: red;";
              text += "    color: #fff;";
              text += "    width: 30px;";
              text += "    height: 30px;";
              text += "    font-size: 1rem;";
              text += "    z-index: 999;";
              text += "}\n";
              text += "</style> \n";
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
              if ("left,top,width,height".indexOf(attr) < 0 && style[attr] != "") {
                $(`#${widgetID} span`).css(attr, style[attr]);
              }
            }
            this.render(widgetID, data);
          },
          dialog: function(el, event, widgetID, link) {
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
          render: function(widgetID, data) {
            const articles = [];
            const feedCount = data.rss_feedCount ? data.rss_feedCount : 1;
            const rss_withtime = data.rss_withtime ? data.rss_withtime : false;
            const rss_withdate = data.rss_withdate ? data.rss_withdate : false;
            const rss_withyear = data.rss_withyear ? data.rss_withyear : false;
            const rss_withname = data.rss_withname ? data.rss_withname : false;
            const divider = data.rss_divider ? data.rss_divider : "+++";
            const opentype = data.rss_opentype ? data.rss_opentype : "none";
            const speed = data.rss_speed ? data.rss_speed : 6;
            for (let i = 1; i <= feedCount; i++) {
              const filter = data[`rss_filter${i}`] ? data[`rss_filter${i}`] : "";
              const rss = data[`rss_oid${i}`] ? JSON.parse(vis.states.attr(`${data[`rss_oid${i}`]}.val`)) : {};
              if (!Object.prototype.hasOwnProperty.call(rss, "articles")) {
                continue;
              }
              let maxarticles = data[`rss_maxarticles${i}`] ? data[`rss_maxarticles${i}`] : 999;
              maxarticles = maxarticles > 0 ? maxarticles : 1;
              const name = data[`rss_name${i}`] ? data[`rss_name${i}`] : "";
              if (filter) {
                rss.articles = rss.articles.filter((item) => {
                  return vis.binds["rssfeed"].checkHighlite(
                    item.title + item.description + item.categories.toString(),
                    filter
                  );
                });
              }
              if (rss && rss.articles && rss.articles.length > maxarticles) {
                rss.articles = rss.articles.slice(0, maxarticles);
              }
              rss.articles = rss.articles.map((item) => {
                item["meta_title"] = rss.meta.title;
                item["meta_description"] = rss.meta.description;
                item["meta_name"] = name;
                item["meta_image"] = rss.meta.image.url ? rss.meta.image.url : "";
                return item;
              });
              articles.push(rss.articles);
            }
            let collect = [];
            articles.forEach(function(item) {
              collect = collect.concat(item);
            });
            collect.sort(function(a, b) {
              return new Date(b.date) - new Date(a.date);
            });
            let titles = "";
            let titleslength = 0;
            if (collect && collect.length > 0) {
              titles = collect.reduce(function(t, item) {
                let time = "";
                titleslength += item.title.length;
                if (rss_withtime) {
                  time = vis.formatDate(item.date, "hh:mm");
                }
                if (rss_withdate) {
                  time = vis.formatDate(item.date, "DD.MM/hh:mm");
                }
                if (rss_withyear) {
                  time = vis.formatDate(item.date, "DD.MM.YY/hh:mm");
                }
                if (opentype == "link") {
                  t += ` ${divider} ${time} ${rss_withname ? `${item.meta_name || item.meta_title}: ` : ""}<a href="${item.link}" target="rssarticle">${time} ${item.title}</a>`;
                } else if (opentype == "popup") {
                  t += ` ${divider} ${time} ${rss_withname ? `${item.meta_name || item.meta_title}: ` : ""}<a onclick="vis.binds.rssfeed.marquee5.dialog(this,event,'${widgetID}','${item.link}')">${time} ${item.title}</a>`;
                } else {
                  t += ` ${divider} ${time} ${rss_withname ? `${item.meta_name || item.meta_title}: ` : ""}${item.title}`;
                }
                return t;
              }, titles);
              const duration = (titleslength / speed).toFixed();
              $(`#${widgetID} .marquee span`).css("animation-duration", `${duration}s`);
              $(`#${widgetID} .marquee span`).html(titles);
            }
          }
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
          createWidget: function(widgetID, view, data, style) {
            const $div = $(`#${widgetID}`);
            if (!$div.length) {
              return setTimeout(function() {
                vis.binds["rssfeed"].rssfeedwidget2.createWidget(widgetID, view, data, style);
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
            const filter = data.rss_filter ? data.rss_filter : "";
            let maxarticles = data.rss_maxarticles ? data.rss_maxarticles : 999;
            maxarticles = maxarticles > 0 ? maxarticles : 1;
            if (rss && rss.articles && rss.articles.length > maxarticles) {
              rss.articles = rss.articles.slice(0, maxarticles);
            }
            if (filter != "") {
              rss.articles = rss.articles.filter(function(item) {
                return vis.binds["rssfeed"].checkHighlite(
                  item.title + item.description + item.categories.toString(),
                  filter
                );
              });
            }
            function onChange(e, newVal) {
              if (newVal) {
                vis.binds["rssfeed"].rssfeedwidget2.createWidget(widgetID, view, data, style);
              }
            }
            if (data.rss_oid) {
              if (!vis.editMode) {
                vis.binds["rssfeed"].bindStates($div, [data.rss_oid], onChange);
              }
            }
            let text = "";
            try {
              if (typeof rss.meta == "undefined") {
                text = ejs.render(errortemplate, rss);
              } else {
                text = ejs.render(template, { rss, widgetid: widgetID, style });
              }
            } catch (e) {
              text = vis.binds["rssfeed"].escapeHTML(e.message).replace(/(?:\r\n|\r|\n)/g, "<br>");
              text = text.replace(/ /gm, "&nbsp;");
              text = `<code style="color:red;">${text}</code>`;
            }
            $(`#${widgetID}`).html(text);
          }
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
          createWidget: function(widgetID, view, data, style) {
            const $div = $(`#${widgetID}`);
            if (!$div.length) {
              return setTimeout(function() {
                vis.binds["rssfeed"].jsontemplate2.createWidget(widgetID, view, data, style);
              }, 100);
            }
            const bound = [];
            const oiddata = data.json_oid ? JSON.parse(vis.states.attr(`${data.json_oid}.val`)) : {};
            const template = data.json_template ? data.json_template : "";
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
                vis.binds["rssfeed"].bindStates(
                  $div,
                  bound,
                  vis.binds["rssfeed"].jsontemplate2.onChange.bind({
                    widgetID,
                    view,
                    data,
                    style
                  })
                );
              }
            }
            let text = "";
            try {
              text = ejs.render(template, { widgetID, data: oiddata, dp: datapoints });
            } catch (e) {
              text = vis.binds["rssfeed"].escapeHTML(e.message).replace(/(?:\r\n|\r|\n)/g, "<br>");
              text = text.replace(/ /gm, "&nbsp;");
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
          onChange: function(e, newVal) {
            if (newVal) {
              vis.binds["rssfeed"].jsontemplate2.render(this.widgetID, this.view, this.data, this.style);
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
          render: function(widgetID, view, data) {
            const oiddata = data.json_oid ? JSON.parse(vis.states.attr(`${data.json_oid}.val`)) : {};
            const dpCount = data.rss_dpCount ? data.rss_dpCount : 1;
            const template = data.json_template ? data.json_template : "";
            const datapoints = [];
            for (let i = 1; i <= dpCount; i++) {
              if (data[`rss_dp${i}`]) {
                datapoints[data[`rss_dp${i}`]] = vis.states.attr(`${data[`rss_dp${i}`]}.val`);
              }
            }
            let text = "";
            try {
              text = ejs.render(template, { widgetID, data: oiddata, dp: datapoints });
            } catch (e) {
              text = vis.binds["rssfeed"].escapeHTML(e.message).replace(/(?:\r\n|\r|\n)/g, "<br>");
              text = text.replace(/ /gm, "&nbsp;");
              text = `<code style="color:red;">${text}</code>`;
            }
            $(`#${widgetID}`).html(text);
          }
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
          createWidget: function(widgetID, view, data, style) {
            const $div = $(`#${widgetID}`);
            if (!$div.length) {
              return setTimeout(function() {
                vis.binds["rssfeed"].jsontemplate3.createWidget(widgetID, view, data, style);
              }, 100);
            }
            const bound = [];
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
                vis.binds["rssfeed"].bindStates(
                  $div,
                  bound,
                  vis.binds["rssfeed"].jsontemplate3.onChange.bind({
                    widgetID,
                    view,
                    data,
                    style
                  })
                );
              }
            }
            this.render(widgetID, view, data);
          },
          /**
           * Will be called if the value of the bound data point changes.
           *
           * @param e event object
           * @param newVal new value of the bound data point
           */
          onChange: function(e, newVal) {
            if (newVal) {
              vis.binds["rssfeed"].jsontemplate3.render(this.widgetID, this.view, this.data, this.style);
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
          render: function(widgetID, view, data) {
            return __async(this, null, function* () {
              const oiddata = data.json_oid ? JSON.parse(vis.states.attr(`${data.json_oid}.val`)) : {};
              const dpCount = data.rss_dpCount ? data.rss_dpCount : 1;
              const template = data.json_template ? data.json_template : "";
              const datapoints = [];
              for (let i = 1; i <= dpCount; i++) {
                if (data[`rss_dp${i}`]) {
                  datapoints[data[`rss_dp${i}`]] = vis.states.attr(`${data[`rss_dp${i}`]}.val`);
                }
              }
              let text = "";
              try {
                text = yield ejs.render(
                  template,
                  { widgetID, data: oiddata, dp: datapoints },
                  { async: true }
                );
              } catch (e) {
                text = vis.binds["rssfeed"].escapeHTML(e.message).replace(/(?:\r\n|\r|\n)/g, "<br>");
                text = text.replace(/ /gm, "&nbsp;");
                text = `<code style="color:red;">${text}</code>`;
              }
              $(`#${widgetID}`).html(text);
            });
          }
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
          createWidget: function(widgetID, view, data, style) {
            const $div = $(`#${widgetID}`);
            if (!$div.length) {
              return setTimeout(function() {
                vis.binds["rssfeed"].metahelper.createWidget(widgetID, view, data, style);
              }, 100);
            }
            const rss = data.rss_oid ? JSON.parse(vis.states.attr(`${data.rss_oid}.val`)) : {};
            function onChange(e, newVal) {
              if (newVal) {
                vis.binds["rssfeed"].metahelper.createWidget(widgetID, view, data, style);
              }
            }
            if (data.rss_oid) {
              if (!vis.editMode) {
                vis.binds["rssfeed"].bindStates($div, [data.rss_oid], onChange);
              }
            }
            let text = "";
            text += "<style> \n";
            text += `#${widgetID} .rssfeed th {
`;
            text += "   white-space: nowrap;\n";
            text += "   text-align: left;\n";
            text += "   vertical-align: top;\n";
            text += "} \n";
            text += "</style> \n";
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
            text += "</table>";
            $(`#${widgetID}`).html(text);
          }
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
          createWidget: function(widgetID, view, data, style) {
            const $div = $(`#${widgetID}`);
            if (!$div.length) {
              return setTimeout(function() {
                vis.binds["rssfeed"].articlehelper2.createWidget(widgetID, view, data, style);
              }, 100);
            }
            const rss = data.rss_oid ? JSON.parse(vis.states.attr(`${data.rss_oid}.val`)) : {};
            const prefix = data.rss_prefix ? data.rss_prefix : "item";
            let article = data.rss_article ? data.rss_article : 1;
            article = article > 0 ? article : 1;
            function onChange(e, newVal) {
              if (newVal) {
                vis.binds["rssfeed"].articlehelper2.createWidget(widgetID, view, data, style);
              }
            }
            if (data.rss_oid) {
              if (!vis.editMode) {
                vis.binds["rssfeed"].bindStates($div, [data.rss_oid], onChange);
              }
            }
            const item = rss.articles[article - 1];
            let text = "";
            if (item) {
              text += "<style> \n";
              text += `#${widgetID} .rssfeed th {
`;
              text += "   white-space: nowrap;\n";
              text += "   text-align: left;\n";
              text += "   vertical-align: top;\n";
              text += "} \n";
              text += "</style> \n";
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
              text += "</table>";
            } else {
              text += '<table class="rssfeed attributes">';
              text += `<tr><th>No Data. End of List of ${rss.articles.length} Articles</th></tr>`;
              text += "</table>";
            }
            $(`#${widgetID}`).html(text);
          }
        },
        /**
         * Check if any of the highlights is in the value.
         *
         * @param value - the value to be checked
         * @param highlights - semicolon separated list of highlights
         * @param [sep] - the separator to split the highlights
         * @returns true if any of the highlights is in the value
         */
        checkHighlite: function(value, highlights, sep) {
          sep = typeof sep !== "undefined" ? sep : ";";
          const highlight = highlights.split(sep);
          return highlight.reduce(function(acc, cur) {
            if (cur == "") {
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
        bindStates: function(elem, bound, change_callback) {
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
          vis.conn.getStates(
            bound,
            function(error, states) {
              vis.conn.subscribe(bound);
              $div.data("bound", bound);
              $div.data("bindHandler", change_callback);
              for (let i = 0; i < bound.length; i++) {
                bound[i] = `${bound[i]}.val`;
                vis.states.bind(bound[i], change_callback);
              }
              vis.updateStates(states);
            }.bind({ change_callback })
          );
        },
        /**
         * Escapes HTML special characters in a given string.
         *
         * @param html - The string to escape.
         * @returns The escaped string.
         */
        escapeHTML: function(html) {
          let escapeEl = document.createElement("textarea");
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
        editEjs: function(widAttr) {
          const that = vis;
          const line = {
            input: `<textarea id="inspect_${widAttr}"></textarea>`
          };
          line.button = {
            icon: "ui-icon-note",
            text: false,
            title: _("Select color"),
            click: function() {
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
                resize: function() {
                  editor.resize();
                },
                open: function(event) {
                  $(event.target).parent().find(".ui-dialog-titlebar-close .ui-button-text").html("");
                  $(this).parent().css({ "z-index": 1e3 });
                  if (data.top !== void 0) {
                    if (data.top >= 0) {
                      $(this).parent().css({ top: data.top });
                    } else {
                      $(this).parent().css({ top: 0 });
                    }
                  }
                  if (data.left !== void 0) {
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
                  editor.setValue($(`#inspect_${wdata.attr}`).val());
                  editor.navigateFileEnd();
                  editor.focus();
                  editor.getSession().on("change", function() {
                    changed = true;
                  });
                },
                beforeClose: function() {
                  const $parent = $("#dialog-edit-text").parent();
                  const pos = $parent.position();
                  that.editSaveConfig(
                    "dialog-edit-text",
                    JSON.stringify({
                      top: pos.top > 0 ? pos.top : 0,
                      left: pos.left > 0 ? pos.left : 0,
                      width: $parent.width(),
                      height: $parent.height() + 9
                    })
                  );
                  if (changed) {
                    if (!window.confirm(_("Changes are not saved!. Continue?"))) {
                      return false;
                    }
                  }
                },
                buttons: [
                  {
                    text: _("Ok"),
                    click: function() {
                      $(`#inspect_${wdata.attr}`).val(editor.getValue()).trigger("change");
                      changed = false;
                      $(this).dialog("close");
                    }
                  },
                  {
                    text: _("Cancel"),
                    click: function() {
                      $(this).dialog("close");
                    }
                  }
                ]
              }).show();
            }
          };
          return line;
        }
      };
      vis.binds["rssfeed"].showVersion();
    }
  });

  // rssfeed/js/ejs.js
  var require_ejs = __commonJS({
    "rssfeed/js/ejs.js"(exports, module) {
      "use strict";
      (function(f) {
        if (typeof exports === "object" && typeof module !== "undefined") {
          module.exports = f();
        } else if (typeof define === "function" && define.amd) {
          define([], f);
        } else {
          var g;
          if (typeof window !== "undefined") {
            g = window;
          } else if (typeof global !== "undefined") {
            g = global;
          } else if (typeof self !== "undefined") {
            g = self;
          } else {
            g = this;
          }
          g.ejs = f();
        }
      })(function() {
        var define2, module2, exports2;
        return (/* @__PURE__ */ function() {
          function e(t, n, r) {
            function s(o2, u) {
              if (!n[o2]) {
                if (!t[o2]) {
                  var a = typeof __require == "function" && __require;
                  if (!u && a) return a(o2, true);
                  if (i) return i(o2, true);
                  var f = new Error("Cannot find module '" + o2 + "'");
                  throw f.code = "MODULE_NOT_FOUND", f;
                }
                var l = n[o2] = { exports: {} };
                t[o2][0].call(l.exports, function(e2) {
                  var n2 = t[o2][1][e2];
                  return s(n2 ? n2 : e2);
                }, l, l.exports, e, t, n, r);
              }
              return n[o2].exports;
            }
            var i = typeof __require == "function" && __require;
            for (var o = 0; o < r.length; o++) s(r[o]);
            return s;
          }
          return e;
        }())({ 1: [function(require2, module3, exports3) {
          "use strict";
          var fs = require2("fs");
          var path = require2("path");
          var utils = require2("./utils");
          var scopeOptionWarned = false;
          var _VERSION_STRING = require2("../package.json").version;
          var _DEFAULT_OPEN_DELIMITER = "<";
          var _DEFAULT_CLOSE_DELIMITER = ">";
          var _DEFAULT_DELIMITER = "%";
          var _DEFAULT_LOCALS_NAME = "locals";
          var _NAME = "ejs";
          var _REGEX_STRING = "(<%%|%%>|<%=|<%-|<%_|<%#|<%|%>|-%>|_%>)";
          var _OPTS_PASSABLE_WITH_DATA = [
            "delimiter",
            "scope",
            "context",
            "debug",
            "compileDebug",
            "client",
            "_with",
            "rmWhitespace",
            "strict",
            "filename",
            "async"
          ];
          var _OPTS_PASSABLE_WITH_DATA_EXPRESS = _OPTS_PASSABLE_WITH_DATA.concat("cache");
          var _BOM = /^\uFEFF/;
          exports3.cache = utils.cache;
          exports3.fileLoader = fs.readFileSync;
          exports3.localsName = _DEFAULT_LOCALS_NAME;
          exports3.promiseImpl = new Function("return this;")().Promise;
          exports3.resolveInclude = function(name, filename, isDir) {
            var dirname = path.dirname;
            var extname = path.extname;
            var resolve = path.resolve;
            var includePath = resolve(isDir ? filename : dirname(filename), name);
            var ext = extname(name);
            if (!ext) {
              includePath += ".ejs";
            }
            return includePath;
          };
          function getIncludePath(path2, options) {
            var includePath;
            var filePath;
            var views = options.views;
            var match = /^[A-Za-z]+:\\|^\//.exec(path2);
            if (match && match.length) {
              includePath = exports3.resolveInclude(path2.replace(/^\/*/, ""), options.root || "/", true);
            } else {
              if (options.filename) {
                filePath = exports3.resolveInclude(path2, options.filename);
                if (fs.existsSync(filePath)) {
                  includePath = filePath;
                }
              }
              if (!includePath) {
                if (Array.isArray(views) && views.some(function(v) {
                  filePath = exports3.resolveInclude(path2, v, true);
                  return fs.existsSync(filePath);
                })) {
                  includePath = filePath;
                }
              }
              if (!includePath) {
                throw new Error('Could not find the include file "' + options.escapeFunction(path2) + '"');
              }
            }
            return includePath;
          }
          function handleCache(options, template) {
            var func;
            var filename = options.filename;
            var hasTemplate = arguments.length > 1;
            if (options.cache) {
              if (!filename) {
                throw new Error("cache option requires a filename");
              }
              func = exports3.cache.get(filename);
              if (func) {
                return func;
              }
              if (!hasTemplate) {
                template = fileLoader(filename).toString().replace(_BOM, "");
              }
            } else if (!hasTemplate) {
              if (!filename) {
                throw new Error("Internal EJS error: no file name or template provided");
              }
              template = fileLoader(filename).toString().replace(_BOM, "");
            }
            func = exports3.compile(template, options);
            if (options.cache) {
              exports3.cache.set(filename, func);
            }
            return func;
          }
          function tryHandleCache(options, data, cb) {
            var result;
            if (!cb) {
              if (typeof exports3.promiseImpl == "function") {
                return new exports3.promiseImpl(function(resolve, reject) {
                  try {
                    result = handleCache(options)(data);
                    resolve(result);
                  } catch (err) {
                    reject(err);
                  }
                });
              } else {
                throw new Error("Please provide a callback function");
              }
            } else {
              try {
                result = handleCache(options)(data);
              } catch (err) {
                return cb(err);
              }
              cb(null, result);
            }
          }
          function fileLoader(filePath) {
            return exports3.fileLoader(filePath);
          }
          function includeFile(path2, options) {
            var opts = utils.shallowCopy({}, options);
            opts.filename = getIncludePath(path2, opts);
            return handleCache(opts);
          }
          function rethrow(err, str, flnm, lineno, esc) {
            var lines = str.split("\n");
            var start = Math.max(lineno - 3, 0);
            var end = Math.min(lines.length, lineno + 3);
            var filename = esc(flnm);
            var context = lines.slice(start, end).map(function(line, i) {
              var curr = i + start + 1;
              return (curr == lineno ? " >> " : "    ") + curr + "| " + line;
            }).join("\n");
            err.path = filename;
            err.message = (filename || "ejs") + ":" + lineno + "\n" + context + "\n\n" + err.message;
            throw err;
          }
          function stripSemi(str) {
            return str.replace(/;(\s*$)/, "$1");
          }
          exports3.compile = function compile(template, opts) {
            var templ;
            if (opts && opts.scope) {
              if (!scopeOptionWarned) {
                console.warn("`scope` option is deprecated and will be removed in EJS 3");
                scopeOptionWarned = true;
              }
              if (!opts.context) {
                opts.context = opts.scope;
              }
              delete opts.scope;
            }
            templ = new Template(template, opts);
            return templ.compile();
          };
          exports3.render = function(template, d, o) {
            var data = d || {};
            var opts = o || {};
            if (arguments.length == 2) {
              utils.shallowCopyFromList(opts, data, _OPTS_PASSABLE_WITH_DATA);
            }
            return handleCache(opts, template)(data);
          };
          exports3.renderFile = function() {
            var args = Array.prototype.slice.call(arguments);
            var filename = args.shift();
            var cb;
            var opts = { filename };
            var data;
            var viewOpts;
            if (typeof arguments[arguments.length - 1] == "function") {
              cb = args.pop();
            }
            if (args.length) {
              data = args.shift();
              if (args.length) {
                utils.shallowCopy(opts, args.pop());
              } else {
                if (data.settings) {
                  if (data.settings.views) {
                    opts.views = data.settings.views;
                  }
                  if (data.settings["view cache"]) {
                    opts.cache = true;
                  }
                  viewOpts = data.settings["view options"];
                  if (viewOpts) {
                    utils.shallowCopy(opts, viewOpts);
                  }
                }
                utils.shallowCopyFromList(opts, data, _OPTS_PASSABLE_WITH_DATA_EXPRESS);
              }
              opts.filename = filename;
            } else {
              data = {};
            }
            return tryHandleCache(opts, data, cb);
          };
          exports3.Template = Template;
          exports3.clearCache = function() {
            exports3.cache.reset();
          };
          function Template(text, opts) {
            opts = opts || {};
            var options = {};
            this.templateText = text;
            this.mode = null;
            this.truncate = false;
            this.currentLine = 1;
            this.source = "";
            this.dependencies = [];
            options.client = opts.client || false;
            options.escapeFunction = opts.escape || opts.escapeFunction || utils.escapeXML;
            options.compileDebug = opts.compileDebug !== false;
            options.debug = !!opts.debug;
            options.filename = opts.filename;
            options.openDelimiter = opts.openDelimiter || exports3.openDelimiter || _DEFAULT_OPEN_DELIMITER;
            options.closeDelimiter = opts.closeDelimiter || exports3.closeDelimiter || _DEFAULT_CLOSE_DELIMITER;
            options.delimiter = opts.delimiter || exports3.delimiter || _DEFAULT_DELIMITER;
            options.strict = opts.strict || false;
            options.context = opts.context;
            options.cache = opts.cache || false;
            options.rmWhitespace = opts.rmWhitespace;
            options.root = opts.root;
            options.outputFunctionName = opts.outputFunctionName;
            options.localsName = opts.localsName || exports3.localsName || _DEFAULT_LOCALS_NAME;
            options.views = opts.views;
            options.async = opts.async;
            options.destructuredLocals = opts.destructuredLocals;
            options.legacyInclude = typeof opts.legacyInclude != "undefined" ? !!opts.legacyInclude : true;
            if (options.strict) {
              options._with = false;
            } else {
              options._with = typeof opts._with != "undefined" ? opts._with : true;
            }
            this.opts = options;
            this.regex = this.createRegex();
          }
          Template.modes = {
            EVAL: "eval",
            ESCAPED: "escaped",
            RAW: "raw",
            COMMENT: "comment",
            LITERAL: "literal"
          };
          Template.prototype = {
            createRegex: function() {
              var str = _REGEX_STRING;
              var delim = utils.escapeRegExpChars(this.opts.delimiter);
              var open = utils.escapeRegExpChars(this.opts.openDelimiter);
              var close = utils.escapeRegExpChars(this.opts.closeDelimiter);
              str = str.replace(/%/g, delim).replace(/</g, open).replace(/>/g, close);
              return new RegExp(str);
            },
            compile: function() {
              var src;
              var fn;
              var opts = this.opts;
              var prepended = "";
              var appended = "";
              var escapeFn = opts.escapeFunction;
              var ctor;
              if (!this.source) {
                this.generateSource();
                prepended += '  var __output = "";\n  function __append(s) { if (s !== undefined && s !== null) __output += s }\n';
                if (opts.outputFunctionName) {
                  prepended += "  var " + opts.outputFunctionName + " = __append;\n";
                }
                if (opts.destructuredLocals && opts.destructuredLocals.length) {
                  var destructuring = "  var __locals = (" + opts.localsName + " || {}),\n";
                  for (var i = 0; i < opts.destructuredLocals.length; i++) {
                    var name = opts.destructuredLocals[i];
                    if (i > 0) {
                      destructuring += ",\n  ";
                    }
                    destructuring += name + " = __locals." + name;
                  }
                  prepended += destructuring + ";\n";
                }
                if (opts._with !== false) {
                  prepended += "  with (" + opts.localsName + " || {}) {\n";
                  appended += "  }\n";
                }
                appended += "  return __output;\n";
                this.source = prepended + this.source + appended;
              }
              if (opts.compileDebug) {
                src = "var __line = 1\n  , __lines = " + JSON.stringify(this.templateText) + "\n  , __filename = " + (opts.filename ? JSON.stringify(opts.filename) : "undefined") + ";\ntry {\n" + this.source + "} catch (e) {\n  rethrow(e, __lines, __filename, __line, escapeFn);\n}\n";
              } else {
                src = this.source;
              }
              if (opts.client) {
                src = "escapeFn = escapeFn || " + escapeFn.toString() + ";\n" + src;
                if (opts.compileDebug) {
                  src = "rethrow = rethrow || " + rethrow.toString() + ";\n" + src;
                }
              }
              if (opts.strict) {
                src = '"use strict";\n' + src;
              }
              if (opts.debug) {
                console.log(src);
              }
              if (opts.compileDebug && opts.filename) {
                src = src + "\n//# sourceURL=" + opts.filename + "\n";
              }
              try {
                if (opts.async) {
                  try {
                    ctor = new Function("return (async function(){}).constructor;")();
                  } catch (e) {
                    if (e instanceof SyntaxError) {
                      throw new Error("This environment does not support async/await");
                    } else {
                      throw e;
                    }
                  }
                } else {
                  ctor = Function;
                }
                fn = new ctor(opts.localsName + ", escapeFn, include, rethrow", src);
              } catch (e) {
                if (e instanceof SyntaxError) {
                  if (opts.filename) {
                    e.message += " in " + opts.filename;
                  }
                  e.message += " while compiling ejs\n\n";
                  e.message += "If the above error is not helpful, you may want to try EJS-Lint:\n";
                  e.message += "https://github.com/RyanZim/EJS-Lint";
                  if (!opts.async) {
                    e.message += "\n";
                    e.message += "Or, if you meant to create an async function, pass `async: true` as an option.";
                  }
                }
                throw e;
              }
              var returnedFn = opts.client ? fn : function anonymous(data) {
                var include = function(path2, includeData) {
                  var d = utils.shallowCopy({}, data);
                  if (includeData) {
                    d = utils.shallowCopy(d, includeData);
                  }
                  return includeFile(path2, opts)(d);
                };
                return fn.apply(opts.context, [data || {}, escapeFn, include, rethrow]);
              };
              returnedFn.dependencies = this.dependencies;
              if (opts.filename && typeof Object.defineProperty === "function") {
                var filename = opts.filename;
                var basename = path.basename(filename, path.extname(filename));
                try {
                  Object.defineProperty(returnedFn, "name", {
                    value: basename,
                    writable: false,
                    enumerable: false,
                    configurable: true
                  });
                } catch (e) {
                }
              }
              return returnedFn;
            },
            generateSource: function() {
              var opts = this.opts;
              if (opts.rmWhitespace) {
                this.templateText = this.templateText.replace(/[\r\n]+/g, "\n").replace(/^\s+|\s+$/gm, "");
              }
              this.templateText = this.templateText.replace(/[ \t]*<%_/gm, "<%_").replace(/_%>[ \t]*/gm, "_%>");
              var self2 = this;
              var matches = this.parseTemplateText();
              var d = this.opts.delimiter;
              var o = this.opts.openDelimiter;
              var c = this.opts.closeDelimiter;
              if (matches && matches.length) {
                matches.forEach(function(line, index) {
                  var closing;
                  if (line.indexOf(o + d) === 0 && line.indexOf(o + d + d) !== 0) {
                    closing = matches[index + 2];
                    if (!(closing == d + c || closing == "-" + d + c || closing == "_" + d + c)) {
                      throw new Error('Could not find matching close tag for "' + line + '".');
                    }
                  }
                  self2.scanLine(line);
                });
              }
            },
            parseTemplateText: function() {
              var str = this.templateText;
              var pat = this.regex;
              var result = pat.exec(str);
              var arr = [];
              var firstPos;
              while (result) {
                firstPos = result.index;
                if (firstPos !== 0) {
                  arr.push(str.substring(0, firstPos));
                  str = str.slice(firstPos);
                }
                arr.push(result[0]);
                str = str.slice(result[0].length);
                result = pat.exec(str);
              }
              if (str) {
                arr.push(str);
              }
              return arr;
            },
            _addOutput: function(line) {
              if (this.truncate) {
                line = line.replace(/^(?:\r\n|\r|\n)/, "");
                this.truncate = false;
              }
              if (!line) {
                return line;
              }
              line = line.replace(/\\/g, "\\\\");
              line = line.replace(/\n/g, "\\n");
              line = line.replace(/\r/g, "\\r");
              line = line.replace(/"/g, '\\"');
              this.source += '    ; __append("' + line + '")\n';
            },
            scanLine: function(line) {
              var self2 = this;
              var d = this.opts.delimiter;
              var o = this.opts.openDelimiter;
              var c = this.opts.closeDelimiter;
              var newLineCount = 0;
              newLineCount = line.split("\n").length - 1;
              switch (line) {
                case o + d:
                case o + d + "_":
                  this.mode = Template.modes.EVAL;
                  break;
                case o + d + "=":
                  this.mode = Template.modes.ESCAPED;
                  break;
                case o + d + "-":
                  this.mode = Template.modes.RAW;
                  break;
                case o + d + "#":
                  this.mode = Template.modes.COMMENT;
                  break;
                case o + d + d:
                  this.mode = Template.modes.LITERAL;
                  this.source += '    ; __append("' + line.replace(o + d + d, o + d) + '")\n';
                  break;
                case d + d + c:
                  this.mode = Template.modes.LITERAL;
                  this.source += '    ; __append("' + line.replace(d + d + c, d + c) + '")\n';
                  break;
                case d + c:
                case "-" + d + c:
                case "_" + d + c:
                  if (this.mode == Template.modes.LITERAL) {
                    this._addOutput(line);
                  }
                  this.mode = null;
                  this.truncate = line.indexOf("-") === 0 || line.indexOf("_") === 0;
                  break;
                default:
                  if (this.mode) {
                    switch (this.mode) {
                      case Template.modes.EVAL:
                      case Template.modes.ESCAPED:
                      case Template.modes.RAW:
                        if (line.lastIndexOf("//") > line.lastIndexOf("\n")) {
                          line += "\n";
                        }
                    }
                    switch (this.mode) {
                      // Just executing code
                      case Template.modes.EVAL:
                        this.source += "    ; " + line + "\n";
                        break;
                      // Exec, esc, and output
                      case Template.modes.ESCAPED:
                        this.source += "    ; __append(escapeFn(" + stripSemi(line) + "))\n";
                        break;
                      // Exec and output
                      case Template.modes.RAW:
                        this.source += "    ; __append(" + stripSemi(line) + ")\n";
                        break;
                      case Template.modes.COMMENT:
                        break;
                      // Literal <%% mode, append as raw output
                      case Template.modes.LITERAL:
                        this._addOutput(line);
                        break;
                    }
                  } else {
                    this._addOutput(line);
                  }
              }
              if (self2.opts.compileDebug && newLineCount) {
                this.currentLine += newLineCount;
                this.source += "    ; __line = " + this.currentLine + "\n";
              }
            }
          };
          exports3.escapeXML = utils.escapeXML;
          exports3.__express = exports3.renderFile;
          exports3.VERSION = _VERSION_STRING;
          exports3.name = _NAME;
          if (typeof window != "undefined") {
            window.ejs = exports3;
          }
        }, { "../package.json": 6, "./utils": 2, "fs": 3, "path": 4 }], 2: [function(require2, module3, exports3) {
          "use strict";
          var regExpChars = /[|\\{}()[\]^$+*?.]/g;
          exports3.escapeRegExpChars = function(string) {
            if (!string) {
              return "";
            }
            return String(string).replace(regExpChars, "\\$&");
          };
          var _ENCODE_HTML_RULES = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&#34;",
            "'": "&#39;"
          };
          var _MATCH_HTML = /[&<>'"]/g;
          function encode_char(c) {
            return _ENCODE_HTML_RULES[c] || c;
          }
          var escapeFuncStr = `var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
`;
          exports3.escapeXML = function(markup) {
            return markup == void 0 ? "" : String(markup).replace(_MATCH_HTML, encode_char);
          };
          exports3.escapeXML.toString = function() {
            return Function.prototype.toString.call(this) + ";\n" + escapeFuncStr;
          };
          exports3.shallowCopy = function(to, from) {
            from = from || {};
            for (var p in from) {
              to[p] = from[p];
            }
            return to;
          };
          exports3.shallowCopyFromList = function(to, from, list) {
            for (var i = 0; i < list.length; i++) {
              var p = list[i];
              if (typeof from[p] != "undefined") {
                to[p] = from[p];
              }
            }
            return to;
          };
          exports3.cache = {
            _data: {},
            set: function(key, val) {
              this._data[key] = val;
            },
            get: function(key) {
              return this._data[key];
            },
            remove: function(key) {
              delete this._data[key];
            },
            reset: function() {
              this._data = {};
            }
          };
        }, {}], 3: [function(require2, module3, exports3) {
        }, {}], 4: [function(require2, module3, exports3) {
          (function(process) {
            function normalizeArray(parts, allowAboveRoot) {
              var up = 0;
              for (var i = parts.length - 1; i >= 0; i--) {
                var last = parts[i];
                if (last === ".") {
                  parts.splice(i, 1);
                } else if (last === "..") {
                  parts.splice(i, 1);
                  up++;
                } else if (up) {
                  parts.splice(i, 1);
                  up--;
                }
              }
              if (allowAboveRoot) {
                for (; up--; up) {
                  parts.unshift("..");
                }
              }
              return parts;
            }
            var splitPathRe = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
            var splitPath = function(filename) {
              return splitPathRe.exec(filename).slice(1);
            };
            exports3.resolve = function() {
              var resolvedPath = "", resolvedAbsolute = false;
              for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
                var path = i >= 0 ? arguments[i] : process.cwd();
                if (typeof path !== "string") {
                  throw new TypeError("Arguments to path.resolve must be strings");
                } else if (!path) {
                  continue;
                }
                resolvedPath = path + "/" + resolvedPath;
                resolvedAbsolute = path.charAt(0) === "/";
              }
              resolvedPath = normalizeArray(filter(resolvedPath.split("/"), function(p) {
                return !!p;
              }), !resolvedAbsolute).join("/");
              return (resolvedAbsolute ? "/" : "") + resolvedPath || ".";
            };
            exports3.normalize = function(path) {
              var isAbsolute = exports3.isAbsolute(path), trailingSlash = substr(path, -1) === "/";
              path = normalizeArray(filter(path.split("/"), function(p) {
                return !!p;
              }), !isAbsolute).join("/");
              if (!path && !isAbsolute) {
                path = ".";
              }
              if (path && trailingSlash) {
                path += "/";
              }
              return (isAbsolute ? "/" : "") + path;
            };
            exports3.isAbsolute = function(path) {
              return path.charAt(0) === "/";
            };
            exports3.join = function() {
              var paths = Array.prototype.slice.call(arguments, 0);
              return exports3.normalize(filter(paths, function(p, index) {
                if (typeof p !== "string") {
                  throw new TypeError("Arguments to path.join must be strings");
                }
                return p;
              }).join("/"));
            };
            exports3.relative = function(from, to) {
              from = exports3.resolve(from).substr(1);
              to = exports3.resolve(to).substr(1);
              function trim(arr) {
                var start = 0;
                for (; start < arr.length; start++) {
                  if (arr[start] !== "") break;
                }
                var end = arr.length - 1;
                for (; end >= 0; end--) {
                  if (arr[end] !== "") break;
                }
                if (start > end) return [];
                return arr.slice(start, end - start + 1);
              }
              var fromParts = trim(from.split("/"));
              var toParts = trim(to.split("/"));
              var length = Math.min(fromParts.length, toParts.length);
              var samePartsLength = length;
              for (var i = 0; i < length; i++) {
                if (fromParts[i] !== toParts[i]) {
                  samePartsLength = i;
                  break;
                }
              }
              var outputParts = [];
              for (var i = samePartsLength; i < fromParts.length; i++) {
                outputParts.push("..");
              }
              outputParts = outputParts.concat(toParts.slice(samePartsLength));
              return outputParts.join("/");
            };
            exports3.sep = "/";
            exports3.delimiter = ":";
            exports3.dirname = function(path) {
              var result = splitPath(path), root = result[0], dir = result[1];
              if (!root && !dir) {
                return ".";
              }
              if (dir) {
                dir = dir.substr(0, dir.length - 1);
              }
              return root + dir;
            };
            exports3.basename = function(path, ext) {
              var f = splitPath(path)[2];
              if (ext && f.substr(-1 * ext.length) === ext) {
                f = f.substr(0, f.length - ext.length);
              }
              return f;
            };
            exports3.extname = function(path) {
              return splitPath(path)[3];
            };
            function filter(xs, f) {
              if (xs.filter) return xs.filter(f);
              var res = [];
              for (var i = 0; i < xs.length; i++) {
                if (f(xs[i], i, xs)) res.push(xs[i]);
              }
              return res;
            }
            var substr = "ab".substr(-1) === "b" ? function(str, start, len) {
              return str.substr(start, len);
            } : function(str, start, len) {
              if (start < 0) start = str.length + start;
              return str.substr(start, len);
            };
          }).call(this, require2("_process"));
        }, { "_process": 5 }], 5: [function(require2, module3, exports3) {
          var process = module3.exports = {};
          var cachedSetTimeout;
          var cachedClearTimeout;
          function defaultSetTimout() {
            throw new Error("setTimeout has not been defined");
          }
          function defaultClearTimeout() {
            throw new Error("clearTimeout has not been defined");
          }
          (function() {
            try {
              if (typeof setTimeout === "function") {
                cachedSetTimeout = setTimeout;
              } else {
                cachedSetTimeout = defaultSetTimout;
              }
            } catch (e) {
              cachedSetTimeout = defaultSetTimout;
            }
            try {
              if (typeof clearTimeout === "function") {
                cachedClearTimeout = clearTimeout;
              } else {
                cachedClearTimeout = defaultClearTimeout;
              }
            } catch (e) {
              cachedClearTimeout = defaultClearTimeout;
            }
          })();
          function runTimeout(fun) {
            if (cachedSetTimeout === setTimeout) {
              return setTimeout(fun, 0);
            }
            if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
              cachedSetTimeout = setTimeout;
              return setTimeout(fun, 0);
            }
            try {
              return cachedSetTimeout(fun, 0);
            } catch (e) {
              try {
                return cachedSetTimeout.call(null, fun, 0);
              } catch (e2) {
                return cachedSetTimeout.call(this, fun, 0);
              }
            }
          }
          function runClearTimeout(marker) {
            if (cachedClearTimeout === clearTimeout) {
              return clearTimeout(marker);
            }
            if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
              cachedClearTimeout = clearTimeout;
              return clearTimeout(marker);
            }
            try {
              return cachedClearTimeout(marker);
            } catch (e) {
              try {
                return cachedClearTimeout.call(null, marker);
              } catch (e2) {
                return cachedClearTimeout.call(this, marker);
              }
            }
          }
          var queue = [];
          var draining = false;
          var currentQueue;
          var queueIndex = -1;
          function cleanUpNextTick() {
            if (!draining || !currentQueue) {
              return;
            }
            draining = false;
            if (currentQueue.length) {
              queue = currentQueue.concat(queue);
            } else {
              queueIndex = -1;
            }
            if (queue.length) {
              drainQueue();
            }
          }
          function drainQueue() {
            if (draining) {
              return;
            }
            var timeout = runTimeout(cleanUpNextTick);
            draining = true;
            var len = queue.length;
            while (len) {
              currentQueue = queue;
              queue = [];
              while (++queueIndex < len) {
                if (currentQueue) {
                  currentQueue[queueIndex].run();
                }
              }
              queueIndex = -1;
              len = queue.length;
            }
            currentQueue = null;
            draining = false;
            runClearTimeout(timeout);
          }
          process.nextTick = function(fun) {
            var args = new Array(arguments.length - 1);
            if (arguments.length > 1) {
              for (var i = 1; i < arguments.length; i++) {
                args[i - 1] = arguments[i];
              }
            }
            queue.push(new Item(fun, args));
            if (queue.length === 1 && !draining) {
              runTimeout(drainQueue);
            }
          };
          function Item(fun, array) {
            this.fun = fun;
            this.array = array;
          }
          Item.prototype.run = function() {
            this.fun.apply(null, this.array);
          };
          process.title = "browser";
          process.browser = true;
          process.env = {};
          process.argv = [];
          process.version = "";
          process.versions = {};
          function noop() {
          }
          process.on = noop;
          process.addListener = noop;
          process.once = noop;
          process.off = noop;
          process.removeListener = noop;
          process.removeAllListeners = noop;
          process.emit = noop;
          process.prependListener = noop;
          process.prependOnceListener = noop;
          process.listeners = function(name) {
            return [];
          };
          process.binding = function(name) {
            throw new Error("process.binding is not supported");
          };
          process.cwd = function() {
            return "/";
          };
          process.chdir = function(dir) {
            throw new Error("process.chdir is not supported");
          };
          process.umask = function() {
            return 0;
          };
        }, {}], 6: [function(require2, module3, exports3) {
          module3.exports = {
            "name": "ejs",
            "description": "Embedded JavaScript templates",
            "keywords": [
              "template",
              "engine",
              "ejs"
            ],
            "version": "3.0.1",
            "author": "Matthew Eernisse <mde@fleegix.org> (http://fleegix.org)",
            "license": "Apache-2.0",
            "main": "./lib/ejs.js",
            "repository": {
              "type": "git",
              "url": "git://github.com/mde/ejs.git"
            },
            "bugs": "https://github.com/mde/ejs/issues",
            "homepage": "https://github.com/mde/ejs",
            "dependencies": {},
            "devDependencies": {
              "browserify": "^13.1.1",
              "eslint": "^4.14.0",
              "git-directory-deploy": "^1.5.1",
              "jake": "^10.3.1",
              "jsdoc": "^3.4.0",
              "lru-cache": "^4.0.1",
              "mocha": "^5.0.5",
              "uglify-js": "^3.3.16"
            },
            "engines": {
              "node": ">=0.10.0"
            },
            "scripts": {
              "test": "mocha",
              "postinstall": "node ./postinstall.js"
            }
          };
        }, {}] }, {}, [1])(1);
      });
    }
  });

  // rssfeed/js/bundle.js
  var import_rssfeed = __toESM(require_rssfeed());
  var import_ejs = __toESM(require_ejs());
})();
/**
 * @file Embedded JavaScript templating engine. {@link http://ejs.co}
 * @author Matthew Eernisse <mde@fleegix.org>
 * @author Tiancheng "Timothy" Gu <timothygu99@gmail.com>
 * @project EJS
 * @license {@link http://www.apache.org/licenses/LICENSE-2.0 Apache License, Version 2.0}
 */
//# sourceMappingURL=rssfeed-dist.js.map
