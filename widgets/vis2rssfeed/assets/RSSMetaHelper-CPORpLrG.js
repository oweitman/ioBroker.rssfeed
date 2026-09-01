import { j as e, __tla as __tla_0 } from "./jsx-runtime-5TN6Phqd.js";
import { __tla as __tla_1 } from "./vis2rssfeedWidgets__loadShare__react__loadShare__-DZcZP6XT.js";
import { G as d, r as l } from "./rss-Boj54Q8q.js";
import "./_commonjsHelpers-DsqdWQfm.js";
import { __tla as __tla_2 } from "./vis2rssfeedWidgets__mf_v__runtimeInit__mf_v__-CIJsaS2U.js";
let i;
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
  })()
]).then(async () => {
  i = class extends d {
    static getWidgetInfo() {
      return {
        id: "tplRSSMetaHelper",
        visSet: "rssfeed",
        visName: "RSSFeed Meta Helper",
        visAttrs: [
          {
            name: "common",
            fields: [
              {
                name: "oid",
                type: "id",
                label: "helper_oid"
              }
            ]
          }
        ],
        visPrev: ""
      };
    }
    propertiesUpdate() {
    }
    componentDidMount() {
      super.componentDidMount(), this.propertiesUpdate();
    }
    getWidgetInfo() {
      return i.getWidgetInfo();
    }
    onRxDataChanged() {
      this.propertiesUpdate();
    }
    onRxStyleChanged() {
    }
    onStateUpdated(s, t) {
    }
    renderWidgetBody(s) {
      super.renderWidgetBody(s);
      const t = {
        whiteSpace: "nowrap",
        textAlign: "left",
        verticalAlign: "top"
      }, r = JSON.parse(this.getPropertyValue("oid") || JSON.stringify(l));
      return e.jsxs("table", {
        style: {
          whiteSpace: "nowrap"
        },
        children: [
          e.jsxs("tr", {
            children: [
              e.jsx("th", {
                style: t,
                children: "meta.title"
              }),
              e.jsx("td", {
                children: r.meta.title
              })
            ]
          }),
          e.jsxs("tr", {
            children: [
              e.jsx("th", {
                style: t,
                children: "meta.description"
              }),
              e.jsx("td", {
                children: r.meta.description
              })
            ]
          }),
          e.jsxs("tr", {
            children: [
              e.jsx("th", {
                style: t,
                children: "meta.link"
              }),
              e.jsx("td", {
                children: r.meta.link
              })
            ]
          }),
          e.jsxs("tr", {
            children: [
              e.jsx("th", {
                style: t,
                children: "meta.xmlurl"
              }),
              e.jsx("td", {
                children: r.meta.xmlurl
              })
            ]
          }),
          e.jsxs("tr", {
            children: [
              e.jsx("th", {
                style: t,
                children: "meta.date"
              }),
              e.jsx("td", {
                children: r.meta.date
              })
            ]
          }),
          e.jsxs("tr", {
            children: [
              e.jsx("th", {
                style: t,
                children: "meta.pubdate"
              }),
              e.jsx("td", {
                children: r.meta.pubdate
              })
            ]
          }),
          e.jsxs("tr", {
            children: [
              e.jsx("th", {
                style: t,
                children: "meta.author"
              }),
              e.jsx("td", {
                children: r.meta.author
              })
            ]
          }),
          e.jsxs("tr", {
            children: [
              e.jsx("th", {
                style: t,
                children: "meta.language"
              }),
              e.jsx("td", {
                children: r.meta.language
              })
            ]
          }),
          e.jsxs("tr", {
            children: [
              e.jsx("th", {
                style: t,
                children: "meta.image.url"
              }),
              e.jsx("td", {
                children: r.meta.image.url
              })
            ]
          }),
          e.jsxs("tr", {
            children: [
              e.jsx("th", {
                style: t,
                children: "meta.image.title"
              }),
              e.jsx("td", {
                children: r.meta.image.title
              })
            ]
          }),
          e.jsxs("tr", {
            children: [
              e.jsx("th", {
                style: t,
                children: "meta.favicon"
              }),
              e.jsx("td", {
                children: r.meta.favicon
              })
            ]
          }),
          e.jsxs("tr", {
            children: [
              e.jsx("th", {
                style: t,
                children: "meta.copyright"
              }),
              e.jsx("td", {
                children: r.meta.copyright
              })
            ]
          }),
          e.jsxs("tr", {
            children: [
              e.jsx("th", {
                style: t,
                children: "meta.generator"
              }),
              e.jsx("td", {
                children: r.meta.generator
              })
            ]
          }),
          e.jsxs("tr", {
            children: [
              e.jsx("th", {
                style: t,
                children: "meta.categories"
              }),
              e.jsx("td", {
                children: r.meta.categories
              })
            ]
          })
        ]
      });
    }
  };
});
export {
  __tla,
  i as default
};
