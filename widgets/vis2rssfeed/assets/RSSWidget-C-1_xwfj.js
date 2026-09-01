import { j as c, __tla as __tla_0 } from "./jsx-runtime-5TN6Phqd.js";
import { __tla as __tla_1 } from "./vis2rssfeedWidgets__loadShare__react__loadShare__-DZcZP6XT.js";
import { P as d, __tla as __tla_2 } from "./vis2rssfeedWidgets__loadShare__prop_mf_2_types__loadShare__-C3BqG1AV.js";
import { V as g, e as p, I as f, __tla as __tla_3 } from "./ejs-Dj0TZOSH.js";
import { G as h, r as u, __tla as __tla_4 } from "./rss-Bd1IcHfO.js";
import "./_commonjsHelpers-DsqdWQfm.js";
import { __tla as __tla_5 } from "./vis2rssfeedWidgets__mf_v__runtimeInit__mf_v__-CIJsaS2U.js";
import { __tla as __tla_6 } from "./vis2rssfeedWidgets__loadShare___mf_0_mui_mf_1_material__loadShare__-SRx7nqzf.js";
import { __tla as __tla_7 } from "./vis2rssfeedWidgets__loadShare___mf_0_mui_mf_1_icons_mf_2_material__loadShare__-59lJ2BkQ.js";
let m;
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
  m = class extends h {
    static getWidgetInfo() {
      return {
        id: "tplRSSWidget",
        visSet: "rssfeed",
        visSetLabel: "setlabel",
        visName: "RSSFeed Widget",
        visAttrs: [
          {
            name: "common",
            fields: [
              {
                name: "oid",
                type: "id",
                label: "widget_oid"
              },
              {
                name: "template",
                type: "custom",
                label: "widget_template",
                default: `
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
<p><%- rss.meta.title %> </p>
<% rss.articles.forEach(function(item){ %>
    <div class="article">
    <p><small><%- vis.formatDate(item.pubdate || item.date, "TT.MM.JJJJ SS:mm") %></small></p>    
    <h3><%- item.title %></h3>
    <p><%- item.description %></p>
    <div style="clear:both;"></div>
</div>
<% }); %> 
        `,
                component: (e, t, n, s) => c.jsx(g, {
                  field: e,
                  data: t,
                  onDataChange: n,
                  props: s
                })
              },
              {
                name: "max",
                type: "number",
                default: 5,
                min: 1,
                max: 9999,
                step: 1,
                label: "widget_maxarticles"
              },
              {
                name: "filter",
                type: "text",
                default: "",
                label: "widget_filter"
              }
            ]
          }
        ],
        visDefaultStyle: {
          width: 300,
          height: 300
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
      return m.getWidgetInfo();
    }
    onRxDataChanged() {
      this.propertiesUpdate();
    }
    onRxStyleChanged() {
    }
    onStateUpdated(i, e) {
    }
    checkHighlite(i, e, t) {
      return t = typeof t < "u" ? t : ";", e.split(t).reduce((s, l) => l === "" ? s : s || i.toLowerCase().indexOf(l.toLowerCase()) >= 0, false);
    }
    escapeHTML(i) {
      const e = document.createElement("textarea");
      return e.textContent = i, e.innerHTML;
    }
    renderWidgetBody(i) {
      super.renderWidgetBody(i);
      const e = JSON.parse(this.getPropertyValue("oid") || JSON.stringify(u)), t = i.widget.data, n = `
        No Object ID set
        `, s = t.template, l = t.filter ? t.filter : "";
      let o = t.max ? t.max : 999;
      o = o > 0 ? o : 1, e && e.articles && e.articles.length > o && (e.articles = e.articles.slice(0, o)), l !== "" && (e.articles = e.articles.filter((a) => this.checkHighlite(a.title + a.description + a.categories.toString(), l)));
      let r = "";
      try {
        typeof e.meta > "u" ? r = p.render(n, {}) : r = p.render(s, {
          rss: e,
          widgetid: i.id,
          style: i.style
        });
      } catch (a) {
        r = this.escapeHTML(a instanceof Error ? a.message : String(a)).replace(/(?:\r\n|\r|\n)/g, "<br>"), r = r.replace(/ /gm, "&nbsp;"), r = `<code style="color:red;">${r}</code>`;
      }
      return this.renderScrollableContent(c.jsx(f, {
        html: r
      }));
    }
  };
  m.propTypes = {
    systemConfig: d.object,
    socket: d.object,
    themeType: d.string,
    style: d.object,
    data: d.object
  };
});
export {
  __tla,
  m as default
};
