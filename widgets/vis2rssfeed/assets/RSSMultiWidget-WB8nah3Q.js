import { j as h, __tla as __tla_0 } from "./jsx-runtime-5TN6Phqd.js";
import { __tla as __tla_1 } from "./vis2rssfeedWidgets__loadShare__react__loadShare__-DZcZP6XT.js";
import { P as c, __tla as __tla_2 } from "./vis2rssfeedWidgets__loadShare__prop_mf_2_types__loadShare__-C3BqG1AV.js";
import { V as _, e as y, I as w, __tla as __tla_3 } from "./ejs-Dj0TZOSH.js";
import { G as S, r as b, __tla as __tla_4 } from "./rss-Bd1IcHfO.js";
import "./_commonjsHelpers-DsqdWQfm.js";
import { __tla as __tla_5 } from "./vis2rssfeedWidgets__mf_v__runtimeInit__mf_v__-CIJsaS2U.js";
import { __tla as __tla_6 } from "./vis2rssfeedWidgets__loadShare___mf_0_mui_mf_1_material__loadShare__-SRx7nqzf.js";
import { __tla as __tla_7 } from "./vis2rssfeedWidgets__loadShare___mf_0_mui_mf_1_icons_mf_2_material__loadShare__-59lJ2BkQ.js";
let f;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_1;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_2;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_3;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_4;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_5;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_6;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_7;
    } catch {
    }
  })()
]).then(async () => {
  f = class extends S {
    static getWidgetInfo() {
      return {
        id: "tplRSSMultiWidget",
        visSet: "rssfeed",
        visName: "RSSFeed Multi Widget",
        visAttrs: [
          {
            name: "common",
            fields: [
              {
                name: "feedcount",
                type: "number",
                default: 1,
                min: 1,
                max: Number.MAX_VALUE,
                step: 1,
                label: "multi_feedcount",
                onChange: async (i, e, s) => {
                  const { count: l } = e;
                  for (let t = 0; t <= l; t++) e[`g_feeds-${t}`] = true;
                  s(e);
                }
              },
              {
                name: "template",
                type: "custom",
                label: "widget_template",
                default: `
<!--
 available variables:
 widgetid      ->  id of the widget 
 rss.articles  ->  all articles as array, details see Article Helper widget 
 style         ->  all style settings for the widget
 
 all variables are read only
-->

<style> 
#<%- widgetid %> img {
    width: 100%;
    max-width: 100%;
    height: auto;
    box-sizing: border-box;
}
#<%- widgetid %> img.rssfeed  {
    width: auto;
    height: auto;
}
</style> 
<% rss.articles.forEach(function(item){ %>
    <p><%- item.meta_name || item.meta_title || '' %></p>
    <p><small><%- vis.formatDate(item.pubdate || item.date, "TT.MM.JJJJ SS:mm") %></small></p>
    <h3><%- item.title %></h3>
    <p><%- item.description %></p>
    <div style="clear:both;" />
<% }); %>
                `,
                component: (i, e, s, l) => h.jsx(_, {
                  field: i,
                  data: e,
                  onDataChange: s,
                  props: l
                })
              },
              {
                name: "dpcount",
                type: "number",
                default: 1,
                min: 1,
                max: Number.MAX_VALUE,
                step: 1,
                label: "multi_dpcount",
                onChange: async (i, e, s) => {
                  const { dpcount: l } = e;
                  for (let t = 0; t <= l; t++) e[`g_datapoints-${t}`] = true;
                  s(e);
                }
              }
            ]
          },
          {
            name: "feeds",
            label: "multi_feedsgroup",
            indexFrom: 1,
            indexTo: "feedcount",
            onChange: async (i, e, s) => {
              s(e);
            },
            fields: [
              {
                name: "feed-oid",
                type: "id",
                label: "multi_oid"
              },
              {
                name: "feed-name",
                type: "text",
                label: "multi_name"
              },
              {
                name: "feed-maxarticles",
                type: "number",
                default: 10,
                min: 1,
                max: Number.MAX_VALUE,
                step: 1,
                label: "multi_maxarticles"
              },
              {
                name: "feed-filter",
                type: "text",
                label: "multi_filter"
              }
            ]
          },
          {
            name: "datapoints",
            label: "multi_datapointsgroup",
            indexFrom: 1,
            indexTo: "dpcount",
            onChange: async (i, e, s) => {
              s(e);
            },
            fields: [
              {
                name: "datapoint_oid",
                label: "multi_datapoints_oid",
                type: "text"
              }
            ]
          }
        ],
        visDefaultStyle: {
          width: 300,
          height: 260
        },
        visPrev: ""
      };
    }
    propertiesUpdate() {
    }
    componentDidMount() {
      super.componentDidMount(), this.propertiesUpdate();
    }
    getWidgetInfo() {
      return f.getWidgetInfo();
    }
    onRxDataChanged() {
      this.propertiesUpdate();
    }
    onRxStyleChanged() {
    }
    onStateUpdated(n, i) {
    }
    checkFilter(n, i, e) {
      return e = typeof e < "u" ? e : ";", i.split(e).reduce((l, t) => t === "" ? l : l || n.toLowerCase().indexOf(t.toLowerCase()) >= 0, false);
    }
    escapeHTML(n) {
      const i = document.createElement("textarea");
      return i.textContent = n, i.innerHTML;
    }
    renderWidgetBody(n) {
      super.renderWidgetBody(n);
      const i = n.widget.data, e = `
        No Object ID set
        `, s = i.template, l = Object.keys(this.state.data).filter((a) => /g_feeds-(\d+)/gm.test(a));
      let t = [];
      l.length > 0 ? t = l.reduce((a, p) => {
        var _a;
        if (p === "g_feeds-0") return a;
        const m = (_a = /g_feeds-(\d+)/.exec(p)) == null ? void 0 : _a[1];
        if (!m) return a;
        const r = JSON.parse(this.state.values[`${this.state.data[`feed-oid${m}`]}.val`] || JSON.stringify(b));
        if (!Object.prototype.hasOwnProperty.call(r, "articles")) return a;
        const u = this.state.data[`feed-maxarticles${m}`] || 999, g = this.state.data[`feed-filter${m}`], x = this.state.data[`feed-name${m}`];
        return g && (r.articles = r.articles.filter((o) => this.checkFilter(o.title + o.description + o.categories.toString(), g))), (r == null ? void 0 : r.articles) && r.articles.length > u && (r.articles = r.articles.slice(0, u)), r.articles = r.articles.map((o) => ({
          title: o.title,
          description: o.description,
          categories: o.categories,
          date: o.date,
          link: o.link,
          meta_description: r.meta.description,
          meta_name: x,
          meta_title: r.meta.title
        })), a.concat(r.articles);
      }, []) : t = JSON.parse(JSON.stringify(b)).articles, t.sort((a, p) => new Date(p.date).getTime() - new Date(a.date).getTime());
      let d = "";
      try {
        t.length === 0 ? d = y.render(e, {}) : d = y.render(s, {
          rss: {
            articles: t
          },
          widgetid: n.id,
          style: n.style
        });
      } catch (a) {
        d = this.escapeHTML(a instanceof Error ? a.message : String(a)).replace(/(?:\r\n|\r|\n)/g, "<br>"), d = d.replace(/ /gm, "&nbsp;"), d = `<code style="color:red;">${d}</code>`;
      }
      return this.renderScrollableContent(h.jsx(w, {
        style: {
          width: "100%",
          height: "100%",
          position: "relative"
        },
        html: d
      }));
    }
  };
  f.propTypes = {
    systemConfig: c.object,
    socket: c.object,
    themeType: c.string,
    style: c.object,
    data: c.object
  };
});
export {
  __tla,
  f as default
};
