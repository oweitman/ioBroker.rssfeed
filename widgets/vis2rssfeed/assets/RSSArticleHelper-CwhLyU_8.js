import { j as e, __tla as __tla_0 } from "./jsx-runtime-5TN6Phqd.js";
import { __tla as __tla_1 } from "./vis2rssfeedWidgets__loadShare__react__loadShare__-DZcZP6XT.js";
import { G as c, r as a } from "./rss-Boj54Q8q.js";
import "./_commonjsHelpers-DsqdWQfm.js";
import { __tla as __tla_2 } from "./vis2rssfeedWidgets__mf_v__runtimeInit__mf_v__-CIJsaS2U.js";
let d;
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
  d = class extends c {
    static getWidgetInfo() {
      return {
        id: "tplRSSArticleHelper",
        visSet: "rssfeed",
        visName: "RSSFeed Article Helper",
        visAttrs: [
          {
            name: "common",
            fields: [
              {
                name: "oid",
                type: "id",
                label: "helper_oid"
              },
              {
                name: "prefix",
                type: "text",
                default: "item",
                label: "helper_prefix"
              },
              {
                name: "article",
                type: "number",
                default: 1,
                min: 1,
                max: 9999,
                step: 1,
                label: "helper_number"
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
      return d.getWidgetInfo();
    }
    onRxDataChanged() {
      this.propertiesUpdate();
    }
    onRxStyleChanged() {
    }
    onStateUpdated(l, t) {
    }
    renderWidgetBody(l) {
      super.renderWidgetBody(l);
      const t = {
        whiteSpace: "nowrap",
        textAlign: "left",
        verticalAlign: "top"
      }, n = JSON.parse(this.getPropertyValue("oid") || JSON.stringify(a)), h = parseInt(String(this.state.rxData.article), 10) || 1, r = this.state.rxData.prefix || "item", s = n.articles[h - 1];
      let i;
      return s ? i = e.jsxs("table", {
        children: [
          e.jsxs("tr", {
            children: [
              e.jsxs("th", {
                style: t,
                children: [
                  r,
                  ".title"
                ]
              }),
              e.jsx("td", {
                children: s.title
              })
            ]
          }),
          e.jsxs("tr", {
            children: [
              e.jsxs("th", {
                style: t,
                children: [
                  r,
                  ".description"
                ]
              }),
              e.jsx("td", {
                children: e.jsx("div", {
                  dangerouslySetInnerHTML: {
                    __html: s.description
                  }
                })
              })
            ]
          }),
          e.jsxs("tr", {
            children: [
              e.jsxs("th", {
                style: t,
                children: [
                  r,
                  ".summary"
                ]
              }),
              e.jsx("td", {
                children: s.summary
              })
            ]
          }),
          e.jsxs("tr", {
            children: [
              e.jsxs("th", {
                style: t,
                children: [
                  r,
                  ".link"
                ]
              }),
              e.jsx("td", {
                children: s.link
              })
            ]
          }),
          e.jsxs("tr", {
            children: [
              e.jsxs("th", {
                style: t,
                children: [
                  r,
                  ".origlink"
                ]
              }),
              e.jsx("td", {
                children: s.origlink
              })
            ]
          }),
          e.jsxs("tr", {
            children: [
              e.jsxs("th", {
                style: t,
                children: [
                  r,
                  ".permalink"
                ]
              }),
              e.jsx("td", {
                children: s.permalink
              })
            ]
          }),
          e.jsxs("tr", {
            children: [
              e.jsxs("th", {
                style: t,
                children: [
                  r,
                  ".date"
                ]
              }),
              e.jsx("td", {
                children: s.date
              })
            ]
          }),
          e.jsxs("tr", {
            children: [
              e.jsxs("th", {
                style: t,
                children: [
                  r,
                  ".pubdate"
                ]
              }),
              e.jsx("td", {
                children: s.pubdate
              })
            ]
          }),
          e.jsxs("tr", {
            children: [
              e.jsxs("th", {
                style: t,
                children: [
                  r,
                  ".author"
                ]
              }),
              e.jsx("td", {
                children: s.author
              })
            ]
          }),
          e.jsxs("tr", {
            children: [
              e.jsxs("th", {
                style: t,
                children: [
                  r,
                  ".guid"
                ]
              }),
              e.jsx("td", {
                children: s.guid
              })
            ]
          }),
          e.jsxs("tr", {
            children: [
              e.jsxs("th", {
                style: t,
                children: [
                  r,
                  ".comments"
                ]
              }),
              e.jsx("td", {
                children: s.comments
              })
            ]
          }),
          e.jsxs("tr", {
            children: [
              e.jsxs("th", {
                style: t,
                children: [
                  r,
                  ".image.url"
                ]
              }),
              e.jsx("td", {
                children: s.image.url
              })
            ]
          }),
          e.jsxs("tr", {
            children: [
              e.jsxs("th", {
                style: t,
                children: [
                  r,
                  ".image.title"
                ]
              }),
              e.jsx("td", {
                children: s.image.title
              })
            ]
          }),
          e.jsxs("tr", {
            children: [
              e.jsxs("th", {
                style: t,
                children: [
                  r,
                  ".categories"
                ]
              }),
              e.jsx("td", {
                children: s.categories
              })
            ]
          }),
          e.jsxs("tr", {
            children: [
              e.jsxs("th", {
                style: t,
                children: [
                  r,
                  ".source"
                ]
              }),
              e.jsx("td", {
                children: JSON.stringify(s.source)
              })
            ]
          }),
          e.jsxs("tr", {
            children: [
              e.jsxs("th", {
                style: t,
                children: [
                  r,
                  ".enclosures"
                ]
              }),
              e.jsx("td", {
                children: JSON.stringify(s.enclosures)
              })
            ]
          })
        ]
      }) : i = e.jsx("table", {
        className: "rssfeed attributes",
        children: e.jsx("tr", {
          children: e.jsxs("th", {
            children: [
              "No Data. End of List of ",
              n.articles.length,
              " Articles"
            ]
          })
        })
      }), i;
    }
  };
});
export {
  __tla,
  d as default
};
