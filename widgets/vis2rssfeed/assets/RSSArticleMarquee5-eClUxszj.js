import { j as l, __tla as __tla_0 } from "./jsx-runtime-5TN6Phqd.js";
import { v as G, __tla as __tla_1 } from "./vis2rssfeedWidgets__loadShare__react__loadShare__-DZcZP6XT.js";
import { v as E, __tla as __tla_2 } from "./vis2rssfeedWidgets__loadShare___mf_0_mui_mf_1_material__loadShare__-SRx7nqzf.js";
import { G as J, r as Z, __tla as __tla_3 } from "./rss-Bd1IcHfO.js";
import "./_commonjsHelpers-DsqdWQfm.js";
import { __tla as __tla_4 } from "./vis2rssfeedWidgets__mf_v__runtimeInit__mf_v__-CIJsaS2U.js";
let U;
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
  })()
]).then(async () => {
  var L = {};
  function K(f) {
    if (typeof window > "u") return;
    const r = document.createElement("style");
    return r.setAttribute("type", "text/css"), r.innerHTML = f, document.head.appendChild(r), f;
  }
  Object.defineProperty(L, "__esModule", {
    value: true
  });
  var i = G;
  function Q(f) {
    return f && typeof f == "object" && "default" in f ? f : {
      default: f
    };
  }
  var m = Q(i);
  K(`.rfm-marquee-container {
  overflow-x: hidden;
  display: flex;
  flex-direction: row;
  position: relative;
  width: var(--width);
  transform: var(--transform);
}
.rfm-marquee-container:hover div {
  animation-play-state: var(--pause-on-hover);
}
.rfm-marquee-container:active div {
  animation-play-state: var(--pause-on-click);
}

.rfm-overlay {
  position: absolute;
  width: 100%;
  height: 100%;
}
.rfm-overlay::before, .rfm-overlay::after {
  background: linear-gradient(to right, var(--gradient-color), rgba(255, 255, 255, 0));
  content: "";
  height: 100%;
  position: absolute;
  width: var(--gradient-width);
  z-index: 2;
  pointer-events: none;
  touch-action: none;
}
.rfm-overlay::after {
  right: 0;
  top: 0;
  transform: rotateZ(180deg);
}
.rfm-overlay::before {
  left: 0;
  top: 0;
}

.rfm-marquee {
  flex: 0 0 auto;
  min-width: var(--min-width);
  z-index: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  animation: scroll var(--duration) linear var(--delay) var(--iteration-count);
  animation-play-state: var(--play);
  animation-delay: var(--delay);
  animation-direction: var(--direction);
}
@keyframes scroll {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-100%);
  }
}

.rfm-initial-child-container {
  flex: 0 0 auto;
  display: flex;
  min-width: auto;
  flex-direction: row;
  align-items: center;
}

.rfm-child {
  transform: var(--transform);
}`);
  const ee = i.forwardRef(function({ style: r = {}, className: e = "", autoFill: a = false, play: d = true, pauseOnHover: t = false, pauseOnClick: o = false, direction: n = "left", speed: s = 50, delay: y = 0, loop: g = 0, gradient: q = false, gradientColor: u = "white", gradientWidth: _ = 200, onFinish: I, onCycleComplete: B, onMount: $, children: b }, P) {
    const [k, X] = i.useState(0), [S, z] = i.useState(0), [D, A] = i.useState(1), [j, Y] = i.useState(false), F = i.useRef(null), h = P || F, x = i.useRef(null), w = i.useCallback(() => {
      if (x.current && h.current) {
        const c = h.current.getBoundingClientRect(), M = x.current.getBoundingClientRect();
        let p = c.width, v = M.width;
        (n === "up" || n === "down") && (p = c.height, v = M.height), A(a && p && v && v < p ? Math.ceil(p / v) : 1), X(p), z(v);
      }
    }, [
      a,
      h,
      n
    ]);
    i.useEffect(() => {
      if (j && (w(), x.current && h.current)) {
        const c = new ResizeObserver(() => w());
        return c.observe(h.current), c.observe(x.current), () => {
          c && c.disconnect();
        };
      }
    }, [
      w,
      h,
      j
    ]), i.useEffect(() => {
      w();
    }, [
      w,
      b
    ]), i.useEffect(() => {
      Y(true);
    }, []), i.useEffect(() => {
      typeof $ == "function" && $();
    }, []);
    const W = i.useMemo(() => a ? S * D / s : S < k ? k / s : S / s, [
      a,
      k,
      S,
      D,
      s
    ]), H = i.useMemo(() => Object.assign(Object.assign({}, r), {
      "--pause-on-hover": !d || t ? "paused" : "running",
      "--pause-on-click": !d || t && !o || o ? "paused" : "running",
      "--width": n === "up" || n === "down" ? "100vh" : "100%",
      "--transform": n === "up" ? "rotate(-90deg)" : n === "down" ? "rotate(90deg)" : "none"
    }), [
      r,
      d,
      t,
      o,
      n
    ]), V = i.useMemo(() => ({
      "--gradient-color": u,
      "--gradient-width": typeof _ == "number" ? `${_}px` : _
    }), [
      u,
      _
    ]), O = i.useMemo(() => ({
      "--play": d ? "running" : "paused",
      "--direction": n === "left" ? "normal" : "reverse",
      "--duration": `${W}s`,
      "--delay": `${y}s`,
      "--iteration-count": g ? `${g}` : "infinite",
      "--min-width": a ? "auto" : "100%"
    }), [
      d,
      n,
      W,
      y,
      g,
      a
    ]), C = i.useMemo(() => ({
      "--transform": n === "up" ? "rotate(90deg)" : n === "down" ? "rotate(-90deg)" : "none"
    }), [
      n
    ]), T = i.useCallback((c) => [
      ...Array(Number.isFinite(c) && c >= 0 ? c : 0)
    ].map((M, p) => m.default.createElement(i.Fragment, {
      key: p
    }, i.Children.map(b, (v) => m.default.createElement("div", {
      style: C,
      className: "rfm-child"
    }, v)))), [
      C,
      b
    ]);
    return j ? m.default.createElement("div", {
      ref: h,
      style: H,
      className: "rfm-marquee-container " + e
    }, q && m.default.createElement("div", {
      style: V,
      className: "rfm-overlay"
    }), m.default.createElement("div", {
      className: "rfm-marquee",
      style: O,
      onAnimationIteration: B,
      onAnimationEnd: I
    }, m.default.createElement("div", {
      className: "rfm-initial-child-container",
      ref: x
    }, i.Children.map(b, (c) => m.default.createElement("div", {
      style: C,
      className: "rfm-child"
    }, c))), T(D - 1)), m.default.createElement("div", {
      className: "rfm-marquee",
      style: O
    }, T(D))) : null;
  });
  var N = L.default = ee;
  const R = window.vis;
  U = class extends J {
    constructor(r) {
      super(r), Object.assign(this.state, {
        showDialog: false,
        iframeSrc: ""
      });
    }
    static getWidgetInfo() {
      return {
        id: "tplRSSArticleMarquee5",
        visSet: "rssfeed",
        visName: "RSSFeed Article Marquee v5",
        visAttrs: [
          {
            name: "common",
            fields: [
              {
                name: "count",
                type: "number",
                default: 1,
                min: 1,
                max: Number.MAX_VALUE,
                step: 1,
                label: "marquee_count",
                onChange: async (r, e, a) => {
                  const { count: d } = e;
                  for (let t = 0; t <= d; t++) e[`g_feeds-${t}`] = true;
                  a(e);
                }
              },
              {
                name: "speed",
                type: "number",
                default: 200,
                min: 1,
                max: Number.MAX_VALUE,
                step: 1,
                label: "marquee_speed"
              },
              {
                name: "divider",
                type: "text",
                default: "+++",
                label: "marquee_divider"
              },
              {
                name: "pauseonhover",
                type: "checkbox",
                default: true,
                label: "marquee_pauseonhover"
              },
              {
                name: "opentype",
                type: "select",
                options: [
                  "none",
                  "link",
                  "popup"
                ],
                default: "none",
                label: "marquee_opentype"
              },
              {
                name: "withtime",
                type: "checkbox",
                default: false,
                label: "marquee_withtime"
              },
              {
                name: "withdate",
                type: "checkbox",
                default: false,
                label: "marquee_withdate"
              },
              {
                name: "withyear",
                type: "checkbox",
                default: false,
                label: "marquee_withyear"
              },
              {
                name: "withname",
                type: "checkbox",
                default: false,
                label: "marquee_withname"
              }
            ]
          },
          {
            name: "feeds",
            label: "marquee_feedsgroup",
            indexFrom: 1,
            indexTo: "count",
            onChange: async (r, e, a) => {
              a(e);
            },
            fields: [
              {
                name: "feed-oid",
                type: "id",
                label: "marquee_oid"
              },
              {
                name: "feed-name",
                type: "text",
                label: "marquee_name"
              },
              {
                name: "feed-maxarticles",
                type: "number",
                default: 1,
                min: 1,
                max: Number.MAX_VALUE,
                step: 1,
                label: "marquee_maxarticles"
              },
              {
                name: "feed-filter",
                type: "text",
                label: "marquee_filter"
              }
            ]
          }
        ],
        visDefaultStyle: {
          width: 300,
          height: 26
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
      return U.getWidgetInfo();
    }
    onRxDataChanged() {
      this.propertiesUpdate();
    }
    onRxStyleChanged() {
    }
    onStateUpdated(r, e) {
    }
    checkFilter(r, e, a) {
      return a = typeof a < "u" ? a : ";", e.split(a).reduce((t, o) => o === "" ? t : t || r.toLowerCase().indexOf(o.toLowerCase()) >= 0, false);
    }
    renderTitle(r, e) {
      let a = [];
      return r.withDate && a.push(R.formatDate(e.pubdate || e.date, "DD.MM.")), r.withYear && a.push(R.formatDate(e.pubdate || e.date, "YY")), a = [
        a.join("")
      ], r.withTime && a.push(R.formatDate(e.pubdate || e.date, "hh:mm")), ` ${r.divider} ${a.join(" ")} ${r.withName ? `${e.meta_name || e.meta_title}: ` : ""} ${e.title} `;
    }
    handleClick(r) {
      this.setState({
        showDialog: true
      }), this.setState({
        iframeSrc: r
      });
    }
    handleClose() {
      this.setState({
        showDialog: false
      }), this.setState({
        iframeSrc: ""
      });
    }
    renderWidgetBody(r) {
      super.renderWidgetBody(r);
      let e = {
        speed: this.state.rxData.speed || 200,
        divider: this.state.rxData.divider || "",
        pauseonhover: this.state.rxData.pauseonhover ? true : this.state.rxData.pauseonhover,
        opentype: this.state.rxData.opentype,
        withTime: this.state.rxData.withtime ? this.state.rxData.withtime : false,
        withDate: this.state.rxData.withdate ? this.state.rxData.withdate : false,
        withYear: this.state.rxData.withyear ? this.state.rxData.withyear : false,
        withName: this.state.rxData.withname ? this.state.rxData.withname : false
      };
      const a = Object.keys(this.state.data).filter((t) => /g_feeds-(\d+)/gm.test(t));
      a.length === 0 && a.push("g_feeds-1");
      const d = a.reduce((t, o) => {
        var _a;
        if (o === "g_feeds-0") return t;
        const n = (_a = /g_feeds-(\d+)/.exec(o)) == null ? void 0 : _a[1];
        if (!n) return t;
        const s = JSON.parse(this.state.values[`${this.state.data[`feed-oid${n}`]}.val`] || JSON.stringify(Z));
        if (!Object.prototype.hasOwnProperty.call(s, "articles")) return t;
        const y = this.state.data[`feed-maxarticles${n}`] || 5, g = this.state.data[`feed-filter${n}`], q = this.state.data[`feed-name${n}`];
        return s && s.articles && s.articles.length > y && (s.articles = s.articles.slice(0, y)), s.articles = s.articles.map((u) => ({
          title: u.title,
          description: u.description,
          categories: u.categories,
          date: u.date,
          link: u.link,
          meta_description: s.meta.description,
          meta_name: q,
          meta_title: s.meta.title,
          key: o + u.title
        })), g && (s.articles = s.articles.filter((u) => this.checkFilter(u.title + u.description + u.categories.toString(), g))), t.concat(s.articles);
      }, []);
      if (d.sort((t, o) => new Date(o.date).getTime() - new Date(t.date).getTime()), e.opentype === "link") return this.renderScrollableContent(l.jsx(N, {
        pauseOnHover: e.pauseonhover,
        speed: e.speed,
        children: l.jsx("div", {
          children: d.map((t) => l.jsx(E.Link, {
            href: t.link,
            underline: "hover",
            color: "inherit",
            target: "_blank",
            children: this.renderTitle(e, t)
          }, t.title))
        })
      }));
      if (e.opentype === "popup") {
        const t = `dialog ${this.props.id}`, o = `iframe ${this.props.id}`;
        return this.renderScrollableContent(l.jsxs(l.Fragment, {
          children: [
            l.jsx(N, {
              pauseOnHover: e.pauseonhover,
              speed: e.speed,
              children: l.jsx("div", {
                children: d.map((n) => l.jsx("span", {
                  style: {
                    cursor: "pointer"
                  },
                  onClick: () => {
                    this.handleClick(n.link);
                  },
                  children: this.renderTitle(e, n)
                }, n.key))
              })
            }),
            l.jsxs(E.Dialog, {
              className: t,
              PaperProps: {
                sx: {
                  width: "90%",
                  height: "90%",
                  overflow: "hidden",
                  maxHeight: "inherit",
                  maxWidth: "inherit"
                }
              },
              open: this.state.showDialog,
              onClose: () => {
              },
              children: [
                l.jsx(E.IconButton, {
                  "aria-label": "close",
                  onClick: () => this.handleClose(),
                  sx: (n) => ({
                    position: "absolute",
                    right: 8,
                    top: 8,
                    color: "black",
                    backgroundColor: "red"
                  })
                }),
                l.jsx("iframe", {
                  className: o,
                  src: this.state.iframeSrc,
                  title: "popup",
                  style: {
                    width: "100%",
                    height: "100%"
                  }
                })
              ]
            })
          ]
        }));
      } else return this.renderScrollableContent(l.jsx(N, {
        pauseOnHover: e.pauseonhover,
        speed: e.speed,
        children: l.jsx("div", {
          children: d.map((t) => l.jsx("span", {
            children: this.renderTitle(e, t)
          }, t.key))
        })
      }));
    }
  };
});
export {
  __tla,
  U as default
};
