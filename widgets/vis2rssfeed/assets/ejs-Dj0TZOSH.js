import { j as se, __tla as __tla_0 } from "./jsx-runtime-5TN6Phqd.js";
import { v as xe, __tla as __tla_1 } from "./vis2rssfeedWidgets__loadShare__react__loadShare__-DZcZP6XT.js";
import { v as Ae, __tla as __tla_2 } from "./vis2rssfeedWidgets__loadShare___mf_0_mui_mf_1_material__loadShare__-SRx7nqzf.js";
import { v as Mt, __tla as __tla_3 } from "./vis2rssfeedWidgets__loadShare___mf_0_mui_mf_1_icons_mf_2_material__loadShare__-59lJ2BkQ.js";
import { v as Bn, a as Pn, __tla as __tla_4 } from "./vis2rssfeedWidgets__mf_v__runtimeInit__mf_v__-CIJsaS2U.js";
import { v as zn, __tla as __tla_5 } from "./vis2rssfeedWidgets__loadShare__prop_mf_2_types__loadShare__-C3BqG1AV.js";
import { c as Oe, g as jn, a as Un } from "./_commonjsHelpers-DsqdWQfm.js";
let Ti, Mi, Li;
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
  })()
]).then(async () => {
  const { loadShare: Vn } = Pn, { initPromise: Gn } = Bn, Kn = Gn.then((j) => Vn("@iobroker/adapter-react-v5", {
    customShareInfo: {
      shareConfig: {
        singleton: true,
        strictVersion: false,
        requiredVersion: "*"
      }
    }
  })), Yn = await Kn.then((j) => j());
  var ue = Yn;
  const Qn = (j) => j.open ? se.jsxs(Ae.Dialog, {
    onClose: j.closeDisabled ? null : j.onClose,
    open: true,
    fullScreen: !!j.fullScreen,
    maxWidth: j.maxWidth || "md",
    children: [
      se.jsx(Ae.DialogTitle, {
        children: j.noTranslation ? j.title : ue.I18n.t(j.title)
      }),
      se.jsx(Ae.DialogContent, {
        style: {
          minWidth: j.minWidth || void 0
        },
        onKeyUp: (Q) => {
          j.action && !j.actionDisabled && !j.keyboardDisabled && Q.key === "Enter" && (j.action(), j.actionNoClose || j.onClose());
        },
        children: j.children
      }),
      se.jsxs(Ae.DialogActions, {
        children: [
          j.dialogActions || null,
          j.actionTitle ? se.jsx(Ae.Button, {
            variant: "contained",
            onClick: () => {
              j.action && j.action(), j.actionNoClose || j.onClose();
            },
            color: j.actionColor || "primary",
            disabled: j.actionDisabled,
            startIcon: j.ActionIcon ? se.jsx(j.ActionIcon, {}) : void 0,
            children: j.noTranslation ? j.actionTitle : ue.I18n.t(j.actionTitle)
          }) : null,
          se.jsx(Ae.Button, {
            variant: "contained",
            sx: {
              backgroundColor: "grey"
            },
            onClick: j.onClose,
            disabled: j.closeDisabled,
            startIcon: se.jsx(Mt.Close, {}),
            children: j.noTranslation && j.closeTitle ? j.closeTitle : ue.I18n.t(j.closeTitle || "Cancel")
          })
        ]
      })
    ]
  }) : null;
  var De = {}, Tt = {
    exports: {}
  };
  (function(j, Q) {
    (function() {
      var A = "ace", _ = /* @__PURE__ */ (function() {
        return this;
      })();
      !_ && typeof window < "u" && (_ = window);
      var N = function(i, o, r) {
        if (typeof i != "string") {
          N.original ? N.original.apply(this, arguments) : (console.error("dropping module because define wasn't a string."), console.trace());
          return;
        }
        arguments.length == 2 && (r = o), N.modules[i] || (N.payloads[i] = r, N.modules[i] = null);
      };
      N.modules = {}, N.payloads = {};
      var L = function(i, o, r) {
        if (typeof o == "string") {
          var n = a(i, o);
          if (n != null) return r && r(), n;
        } else if (Object.prototype.toString.call(o) === "[object Array]") {
          for (var e = [], t = 0, s = o.length; t < s; ++t) {
            var h = a(i, o[t]);
            if (h == null && M.original) return;
            e.push(h);
          }
          return r && r.apply(null, e) || true;
        }
      }, M = function(i, o) {
        var r = L("", i, o);
        return r == null && M.original ? M.original.apply(this, arguments) : r;
      }, $ = function(i, o) {
        if (o.indexOf("!") !== -1) {
          var r = o.split("!");
          return $(i, r[0]) + "!" + $(i, r[1]);
        }
        if (o.charAt(0) == ".") {
          var n = i.split("/").slice(0, -1).join("/");
          for (o = n + "/" + o; o.indexOf(".") !== -1 && e != o; ) {
            var e = o;
            o = o.replace(/\/\.\//, "/").replace(/[^\/]+\/\.\.\//, "");
          }
        }
        return o;
      }, a = function(i, o) {
        o = $(i, o);
        var r = N.modules[o];
        if (!r) {
          if (r = N.payloads[o], typeof r == "function") {
            var n = {}, e = {
              id: o,
              uri: "",
              exports: n,
              packaged: true
            }, t = function(h, u) {
              return L(o, h, u);
            }, s = r(t, n, e);
            n = s || e.exports, N.modules[o] = n, delete N.payloads[o];
          }
          r = N.modules[o] = n || r;
        }
        return r;
      };
      function l(i) {
        var o = _;
        _[i] || (_[i] = {}), o = _[i], (!o.define || !o.define.packaged) && (N.original = o.define, o.define = N, o.define.packaged = true), (!o.require || !o.require.packaged) && (M.original = o.require, o.require = M, o.require.packaged = true);
      }
      l(A);
    })(), ace.define("ace/lib/es6-shim", [
      "require",
      "exports",
      "module"
    ], function(A, _, N) {
      function L(M, $, a) {
        Object.defineProperty(M, $, {
          value: a,
          enumerable: false,
          writable: true,
          configurable: true
        });
      }
      String.prototype.startsWith || L(String.prototype, "startsWith", function(M, $) {
        return $ = $ || 0, this.lastIndexOf(M, $) === $;
      }), String.prototype.endsWith || L(String.prototype, "endsWith", function(M, $) {
        var a = this;
        ($ === void 0 || $ > a.length) && ($ = a.length), $ -= M.length;
        var l = a.indexOf(M, $);
        return l !== -1 && l === $;
      }), String.prototype.repeat || L(String.prototype, "repeat", function(M) {
        for (var $ = "", a = this; M > 0; ) M & 1 && ($ += a), (M >>= 1) && (a += a);
        return $;
      }), String.prototype.includes || L(String.prototype, "includes", function(M, $) {
        return this.indexOf(M, $) != -1;
      }), Object.assign || (Object.assign = function(M) {
        if (M == null) throw new TypeError("Cannot convert undefined or null to object");
        for (var $ = Object(M), a = 1; a < arguments.length; a++) {
          var l = arguments[a];
          l != null && Object.keys(l).forEach(function(i) {
            $[i] = l[i];
          });
        }
        return $;
      }), Object.values || (Object.values = function(M) {
        return Object.keys(M).map(function($) {
          return M[$];
        });
      }), Array.prototype.find || L(Array.prototype, "find", function(M) {
        for (var $ = this.length, a = arguments[1], l = 0; l < $; l++) {
          var i = this[l];
          if (M.call(a, i, l, this)) return i;
        }
      }), Array.prototype.findIndex || L(Array.prototype, "findIndex", function(M) {
        for (var $ = this.length, a = arguments[1], l = 0; l < $; l++) {
          var i = this[l];
          if (M.call(a, i, l, this)) return l;
        }
      }), Array.prototype.includes || L(Array.prototype, "includes", function(M, $) {
        return this.indexOf(M, $) != -1;
      }), Array.prototype.fill || L(Array.prototype, "fill", function(M) {
        for (var $ = this, a = $.length >>> 0, l = arguments[1], i = l >> 0, o = i < 0 ? Math.max(a + i, 0) : Math.min(i, a), r = arguments[2], n = r === void 0 ? a : r >> 0, e = n < 0 ? Math.max(a + n, 0) : Math.min(n, a); o < e; ) $[o] = M, o++;
        return $;
      }), Array.of || L(Array, "of", function() {
        return Array.prototype.slice.call(arguments);
      });
    }), ace.define("ace/lib/fixoldbrowsers", [
      "require",
      "exports",
      "module",
      "ace/lib/es6-shim"
    ], function(A, _, N) {
      A("./es6-shim");
    }), ace.define("ace/lib/deep_copy", [
      "require",
      "exports",
      "module"
    ], function(A, _, N) {
      _.deepCopy = function L(M) {
        if (typeof M != "object" || !M) return M;
        var $;
        if (Array.isArray(M)) {
          $ = [];
          for (var a = 0; a < M.length; a++) $[a] = L(M[a]);
          return $;
        }
        if (Object.prototype.toString.call(M) !== "[object Object]") return M;
        $ = {};
        for (var a in M) $[a] = L(M[a]);
        return $;
      };
    }), ace.define("ace/lib/lang", [
      "require",
      "exports",
      "module",
      "ace/lib/deep_copy"
    ], function(A, _, N) {
      _.last = function($) {
        return $[$.length - 1];
      }, _.stringReverse = function($) {
        return $.split("").reverse().join("");
      }, _.stringRepeat = function($, a) {
        for (var l = ""; a > 0; ) a & 1 && (l += $), (a >>= 1) && ($ += $);
        return l;
      };
      var L = /^\s\s*/, M = /\s\s*$/;
      _.stringTrimLeft = function($) {
        return $.replace(L, "");
      }, _.stringTrimRight = function($) {
        return $.replace(M, "");
      }, _.copyObject = function($) {
        var a = {};
        for (var l in $) a[l] = $[l];
        return a;
      }, _.copyArray = function($) {
        for (var a = [], l = 0, i = $.length; l < i; l++) $[l] && typeof $[l] == "object" ? a[l] = this.copyObject($[l]) : a[l] = $[l];
        return a;
      }, _.deepCopy = A("./deep_copy").deepCopy, _.arrayToMap = function($) {
        for (var a = {}, l = 0; l < $.length; l++) a[$[l]] = 1;
        return a;
      }, _.createMap = function($) {
        var a = /* @__PURE__ */ Object.create(null);
        for (var l in $) a[l] = $[l];
        return a;
      }, _.arrayRemove = function($, a) {
        for (var l = 0; l <= $.length; l++) a === $[l] && $.splice(l, 1);
      }, _.escapeRegExp = function($) {
        return $.replace(/([.*+?^${}()|[\]\/\\])/g, "\\$1");
      }, _.escapeHTML = function($) {
        return ("" + $).replace(/&/g, "&#38;").replace(/"/g, "&#34;").replace(/'/g, "&#39;").replace(/</g, "&#60;");
      }, _.getMatchOffsets = function($, a) {
        var l = [];
        return $.replace(a, function(i) {
          l.push({
            offset: arguments[arguments.length - 2],
            length: i.length
          });
        }), l;
      }, _.deferredCall = function($) {
        var a = null, l = function() {
          a = null, $();
        }, i = function(o) {
          return i.cancel(), a = setTimeout(l, o || 0), i;
        };
        return i.schedule = i, i.call = function() {
          return this.cancel(), $(), i;
        }, i.cancel = function() {
          return clearTimeout(a), a = null, i;
        }, i.isPending = function() {
          return a;
        }, i;
      }, _.delayedCall = function($, a) {
        var l = null, i = function() {
          l = null, $();
        }, o = function(r) {
          l == null && (l = setTimeout(i, r || a));
        };
        return o.delay = function(r) {
          l && clearTimeout(l), l = setTimeout(i, r || a);
        }, o.schedule = o, o.call = function() {
          this.cancel(), $();
        }, o.cancel = function() {
          l && clearTimeout(l), l = null;
        }, o.isPending = function() {
          return l;
        }, o;
      }, _.sleep = function($) {
        return new Promise(function(a) {
          setTimeout(a, $);
        });
      }, _.supportsLookbehind = function() {
        try {
          new RegExp("(?<=.)");
        } catch {
          return false;
        }
        return true;
      }, _.skipEmptyMatch = function($, a, l) {
        return l && $.codePointAt(a) > 65535 ? 2 : 1;
      };
    }), ace.define("ace/lib/useragent", [
      "require",
      "exports",
      "module"
    ], function(A, _, N) {
      _.OS = {
        LINUX: "LINUX",
        MAC: "MAC",
        WINDOWS: "WINDOWS"
      }, _.getOS = function() {
        return _.isMac ? _.OS.MAC : _.isLinux ? _.OS.LINUX : _.OS.WINDOWS;
      };
      var L = typeof navigator == "object" ? navigator : {}, M = (/mac|win|linux/i.exec(L.platform) || [
        "other"
      ])[0].toLowerCase(), $ = L.userAgent || "", a = L.appName || "";
      _.isWin = M == "win", _.isMac = M == "mac", _.isLinux = M == "linux", _.isIE = a == "Microsoft Internet Explorer" || a.indexOf("MSAppHost") >= 0 ? parseFloat(($.match(/(?:MSIE |Trident\/[0-9]+[\.0-9]+;.*rv:)([0-9]+[\.0-9]+)/) || [])[1]) : parseFloat(($.match(/(?:Trident\/[0-9]+[\.0-9]+;.*rv:)([0-9]+[\.0-9]+)/) || [])[1]), _.isOldIE = _.isIE && _.isIE < 9, _.isGecko = _.isMozilla = $.match(/ Gecko\/\d+/), _.isOpera = typeof opera == "object" && Object.prototype.toString.call(window.opera) == "[object Opera]", _.isWebKit = parseFloat($.split("WebKit/")[1]) || void 0, _.isChrome = parseFloat($.split(" Chrome/")[1]) || void 0, _.isSafari = parseFloat($.split(" Safari/")[1]) && !_.isChrome || void 0, _.isEdge = parseFloat($.split(" Edge/")[1]) || void 0, _.isAIR = $.indexOf("AdobeAIR") >= 0, _.isAndroid = $.indexOf("Android") >= 0, _.isChromeOS = $.indexOf(" CrOS ") >= 0, _.isIOS = /iPad|iPhone|iPod/.test($) && !window.MSStream, _.isIOS && (_.isMac = true), _.isMobile = _.isIOS || _.isAndroid;
    }), ace.define("ace/lib/dom", [
      "require",
      "exports",
      "module",
      "ace/lib/useragent"
    ], function(A, _, N) {
      var L = A("./useragent"), M = "http://www.w3.org/1999/xhtml";
      _.buildDom = function r(n, e, t) {
        if (typeof n == "string" && n) {
          var s = document.createTextNode(n);
          return e && e.appendChild(s), s;
        }
        if (!Array.isArray(n)) return n && n.appendChild && e && e.appendChild(n), n;
        if (typeof n[0] != "string" || !n[0]) {
          for (var h = [], u = 0; u < n.length; u++) {
            var S = r(n[u], e, t);
            S && h.push(S);
          }
          return h;
        }
        var b = document.createElement(n[0]), f = n[1], c = 1;
        f && typeof f == "object" && !Array.isArray(f) && (c = 2);
        for (var u = c; u < n.length; u++) r(n[u], b, t);
        return c == 2 && Object.keys(f).forEach(function(w) {
          var C = f[w];
          w === "class" ? b.className = Array.isArray(C) ? C.join(" ") : C : typeof C == "function" || w == "value" || w[0] == "$" ? b[w] = C : w === "ref" ? t && (t[C] = b) : w === "style" ? typeof C == "string" && (b.style.cssText = C) : C != null && b.setAttribute(w, C);
        }), e && e.appendChild(b), b;
      }, _.getDocumentHead = function(r) {
        return r || (r = document), r.head || r.getElementsByTagName("head")[0] || r.documentElement;
      }, _.createElement = function(r, n) {
        return document.createElementNS ? document.createElementNS(n || M, r) : document.createElement(r);
      }, _.removeChildren = function(r) {
        r.innerHTML = "";
      }, _.createTextNode = function(r, n) {
        var e = n ? n.ownerDocument : document;
        return e.createTextNode(r);
      }, _.createFragment = function(r) {
        var n = r ? r.ownerDocument : document;
        return n.createDocumentFragment();
      }, _.hasCssClass = function(r, n) {
        var e = (r.className + "").split(/\s+/g);
        return e.indexOf(n) !== -1;
      }, _.addCssClass = function(r, n) {
        _.hasCssClass(r, n) || (r.className += " " + n);
      }, _.removeCssClass = function(r, n) {
        for (var e = r.className.split(/\s+/g); ; ) {
          var t = e.indexOf(n);
          if (t == -1) break;
          e.splice(t, 1);
        }
        r.className = e.join(" ");
      }, _.toggleCssClass = function(r, n) {
        for (var e = r.className.split(/\s+/g), t = true; ; ) {
          var s = e.indexOf(n);
          if (s == -1) break;
          t = false, e.splice(s, 1);
        }
        return t && e.push(n), r.className = e.join(" "), t;
      }, _.setCssClass = function(r, n, e) {
        e ? _.addCssClass(r, n) : _.removeCssClass(r, n);
      }, _.hasCssString = function(r, n) {
        var e = 0, t;
        if (n = n || document, t = n.querySelectorAll("style")) {
          for (; e < t.length; ) if (t[e++].id === r) return true;
        }
      }, _.removeElementById = function(r, n) {
        n = n || document, n.getElementById(r) && n.getElementById(r).remove();
      };
      var $, a = [];
      _.useStrictCSP = function(r) {
        $ = r, r == false ? l() : a || (a = []);
      };
      function l() {
        var r = a;
        a = null, r && r.forEach(function(n) {
          i(n[0], n[1]);
        });
      }
      function i(r, n, e) {
        if (!(typeof document > "u")) {
          if (a) {
            if (e) l();
            else if (e === false) return a.push([
              r,
              n
            ]);
          }
          if (!$) {
            var t = e;
            !e || !e.getRootNode ? t = document : (t = e.getRootNode(), (!t || t == e) && (t = document));
            var s = t.ownerDocument || t;
            if (n && _.hasCssString(n, t)) return null;
            n && (r += `
/*# sourceURL=ace/css/` + n + " */");
            var h = _.createElement("style");
            h.appendChild(s.createTextNode(r)), n && (h.id = n), t == s && (t = _.getDocumentHead(s)), t.insertBefore(h, t.firstChild);
          }
        }
      }
      if (_.importCssString = i, _.importCssStylsheet = function(r, n) {
        _.buildDom([
          "link",
          {
            rel: "stylesheet",
            href: r
          }
        ], _.getDocumentHead(n));
      }, _.$fixPositionBug = function(r) {
        var n = r.getBoundingClientRect();
        if (r.style.left) {
          var e = parseFloat(r.style.left), t = +n.left;
          Math.abs(e - t) > 1 && (r.style.left = 2 * e - t + "px");
        }
        if (r.style.right) {
          var e = parseFloat(r.style.right), t = window.innerWidth - n.right;
          Math.abs(e - t) > 1 && (r.style.right = 2 * e - t + "px");
        }
        if (r.style.top) {
          var e = parseFloat(r.style.top), t = +n.top;
          Math.abs(e - t) > 1 && (r.style.top = 2 * e - t + "px");
        }
        if (r.style.bottom) {
          var e = parseFloat(r.style.bottom), t = window.innerHeight - n.bottom;
          Math.abs(e - t) > 1 && (r.style.bottom = 2 * e - t + "px");
        }
      }, _.scrollbarWidth = function(r) {
        var n = _.createElement("ace_inner");
        n.style.width = "100%", n.style.minWidth = "0px", n.style.height = "200px", n.style.display = "block";
        var e = _.createElement("ace_outer"), t = e.style;
        t.position = "absolute", t.left = "-10000px", t.overflow = "hidden", t.width = "200px", t.minWidth = "0px", t.height = "150px", t.display = "block", e.appendChild(n);
        var s = r && r.documentElement || document && document.documentElement;
        if (!s) return 0;
        s.appendChild(e);
        var h = n.offsetWidth;
        t.overflow = "scroll";
        var u = n.offsetWidth;
        return h === u && (u = e.clientWidth), s.removeChild(e), h - u;
      }, _.computedStyle = function(r, n) {
        return window.getComputedStyle(r, "") || {};
      }, _.setStyle = function(r, n, e) {
        r[n] !== e && (r[n] = e);
      }, _.HAS_CSS_ANIMATION = false, _.HAS_CSS_TRANSFORMS = false, _.HI_DPI = L.isWin ? typeof window < "u" && window.devicePixelRatio >= 1.5 : true, L.isChromeOS && (_.HI_DPI = false), typeof document < "u") {
        var o = document.createElement("div");
        _.HI_DPI && o.style.transform !== void 0 && (_.HAS_CSS_TRANSFORMS = true), !L.isEdge && typeof o.style.animationName < "u" && (_.HAS_CSS_ANIMATION = true), o = null;
      }
      _.HAS_CSS_TRANSFORMS ? _.translate = function(r, n, e) {
        r.style.transform = "translate(" + Math.round(n) + "px, " + Math.round(e) + "px)";
      } : _.translate = function(r, n, e) {
        r.style.top = Math.round(e) + "px", r.style.left = Math.round(n) + "px";
      };
    }), ace.define("ace/lib/net", [
      "require",
      "exports",
      "module",
      "ace/lib/dom"
    ], function(A, _, N) {
      var L = A("./dom");
      _.get = function(M, $) {
        var a = new XMLHttpRequest();
        a.open("GET", M, true), a.onreadystatechange = function() {
          a.readyState === 4 && $(a.responseText);
        }, a.send(null);
      }, _.loadScript = function(M, $) {
        var a = L.getDocumentHead(), l = document.createElement("script");
        l.src = M, a.appendChild(l), l.onload = l.onreadystatechange = function(i, o) {
          (o || !l.readyState || l.readyState == "loaded" || l.readyState == "complete") && (l = l.onload = l.onreadystatechange = null, o || $());
        };
      }, _.qualifyURL = function(M) {
        var $ = document.createElement("a");
        return $.href = M, $.href;
      };
    }), ace.define("ace/lib/oop", [
      "require",
      "exports",
      "module"
    ], function(A, _, N) {
      _.inherits = function(L, M) {
        L.super_ = M, L.prototype = Object.create(M.prototype, {
          constructor: {
            value: L,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
      }, _.mixin = function(L, M) {
        for (var $ in M) L[$] = M[$];
        return L;
      }, _.implement = function(L, M) {
        _.mixin(L, M);
      };
    }), ace.define("ace/lib/event_emitter", [
      "require",
      "exports",
      "module"
    ], function(A, _, N) {
      var L = {}, M = function() {
        this.propagationStopped = true;
      }, $ = function() {
        this.defaultPrevented = true;
      };
      L._emit = L._dispatchEvent = function(a, l) {
        this._eventRegistry || (this._eventRegistry = {}), this._defaultHandlers || (this._defaultHandlers = {});
        var i = this._eventRegistry[a] || [], o = this._defaultHandlers[a];
        if (!(!i.length && !o)) {
          (typeof l != "object" || !l) && (l = {}), l.type || (l.type = a), l.stopPropagation || (l.stopPropagation = M), l.preventDefault || (l.preventDefault = $), i = i.slice();
          for (var r = 0; r < i.length && (i[r](l, this), !l.propagationStopped); r++) ;
          if (o && !l.defaultPrevented) return o(l, this);
        }
      }, L._signal = function(a, l) {
        var i = (this._eventRegistry || {})[a];
        if (i) {
          i = i.slice();
          for (var o = 0; o < i.length; o++) i[o](l, this);
        }
      }, L.once = function(a, l) {
        var i = this;
        if (this.on(a, function o() {
          i.off(a, o), l.apply(null, arguments);
        }), !l) return new Promise(function(o) {
          l = o;
        });
      }, L.setDefaultHandler = function(a, l) {
        var i = this._defaultHandlers;
        if (i || (i = this._defaultHandlers = {
          _disabled_: {}
        }), i[a]) {
          var o = i[a], r = i._disabled_[a];
          r || (i._disabled_[a] = r = []), r.push(o);
          var n = r.indexOf(l);
          n != -1 && r.splice(n, 1);
        }
        i[a] = l;
      }, L.removeDefaultHandler = function(a, l) {
        var i = this._defaultHandlers;
        if (i) {
          var o = i._disabled_[a];
          if (i[a] == l) o && this.setDefaultHandler(a, o.pop());
          else if (o) {
            var r = o.indexOf(l);
            r != -1 && o.splice(r, 1);
          }
        }
      }, L.on = L.addEventListener = function(a, l, i) {
        this._eventRegistry = this._eventRegistry || {};
        var o = this._eventRegistry[a];
        return o || (o = this._eventRegistry[a] = []), o.indexOf(l) == -1 && o[i ? "unshift" : "push"](l), l;
      }, L.off = L.removeListener = L.removeEventListener = function(a, l) {
        this._eventRegistry = this._eventRegistry || {};
        var i = this._eventRegistry[a];
        if (i) {
          var o = i.indexOf(l);
          o !== -1 && i.splice(o, 1);
        }
      }, L.removeAllListeners = function(a) {
        a || (this._eventRegistry = this._defaultHandlers = void 0), this._eventRegistry && (this._eventRegistry[a] = void 0), this._defaultHandlers && (this._defaultHandlers[a] = void 0);
      }, _.EventEmitter = L;
    }), ace.define("ace/lib/report_error", [
      "require",
      "exports",
      "module"
    ], function(A, _, N) {
      _.reportError = function(M, $) {
        var a = new Error(M);
        a.data = $, typeof console == "object" && console.error && console.error(a), setTimeout(function() {
          throw a;
        });
      };
    }), ace.define("ace/lib/default_english_messages", [
      "require",
      "exports",
      "module"
    ], function(A, _, N) {
      var L = {
        "autocomplete.popup.aria-roledescription": "Autocomplete suggestions",
        "autocomplete.popup.aria-label": "Autocomplete suggestions",
        "autocomplete.popup.item.aria-roledescription": "item",
        "autocomplete.loading": "Loading...",
        "editor.scroller.aria-roledescription": "editor",
        "editor.scroller.aria-label": "Editor content, press Enter to start editing, press Escape to exit",
        "editor.gutter.aria-roledescription": "editor gutter",
        "editor.gutter.aria-label": "Editor gutter, press Enter to interact with controls using arrow keys, press Escape to exit",
        "error-marker.good-state": "Looks good!",
        "prompt.recently-used": "Recently used",
        "prompt.other-commands": "Other commands",
        "prompt.no-matching-commands": "No matching commands",
        "search-box.find.placeholder": "Search for",
        "search-box.find-all.text": "All",
        "search-box.replace.placeholder": "Replace with",
        "search-box.replace-next.text": "Replace",
        "search-box.replace-all.text": "All",
        "search-box.toggle-replace.title": "Toggle Replace mode",
        "search-box.toggle-regexp.title": "RegExp Search",
        "search-box.toggle-case.title": "CaseSensitive Search",
        "search-box.toggle-whole-word.title": "Whole Word Search",
        "search-box.toggle-in-selection.title": "Search In Selection",
        "search-box.search-counter": "$0 of $1",
        "text-input.aria-roledescription": "editor",
        "text-input.aria-label": "Cursor at row $0",
        "gutter.code-folding.range.aria-label": "Toggle code folding, rows $0 through $1",
        "gutter.code-folding.closed.aria-label": "Toggle code folding, rows $0 through $1",
        "gutter.code-folding.open.aria-label": "Toggle code folding, row $0",
        "gutter.code-folding.closed.title": "Unfold code",
        "gutter.code-folding.open.title": "Fold code",
        "gutter.annotation.aria-label.error": "Error, read annotations row $0",
        "gutter.annotation.aria-label.warning": "Warning, read annotations row $0",
        "gutter.annotation.aria-label.info": "Info, read annotations row $0",
        "inline-fold.closed.title": "Unfold code",
        "gutter-tooltip.aria-label.error.singular": "error",
        "gutter-tooltip.aria-label.error.plural": "errors",
        "gutter-tooltip.aria-label.warning.singular": "warning",
        "gutter-tooltip.aria-label.warning.plural": "warnings",
        "gutter-tooltip.aria-label.info.singular": "information message",
        "gutter-tooltip.aria-label.info.plural": "information messages",
        "gutter.annotation.aria-label.security": "Security finding, read annotations row $0",
        "gutter.annotation.aria-label.hint": "Suggestion, read annotations row $0",
        "gutter-tooltip.aria-label.security.singular": "security finding",
        "gutter-tooltip.aria-label.security.plural": "security findings",
        "gutter-tooltip.aria-label.hint.singular": "suggestion",
        "gutter-tooltip.aria-label.hint.plural": "suggestions",
        "editor.tooltip.disable-editing": "Editing is disabled"
      };
      _.defaultEnglishMessages = L;
    }), ace.define("ace/lib/app_config", [
      "require",
      "exports",
      "module",
      "ace/lib/oop",
      "ace/lib/event_emitter",
      "ace/lib/report_error",
      "ace/lib/default_english_messages"
    ], function(A, _, N) {
      "no use strict";
      var L = A("./oop"), M = A("./event_emitter").EventEmitter, $ = A("./report_error").reportError, a = A("./default_english_messages").defaultEnglishMessages, l = {
        setOptions: function(e) {
          Object.keys(e).forEach(function(t) {
            this.setOption(t, e[t]);
          }, this);
        },
        getOptions: function(e) {
          var t = {};
          if (e) Array.isArray(e) || (e = Object.keys(e));
          else {
            var s = this.$options;
            e = Object.keys(s).filter(function(h) {
              return !s[h].hidden;
            });
          }
          return e.forEach(function(h) {
            t[h] = this.getOption(h);
          }, this), t;
        },
        setOption: function(e, t) {
          if (this["$" + e] !== t) {
            var s = this.$options[e];
            if (!s) return i('misspelled option "' + e + '"');
            if (s.forwardTo) return this[s.forwardTo] && this[s.forwardTo].setOption(e, t);
            s.handlesSet || (this["$" + e] = t), s && s.set && s.set.call(this, t);
          }
        },
        getOption: function(e) {
          var t = this.$options[e];
          return t ? t.forwardTo ? this[t.forwardTo] && this[t.forwardTo].getOption(e) : t && t.get ? t.get.call(this) : this["$" + e] : i('misspelled option "' + e + '"');
        }
      };
      function i(e) {
        typeof console < "u" && console.warn && console.warn.apply(console, arguments);
      }
      var o, r, n = (function() {
        function e() {
          this.$defaultOptions = {}, o = a, r = "dollarSigns";
        }
        return e.prototype.defineOptions = function(t, s, h) {
          return t.$options || (this.$defaultOptions[s] = t.$options = {}), Object.keys(h).forEach(function(u) {
            var S = h[u];
            typeof S == "string" && (S = {
              forwardTo: S
            }), S.name || (S.name = u), t.$options[S.name] = S, "initialValue" in S && (t["$" + S.name] = S.initialValue);
          }), L.implement(t, l), this;
        }, e.prototype.resetOptions = function(t) {
          Object.keys(t.$options).forEach(function(s) {
            var h = t.$options[s];
            "value" in h && t.setOption(s, h.value);
          });
        }, e.prototype.setDefaultValue = function(t, s, h) {
          if (!t) {
            for (t in this.$defaultOptions) if (this.$defaultOptions[t][s]) break;
            if (!this.$defaultOptions[t][s]) return false;
          }
          var u = this.$defaultOptions[t] || (this.$defaultOptions[t] = {});
          u[s] && (u.forwardTo ? this.setDefaultValue(u.forwardTo, s, h) : u[s].value = h);
        }, e.prototype.setDefaultValues = function(t, s) {
          Object.keys(s).forEach(function(h) {
            this.setDefaultValue(t, h, s[h]);
          }, this);
        }, e.prototype.setMessages = function(t, s) {
          o = t, s && s.placeholders && (r = s.placeholders);
        }, e.prototype.nls = function(t, s, h) {
          o[t] || (i("No message found for the key '" + t + "' in messages with id " + o.$id + ", trying to find a translation for the default string '" + s + "'."), o[s] || i("No message found for the default string '" + s + "' in the provided messages. Falling back to the default English message."));
          var u = o[t] || o[s] || s;
          return h && (r === "dollarSigns" && (u = u.replace(/\$(\$|[\d]+)/g, function(S, b) {
            return b == "$" ? "$" : h[b];
          })), r === "curlyBrackets" && (u = u.replace(/\{([^\}]+)\}/g, function(S, b) {
            return h[b];
          }))), u;
        }, e;
      })();
      n.prototype.warn = i, n.prototype.reportError = $, L.implement(n.prototype, M), _.AppConfig = n;
    }), ace.define("ace/theme/textmate-css", [
      "require",
      "exports",
      "module"
    ], function(A, _, N) {
      N.exports = `.ace-tm .ace_gutter {
  background: #f0f0f0;
  color: #333;
}

.ace-tm .ace_print-margin {
  width: 1px;
  background: #e8e8e8;
}

.ace-tm .ace_fold {
    background-color: #6B72E6;
}

.ace-tm {
  background-color: #FFFFFF;
  color: black;
}

.ace-tm .ace_cursor {
  color: black;
}
        
.ace-tm .ace_invisible {
  color: rgb(191, 191, 191);
}

.ace-tm .ace_storage,
.ace-tm .ace_keyword {
  color: blue;
}

.ace-tm .ace_constant {
  color: rgb(197, 6, 11);
}

.ace-tm .ace_constant.ace_buildin {
  color: rgb(88, 72, 246);
}

.ace-tm .ace_constant.ace_language {
  color: rgb(88, 92, 246);
}

.ace-tm .ace_constant.ace_library {
  color: rgb(6, 150, 14);
}

.ace-tm .ace_invalid {
  background-color: rgba(255, 0, 0, 0.1);
  color: red;
}

.ace-tm .ace_support.ace_function {
  color: rgb(60, 76, 114);
}

.ace-tm .ace_support.ace_constant {
  color: rgb(6, 150, 14);
}

.ace-tm .ace_support.ace_type,
.ace-tm .ace_support.ace_class {
  color: rgb(109, 121, 222);
}

.ace-tm .ace_keyword.ace_operator {
  color: rgb(104, 118, 135);
}

.ace-tm .ace_string {
  color: rgb(3, 106, 7);
}

.ace-tm .ace_comment {
  color: rgb(76, 136, 107);
}

.ace-tm .ace_comment.ace_doc {
  color: rgb(0, 102, 255);
}

.ace-tm .ace_comment.ace_doc.ace_tag {
  color: rgb(128, 159, 191);
}

.ace-tm .ace_constant.ace_numeric {
  color: rgb(0, 0, 205);
}

.ace-tm .ace_variable {
  color: rgb(49, 132, 149);
}

.ace-tm .ace_xml-pe {
  color: rgb(104, 104, 91);
}

.ace-tm .ace_entity.ace_name.ace_function {
  color: #0000A2;
}


.ace-tm .ace_heading {
  color: rgb(12, 7, 255);
}

.ace-tm .ace_list {
  color:rgb(185, 6, 144);
}

.ace-tm .ace_meta.ace_tag {
  color:rgb(0, 22, 142);
}

.ace-tm .ace_string.ace_regex {
  color: rgb(255, 0, 0)
}

.ace-tm .ace_marker-layer .ace_selection {
  background: rgb(181, 213, 255);
}
.ace-tm.ace_multiselect .ace_selection.ace_start {
  box-shadow: 0 0 3px 0px white;
}
.ace-tm .ace_marker-layer .ace_step {
  background: rgb(252, 255, 0);
}

.ace-tm .ace_marker-layer .ace_stack {
  background: rgb(164, 229, 101);
}

.ace-tm .ace_marker-layer .ace_bracket {
  margin: -1px 0 0 -1px;
  border: 1px solid rgb(192, 192, 192);
}

.ace-tm .ace_marker-layer .ace_active-line {
  background: rgba(0, 0, 0, 0.07);
}

.ace-tm .ace_gutter-active-line {
    background-color : #dcdcdc;
}

.ace-tm .ace_marker-layer .ace_selected-word {
  background: rgb(250, 250, 255);
  border: 1px solid rgb(200, 200, 250);
}

.ace-tm .ace_indent-guide {
  background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAE0lEQVQImWP4////f4bLly//BwAmVgd1/w11/gAAAABJRU5ErkJggg==") right repeat-y;
}

.ace-tm .ace_indent-guide-active {
  background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAZSURBVHjaYvj///9/hivKyv8BAAAA//8DACLqBhbvk+/eAAAAAElFTkSuQmCC") right repeat-y;
}
`;
    }), ace.define("ace/theme/textmate", [
      "require",
      "exports",
      "module",
      "ace/theme/textmate-css",
      "ace/lib/dom"
    ], function(A, _, N) {
      _.isDark = false, _.cssClass = "ace-tm", _.cssText = A("./textmate-css"), _.$id = "ace/theme/textmate";
      var L = A("../lib/dom");
      L.importCssString(_.cssText, _.cssClass, false);
    }), ace.define("ace/config", [
      "require",
      "exports",
      "module",
      "ace/lib/lang",
      "ace/lib/net",
      "ace/lib/dom",
      "ace/lib/app_config",
      "ace/theme/textmate"
    ], function(A, _, N) {
      "no use strict";
      var L = A("./lib/lang"), M = A("./lib/net"), $ = A("./lib/dom"), a = A("./lib/app_config").AppConfig;
      N.exports = _ = new a();
      var l = {
        packaged: false,
        workerPath: null,
        modePath: null,
        themePath: null,
        basePath: "",
        suffix: ".js",
        $moduleUrls: {},
        loadWorkerFromBlob: true,
        sharedPopups: false,
        useStrictCSP: null
      };
      _.get = function(n) {
        if (!l.hasOwnProperty(n)) throw new Error("Unknown config key: " + n);
        return l[n];
      }, _.set = function(n, e) {
        if (l.hasOwnProperty(n)) l[n] = e;
        else if (this.setDefaultValue("", n, e) == false) throw new Error("Unknown config key: " + n);
        n == "useStrictCSP" && $.useStrictCSP(e);
      }, _.all = function() {
        return L.copyObject(l);
      }, _.$modes = {}, _.moduleUrl = function(n, e) {
        if (l.$moduleUrls[n]) return l.$moduleUrls[n];
        var t = n.split("/");
        e = e || t[t.length - 2] || "";
        var s = e == "snippets" ? "/" : "-", h = t[t.length - 1];
        if (e == "worker" && s == "-") {
          var u = new RegExp("^" + e + "[\\-_]|[\\-_]" + e + "$", "g");
          h = h.replace(u, "");
        }
        (!h || h == e) && t.length > 1 && (h = t[t.length - 2]);
        var S = l[e + "Path"];
        return S == null ? S = l.basePath : s == "/" && (e = s = ""), S && S.slice(-1) != "/" && (S += "/"), S + e + s + h + this.get("suffix");
      }, _.setModuleUrl = function(n, e) {
        return l.$moduleUrls[n] = e;
      };
      var i = function(n, e) {
        if (n === "ace/theme/textmate" || n === "./theme/textmate") return e(null, A("./theme/textmate"));
        if (o) return o(n, e);
        console.error("loader is not configured");
      }, o;
      _.setLoader = function(n) {
        o = n;
      }, _.dynamicModules = /* @__PURE__ */ Object.create(null), _.$loading = {}, _.$loaded = {}, _.loadModule = function(n, e) {
        var t;
        if (Array.isArray(n)) var s = n[0], h = n[1];
        else if (typeof n == "string") var h = n;
        var u = function(S) {
          if (S && !_.$loading[h]) return e && e(S);
          if (_.$loading[h] || (_.$loading[h] = []), _.$loading[h].push(e), !(_.$loading[h].length > 1)) {
            var b = function() {
              i(h, function(f, c) {
                c && (_.$loaded[h] = c), _._emit("load.module", {
                  name: h,
                  module: c
                });
                var w = _.$loading[h];
                _.$loading[h] = null, w.forEach(function(C) {
                  C && C(c);
                });
              });
            };
            if (!_.get("packaged")) return b();
            M.loadScript(_.moduleUrl(h, s), b), r();
          }
        };
        if (_.dynamicModules[h]) _.dynamicModules[h]().then(function(S) {
          S.default ? u(S.default) : u(S);
        });
        else {
          try {
            t = this.$require(h);
          } catch {
          }
          u(t || _.$loaded[h]);
        }
      }, _.$require = function(n) {
        if (typeof N.require == "function") {
          var e = "require";
          return N[e](n);
        }
      }, _.setModuleLoader = function(n, e) {
        _.dynamicModules[n] = e;
      };
      var r = function() {
        !l.basePath && !l.workerPath && !l.modePath && !l.themePath && !Object.keys(l.$moduleUrls).length && (console.error("Unable to infer path to ace from script src,", "use ace.config.set('basePath', 'path') to enable dynamic loading of modes and themes", "or with webpack use ace/webpack-resolver"), r = function() {
        });
      };
      _.version = "1.44.0";
    }), ace.define("ace/loader_build", [
      "require",
      "exports",
      "module",
      "ace/lib/fixoldbrowsers",
      "ace/config"
    ], function(A, _, N) {
      A("./lib/fixoldbrowsers");
      var L = A("./config");
      L.setLoader(function(l, i) {
        A([
          l
        ], function(o) {
          i(null, o);
        });
      });
      var M = /* @__PURE__ */ (function() {
        return this || typeof window < "u" && window;
      })();
      N.exports = function(l) {
        L.init = $, L.$require = A, l.require = A;
      }, $(true);
      function $(l) {
        if (!(!M || !M.document)) {
          L.set("packaged", l || A.packaged || N.packaged || M.define && (void 0).packaged);
          var i = {}, o = "", r = document.currentScript || document._currentScript, n = r && r.ownerDocument || document;
          r && r.src && (o = r.src.split(/[?#]/)[0].split("/").slice(0, -1).join("/") || "");
          for (var e = n.getElementsByTagName("script"), t = 0; t < e.length; t++) {
            var s = e[t], h = s.src || s.getAttribute("src");
            if (h) {
              for (var u = s.attributes, S = 0, b = u.length; S < b; S++) {
                var f = u[S];
                f.name.indexOf("data-ace-") === 0 && (i[a(f.name.replace(/^data-ace-/, ""))] = f.value);
              }
              var c = h.match(/^(.*)\/ace([\-.]\w+)?\.js(\?|$)/);
              c && (o = c[1]);
            }
          }
          o && (i.base = i.base || o, i.packaged = true), i.basePath = i.base, i.workerPath = i.workerPath || i.base, i.modePath = i.modePath || i.base, i.themePath = i.themePath || i.base, delete i.base;
          for (var w in i) typeof i[w] < "u" && L.set(w, i[w]);
        }
      }
      function a(l) {
        return l.replace(/-(.)/g, function(i, o) {
          return o.toUpperCase();
        });
      }
    }), ace.define("ace/range", [
      "require",
      "exports",
      "module"
    ], function(A, _, N) {
      var L = (function() {
        function M($, a, l, i) {
          this.start = {
            row: $,
            column: a
          }, this.end = {
            row: l,
            column: i
          };
        }
        return M.prototype.isEqual = function($) {
          return this.start.row === $.start.row && this.end.row === $.end.row && this.start.column === $.start.column && this.end.column === $.end.column;
        }, M.prototype.toString = function() {
          return "Range: [" + this.start.row + "/" + this.start.column + "] -> [" + this.end.row + "/" + this.end.column + "]";
        }, M.prototype.contains = function($, a) {
          return this.compare($, a) == 0;
        }, M.prototype.compareRange = function($) {
          var a, l = $.end, i = $.start;
          return a = this.compare(l.row, l.column), a == 1 ? (a = this.compare(i.row, i.column), a == 1 ? 2 : a == 0 ? 1 : 0) : a == -1 ? -2 : (a = this.compare(i.row, i.column), a == -1 ? -1 : a == 1 ? 42 : 0);
        }, M.prototype.comparePoint = function($) {
          return this.compare($.row, $.column);
        }, M.prototype.containsRange = function($) {
          return this.comparePoint($.start) == 0 && this.comparePoint($.end) == 0;
        }, M.prototype.intersects = function($) {
          var a = this.compareRange($);
          return a == -1 || a == 0 || a == 1;
        }, M.prototype.isEnd = function($, a) {
          return this.end.row == $ && this.end.column == a;
        }, M.prototype.isStart = function($, a) {
          return this.start.row == $ && this.start.column == a;
        }, M.prototype.setStart = function($, a) {
          typeof $ == "object" ? (this.start.column = $.column, this.start.row = $.row) : (this.start.row = $, this.start.column = a);
        }, M.prototype.setEnd = function($, a) {
          typeof $ == "object" ? (this.end.column = $.column, this.end.row = $.row) : (this.end.row = $, this.end.column = a);
        }, M.prototype.inside = function($, a) {
          return this.compare($, a) == 0 ? !(this.isEnd($, a) || this.isStart($, a)) : false;
        }, M.prototype.insideStart = function($, a) {
          return this.compare($, a) == 0 ? !this.isEnd($, a) : false;
        }, M.prototype.insideEnd = function($, a) {
          return this.compare($, a) == 0 ? !this.isStart($, a) : false;
        }, M.prototype.compare = function($, a) {
          return !this.isMultiLine() && $ === this.start.row ? a < this.start.column ? -1 : a > this.end.column ? 1 : 0 : $ < this.start.row ? -1 : $ > this.end.row ? 1 : this.start.row === $ ? a >= this.start.column ? 0 : -1 : this.end.row === $ ? a <= this.end.column ? 0 : 1 : 0;
        }, M.prototype.compareStart = function($, a) {
          return this.start.row == $ && this.start.column == a ? -1 : this.compare($, a);
        }, M.prototype.compareEnd = function($, a) {
          return this.end.row == $ && this.end.column == a ? 1 : this.compare($, a);
        }, M.prototype.compareInside = function($, a) {
          return this.end.row == $ && this.end.column == a ? 1 : this.start.row == $ && this.start.column == a ? -1 : this.compare($, a);
        }, M.prototype.clipRows = function($, a) {
          if (this.end.row > a) var l = {
            row: a + 1,
            column: 0
          };
          else if (this.end.row < $) var l = {
            row: $,
            column: 0
          };
          if (this.start.row > a) var i = {
            row: a + 1,
            column: 0
          };
          else if (this.start.row < $) var i = {
            row: $,
            column: 0
          };
          return M.fromPoints(i || this.start, l || this.end);
        }, M.prototype.extend = function($, a) {
          var l = this.compare($, a);
          if (l == 0) return this;
          if (l == -1) var i = {
            row: $,
            column: a
          };
          else var o = {
            row: $,
            column: a
          };
          return M.fromPoints(i || this.start, o || this.end);
        }, M.prototype.isEmpty = function() {
          return this.start.row === this.end.row && this.start.column === this.end.column;
        }, M.prototype.isMultiLine = function() {
          return this.start.row !== this.end.row;
        }, M.prototype.clone = function() {
          return M.fromPoints(this.start, this.end);
        }, M.prototype.collapseRows = function() {
          return this.end.column == 0 ? new M(this.start.row, 0, Math.max(this.start.row, this.end.row - 1), 0) : new M(this.start.row, 0, this.end.row, 0);
        }, M.prototype.toScreenRange = function($) {
          var a = $.documentToScreenPosition(this.start), l = $.documentToScreenPosition(this.end);
          return new M(a.row, a.column, l.row, l.column);
        }, M.prototype.moveBy = function($, a) {
          this.start.row += $, this.start.column += a, this.end.row += $, this.end.column += a;
        }, M;
      })();
      L.fromPoints = function(M, $) {
        return new L(M.row, M.column, $.row, $.column);
      }, L.comparePoints = function(M, $) {
        return M.row - $.row || M.column - $.column;
      }, _.Range = L;
    }), ace.define("ace/lib/keys", [
      "require",
      "exports",
      "module",
      "ace/lib/oop"
    ], function(A, _, N) {
      for (var L = A("./oop"), M = {
        MODIFIER_KEYS: {
          16: "Shift",
          17: "Ctrl",
          18: "Alt",
          224: "Meta",
          91: "MetaLeft",
          92: "MetaRight",
          93: "ContextMenu"
        },
        KEY_MODS: {
          ctrl: 1,
          alt: 2,
          option: 2,
          shift: 4,
          super: 8,
          meta: 8,
          command: 8,
          cmd: 8,
          control: 1
        },
        FUNCTION_KEYS: {
          8: "Backspace",
          9: "Tab",
          13: "Return",
          19: "Pause",
          27: "Esc",
          32: "Space",
          33: "PageUp",
          34: "PageDown",
          35: "End",
          36: "Home",
          37: "Left",
          38: "Up",
          39: "Right",
          40: "Down",
          44: "Print",
          45: "Insert",
          46: "Delete",
          "-13": "NumpadEnter",
          144: "Numlock",
          145: "Scrolllock"
        },
        PRINTABLE_KEYS: {
          32: " ",
          59: ";",
          61: "=",
          107: "+",
          109: "-",
          110: ".",
          186: ";",
          187: "=",
          188: ",",
          189: "-",
          190: ".",
          191: "/",
          192: "`",
          219: "[",
          220: "\\",
          221: "]",
          222: "'",
          111: "/",
          106: "*"
        }
      }, $ = {
        Command: 224,
        Backspace: 8,
        Tab: 9,
        Return: 13,
        Enter: 13,
        Pause: 19,
        Escape: 27,
        PageUp: 33,
        PageDown: 34,
        End: 35,
        Home: 36,
        Insert: 45,
        Delete: 46,
        ArrowLeft: 37,
        ArrowUp: 38,
        ArrowRight: 39,
        ArrowDown: 40,
        Backquote: 192,
        Minus: 189,
        Equal: 187,
        BracketLeft: 219,
        Backslash: 220,
        BracketRight: 221,
        Semicolon: 186,
        Quote: 222,
        Comma: 188,
        Period: 190,
        Slash: 191,
        Space: 32,
        NumpadAdd: 107,
        NumpadDecimal: 110,
        NumpadSubtract: 109,
        NumpadDivide: 111,
        NumpadMultiply: 106
      }, a = 0; a < 10; a++) $["Digit" + a] = 48 + a, $["Numpad" + a] = 96 + a, M.PRINTABLE_KEYS[48 + a] = "" + a, M.FUNCTION_KEYS[96 + a] = "Numpad" + a;
      for (var a = 65; a < 91; a++) {
        var l = String.fromCharCode(a + 32);
        $["Key" + l.toUpperCase()] = a, M.PRINTABLE_KEYS[a] = l;
      }
      for (var a = 1; a < 13; a++) $["F" + a] = 111 + a, M.FUNCTION_KEYS[111 + a] = "F" + a;
      var i = {
        Shift: 16,
        Control: 17,
        Alt: 18,
        Meta: 224
      };
      for (var o in i) $[o] = $[o + "Left"] = $[o + "Right"] = i[o];
      _.$codeToKeyCode = $, M.PRINTABLE_KEYS[173] = "-";
      for (var r in M.FUNCTION_KEYS) {
        var n = M.FUNCTION_KEYS[r].toLowerCase();
        M[n] = parseInt(r, 10);
      }
      for (var r in M.PRINTABLE_KEYS) {
        var n = M.PRINTABLE_KEYS[r].toLowerCase();
        M[n] = parseInt(r, 10);
      }
      L.mixin(M, M.MODIFIER_KEYS), L.mixin(M, M.PRINTABLE_KEYS), L.mixin(M, M.FUNCTION_KEYS), M.enter = M.return, M.escape = M.esc, M.del = M.delete, (function() {
        for (var e = [
          "cmd",
          "ctrl",
          "alt",
          "shift"
        ], t = Math.pow(2, e.length); t--; ) M.KEY_MODS[t] = e.filter(function(s) {
          return t & M.KEY_MODS[s];
        }).join("-") + "-";
      })(), M.KEY_MODS[0] = "", M.KEY_MODS[-1] = "input-", L.mixin(_, M), _.default = _, _.keyCodeToString = function(e) {
        var t = M[e];
        return typeof t != "string" && (t = String.fromCharCode(e)), t.toLowerCase();
      };
    }), ace.define("ace/lib/event", [
      "require",
      "exports",
      "module",
      "ace/lib/keys",
      "ace/lib/useragent"
    ], function(A, _, N) {
      var L = A("./keys"), M = A("./useragent"), $ = null, a = 0, l;
      function i() {
        l = false;
        try {
          document.createComment("").addEventListener("test", function() {
          }, {
            get passive() {
              return l = {
                passive: false
              }, true;
            }
          });
        } catch {
        }
      }
      function o() {
        return l == null && i(), l;
      }
      function r(S, b, f) {
        this.elem = S, this.type = b, this.callback = f;
      }
      r.prototype.destroy = function() {
        e(this.elem, this.type, this.callback), this.elem = this.type = this.callback = void 0;
      };
      var n = _.addListener = function(S, b, f, c) {
        S.addEventListener(b, f, o()), c && c.$toDestroy.push(new r(S, b, f));
      }, e = _.removeListener = function(S, b, f) {
        S.removeEventListener(b, f, o());
      };
      _.stopEvent = function(S) {
        return _.stopPropagation(S), _.preventDefault(S), false;
      }, _.stopPropagation = function(S) {
        S.stopPropagation && S.stopPropagation();
      }, _.preventDefault = function(S) {
        S.preventDefault && S.preventDefault();
      }, _.getButton = function(S) {
        return S.type == "dblclick" ? 0 : S.type == "contextmenu" || M.isMac && S.ctrlKey && !S.altKey && !S.shiftKey ? 2 : S.button;
      }, _.capture = function(S, b, f) {
        var c = S && S.ownerDocument || document;
        function w(C) {
          b && b(C), f && f(C), e(c, "mousemove", b), e(c, "mouseup", w), e(c, "dragstart", w);
        }
        return n(c, "mousemove", b), n(c, "mouseup", w), n(c, "dragstart", w), w;
      }, _.addMouseWheelListener = function(S, b, f) {
        n(S, "wheel", function(c) {
          var w = 0.15, C = c.deltaX || 0, p = c.deltaY || 0;
          switch (c.deltaMode) {
            case c.DOM_DELTA_PIXEL:
              c.wheelX = C * w, c.wheelY = p * w;
              break;
            case c.DOM_DELTA_LINE:
              var v = 15;
              c.wheelX = C * v, c.wheelY = p * v;
              break;
            case c.DOM_DELTA_PAGE:
              var k = 150;
              c.wheelX = C * k, c.wheelY = p * k;
              break;
          }
          b(c);
        }, f);
      }, _.addMultiMouseDownListener = function(S, b, f, c, w) {
        var C = 0, p, v, k, m = {
          2: "dblclick",
          3: "tripleclick",
          4: "quadclick"
        };
        function y(g) {
          if (_.getButton(g) !== 0 ? C = 0 : g.detail > 1 ? (C++, C > 4 && (C = 1)) : C = 1, M.isIE) {
            var d = Math.abs(g.clientX - p) > 5 || Math.abs(g.clientY - v) > 5;
            (!k || d) && (C = 1), k && clearTimeout(k), k = setTimeout(function() {
              k = null;
            }, b[C - 1] || 600), C == 1 && (p = g.clientX, v = g.clientY);
          }
          if (g._clicks = C, f[c]("mousedown", g), C > 4) C = 0;
          else if (C > 1) return f[c](m[C], g);
        }
        Array.isArray(S) || (S = [
          S
        ]), S.forEach(function(g) {
          n(g, "mousedown", y, w);
        });
      };
      function t(S) {
        return 0 | (S.ctrlKey ? 1 : 0) | (S.altKey ? 2 : 0) | (S.shiftKey ? 4 : 0) | (S.metaKey ? 8 : 0);
      }
      _.getModifierString = function(S) {
        return L.KEY_MODS[t(S)];
      };
      function s(S, b, f) {
        var c = t(b);
        if (!f && b.code && (f = L.$codeToKeyCode[b.code] || f), !M.isMac && $) {
          if (b.getModifierState && (b.getModifierState("OS") || b.getModifierState("Win")) && (c |= 8), $.altGr) if ((3 & c) != 3) $.altGr = 0;
          else return;
          if (f === 18 || f === 17) {
            var w = b.location;
            if (f === 17 && w === 1) $[f] == 1 && (a = b.timeStamp);
            else if (f === 18 && c === 3 && w === 2) {
              var C = b.timeStamp - a;
              C < 50 && ($.altGr = true);
            }
          }
        }
        if (f in L.MODIFIER_KEYS && (f = -1), !(!c && f === 13 && b.location === 3 && (S(b, c, -f), b.defaultPrevented))) {
          if (M.isChromeOS && c & 8) {
            if (S(b, c, f), b.defaultPrevented) return;
            c &= -9;
          }
          return !c && !(f in L.FUNCTION_KEYS) && !(f in L.PRINTABLE_KEYS) ? false : S(b, c, f);
        }
      }
      _.addCommandKeyListener = function(S, b, f) {
        var c = null;
        n(S, "keydown", function(w) {
          $[w.keyCode] = ($[w.keyCode] || 0) + 1;
          var C = s(b, w, w.keyCode);
          return c = w.defaultPrevented, C;
        }, f), n(S, "keypress", function(w) {
          c && (w.ctrlKey || w.altKey || w.shiftKey || w.metaKey) && (_.stopEvent(w), c = null);
        }, f), n(S, "keyup", function(w) {
          $[w.keyCode] = null;
        }, f), $ || (h(), n(window, "focus", h));
      };
      function h() {
        $ = /* @__PURE__ */ Object.create(null);
      }
      if (typeof window == "object" && window.postMessage && !M.isOldIE) {
        var u = 1;
        _.nextTick = function(S, b) {
          b = b || window;
          var f = "zero-timeout-message-" + u++, c = function(w) {
            w.data == f && (_.stopPropagation(w), e(b, "message", c), S());
          };
          n(b, "message", c), b.postMessage(f, "*");
        };
      }
      _.$idleBlocked = false, _.onIdle = function(S, b) {
        return setTimeout(function f() {
          _.$idleBlocked ? setTimeout(f, 100) : S();
        }, b);
      }, _.$idleBlockId = null, _.blockIdle = function(S) {
        _.$idleBlockId && clearTimeout(_.$idleBlockId), _.$idleBlocked = true, _.$idleBlockId = setTimeout(function() {
          _.$idleBlocked = false;
        }, S || 100);
      }, _.nextFrame = typeof window == "object" && (window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame), _.nextFrame ? _.nextFrame = _.nextFrame.bind(window) : _.nextFrame = function(S) {
        setTimeout(S, 17);
      };
    }), ace.define("ace/clipboard", [
      "require",
      "exports",
      "module"
    ], function(A, _, N) {
      var L;
      N.exports = {
        lineMode: false,
        pasteCancelled: function() {
          return L && L > Date.now() - 50 ? true : L = false;
        },
        cancel: function() {
          L = Date.now();
        }
      };
    }), ace.define("ace/keyboard/textinput", [
      "require",
      "exports",
      "module",
      "ace/lib/event",
      "ace/config",
      "ace/lib/useragent",
      "ace/lib/dom",
      "ace/lib/lang",
      "ace/clipboard",
      "ace/lib/keys"
    ], function(A, _, N) {
      var L = A("../lib/event"), M = A("../config").nls, $ = A("../lib/useragent"), a = A("../lib/dom"), l = A("../lib/lang"), i = A("../clipboard"), o = $.isChrome < 18, r = $.isIE, n = $.isChrome > 63, e = 400, t = A("../lib/keys"), s = t.KEY_MODS, h = $.isIOS, u = h ? /\s/ : /\n/, S = $.isMobile, b = (function() {
        function f(c, w) {
          var C = this;
          this.host = w, this.text = a.createElement("textarea"), this.text.className = "ace_text-input", this.text.setAttribute("wrap", "off"), this.text.setAttribute("autocomplete", "off"), this.text.setAttribute("autocorrect", "off"), this.text.setAttribute("autocapitalize", "off"), this.text.setAttribute("spellcheck", "false"), this.text.style.opacity = "0", c.insertBefore(this.text, c.firstChild), this.copied = false, this.pasted = false, this.inComposition = false, this.sendingText = false, this.tempStyle = "", S || (this.text.style.fontSize = "1px"), this.commandMode = false, this.ignoreFocusEvents = false, this.lastValue = "", this.lastSelectionStart = 0, this.lastSelectionEnd = 0, this.lastRestoreEnd = 0, this.rowStart = Number.MAX_SAFE_INTEGER, this.rowEnd = Number.MIN_SAFE_INTEGER, this.numberOfExtraLines = 0;
          try {
            this.$isFocused = document.activeElement === this.text;
          } catch {
          }
          this.cancelComposition = this.cancelComposition.bind(this), this.setAriaOptions({
            role: "textbox"
          }), L.addListener(this.text, "blur", function(p) {
            C.ignoreFocusEvents || (w.onBlur(p), C.$isFocused = false);
          }, w), L.addListener(this.text, "focus", function(p) {
            if (!C.ignoreFocusEvents) {
              if (C.$isFocused = true, $.isEdge) try {
                if (!document.hasFocus()) return;
              } catch {
              }
              w.onFocus(p), $.isEdge ? setTimeout(C.resetSelection.bind(C)) : C.resetSelection();
            }
          }, w), this.$focusScroll = false, w.on("beforeEndOperation", function() {
            var p = w.curOp, v = p && p.command && p.command.name;
            if (v != "insertstring") {
              var k = v && (p.docChanged || p.selectionChanged);
              C.inComposition && k && (C.lastValue = C.text.value = "", C.onCompositionEnd()), C.resetSelection();
            }
          }), w.on("changeSelection", this.setAriaLabel.bind(this)), this.resetSelection = h ? this.$resetSelectionIOS : this.$resetSelection, this.$isFocused && w.onFocus(), this.inputHandler = null, this.afterContextMenu = false, L.addCommandKeyListener(this.text, function(p, v, k) {
            if (!C.inComposition) return w.onCommandKey(p, v, k);
          }, w), L.addListener(this.text, "select", this.onSelect.bind(this), w), L.addListener(this.text, "input", this.onInput.bind(this), w), L.addListener(this.text, "cut", this.onCut.bind(this), w), L.addListener(this.text, "copy", this.onCopy.bind(this), w), L.addListener(this.text, "paste", this.onPaste.bind(this), w), (!("oncut" in this.text) || !("oncopy" in this.text) || !("onpaste" in this.text)) && L.addListener(c, "keydown", function(p) {
            if (!($.isMac && !p.metaKey || !p.ctrlKey)) switch (p.keyCode) {
              case 67:
                C.onCopy(p);
                break;
              case 86:
                C.onPaste(p);
                break;
              case 88:
                C.onCut(p);
                break;
            }
          }, w), this.syncComposition = l.delayedCall(this.onCompositionUpdate.bind(this), 50).schedule.bind(null, null), L.addListener(this.text, "compositionstart", this.onCompositionStart.bind(this), w), L.addListener(this.text, "compositionupdate", this.onCompositionUpdate.bind(this), w), L.addListener(this.text, "keyup", this.onKeyup.bind(this), w), L.addListener(this.text, "keydown", this.syncComposition.bind(this), w), L.addListener(this.text, "compositionend", this.onCompositionEnd.bind(this), w), this.closeTimeout, L.addListener(this.text, "mouseup", this.$onContextMenu.bind(this), w), L.addListener(this.text, "mousedown", function(p) {
            p.preventDefault(), C.onContextMenuClose();
          }, w), L.addListener(w.renderer.scroller, "contextmenu", this.$onContextMenu.bind(this), w), L.addListener(this.text, "contextmenu", this.$onContextMenu.bind(this), w), h && this.addIosSelectionHandler(c, w, this.text);
        }
        return f.prototype.addIosSelectionHandler = function(c, w, C) {
          var p = this, v = null, k = false;
          C.addEventListener("keydown", function(y) {
            v && clearTimeout(v), k = true;
          }, true), C.addEventListener("keyup", function(y) {
            v = setTimeout(function() {
              k = false;
            }, 100);
          }, true);
          var m = function(y) {
            if (document.activeElement === C && !(k || p.inComposition || w.$mouseHandler.isMousePressed) && !p.copied) {
              var g = C.selectionStart, d = C.selectionEnd, x = null, T = 0;
              if (g == 0 ? x = t.up : g == 1 ? x = t.home : d > p.lastSelectionEnd && p.lastValue[d] == `
` ? x = t.end : g < p.lastSelectionStart && p.lastValue[g - 1] == " " ? (x = t.left, T = s.option) : g < p.lastSelectionStart || g == p.lastSelectionStart && p.lastSelectionEnd != p.lastSelectionStart && g == d ? x = t.left : d > p.lastSelectionEnd && p.lastValue.slice(0, d).split(`
`).length > 2 ? x = t.down : d > p.lastSelectionEnd && p.lastValue[d - 1] == " " ? (x = t.right, T = s.option) : (d > p.lastSelectionEnd || d == p.lastSelectionEnd && p.lastSelectionEnd != p.lastSelectionStart && g == d) && (x = t.right), g !== d && (T |= s.shift), x) {
                var E = w.onCommandKey({}, T, x);
                if (!E && w.commands) {
                  x = t.keyCodeToString(x);
                  var R = w.commands.findKeyCommand(T, x);
                  R && w.execCommand(R);
                }
                p.lastSelectionStart = g, p.lastSelectionEnd = d, p.resetSelection("");
              }
            }
          };
          document.addEventListener("selectionchange", m), w.on("destroy", function() {
            document.removeEventListener("selectionchange", m);
          });
        }, f.prototype.onContextMenuClose = function() {
          var c = this;
          clearTimeout(this.closeTimeout), this.closeTimeout = setTimeout(function() {
            c.tempStyle && (c.text.style.cssText = c.tempStyle, c.tempStyle = ""), c.host.renderer.$isMousePressed = false, c.host.renderer.$keepTextAreaAtCursor && c.host.renderer.$moveTextAreaToCursor();
          }, 0);
        }, f.prototype.$onContextMenu = function(c) {
          this.host.textInput.onContextMenu(c), this.onContextMenuClose();
        }, f.prototype.onKeyup = function(c) {
          c.keyCode == 27 && this.text.value.length < this.text.selectionStart && (this.inComposition || (this.lastValue = this.text.value), this.lastSelectionStart = this.lastSelectionEnd = -1, this.resetSelection()), this.syncComposition();
        }, f.prototype.cancelComposition = function() {
          this.ignoreFocusEvents = true, this.text.blur(), this.text.focus(), this.ignoreFocusEvents = false;
        }, f.prototype.onCompositionStart = function(c) {
          if (!(this.inComposition || !this.host.onCompositionStart || this.host.$readOnly) && (this.inComposition = {}, !this.commandMode)) {
            c.data && (this.inComposition.useTextareaForIME = false), setTimeout(this.onCompositionUpdate.bind(this), 0), this.host._signal("compositionStart"), this.host.on("mousedown", this.cancelComposition);
            var w = this.host.getSelectionRange();
            w.end.row = w.start.row, w.end.column = w.start.column, this.inComposition.markerRange = w, this.inComposition.selectionStart = this.lastSelectionStart, this.host.onCompositionStart(this.inComposition), this.inComposition.useTextareaForIME ? (this.lastValue = this.text.value = "", this.lastSelectionStart = 0, this.lastSelectionEnd = 0) : (this.text.msGetInputContext && (this.inComposition.context = this.text.msGetInputContext()), this.text.getInputContext && (this.inComposition.context = this.text.getInputContext()));
          }
        }, f.prototype.onCompositionUpdate = function() {
          if (!(!this.inComposition || !this.host.onCompositionUpdate || this.host.$readOnly)) {
            if (this.commandMode) return this.cancelComposition();
            if (this.inComposition.useTextareaForIME) this.host.onCompositionUpdate(this.text.value);
            else {
              var c = this.text.value;
              this.sendText(c), this.inComposition.markerRange && (this.inComposition.context && (this.inComposition.markerRange.start.column = this.inComposition.selectionStart = this.inComposition.context.compositionStartOffset), this.inComposition.markerRange.end.column = this.inComposition.markerRange.start.column + this.lastSelectionEnd - this.inComposition.selectionStart + this.lastRestoreEnd);
            }
          }
        }, f.prototype.onCompositionEnd = function(c) {
          !this.host.onCompositionEnd || this.host.$readOnly || (this.inComposition = false, this.host.onCompositionEnd(), this.host.off("mousedown", this.cancelComposition), c && this.onInput());
        }, f.prototype.onCut = function(c) {
          this.doCopy(c, true);
        }, f.prototype.onCopy = function(c) {
          this.doCopy(c, false);
        }, f.prototype.onPaste = function(c) {
          var w = this.handleClipboardData(c);
          i.pasteCancelled() || (typeof w == "string" ? (w && this.host.onPaste(w, c), $.isIE && setTimeout(this.resetSelection), L.preventDefault(c)) : (this.text.value = "", this.pasted = true));
        }, f.prototype.doCopy = function(c, w) {
          var C = this, p = this.host.getCopyText();
          if (!p) return L.preventDefault(c);
          this.handleClipboardData(c, p) ? (h && (this.resetSelection(p), this.copied = p, setTimeout(function() {
            C.copied = false;
          }, 10)), w ? this.host.onCut() : this.host.onCopy(), L.preventDefault(c)) : (this.copied = true, this.text.value = p, this.text.select(), setTimeout(function() {
            C.copied = false, C.resetSelection(), w ? C.host.onCut() : C.host.onCopy();
          }));
        }, f.prototype.handleClipboardData = function(c, w, C) {
          var p = c.clipboardData || window.clipboardData;
          if (!(!p || o)) {
            var v = r || C ? "Text" : "text/plain";
            try {
              return w ? p.setData(v, w) !== false : p.getData(v);
            } catch (k) {
              if (!C) return this.handleClipboardData(k, w, true);
            }
          }
        }, f.prototype.onInput = function(c) {
          if (this.inComposition) return this.onCompositionUpdate();
          if (c && c.inputType) {
            if (c.inputType == "historyUndo") return this.host.execCommand("undo");
            if (c.inputType == "historyRedo") return this.host.execCommand("redo");
          }
          var w = this.text.value, C = this.sendText(w, true);
          (w.length > e + 100 || u.test(C) || S && this.lastSelectionStart < 1 && this.lastSelectionStart == this.lastSelectionEnd) && this.resetSelection();
        }, f.prototype.sendText = function(c, w) {
          if (this.afterContextMenu && (this.afterContextMenu = false), this.pasted) return this.resetSelection(), c && this.host.onPaste(c), this.pasted = false, "";
          for (var C = this.text.selectionStart, p = this.text.selectionEnd, v = this.lastSelectionStart, k = this.lastValue.length - this.lastSelectionEnd, m = c, y = c.length - C, g = c.length - p, d = 0; v > 0 && this.lastValue[d] == c[d]; ) d++, v--;
          for (m = m.slice(d), d = 1; k > 0 && this.lastValue.length - d > this.lastSelectionStart - 1 && this.lastValue[this.lastValue.length - d] == c[c.length - d]; ) d++, k--;
          y -= d - 1, g -= d - 1;
          var x = m.length - d + 1;
          if (x < 0 && (v = -x, x = 0), m = m.slice(0, x), !w && !m && !y && !v && !k && !g) return "";
          this.sendingText = true;
          var T = false;
          return $.isAndroid && m == ". " && (m = "  ", T = true), m && !v && !k && !y && !g || this.commandMode ? this.host.onTextInput(m) : this.host.onTextInput(m, {
            extendLeft: v,
            extendRight: k,
            restoreStart: y,
            restoreEnd: g
          }), this.sendingText = false, this.lastValue = c, this.lastSelectionStart = C, this.lastSelectionEnd = p, this.lastRestoreEnd = g, T ? `
` : m;
        }, f.prototype.onSelect = function(c) {
          var w = this;
          if (!this.inComposition) {
            var C = function(p) {
              return p.selectionStart === 0 && p.selectionEnd >= w.lastValue.length && p.value === w.lastValue && w.lastValue && p.selectionEnd !== w.lastSelectionEnd;
            };
            this.copied ? this.copied = false : C(this.text) ? (this.host.selectAll(), this.resetSelection()) : S && this.text.selectionStart != this.lastSelectionStart && this.resetSelection();
          }
        }, f.prototype.$resetSelectionIOS = function(c) {
          if (!(!this.$isFocused || this.copied && !c || this.sendingText)) {
            c || (c = "");
            var w = `
 ab` + c + `cde fg
`;
            w != this.text.value && (this.text.value = this.lastValue = w);
            var C = 4, p = 4 + (c.length || (this.host.selection.isEmpty() ? 0 : 1));
            (this.lastSelectionStart != C || this.lastSelectionEnd != p) && this.text.setSelectionRange(C, p), this.lastSelectionStart = C, this.lastSelectionEnd = p;
          }
        }, f.prototype.$resetSelection = function() {
          var c = this;
          if (!(this.inComposition || this.sendingText) && !(!this.$isFocused && !this.afterContextMenu)) {
            this.inComposition = true;
            var w = 0, C = 0, p = "", v = function(R, I) {
              for (var O = I, z = 1; z <= R - c.rowStart && z < 2 * c.numberOfExtraLines + 1; z++) O += c.host.session.getLine(R - z).length + 1;
              return O;
            };
            if (this.host.session) {
              var k = this.host.selection, m = k.getRange(), y = k.cursor.row;
              y === this.rowEnd + 1 ? (this.rowStart = this.rowEnd + 1, this.rowEnd = this.rowStart + 2 * this.numberOfExtraLines) : y === this.rowStart - 1 ? (this.rowEnd = this.rowStart - 1, this.rowStart = this.rowEnd - 2 * this.numberOfExtraLines) : (y < this.rowStart - 1 || y > this.rowEnd + 1) && (this.rowStart = y > this.numberOfExtraLines ? y - this.numberOfExtraLines : 0, this.rowEnd = y > this.numberOfExtraLines ? y + this.numberOfExtraLines : 2 * this.numberOfExtraLines);
              for (var g = [], d = this.rowStart; d <= this.rowEnd; d++) g.push(this.host.session.getLine(d));
              if (p = g.join(`
`), w = v(m.start.row, m.start.column), C = v(m.end.row, m.end.column), m.start.row < this.rowStart) {
                var x = this.host.session.getLine(this.rowStart - 1);
                w = m.start.row < this.rowStart - 1 ? 0 : w, C += x.length + 1, p = x + `
` + p;
              } else if (m.end.row > this.rowEnd) {
                var T = this.host.session.getLine(this.rowEnd + 1);
                C = m.end.row > this.rowEnd + 1 ? T.length : m.end.column, C += p.length + 1, p = p + `
` + T;
              } else S && y > 0 && (p = `
` + p, C += 1, w += 1);
              p.length > e && (w < e && C < e ? p = p.slice(0, e) : (p = `
`, w == C ? w = C = 0 : (w = 0, C = 1)));
              var E = p + `

`;
              E != this.lastValue && (this.text.value = this.lastValue = E, this.lastSelectionStart = this.lastSelectionEnd = E.length);
            }
            if (this.afterContextMenu && (this.lastSelectionStart = this.text.selectionStart, this.lastSelectionEnd = this.text.selectionEnd), this.lastSelectionEnd != C || this.lastSelectionStart != w || this.text.selectionEnd != this.lastSelectionEnd) try {
              this.text.setSelectionRange(w, C), this.lastSelectionStart = w, this.lastSelectionEnd = C;
            } catch {
            }
            this.inComposition = false;
          }
        }, f.prototype.setHost = function(c) {
          this.host = c;
        }, f.prototype.setNumberOfExtraLines = function(c) {
          if (this.rowStart = Number.MAX_SAFE_INTEGER, this.rowEnd = Number.MIN_SAFE_INTEGER, c < 0) {
            this.numberOfExtraLines = 0;
            return;
          }
          this.numberOfExtraLines = c;
        }, f.prototype.setAriaLabel = function() {
          var c = "";
          if (this.host.$textInputAriaLabel && (c += "".concat(this.host.$textInputAriaLabel, ", ")), this.host.session) {
            var w = this.host.session.selection.cursor.row;
            c += M("text-input.aria-label", "Cursor at row $0", [
              w + 1
            ]);
          }
          this.text.setAttribute("aria-label", c);
        }, f.prototype.setAriaOptions = function(c) {
          c.activeDescendant ? (this.text.setAttribute("aria-haspopup", "true"), this.text.setAttribute("aria-autocomplete", c.inline ? "both" : "list"), this.text.setAttribute("aria-activedescendant", c.activeDescendant)) : (this.text.setAttribute("aria-haspopup", "false"), this.text.setAttribute("aria-autocomplete", "both"), this.text.removeAttribute("aria-activedescendant")), c.role && this.text.setAttribute("role", c.role), c.setLabel && (this.text.setAttribute("aria-roledescription", M("text-input.aria-roledescription", "editor")), this.setAriaLabel());
        }, f.prototype.focus = function() {
          var c = this;
          if (this.setAriaOptions({
            setLabel: this.host.renderer.enableKeyboardAccessibility
          }), this.tempStyle || n || this.$focusScroll == "browser") return this.text.focus({
            preventScroll: true
          });
          var w = this.text.style.top;
          this.text.style.position = "fixed", this.text.style.top = "0px";
          try {
            var C = this.text.getBoundingClientRect().top != 0;
          } catch {
            return;
          }
          var p = [];
          if (C) for (var v = this.text.parentElement; v && v.nodeType == 1; ) p.push(v), v.setAttribute("ace_nocontext", "true"), !v.parentElement && v.getRootNode ? v = v.getRootNode().host : v = v.parentElement;
          this.text.focus({
            preventScroll: true
          }), C && p.forEach(function(k) {
            k.removeAttribute("ace_nocontext");
          }), setTimeout(function() {
            c.text.style.position = "", c.text.style.top == "0px" && (c.text.style.top = w);
          }, 0);
        }, f.prototype.blur = function() {
          this.text.blur();
        }, f.prototype.isFocused = function() {
          return this.$isFocused;
        }, f.prototype.setInputHandler = function(c) {
          this.inputHandler = c;
        }, f.prototype.getInputHandler = function() {
          return this.inputHandler;
        }, f.prototype.getElement = function() {
          return this.text;
        }, f.prototype.setCommandMode = function(c) {
          this.commandMode = c, this.text.readOnly = false;
        }, f.prototype.setReadOnly = function(c) {
          this.commandMode || (this.text.readOnly = c);
        }, f.prototype.setCopyWithEmptySelection = function(c) {
        }, f.prototype.onContextMenu = function(c) {
          this.afterContextMenu = true, this.resetSelection(), this.host._emit("nativecontextmenu", {
            target: this.host,
            domEvent: c
          }), this.moveToMouse(c, true);
        }, f.prototype.moveToMouse = function(c, w) {
          var C = this;
          this.tempStyle || (this.tempStyle = this.text.style.cssText), this.text.style.cssText = (w ? "z-index:100000;" : "") + ($.isIE ? "opacity:0.1;" : "") + "text-indent: -" + (this.lastSelectionStart + this.lastSelectionEnd) * this.host.renderer.characterWidth * 0.5 + "px;";
          var p = this.host.container.getBoundingClientRect(), v = a.computedStyle(this.host.container), k = p.top + (parseInt(v.borderTopWidth) || 0), m = p.left + (parseInt(v.borderLeftWidth) || 0), y = p.bottom - k - this.text.clientHeight - 2, g = function(d) {
            a.translate(C.text, d.clientX - m - 2, Math.min(d.clientY - k - 2, y));
          };
          g(c), c.type == "mousedown" && (this.host.renderer.$isMousePressed = true, clearTimeout(this.closeTimeout), $.isWin && L.capture(this.host.container, g, this.onContextMenuClose.bind(this)));
        }, f.prototype.destroy = function() {
          this.text.parentElement && this.text.parentElement.removeChild(this.text);
        }, f;
      })();
      _.TextInput = b, _.$setUserAgentForTests = function(f, c) {
        S = f, h = c;
      };
    }), ace.define("ace/mouse/default_handlers", [
      "require",
      "exports",
      "module",
      "ace/lib/useragent"
    ], function(A, _, N) {
      var L = A("../lib/useragent"), M = 0, $ = 550, a = (function() {
        function o(r) {
          r.$clickSelection = null;
          var n = r.editor;
          n.setDefaultHandler("mousedown", this.onMouseDown.bind(r)), n.setDefaultHandler("dblclick", this.onDoubleClick.bind(r)), n.setDefaultHandler("tripleclick", this.onTripleClick.bind(r)), n.setDefaultHandler("quadclick", this.onQuadClick.bind(r)), n.setDefaultHandler("mousewheel", this.onMouseWheel.bind(r));
          var e = [
            "select",
            "startSelect",
            "selectEnd",
            "selectAllEnd",
            "selectByWordsEnd",
            "selectByLinesEnd",
            "dragWait",
            "dragWaitEnd",
            "focusWait"
          ];
          e.forEach(function(t) {
            r[t] = this[t];
          }, this), r.selectByLines = this.extendSelectionBy.bind(r, "getLineRange"), r.selectByWords = this.extendSelectionBy.bind(r, "getWordRange");
        }
        return o.prototype.onMouseDown = function(r) {
          var n = r.inSelection(), e = r.getDocumentPosition();
          this.mousedownEvent = r;
          var t = this.editor, s = r.getButton();
          if (s !== 0) {
            var h = t.getSelectionRange(), u = h.isEmpty();
            (u || s == 1) && t.selection.moveToPosition(e), s == 2 && (t.textInput.onContextMenu(r.domEvent), L.isMozilla || r.preventDefault());
            return;
          }
          if (this.mousedownEvent.time = Date.now(), n && !t.isFocused() && (t.focus(), this.$focusTimeout && !this.$clickSelection && !t.inMultiSelectMode)) {
            this.setState("focusWait"), this.captureMouse(r);
            return;
          }
          return this.captureMouse(r), this.startSelect(e, r.domEvent._clicks > 1), r.preventDefault();
        }, o.prototype.startSelect = function(r, n) {
          r = r || this.editor.renderer.screenToTextCoordinates(this.x, this.y);
          var e = this.editor;
          this.mousedownEvent && (this.mousedownEvent.getShiftKey() ? e.selection.selectToPosition(r) : n || e.selection.moveToPosition(r), n || this.select(), e.setStyle("ace_selecting"), this.setState("select"));
        }, o.prototype.select = function() {
          var r, n = this.editor, e = n.renderer.screenToTextCoordinates(this.x, this.y);
          if (this.$clickSelection) {
            var t = this.$clickSelection.comparePoint(e);
            if (t == -1) r = this.$clickSelection.end;
            else if (t == 1) r = this.$clickSelection.start;
            else {
              var s = i(this.$clickSelection, e, n.session);
              e = s.cursor, r = s.anchor;
            }
            n.selection.setSelectionAnchor(r.row, r.column);
          }
          n.selection.selectToPosition(e), n.renderer.scrollCursorIntoView();
        }, o.prototype.extendSelectionBy = function(r) {
          var n, e = this.editor, t = e.renderer.screenToTextCoordinates(this.x, this.y), s = e.selection[r](t.row, t.column);
          if (this.$clickSelection) {
            var h = this.$clickSelection.comparePoint(s.start), u = this.$clickSelection.comparePoint(s.end);
            if (h == -1 && u <= 0) n = this.$clickSelection.end, (s.end.row != t.row || s.end.column != t.column) && (t = s.start);
            else if (u == 1 && h >= 0) n = this.$clickSelection.start, (s.start.row != t.row || s.start.column != t.column) && (t = s.end);
            else if (h == -1 && u == 1) t = s.end, n = s.start;
            else {
              var S = i(this.$clickSelection, t, e.session);
              t = S.cursor, n = S.anchor;
            }
            e.selection.setSelectionAnchor(n.row, n.column);
          }
          e.selection.selectToPosition(t), e.renderer.scrollCursorIntoView();
        }, o.prototype.selectByLinesEnd = function() {
          this.$clickSelection = null, this.editor.unsetStyle("ace_selecting");
        }, o.prototype.focusWait = function() {
          var r = l(this.mousedownEvent.x, this.mousedownEvent.y, this.x, this.y), n = Date.now();
          (r > M || n - this.mousedownEvent.time > this.$focusTimeout) && this.startSelect(this.mousedownEvent.getDocumentPosition());
        }, o.prototype.onDoubleClick = function(r) {
          var n = r.getDocumentPosition(), e = this.editor, t = e.session, s = t.getBracketRange(n);
          s ? (s.isEmpty() && (s.start.column--, s.end.column++), this.setState("select")) : (s = e.selection.getWordRange(n.row, n.column), this.setState("selectByWords")), this.$clickSelection = s, this.select();
        }, o.prototype.onTripleClick = function(r) {
          var n = r.getDocumentPosition(), e = this.editor;
          this.setState("selectByLines");
          var t = e.getSelectionRange();
          t.isMultiLine() && t.contains(n.row, n.column) ? (this.$clickSelection = e.selection.getLineRange(t.start.row), this.$clickSelection.end = e.selection.getLineRange(t.end.row).end) : this.$clickSelection = e.selection.getLineRange(n.row), this.select();
        }, o.prototype.onQuadClick = function(r) {
          var n = this.editor;
          n.selectAll(), this.$clickSelection = n.getSelectionRange(), this.setState("selectAll");
        }, o.prototype.onMouseWheel = function(r) {
          if (!r.getAccelKey()) {
            r.getShiftKey() && r.wheelY && !r.wheelX && (r.wheelX = r.wheelY, r.wheelY = 0);
            var n = this.editor;
            this.$lastScroll || (this.$lastScroll = {
              t: 0,
              vx: 0,
              vy: 0,
              allowed: 0
            });
            var e = this.$lastScroll, t = r.domEvent.timeStamp, s = t - e.t, h = s ? r.wheelX / s : e.vx, u = s ? r.wheelY / s : e.vy;
            s < $ && (h = (h + e.vx) / 2, u = (u + e.vy) / 2);
            var S = Math.abs(h / u), b = false;
            if (S >= 1 && n.renderer.isScrollableBy(r.wheelX * r.speed, 0) && (b = true), S <= 1 && n.renderer.isScrollableBy(0, r.wheelY * r.speed) && (b = true), b) e.allowed = t;
            else if (t - e.allowed < $) {
              var f = Math.abs(h) <= 1.5 * Math.abs(e.vx) && Math.abs(u) <= 1.5 * Math.abs(e.vy);
              f ? (b = true, e.allowed = t) : e.allowed = 0;
            }
            if (e.t = t, e.vx = h, e.vy = u, b) return n.renderer.scrollBy(r.wheelX * r.speed, r.wheelY * r.speed), r.stop();
          }
        }, o;
      })();
      a.prototype.selectEnd = a.prototype.selectByLinesEnd, a.prototype.selectAllEnd = a.prototype.selectByLinesEnd, a.prototype.selectByWordsEnd = a.prototype.selectByLinesEnd, _.DefaultHandlers = a;
      function l(o, r, n, e) {
        return Math.sqrt(Math.pow(n - o, 2) + Math.pow(e - r, 2));
      }
      function i(o, r, n) {
        if (o.start.row == o.end.row) var e = 2 * r.column - o.start.column - o.end.column;
        else if (o.start.row == o.end.row - 1 && !o.start.column && !o.end.column) var e = 3 * r.column - 2 * n.getLine(o.start.row).length;
        else var e = 2 * r.row - o.start.row - o.end.row;
        return e < 0 ? {
          cursor: o.start,
          anchor: o.end
        } : {
          cursor: o.end,
          anchor: o.start
        };
      }
    }), ace.define("ace/mouse/mouse_event", [
      "require",
      "exports",
      "module",
      "ace/lib/event",
      "ace/lib/useragent"
    ], function(A, _, N) {
      var L = A("../lib/event"), M = A("../lib/useragent"), $ = (function() {
        function a(l, i) {
          this.speed, this.wheelX, this.wheelY, this.domEvent = l, this.editor = i, this.x = this.clientX = l.clientX, this.y = this.clientY = l.clientY, this.$pos = null, this.$inSelection = null, this.propagationStopped = false, this.defaultPrevented = false;
        }
        return a.prototype.stopPropagation = function() {
          L.stopPropagation(this.domEvent), this.propagationStopped = true;
        }, a.prototype.preventDefault = function() {
          L.preventDefault(this.domEvent), this.defaultPrevented = true;
        }, a.prototype.stop = function() {
          this.stopPropagation(), this.preventDefault();
        }, a.prototype.getDocumentPosition = function() {
          return this.$pos ? this.$pos : (this.$pos = this.editor.renderer.screenToTextCoordinates(this.clientX, this.clientY), this.$pos);
        }, a.prototype.getGutterRow = function() {
          var l = this.getDocumentPosition().row, i = this.editor.session.documentToScreenRow(l, 0), o = this.editor.session.documentToScreenRow(this.editor.renderer.$gutterLayer.$lines.get(0).row, 0);
          return i - o;
        }, a.prototype.inSelection = function() {
          if (this.$inSelection !== null) return this.$inSelection;
          var l = this.editor, i = l.getSelectionRange();
          if (i.isEmpty()) this.$inSelection = false;
          else {
            var o = this.getDocumentPosition();
            this.$inSelection = i.contains(o.row, o.column);
          }
          return this.$inSelection;
        }, a.prototype.getButton = function() {
          return L.getButton(this.domEvent);
        }, a.prototype.getShiftKey = function() {
          return this.domEvent.shiftKey;
        }, a.prototype.getAccelKey = function() {
          return M.isMac ? this.domEvent.metaKey : this.domEvent.ctrlKey;
        }, a;
      })();
      _.MouseEvent = $;
    }), ace.define("ace/lib/scroll", [
      "require",
      "exports",
      "module"
    ], function(A, _, N) {
      _.preventParentScroll = function(M) {
        M.stopPropagation();
        var $ = M.currentTarget, a = $.scrollHeight > $.clientHeight;
        a || M.preventDefault();
      };
    }), ace.define("ace/tooltip", [
      "require",
      "exports",
      "module",
      "ace/lib/dom",
      "ace/lib/event",
      "ace/range",
      "ace/lib/scroll"
    ], function(A, _, N) {
      var L = this && this.__extends || /* @__PURE__ */ (function() {
        var t = function(s, h) {
          return t = Object.setPrototypeOf || {
            __proto__: []
          } instanceof Array && function(u, S) {
            u.__proto__ = S;
          } || function(u, S) {
            for (var b in S) Object.prototype.hasOwnProperty.call(S, b) && (u[b] = S[b]);
          }, t(s, h);
        };
        return function(s, h) {
          if (typeof h != "function" && h !== null) throw new TypeError("Class extends value " + String(h) + " is not a constructor or null");
          t(s, h);
          function u() {
            this.constructor = s;
          }
          s.prototype = h === null ? Object.create(h) : (u.prototype = h.prototype, new u());
        };
      })(), M = this && this.__values || function(t) {
        var s = typeof Symbol == "function" && Symbol.iterator, h = s && t[s], u = 0;
        if (h) return h.call(t);
        if (t && typeof t.length == "number") return {
          next: function() {
            return t && u >= t.length && (t = void 0), {
              value: t && t[u++],
              done: !t
            };
          }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
      }, $ = A("./lib/dom");
      A("./lib/event");
      var a = A("./range").Range, l = A("./lib/scroll").preventParentScroll, i = "ace_tooltip", o = (function() {
        function t(s) {
          this.isOpen = false, this.$element = null, this.$parentNode = s;
        }
        return t.prototype.$init = function() {
          return this.$element = $.createElement("div"), this.$element.className = i, this.$element.style.display = "none", this.$parentNode.appendChild(this.$element), this.$element;
        }, t.prototype.getElement = function() {
          return this.$element || this.$init();
        }, t.prototype.setText = function(s) {
          this.getElement().textContent = s;
        }, t.prototype.setHtml = function(s) {
          this.getElement().innerHTML = s;
        }, t.prototype.setPosition = function(s, h) {
          this.getElement().style.left = s + "px", this.getElement().style.top = h + "px";
        }, t.prototype.setClassName = function(s) {
          $.addCssClass(this.getElement(), s);
        }, t.prototype.setTheme = function(s) {
          this.theme && (this.theme.isDark && $.removeCssClass(this.getElement(), "ace_dark"), this.theme.cssClass && $.removeCssClass(this.getElement(), this.theme.cssClass)), s.isDark && $.addCssClass(this.getElement(), "ace_dark"), s.cssClass && $.addCssClass(this.getElement(), s.cssClass), this.theme = {
            isDark: s.isDark,
            cssClass: s.cssClass
          };
        }, t.prototype.show = function(s, h, u) {
          s != null && this.setText(s), h != null && u != null && this.setPosition(h, u), this.isOpen || (this.getElement().style.display = "block", this.isOpen = true);
        }, t.prototype.hide = function(s) {
          this.isOpen && (this.getElement().style.display = "none", this.getElement().className = i, this.isOpen = false);
        }, t.prototype.getHeight = function() {
          return this.getElement().offsetHeight;
        }, t.prototype.getWidth = function() {
          return this.getElement().offsetWidth;
        }, t.prototype.destroy = function() {
          this.isOpen = false, this.$element && this.$element.parentNode && this.$element.parentNode.removeChild(this.$element);
        }, t;
      })(), r = (function() {
        function t() {
          this.popups = [];
        }
        return t.prototype.addPopup = function(s) {
          this.popups.push(s), this.updatePopups();
        }, t.prototype.removePopup = function(s) {
          var h = this.popups.indexOf(s);
          h !== -1 && (this.popups.splice(h, 1), this.updatePopups());
        }, t.prototype.updatePopups = function() {
          var s, h, u, S;
          this.popups.sort(function(m, y) {
            return y.priority - m.priority;
          });
          var b = [];
          try {
            for (var f = M(this.popups), c = f.next(); !c.done; c = f.next()) {
              var w = c.value, C = true;
              try {
                for (var p = (u = void 0, M(b)), v = p.next(); !v.done; v = p.next()) {
                  var k = v.value;
                  if (this.doPopupsOverlap(k, w)) {
                    C = false;
                    break;
                  }
                }
              } catch (m) {
                u = {
                  error: m
                };
              } finally {
                try {
                  v && !v.done && (S = p.return) && S.call(p);
                } finally {
                  if (u) throw u.error;
                }
              }
              C ? b.push(w) : w.hide();
            }
          } catch (m) {
            s = {
              error: m
            };
          } finally {
            try {
              c && !c.done && (h = f.return) && h.call(f);
            } finally {
              if (s) throw s.error;
            }
          }
        }, t.prototype.doPopupsOverlap = function(s, h) {
          var u = s.getElement().getBoundingClientRect(), S = h.getElement().getBoundingClientRect();
          return u.left < S.right && u.right > S.left && u.top < S.bottom && u.bottom > S.top;
        }, t;
      })(), n = new r();
      _.popupManager = n, _.Tooltip = o;
      var e = (function(t) {
        L(s, t);
        function s(h) {
          h === void 0 && (h = document.body);
          var u = t.call(this, h) || this;
          u.timeout = void 0, u.lastT = 0, u.idleTime = 350, u.lastEvent = void 0, u.onMouseOut = u.onMouseOut.bind(u), u.onMouseMove = u.onMouseMove.bind(u), u.waitForHover = u.waitForHover.bind(u), u.hide = u.hide.bind(u);
          var S = u.getElement();
          return S.style.whiteSpace = "pre-wrap", S.style.pointerEvents = "auto", S.addEventListener("mouseout", u.onMouseOut), S.tabIndex = -1, S.addEventListener("blur", function() {
            S.contains(document.activeElement) || this.hide();
          }.bind(u)), S.addEventListener("wheel", l), u;
        }
        return s.prototype.addToEditor = function(h) {
          h.on("mousemove", this.onMouseMove), h.on("mousedown", this.hide);
          var u = h.renderer.getMouseEventTarget();
          u && typeof u.removeEventListener == "function" && u.addEventListener("mouseout", this.onMouseOut, true);
        }, s.prototype.removeFromEditor = function(h) {
          h.off("mousemove", this.onMouseMove), h.off("mousedown", this.hide);
          var u = h.renderer.getMouseEventTarget();
          u && typeof u.removeEventListener == "function" && u.removeEventListener("mouseout", this.onMouseOut, true), this.timeout && (clearTimeout(this.timeout), this.timeout = null);
        }, s.prototype.onMouseMove = function(h, u) {
          this.lastEvent = h, this.lastT = Date.now();
          var S = u.$mouseHandler.isMousePressed;
          if (this.isOpen) {
            var b = this.lastEvent && this.lastEvent.getDocumentPosition();
            (!this.range || !this.range.contains(b.row, b.column) || S || this.isOutsideOfText(this.lastEvent)) && this.hide();
          }
          this.timeout || S || (this.lastEvent = h, this.timeout = setTimeout(this.waitForHover, this.idleTime));
        }, s.prototype.waitForHover = function() {
          this.timeout && clearTimeout(this.timeout);
          var h = Date.now() - this.lastT;
          if (this.idleTime - h > 10) {
            this.timeout = setTimeout(this.waitForHover, this.idleTime - h);
            return;
          }
          this.timeout = null, this.lastEvent && !this.isOutsideOfText(this.lastEvent) && this.$gatherData(this.lastEvent, this.lastEvent.editor);
        }, s.prototype.isOutsideOfText = function(h) {
          var u = h.editor, S = h.getDocumentPosition(), b = u.session.getLine(S.row);
          if (S.column == b.length) {
            var f = u.renderer.pixelToScreenCoordinates(h.clientX, h.clientY), c = u.session.documentToScreenPosition(S.row, S.column);
            if (c.column != f.column || c.row != f.row) return true;
          }
          return false;
        }, s.prototype.setDataProvider = function(h) {
          this.$gatherData = h;
        }, s.prototype.showForRange = function(h, u, S, b) {
          if (!(b && b != this.lastEvent) && !(this.isOpen && document.activeElement == this.getElement())) {
            var f = h.renderer;
            this.isOpen || (n.addPopup(this), this.$registerCloseEvents(), this.setTheme(f.theme)), this.isOpen = true, this.range = a.fromPoints(u.start, u.end);
            var c = f.textToScreenCoordinates(u.start.row, u.start.column), w = f.scroller.getBoundingClientRect();
            c.pageX < w.left && (c.pageX = w.left);
            var C = this.getElement();
            C.innerHTML = "", C.appendChild(S), C.style.maxHeight = "", C.style.display = "block", this.$setPosition(h, c, true, u), $.$fixPositionBug(C);
          }
        }, s.prototype.$setPosition = function(h, u, S, b) {
          var f = 10;
          S && this.addMarker(b, h.session);
          var c = h.renderer, w = this.getElement(), C = w.offsetHeight, p = w.offsetWidth, v = u.pageY, k = u.pageX, m = window.innerHeight - v - c.lineHeight, y = this.$shouldPlaceAbove(C, v, m - f);
          w.style.maxHeight = (y ? v : m) - f + "px", w.style.top = y ? "" : v + c.lineHeight + "px", w.style.bottom = y ? window.innerHeight - v + "px" : "", w.style.left = Math.min(k, window.innerWidth - p - f) + "px";
        }, s.prototype.$shouldPlaceAbove = function(h, u, S) {
          return !(u - h < 0 && u < S);
        }, s.prototype.addMarker = function(h, u) {
          this.marker && this.$markerSession.removeMarker(this.marker), this.$markerSession = u, this.marker = u && u.addMarker(h, "ace_highlight-marker", "text");
        }, s.prototype.hide = function(h) {
          h && this.$fromKeyboard && h.type == "keydown" && h.code == "Escape" || !h && document.activeElement == this.getElement() || h && h.target && (h.type != "keydown" || h.ctrlKey || h.metaKey) && this.$element.contains(h.target) || (this.lastEvent = null, this.timeout && clearTimeout(this.timeout), this.timeout = null, this.addMarker(null), this.isOpen && (this.$fromKeyboard = false, this.$removeCloseEvents(), this.getElement().style.display = "none", this.isOpen = false, n.removePopup(this)));
        }, s.prototype.$registerCloseEvents = function() {
          window.addEventListener("keydown", this.hide, true), window.addEventListener("wheel", this.hide, true), window.addEventListener("mousedown", this.hide, true);
        }, s.prototype.$removeCloseEvents = function() {
          window.removeEventListener("keydown", this.hide, true), window.removeEventListener("wheel", this.hide, true), window.removeEventListener("mousedown", this.hide, true);
        }, s.prototype.onMouseOut = function(h) {
          this.timeout && (clearTimeout(this.timeout), this.timeout = null), this.lastEvent = null, this.isOpen && (!h.relatedTarget || this.getElement().contains(h.relatedTarget) || h && h.currentTarget.contains(h.relatedTarget) || h.relatedTarget.classList.contains("ace_content") || this.hide());
        }, s;
      })(o);
      _.HoverTooltip = e;
    }), ace.define("ace/mouse/default_gutter_handler", [
      "require",
      "exports",
      "module",
      "ace/lib/dom",
      "ace/mouse/mouse_event",
      "ace/tooltip",
      "ace/config",
      "ace/range"
    ], function(A, _, N) {
      var L = this && this.__extends || /* @__PURE__ */ (function() {
        var e = function(t, s) {
          return e = Object.setPrototypeOf || {
            __proto__: []
          } instanceof Array && function(h, u) {
            h.__proto__ = u;
          } || function(h, u) {
            for (var S in u) Object.prototype.hasOwnProperty.call(u, S) && (h[S] = u[S]);
          }, e(t, s);
        };
        return function(t, s) {
          if (typeof s != "function" && s !== null) throw new TypeError("Class extends value " + String(s) + " is not a constructor or null");
          e(t, s);
          function h() {
            this.constructor = t;
          }
          t.prototype = s === null ? Object.create(s) : (h.prototype = s.prototype, new h());
        };
      })(), M = this && this.__values || function(e) {
        var t = typeof Symbol == "function" && Symbol.iterator, s = t && e[t], h = 0;
        if (s) return s.call(e);
        if (e && typeof e.length == "number") return {
          next: function() {
            return e && h >= e.length && (e = void 0), {
              value: e && e[h++],
              done: !e
            };
          }
        };
        throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
      }, $ = A("../lib/dom"), a = A("./mouse_event").MouseEvent, l = A("../tooltip").HoverTooltip, i = A("../config").nls, o = A("../range").Range;
      function r(e) {
        var t = e.editor, s = t.renderer.$gutterLayer;
        e.$tooltip = new n(t), e.$tooltip.addToEditor(t), e.$tooltip.setDataProvider(function(h, u) {
          var S = h.getDocumentPosition().row;
          e.$tooltip.showTooltip(S);
        }), e.editor.setDefaultHandler("guttermousedown", function(h) {
          if (!(!t.isFocused() || h.getButton() != 0)) {
            var u = s.getRegion(h);
            if (u != "foldWidgets") {
              var S = h.getDocumentPosition().row, b = t.session.selection;
              if (h.getShiftKey()) b.selectTo(S, 0);
              else {
                if (h.domEvent.detail == 2) return t.selectAll(), h.preventDefault();
                e.$clickSelection = t.selection.getLineRange(S);
              }
              return e.setState("selectByLines"), e.captureMouse(h), h.preventDefault();
            }
          }
        });
      }
      _.GutterHandler = r;
      var n = (function(e) {
        L(t, e);
        function t(s) {
          var h = e.call(this, s.container) || this;
          h.id = "gt" + ++t.$uid, h.editor = s, h.visibleTooltipRow;
          var u = h.getElement();
          return u.setAttribute("role", "tooltip"), u.setAttribute("id", h.id), u.style.pointerEvents = "auto", h.idleTime = 50, h.onDomMouseMove = h.onDomMouseMove.bind(h), h.onDomMouseOut = h.onDomMouseOut.bind(h), h.setClassName("ace_gutter-tooltip"), h;
        }
        return t.prototype.onDomMouseMove = function(s) {
          var h = new a(s, this.editor);
          this.onMouseMove(h, this.editor);
        }, t.prototype.onDomMouseOut = function(s) {
          var h = new a(s, this.editor);
          this.onMouseOut(h);
        }, t.prototype.addToEditor = function(s) {
          var h = s.renderer.$gutter;
          h.addEventListener("mousemove", this.onDomMouseMove), h.addEventListener("mouseout", this.onDomMouseOut), e.prototype.addToEditor.call(this, s);
        }, t.prototype.removeFromEditor = function(s) {
          var h = s.renderer.$gutter;
          h.removeEventListener("mousemove", this.onDomMouseMove), h.removeEventListener("mouseout", this.onDomMouseOut), e.prototype.removeFromEditor.call(this, s);
        }, t.prototype.destroy = function() {
          this.editor && this.removeFromEditor(this.editor), e.prototype.destroy.call(this);
        }, Object.defineProperty(t, "annotationLabels", {
          get: function() {
            return {
              error: {
                singular: i("gutter-tooltip.aria-label.error.singular", "error"),
                plural: i("gutter-tooltip.aria-label.error.plural", "errors")
              },
              security: {
                singular: i("gutter-tooltip.aria-label.security.singular", "security finding"),
                plural: i("gutter-tooltip.aria-label.security.plural", "security findings")
              },
              warning: {
                singular: i("gutter-tooltip.aria-label.warning.singular", "warning"),
                plural: i("gutter-tooltip.aria-label.warning.plural", "warnings")
              },
              info: {
                singular: i("gutter-tooltip.aria-label.info.singular", "information message"),
                plural: i("gutter-tooltip.aria-label.info.plural", "information messages")
              },
              hint: {
                singular: i("gutter-tooltip.aria-label.hint.singular", "suggestion"),
                plural: i("gutter-tooltip.aria-label.hint.plural", "suggestions")
              }
            };
          },
          enumerable: false,
          configurable: true
        }), t.prototype.showTooltip = function(s) {
          var h, u = this.editor.renderer.$gutterLayer, S = u.$annotations[s], b;
          S ? b = {
            displayText: Array.from(S.displayText),
            type: Array.from(S.type)
          } : b = {
            displayText: [],
            type: []
          };
          var f = u.session.getFoldLine(s);
          if (f && u.$showFoldedAnnotations) {
            for (var c = {
              error: [],
              security: [],
              warning: [],
              info: [],
              hint: []
            }, w = {
              error: 1,
              security: 2,
              warning: 3,
              info: 4,
              hint: 5
            }, C, p = s + 1; p <= f.end.row; p++) if (u.$annotations[p]) for (var v = 0; v < u.$annotations[p].text.length; v++) {
              var k = u.$annotations[p].type[v];
              c[k].push(u.$annotations[p].text[v]), (!C || w[k] < w[C]) && (C = k);
            }
            if ([
              "error",
              "security",
              "warning"
            ].includes(C)) {
              var m = "".concat(t.annotationsToSummaryString(c), " in folded code.");
              b.displayText.push(m), b.type.push(C + "_fold");
            }
          }
          if (b.displayText.length === 0) return this.hide();
          for (var y = {
            error: [],
            security: [],
            warning: [],
            info: [],
            hint: []
          }, g = u.$useSvgGutterIcons ? "ace_icon_svg" : "ace_icon", p = 0; p < b.displayText.length; p++) {
            var d = $.createElement("span"), x = $.createElement("span");
            (h = x.classList).add.apply(h, [
              "ace_".concat(b.type[p]),
              g
            ]), x.setAttribute("aria-label", "".concat(t.annotationLabels[b.type[p].replace("_fold", "")].singular)), x.setAttribute("role", "img"), x.appendChild($.createTextNode(" ")), d.appendChild(x), d.appendChild($.createTextNode(b.displayText[p])), d.appendChild($.createElement("br")), y[b.type[p].replace("_fold", "")].push(d);
          }
          var T = $.createElement("span");
          y.error.forEach(function(I) {
            return T.appendChild(I);
          }), y.security.forEach(function(I) {
            return T.appendChild(I);
          }), y.warning.forEach(function(I) {
            return T.appendChild(I);
          }), y.info.forEach(function(I) {
            return T.appendChild(I);
          }), y.hint.forEach(function(I) {
            return T.appendChild(I);
          }), T.setAttribute("aria-live", "polite");
          var E = this.$findLinkedAnnotationNode(s);
          E && E.setAttribute("aria-describedby", this.id);
          var R = o.fromPoints({
            row: s,
            column: 0
          }, {
            row: s,
            column: 0
          });
          this.showForRange(this.editor, R, T), this.visibleTooltipRow = s, this.editor._signal("showGutterTooltip", this);
        }, t.prototype.$setPosition = function(s, h, u, S) {
          var b = this.$findCellByRow(S.start.row);
          if (b) {
            var f = b && b.element, c = f && f.querySelector(".ace_gutter_annotation");
            if (c) {
              var w = c.getBoundingClientRect();
              if (w) {
                var C = {
                  pageX: w.right,
                  pageY: w.top
                };
                return e.prototype.$setPosition.call(this, s, C, false, S);
              }
            }
          }
        }, t.prototype.$shouldPlaceAbove = function(s, h, u) {
          return u < s;
        }, t.prototype.$findLinkedAnnotationNode = function(s) {
          var h = this.$findCellByRow(s);
          if (h) {
            var u = h.element;
            if (u.childNodes.length > 2) return u.childNodes[2];
          }
        }, t.prototype.$findCellByRow = function(s) {
          return this.editor.renderer.$gutterLayer.$lines.cells.find(function(h) {
            return h.row === s;
          });
        }, t.prototype.hide = function(s) {
          if (this.isOpen) {
            if (this.$element.removeAttribute("aria-live"), this.visibleTooltipRow != null) {
              var h = this.$findLinkedAnnotationNode(this.visibleTooltipRow);
              h && h.removeAttribute("aria-describedby");
            }
            this.visibleTooltipRow = void 0, this.editor._signal("hideGutterTooltip", this), e.prototype.hide.call(this, s);
          }
        }, t.annotationsToSummaryString = function(s) {
          var h, u, S = [], b = [
            "error",
            "security",
            "warning",
            "info",
            "hint"
          ];
          try {
            for (var f = M(b), c = f.next(); !c.done; c = f.next()) {
              var w = c.value;
              if (s[w].length) {
                var C = s[w].length === 1 ? t.annotationLabels[w].singular : t.annotationLabels[w].plural;
                S.push("".concat(s[w].length, " ").concat(C));
              }
            }
          } catch (p) {
            h = {
              error: p
            };
          } finally {
            try {
              c && !c.done && (u = f.return) && u.call(f);
            } finally {
              if (h) throw h.error;
            }
          }
          return S.join(", ");
        }, t.prototype.isOutsideOfText = function(s) {
          var h = s.editor, u = h.renderer.$gutter.getBoundingClientRect();
          return !(s.clientX >= u.left && s.clientX <= u.right && s.clientY >= u.top && s.clientY <= u.bottom);
        }, t;
      })(l);
      n.$uid = 0, _.GutterTooltip = n;
    }), ace.define("ace/mouse/dragdrop_handler", [
      "require",
      "exports",
      "module",
      "ace/lib/dom",
      "ace/lib/event",
      "ace/lib/useragent"
    ], function(A, _, N) {
      var L = A("../lib/dom"), M = A("../lib/event"), $ = A("../lib/useragent"), a = 200, l = 200, i = 5;
      function o(n) {
        var e = n.editor, t = L.createElement("div");
        t.style.cssText = "top:-100px;position:absolute;z-index:2147483647;opacity:0.5", t.textContent = "\xA0";
        var s = [
          "dragWait",
          "dragWaitEnd",
          "startDrag",
          "dragReadyEnd",
          "onMouseDrag"
        ];
        s.forEach(function(F) {
          n[F] = this[F];
        }, this), e.on("mousedown", this.onMouseDown.bind(n));
        var h = e.container, u, S, b, f, c, w, C = 0, p, v, k, m, y;
        this.onDragStart = function(F) {
          if (this.cancelDrag || !h.draggable) {
            var B = this;
            return setTimeout(function() {
              B.startSelect(), B.captureMouse(F);
            }, 0), F.preventDefault();
          }
          c = e.getSelectionRange();
          var W = F.dataTransfer;
          W.effectAllowed = e.getReadOnly() ? "copy" : "copyMove", e.container.appendChild(t), W.setDragImage && W.setDragImage(t, 0, 0), setTimeout(function() {
            e.container.removeChild(t);
          }), W.clearData(), W.setData("Text", e.session.getTextRange()), v = true, this.setState("drag");
        }, this.onDragEnd = function(F) {
          if (h.draggable = false, v = false, this.setState(null), !e.getReadOnly()) {
            var B = F.dataTransfer.dropEffect;
            !p && B == "move" && e.session.remove(e.getSelectionRange()), e.$resetCursorStyle();
          }
          this.editor.unsetStyle("ace_dragging"), this.editor.renderer.setCursorStyle("");
        }, this.onDragEnter = function(F) {
          if (!(e.getReadOnly() || !O(F.dataTransfer))) return S = F.clientX, b = F.clientY, u || T(), C++, F.dataTransfer.dropEffect = p = z(F), M.preventDefault(F);
        }, this.onDragOver = function(F) {
          if (!(e.getReadOnly() || !O(F.dataTransfer))) return S = F.clientX, b = F.clientY, u || (T(), C++), R !== null && (R = null), F.dataTransfer.dropEffect = p = z(F), M.preventDefault(F);
        }, this.onDragLeave = function(F) {
          if (C--, C <= 0 && u) return E(), p = null, M.preventDefault(F);
        }, this.onDrop = function(F) {
          if (w) {
            var B = F.dataTransfer;
            if (v) switch (p) {
              case "move":
                c.contains(w.row, w.column) ? c = {
                  start: w,
                  end: w
                } : c = e.moveText(c, w);
                break;
              case "copy":
                c = e.moveText(c, w, true);
                break;
            }
            else {
              var W = B.getData("Text");
              c = {
                start: w,
                end: e.session.insert(w, W)
              }, e.focus(), p = null;
            }
            return E(), M.preventDefault(F);
          }
        }, M.addListener(h, "dragstart", this.onDragStart.bind(n), e), M.addListener(h, "dragend", this.onDragEnd.bind(n), e), M.addListener(h, "dragenter", this.onDragEnter.bind(n), e), M.addListener(h, "dragover", this.onDragOver.bind(n), e), M.addListener(h, "dragleave", this.onDragLeave.bind(n), e), M.addListener(h, "drop", this.onDrop.bind(n), e);
        function g(F, B) {
          var W = Date.now(), H = !B || F.row != B.row, U = !B || F.column != B.column;
          if (!m || H || U) e.moveCursorToPosition(F), m = W, y = {
            x: S,
            y: b
          };
          else {
            var V = r(y.x, y.y, S, b);
            V > i ? m = null : W - m >= l && (e.renderer.scrollCursorIntoView(), m = null);
          }
        }
        function d(F, B) {
          var W = Date.now(), H = e.renderer.layerConfig.lineHeight, U = e.renderer.layerConfig.characterWidth, V = e.renderer.scroller.getBoundingClientRect(), G = {
            x: {
              left: S - V.left,
              right: V.right - S
            },
            y: {
              top: b - V.top,
              bottom: V.bottom - b
            }
          }, Y = Math.min(G.x.left, G.x.right), J = Math.min(G.y.top, G.y.bottom), ee = {
            row: F.row,
            column: F.column
          };
          Y / U <= 2 && (ee.column += G.x.left < G.x.right ? -3 : 2), J / H <= 1 && (ee.row += G.y.top < G.y.bottom ? -1 : 1);
          var ne = F.row != ee.row, ae = F.column != ee.column, ie = !B || F.row != B.row;
          ne || ae && !ie ? k ? W - k >= a && e.renderer.scrollCursorIntoView(ee) : k = W : k = null;
        }
        function x() {
          var F = w;
          w = e.renderer.screenToTextCoordinates(S, b), g(w, F), d(w, F);
        }
        function T() {
          c = e.selection.toOrientedRange(), u = e.session.addMarker(c, "ace_selection", e.getSelectionStyle()), e.clearSelection(), e.isFocused() && e.renderer.$cursorLayer.setBlinking(false), clearInterval(f), x(), f = setInterval(x, 20), C = 0, M.addListener(document, "mousemove", I);
        }
        function E() {
          clearInterval(f), e.session.removeMarker(u), u = null, e.selection.fromOrientedRange(c), e.isFocused() && !v && e.$resetCursorStyle(), c = null, w = null, C = 0, k = null, m = null, M.removeListener(document, "mousemove", I);
        }
        var R = null;
        function I() {
          R == null && (R = setTimeout(function() {
            R != null && u && E();
          }, 20));
        }
        function O(F) {
          var B = F.types;
          return !B || Array.prototype.some.call(B, function(W) {
            return W == "text/plain" || W == "Text";
          });
        }
        function z(F) {
          var B = [
            "copy",
            "copymove",
            "all",
            "uninitialized"
          ], W = [
            "move",
            "copymove",
            "linkmove",
            "all",
            "uninitialized"
          ], H = $.isMac ? F.altKey : F.ctrlKey, U = "uninitialized";
          try {
            U = F.dataTransfer.effectAllowed.toLowerCase();
          } catch {
          }
          var V = "none";
          return H && B.indexOf(U) >= 0 ? V = "copy" : W.indexOf(U) >= 0 ? V = "move" : B.indexOf(U) >= 0 && (V = "copy"), V;
        }
      }
      (function() {
        this.dragWait = function() {
          var n = Date.now() - this.mousedownEvent.time;
          n > this.editor.getDragDelay() && this.startDrag();
        }, this.dragWaitEnd = function() {
          var n = this.editor.container;
          n.draggable = false, this.startSelect(this.mousedownEvent.getDocumentPosition()), this.selectEnd();
        }, this.dragReadyEnd = function(n) {
          this.editor.$resetCursorStyle(), this.editor.unsetStyle("ace_dragging"), this.editor.renderer.setCursorStyle(""), this.dragWaitEnd();
        }, this.startDrag = function() {
          this.cancelDrag = false;
          var n = this.editor, e = n.container;
          e.draggable = true, n.renderer.$cursorLayer.setBlinking(false), n.setStyle("ace_dragging");
          var t = $.isWin ? "default" : "move";
          n.renderer.setCursorStyle(t), this.setState("dragReady");
        }, this.onMouseDrag = function(n) {
          var e = this.editor.container;
          if ($.isIE && this.state == "dragReady") {
            var t = r(this.mousedownEvent.x, this.mousedownEvent.y, this.x, this.y);
            t > 3 && e.dragDrop();
          }
          if (this.state === "dragWait") {
            var t = r(this.mousedownEvent.x, this.mousedownEvent.y, this.x, this.y);
            t > 0 && (e.draggable = false, this.startSelect(this.mousedownEvent.getDocumentPosition()));
          }
        }, this.onMouseDown = function(n) {
          if (this.$dragEnabled) {
            this.mousedownEvent = n;
            var e = this.editor, t = n.inSelection(), s = n.getButton(), h = n.domEvent.detail || 1;
            if (h === 1 && s === 0 && t) {
              if (n.editor.inMultiSelectMode && (n.getAccelKey() || n.getShiftKey())) return;
              this.mousedownEvent.time = Date.now();
              var u = n.domEvent.target || n.domEvent.srcElement;
              if ("unselectable" in u && (u.unselectable = "on"), e.getDragDelay()) {
                if ($.isWebKit) {
                  this.cancelDrag = true;
                  var S = e.container;
                  S.draggable = true;
                }
                this.setState("dragWait");
              } else this.startDrag();
              this.captureMouse(n, this.onMouseDrag.bind(this)), n.defaultPrevented = true;
            }
          }
        };
      }).call(o.prototype);
      function r(n, e, t, s) {
        return Math.sqrt(Math.pow(t - n, 2) + Math.pow(s - e, 2));
      }
      _.DragdropHandler = o;
    }), ace.define("ace/mouse/touch_handler", [
      "require",
      "exports",
      "module",
      "ace/mouse/mouse_event",
      "ace/lib/event",
      "ace/lib/dom"
    ], function(A, _, N) {
      var L = A("./mouse_event").MouseEvent, M = A("../lib/event"), $ = A("../lib/dom");
      _.addTouchListeners = function(a, l) {
        var i = "scroll", o, r, n, e, t, s, h = 0, u, S = 0, b = 0, f = 0, c, w;
        function C() {
          var g = window.navigator && window.navigator.clipboard, d = false, x = function() {
            var R = l.getCopyText(), I = l.session.getUndoManager().hasUndo();
            w.replaceChild($.buildDom(d ? [
              "span",
              !R && T("selectall") && [
                "span",
                {
                  class: "ace_mobile-button",
                  action: "selectall"
                },
                "Select All"
              ],
              R && T("copy") && [
                "span",
                {
                  class: "ace_mobile-button",
                  action: "copy"
                },
                "Copy"
              ],
              R && T("cut") && [
                "span",
                {
                  class: "ace_mobile-button",
                  action: "cut"
                },
                "Cut"
              ],
              g && T("paste") && [
                "span",
                {
                  class: "ace_mobile-button",
                  action: "paste"
                },
                "Paste"
              ],
              I && T("undo") && [
                "span",
                {
                  class: "ace_mobile-button",
                  action: "undo"
                },
                "Undo"
              ],
              T("find") && [
                "span",
                {
                  class: "ace_mobile-button",
                  action: "find"
                },
                "Find"
              ],
              T("openCommandPalette") && [
                "span",
                {
                  class: "ace_mobile-button",
                  action: "openCommandPalette"
                },
                "Palette"
              ]
            ] : [
              "span"
            ]), w.firstChild);
          }, T = function(R) {
            return l.commands.canExecute(R, l);
          }, E = function(R) {
            var I = R.target.getAttribute("action");
            if (I == "more" || !d) return d = !d, x();
            I == "paste" ? g.readText().then(function(O) {
              l.execCommand(I, O);
            }) : I && ((I == "cut" || I == "copy") && (g ? g.writeText(l.getCopyText()) : document.execCommand("copy")), l.execCommand(I)), w.firstChild.style.display = "none", d = false, I != "openCommandPalette" && l.focus();
          };
          w = $.buildDom([
            "div",
            {
              class: "ace_mobile-menu",
              onclick: E
            },
            [
              "span"
            ],
            [
              "span",
              {
                class: "ace_mobile-button",
                action: "more"
              },
              "..."
            ]
          ], l.container), w.addEventListener("touchstart", function(R) {
            i = "menu", R.stopPropagation(), R.preventDefault(), l.textInput.focus();
          }), w.addEventListener("touchend", function(R) {
            R.stopPropagation(), R.preventDefault(), E(R);
          });
        }
        function p() {
          if (!l.getOption("enableMobileMenu")) {
            w && v();
            return;
          }
          w || C();
          var g = l.selection.cursor, d = l.renderer.textToScreenCoordinates(g.row, g.column), x = l.renderer.textToScreenCoordinates(0, 0).pageX, T = l.renderer.scrollLeft, E = l.container.getBoundingClientRect();
          w.style.top = d.pageY - E.top - 3 + "px", d.pageX - E.left < E.width - 70 ? (w.style.left = "", w.style.right = "10px") : (w.style.right = "", w.style.left = x + T - E.left + "px"), w.style.display = "", w.firstChild.style.display = "none", l.on("input", v);
        }
        function v(g) {
          w && (w.style.display = "none"), l.off("input", v);
        }
        function k() {
          t = null, clearTimeout(t);
          var g = l.selection.getRange(), d = g.contains(u.row, u.column);
          (g.isEmpty() || !d) && (l.selection.moveToPosition(u), l.selection.selectWord()), i = "wait", p();
        }
        function m() {
          t = null, clearTimeout(t), l.selection.moveToPosition(u);
          var g = S >= 2 ? l.selection.getLineRange(u.row) : l.session.getBracketRange(u);
          g && !g.isEmpty() ? l.selection.setRange(g) : l.selection.selectWord(), i = "wait";
        }
        M.addListener(a, "contextmenu", function(g) {
          if (c) {
            var d = l.textInput.getElement();
            d.focus();
          }
        }, l), M.addListener(a, "touchstart", function(g) {
          var d = g.touches;
          if (t || d.length > 1) {
            clearTimeout(t), t = null, n = -1, i = "zoom";
            return;
          }
          c = l.$mouseHandler.isMousePressed = true;
          var x = l.renderer.layerConfig.lineHeight, T = l.renderer.layerConfig.lineHeight, E = g.timeStamp;
          e = E;
          var R = d[0], I = R.clientX, O = R.clientY;
          Math.abs(o - I) + Math.abs(r - O) > x && (n = -1), o = g.clientX = I, r = g.clientY = O, b = f = 0;
          var z = new L(g, l);
          if (u = z.getDocumentPosition(), E - n < 500 && d.length == 1 && !h) S++, g.preventDefault(), g.button = 0, m();
          else {
            S = 0;
            var F = l.selection.cursor, B = l.selection.isEmpty() ? F : l.selection.anchor, W = l.renderer.$cursorLayer.getPixelPosition(F, true), H = l.renderer.$cursorLayer.getPixelPosition(B, true), U = l.renderer.scroller.getBoundingClientRect(), V = l.renderer.layerConfig.offset, G = l.renderer.scrollLeft, Y = function(ne, ae) {
              return ne = ne / T, ae = ae / x - 0.75, ne * ne + ae * ae;
            };
            if (g.clientX < U.left) {
              i = "zoom";
              return;
            }
            var J = Y(g.clientX - U.left - W.left + G, g.clientY - U.top - W.top + V), ee = Y(g.clientX - U.left - H.left + G, g.clientY - U.top - H.top + V);
            J < 3.5 && ee < 3.5 && (i = J > ee ? "cursor" : "anchor"), ee < 3.5 ? i = "anchor" : J < 3.5 ? i = "cursor" : i = "scroll", t = setTimeout(k, 450);
          }
          n = E;
        }, l), M.addListener(a, "touchend", function(g) {
          c = l.$mouseHandler.isMousePressed = false, s && clearInterval(s), i == "zoom" ? (i = "", h = 0) : t ? (l.selection.moveToPosition(u), h = 0, p()) : i == "scroll" ? (y(), v()) : p(), clearTimeout(t), t = null;
        }, l), M.addListener(a, "touchmove", function(g) {
          t && (clearTimeout(t), t = null);
          var d = g.touches;
          if (!(d.length > 1 || i == "zoom")) {
            var x = d[0], T = o - x.clientX, E = r - x.clientY;
            if (i == "wait") if (T * T + E * E > 4) i = "cursor";
            else return g.preventDefault();
            o = x.clientX, r = x.clientY, g.clientX = x.clientX, g.clientY = x.clientY;
            var R = g.timeStamp, I = R - e;
            if (e = R, i == "scroll") {
              var O = new L(g, l);
              O.speed = 1, O.wheelX = T, O.wheelY = E, 10 * Math.abs(T) < Math.abs(E) && (T = 0), 10 * Math.abs(E) < Math.abs(T) && (E = 0), I != 0 && (b = T / I, f = E / I), l._emit("mousewheel", O), O.propagationStopped || (b = f = 0);
            } else {
              var z = new L(g, l), F = z.getDocumentPosition();
              i == "cursor" ? l.selection.moveCursorToPosition(F) : i == "anchor" && l.selection.setSelectionAnchor(F.row, F.column), l.renderer.scrollCursorIntoView(F), g.preventDefault();
            }
          }
        }, l);
        function y() {
          h += 60, s = setInterval(function() {
            h-- <= 0 && (clearInterval(s), s = null), Math.abs(b) < 0.01 && (b = 0), Math.abs(f) < 0.01 && (f = 0), h < 20 && (b = 0.9 * b), h < 20 && (f = 0.9 * f);
            var g = l.session.getScrollTop();
            l.renderer.scrollBy(10 * b, 10 * f), g == l.session.getScrollTop() && (h = 0);
          }, 10);
        }
      };
    }), ace.define("ace/mouse/mouse_handler", [
      "require",
      "exports",
      "module",
      "ace/lib/event",
      "ace/lib/useragent",
      "ace/mouse/default_handlers",
      "ace/mouse/default_gutter_handler",
      "ace/mouse/mouse_event",
      "ace/mouse/dragdrop_handler",
      "ace/mouse/touch_handler",
      "ace/config"
    ], function(A, _, N) {
      var L = A("../lib/event"), M = A("../lib/useragent"), $ = A("./default_handlers").DefaultHandlers, a = A("./default_gutter_handler").GutterHandler, l = A("./mouse_event").MouseEvent, i = A("./dragdrop_handler").DragdropHandler, o = A("./touch_handler").addTouchListeners, r = A("../config"), n = (function() {
        function e(t) {
          this.$dragDelay, this.$dragEnabled, this.$mouseMoved, this.mouseEvent, this.$focusTimeout;
          var s = this;
          this.editor = t, new $(this), new a(this), new i(this);
          var h = function(b) {
            var f = !document.hasFocus || !document.hasFocus() || !t.isFocused() && document.activeElement == (t.textInput && t.textInput.getElement());
            f && window.focus(), t.focus(), setTimeout(function() {
              t.isFocused() || t.focus();
            });
          }, u = t.renderer.getMouseEventTarget();
          L.addListener(u, "click", this.onMouseEvent.bind(this, "click"), t), L.addListener(u, "mousemove", this.onMouseMove.bind(this, "mousemove"), t), L.addMultiMouseDownListener([
            u,
            t.renderer.scrollBarV && t.renderer.scrollBarV.inner,
            t.renderer.scrollBarH && t.renderer.scrollBarH.inner,
            t.textInput && t.textInput.getElement()
          ].filter(Boolean), [
            400,
            300,
            250
          ], this, "onMouseEvent", t), L.addMouseWheelListener(t.container, this.onMouseWheel.bind(this, "mousewheel"), t), o(t.container, t);
          var S = t.renderer.$gutter;
          L.addListener(S, "mousedown", this.onMouseEvent.bind(this, "guttermousedown"), t), L.addListener(S, "click", this.onMouseEvent.bind(this, "gutterclick"), t), L.addListener(S, "dblclick", this.onMouseEvent.bind(this, "gutterdblclick"), t), L.addListener(S, "mousemove", this.onMouseEvent.bind(this, "guttermousemove"), t), L.addListener(u, "mousedown", h, t), L.addListener(S, "mousedown", h, t), M.isIE && t.renderer.scrollBarV && (L.addListener(t.renderer.scrollBarV.element, "mousedown", h, t), L.addListener(t.renderer.scrollBarH.element, "mousedown", h, t)), t.on("mousemove", function(b) {
            if (!(s.state || s.$dragDelay || !s.$dragEnabled)) {
              var f = t.renderer.screenToTextCoordinates(b.x, b.y), c = t.session.selection.getRange(), w = t.renderer;
              !c.isEmpty() && c.insideStart(f.row, f.column) ? w.setCursorStyle("default") : w.setCursorStyle("");
            }
          }, t);
        }
        return e.prototype.onMouseEvent = function(t, s) {
          this.editor.session && this.editor._emit(t, new l(s, this.editor));
        }, e.prototype.onMouseMove = function(t, s) {
          var h = this.editor._eventRegistry && this.editor._eventRegistry.mousemove;
          !h || !h.length || this.editor._emit(t, new l(s, this.editor));
        }, e.prototype.onMouseWheel = function(t, s) {
          var h = new l(s, this.editor);
          h.speed = this.$scrollSpeed * 2, h.wheelX = s.wheelX, h.wheelY = s.wheelY, this.editor._emit(t, h);
        }, e.prototype.setState = function(t) {
          this.state = t;
        }, e.prototype.captureMouse = function(t, s) {
          this.x = t.x, this.y = t.y, this.isMousePressed = true;
          var h = this.editor, u = this.editor.renderer;
          u.$isMousePressed = true;
          var S = this, b = true, f = function(v) {
            if (v) {
              if (M.isWebKit && !v.which && S.releaseMouse) return S.releaseMouse();
              S.x = v.clientX, S.y = v.clientY, s && s(v), S.mouseEvent = new l(v, S.editor), S.$mouseMoved = true;
            }
          }, c = function(v) {
            h.off("beforeEndOperation", p), b = false, h.session && w(), S[S.state + "End"] && S[S.state + "End"](v), S.state = "", S.isMousePressed = u.$isMousePressed = false, u.$keepTextAreaAtCursor && u.$moveTextAreaToCursor(), S.$onCaptureMouseMove = S.releaseMouse = null, v && S.onMouseEvent("mouseup", v), h.endOperation();
          }, w = function() {
            S[S.state] && S[S.state](), S.$mouseMoved = false;
          }, C = function() {
            b && (w(), L.nextFrame(C));
          };
          if (M.isOldIE && t.domEvent.type == "dblclick") return setTimeout(function() {
            c(t);
          });
          var p = function(v) {
            S.releaseMouse && h.curOp.command.name && h.curOp.selectionChanged && (S[S.state + "End"] && S[S.state + "End"](), S.state = "", S.releaseMouse());
          };
          h.on("beforeEndOperation", p), h.startOperation({
            command: {
              name: "mouse"
            }
          }), S.$onCaptureMouseMove = f, S.releaseMouse = L.capture(this.editor.container, f, c), C();
        }, e.prototype.cancelContextMenu = function() {
          var t = function(s) {
            s && s.domEvent && s.domEvent.type != "contextmenu" || (this.editor.off("nativecontextmenu", t), s && s.domEvent && L.stopEvent(s.domEvent));
          }.bind(this);
          setTimeout(t, 10), this.editor.on("nativecontextmenu", t);
        }, e.prototype.destroy = function() {
          this.releaseMouse && this.releaseMouse(), this.$tooltip && this.$tooltip.destroy();
        }, e;
      })();
      n.prototype.releaseMouse = null, r.defineOptions(n.prototype, "mouseHandler", {
        scrollSpeed: {
          initialValue: 2
        },
        dragDelay: {
          initialValue: M.isMac ? 150 : 0
        },
        dragEnabled: {
          initialValue: true
        },
        focusTimeout: {
          initialValue: 0
        }
      }), _.MouseHandler = n;
    }), ace.define("ace/mouse/fold_handler", [
      "require",
      "exports",
      "module",
      "ace/lib/dom"
    ], function(A, _, N) {
      var L = A("../lib/dom"), M = /* @__PURE__ */ (function() {
        function $(a) {
          a.on("click", function(l) {
            var i = l.getDocumentPosition(), o = a.session, r = o.getFoldAt(i.row, i.column, 1);
            r && (l.getAccelKey() ? o.removeFold(r) : o.expandFold(r), l.stop());
            var n = l.domEvent && l.domEvent.target;
            n && L.hasCssClass(n, "ace_inline_button") && L.hasCssClass(n, "ace_toggle_wrap") && (o.setOption("wrap", !o.getUseWrapMode()), a.renderer.scrollCursorIntoView());
          }), a.on("gutterclick", function(l) {
            var i = a.renderer.$gutterLayer.getRegion(l);
            if (i == "foldWidgets") {
              var o = l.getDocumentPosition().row, r = a.session;
              r.foldWidgets && r.foldWidgets[o] && a.session.onFoldWidgetClick(o, l), a.isFocused() || a.focus(), l.stop();
            }
          }), a.on("gutterdblclick", function(l) {
            var i = a.renderer.$gutterLayer.getRegion(l);
            if (i == "foldWidgets") {
              var o = l.getDocumentPosition().row, r = a.session, n = r.getParentFoldRangeData(o, true), e = n.range || n.firstRange;
              if (e) {
                o = e.start.row;
                var t = r.getFoldAt(o, r.getLine(o).length, 1);
                t ? r.removeFold(t) : (r.addFold("...", e), a.renderer.scrollCursorIntoView({
                  row: e.start.row,
                  column: 0
                }));
              }
              l.stop();
            }
          });
        }
        return $;
      })();
      _.FoldHandler = M;
    }), ace.define("ace/keyboard/keybinding", [
      "require",
      "exports",
      "module",
      "ace/lib/keys",
      "ace/lib/event"
    ], function(A, _, N) {
      var L = A("../lib/keys"), M = A("../lib/event"), $ = (function() {
        function a(l) {
          this.$editor = l, this.$data = {
            editor: l
          }, this.$handlers = [], this.setDefaultHandler(l.commands);
        }
        return a.prototype.setDefaultHandler = function(l) {
          this.removeKeyboardHandler(this.$defaultHandler), this.$defaultHandler = l, this.addKeyboardHandler(l, 0);
        }, a.prototype.setKeyboardHandler = function(l) {
          var i = this.$handlers;
          if (i[i.length - 1] != l) {
            for (; i[i.length - 1] && i[i.length - 1] != this.$defaultHandler; ) this.removeKeyboardHandler(i[i.length - 1]);
            this.addKeyboardHandler(l, 1);
          }
        }, a.prototype.addKeyboardHandler = function(l, i) {
          if (l) {
            typeof l == "function" && !l.handleKeyboard && (l.handleKeyboard = l);
            var o = this.$handlers.indexOf(l);
            o != -1 && this.$handlers.splice(o, 1), i == null ? this.$handlers.push(l) : this.$handlers.splice(i, 0, l), o == -1 && l.attach && l.attach(this.$editor);
          }
        }, a.prototype.removeKeyboardHandler = function(l) {
          var i = this.$handlers.indexOf(l);
          return i == -1 ? false : (this.$handlers.splice(i, 1), l.detach && l.detach(this.$editor), true);
        }, a.prototype.getKeyboardHandler = function() {
          return this.$handlers[this.$handlers.length - 1];
        }, a.prototype.getStatusText = function() {
          var l = this.$data, i = l.editor;
          return this.$handlers.map(function(o) {
            return o.getStatusText && o.getStatusText(i, l) || "";
          }).filter(Boolean).join(" ");
        }, a.prototype.$callKeyboardHandlers = function(l, i, o, r) {
          for (var n, e = false, t = this.$editor.commands, s = this.$handlers.length; s-- && (n = this.$handlers[s].handleKeyboard(this.$data, l, i, o, r), !(!(!n || !n.command) && (n.command == "null" ? e = true : e = t.exec(n.command, this.$editor, n.args, r), e && r && l != -1 && n.passEvent != true && n.command.passEvent != true && M.stopEvent(r), e))); ) ;
          return !e && l == -1 && (n = {
            command: "insertstring"
          }, e = t.exec("insertstring", this.$editor, i)), e && this.$editor._signal && this.$editor._signal("keyboardActivity", n), e;
        }, a.prototype.onCommandKey = function(l, i, o) {
          var r = L.keyCodeToString(o);
          return this.$callKeyboardHandlers(i, r, o, l);
        }, a.prototype.onTextInput = function(l) {
          return this.$callKeyboardHandlers(-1, l);
        }, a;
      })();
      _.KeyBinding = $;
    }), ace.define("ace/lib/bidiutil", [
      "require",
      "exports",
      "module"
    ], function(A, _, N) {
      var L = 0, M = 0, $ = false, a = false, l = false, i = [
        [
          0,
          3,
          0,
          1,
          0,
          0,
          0
        ],
        [
          0,
          3,
          0,
          1,
          2,
          2,
          0
        ],
        [
          0,
          3,
          0,
          17,
          2,
          0,
          1
        ],
        [
          0,
          3,
          5,
          5,
          4,
          1,
          0
        ],
        [
          0,
          3,
          21,
          21,
          4,
          0,
          1
        ],
        [
          0,
          3,
          5,
          5,
          4,
          2,
          0
        ]
      ], o = [
        [
          2,
          0,
          1,
          1,
          0,
          1,
          0
        ],
        [
          2,
          0,
          1,
          1,
          0,
          2,
          0
        ],
        [
          2,
          0,
          2,
          1,
          3,
          2,
          0
        ],
        [
          2,
          0,
          2,
          33,
          3,
          1,
          1
        ]
      ], r = 0, n = 1, e = 0, t = 1, s = 2, h = 3, u = 4, S = 5, b = 6, f = 7, c = 8, w = 9, C = 10, p = 11, v = 12, k = 13, m = 14, y = 15, g = 16, d = 17, x = 18, T = [
        x,
        x,
        x,
        x,
        x,
        x,
        x,
        x,
        x,
        b,
        S,
        b,
        c,
        S,
        x,
        x,
        x,
        x,
        x,
        x,
        x,
        x,
        x,
        x,
        x,
        x,
        x,
        x,
        S,
        S,
        S,
        b,
        c,
        u,
        u,
        p,
        p,
        p,
        u,
        u,
        u,
        u,
        u,
        C,
        w,
        C,
        w,
        w,
        s,
        s,
        s,
        s,
        s,
        s,
        s,
        s,
        s,
        s,
        w,
        u,
        u,
        u,
        u,
        u,
        u,
        e,
        e,
        e,
        e,
        e,
        e,
        e,
        e,
        e,
        e,
        e,
        e,
        e,
        e,
        e,
        e,
        e,
        e,
        e,
        e,
        e,
        e,
        e,
        e,
        e,
        e,
        u,
        u,
        u,
        u,
        u,
        u,
        e,
        e,
        e,
        e,
        e,
        e,
        e,
        e,
        e,
        e,
        e,
        e,
        e,
        e,
        e,
        e,
        e,
        e,
        e,
        e,
        e,
        e,
        e,
        e,
        e,
        e,
        u,
        u,
        u,
        u,
        x,
        x,
        x,
        x,
        x,
        x,
        S,
        x,
        x,
        x,
        x,
        x,
        x,
        x,
        x,
        x,
        x,
        x,
        x,
        x,
        x,
        x,
        x,
        x,
        x,
        x,
        x,
        x,
        x,
        x,
        x,
        x,
        x,
        w,
        u,
        p,
        p,
        p,
        p,
        u,
        u,
        u,
        u,
        e,
        u,
        u,
        x,
        u,
        u,
        p,
        p,
        s,
        s,
        u,
        e,
        u,
        u,
        u,
        s,
        e,
        u,
        u,
        u,
        u,
        u
      ], E = [
        c,
        c,
        c,
        c,
        c,
        c,
        c,
        c,
        c,
        c,
        c,
        x,
        x,
        x,
        e,
        t,
        u,
        u,
        u,
        u,
        u,
        u,
        u,
        u,
        u,
        u,
        u,
        u,
        u,
        u,
        u,
        u,
        u,
        u,
        u,
        u,
        u,
        u,
        u,
        u,
        c,
        S,
        k,
        m,
        y,
        g,
        d,
        w,
        p,
        p,
        p,
        p,
        p,
        u,
        u,
        u,
        u,
        u,
        u,
        u,
        u,
        u,
        u,
        u,
        u,
        u,
        u,
        u,
        w,
        u,
        u,
        u,
        u,
        u,
        u,
        u,
        u,
        u,
        u,
        u,
        u,
        u,
        u,
        u,
        u,
        u,
        u,
        u,
        u,
        u,
        u,
        u,
        u,
        u,
        u,
        c
      ];
      function R(F, B, W, H) {
        var U = L ? o : i, V = null, G = null, Y = null, J = 0, ee = null, ne = null, ae = -1, ie = null, de = null, Be = [];
        if (!H) for (ie = 0, H = []; ie < W; ie++) H[ie] = z(F[ie]);
        for (M = L, $ = false, a = false, l = false, de = 0; de < W; de++) {
          if (V = J, Be[de] = G = O(F, H, Be, de), J = U[V][G], ee = J & 240, J &= 15, B[de] = Y = U[J][5], ee > 0) if (ee == 16) {
            for (ie = ae; ie < de; ie++) B[ie] = 1;
            ae = -1;
          } else ae = -1;
          if (ne = U[J][6], ne) ae == -1 && (ae = de);
          else if (ae > -1) {
            for (ie = ae; ie < de; ie++) B[ie] = Y;
            ae = -1;
          }
          H[de] == S && (B[de] = 0), M |= Y;
        }
        if (l) {
          for (ie = 0; ie < W; ie++) if (H[ie] == b) {
            B[ie] = L;
            for (var Ee = ie - 1; Ee >= 0 && H[Ee] == c; Ee--) B[Ee] = L;
          }
        }
      }
      function I(F, B, W) {
        if (!(M < F)) {
          if (F == 1 && L == n && !a) {
            W.reverse();
            return;
          }
          for (var H = W.length, U = 0, V, G, Y, J; U < H; ) {
            if (B[U] >= F) {
              for (V = U + 1; V < H && B[V] >= F; ) V++;
              for (G = U, Y = V - 1; G < Y; G++, Y--) J = W[G], W[G] = W[Y], W[Y] = J;
              U = V;
            }
            U++;
          }
        }
      }
      function O(F, B, W, H) {
        var U = B[H], V, G, Y, J;
        switch (U) {
          case e:
          case t:
            $ = false;
          case u:
          case h:
            return U;
          case s:
            return $ ? h : s;
          case f:
            return $ = true, t;
          case c:
            return u;
          case w:
            return H < 1 || H + 1 >= B.length || (V = W[H - 1]) != s && V != h || (G = B[H + 1]) != s && G != h ? u : ($ && (G = h), G == V ? G : u);
          case C:
            return V = H > 0 ? W[H - 1] : S, V == s && H + 1 < B.length && B[H + 1] == s ? s : u;
          case p:
            if (H > 0 && W[H - 1] == s) return s;
            if ($) return u;
            for (J = H + 1, Y = B.length; J < Y && B[J] == p; ) J++;
            return J < Y && B[J] == s ? s : u;
          case v:
            for (Y = B.length, J = H + 1; J < Y && B[J] == v; ) J++;
            if (J < Y) {
              var ee = F[H], ne = ee >= 1425 && ee <= 2303 || ee == 64286;
              if (V = B[J], ne && (V == t || V == f)) return t;
            }
            return H < 1 || (V = B[H - 1]) == S ? u : W[H - 1];
          case S:
            return $ = false, a = true, L;
          case b:
            return l = true, u;
          case k:
          case m:
          case g:
          case d:
          case y:
            $ = false;
          case x:
            return u;
        }
      }
      function z(F) {
        var B = F.charCodeAt(0), W = B >> 8;
        return W == 0 ? B > 191 ? e : T[B] : W == 5 ? /[\u0591-\u05f4]/.test(F) ? t : e : W == 6 ? /[\u0610-\u061a\u064b-\u065f\u06d6-\u06e4\u06e7-\u06ed]/.test(F) ? v : /[\u0660-\u0669\u066b-\u066c]/.test(F) ? h : B == 1642 ? p : /[\u06f0-\u06f9]/.test(F) ? s : f : W == 32 && B <= 8287 ? E[B & 255] : W == 254 && B >= 65136 ? f : u;
      }
      _.L = e, _.R = t, _.EN = s, _.ON_R = 3, _.AN = 4, _.R_H = 5, _.B = 6, _.RLE = 7, _.DOT = "\xB7", _.doBidiReorder = function(F, B, W) {
        if (F.length < 2) return {};
        var H = F.split(""), U = new Array(H.length), V = new Array(H.length), G = [];
        L = W ? n : r, R(H, G, H.length, B);
        for (var Y = 0; Y < U.length; U[Y] = Y, Y++) ;
        I(2, G, U), I(1, G, U);
        for (var Y = 0; Y < U.length - 1; Y++) B[Y] === h ? G[Y] = _.AN : G[Y] === t && (B[Y] > f && B[Y] < k || B[Y] === u || B[Y] === x) ? G[Y] = _.ON_R : Y > 0 && H[Y - 1] === "\u0644" && /\u0622|\u0623|\u0625|\u0627/.test(H[Y]) && (G[Y - 1] = G[Y] = _.R_H, Y++);
        H[H.length - 1] === _.DOT && (G[H.length - 1] = _.B), H[0] === "\u202B" && (G[0] = _.RLE);
        for (var Y = 0; Y < U.length; Y++) V[Y] = G[U[Y]];
        return {
          logicalFromVisual: U,
          bidiLevels: V
        };
      }, _.hasBidiCharacters = function(F, B) {
        for (var W = false, H = 0; H < F.length; H++) B[H] = z(F.charAt(H)), !W && (B[H] == t || B[H] == f || B[H] == h) && (W = true);
        return W;
      }, _.getVisualFromLogicalIdx = function(F, B) {
        for (var W = 0; W < B.logicalFromVisual.length; W++) if (B.logicalFromVisual[W] == F) return W;
        return 0;
      };
    }), ace.define("ace/bidihandler", [
      "require",
      "exports",
      "module",
      "ace/lib/bidiutil",
      "ace/lib/lang"
    ], function(A, _, N) {
      var L = A("./lib/bidiutil"), M = A("./lib/lang"), $ = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac\u202B]/, a = (function() {
        function l(i) {
          this.session = i, this.bidiMap = {}, this.currentRow = null, this.bidiUtil = L, this.charWidths = [], this.EOL = "\xAC", this.showInvisibles = true, this.isRtlDir = false, this.$isRtl = false, this.line = "", this.wrapIndent = 0, this.EOF = "\xB6", this.RLE = "\u202B", this.contentWidth = 0, this.fontMetrics = null, this.rtlLineOffset = 0, this.wrapOffset = 0, this.isMoveLeftOperation = false, this.seenBidi = $.test(i.getValue());
        }
        return l.prototype.isBidiRow = function(i, o, r) {
          return this.seenBidi ? (i !== this.currentRow && (this.currentRow = i, this.updateRowLine(o, r), this.updateBidiMap()), this.bidiMap.bidiLevels) : false;
        }, l.prototype.onChange = function(i) {
          this.seenBidi ? this.currentRow = null : i.action == "insert" && $.test(i.lines.join(`
`)) && (this.seenBidi = true, this.currentRow = null);
        }, l.prototype.getDocumentRow = function() {
          var i = 0, o = this.session.$screenRowCache;
          if (o.length) {
            var r = this.session.$getRowCacheIndex(o, this.currentRow);
            r >= 0 && (i = this.session.$docRowCache[r]);
          }
          return i;
        }, l.prototype.getSplitIndex = function() {
          var i = 0, o = this.session.$screenRowCache;
          if (o.length) for (var r, n = this.session.$getRowCacheIndex(o, this.currentRow); this.currentRow - i > 0 && (r = this.session.$getRowCacheIndex(o, this.currentRow - i - 1), r === n); ) n = r, i++;
          else i = this.currentRow;
          return i;
        }, l.prototype.updateRowLine = function(i, o) {
          i === void 0 && (i = this.getDocumentRow());
          var r = i === this.session.getLength() - 1, n = r ? this.EOF : this.EOL;
          if (this.wrapIndent = 0, this.line = this.session.getLine(i), this.isRtlDir = this.$isRtl || this.line.charAt(0) === this.RLE, this.session.$useWrapMode) {
            var e = this.session.$wrapData[i];
            e && (o === void 0 && (o = this.getSplitIndex()), o > 0 && e.length ? (this.wrapIndent = e.indent, this.wrapOffset = this.wrapIndent * this.charWidths[L.L], this.line = o < e.length ? this.line.substring(e[o - 1], e[o]) : this.line.substring(e[e.length - 1])) : this.line = this.line.substring(0, e[o]), o == e.length && (this.line += this.showInvisibles ? n : L.DOT));
          } else this.line += this.showInvisibles ? n : L.DOT;
          var t = this.session, s = 0, h;
          this.line = this.line.replace(/\t|[\u1100-\u2029, \u202F-\uFFE6]/g, function(u, S) {
            return u === "	" || t.isFullWidth(u.charCodeAt(0)) ? (h = u === "	" ? t.getScreenTabSize(S + s) : 2, s += h - 1, M.stringRepeat(L.DOT, h)) : u;
          }), this.isRtlDir && (this.fontMetrics.$main.textContent = this.line.charAt(this.line.length - 1) == L.DOT ? this.line.substr(0, this.line.length - 1) : this.line, this.rtlLineOffset = this.contentWidth - this.fontMetrics.$main.getBoundingClientRect().width);
        }, l.prototype.updateBidiMap = function() {
          var i = [];
          L.hasBidiCharacters(this.line, i) || this.isRtlDir ? this.bidiMap = L.doBidiReorder(this.line, i, this.isRtlDir) : this.bidiMap = {};
        }, l.prototype.markAsDirty = function() {
          this.currentRow = null;
        }, l.prototype.updateCharacterWidths = function(i) {
          if (this.characterWidth !== i.$characterSize.width) {
            this.fontMetrics = i;
            var o = this.characterWidth = i.$characterSize.width, r = i.$measureCharWidth("\u05D4");
            this.charWidths[L.L] = this.charWidths[L.EN] = this.charWidths[L.ON_R] = o, this.charWidths[L.R] = this.charWidths[L.AN] = r, this.charWidths[L.R_H] = r * 0.45, this.charWidths[L.B] = this.charWidths[L.RLE] = 0, this.currentRow = null;
          }
        }, l.prototype.setShowInvisibles = function(i) {
          this.showInvisibles = i, this.currentRow = null;
        }, l.prototype.setEolChar = function(i) {
          this.EOL = i;
        }, l.prototype.setContentWidth = function(i) {
          this.contentWidth = i;
        }, l.prototype.isRtlLine = function(i) {
          return this.$isRtl ? true : i != null ? this.session.getLine(i).charAt(0) == this.RLE : this.isRtlDir;
        }, l.prototype.setRtlDirection = function(i, o) {
          for (var r = i.getCursorPosition(), n = i.selection.getSelectionAnchor().row; n <= r.row; n++) !o && i.session.getLine(n).charAt(0) === i.session.$bidiHandler.RLE ? i.session.doc.removeInLine(n, 0, 1) : o && i.session.getLine(n).charAt(0) !== i.session.$bidiHandler.RLE && i.session.doc.insert({
            column: 0,
            row: n
          }, i.session.$bidiHandler.RLE);
        }, l.prototype.getPosLeft = function(i) {
          i -= this.wrapIndent;
          var o = this.line.charAt(0) === this.RLE ? 1 : 0, r = i > o ? this.session.getOverwrite() ? i : i - 1 : o, n = L.getVisualFromLogicalIdx(r, this.bidiMap), e = this.bidiMap.bidiLevels, t = 0;
          !this.session.getOverwrite() && i <= o && e[n] % 2 !== 0 && n++;
          for (var s = 0; s < n; s++) t += this.charWidths[e[s]];
          return !this.session.getOverwrite() && i > o && e[n] % 2 === 0 && (t += this.charWidths[e[n]]), this.wrapIndent && (t += this.isRtlDir ? -1 * this.wrapOffset : this.wrapOffset), this.isRtlDir && (t += this.rtlLineOffset), t;
        }, l.prototype.getSelections = function(i, o) {
          var r = this.bidiMap, n = r.bidiLevels, e, t = [], s = 0, h = Math.min(i, o) - this.wrapIndent, u = Math.max(i, o) - this.wrapIndent, S = false, b = false, f = 0;
          this.wrapIndent && (s += this.isRtlDir ? -1 * this.wrapOffset : this.wrapOffset);
          for (var c, w = 0; w < n.length; w++) c = r.logicalFromVisual[w], e = n[w], S = c >= h && c < u, S && !b ? f = s : !S && b && t.push({
            left: f,
            width: s - f
          }), s += this.charWidths[e], b = S;
          if (S && w === n.length && t.push({
            left: f,
            width: s - f
          }), this.isRtlDir) for (var C = 0; C < t.length; C++) t[C].left += this.rtlLineOffset;
          return t;
        }, l.prototype.offsetToCol = function(r) {
          this.isRtlDir && (r -= this.rtlLineOffset);
          var o = 0, r = Math.max(r, 0), n = 0, e = 0, t = this.bidiMap.bidiLevels, s = this.charWidths[t[e]];
          for (this.wrapIndent && (r -= this.isRtlDir ? -1 * this.wrapOffset : this.wrapOffset); r > n + s / 2; ) {
            if (n += s, e === t.length - 1) {
              s = 0;
              break;
            }
            s = this.charWidths[t[++e]];
          }
          return e > 0 && t[e - 1] % 2 !== 0 && t[e] % 2 === 0 ? (r < n && e--, o = this.bidiMap.logicalFromVisual[e]) : e > 0 && t[e - 1] % 2 === 0 && t[e] % 2 !== 0 ? o = 1 + (r > n ? this.bidiMap.logicalFromVisual[e] : this.bidiMap.logicalFromVisual[e - 1]) : this.isRtlDir && e === t.length - 1 && s === 0 && t[e - 1] % 2 === 0 || !this.isRtlDir && e === 0 && t[e] % 2 !== 0 ? o = 1 + this.bidiMap.logicalFromVisual[e] : (e > 0 && t[e - 1] % 2 !== 0 && s !== 0 && e--, o = this.bidiMap.logicalFromVisual[e]), o === 0 && this.isRtlDir && o++, o + this.wrapIndent;
        }, l;
      })();
      _.BidiHandler = a;
    }), ace.define("ace/selection", [
      "require",
      "exports",
      "module",
      "ace/lib/oop",
      "ace/lib/lang",
      "ace/lib/event_emitter",
      "ace/range"
    ], function(A, _, N) {
      var L = A("./lib/oop"), M = A("./lib/lang"), $ = A("./lib/event_emitter").EventEmitter, a = A("./range").Range, l = (function() {
        function i(o) {
          this.session = o, this.doc = o.getDocument(), this.clearSelection(), this.cursor = this.lead = this.doc.createAnchor(0, 0), this.anchor = this.doc.createAnchor(0, 0), this.$silent = false;
          var r = this;
          this.cursor.on("change", function(n) {
            r.$cursorChanged = true, r.$silent || r._emit("changeCursor"), !r.$isEmpty && !r.$silent && r._emit("changeSelection"), !r.$keepDesiredColumnOnChange && n.old.column != n.value.column && (r.$desiredColumn = null);
          }), this.anchor.on("change", function() {
            r.$anchorChanged = true, !r.$isEmpty && !r.$silent && r._emit("changeSelection");
          });
        }
        return i.prototype.isEmpty = function() {
          return this.$isEmpty || this.anchor.row == this.lead.row && this.anchor.column == this.lead.column;
        }, i.prototype.isMultiLine = function() {
          return !this.$isEmpty && this.anchor.row != this.cursor.row;
        }, i.prototype.getCursor = function() {
          return this.lead.getPosition();
        }, i.prototype.setAnchor = function(o, r) {
          this.$isEmpty = false, this.anchor.setPosition(o, r);
        }, i.prototype.getAnchor = function() {
          return this.$isEmpty ? this.getSelectionLead() : this.anchor.getPosition();
        }, i.prototype.getSelectionLead = function() {
          return this.lead.getPosition();
        }, i.prototype.isBackwards = function() {
          var o = this.anchor, r = this.lead;
          return o.row > r.row || o.row == r.row && o.column > r.column;
        }, i.prototype.getRange = function() {
          var o = this.anchor, r = this.lead;
          return this.$isEmpty ? a.fromPoints(r, r) : this.isBackwards() ? a.fromPoints(r, o) : a.fromPoints(o, r);
        }, i.prototype.clearSelection = function() {
          this.$isEmpty || (this.$isEmpty = true, this._emit("changeSelection"));
        }, i.prototype.selectAll = function() {
          this.$setSelection(0, 0, Number.MAX_VALUE, Number.MAX_VALUE);
        }, i.prototype.setRange = function(o, r) {
          var n = r ? o.end : o.start, e = r ? o.start : o.end;
          this.$setSelection(n.row, n.column, e.row, e.column);
        }, i.prototype.$setSelection = function(o, r, n, e) {
          if (!this.$silent) {
            var t = this.$isEmpty, s = this.inMultiSelectMode;
            this.$silent = true, this.$cursorChanged = this.$anchorChanged = false, this.anchor.setPosition(o, r), this.cursor.setPosition(n, e), this.$isEmpty = !a.comparePoints(this.anchor, this.cursor), this.$silent = false, this.$cursorChanged && this._emit("changeCursor"), (this.$cursorChanged || this.$anchorChanged || t != this.$isEmpty || s) && this._emit("changeSelection");
          }
        }, i.prototype.$moveSelection = function(o) {
          var r = this.lead;
          this.$isEmpty && this.setSelectionAnchor(r.row, r.column), o.call(this);
        }, i.prototype.selectTo = function(o, r) {
          this.$moveSelection(function() {
            this.moveCursorTo(o, r);
          });
        }, i.prototype.selectToPosition = function(o) {
          this.$moveSelection(function() {
            this.moveCursorToPosition(o);
          });
        }, i.prototype.moveTo = function(o, r) {
          this.clearSelection(), this.moveCursorTo(o, r);
        }, i.prototype.moveToPosition = function(o) {
          this.clearSelection(), this.moveCursorToPosition(o);
        }, i.prototype.selectUp = function() {
          this.$moveSelection(this.moveCursorUp);
        }, i.prototype.selectDown = function() {
          this.$moveSelection(this.moveCursorDown);
        }, i.prototype.selectRight = function() {
          this.$moveSelection(this.moveCursorRight);
        }, i.prototype.selectLeft = function() {
          this.$moveSelection(this.moveCursorLeft);
        }, i.prototype.selectLineStart = function() {
          this.$moveSelection(this.moveCursorLineStart);
        }, i.prototype.selectLineEnd = function() {
          this.$moveSelection(this.moveCursorLineEnd);
        }, i.prototype.selectFileEnd = function() {
          this.$moveSelection(this.moveCursorFileEnd);
        }, i.prototype.selectFileStart = function() {
          this.$moveSelection(this.moveCursorFileStart);
        }, i.prototype.selectWordRight = function() {
          this.$moveSelection(this.moveCursorWordRight);
        }, i.prototype.selectWordLeft = function() {
          this.$moveSelection(this.moveCursorWordLeft);
        }, i.prototype.getWordRange = function(o, r) {
          if (typeof r > "u") {
            var n = o || this.lead;
            o = n.row, r = n.column;
          }
          return this.session.getWordRange(o, r);
        }, i.prototype.selectWord = function() {
          this.setSelectionRange(this.getWordRange());
        }, i.prototype.selectAWord = function() {
          var o = this.getCursor(), r = this.session.getAWordRange(o.row, o.column);
          this.setSelectionRange(r);
        }, i.prototype.getLineRange = function(o, r) {
          var n = typeof o == "number" ? o : this.lead.row, e, t = this.session.getFoldLine(n);
          return t ? (n = t.start.row, e = t.end.row) : e = n, r === true ? new a(n, 0, e, this.session.getLine(e).length) : new a(n, 0, e + 1, 0);
        }, i.prototype.selectLine = function() {
          this.setSelectionRange(this.getLineRange());
        }, i.prototype.moveCursorUp = function() {
          this.moveCursorBy(-1, 0);
        }, i.prototype.moveCursorDown = function() {
          this.moveCursorBy(1, 0);
        }, i.prototype.wouldMoveIntoSoftTab = function(o, r, n) {
          var e = o.column, t = o.column + r;
          return n < 0 && (e = o.column - r, t = o.column), this.session.isTabStop(o) && this.doc.getLine(o.row).slice(e, t).split(" ").length - 1 == r;
        }, i.prototype.moveCursorLeft = function() {
          var o = this.lead.getPosition(), r;
          if (r = this.session.getFoldAt(o.row, o.column, -1)) this.moveCursorTo(r.start.row, r.start.column);
          else if (o.column === 0) o.row > 0 && this.moveCursorTo(o.row - 1, this.doc.getLine(o.row - 1).length);
          else {
            var n = this.session.getTabSize();
            this.wouldMoveIntoSoftTab(o, n, -1) && !this.session.getNavigateWithinSoftTabs() ? this.moveCursorBy(0, -n) : this.moveCursorBy(0, -1);
          }
        }, i.prototype.moveCursorRight = function() {
          var o = this.lead.getPosition(), r;
          if (r = this.session.getFoldAt(o.row, o.column, 1)) this.moveCursorTo(r.end.row, r.end.column);
          else if (this.lead.column == this.doc.getLine(this.lead.row).length) this.lead.row < this.doc.getLength() - 1 && this.moveCursorTo(this.lead.row + 1, 0);
          else {
            var n = this.session.getTabSize(), o = this.lead;
            this.wouldMoveIntoSoftTab(o, n, 1) && !this.session.getNavigateWithinSoftTabs() ? this.moveCursorBy(0, n) : this.moveCursorBy(0, 1);
          }
        }, i.prototype.moveCursorLineStart = function() {
          var o = this.lead.row, r = this.lead.column, n = this.session.documentToScreenRow(o, r), e = this.session.screenToDocumentPosition(n, 0), t = this.session.getDisplayLine(o, null, e.row, e.column), s = t.match(/^\s*/);
          s[0].length != r && !this.session.$useEmacsStyleLineStart && (e.column += s[0].length), this.moveCursorToPosition(e);
        }, i.prototype.moveCursorLineEnd = function() {
          var o = this.lead, r = this.session.getDocumentLastRowColumnPosition(o.row, o.column);
          if (this.lead.column == r.column) {
            var n = this.session.getLine(r.row);
            if (r.column == n.length) {
              var e = n.search(/\s+$/);
              e > 0 && (r.column = e);
            }
          }
          this.moveCursorTo(r.row, r.column);
        }, i.prototype.moveCursorFileEnd = function() {
          var o = this.doc.getLength() - 1, r = this.doc.getLine(o).length;
          this.moveCursorTo(o, r);
        }, i.prototype.moveCursorFileStart = function() {
          this.moveCursorTo(0, 0);
        }, i.prototype.moveCursorLongWordRight = function() {
          var o = this.lead.row, r = this.lead.column, n = this.doc.getLine(o), e = n.substring(r);
          this.session.nonTokenRe.lastIndex = 0, this.session.tokenRe.lastIndex = 0;
          var t = this.session.getFoldAt(o, r, 1);
          if (t) {
            this.moveCursorTo(t.end.row, t.end.column);
            return;
          }
          if (this.session.nonTokenRe.exec(e) && (r += this.session.nonTokenRe.lastIndex, this.session.nonTokenRe.lastIndex = 0, e = n.substring(r)), r >= n.length) {
            this.moveCursorTo(o, n.length), this.moveCursorRight(), o < this.doc.getLength() - 1 && this.moveCursorWordRight();
            return;
          }
          this.session.tokenRe.exec(e) && (r += this.session.tokenRe.lastIndex, this.session.tokenRe.lastIndex = 0), this.moveCursorTo(o, r);
        }, i.prototype.moveCursorLongWordLeft = function() {
          var o = this.lead.row, r = this.lead.column, n;
          if (n = this.session.getFoldAt(o, r, -1)) {
            this.moveCursorTo(n.start.row, n.start.column);
            return;
          }
          var e = this.session.getFoldStringAt(o, r, -1);
          e == null && (e = this.doc.getLine(o).substring(0, r));
          var t = M.stringReverse(e);
          if (this.session.nonTokenRe.lastIndex = 0, this.session.tokenRe.lastIndex = 0, this.session.nonTokenRe.exec(t) && (r -= this.session.nonTokenRe.lastIndex, t = t.slice(this.session.nonTokenRe.lastIndex), this.session.nonTokenRe.lastIndex = 0), r <= 0) {
            this.moveCursorTo(o, 0), this.moveCursorLeft(), o > 0 && this.moveCursorWordLeft();
            return;
          }
          this.session.tokenRe.exec(t) && (r -= this.session.tokenRe.lastIndex, this.session.tokenRe.lastIndex = 0), this.moveCursorTo(o, r);
        }, i.prototype.$shortWordEndIndex = function(o) {
          var r = 0, n, e = /\s/, t = this.session.tokenRe;
          if (t.lastIndex = 0, this.session.tokenRe.exec(o)) r = this.session.tokenRe.lastIndex;
          else {
            for (; (n = o[r]) && e.test(n); ) r++;
            if (r < 1) {
              for (t.lastIndex = 0; (n = o[r]) && !t.test(n); ) if (t.lastIndex = 0, r++, e.test(n)) if (r > 2) {
                r--;
                break;
              } else {
                for (; (n = o[r]) && e.test(n); ) r++;
                if (r > 2) break;
              }
            }
          }
          return t.lastIndex = 0, r;
        }, i.prototype.moveCursorShortWordRight = function() {
          var o = this.lead.row, r = this.lead.column, n = this.doc.getLine(o), e = n.substring(r), t = this.session.getFoldAt(o, r, 1);
          if (t) return this.moveCursorTo(t.end.row, t.end.column);
          if (r == n.length) {
            var s = this.doc.getLength();
            do
              o++, e = this.doc.getLine(o);
            while (o < s && /^\s*$/.test(e));
            /^\s+/.test(e) || (e = ""), r = 0;
          }
          var h = this.$shortWordEndIndex(e);
          this.moveCursorTo(o, r + h);
        }, i.prototype.moveCursorShortWordLeft = function() {
          var o = this.lead.row, r = this.lead.column, n;
          if (n = this.session.getFoldAt(o, r, -1)) return this.moveCursorTo(n.start.row, n.start.column);
          var e = this.session.getLine(o).substring(0, r);
          if (r === 0) {
            do
              o--, e = this.doc.getLine(o);
            while (o > 0 && /^\s*$/.test(e));
            r = e.length, /\s+$/.test(e) || (e = "");
          }
          var t = M.stringReverse(e), s = this.$shortWordEndIndex(t);
          return this.moveCursorTo(o, r - s);
        }, i.prototype.moveCursorWordRight = function() {
          this.session.$selectLongWords ? this.moveCursorLongWordRight() : this.moveCursorShortWordRight();
        }, i.prototype.moveCursorWordLeft = function() {
          this.session.$selectLongWords ? this.moveCursorLongWordLeft() : this.moveCursorShortWordLeft();
        }, i.prototype.moveCursorBy = function(o, r) {
          var n = this.session.documentToScreenPosition(this.lead.row, this.lead.column), e;
          if (r === 0 && (o !== 0 && (this.session.$bidiHandler.isBidiRow(n.row, this.lead.row) ? (e = this.session.$bidiHandler.getPosLeft(n.column), n.column = Math.round(e / this.session.$bidiHandler.charWidths[0])) : e = n.column * this.session.$bidiHandler.charWidths[0]), this.$desiredColumn ? n.column = this.$desiredColumn : this.$desiredColumn = n.column), o != 0 && this.session.lineWidgets && this.session.lineWidgets[this.lead.row]) {
            var t = this.session.lineWidgets[this.lead.row];
            o < 0 ? o -= t.rowsAbove || 0 : o > 0 && (o += t.rowCount - (t.rowsAbove || 0));
          }
          var s = this.session.screenToDocumentPosition(n.row + o, n.column, e);
          o !== 0 && r === 0 && s.row === this.lead.row && (s.column, this.lead.column), this.moveCursorTo(s.row, s.column + r, r === 0);
        }, i.prototype.moveCursorToPosition = function(o) {
          this.moveCursorTo(o.row, o.column);
        }, i.prototype.moveCursorTo = function(o, r, n) {
          var e = this.session.getFoldAt(o, r, 1);
          e && (o = e.start.row, r = e.start.column), this.$keepDesiredColumnOnChange = true;
          var t = this.session.getLine(o);
          /[\uDC00-\uDFFF]/.test(t.charAt(r)) && t.charAt(r - 1) && (this.lead.row == o && this.lead.column == r + 1 ? r = r - 1 : r = r + 1), this.lead.setPosition(o, r), this.$keepDesiredColumnOnChange = false, n || (this.$desiredColumn = null);
        }, i.prototype.moveCursorToScreen = function(o, r, n) {
          var e = this.session.screenToDocumentPosition(o, r);
          this.moveCursorTo(e.row, e.column, n);
        }, i.prototype.detach = function() {
          this.lead.detach(), this.anchor.detach();
        }, i.prototype.fromOrientedRange = function(o) {
          this.setSelectionRange(o, o.cursor == o.start), this.$desiredColumn = o.desiredColumn || this.$desiredColumn;
        }, i.prototype.toOrientedRange = function(o) {
          var r = this.getRange();
          return o ? (o.start.column = r.start.column, o.start.row = r.start.row, o.end.column = r.end.column, o.end.row = r.end.row) : o = r, o.cursor = this.isBackwards() ? o.start : o.end, o.desiredColumn = this.$desiredColumn, o;
        }, i.prototype.getRangeOfMovements = function(o) {
          var r = this.getCursor();
          try {
            o(this);
            var n = this.getCursor();
            return a.fromPoints(r, n);
          } catch {
            return a.fromPoints(r, r);
          } finally {
            this.moveCursorToPosition(r);
          }
        }, i.prototype.toJSON = function() {
          if (this.rangeCount) var o = this.ranges.map(function(r) {
            var n = r.clone();
            return n.isBackwards = r.cursor == r.start, n;
          });
          else {
            var o = this.getRange();
            o.isBackwards = this.isBackwards();
          }
          return o;
        }, i.prototype.fromJSON = function(o) {
          if (o.start == null) if (this.rangeList && o.length > 1) {
            this.toSingleRange(o[0]);
            for (var r = o.length; r--; ) {
              var n = a.fromPoints(o[r].start, o[r].end);
              o[r].isBackwards && (n.cursor = n.start), this.addRange(n, true);
            }
            return;
          } else o = o[0];
          this.rangeList && this.toSingleRange(o), this.setSelectionRange(o, o.isBackwards);
        }, i.prototype.isEqual = function(o) {
          if ((o.length || this.rangeCount) && o.length != this.rangeCount) return false;
          if (!o.length || !this.ranges) return this.getRange().isEqual(o);
          for (var r = this.ranges.length; r--; ) if (!this.ranges[r].isEqual(o[r])) return false;
          return true;
        }, i;
      })();
      l.prototype.setSelectionAnchor = l.prototype.setAnchor, l.prototype.getSelectionAnchor = l.prototype.getAnchor, l.prototype.setSelectionRange = l.prototype.setRange, L.implement(l.prototype, $), _.Selection = l;
    }), ace.define("ace/tokenizer", [
      "require",
      "exports",
      "module",
      "ace/lib/report_error"
    ], function(A, _, N) {
      var L = A("./lib/report_error").reportError, M = 2e3, $ = (function() {
        function a(l) {
          this.splitRegex, this.states = l, this.regExps = {}, this.matchMappings = {};
          for (var i in this.states) {
            for (var o = this.states[i], r = [], n = 0, e = this.matchMappings[i] = {
              defaultToken: "text"
            }, t = "g", s = [], h = 0; h < o.length; h++) {
              var u = o[h];
              if (u.defaultToken && (e.defaultToken = u.defaultToken), u.caseInsensitive && t.indexOf("i") === -1 && (t += "i"), u.unicode && t.indexOf("u") === -1 && (t += "u"), u.regex != null) {
                u.regex instanceof RegExp && (u.regex = u.regex.toString().slice(1, -1));
                var S = u.regex, b = new RegExp("(?:(" + S + ")|(.))").exec("a").length - 2;
                Array.isArray(u.token) ? u.token.length == 1 || b == 1 ? u.token = u.token[0] : b - 1 != u.token.length ? (this.reportError("number of classes and regexp groups doesn't match", {
                  rule: u,
                  groupCount: b - 1
                }), u.token = u.token[0]) : (u.tokenArray = u.token, u.token = null, u.onMatch = this.$arrayTokens) : typeof u.token == "function" && !u.onMatch && (b > 1 ? u.onMatch = this.$applyToken : u.onMatch = u.token), b > 1 && (/\\\d/.test(u.regex) ? S = u.regex.replace(/\\([0-9]+)/g, function(f, c) {
                  return "\\" + (parseInt(c, 10) + n + 1);
                }) : (b = 1, S = this.removeCapturingGroups(u.regex)), !u.splitRegex && typeof u.token != "string" && s.push(u)), e[n] = h, n += b, r.push(S), u.onMatch || (u.onMatch = null);
              }
            }
            r.length || (e[0] = 0, r.push("$")), s.forEach(function(f) {
              f.splitRegex = this.createSplitterRegexp(f.regex, t);
            }, this), this.regExps[i] = new RegExp("(" + r.join(")|(") + ")|($)", t);
          }
        }
        return a.prototype.$setMaxTokenCount = function(l) {
          M = l | 0;
        }, a.prototype.$applyToken = function(l) {
          var i = this.splitRegex.exec(l).slice(1), o = this.token.apply(this, i);
          if (typeof o == "string") return [
            {
              type: o,
              value: l
            }
          ];
          for (var r = [], n = 0, e = o.length; n < e; n++) i[n] && (r[r.length] = {
            type: o[n],
            value: i[n]
          });
          return r;
        }, a.prototype.$arrayTokens = function(l) {
          if (!l) return [];
          var i = this.splitRegex.exec(l);
          if (!i) return "text";
          for (var o = [], r = this.tokenArray, n = 0, e = r.length; n < e; n++) i[n + 1] && (o[o.length] = {
            type: r[n],
            value: i[n + 1]
          });
          return o;
        }, a.prototype.removeCapturingGroups = function(l) {
          var i = l.replace(/\\.|\[(?:\\.|[^\\\]])*|\(\?[:=!<]|(\()/g, function(o, r) {
            return r ? "(?:" : o;
          });
          return i;
        }, a.prototype.createSplitterRegexp = function(l, i) {
          if (l.indexOf("(?=") != -1) {
            var o = 0, r = false, n = {};
            l.replace(/(\\.)|(\((?:\?[=!])?)|(\))|([\[\]])/g, function(e, t, s, h, u, S) {
              return r ? r = u != "]" : u ? r = true : h ? (o == n.stack && (n.end = S + 1, n.stack = -1), o--) : s && (o++, s.length != 1 && (n.stack = o, n.start = S)), e;
            }), n.end != null && /^\)*$/.test(l.substr(n.end)) && (l = l.substring(0, n.start) + l.substr(n.end));
          }
          return l.charAt(0) != "^" && (l = "^" + l), l.charAt(l.length - 1) != "$" && (l += "$"), new RegExp(l, (i || "").replace("g", ""));
        }, a.prototype.getLineTokens = function(l, i) {
          if (i && typeof i != "string") {
            var o = i.slice(0);
            i = o[0], i === "#tmp" && (o.shift(), i = o.shift());
          } else var o = [];
          var r = i || "start", n = this.states[r];
          n || (r = "start", n = this.states[r]);
          var e = this.matchMappings[r], t = this.regExps[r];
          t.lastIndex = 0;
          for (var s, h = [], u = 0, S = 0, b = {
            type: null,
            value: ""
          }; s = t.exec(l); ) {
            var f = e.defaultToken, c = null, w = s[0], C = t.lastIndex;
            if (C - w.length > u) {
              var p = l.substring(u, C - w.length);
              b.type == f ? b.value += p : (b.type && h.push(b), b = {
                type: f,
                value: p
              });
            }
            for (var v = 0; v < s.length - 2; v++) if (s[v + 1] !== void 0) {
              c = n[e[v]], c.onMatch ? f = c.onMatch(w, r, o, l) : f = c.token, c.next && (typeof c.next == "string" ? r = c.next : r = c.next(r, o), n = this.states[r], n || (this.reportError("state doesn't exist", r), r = "start", n = this.states[r]), e = this.matchMappings[r], u = C, t = this.regExps[r], t.lastIndex = C), c.consumeLineEnd && (u = C);
              break;
            }
            if (w) {
              if (typeof f == "string") (!c || c.merge !== false) && b.type === f ? b.value += w : (b.type && h.push(b), b = {
                type: f,
                value: w
              });
              else if (f) {
                b.type && h.push(b), b = {
                  type: null,
                  value: ""
                };
                for (var v = 0; v < f.length; v++) h.push(f[v]);
              }
            }
            if (u == l.length) break;
            if (u = C, S++ > M) {
              for (S > 2 * l.length && this.reportError("infinite loop with in ace tokenizer", {
                startState: i,
                line: l
              }); u < l.length; ) b.type && h.push(b), b = {
                value: l.substring(u, u += 500),
                type: "overflow"
              };
              r = "start", o = [];
              break;
            }
          }
          return b.type && h.push(b), o.length > 1 && o[0] !== r && o.unshift("#tmp", r), {
            tokens: h,
            state: o.length ? o : r
          };
        }, a;
      })();
      $.prototype.reportError = L, _.Tokenizer = $;
    }), ace.define("ace/mode/text_highlight_rules", [
      "require",
      "exports",
      "module",
      "ace/lib/deep_copy"
    ], function(A, _, N) {
      var L = A("../lib/deep_copy").deepCopy, M;
      M = function() {
        this.$rules = {
          start: [
            {
              token: "empty_line",
              regex: "^$"
            },
            {
              defaultToken: "text"
            }
          ]
        };
      }, (function() {
        this.addRules = function(l, i) {
          if (!i) {
            for (var o in l) this.$rules[o] = l[o];
            return;
          }
          for (var o in l) {
            for (var r = l[o], n = 0; n < r.length; n++) {
              var e = r[n];
              (e.next || e.onMatch) && (typeof e.next == "string" && e.next.indexOf(i) !== 0 && (e.next = i + e.next), e.nextState && e.nextState.indexOf(i) !== 0 && (e.nextState = i + e.nextState));
            }
            this.$rules[i + o] = r;
          }
        }, this.getRules = function() {
          return this.$rules;
        }, this.embedRules = function(l, i, o, r, n) {
          var e = typeof l == "function" ? new l().getRules() : l;
          if (r) for (var t = 0; t < r.length; t++) r[t] = i + r[t];
          else {
            r = [];
            for (var s in e) r.push(i + s);
          }
          if (this.addRules(e, i), o) for (var h = Array.prototype[n ? "push" : "unshift"], t = 0; t < r.length; t++) h.apply(this.$rules[r[t]], L(o));
          this.$embeds || (this.$embeds = []), this.$embeds.push(i);
        }, this.getEmbeds = function() {
          return this.$embeds;
        };
        var $ = function(l, i) {
          return (l != "start" || i.length) && i.unshift(this.nextState, l), this.nextState;
        }, a = function(l, i) {
          return i.shift(), i.shift() || "start";
        };
        this.normalizeRules = function() {
          var l = 0, i = this.$rules;
          function o(r) {
            var n = i[r];
            n.processed = true;
            for (var e = 0; e < n.length; e++) {
              var t = n[e], s = null;
              Array.isArray(t) && (s = t, t = {}), !t.regex && t.start && (t.regex = t.start, t.next || (t.next = []), t.next.push({
                defaultToken: t.token
              }, {
                token: t.token + ".end",
                regex: t.end || t.start,
                next: "pop"
              }), t.token = t.token + ".start", t.push = true);
              var h = t.next || t.push;
              if (h && Array.isArray(h)) {
                var u = t.stateName;
                u || (u = t.token, typeof u != "string" && (u = u[0] || ""), i[u] && (u += l++)), i[u] = h, t.next = u, o(u);
              } else h == "pop" && (t.next = a);
              if (t.push && (t.nextState = t.next || t.push, t.next = $, delete t.push), t.rules) for (var S in t.rules) i[S] ? i[S].push && i[S].push.apply(i[S], t.rules[S]) : i[S] = t.rules[S];
              var b = typeof t == "string" ? t : t.include;
              if (b && (b === "$self" && (b = "start"), Array.isArray(b) ? s = b.map(function(c) {
                return i[c];
              }) : s = i[b]), s) {
                var f = [
                  e,
                  1
                ].concat(s);
                t.noEscape && (f = f.filter(function(c) {
                  return !c.next;
                })), n.splice.apply(n, f), e--;
              }
              t.keywordMap && (t.token = this.createKeywordMapper(t.keywordMap, t.defaultToken || "text", t.caseInsensitive), delete t.defaultToken);
            }
          }
          Object.keys(i).forEach(o, this);
        }, this.createKeywordMapper = function(l, i, o, r) {
          var n = /* @__PURE__ */ Object.create(null);
          return this.$keywordList = [], Object.keys(l).forEach(function(e) {
            for (var t = l[e], s = t.split(r || "|"), h = s.length; h--; ) {
              var u = s[h];
              this.$keywordList.push(u), o && (u = u.toLowerCase()), n[u] = e;
            }
          }, this), l = null, o ? function(e) {
            return n[e.toLowerCase()] || i;
          } : function(e) {
            return n[e] || i;
          };
        }, this.getKeywords = function() {
          return this.$keywords;
        };
      }).call(M.prototype), _.TextHighlightRules = M;
    }), ace.define("ace/mode/behaviour", [
      "require",
      "exports",
      "module"
    ], function(A, _, N) {
      var L;
      L = function() {
        this.$behaviours = {};
      }, (function() {
        this.add = function(M, $, a) {
          switch (void 0) {
            case this.$behaviours:
              this.$behaviours = {};
            case this.$behaviours[M]:
              this.$behaviours[M] = {};
          }
          this.$behaviours[M][$] = a;
        }, this.addBehaviours = function(M) {
          for (var $ in M) for (var a in M[$]) this.add($, a, M[$][a]);
        }, this.remove = function(M) {
          this.$behaviours && this.$behaviours[M] && delete this.$behaviours[M];
        }, this.inherit = function(M, $) {
          if (typeof M == "function") var a = new M().getBehaviours($);
          else var a = M.getBehaviours($);
          this.addBehaviours(a);
        }, this.getBehaviours = function(M) {
          if (M) {
            for (var $ = {}, a = 0; a < M.length; a++) this.$behaviours[M[a]] && ($[M[a]] = this.$behaviours[M[a]]);
            return $;
          } else return this.$behaviours;
        };
      }).call(L.prototype), _.Behaviour = L;
    }), ace.define("ace/token_iterator", [
      "require",
      "exports",
      "module",
      "ace/range"
    ], function(A, _, N) {
      var L = A("./range").Range, M = (function() {
        function $(a, l, i) {
          this.$session = a, this.$row = l, this.$rowTokens = a.getTokens(l);
          var o = a.getTokenAt(l, i);
          this.$tokenIndex = o ? o.index : -1;
        }
        return $.prototype.stepBackward = function() {
          for (this.$tokenIndex -= 1; this.$tokenIndex < 0; ) {
            if (this.$row -= 1, this.$row < 0) return this.$row = 0, null;
            this.$rowTokens = this.$session.getTokens(this.$row), this.$tokenIndex = this.$rowTokens.length - 1;
          }
          return this.$rowTokens[this.$tokenIndex];
        }, $.prototype.stepForward = function() {
          this.$tokenIndex += 1;
          for (var a; this.$tokenIndex >= this.$rowTokens.length; ) {
            if (this.$row += 1, a || (a = this.$session.getLength()), this.$row >= a) return this.$row = a - 1, null;
            this.$rowTokens = this.$session.getTokens(this.$row), this.$tokenIndex = 0;
          }
          return this.$rowTokens[this.$tokenIndex];
        }, $.prototype.getCurrentToken = function() {
          return this.$rowTokens[this.$tokenIndex];
        }, $.prototype.getCurrentTokenRow = function() {
          return this.$row;
        }, $.prototype.getCurrentTokenColumn = function() {
          var a = this.$rowTokens, l = this.$tokenIndex, i = a[l].start;
          if (i !== void 0) return i;
          for (i = 0; l > 0; ) l -= 1, i += a[l].value.length;
          return i;
        }, $.prototype.getCurrentTokenPosition = function() {
          return {
            row: this.$row,
            column: this.getCurrentTokenColumn()
          };
        }, $.prototype.getCurrentTokenRange = function() {
          var a = this.$rowTokens[this.$tokenIndex], l = this.getCurrentTokenColumn();
          return new L(this.$row, l, this.$row, l + a.value.length);
        }, $;
      })();
      _.TokenIterator = M;
    }), ace.define("ace/mode/behaviour/cstyle", [
      "require",
      "exports",
      "module",
      "ace/lib/oop",
      "ace/mode/behaviour",
      "ace/token_iterator",
      "ace/lib/lang"
    ], function(A, _, N) {
      var L = A("../../lib/oop"), M = A("../behaviour").Behaviour, $ = A("../../token_iterator").TokenIterator, a = A("../../lib/lang"), l = [
        "text",
        "paren.rparen",
        "rparen",
        "paren",
        "punctuation.operator"
      ], i = [
        "text",
        "paren.rparen",
        "rparen",
        "paren",
        "punctuation.operator",
        "comment"
      ], o, r = {}, n = {
        '"': '"',
        "'": "'"
      }, e = function(h) {
        var u = -1;
        if (h.multiSelect && (u = h.selection.index, r.rangeCount != h.multiSelect.rangeCount && (r = {
          rangeCount: h.multiSelect.rangeCount
        })), r[u]) return o = r[u];
        o = r[u] = {
          autoInsertedBrackets: 0,
          autoInsertedRow: -1,
          autoInsertedLineEnd: "",
          maybeInsertedBrackets: 0,
          maybeInsertedRow: -1,
          maybeInsertedLineStart: "",
          maybeInsertedLineEnd: ""
        };
      }, t = function(h, u, S, b) {
        var f = h.end.row - h.start.row;
        return {
          text: S + u + b,
          selection: [
            0,
            h.start.column + 1,
            f,
            h.end.column + (f ? 0 : 1)
          ]
        };
      }, s;
      s = function(h) {
        h = h || {}, this.add("braces", "insertion", function(u, S, b, f, c) {
          var w = b.getCursorPosition(), C = f.doc.getLine(w.row);
          if (c == "{") {
            e(b);
            var p = b.getSelectionRange(), v = f.doc.getTextRange(p), k = f.getTokenAt(w.row, w.column);
            if (v !== "" && v !== "{" && b.getWrapBehavioursEnabled()) return t(p, v, "{", "}");
            if (k && /(?:string)\.quasi|\.xml/.test(k.type)) {
              var m = [
                /tag\-(?:open|name)/,
                /attribute\-name/
              ];
              return m.some(function(R) {
                return R.test(k.type);
              }) || /(string)\.quasi/.test(k.type) && k.value[w.column - k.start - 1] !== "$" ? void 0 : (s.recordAutoInsert(b, f, "}"), {
                text: "{}",
                selection: [
                  1,
                  1
                ]
              });
            } else if (s.isSaneInsertion(b, f)) return /[\]\}\)]/.test(C[w.column]) || b.inMultiSelectMode || h.braces ? (s.recordAutoInsert(b, f, "}"), {
              text: "{}",
              selection: [
                1,
                1
              ]
            }) : (s.recordMaybeInsert(b, f, "{"), {
              text: "{",
              selection: [
                1,
                1
              ]
            });
          } else if (c == "}") {
            e(b);
            var y = C.substring(w.column, w.column + 1);
            if (y == "}") {
              var g = f.$findOpeningBracket("}", {
                column: w.column + 1,
                row: w.row
              });
              if (g !== null && s.isAutoInsertedClosing(w, C, c)) return s.popAutoInsertedClosing(), {
                text: "",
                selection: [
                  1,
                  1
                ]
              };
            }
          } else if (c == `
` || c == `\r
`) {
            e(b);
            var d = "";
            s.isMaybeInsertedClosing(w, C) && (d = a.stringRepeat("}", o.maybeInsertedBrackets), s.clearMaybeInsertedClosing());
            var y = C.substring(w.column, w.column + 1);
            if (y === "}") {
              var x = f.findMatchingBracket({
                row: w.row,
                column: w.column + 1
              }, "}");
              if (!x) return null;
              var T = this.$getIndent(f.getLine(x.row));
            } else if (d) var T = this.$getIndent(C);
            else {
              s.clearMaybeInsertedClosing();
              return;
            }
            var E = T + f.getTabString();
            return {
              text: `
` + E + `
` + T + d,
              selection: [
                1,
                E.length,
                1,
                E.length
              ]
            };
          } else s.clearMaybeInsertedClosing();
        }), this.add("braces", "deletion", function(u, S, b, f, c) {
          var w = f.doc.getTextRange(c);
          if (!c.isMultiLine() && w == "{") {
            e(b);
            var C = f.doc.getLine(c.start.row), p = C.substring(c.end.column, c.end.column + 1);
            if (p == "}") return c.end.column++, c;
            o.maybeInsertedBrackets--;
          }
        }), this.add("parens", "insertion", function(u, S, b, f, c) {
          if (c == "(") {
            e(b);
            var w = b.getSelectionRange(), C = f.doc.getTextRange(w);
            if (C !== "" && b.getWrapBehavioursEnabled()) return t(w, C, "(", ")");
            if (s.isSaneInsertion(b, f)) return s.recordAutoInsert(b, f, ")"), {
              text: "()",
              selection: [
                1,
                1
              ]
            };
          } else if (c == ")") {
            e(b);
            var p = b.getCursorPosition(), v = f.doc.getLine(p.row), k = v.substring(p.column, p.column + 1);
            if (k == ")") {
              var m = f.$findOpeningBracket(")", {
                column: p.column + 1,
                row: p.row
              });
              if (m !== null && s.isAutoInsertedClosing(p, v, c)) return s.popAutoInsertedClosing(), {
                text: "",
                selection: [
                  1,
                  1
                ]
              };
            }
          }
        }), this.add("parens", "deletion", function(u, S, b, f, c) {
          var w = f.doc.getTextRange(c);
          if (!c.isMultiLine() && w == "(") {
            e(b);
            var C = f.doc.getLine(c.start.row), p = C.substring(c.start.column + 1, c.start.column + 2);
            if (p == ")") return c.end.column++, c;
          }
        }), this.add("brackets", "insertion", function(u, S, b, f, c) {
          if (c == "[") {
            e(b);
            var w = b.getSelectionRange(), C = f.doc.getTextRange(w);
            if (C !== "" && b.getWrapBehavioursEnabled()) return t(w, C, "[", "]");
            if (s.isSaneInsertion(b, f)) return s.recordAutoInsert(b, f, "]"), {
              text: "[]",
              selection: [
                1,
                1
              ]
            };
          } else if (c == "]") {
            e(b);
            var p = b.getCursorPosition(), v = f.doc.getLine(p.row), k = v.substring(p.column, p.column + 1);
            if (k == "]") {
              var m = f.$findOpeningBracket("]", {
                column: p.column + 1,
                row: p.row
              });
              if (m !== null && s.isAutoInsertedClosing(p, v, c)) return s.popAutoInsertedClosing(), {
                text: "",
                selection: [
                  1,
                  1
                ]
              };
            }
          }
        }), this.add("brackets", "deletion", function(u, S, b, f, c) {
          var w = f.doc.getTextRange(c);
          if (!c.isMultiLine() && w == "[") {
            e(b);
            var C = f.doc.getLine(c.start.row), p = C.substring(c.start.column + 1, c.start.column + 2);
            if (p == "]") return c.end.column++, c;
          }
        }), this.add("string_dquotes", "insertion", function(u, S, b, f, c) {
          var w = f.$mode.$quotes || n;
          if (c.length == 1 && w[c]) {
            if (this.lineCommentStart && this.lineCommentStart.indexOf(c) != -1) return;
            e(b);
            var C = c, p = b.getSelectionRange(), v = f.doc.getTextRange(p);
            if (v !== "" && (v.length != 1 || !w[v]) && b.getWrapBehavioursEnabled()) return t(p, v, C, C);
            if (!v) {
              var k = b.getCursorPosition(), m = f.doc.getLine(k.row), y = m.substring(k.column - 1, k.column), g = m.substring(k.column, k.column + 1), d = f.getTokenAt(k.row, k.column), x = f.getTokenAt(k.row, k.column + 1);
              if (y == "\\" && d && /escape/.test(d.type)) return null;
              var T = d && /string|escape/.test(d.type), E = !x || /string|escape/.test(x.type), R;
              if (g == C) R = T !== E, R && /string\.end/.test(x.type) && (R = false);
              else {
                if (T && !E || T && E) return null;
                var I = f.$mode.tokenRe;
                I.lastIndex = 0;
                var O = I.test(y);
                I.lastIndex = 0;
                var z = I.test(g), F = f.$mode.$pairQuotesAfter, B = F && F[C] && F[C].test(y);
                if (!B && O || z || g && !/[\s;,.})\]\\]/.test(g)) return null;
                var W = m[k.column - 2];
                if (y == C && (W == C || I.test(W))) return null;
                R = true;
              }
              return {
                text: R ? C + C : "",
                selection: [
                  1,
                  1
                ]
              };
            }
          }
        }), this.add("string_dquotes", "deletion", function(u, S, b, f, c) {
          var w = f.$mode.$quotes || n, C = f.doc.getTextRange(c);
          if (!c.isMultiLine() && w.hasOwnProperty(C)) {
            e(b);
            var p = f.doc.getLine(c.start.row), v = p.substring(c.start.column + 1, c.start.column + 2);
            if (v == C) return c.end.column++, c;
          }
        }), h.closeDocComment !== false && this.add("doc comment end", "insertion", function(u, S, b, f, c) {
          if (u === "doc-start" && (c === `
` || c === `\r
`) && b.selection.isEmpty()) {
            var w = b.getCursorPosition();
            if (w.column === 0) return;
            for (var C = f.doc.getLine(w.row), p = f.doc.getLine(w.row + 1), v = f.getTokens(w.row), k = 0, m = 0; m < v.length; m++) {
              k += v[m].value.length;
              var y = v[m];
              if (k >= w.column) {
                if (k === w.column) {
                  if (!/\.doc/.test(y.type)) return;
                  if (/\*\//.test(y.value)) {
                    var g = v[m + 1];
                    if (!g || !/\.doc/.test(g.type)) return;
                  }
                }
                var d = w.column - (k - y.value.length), x = y.value.indexOf("*/"), T = y.value.indexOf("/**", x > -1 ? x + 2 : 0);
                if (T !== -1 && d > T && d < T + 3 || x !== -1 && T !== -1 && d >= x && d <= T || !/\.doc/.test(y.type)) return;
                break;
              }
            }
            var E = this.$getIndent(C);
            if (/\s*\*/.test(p)) return /^\s*\*/.test(C) ? {
              text: c + E + "* ",
              selection: [
                1,
                2 + E.length,
                1,
                2 + E.length
              ]
            } : {
              text: c + E + " * ",
              selection: [
                1,
                3 + E.length,
                1,
                3 + E.length
              ]
            };
            if (/\/\*\*/.test(C.substring(0, w.column))) return {
              text: c + E + " * " + c + " " + E + "*/",
              selection: [
                1,
                4 + E.length,
                1,
                4 + E.length
              ]
            };
          }
        });
      }, s.isSaneInsertion = function(h, u) {
        var S = h.getCursorPosition(), b = new $(u, S.row, S.column);
        if (!this.$matchTokenType(b.getCurrentToken() || "text", l)) {
          if (/[)}\]]/.test(h.session.getLine(S.row)[S.column])) return true;
          var f = new $(u, S.row, S.column + 1);
          if (!this.$matchTokenType(f.getCurrentToken() || "text", l)) return false;
        }
        return b.stepForward(), b.getCurrentTokenRow() !== S.row || this.$matchTokenType(b.getCurrentToken() || "text", i);
      }, s.$matchTokenType = function(h, u) {
        return u.indexOf(h.type || h) > -1;
      }, s.recordAutoInsert = function(h, u, S) {
        var b = h.getCursorPosition(), f = u.doc.getLine(b.row);
        this.isAutoInsertedClosing(b, f, o.autoInsertedLineEnd[0]) || (o.autoInsertedBrackets = 0), o.autoInsertedRow = b.row, o.autoInsertedLineEnd = S + f.substr(b.column), o.autoInsertedBrackets++;
      }, s.recordMaybeInsert = function(h, u, S) {
        var b = h.getCursorPosition(), f = u.doc.getLine(b.row);
        this.isMaybeInsertedClosing(b, f) || (o.maybeInsertedBrackets = 0), o.maybeInsertedRow = b.row, o.maybeInsertedLineStart = f.substr(0, b.column) + S, o.maybeInsertedLineEnd = f.substr(b.column), o.maybeInsertedBrackets++;
      }, s.isAutoInsertedClosing = function(h, u, S) {
        return o.autoInsertedBrackets > 0 && h.row === o.autoInsertedRow && S === o.autoInsertedLineEnd[0] && u.substr(h.column) === o.autoInsertedLineEnd;
      }, s.isMaybeInsertedClosing = function(h, u) {
        return o.maybeInsertedBrackets > 0 && h.row === o.maybeInsertedRow && u.substr(h.column) === o.maybeInsertedLineEnd && u.substr(0, h.column) == o.maybeInsertedLineStart;
      }, s.popAutoInsertedClosing = function() {
        o.autoInsertedLineEnd = o.autoInsertedLineEnd.substr(1), o.autoInsertedBrackets--;
      }, s.clearMaybeInsertedClosing = function() {
        o && (o.maybeInsertedBrackets = 0, o.maybeInsertedRow = -1);
      }, L.inherits(s, M), _.CstyleBehaviour = s;
    }), ace.define("ace/unicode", [
      "require",
      "exports",
      "module"
    ], function(A, _, N) {
      for (var L = [
        48,
        9,
        8,
        25,
        5,
        0,
        2,
        25,
        48,
        0,
        11,
        0,
        5,
        0,
        6,
        22,
        2,
        30,
        2,
        457,
        5,
        11,
        15,
        4,
        8,
        0,
        2,
        0,
        18,
        116,
        2,
        1,
        3,
        3,
        9,
        0,
        2,
        2,
        2,
        0,
        2,
        19,
        2,
        82,
        2,
        138,
        2,
        4,
        3,
        155,
        12,
        37,
        3,
        0,
        8,
        38,
        10,
        44,
        2,
        0,
        2,
        1,
        2,
        1,
        2,
        0,
        9,
        26,
        6,
        2,
        30,
        10,
        7,
        61,
        2,
        9,
        5,
        101,
        2,
        7,
        3,
        9,
        2,
        18,
        3,
        0,
        17,
        58,
        3,
        100,
        15,
        53,
        5,
        0,
        6,
        45,
        211,
        57,
        3,
        18,
        2,
        5,
        3,
        11,
        3,
        9,
        2,
        1,
        7,
        6,
        2,
        2,
        2,
        7,
        3,
        1,
        3,
        21,
        2,
        6,
        2,
        0,
        4,
        3,
        3,
        8,
        3,
        1,
        3,
        3,
        9,
        0,
        5,
        1,
        2,
        4,
        3,
        11,
        16,
        2,
        2,
        5,
        5,
        1,
        3,
        21,
        2,
        6,
        2,
        1,
        2,
        1,
        2,
        1,
        3,
        0,
        2,
        4,
        5,
        1,
        3,
        2,
        4,
        0,
        8,
        3,
        2,
        0,
        8,
        15,
        12,
        2,
        2,
        8,
        2,
        2,
        2,
        21,
        2,
        6,
        2,
        1,
        2,
        4,
        3,
        9,
        2,
        2,
        2,
        2,
        3,
        0,
        16,
        3,
        3,
        9,
        18,
        2,
        2,
        7,
        3,
        1,
        3,
        21,
        2,
        6,
        2,
        1,
        2,
        4,
        3,
        8,
        3,
        1,
        3,
        2,
        9,
        1,
        5,
        1,
        2,
        4,
        3,
        9,
        2,
        0,
        17,
        1,
        2,
        5,
        4,
        2,
        2,
        3,
        4,
        1,
        2,
        0,
        2,
        1,
        4,
        1,
        4,
        2,
        4,
        11,
        5,
        4,
        4,
        2,
        2,
        3,
        3,
        0,
        7,
        0,
        15,
        9,
        18,
        2,
        2,
        7,
        2,
        2,
        2,
        22,
        2,
        9,
        2,
        4,
        4,
        7,
        2,
        2,
        2,
        3,
        8,
        1,
        2,
        1,
        7,
        3,
        3,
        9,
        19,
        1,
        2,
        7,
        2,
        2,
        2,
        22,
        2,
        9,
        2,
        4,
        3,
        8,
        2,
        2,
        2,
        3,
        8,
        1,
        8,
        0,
        2,
        3,
        3,
        9,
        19,
        1,
        2,
        7,
        2,
        2,
        2,
        22,
        2,
        15,
        4,
        7,
        2,
        2,
        2,
        3,
        10,
        0,
        9,
        3,
        3,
        9,
        11,
        5,
        3,
        1,
        2,
        17,
        4,
        23,
        2,
        8,
        2,
        0,
        3,
        6,
        4,
        0,
        5,
        5,
        2,
        0,
        2,
        7,
        19,
        1,
        14,
        57,
        6,
        14,
        2,
        9,
        40,
        1,
        2,
        0,
        3,
        1,
        2,
        0,
        3,
        0,
        7,
        3,
        2,
        6,
        2,
        2,
        2,
        0,
        2,
        0,
        3,
        1,
        2,
        12,
        2,
        2,
        3,
        4,
        2,
        0,
        2,
        5,
        3,
        9,
        3,
        1,
        35,
        0,
        24,
        1,
        7,
        9,
        12,
        0,
        2,
        0,
        2,
        0,
        5,
        9,
        2,
        35,
        5,
        19,
        2,
        5,
        5,
        7,
        2,
        35,
        10,
        0,
        58,
        73,
        7,
        77,
        3,
        37,
        11,
        42,
        2,
        0,
        4,
        328,
        2,
        3,
        3,
        6,
        2,
        0,
        2,
        3,
        3,
        40,
        2,
        3,
        3,
        32,
        2,
        3,
        3,
        6,
        2,
        0,
        2,
        3,
        3,
        14,
        2,
        56,
        2,
        3,
        3,
        66,
        5,
        0,
        33,
        15,
        17,
        84,
        13,
        619,
        3,
        16,
        2,
        25,
        6,
        74,
        22,
        12,
        2,
        6,
        12,
        20,
        12,
        19,
        13,
        12,
        2,
        2,
        2,
        1,
        13,
        51,
        3,
        29,
        4,
        0,
        5,
        1,
        3,
        9,
        34,
        2,
        3,
        9,
        7,
        87,
        9,
        42,
        6,
        69,
        11,
        28,
        4,
        11,
        5,
        11,
        11,
        39,
        3,
        4,
        12,
        43,
        5,
        25,
        7,
        10,
        38,
        27,
        5,
        62,
        2,
        28,
        3,
        10,
        7,
        9,
        14,
        0,
        89,
        75,
        5,
        9,
        18,
        8,
        13,
        42,
        4,
        11,
        71,
        55,
        9,
        9,
        4,
        48,
        83,
        2,
        2,
        30,
        14,
        230,
        23,
        280,
        3,
        5,
        3,
        37,
        3,
        5,
        3,
        7,
        2,
        0,
        2,
        0,
        2,
        0,
        2,
        30,
        3,
        52,
        2,
        6,
        2,
        0,
        4,
        2,
        2,
        6,
        4,
        3,
        3,
        5,
        5,
        12,
        6,
        2,
        2,
        6,
        67,
        1,
        20,
        0,
        29,
        0,
        14,
        0,
        17,
        4,
        60,
        12,
        5,
        0,
        4,
        11,
        18,
        0,
        5,
        0,
        3,
        9,
        2,
        0,
        4,
        4,
        7,
        0,
        2,
        0,
        2,
        0,
        2,
        3,
        2,
        10,
        3,
        3,
        6,
        4,
        5,
        0,
        53,
        1,
        2684,
        46,
        2,
        46,
        2,
        132,
        7,
        6,
        15,
        37,
        11,
        53,
        10,
        0,
        17,
        22,
        10,
        6,
        2,
        6,
        2,
        6,
        2,
        6,
        2,
        6,
        2,
        6,
        2,
        6,
        2,
        6,
        2,
        31,
        48,
        0,
        470,
        1,
        36,
        5,
        2,
        4,
        6,
        1,
        5,
        85,
        3,
        1,
        3,
        2,
        2,
        89,
        2,
        3,
        6,
        40,
        4,
        93,
        18,
        23,
        57,
        15,
        513,
        6581,
        75,
        20939,
        53,
        1164,
        68,
        45,
        3,
        268,
        4,
        27,
        21,
        31,
        3,
        13,
        13,
        1,
        2,
        24,
        9,
        69,
        11,
        1,
        38,
        8,
        3,
        102,
        3,
        1,
        111,
        44,
        25,
        51,
        13,
        68,
        12,
        9,
        7,
        23,
        4,
        0,
        5,
        45,
        3,
        35,
        13,
        28,
        4,
        64,
        15,
        10,
        39,
        54,
        10,
        13,
        3,
        9,
        7,
        22,
        4,
        1,
        5,
        66,
        25,
        2,
        227,
        42,
        2,
        1,
        3,
        9,
        7,
        11171,
        13,
        22,
        5,
        48,
        8453,
        301,
        3,
        61,
        3,
        105,
        39,
        6,
        13,
        4,
        6,
        11,
        2,
        12,
        2,
        4,
        2,
        0,
        2,
        1,
        2,
        1,
        2,
        107,
        34,
        362,
        19,
        63,
        3,
        53,
        41,
        11,
        5,
        15,
        17,
        6,
        13,
        1,
        25,
        2,
        33,
        4,
        2,
        134,
        20,
        9,
        8,
        25,
        5,
        0,
        2,
        25,
        12,
        88,
        4,
        5,
        3,
        5,
        3,
        5,
        3,
        2
      ], M = 0, $ = [], a = 0; a < L.length; a += 2) $.push(M += L[a]), L[a + 1] && $.push(45, M += L[a + 1]);
      _.wordChars = String.fromCharCode.apply(null, $);
    }), ace.define("ace/mode/text", [
      "require",
      "exports",
      "module",
      "ace/config",
      "ace/tokenizer",
      "ace/mode/text_highlight_rules",
      "ace/mode/behaviour/cstyle",
      "ace/unicode",
      "ace/lib/lang",
      "ace/token_iterator",
      "ace/range"
    ], function(A, _, N) {
      var L = A("../config"), M = A("../tokenizer").Tokenizer, $ = A("./text_highlight_rules").TextHighlightRules, a = A("./behaviour/cstyle").CstyleBehaviour, l = A("../unicode"), i = A("../lib/lang"), o = A("../token_iterator").TokenIterator, r = A("../range").Range, n;
      n = function() {
        this.HighlightRules = $;
      }, (function() {
        this.$defaultBehaviour = new a(), this.tokenRe = new RegExp("^[" + l.wordChars + "\\$_]+", "g"), this.nonTokenRe = new RegExp("^(?:[^" + l.wordChars + "\\$_]|\\s])+", "g"), this.getTokenizer = function() {
          return this.$tokenizer || (this.$highlightRules = this.$highlightRules || new this.HighlightRules(this.$highlightRuleConfig), this.$tokenizer = new M(this.$highlightRules.getRules())), this.$tokenizer;
        }, this.lineCommentStart = "", this.blockComment = "", this.toggleCommentLines = function(e, t, s, h) {
          var u = t.doc, S = true, b = true, f = 1 / 0, c = t.getTabSize(), w = false;
          if (this.lineCommentStart) {
            if (Array.isArray(this.lineCommentStart)) var v = this.lineCommentStart.map(i.escapeRegExp).join("|"), C = this.lineCommentStart[0];
            else var v = i.escapeRegExp(this.lineCommentStart), C = this.lineCommentStart;
            v = new RegExp("^(\\s*)(?:" + v + ") ?"), w = t.getUseSoftTabs();
            var y = function(z, F) {
              var B = z.match(v);
              if (B) {
                var W = B[1].length, H = B[0].length;
                !x(z, W, H) && B[0][H - 1] == " " && H--, u.removeInLine(F, W, H);
              }
            }, d = C + " ", m = function(z, F) {
              (!S || /\S/.test(z)) && (x(z, f, f) ? u.insertInLine({
                row: F,
                column: f
              }, d) : u.insertInLine({
                row: F,
                column: f
              }, C));
            }, g = function(z, F) {
              return v.test(z);
            }, x = function(z, F, B) {
              for (var W = 0; F-- && z.charAt(F) == " "; ) W++;
              if (W % c != 0) return false;
              for (var W = 0; z.charAt(B++) == " "; ) W++;
              return c > 2 ? W % c != c - 1 : W % c == 0;
            };
          } else {
            if (!this.blockComment) return false;
            var C = this.blockComment.start, p = this.blockComment.end, v = new RegExp("^(\\s*)(?:" + i.escapeRegExp(C) + ")"), k = new RegExp("(?:" + i.escapeRegExp(p) + ")\\s*$"), m = function(R, I) {
              g(R, I) || (!S || /\S/.test(R)) && (u.insertInLine({
                row: I,
                column: R.length
              }, p), u.insertInLine({
                row: I,
                column: f
              }, C));
            }, y = function(R, I) {
              var O;
              (O = R.match(k)) && u.removeInLine(I, R.length - O[0].length, R.length), (O = R.match(v)) && u.removeInLine(I, O[1].length, O[0].length);
            }, g = function(R, I) {
              if (v.test(R)) return true;
              for (var O = t.getTokens(I), z = 0; z < O.length; z++) if (O[z].type === "comment") return true;
            };
          }
          function T(R) {
            for (var I = s; I <= h; I++) R(u.getLine(I), I);
          }
          var E = 1 / 0;
          T(function(R, I) {
            var O = R.search(/\S/);
            O !== -1 ? (O < f && (f = O), b && !g(R, I) && (b = false)) : E > R.length && (E = R.length);
          }), f == 1 / 0 && (f = E, S = false, b = false), w && f % c != 0 && (f = Math.floor(f / c) * c), T(b ? y : m);
        }, this.toggleBlockComment = function(e, t, s, h) {
          var u = this.blockComment;
          if (u) {
            !u.start && u[0] && (u = u[0]);
            var S = new o(t, h.row, h.column), b = S.getCurrentToken();
            t.selection;
            var f = t.selection.toOrientedRange(), c, w;
            if (b && /comment/.test(b.type)) {
              for (var C, p; b && /comment/.test(b.type); ) {
                var v = b.value.indexOf(u.start);
                if (v != -1) {
                  var k = S.getCurrentTokenRow(), m = S.getCurrentTokenColumn() + v;
                  C = new r(k, m, k, m + u.start.length);
                  break;
                }
                b = S.stepBackward();
              }
              for (var S = new o(t, h.row, h.column), b = S.getCurrentToken(); b && /comment/.test(b.type); ) {
                var v = b.value.indexOf(u.end);
                if (v != -1) {
                  var k = S.getCurrentTokenRow(), m = S.getCurrentTokenColumn() + v;
                  p = new r(k, m, k, m + u.end.length);
                  break;
                }
                b = S.stepForward();
              }
              p && t.remove(p), C && (t.remove(C), c = C.start.row, w = -u.start.length);
            } else w = u.start.length, c = s.start.row, t.insert(s.end, u.end), t.insert(s.start, u.start);
            f.start.row == c && (f.start.column += w), f.end.row == c && (f.end.column += w), t.selection.fromOrientedRange(f);
          }
        }, this.getNextLineIndent = function(e, t, s) {
          return this.$getIndent(t);
        }, this.checkOutdent = function(e, t, s) {
          return false;
        }, this.autoOutdent = function(e, t, s) {
        }, this.$getIndent = function(e) {
          return e.match(/^\s*/)[0];
        }, this.createWorker = function(e) {
          return null;
        }, this.createModeDelegates = function(e) {
          this.$embeds = [], this.$modes = {};
          for (var t in e) if (e[t]) {
            var s = e[t], h = s.prototype.$id, u = L.$modes[h];
            u || (L.$modes[h] = u = new s()), L.$modes[t] || (L.$modes[t] = u), this.$embeds.push(t), this.$modes[t] = u;
          }
          for (var S = [
            "toggleBlockComment",
            "toggleCommentLines",
            "getNextLineIndent",
            "checkOutdent",
            "autoOutdent",
            "transformAction",
            "getCompletions"
          ], b = function(c) {
            (function(w) {
              var C = S[c], p = w[C];
              w[S[c]] = function() {
                return this.$delegator(C, arguments, p);
              };
            })(f);
          }, f = this, t = 0; t < S.length; t++) b(t);
        }, this.$delegator = function(e, t, s) {
          var h = t[0] || "start";
          if (typeof h != "string") {
            if (Array.isArray(h[2])) {
              var u = h[2][h[2].length - 1], S = this.$modes[u];
              if (S) return S[e].apply(S, [
                h[1]
              ].concat([].slice.call(t, 1)));
            }
            h = h[0] || "start";
          }
          for (var b = 0; b < this.$embeds.length; b++) if (this.$modes[this.$embeds[b]]) {
            var f = h.split(this.$embeds[b]);
            if (!f[0] && f[1]) {
              t[0] = f[1];
              var S = this.$modes[this.$embeds[b]];
              return S[e].apply(S, t);
            }
          }
          var c = s.apply(this, t);
          return s ? c : void 0;
        }, this.transformAction = function(e, t, s, h, u) {
          if (this.$behaviour) {
            var S = this.$behaviour.getBehaviours();
            for (var b in S) if (S[b][t]) {
              var f = S[b][t].apply(this, arguments);
              if (f) return f;
            }
          }
        }, this.getKeywords = function(e) {
          if (!this.completionKeywords) {
            var t = this.$tokenizer.rules, s = [];
            for (var h in t) for (var u = t[h], S = 0, b = u.length; S < b; S++) if (typeof u[S].token == "string") /keyword|support|storage/.test(u[S].token) && s.push(u[S].regex);
            else if (typeof u[S].token == "object") {
              for (var f = 0, c = u[S].token.length; f < c; f++) if (/keyword|support|storage/.test(u[S].token[f])) {
                var h = u[S].regex.match(/\(.+?\)/g)[f];
                s.push(h.substr(1, h.length - 2));
              }
            }
            this.completionKeywords = s;
          }
          return e ? s.concat(this.$keywordList || []) : this.$keywordList;
        }, this.$createKeywordList = function() {
          return this.$highlightRules || this.getTokenizer(), this.$keywordList = this.$highlightRules.$keywordList || [];
        }, this.getCompletions = function(e, t, s, h) {
          var u = this.$keywordList || this.$createKeywordList();
          return u.map(function(S) {
            return {
              name: S,
              value: S,
              score: 0,
              meta: "keyword"
            };
          });
        }, this.$id = "ace/mode/text";
      }).call(n.prototype), _.Mode = n;
    }), ace.define("ace/line_widgets", [
      "require",
      "exports",
      "module",
      "ace/lib/dom"
    ], function(A, _, N) {
      var L = A("./lib/dom"), M = (function() {
        function $(a) {
          this.session = a, this.session.widgetManager = this, this.session.getRowLength = this.getRowLength, this.session.$getWidgetScreenLength = this.$getWidgetScreenLength, this.updateOnChange = this.updateOnChange.bind(this), this.renderWidgets = this.renderWidgets.bind(this), this.measureWidgets = this.measureWidgets.bind(this), this.session._changedWidgets = [], this.$onChangeEditor = this.$onChangeEditor.bind(this), this.session.on("change", this.updateOnChange), this.session.on("changeFold", this.updateOnFold), this.session.on("changeEditor", this.$onChangeEditor);
        }
        return $.prototype.getRowLength = function(a) {
          var l;
          return this.lineWidgets ? l = this.lineWidgets[a] && this.lineWidgets[a].rowCount || 0 : l = 0, !this.$useWrapMode || !this.$wrapData[a] ? 1 + l : this.$wrapData[a].length + 1 + l;
        }, $.prototype.$getWidgetScreenLength = function() {
          var a = 0;
          return this.lineWidgets.forEach(function(l) {
            l && l.rowCount && !l.hidden && (a += l.rowCount);
          }), a;
        }, $.prototype.$onChangeEditor = function(a) {
          this.attach(a.editor);
        }, $.prototype.attach = function(a) {
          a && a.widgetManager && a.widgetManager != this && a.widgetManager.detach(), this.editor != a && (this.detach(), this.editor = a, a && (a.widgetManager = this, a.renderer.on("beforeRender", this.measureWidgets), a.renderer.on("afterRender", this.renderWidgets)));
        }, $.prototype.detach = function(a) {
          var l = this.editor;
          if (l) {
            this.editor = null, l.widgetManager = null, l.renderer.off("beforeRender", this.measureWidgets), l.renderer.off("afterRender", this.renderWidgets);
            var i = this.session.lineWidgets;
            i && i.forEach(function(o) {
              o && o.el && o.el.parentNode && (o._inDocument = false, o.el.parentNode.removeChild(o.el));
            });
          }
        }, $.prototype.updateOnFold = function(a, l) {
          var i = l.lineWidgets;
          if (!(!i || !a.action)) {
            for (var o = a.data, r = o.start.row, n = o.end.row, e = a.action == "add", t = r + 1; t < n; t++) i[t] && (i[t].hidden = e);
            i[n] && (e ? i[r] ? i[n].hidden = e : i[r] = i[n] : (i[r] == i[n] && (i[r] = void 0), i[n].hidden = e));
          }
        }, $.prototype.updateOnChange = function(a) {
          var l = this.session.lineWidgets;
          if (l) {
            var i = a.start.row, o = a.end.row - i;
            if (o !== 0) if (a.action == "remove") {
              var r = l.splice(i + 1, o);
              !l[i] && r[r.length - 1] && (l[i] = r.pop()), r.forEach(function(e) {
                e && this.removeLineWidget(e);
              }, this), this.$updateRows();
            } else {
              var n = new Array(o);
              l[i] && l[i].column != null && a.start.column > l[i].column && i++, n.unshift(i, 0), l.splice.apply(l, n), this.$updateRows();
            }
          }
        }, $.prototype.$updateRows = function() {
          var a = this.session.lineWidgets;
          if (a) {
            var l = true;
            a.forEach(function(i, o) {
              if (i) for (l = false, i.row = o; i.$oldWidget; ) i.$oldWidget.row = o, i = i.$oldWidget;
            }), l && (this.session.lineWidgets = null);
          }
        }, $.prototype.$registerLineWidget = function(a) {
          this.session.lineWidgets || (this.session.lineWidgets = new Array(this.session.getLength()));
          var l = this.session.lineWidgets[a.row];
          return l && (a.$oldWidget = l, l.el && l.el.parentNode && (l.el.parentNode.removeChild(l.el), l._inDocument = false)), this.session.lineWidgets[a.row] = a, a;
        }, $.prototype.addLineWidget = function(a) {
          if (this.$registerLineWidget(a), a.session = this.session, !this.editor) return a;
          var l = this.editor.renderer;
          a.html && !a.el && (a.el = L.createElement("div"), a.el.innerHTML = a.html), a.text && !a.el && (a.el = L.createElement("div"), a.el.textContent = a.text), a.el && (L.addCssClass(a.el, "ace_lineWidgetContainer"), a.className && L.addCssClass(a.el, a.className), a.el.style.position = "absolute", a.el.style.zIndex = "5", l.container.appendChild(a.el), a._inDocument = true, a.coverGutter || (a.el.style.zIndex = "3"), a.pixelHeight == null && (a.pixelHeight = a.el.offsetHeight)), a.rowCount == null && (a.rowCount = a.pixelHeight / l.layerConfig.lineHeight);
          var i = this.session.getFoldAt(a.row, 0);
          if (a.$fold = i, i) {
            var o = this.session.lineWidgets;
            a.row == i.end.row && !o[i.start.row] ? o[i.start.row] = a : a.hidden = true;
          }
          return this.session._emit("changeFold", {
            data: {
              start: {
                row: a.row
              }
            }
          }), this.$updateRows(), this.renderWidgets(null, l), this.onWidgetChanged(a), a;
        }, $.prototype.removeLineWidget = function(a) {
          if (a._inDocument = false, a.session = null, a.el && a.el.parentNode && a.el.parentNode.removeChild(a.el), a.editor && a.editor.destroy) try {
            a.editor.destroy();
          } catch {
          }
          if (this.session.lineWidgets) {
            var l = this.session.lineWidgets[a.row];
            if (l == a) this.session.lineWidgets[a.row] = a.$oldWidget, a.$oldWidget && this.onWidgetChanged(a.$oldWidget);
            else for (; l; ) {
              if (l.$oldWidget == a) {
                l.$oldWidget = a.$oldWidget;
                break;
              }
              l = l.$oldWidget;
            }
          }
          this.session._emit("changeFold", {
            data: {
              start: {
                row: a.row
              }
            }
          }), this.$updateRows();
        }, $.prototype.getWidgetsAtRow = function(a) {
          for (var l = this.session.lineWidgets, i = l && l[a], o = []; i; ) o.push(i), i = i.$oldWidget;
          return o;
        }, $.prototype.onWidgetChanged = function(a) {
          this.session._changedWidgets.push(a), this.editor && this.editor.renderer.updateFull();
        }, $.prototype.measureWidgets = function(a, l) {
          var i = this.session._changedWidgets, o = l.layerConfig;
          if (!(!i || !i.length)) {
            for (var r = 1 / 0, n = 0; n < i.length; n++) {
              var e = i[n];
              if (!(!e || !e.el) && e.session == this.session) {
                if (!e._inDocument) {
                  if (this.session.lineWidgets[e.row] != e) continue;
                  e._inDocument = true, l.container.appendChild(e.el);
                }
                e.h = e.el.offsetHeight, e.fixedWidth || (e.w = e.el.offsetWidth, e.screenWidth = Math.ceil(e.w / o.characterWidth));
                var t = e.h / o.lineHeight;
                e.coverLine && (t -= this.session.getRowLineCount(e.row), t < 0 && (t = 0)), e.rowCount != t && (e.rowCount = t, e.row < r && (r = e.row));
              }
            }
            r != 1 / 0 && (this.session._emit("changeFold", {
              data: {
                start: {
                  row: r
                }
              }
            }), this.session.lineWidgetWidth = null), this.session._changedWidgets = [];
          }
        }, $.prototype.renderWidgets = function(a, l) {
          var i = l.layerConfig, o = this.session.lineWidgets;
          if (o) {
            for (var r = Math.min(this.firstRow, i.firstRow), n = Math.max(this.lastRow, i.lastRow, o.length); r > 0 && !o[r]; ) r--;
            this.firstRow = i.firstRow, this.lastRow = i.lastRow, l.$cursorLayer.config = i;
            for (var e = r; e <= n; e++) {
              var t = o[e];
              if (!(!t || !t.el)) {
                if (t.hidden) {
                  t.el.style.top = -100 - (t.pixelHeight || 0) + "px";
                  continue;
                }
                t._inDocument || (t._inDocument = true, l.container.appendChild(t.el));
                var s = l.$cursorLayer.getPixelPosition({
                  row: e,
                  column: 0
                }, true).top;
                t.coverLine || (s += i.lineHeight * this.session.getRowLineCount(t.row)), t.el.style.top = s - i.offset + "px";
                var h = t.coverGutter ? 0 : l.gutterWidth;
                t.fixedWidth || (h -= l.scrollLeft), t.el.style.left = h + "px", t.fullWidth && t.screenWidth && (t.el.style.minWidth = i.width + 2 * i.padding + "px"), t.fixedWidth ? t.el.style.right = l.scrollBar.getWidth() + "px" : t.el.style.right = "";
              }
            }
          }
        }, $;
      })();
      _.LineWidgets = M;
    }), ace.define("ace/apply_delta", [
      "require",
      "exports",
      "module"
    ], function(A, _, N) {
      _.applyDelta = function(L, M, $) {
        var a = M.start.row, l = M.start.column, i = L[a] || "";
        switch (M.action) {
          case "insert":
            var o = M.lines;
            if (o.length === 1) L[a] = i.substring(0, l) + M.lines[0] + i.substring(l);
            else {
              var r = [
                a,
                1
              ].concat(M.lines);
              L.splice.apply(L, r), L[a] = i.substring(0, l) + L[a], L[a + M.lines.length - 1] += i.substring(l);
            }
            break;
          case "remove":
            var n = M.end.column, e = M.end.row;
            a === e ? L[a] = i.substring(0, l) + i.substring(n) : L.splice(a, e - a + 1, i.substring(0, l) + L[e].substring(n));
            break;
        }
      };
    }), ace.define("ace/anchor", [
      "require",
      "exports",
      "module",
      "ace/lib/oop",
      "ace/lib/event_emitter"
    ], function(A, _, N) {
      var L = A("./lib/oop"), M = A("./lib/event_emitter").EventEmitter, $ = (function() {
        function i(o, r, n) {
          this.$onChange = this.onChange.bind(this), this.attach(o), typeof r != "number" ? this.setPosition(r.row, r.column) : this.setPosition(r, n);
        }
        return i.prototype.getPosition = function() {
          return this.$clipPositionToDocument(this.row, this.column);
        }, i.prototype.getDocument = function() {
          return this.document;
        }, i.prototype.onChange = function(o) {
          if (!(o.start.row == o.end.row && o.start.row != this.row) && !(o.start.row > this.row)) {
            var r = l(o, {
              row: this.row,
              column: this.column
            }, this.$insertRight);
            this.setPosition(r.row, r.column, true);
          }
        }, i.prototype.setPosition = function(o, r, n) {
          var e;
          if (n ? e = {
            row: o,
            column: r
          } : e = this.$clipPositionToDocument(o, r), !(this.row == e.row && this.column == e.column)) {
            var t = {
              row: this.row,
              column: this.column
            };
            this.row = e.row, this.column = e.column, this._signal("change", {
              old: t,
              value: e
            });
          }
        }, i.prototype.detach = function() {
          this.document.off("change", this.$onChange);
        }, i.prototype.attach = function(o) {
          this.document = o || this.document, this.document.on("change", this.$onChange);
        }, i.prototype.$clipPositionToDocument = function(o, r) {
          var n = {};
          return o >= this.document.getLength() ? (n.row = Math.max(0, this.document.getLength() - 1), n.column = this.document.getLine(n.row).length) : o < 0 ? (n.row = 0, n.column = 0) : (n.row = o, n.column = Math.min(this.document.getLine(n.row).length, Math.max(0, r))), r < 0 && (n.column = 0), n;
        }, i;
      })();
      $.prototype.$insertRight = false, L.implement($.prototype, M);
      function a(i, o, r) {
        var n = r ? i.column <= o.column : i.column < o.column;
        return i.row < o.row || i.row == o.row && n;
      }
      function l(i, o, r) {
        var n = i.action == "insert", e = (n ? 1 : -1) * (i.end.row - i.start.row), t = (n ? 1 : -1) * (i.end.column - i.start.column), s = i.start, h = n ? s : i.end;
        return a(o, s, r) ? {
          row: o.row,
          column: o.column
        } : a(h, o, !r) ? {
          row: o.row + e,
          column: o.column + (o.row == h.row ? t : 0)
        } : {
          row: s.row,
          column: s.column
        };
      }
      _.Anchor = $;
    }), ace.define("ace/document", [
      "require",
      "exports",
      "module",
      "ace/lib/oop",
      "ace/apply_delta",
      "ace/lib/event_emitter",
      "ace/range",
      "ace/anchor"
    ], function(A, _, N) {
      var L = A("./lib/oop"), M = A("./apply_delta").applyDelta, $ = A("./lib/event_emitter").EventEmitter, a = A("./range").Range, l = A("./anchor").Anchor, i = (function() {
        function o(r) {
          this.$lines = [
            ""
          ], r.length === 0 ? this.$lines = [
            ""
          ] : Array.isArray(r) ? this.insertMergedLines({
            row: 0,
            column: 0
          }, r) : this.insert({
            row: 0,
            column: 0
          }, r);
        }
        return o.prototype.setValue = function(r) {
          var n = this.getLength() - 1;
          this.remove(new a(0, 0, n, this.getLine(n).length)), this.insert({
            row: 0,
            column: 0
          }, r || "");
        }, o.prototype.getValue = function() {
          return this.getAllLines().join(this.getNewLineCharacter());
        }, o.prototype.createAnchor = function(r, n) {
          return new l(this, r, n);
        }, o.prototype.$detectNewLine = function(r) {
          var n = r.match(/^.*?(\r\n|\r|\n)/m);
          this.$autoNewLine = n ? n[1] : `
`, this._signal("changeNewLineMode");
        }, o.prototype.getNewLineCharacter = function() {
          switch (this.$newLineMode) {
            case "windows":
              return `\r
`;
            case "unix":
              return `
`;
            default:
              return this.$autoNewLine || `
`;
          }
        }, o.prototype.setNewLineMode = function(r) {
          this.$newLineMode !== r && (this.$newLineMode = r, this._signal("changeNewLineMode"));
        }, o.prototype.getNewLineMode = function() {
          return this.$newLineMode;
        }, o.prototype.isNewLine = function(r) {
          return r == `\r
` || r == "\r" || r == `
`;
        }, o.prototype.getLine = function(r) {
          return this.$lines[r] || "";
        }, o.prototype.getLines = function(r, n) {
          return this.$lines.slice(r, n + 1);
        }, o.prototype.getAllLines = function() {
          return this.getLines(0, this.getLength());
        }, o.prototype.getLength = function() {
          return this.$lines.length;
        }, o.prototype.getTextRange = function(r) {
          return this.getLinesForRange(r).join(this.getNewLineCharacter());
        }, o.prototype.getLinesForRange = function(r) {
          var n;
          if (r.start.row === r.end.row) n = [
            this.getLine(r.start.row).substring(r.start.column, r.end.column)
          ];
          else {
            n = this.getLines(r.start.row, r.end.row), n[0] = (n[0] || "").substring(r.start.column);
            var e = n.length - 1;
            r.end.row - r.start.row == e && (n[e] = n[e].substring(0, r.end.column));
          }
          return n;
        }, o.prototype.insertLines = function(r, n) {
          return console.warn("Use of document.insertLines is deprecated. Use the insertFullLines method instead."), this.insertFullLines(r, n);
        }, o.prototype.removeLines = function(r, n) {
          return console.warn("Use of document.removeLines is deprecated. Use the removeFullLines method instead."), this.removeFullLines(r, n);
        }, o.prototype.insertNewLine = function(r) {
          return console.warn("Use of document.insertNewLine is deprecated. Use insertMergedLines(position, ['', '']) instead."), this.insertMergedLines(r, [
            "",
            ""
          ]);
        }, o.prototype.insert = function(r, n) {
          return this.getLength() <= 1 && this.$detectNewLine(n), this.insertMergedLines(r, this.$split(n));
        }, o.prototype.insertInLine = function(r, n) {
          var e = this.clippedPos(r.row, r.column), t = this.pos(r.row, r.column + n.length);
          return this.applyDelta({
            start: e,
            end: t,
            action: "insert",
            lines: [
              n
            ]
          }, true), this.clonePos(t);
        }, o.prototype.clippedPos = function(r, n) {
          var e = this.getLength();
          r === void 0 ? r = e : r < 0 ? r = 0 : r >= e && (r = e - 1, n = void 0);
          var t = this.getLine(r);
          return n == null && (n = t.length), n = Math.min(Math.max(n, 0), t.length), {
            row: r,
            column: n
          };
        }, o.prototype.clonePos = function(r) {
          return {
            row: r.row,
            column: r.column
          };
        }, o.prototype.pos = function(r, n) {
          return {
            row: r,
            column: n
          };
        }, o.prototype.$clipPosition = function(r) {
          var n = this.getLength();
          return r.row >= n ? (r.row = Math.max(0, n - 1), r.column = this.getLine(n - 1).length) : (r.row = Math.max(0, r.row), r.column = Math.min(Math.max(r.column, 0), this.getLine(r.row).length)), r;
        }, o.prototype.insertFullLines = function(r, n) {
          r = Math.min(Math.max(r, 0), this.getLength());
          var e = 0;
          r < this.getLength() ? (n = n.concat([
            ""
          ]), e = 0) : (n = [
            ""
          ].concat(n), r--, e = this.$lines[r].length), this.insertMergedLines({
            row: r,
            column: e
          }, n);
        }, o.prototype.insertMergedLines = function(r, n) {
          var e = this.clippedPos(r.row, r.column), t = {
            row: e.row + n.length - 1,
            column: (n.length == 1 ? e.column : 0) + n[n.length - 1].length
          };
          return this.applyDelta({
            start: e,
            end: t,
            action: "insert",
            lines: n
          }), this.clonePos(t);
        }, o.prototype.remove = function(r) {
          var n = this.clippedPos(r.start.row, r.start.column), e = this.clippedPos(r.end.row, r.end.column);
          return this.applyDelta({
            start: n,
            end: e,
            action: "remove",
            lines: this.getLinesForRange({
              start: n,
              end: e
            })
          }), this.clonePos(n);
        }, o.prototype.removeInLine = function(r, n, e) {
          var t = this.clippedPos(r, n), s = this.clippedPos(r, e);
          return this.applyDelta({
            start: t,
            end: s,
            action: "remove",
            lines: this.getLinesForRange({
              start: t,
              end: s
            })
          }, true), this.clonePos(t);
        }, o.prototype.removeFullLines = function(r, n) {
          r = Math.min(Math.max(0, r), this.getLength() - 1), n = Math.min(Math.max(0, n), this.getLength() - 1);
          var e = n == this.getLength() - 1 && r > 0, t = n < this.getLength() - 1, s = e ? r - 1 : r, h = e ? this.getLine(s).length : 0, u = t ? n + 1 : n, S = t ? 0 : this.getLine(u).length, b = new a(s, h, u, S), f = this.$lines.slice(r, n + 1);
          return this.applyDelta({
            start: b.start,
            end: b.end,
            action: "remove",
            lines: this.getLinesForRange(b)
          }), f;
        }, o.prototype.removeNewLine = function(r) {
          r < this.getLength() - 1 && r >= 0 && this.applyDelta({
            start: this.pos(r, this.getLine(r).length),
            end: this.pos(r + 1, 0),
            action: "remove",
            lines: [
              "",
              ""
            ]
          });
        }, o.prototype.replace = function(r, n) {
          if (r instanceof a || (r = a.fromPoints(r.start, r.end)), n.length === 0 && r.isEmpty()) return r.start;
          if (n == this.getTextRange(r)) return r.end;
          this.remove(r);
          var e;
          return n ? e = this.insert(r.start, n) : e = r.start, e;
        }, o.prototype.applyDeltas = function(r) {
          for (var n = 0; n < r.length; n++) this.applyDelta(r[n]);
        }, o.prototype.revertDeltas = function(r) {
          for (var n = r.length - 1; n >= 0; n--) this.revertDelta(r[n]);
        }, o.prototype.applyDelta = function(r, n) {
          var e = r.action == "insert";
          (e ? r.lines.length <= 1 && !r.lines[0] : !a.comparePoints(r.start, r.end)) || (e && r.lines.length > 2e4 ? this.$splitAndapplyLargeDelta(r, 2e4) : (M(this.$lines, r, n), this._signal("change", r)));
        }, o.prototype.$safeApplyDelta = function(r) {
          var n = this.$lines.length;
          (r.action == "remove" && r.start.row < n && r.end.row < n || r.action == "insert" && r.start.row <= n) && this.applyDelta(r);
        }, o.prototype.$splitAndapplyLargeDelta = function(r, n) {
          for (var e = r.lines, t = e.length - n + 1, s = r.start.row, h = r.start.column, u = 0, S = 0; u < t; u = S) {
            S += n - 1;
            var b = e.slice(u, S);
            b.push(""), this.applyDelta({
              start: this.pos(s + u, h),
              end: this.pos(s + S, h = 0),
              action: r.action,
              lines: b
            }, true);
          }
          r.lines = e.slice(u), r.start.row = s + u, r.start.column = h, this.applyDelta(r, true);
        }, o.prototype.revertDelta = function(r) {
          this.$safeApplyDelta({
            start: this.clonePos(r.start),
            end: this.clonePos(r.end),
            action: r.action == "insert" ? "remove" : "insert",
            lines: r.lines.slice()
          });
        }, o.prototype.indexToPosition = function(r, n) {
          for (var e = this.$lines || this.getAllLines(), t = this.getNewLineCharacter().length, s = n || 0, h = e.length; s < h; s++) if (r -= e[s].length + t, r < 0) return {
            row: s,
            column: r + e[s].length + t
          };
          return {
            row: h - 1,
            column: r + e[h - 1].length + t
          };
        }, o.prototype.positionToIndex = function(r, n) {
          for (var e = this.$lines || this.getAllLines(), t = this.getNewLineCharacter().length, s = 0, h = Math.min(r.row, e.length), u = n || 0; u < h; ++u) s += e[u].length + t;
          return s + r.column;
        }, o.prototype.$split = function(r) {
          return r.split(/\r\n|\r|\n/);
        }, o;
      })();
      i.prototype.$autoNewLine = "", i.prototype.$newLineMode = "auto", L.implement(i.prototype, $), _.Document = i;
    }), ace.define("ace/background_tokenizer", [
      "require",
      "exports",
      "module",
      "ace/lib/oop",
      "ace/lib/event_emitter"
    ], function(A, _, N) {
      var L = A("./lib/oop"), M = A("./lib/event_emitter").EventEmitter, $ = (function() {
        function a(l, i) {
          this.running = false, this.lines = [], this.states = [], this.currentLine = 0, this.tokenizer = l;
          var o = this;
          this.$worker = function() {
            if (o.running) {
              for (var r = /* @__PURE__ */ new Date(), n = o.currentLine, e = -1, t = o.doc, s = n; o.lines[n]; ) n++;
              var h = t.getLength(), u = 0;
              for (o.running = false; n < h; ) {
                o.$tokenizeRow(n), e = n;
                do
                  n++;
                while (o.lines[n]);
                if (u++, u % 5 === 0 && /* @__PURE__ */ new Date() - r > 20) {
                  o.running = setTimeout(o.$worker, 20);
                  break;
                }
              }
              o.currentLine = n, e == -1 && (e = n), s <= e && o.fireUpdateEvent(s, e);
            }
          };
        }
        return a.prototype.setTokenizer = function(l) {
          this.tokenizer = l, this.lines = [], this.states = [], this.start(0);
        }, a.prototype.setDocument = function(l) {
          this.doc = l, this.lines = [], this.states = [], this.stop();
        }, a.prototype.fireUpdateEvent = function(l, i) {
          var o = {
            first: l,
            last: i
          };
          this._signal("update", {
            data: o
          });
        }, a.prototype.start = function(l) {
          this.currentLine = Math.min(l || 0, this.currentLine, this.doc.getLength()), this.lines.splice(this.currentLine, this.lines.length), this.states.splice(this.currentLine, this.states.length), this.stop(), this.running = setTimeout(this.$worker, 700);
        }, a.prototype.scheduleStart = function() {
          this.running || (this.running = setTimeout(this.$worker, 700));
        }, a.prototype.$updateOnChange = function(l) {
          var i = l.start.row, o = l.end.row - i;
          if (o === 0) this.lines[i] = null;
          else if (l.action == "remove") this.lines.splice(i, o + 1, null), this.states.splice(i, o + 1, null);
          else {
            var r = Array(o + 1);
            r.unshift(i, 1), this.lines.splice.apply(this.lines, r), this.states.splice.apply(this.states, r);
          }
          this.currentLine = Math.min(i, this.currentLine, this.doc.getLength()), this.stop();
        }, a.prototype.stop = function() {
          this.running && clearTimeout(this.running), this.running = false;
        }, a.prototype.getTokens = function(l) {
          return this.lines[l] || this.$tokenizeRow(l);
        }, a.prototype.getState = function(l) {
          return this.currentLine == l && this.$tokenizeRow(l), this.states[l] || "start";
        }, a.prototype.$tokenizeRow = function(l) {
          var i = this.doc.getLine(l), o = this.states[l - 1], r = this.tokenizer.getLineTokens(i, o, l);
          return this.states[l] + "" != r.state + "" ? (this.states[l] = r.state, this.lines[l + 1] = null, this.currentLine > l + 1 && (this.currentLine = l + 1)) : this.currentLine == l && (this.currentLine = l + 1), this.lines[l] = r.tokens;
        }, a.prototype.cleanup = function() {
          this.running = false, this.lines = [], this.states = [], this.currentLine = 0, this.removeAllListeners();
        }, a;
      })();
      L.implement($.prototype, M), _.BackgroundTokenizer = $;
    }), ace.define("ace/search_highlight", [
      "require",
      "exports",
      "module",
      "ace/lib/lang",
      "ace/range"
    ], function(A, _, N) {
      var L = A("./lib/lang"), M = A("./range").Range, $ = (function() {
        function a(l, i, o) {
          o === void 0 && (o = "text"), this.setRegexp(l), this.clazz = i, this.type = o, this.docLen = 0;
        }
        return a.prototype.setRegexp = function(l) {
          this.regExp + "" != l + "" && (this.regExp = l, this.cache = []);
        }, a.prototype.update = function(l, i, o, r) {
          if (this.regExp) {
            for (var n = r.firstRow, e = r.lastRow, t = {}, s = o.$editor && o.$editor.$search, h = s && s.$isMultilineSearch(o.$editor.getLastSearchOptions()), u = n; u <= e; u++) {
              var S = this.cache[u];
              if (S == null || o.getValue().length != this.docLen) {
                if (h) {
                  S = [];
                  var b = s.$multiLineForward(o, this.regExp, u, e);
                  if (b) {
                    var f = b.endRow <= e ? b.endRow - 1 : e;
                    f > u && (u = f), S.push(new M(b.startRow, b.startCol, b.endRow, b.endCol));
                  }
                  S.length > this.MAX_RANGES && (S = S.slice(0, this.MAX_RANGES));
                } else S = L.getMatchOffsets(o.getLine(u), this.regExp), S.length > this.MAX_RANGES && (S = S.slice(0, this.MAX_RANGES)), S = S.map(function(p) {
                  return new M(u, p.offset, u, p.offset + p.length);
                });
                this.cache[u] = S.length ? S : "";
              }
              if (S.length !== 0) for (var c = S.length; c--; ) {
                var w = S[c].toScreenRange(o), C = w.toString();
                t[C] || (t[C] = true, i.drawSingleLineMarker(l, w, this.clazz, r));
              }
            }
            this.docLen = o.getValue().length;
          }
        }, a;
      })();
      $.prototype.MAX_RANGES = 500, _.SearchHighlight = $;
    }), ace.define("ace/undomanager", [
      "require",
      "exports",
      "module",
      "ace/range"
    ], function(A, _, N) {
      var L = (function() {
        function f() {
          this.$keepRedoStack, this.$maxRev = 0, this.$fromUndo = false, this.$undoDepth = 1 / 0, this.reset();
        }
        return f.prototype.addSession = function(c) {
          this.$session = c;
        }, f.prototype.add = function(c, w, C) {
          if (!this.$fromUndo && c != this.$lastDelta) {
            if (this.$keepRedoStack || (this.$redoStack.length = 0), w === false || !this.lastDeltas) {
              this.lastDeltas = [];
              var p = this.$undoStack.length;
              p > this.$undoDepth - 1 && this.$undoStack.splice(0, p - this.$undoDepth + 1), this.$undoStack.push(this.lastDeltas), c.id = this.$rev = ++this.$maxRev;
            }
            (c.action == "remove" || c.action == "insert") && (this.$lastDelta = c), this.lastDeltas.push(c);
          }
        }, f.prototype.addSelection = function(c, w) {
          this.selections.push({
            value: c,
            rev: w || this.$rev
          });
        }, f.prototype.startNewGroup = function() {
          return this.lastDeltas = null, this.$rev;
        }, f.prototype.markIgnored = function(c, w) {
          w == null && (w = this.$rev + 1);
          for (var C = this.$undoStack, p = C.length; p--; ) {
            var v = C[p][0];
            if (v.id <= c) break;
            v.id < w && (v.ignore = true);
          }
          this.lastDeltas = null;
        }, f.prototype.getSelection = function(c, w) {
          for (var C = this.selections, p = C.length; p--; ) {
            var v = C[p];
            if (v.rev < c) return w && (v = C[p + 1]), v;
          }
        }, f.prototype.getRevision = function() {
          return this.$rev;
        }, f.prototype.getDeltas = function(c, w) {
          w == null && (w = this.$rev + 1);
          for (var C = this.$undoStack, p = null, v = 0, k = C.length; k--; ) {
            var m = C[k][0];
            if (m.id < w && !p && (p = k + 1), m.id <= c) {
              v = k + 1;
              break;
            }
          }
          return C.slice(v, p);
        }, f.prototype.getChangedRanges = function(c, w) {
          w == null && (w = this.$rev + 1);
        }, f.prototype.getChangedLines = function(c, w) {
          w == null && (w = this.$rev + 1);
        }, f.prototype.undo = function(c, w) {
          this.lastDeltas = null;
          var C = this.$undoStack;
          if (M(C, C.length)) {
            c || (c = this.$session), this.$redoStackBaseRev !== this.$rev && this.$redoStack.length && (this.$redoStack = []), this.$fromUndo = true;
            var p = C.pop(), v = null;
            return p && (v = c.undoChanges(p, w), this.$redoStack.push(p), this.$syncRev()), this.$fromUndo = false, v;
          }
        }, f.prototype.redo = function(c, w) {
          if (this.lastDeltas = null, c || (c = this.$session), this.$fromUndo = true, this.$redoStackBaseRev != this.$rev) {
            var C = this.getDeltas(this.$redoStackBaseRev, this.$rev + 1);
            b(this.$redoStack, C), this.$redoStackBaseRev = this.$rev, this.$redoStack.forEach(function(k) {
              k[0].id = ++this.$maxRev;
            }, this);
          }
          var p = this.$redoStack.pop(), v = null;
          return p && (v = c.redoChanges(p, w), this.$undoStack.push(p), this.$syncRev()), this.$fromUndo = false, v;
        }, f.prototype.$syncRev = function() {
          var c = this.$undoStack, w = c[c.length - 1], C = w && w[0].id || 0;
          this.$redoStackBaseRev = C, this.$rev = C;
        }, f.prototype.reset = function() {
          this.lastDeltas = null, this.$lastDelta = null, this.$undoStack = [], this.$redoStack = [], this.$rev = 0, this.mark = 0, this.$redoStackBaseRev = this.$rev, this.selections = [];
        }, f.prototype.canUndo = function() {
          return this.$undoStack.length > 0;
        }, f.prototype.canRedo = function() {
          return this.$redoStack.length > 0;
        }, f.prototype.bookmark = function(c) {
          c == null && (c = this.$rev), this.mark = c;
        }, f.prototype.isAtBookmark = function() {
          return this.$rev === this.mark;
        }, f.prototype.toJSON = function() {
          return {
            $redoStack: this.$redoStack,
            $undoStack: this.$undoStack
          };
        }, f.prototype.fromJSON = function(c) {
          this.reset(), this.$undoStack = c.$undoStack, this.$redoStack = c.$redoStack;
        }, f.prototype.$prettyPrint = function(c) {
          return c ? o(c) : o(this.$undoStack) + `
---
` + o(this.$redoStack);
        }, f;
      })();
      L.prototype.hasUndo = L.prototype.canUndo, L.prototype.hasRedo = L.prototype.canRedo, L.prototype.isClean = L.prototype.isAtBookmark, L.prototype.markClean = L.prototype.bookmark;
      function M(f, c) {
        for (var w = c; w--; ) {
          var C = f[w];
          if (C && !C[0].ignore) {
            for (; w < c - 1; ) {
              var p = e(f[w], f[w + 1]);
              f[w] = p[0], f[w + 1] = p[1], w++;
            }
            return true;
          }
        }
      }
      var $ = A("./range").Range, a = $.comparePoints;
      $.comparePoints;
      function l(f) {
        return {
          row: f.row,
          column: f.column
        };
      }
      function i(f) {
        return {
          start: l(f.start),
          end: l(f.end),
          action: f.action,
          lines: f.lines.slice()
        };
      }
      function o(f) {
        if (f = f || this, Array.isArray(f)) return f.map(o).join(`
`);
        var c = "";
        return f.action ? (c = f.action == "insert" ? "+" : "-", c += "[" + f.lines + "]") : f.value && (Array.isArray(f.value) ? c = f.value.map(r).join(`
`) : c = r(f.value)), f.start && (c += r(f)), (f.id || f.rev) && (c += "	(" + (f.id || f.rev) + ")"), c;
      }
      function r(f) {
        return f.start.row + ":" + f.start.column + "=>" + f.end.row + ":" + f.end.column;
      }
      function n(f, c) {
        var w = f.action == "insert", C = c.action == "insert";
        if (w && C) if (a(c.start, f.end) >= 0) s(c, f, -1);
        else if (a(c.start, f.start) <= 0) s(f, c, 1);
        else return null;
        else if (w && !C) if (a(c.start, f.end) >= 0) s(c, f, -1);
        else if (a(c.end, f.start) <= 0) s(f, c, -1);
        else return null;
        else if (!w && C) if (a(c.start, f.start) >= 0) s(c, f, 1);
        else if (a(c.start, f.start) <= 0) s(f, c, 1);
        else return null;
        else if (!w && !C) if (a(c.start, f.start) >= 0) s(c, f, 1);
        else if (a(c.end, f.start) <= 0) s(f, c, -1);
        else return null;
        return [
          c,
          f
        ];
      }
      function e(f, c) {
        for (var w = f.length; w--; ) for (var C = 0; C < c.length; C++) if (!n(f[w], c[C])) {
          for (; w < f.length; ) {
            for (; C--; ) n(c[C], f[w]);
            C = c.length, w++;
          }
          return [
            f,
            c
          ];
        }
        return f.selectionBefore = c.selectionBefore = f.selectionAfter = c.selectionAfter = null, [
          c,
          f
        ];
      }
      function t(f, c) {
        var w = f.action == "insert", C = c.action == "insert";
        if (w && C) a(f.start, c.start) < 0 ? s(c, f, 1) : s(f, c, 1);
        else if (w && !C) a(f.start, c.end) >= 0 ? s(f, c, -1) : (a(f.start, c.start) <= 0 || s(f, $.fromPoints(c.start, f.start), -1), s(c, f, 1));
        else if (!w && C) a(c.start, f.end) >= 0 ? s(c, f, -1) : (a(c.start, f.start) <= 0 || s(c, $.fromPoints(f.start, c.start), -1), s(f, c, 1));
        else if (!w && !C) if (a(c.start, f.end) >= 0) s(c, f, -1);
        else if (a(c.end, f.start) <= 0) s(f, c, -1);
        else {
          var p, v;
          return a(f.start, c.start) < 0 && (p = f, f = u(f, c.start)), a(f.end, c.end) > 0 && (v = u(f, c.end)), h(c.end, f.start, f.end, -1), v && !p && (f.lines = v.lines, f.start = v.start, f.end = v.end, v = f), [
            c,
            p,
            v
          ].filter(Boolean);
        }
        return [
          c,
          f
        ];
      }
      function s(f, c, w) {
        h(f.start, c.start, c.end, w), h(f.end, c.start, c.end, w);
      }
      function h(f, c, w, C) {
        f.row == (C == 1 ? c : w).row && (f.column += C * (w.column - c.column)), f.row += C * (w.row - c.row);
      }
      function u(f, c) {
        var w = f.lines, C = f.end;
        f.end = l(c);
        var p = f.end.row - f.start.row, v = w.splice(p, w.length), k = p ? c.column : c.column - f.start.column;
        w.push(v[0].substring(0, k)), v[0] = v[0].substr(k);
        var m = {
          start: l(c),
          end: C,
          lines: v,
          action: f.action
        };
        return m;
      }
      function S(f, c) {
        c = i(c);
        for (var w = f.length; w--; ) {
          for (var C = f[w], p = 0; p < C.length; p++) {
            var v = C[p], k = t(v, c);
            c = k[0], k.length != 2 && (k[2] ? (C.splice(p + 1, 1, k[1], k[2]), p++) : k[1] || (C.splice(p, 1), p--));
          }
          C.length || f.splice(w, 1);
        }
        return f;
      }
      function b(f, c) {
        for (var w = 0; w < c.length; w++) for (var C = c[w], p = 0; p < C.length; p++) S(f, C[p]);
      }
      _.UndoManager = L;
    }), ace.define("ace/edit_session/fold_line", [
      "require",
      "exports",
      "module",
      "ace/range"
    ], function(A, _, N) {
      var L = A("../range").Range, M = (function() {
        function $(a, l) {
          this.foldData = a, Array.isArray(l) ? this.folds = l : l = this.folds = [
            l
          ];
          var i = l[l.length - 1];
          this.range = new L(l[0].start.row, l[0].start.column, i.end.row, i.end.column), this.start = this.range.start, this.end = this.range.end, this.folds.forEach(function(o) {
            o.setFoldLine(this);
          }, this);
        }
        return $.prototype.shiftRow = function(a) {
          this.start.row += a, this.end.row += a, this.folds.forEach(function(l) {
            l.start.row += a, l.end.row += a;
          });
        }, $.prototype.addFold = function(a) {
          if (a.sameRow) {
            if (a.start.row < this.startRow || a.endRow > this.endRow) throw new Error("Can't add a fold to this FoldLine as it has no connection");
            this.folds.push(a), this.folds.sort(function(l, i) {
              return -l.range.compareEnd(i.start.row, i.start.column);
            }), this.range.compareEnd(a.start.row, a.start.column) > 0 ? (this.end.row = a.end.row, this.end.column = a.end.column) : this.range.compareStart(a.end.row, a.end.column) < 0 && (this.start.row = a.start.row, this.start.column = a.start.column);
          } else if (a.start.row == this.end.row) this.folds.push(a), this.end.row = a.end.row, this.end.column = a.end.column;
          else if (a.end.row == this.start.row) this.folds.unshift(a), this.start.row = a.start.row, this.start.column = a.start.column;
          else throw new Error("Trying to add fold to FoldRow that doesn't have a matching row");
          a.foldLine = this;
        }, $.prototype.containsRow = function(a) {
          return a >= this.start.row && a <= this.end.row;
        }, $.prototype.walk = function(a, l, i) {
          var o = 0, r = this.folds, n, e, t, s = true;
          l == null && (l = this.end.row, i = this.end.column);
          for (var h = 0; h < r.length; h++) {
            if (n = r[h], e = n.range.compareStart(l, i), e == -1) {
              a(null, l, i, o, s);
              return;
            }
            if (t = a(null, n.start.row, n.start.column, o, s), t = !t && a(n.placeholder, n.start.row, n.start.column, o), t || e === 0) return;
            s = !n.sameRow, o = n.end.column;
          }
          a(null, l, i, o, s);
        }, $.prototype.getNextFoldTo = function(a, l) {
          for (var i, o, r = 0; r < this.folds.length; r++) {
            if (i = this.folds[r], o = i.range.compareEnd(a, l), o == -1) return {
              fold: i,
              kind: "after"
            };
            if (o === 0) return {
              fold: i,
              kind: "inside"
            };
          }
          return null;
        }, $.prototype.addRemoveChars = function(a, l, i) {
          var o = this.getNextFoldTo(a, l), r, n;
          if (o) {
            if (r = o.fold, o.kind == "inside" && r.start.column != l && r.start.row != a) window.console && window.console.log(a, l, r);
            else if (r.start.row == a) {
              n = this.folds;
              var e = n.indexOf(r);
              for (e === 0 && (this.start.column += i), e; e < n.length; e++) {
                if (r = n[e], r.start.column += i, !r.sameRow) return;
                r.end.column += i;
              }
              this.end.column += i;
            }
          }
        }, $.prototype.split = function(a, l) {
          var i = this.getNextFoldTo(a, l);
          if (!i || i.kind == "inside") return null;
          var o = i.fold, r = this.folds, n = this.foldData, e = r.indexOf(o), t = r[e - 1];
          this.end.row = t.end.row, this.end.column = t.end.column, r = r.splice(e, r.length - e);
          var s = new $(n, r);
          return n.splice(n.indexOf(this) + 1, 0, s), s;
        }, $.prototype.merge = function(a) {
          for (var l = a.folds, i = 0; i < l.length; i++) this.addFold(l[i]);
          var o = this.foldData;
          o.splice(o.indexOf(a), 1);
        }, $.prototype.toString = function() {
          var a = [
            this.range.toString() + ": ["
          ];
          return this.folds.forEach(function(l) {
            a.push("  " + l.toString());
          }), a.push("]"), a.join(`
`);
        }, $.prototype.idxToPosition = function(a) {
          for (var l = 0, i = 0; i < this.folds.length; i++) {
            var o = this.folds[i];
            if (a -= o.start.column - l, a < 0) return {
              row: o.start.row,
              column: o.start.column + a
            };
            if (a -= o.placeholder.length, a < 0) return o.start;
            l = o.end.column;
          }
          return {
            row: this.end.row,
            column: this.end.column + a
          };
        }, $;
      })();
      _.FoldLine = M;
    }), ace.define("ace/range_list", [
      "require",
      "exports",
      "module",
      "ace/range"
    ], function(A, _, N) {
      var L = A("./range").Range, M = L.comparePoints, $ = (function() {
        function a() {
          this.ranges = [], this.$bias = 1;
        }
        return a.prototype.pointIndex = function(l, i, o) {
          for (var r = this.ranges, n = o || 0; n < r.length; n++) {
            var e = r[n], t = M(l, e.end);
            if (!(t > 0)) {
              var s = M(l, e.start);
              return t === 0 ? i && s !== 0 ? -n - 2 : n : s > 0 || s === 0 && !i ? n : -n - 1;
            }
          }
          return -n - 1;
        }, a.prototype.add = function(l) {
          var i = !l.isEmpty(), o = this.pointIndex(l.start, i);
          o < 0 && (o = -o - 1);
          var r = this.pointIndex(l.end, i, o);
          return r < 0 ? r = -r - 1 : r++, this.ranges.splice(o, r - o, l);
        }, a.prototype.addList = function(l) {
          for (var i = [], o = l.length; o--; ) i.push.apply(i, this.add(l[o]));
          return i;
        }, a.prototype.substractPoint = function(l) {
          var i = this.pointIndex(l);
          if (i >= 0) return this.ranges.splice(i, 1);
        }, a.prototype.merge = function() {
          var l = [], i = this.ranges;
          i = i.sort(function(t, s) {
            return M(t.start, s.start);
          });
          for (var o = i[0], r, n = 1; n < i.length; n++) {
            r = o, o = i[n];
            var e = M(r.end, o.start);
            e < 0 || e == 0 && !r.isEmpty() && !o.isEmpty() || (M(r.end, o.end) < 0 && (r.end.row = o.end.row, r.end.column = o.end.column), i.splice(n, 1), l.push(o), o = r, n--);
          }
          return this.ranges = i, l;
        }, a.prototype.contains = function(l, i) {
          return this.pointIndex({
            row: l,
            column: i
          }) >= 0;
        }, a.prototype.containsPoint = function(l) {
          return this.pointIndex(l) >= 0;
        }, a.prototype.rangeAtPoint = function(l) {
          var i = this.pointIndex(l);
          if (i >= 0) return this.ranges[i];
        }, a.prototype.clipRows = function(l, i) {
          var o = this.ranges;
          if (o[0].start.row > i || o[o.length - 1].start.row < l) return [];
          var r = this.pointIndex({
            row: l,
            column: 0
          });
          r < 0 && (r = -r - 1);
          var n = this.pointIndex({
            row: i,
            column: 0
          }, r);
          n < 0 && (n = -n - 1);
          for (var e = [], t = r; t < n; t++) e.push(o[t]);
          return e;
        }, a.prototype.removeAll = function() {
          return this.ranges.splice(0, this.ranges.length);
        }, a.prototype.attach = function(l) {
          this.session && this.detach(), this.session = l, this.onChange = this.$onChange.bind(this), this.session.on("change", this.onChange);
        }, a.prototype.detach = function() {
          this.session && (this.session.removeListener("change", this.onChange), this.session = null);
        }, a.prototype.$onChange = function(l) {
          for (var i = l.start, o = l.end, r = i.row, n = o.row, e = this.ranges, t = 0, s = e.length; t < s; t++) {
            var h = e[t];
            if (h.end.row >= r) break;
          }
          if (l.action == "insert") for (var u = n - r, S = -i.column + o.column; t < s; t++) {
            var h = e[t];
            if (h.start.row > r) break;
            if (h.start.row == r && h.start.column >= i.column && (h.start.column == i.column && this.$bias <= 0 || (h.start.column += S, h.start.row += u)), h.end.row == r && h.end.column >= i.column) {
              if (h.end.column == i.column && this.$bias < 0) continue;
              h.end.column == i.column && S > 0 && t < s - 1 && h.end.column > h.start.column && h.end.column == e[t + 1].start.column && (h.end.column -= S), h.end.column += S, h.end.row += u;
            }
          }
          else for (var u = r - n, S = i.column - o.column; t < s; t++) {
            var h = e[t];
            if (h.start.row > n) break;
            h.end.row < n && (r < h.end.row || r == h.end.row && i.column < h.end.column) ? (h.end.row = r, h.end.column = i.column) : h.end.row == n ? h.end.column <= o.column ? (u || h.end.column > i.column) && (h.end.column = i.column, h.end.row = i.row) : (h.end.column += S, h.end.row += u) : h.end.row > n && (h.end.row += u), h.start.row < n && (r < h.start.row || r == h.start.row && i.column < h.start.column) ? (h.start.row = r, h.start.column = i.column) : h.start.row == n ? h.start.column <= o.column ? (u || h.start.column > i.column) && (h.start.column = i.column, h.start.row = i.row) : (h.start.column += S, h.start.row += u) : h.start.row > n && (h.start.row += u);
          }
          if (u != 0 && t < s) for (; t < s; t++) {
            var h = e[t];
            h.start.row += u, h.end.row += u;
          }
        }, a;
      })();
      $.prototype.comparePoints = M, _.RangeList = $;
    }), ace.define("ace/edit_session/fold", [
      "require",
      "exports",
      "module",
      "ace/range_list"
    ], function(A, _, N) {
      var L = this && this.__extends || /* @__PURE__ */ (function() {
        var r = function(n, e) {
          return r = Object.setPrototypeOf || {
            __proto__: []
          } instanceof Array && function(t, s) {
            t.__proto__ = s;
          } || function(t, s) {
            for (var h in s) Object.prototype.hasOwnProperty.call(s, h) && (t[h] = s[h]);
          }, r(n, e);
        };
        return function(n, e) {
          if (typeof e != "function" && e !== null) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
          r(n, e);
          function t() {
            this.constructor = n;
          }
          n.prototype = e === null ? Object.create(e) : (t.prototype = e.prototype, new t());
        };
      })(), M = A("../range_list").RangeList, $ = (function(r) {
        L(n, r);
        function n(e, t) {
          var s = r.call(this) || this;
          return s.foldLine = null, s.placeholder = t, s.range = e, s.start = e.start, s.end = e.end, s.sameRow = e.start.row == e.end.row, s.subFolds = s.ranges = [], s;
        }
        return n.prototype.toString = function() {
          return '"' + this.placeholder + '" ' + this.range.toString();
        }, n.prototype.setFoldLine = function(e) {
          this.foldLine = e, this.subFolds.forEach(function(t) {
            t.setFoldLine(e);
          });
        }, n.prototype.clone = function() {
          var e = this.range.clone(), t = new n(e, this.placeholder);
          return this.subFolds.forEach(function(s) {
            t.subFolds.push(s.clone());
          }), t.collapseChildren = this.collapseChildren, t;
        }, n.prototype.addSubFold = function(e) {
          if (!this.range.isEqual(e)) {
            l(e, this.start);
            for (var S = e.start.row, b = e.start.column, t = 0, s = -1; t < this.subFolds.length && (s = this.subFolds[t].range.compare(S, b), s == 1); t++) ;
            var h = this.subFolds[t], u = 0;
            if (s == 0) {
              if (h.range.containsRange(e)) return h.addSubFold(e);
              u = 1;
            }
            for (var S = e.range.end.row, b = e.range.end.column, f = t, s = -1; f < this.subFolds.length && (s = this.subFolds[f].range.compare(S, b), s == 1); f++) ;
            s == 0 && f++;
            for (var c = this.subFolds.splice(t, f - t, e), w = s == 0 ? c.length - 1 : c.length, C = u; C < w; C++) e.addSubFold(c[C]);
            return e.setFoldLine(this.foldLine), e;
          }
        }, n.prototype.restoreRange = function(e) {
          return o(e, this.start);
        }, n;
      })(M);
      function a(r, n) {
        r.row -= n.row, r.row == 0 && (r.column -= n.column);
      }
      function l(r, n) {
        a(r.start, n), a(r.end, n);
      }
      function i(r, n) {
        r.row == 0 && (r.column += n.column), r.row += n.row;
      }
      function o(r, n) {
        i(r.start, n), i(r.end, n);
      }
      _.Fold = $;
    }), ace.define("ace/edit_session/folding", [
      "require",
      "exports",
      "module",
      "ace/range",
      "ace/edit_session/fold_line",
      "ace/edit_session/fold",
      "ace/token_iterator",
      "ace/mouse/mouse_event"
    ], function(A, _, N) {
      var L = A("../range").Range, M = A("./fold_line").FoldLine, $ = A("./fold").Fold, a = A("../token_iterator").TokenIterator, l = A("../mouse/mouse_event").MouseEvent;
      function i() {
        this.getFoldAt = function(o, r, n) {
          var e = this.getFoldLine(o);
          if (!e) return null;
          for (var t = e.folds, s = 0; s < t.length; s++) {
            var h = t[s].range;
            if (h.contains(o, r)) {
              if (n == 1 && h.isEnd(o, r) && !h.isEmpty()) continue;
              if (n == -1 && h.isStart(o, r) && !h.isEmpty()) continue;
              return t[s];
            }
          }
        }, this.getFoldsInRange = function(o) {
          var r = o.start, n = o.end, e = this.$foldData, t = [];
          r.column += 1, n.column -= 1;
          for (var s = 0; s < e.length; s++) {
            var h = e[s].range.compareRange(o);
            if (h != 2) {
              if (h == -2) break;
              for (var u = e[s].folds, S = 0; S < u.length; S++) {
                var b = u[S];
                if (h = b.range.compareRange(o), h == -2) break;
                if (h == 2) continue;
                if (h == 42) break;
                t.push(b);
              }
            }
          }
          return r.column -= 1, n.column += 1, t;
        }, this.getFoldsInRangeList = function(o) {
          if (Array.isArray(o)) {
            var r = [];
            o.forEach(function(n) {
              r = r.concat(this.getFoldsInRange(n));
            }, this);
          } else var r = this.getFoldsInRange(o);
          return r;
        }, this.getAllFolds = function() {
          for (var o = [], r = this.$foldData, n = 0; n < r.length; n++) for (var e = 0; e < r[n].folds.length; e++) o.push(r[n].folds[e]);
          return o;
        }, this.getFoldStringAt = function(o, r, n, e) {
          if (e = e || this.getFoldLine(o), !e) return null;
          for (var t = {
            end: {
              column: 0
            }
          }, s, h, u = 0; u < e.folds.length; u++) {
            h = e.folds[u];
            var S = h.range.compareEnd(o, r);
            if (S == -1) {
              s = this.getLine(h.start.row).substring(t.end.column, h.start.column);
              break;
            } else if (S === 0) return null;
            t = h;
          }
          return s || (s = this.getLine(h.start.row).substring(t.end.column)), n == -1 ? s.substring(0, r - t.end.column) : n == 1 ? s.substring(r - t.end.column) : s;
        }, this.getFoldLine = function(o, r) {
          var n = this.$foldData, e = 0;
          for (r && (e = n.indexOf(r)), e == -1 && (e = 0), e; e < n.length; e++) {
            var t = n[e];
            if (t.start.row <= o && t.end.row >= o) return t;
            if (t.end.row > o) return null;
          }
          return null;
        }, this.getNextFoldLine = function(o, r) {
          var n = this.$foldData, e = 0;
          for (r && (e = n.indexOf(r)), e == -1 && (e = 0), e; e < n.length; e++) {
            var t = n[e];
            if (t.end.row >= o) return t;
          }
          return null;
        }, this.getFoldedRowCount = function(o, r) {
          for (var n = this.$foldData, e = r - o + 1, t = 0; t < n.length; t++) {
            var s = n[t], h = s.end.row, u = s.start.row;
            if (h >= r) {
              u < r && (u >= o ? e -= r - u : e = 0);
              break;
            } else h >= o && (u >= o ? e -= h - u : e -= h - o + 1);
          }
          return e;
        }, this.$addFoldLine = function(o) {
          return this.$foldData.push(o), this.$foldData.sort(function(r, n) {
            return r.start.row - n.start.row;
          }), o;
        }, this.addFold = function(o, r) {
          var n = this.$foldData, e = false, t;
          o instanceof $ ? t = o : (t = new $(r, o), t.collapseChildren = r.collapseChildren), this.$clipRangeToDocument(t.range);
          var s = t.start.row, h = t.start.column, u = t.end.row, S = t.end.column, b = this.getFoldAt(s, h, 1), f = this.getFoldAt(u, S, -1);
          if (b && f == b) return b.addSubFold(t);
          b && !b.range.isStart(s, h) && this.removeFold(b), f && !f.range.isEnd(u, S) && this.removeFold(f);
          var c = this.getFoldsInRange(t.range);
          c.length > 0 && (this.removeFolds(c), t.collapseChildren || c.forEach(function(v) {
            t.addSubFold(v);
          }));
          for (var w = 0; w < n.length; w++) {
            var C = n[w];
            if (u == C.start.row) {
              C.addFold(t), e = true;
              break;
            } else if (s == C.end.row) {
              if (C.addFold(t), e = true, !t.sameRow) {
                var p = n[w + 1];
                if (p && p.start.row == u) {
                  C.merge(p);
                  break;
                }
              }
              break;
            } else if (u <= C.start.row) break;
          }
          return e || (C = this.$addFoldLine(new M(this.$foldData, t))), this.$useWrapMode ? this.$updateWrapData(C.start.row, C.start.row) : this.$updateRowLengthCache(C.start.row, C.start.row), this.$modified = true, this._signal("changeFold", {
            data: t,
            action: "add"
          }), t;
        }, this.addFolds = function(o) {
          o.forEach(function(r) {
            this.addFold(r);
          }, this);
        }, this.removeFold = function(o) {
          var r = o.foldLine, n = r.start.row, e = r.end.row, t = this.$foldData, s = r.folds;
          if (s.length == 1) t.splice(t.indexOf(r), 1);
          else if (r.range.isEnd(o.end.row, o.end.column)) s.pop(), r.end.row = s[s.length - 1].end.row, r.end.column = s[s.length - 1].end.column;
          else if (r.range.isStart(o.start.row, o.start.column)) s.shift(), r.start.row = s[0].start.row, r.start.column = s[0].start.column;
          else if (o.sameRow) s.splice(s.indexOf(o), 1);
          else {
            var h = r.split(o.start.row, o.start.column);
            s = h.folds, s.shift(), h.start.row = s[0].start.row, h.start.column = s[0].start.column;
          }
          this.$updating || (this.$useWrapMode ? this.$updateWrapData(n, e) : this.$updateRowLengthCache(n, e)), this.$modified = true, this._signal("changeFold", {
            data: o,
            action: "remove"
          });
        }, this.removeFolds = function(o) {
          for (var r = [], n = 0; n < o.length; n++) r.push(o[n]);
          r.forEach(function(e) {
            this.removeFold(e);
          }, this), this.$modified = true;
        }, this.expandFold = function(o) {
          this.removeFold(o), o.subFolds.forEach(function(r) {
            o.restoreRange(r), this.addFold(r);
          }, this), o.collapseChildren > 0 && this.foldAll(o.start.row + 1, o.end.row, o.collapseChildren - 1), o.subFolds = [];
        }, this.expandFolds = function(o) {
          o.forEach(function(r) {
            this.expandFold(r);
          }, this);
        }, this.unfold = function(o, r) {
          var n, e;
          if (o == null) n = new L(0, 0, this.getLength(), 0), r == null && (r = true);
          else if (typeof o == "number") n = new L(o, 0, o, this.getLine(o).length);
          else if ("row" in o) n = L.fromPoints(o, o);
          else {
            if (Array.isArray(o)) return e = [], o.forEach(function(s) {
              e = e.concat(this.unfold(s));
            }, this), e;
            n = o;
          }
          e = this.getFoldsInRangeList(n);
          for (var t = e; e.length == 1 && L.comparePoints(e[0].start, n.start) < 0 && L.comparePoints(e[0].end, n.end) > 0; ) this.expandFolds(e), e = this.getFoldsInRangeList(n);
          if (r != false ? this.removeFolds(e) : this.expandFolds(e), t.length) return t;
        }, this.isRowFolded = function(o, r) {
          return !!this.getFoldLine(o, r);
        }, this.getRowFoldEnd = function(o, r) {
          var n = this.getFoldLine(o, r);
          return n ? n.end.row : o;
        }, this.getRowFoldStart = function(o, r) {
          var n = this.getFoldLine(o, r);
          return n ? n.start.row : o;
        }, this.getFoldDisplayLine = function(o, r, n, e, t) {
          e == null && (e = o.start.row), t == null && (t = 0), r == null && (r = o.end.row), n == null && (n = this.getLine(r).length);
          var s = this.doc, h = "";
          return o.walk(function(u, S, b, f) {
            if (!(S < e)) {
              if (S == e) {
                if (b < t) return;
                f = Math.max(t, f);
              }
              u != null ? h += u : h += s.getLine(S).substring(f, b);
            }
          }, r, n), h;
        }, this.getDisplayLine = function(o, r, n, e) {
          var t = this.getFoldLine(o);
          if (t) return this.getFoldDisplayLine(t, o, r, n, e);
          var s;
          return s = this.doc.getLine(o), s.substring(e || 0, r || s.length);
        }, this.$cloneFoldData = function() {
          var o = [];
          return o = this.$foldData.map(function(r) {
            var n = r.folds.map(function(e) {
              return e.clone();
            });
            return new M(o, n);
          }), o;
        }, this.toggleFold = function(o) {
          var r = this.selection, n = r.getRange(), e, t;
          if (n.isEmpty()) {
            var s = n.start;
            if (e = this.getFoldAt(s.row, s.column), e) {
              this.expandFold(e);
              return;
            } else if (o) {
              var h = this.getFoldLine(s.row);
              h && this.expandFolds(h.folds);
              return;
            } else (t = this.findMatchingBracket(s)) ? n.comparePoint(t) == 1 ? n.end = t : (n.start = t, n.start.column++, n.end.column--) : (t = this.findMatchingBracket({
              row: s.row,
              column: s.column + 1
            })) ? (n.comparePoint(t) == 1 ? n.end = t : n.start = t, n.start.column++) : n = this.getCommentFoldRange(s.row, s.column) || n;
          } else {
            var u = this.getFoldsInRange(n);
            if (o && u.length) {
              this.expandFolds(u);
              return;
            } else u.length == 1 && (e = u[0]);
          }
          if (e || (e = this.getFoldAt(n.start.row, n.start.column)), e && e.range.toString() == n.toString()) {
            this.expandFold(e);
            return;
          }
          var S = "...";
          if (!n.isMultiLine()) {
            if (S = this.getTextRange(n), S.length < 4) return;
            S = S.trim().substring(0, 2) + "..";
          }
          this.addFold(S, n);
        }, this.getCommentFoldRange = function(o, r, n) {
          var e = new a(this, o, r), t = e.getCurrentToken(), s = t && t.type;
          if (t && /^comment|string/.test(s)) {
            s = s.match(/comment|string/)[0], s == "comment" && (s += "|doc-start|\\.doc");
            var h = new RegExp(s), u = new L();
            if (n != 1) {
              do
                t = e.stepBackward();
              while (t && h.test(t.type));
              t = e.stepForward();
            }
            u.start.row = e.getCurrentTokenRow(), u.start.column = e.getCurrentTokenColumn() + t.value.length, e = new a(this, o, r);
            var S = this.getState(e.$row);
            if (n != -1) {
              var b = -1;
              do
                if (t = e.stepForward(), b == -1) {
                  var f = this.getState(e.$row);
                  S.toString() !== f.toString() && (b = e.$row);
                } else if (e.$row > b) break;
              while (t && h.test(t.type));
              t = e.stepBackward();
            } else t = e.getCurrentToken();
            return u.end.row = e.getCurrentTokenRow(), u.end.column = e.getCurrentTokenColumn(), u.start.row == u.end.row && u.start.column > u.end.column ? void 0 : u;
          }
        }, this.foldAll = function(o, r, n, e) {
          n == null && (n = 1e5);
          var t = this.foldWidgets;
          if (t) {
            r = r || this.getLength(), o = o || 0;
            for (var s = o; s < r; s++) if (t[s] == null && (t[s] = this.getFoldWidget(s)), t[s] == "start" && !(e && !e(s))) {
              var h = this.getFoldWidgetRange(s);
              h && h.isMultiLine() && h.end.row <= r && h.start.row >= o && (s = h.end.row, h.collapseChildren = n, this.addFold("...", h));
            }
          }
        }, this.foldToLevel = function(o) {
          for (this.foldAll(); o-- > 0; ) this.unfold(null, false);
        }, this.foldAllComments = function() {
          var o = this;
          this.foldAll(null, null, null, function(r) {
            for (var n = o.getTokens(r), e = 0; e < n.length; e++) {
              var t = n[e];
              if (!(t.type == "text" && /^\s+$/.test(t.value))) return !!/comment/.test(t.type);
            }
          });
        }, this.$foldStyles = {
          manual: 1,
          markbegin: 1,
          markbeginend: 1
        }, this.$foldStyle = "markbegin", this.setFoldStyle = function(o) {
          if (!this.$foldStyles[o]) throw new Error("invalid fold style: " + o + "[" + Object.keys(this.$foldStyles).join(", ") + "]");
          if (this.$foldStyle != o) {
            this.$foldStyle = o, o == "manual" && this.unfold();
            var r = this.$foldMode;
            this.$setFolding(null), this.$setFolding(r);
          }
        }, this.$setFolding = function(o) {
          if (this.$foldMode != o) {
            if (this.$foldMode = o, this.off("change", this.$updateFoldWidgets), this.off("tokenizerUpdate", this.$tokenizerUpdateFoldWidgets), this._signal("changeAnnotation"), !o || this.$foldStyle == "manual") {
              this.foldWidgets = null;
              return;
            }
            this.foldWidgets = [], this.getFoldWidget = o.getFoldWidget.bind(o, this, this.$foldStyle), this.getFoldWidgetRange = o.getFoldWidgetRange.bind(o, this, this.$foldStyle), this.$updateFoldWidgets = this.updateFoldWidgets.bind(this), this.$tokenizerUpdateFoldWidgets = this.tokenizerUpdateFoldWidgets.bind(this), this.on("change", this.$updateFoldWidgets), this.on("tokenizerUpdate", this.$tokenizerUpdateFoldWidgets);
          }
        }, this.getParentFoldRangeData = function(o, r) {
          var n = this.foldWidgets;
          if (!n || r && n[o]) return {};
          for (var e = o - 1, t; e >= 0; ) {
            var s = n[e];
            if (s == null && (s = n[e] = this.getFoldWidget(e)), s == "start") {
              var h = this.getFoldWidgetRange(e);
              if (t || (t = h), h && h.end.row >= o) break;
            }
            e--;
          }
          return {
            range: e !== -1 && h,
            firstRange: t
          };
        }, this.onFoldWidgetClick = function(o, r) {
          r instanceof l && (r = r.domEvent);
          var n = {
            children: r.shiftKey,
            all: r.ctrlKey || r.metaKey,
            siblings: r.altKey
          }, e = this.$toggleFoldWidget(o, n);
          if (!e) {
            var t = r.target || r.srcElement;
            t && /ace_fold-widget/.test(t.className) && (t.className += " ace_invalid");
          }
        }, this.$toggleFoldWidget = function(o, r) {
          if (this.getFoldWidget) {
            var n = this.getFoldWidget(o), e = this.getLine(o), t = n === "end" ? -1 : 1, s = this.getFoldAt(o, t === -1 ? 0 : e.length, t);
            if (s) return r.children || r.all ? this.removeFold(s) : this.expandFold(s), s;
            var h = this.getFoldWidgetRange(o, true);
            if (h && !h.isMultiLine() && (s = this.getFoldAt(h.start.row, h.start.column, 1), s && h.isEqual(s.range))) return this.removeFold(s), s;
            if (r.siblings) {
              var u = this.getParentFoldRangeData(o);
              if (u.range) var S = u.range.start.row + 1, b = u.range.end.row;
              this.foldAll(S, b, r.all ? 1e4 : 0);
            } else r.children ? (b = h ? h.end.row : this.getLength(), this.foldAll(o + 1, b, r.all ? 1e4 : 0)) : h && (r.all && (h.collapseChildren = 1e4), this.addFold("...", h));
            return h;
          }
        }, this.toggleFoldWidget = function(o) {
          var r = this.selection.getCursor().row;
          r = this.getRowFoldStart(r);
          var n = this.$toggleFoldWidget(r, {});
          if (!n) {
            var e = this.getParentFoldRangeData(r, true);
            if (n = e.range || e.firstRange, n) {
              r = n.start.row;
              var t = this.getFoldAt(r, this.getLine(r).length, 1);
              t ? this.removeFold(t) : this.addFold("...", n);
            }
          }
        }, this.updateFoldWidgets = function(o) {
          var r = o.start.row, n = o.end.row - r;
          if (n === 0) this.foldWidgets[r] = null;
          else if (o.action == "remove") this.foldWidgets.splice(r, n + 1, null);
          else {
            var e = Array(n + 1);
            e.unshift(r, 1), this.foldWidgets.splice.apply(this.foldWidgets, e);
          }
        }, this.tokenizerUpdateFoldWidgets = function(o) {
          var r = o.data;
          r.first != r.last && this.foldWidgets.length > r.first && this.foldWidgets.splice(r.first, this.foldWidgets.length);
        };
      }
      _.Folding = i;
    }), ace.define("ace/edit_session/bracket_match", [
      "require",
      "exports",
      "module",
      "ace/token_iterator",
      "ace/range"
    ], function(A, _, N) {
      var L = A("../token_iterator").TokenIterator, M = A("../range").Range;
      function $() {
        this.findMatchingBracket = function(a, l) {
          if (a.column == 0) return null;
          var i = l || this.getLine(a.row).charAt(a.column - 1);
          if (i == "") return null;
          var o = i.match(/([\(\[\{])|([\)\]\}])/);
          return o ? o[1] ? this.$findClosingBracket(o[1], a) : this.$findOpeningBracket(o[2], a) : null;
        }, this.getBracketRange = function(a) {
          var l = this.getLine(a.row), i = true, o, r = l.charAt(a.column - 1), n = r && r.match(/([\(\[\{])|([\)\]\}])/);
          if (n || (r = l.charAt(a.column), a = {
            row: a.row,
            column: a.column + 1
          }, n = r && r.match(/([\(\[\{])|([\)\]\}])/), i = false), !n) return null;
          if (n[1]) {
            var e = this.$findClosingBracket(n[1], a);
            if (!e) return null;
            o = M.fromPoints(a, e), i || (o.end.column++, o.start.column--), o.cursor = o.end;
          } else {
            var e = this.$findOpeningBracket(n[2], a);
            if (!e) return null;
            o = M.fromPoints(e, a), i || (o.start.column++, o.end.column--), o.cursor = o.start;
          }
          return o;
        }, this.getMatchingBracketRanges = function(a, l) {
          var i = this.getLine(a.row), o = /([\(\[\{])|([\)\]\}])/, r = !l && i.charAt(a.column - 1), n = r && r.match(o);
          if (n || (r = (l === void 0 || l) && i.charAt(a.column), a = {
            row: a.row,
            column: a.column + 1
          }, n = r && r.match(o)), !n) return null;
          var e = new M(a.row, a.column - 1, a.row, a.column), t = n[1] ? this.$findClosingBracket(n[1], a) : this.$findOpeningBracket(n[2], a);
          if (!t) return [
            e
          ];
          var s = new M(t.row, t.column, t.row, t.column + 1);
          return [
            e,
            s
          ];
        }, this.$brackets = {
          ")": "(",
          "(": ")",
          "]": "[",
          "[": "]",
          "{": "}",
          "}": "{",
          "<": ">",
          ">": "<"
        }, this.$findOpeningBracket = function(a, l, i) {
          var o = this.$brackets[a], r = 1, n = new L(this, l.row, l.column), e = n.getCurrentToken();
          if (e || (e = n.stepForward()), !!e) {
            i || (i = new RegExp("(\\.?" + e.type.replace(".", "\\.").replace("rparen", ".paren").replace(/\b(?:end)\b/, "(?:start|begin|end)").replace(/-close\b/, "-(close|open)") + ")+"));
            for (var t = l.column - n.getCurrentTokenColumn() - 2, s = e.value; ; ) {
              for (; t >= 0; ) {
                var h = s.charAt(t);
                if (h == o) {
                  if (r -= 1, r == 0) return {
                    row: n.getCurrentTokenRow(),
                    column: t + n.getCurrentTokenColumn()
                  };
                } else h == a && (r += 1);
                t -= 1;
              }
              do
                e = n.stepBackward();
              while (e && !i.test(e.type));
              if (e == null) break;
              s = e.value, t = s.length - 1;
            }
            return null;
          }
        }, this.$findClosingBracket = function(a, l, i) {
          var o = this.$brackets[a], r = 1, n = new L(this, l.row, l.column), e = n.getCurrentToken();
          if (e || (e = n.stepForward()), !!e) {
            i || (i = new RegExp("(\\.?" + e.type.replace(".", "\\.").replace("lparen", ".paren").replace(/\b(?:start|begin)\b/, "(?:start|begin|end)").replace(/-open\b/, "-(close|open)") + ")+"));
            for (var t = l.column - n.getCurrentTokenColumn(); ; ) {
              for (var s = e.value, h = s.length; t < h; ) {
                var u = s.charAt(t);
                if (u == o) {
                  if (r -= 1, r == 0) return {
                    row: n.getCurrentTokenRow(),
                    column: t + n.getCurrentTokenColumn()
                  };
                } else u == a && (r += 1);
                t += 1;
              }
              do
                e = n.stepForward();
              while (e && !i.test(e.type));
              if (e == null) break;
              t = 0;
            }
            return null;
          }
        }, this.getMatchingTags = function(a) {
          var l = new L(this, a.row, a.column), i = this.$findTagName(l);
          if (i) {
            var o = l.stepBackward();
            return o.value === "<" ? this.$findClosingTag(l, i) : this.$findOpeningTag(l, i);
          }
        }, this.$findTagName = function(a) {
          var l = a.getCurrentToken(), i = false, o = false;
          if (l && l.type.indexOf("tag-name") === -1) do
            o ? l = a.stepBackward() : l = a.stepForward(), l && (l.value === "/>" ? o = true : l.type.indexOf("tag-name") !== -1 && (i = true));
          while (l && !i);
          return l;
        }, this.$findClosingTag = function(a, l) {
          var i, o = l.value, r = l.value, n = 0, e = new M(a.getCurrentTokenRow(), a.getCurrentTokenColumn(), a.getCurrentTokenRow(), a.getCurrentTokenColumn() + 1);
          l = a.stepForward();
          var t = new M(a.getCurrentTokenRow(), a.getCurrentTokenColumn(), a.getCurrentTokenRow(), a.getCurrentTokenColumn() + l.value.length), s = false;
          do {
            if (i = l, i.type.indexOf("tag-close") !== -1 && !s) {
              var h = new M(a.getCurrentTokenRow(), a.getCurrentTokenColumn(), a.getCurrentTokenRow(), a.getCurrentTokenColumn() + 1);
              s = true;
            }
            if (l = a.stepForward(), l) {
              if (l.value === ">" && !s) {
                var h = new M(a.getCurrentTokenRow(), a.getCurrentTokenColumn(), a.getCurrentTokenRow(), a.getCurrentTokenColumn() + 1);
                s = true;
              }
              if (l.type.indexOf("tag-name") !== -1) {
                if (o = l.value, r === o) {
                  if (i.value === "<") n++;
                  else if (i.value === "</" && (n--, n < 0)) {
                    a.stepBackward();
                    var u = new M(a.getCurrentTokenRow(), a.getCurrentTokenColumn(), a.getCurrentTokenRow(), a.getCurrentTokenColumn() + 2);
                    l = a.stepForward();
                    var S = new M(a.getCurrentTokenRow(), a.getCurrentTokenColumn(), a.getCurrentTokenRow(), a.getCurrentTokenColumn() + l.value.length);
                    if (l.type.indexOf("tag-close") === -1 && (l = a.stepForward()), l && l.value === ">") var b = new M(a.getCurrentTokenRow(), a.getCurrentTokenColumn(), a.getCurrentTokenRow(), a.getCurrentTokenColumn() + 1);
                    else return;
                  }
                }
              } else if (r === o && l.value === "/>" && (n--, n < 0)) var u = new M(a.getCurrentTokenRow(), a.getCurrentTokenColumn(), a.getCurrentTokenRow(), a.getCurrentTokenColumn() + 2), S = u, b = S, h = new M(t.end.row, t.end.column, t.end.row, t.end.column + 1);
            }
          } while (l && n >= 0);
          if (e && h && u && b && t && S) return {
            openTag: new M(e.start.row, e.start.column, h.end.row, h.end.column),
            closeTag: new M(u.start.row, u.start.column, b.end.row, b.end.column),
            openTagName: t,
            closeTagName: S
          };
        }, this.$findOpeningTag = function(a, l) {
          var i = a.getCurrentToken(), o = l.value, r = 0, n = a.getCurrentTokenRow(), e = a.getCurrentTokenColumn(), t = e + 2, s = new M(n, e, n, t);
          a.stepForward();
          var h = new M(a.getCurrentTokenRow(), a.getCurrentTokenColumn(), a.getCurrentTokenRow(), a.getCurrentTokenColumn() + l.value.length);
          if (l.type.indexOf("tag-close") === -1 && (l = a.stepForward()), !(!l || l.value !== ">")) {
            var u = new M(a.getCurrentTokenRow(), a.getCurrentTokenColumn(), a.getCurrentTokenRow(), a.getCurrentTokenColumn() + 1);
            a.stepBackward(), a.stepBackward();
            do
              if (l = i, n = a.getCurrentTokenRow(), e = a.getCurrentTokenColumn(), t = e + l.value.length, i = a.stepBackward(), l) {
                if (l.type.indexOf("tag-name") !== -1) {
                  if (o === l.value) if (i.value === "<") {
                    if (r++, r > 0) {
                      var S = new M(n, e, n, t), b = new M(a.getCurrentTokenRow(), a.getCurrentTokenColumn(), a.getCurrentTokenRow(), a.getCurrentTokenColumn() + 1);
                      do
                        l = a.stepForward();
                      while (l && l.value !== ">");
                      var f = new M(a.getCurrentTokenRow(), a.getCurrentTokenColumn(), a.getCurrentTokenRow(), a.getCurrentTokenColumn() + 1);
                    }
                  } else i.value === "</" && r--;
                } else if (l.value === "/>") {
                  for (var c = 0, w = i; w; ) {
                    if (w.type.indexOf("tag-name") !== -1 && w.value === o) {
                      r--;
                      break;
                    } else if (w.value === "<") break;
                    w = a.stepBackward(), c++;
                  }
                  for (var C = 0; C < c; C++) a.stepForward();
                }
              }
            while (i && r <= 0);
            if (b && f && s && u && S && h) return {
              openTag: new M(b.start.row, b.start.column, f.end.row, f.end.column),
              closeTag: new M(s.start.row, s.start.column, u.end.row, u.end.column),
              openTagName: S,
              closeTagName: h
            };
          }
        };
      }
      _.BracketMatch = $;
    }), ace.define("ace/edit_session", [
      "require",
      "exports",
      "module",
      "ace/lib/oop",
      "ace/lib/lang",
      "ace/bidihandler",
      "ace/config",
      "ace/lib/event_emitter",
      "ace/selection",
      "ace/mode/text",
      "ace/range",
      "ace/line_widgets",
      "ace/document",
      "ace/background_tokenizer",
      "ace/search_highlight",
      "ace/undomanager",
      "ace/edit_session/folding",
      "ace/edit_session/bracket_match"
    ], function(A, _, N) {
      var L = A("./lib/oop"), M = A("./lib/lang"), $ = A("./bidihandler").BidiHandler, a = A("./config"), l = A("./lib/event_emitter").EventEmitter, i = A("./selection").Selection, o = A("./mode/text").Mode, r = A("./range").Range, n = A("./line_widgets").LineWidgets, e = A("./document").Document, t = A("./background_tokenizer").BackgroundTokenizer, s = A("./search_highlight").SearchHighlight, h = A("./undomanager").UndoManager, u = (function() {
        function m(y, g) {
          this.doc, this.$breakpoints = [], this.$decorations = [], this.$frontMarkers = {}, this.$backMarkers = {}, this.$markerId = 1, this.$undoSelect = true, this.$editor = null, this.prevOp = {}, this.$foldData = [], this.id = "session" + ++m.$uid, this.$foldData.toString = function() {
            return this.join(`
`);
          }, this.$gutterCustomWidgets = {}, this.bgTokenizer = new t(new o().getTokenizer(), this);
          var d = this;
          this.bgTokenizer.on("update", function(x) {
            d._signal("tokenizerUpdate", x);
          }), this.on("changeFold", this.onChangeFold.bind(this)), this.$onChange = this.onChange.bind(this), (typeof y != "object" || !y.getLine) && (y = new e(y)), this.setDocument(y), this.selection = new i(this), this.$onSelectionChange = this.onSelectionChange.bind(this), this.selection.on("changeSelection", this.$onSelectionChange), this.selection.on("changeCursor", this.$onSelectionChange), this.$bidiHandler = new $(this), a.resetOptions(this), this.setMode(g), a._signal("session", this), this.destroyed = false, this.$initOperationListeners();
        }
        return m.prototype.$initOperationListeners = function() {
          var y = this;
          this.curOp = null, this.on("change", function() {
            y.curOp || (y.startOperation(), y.curOp.selectionBefore = y.$lastSel), y.curOp.docChanged = true;
          }, true), this.on("changeSelection", function() {
            y.curOp || (y.startOperation(), y.curOp.selectionBefore = y.$lastSel), y.curOp.selectionChanged = true;
          }, true), this.$operationResetTimer = M.delayedCall(this.endOperation.bind(this, true));
        }, m.prototype.startOperation = function(y) {
          if (this.curOp) {
            if (!y || this.curOp.command) return;
            this.prevOp = this.curOp;
          }
          y || (y = {}), this.$operationResetTimer.schedule(), this.curOp = {
            command: y.command || {},
            args: y.args
          }, this.curOp.selectionBefore = this.selection.toJSON(), this._signal("startOperation", y);
        }, m.prototype.endOperation = function(y) {
          if (this.curOp) {
            if (y && y.returnValue === false) {
              this.curOp = null, this._signal("endOperation", y);
              return;
            }
            if (y == true && this.curOp.command && this.curOp.command.name == "mouse") return;
            var g = this.selection.toJSON();
            this.curOp.selectionAfter = g, this.$lastSel = this.selection.toJSON(), this.getUndoManager().addSelection(g), this._signal("beforeEndOperation"), this.prevOp = this.curOp, this.curOp = null, this._signal("endOperation", y);
          }
        }, m.prototype.setDocument = function(y) {
          this.doc && this.doc.off("change", this.$onChange), this.doc = y, y.on("change", this.$onChange, true), this.bgTokenizer.setDocument(this.getDocument()), this.resetCaches();
        }, m.prototype.getDocument = function() {
          return this.doc;
        }, Object.defineProperty(m.prototype, "widgetManager", {
          get: function() {
            var y = new n(this);
            return this.widgetManager = y, this.$editor && y.attach(this.$editor), y;
          },
          set: function(y) {
            Object.defineProperty(this, "widgetManager", {
              writable: true,
              enumerable: true,
              configurable: true,
              value: y
            });
          },
          enumerable: false,
          configurable: true
        }), m.prototype.$resetRowCache = function(y) {
          if (!y) {
            this.$docRowCache = [], this.$screenRowCache = [];
            return;
          }
          var g = this.$docRowCache.length, d = this.$getRowCacheIndex(this.$docRowCache, y) + 1;
          g > d && (this.$docRowCache.splice(d, g), this.$screenRowCache.splice(d, g));
        }, m.prototype.$getRowCacheIndex = function(y, g) {
          for (var d = 0, x = y.length - 1; d <= x; ) {
            var T = d + x >> 1, E = y[T];
            if (g > E) d = T + 1;
            else if (g < E) x = T - 1;
            else return T;
          }
          return d - 1;
        }, m.prototype.resetCaches = function() {
          this.$modified = true, this.$wrapData = [], this.$rowLengthCache = [], this.$resetRowCache(0), this.destroyed || this.bgTokenizer.start(0);
        }, m.prototype.onChangeFold = function(y) {
          var g = y.data;
          this.$resetRowCache(g.start.row);
        }, m.prototype.onChange = function(y) {
          this.$modified = true, this.$bidiHandler.onChange(y), this.$resetRowCache(y.start.row);
          var g = this.$updateInternalDataOnChange(y);
          !this.$fromUndo && this.$undoManager && (g && g.length && (this.$undoManager.add({
            action: "removeFolds",
            folds: g
          }, this.mergeUndoDeltas), this.mergeUndoDeltas = true), this.$undoManager.add(y, this.mergeUndoDeltas), this.mergeUndoDeltas = true, this.$informUndoManager.schedule()), this.bgTokenizer.$updateOnChange(y), this._signal("change", y);
        }, m.prototype.onSelectionChange = function() {
          this._signal("changeSelection");
        }, m.prototype.setValue = function(y) {
          this.doc.setValue(y), this.selection.moveTo(0, 0), this.$resetRowCache(0), this.setUndoManager(this.$undoManager), this.getUndoManager().reset();
        }, m.fromJSON = function(y) {
          typeof y == "string" && (y = JSON.parse(y));
          var g = new h();
          g.$undoStack = y.history.$undoStack, g.$redoStack = y.history.$redoStack, g.mark = y.history.mark, g.$rev = y.history.rev;
          var d = new m(y.value);
          return y.folds.forEach(function(x) {
            d.addFold("...", r.fromPoints(x.start, x.end));
          }), d.setAnnotations(y.annotations), d.setBreakpoints(y.breakpoints), d.setMode(y.mode), d.setScrollLeft(y.scrollLeft), d.setScrollTop(y.scrollTop), d.setUndoManager(g), d.selection.fromJSON(y.selection), d;
        }, m.prototype.toJSON = function() {
          return {
            annotations: this.$annotations,
            breakpoints: this.$breakpoints,
            folds: this.getAllFolds().map(function(y) {
              return y.range;
            }),
            history: this.getUndoManager(),
            mode: this.$mode.$id,
            scrollLeft: this.$scrollLeft,
            scrollTop: this.$scrollTop,
            selection: this.selection.toJSON(),
            value: this.doc.getValue()
          };
        }, m.prototype.toString = function() {
          return this.doc.getValue();
        }, m.prototype.getSelection = function() {
          return this.selection;
        }, m.prototype.getState = function(y) {
          return this.bgTokenizer.getState(y);
        }, m.prototype.getTokens = function(y) {
          return this.bgTokenizer.getTokens(y);
        }, m.prototype.getTokenAt = function(y, g) {
          var d = this.bgTokenizer.getTokens(y), x, T = 0;
          if (g == null) {
            var E = d.length - 1;
            T = this.getLine(y).length;
          } else for (var E = 0; E < d.length && (T += d[E].value.length, !(T >= g)); E++) ;
          return x = d[E], x ? (x.index = E, x.start = T - x.value.length, x) : null;
        }, m.prototype.setUndoManager = function(y) {
          if (this.$undoManager = y, this.$informUndoManager && this.$informUndoManager.cancel(), y) {
            var g = this;
            y.addSession(this), this.$syncInformUndoManager = function() {
              g.$informUndoManager.cancel(), g.mergeUndoDeltas = false;
            }, this.$informUndoManager = M.delayedCall(this.$syncInformUndoManager);
          } else this.$syncInformUndoManager = function() {
          };
        }, m.prototype.markUndoGroup = function() {
          this.$syncInformUndoManager && this.$syncInformUndoManager();
        }, m.prototype.getUndoManager = function() {
          return this.$undoManager || this.$defaultUndoManager;
        }, m.prototype.getTabString = function() {
          return this.getUseSoftTabs() ? M.stringRepeat(" ", this.getTabSize()) : "	";
        }, m.prototype.setUseSoftTabs = function(y) {
          this.setOption("useSoftTabs", y);
        }, m.prototype.getUseSoftTabs = function() {
          return this.$useSoftTabs && !this.$mode.$indentWithTabs;
        }, m.prototype.setTabSize = function(y) {
          this.setOption("tabSize", y);
        }, m.prototype.getTabSize = function() {
          return this.$tabSize;
        }, m.prototype.isTabStop = function(y) {
          return this.$useSoftTabs && y.column % this.$tabSize === 0;
        }, m.prototype.setNavigateWithinSoftTabs = function(y) {
          this.setOption("navigateWithinSoftTabs", y);
        }, m.prototype.getNavigateWithinSoftTabs = function() {
          return this.$navigateWithinSoftTabs;
        }, m.prototype.setOverwrite = function(y) {
          this.setOption("overwrite", y);
        }, m.prototype.getOverwrite = function() {
          return this.$overwrite;
        }, m.prototype.toggleOverwrite = function() {
          this.setOverwrite(!this.$overwrite);
        }, m.prototype.addGutterDecoration = function(y, g) {
          this.$decorations[y] || (this.$decorations[y] = ""), this.$decorations[y] += " " + g, this._signal("changeBreakpoint", {});
        }, m.prototype.removeGutterCustomWidget = function(y) {
          this.$editor && this.$editor.renderer.$gutterLayer.$removeCustomWidget(y);
        }, m.prototype.addGutterCustomWidget = function(y, g) {
          this.$editor && this.$editor.renderer.$gutterLayer.$addCustomWidget(y, g);
        }, m.prototype.removeGutterDecoration = function(y, g) {
          this.$decorations[y] = (this.$decorations[y] || "").replace(" " + g, ""), this._signal("changeBreakpoint", {});
        }, m.prototype.getBreakpoints = function() {
          return this.$breakpoints;
        }, m.prototype.setBreakpoints = function(y) {
          this.$breakpoints = [];
          for (var g = 0; g < y.length; g++) this.$breakpoints[y[g]] = "ace_breakpoint";
          this._signal("changeBreakpoint", {});
        }, m.prototype.clearBreakpoints = function() {
          this.$breakpoints = [], this._signal("changeBreakpoint", {});
        }, m.prototype.setBreakpoint = function(y, g) {
          g === void 0 && (g = "ace_breakpoint"), g ? this.$breakpoints[y] = g : delete this.$breakpoints[y], this._signal("changeBreakpoint", {});
        }, m.prototype.clearBreakpoint = function(y) {
          delete this.$breakpoints[y], this._signal("changeBreakpoint", {});
        }, m.prototype.addMarker = function(y, g, d, x) {
          var T = this.$markerId++, E = {
            range: y,
            type: d || "line",
            renderer: typeof d == "function" ? d : null,
            clazz: g,
            inFront: !!x,
            id: T
          };
          return x ? (this.$frontMarkers[T] = E, this._signal("changeFrontMarker")) : (this.$backMarkers[T] = E, this._signal("changeBackMarker")), T;
        }, m.prototype.addDynamicMarker = function(y, g) {
          if (y.update) {
            var d = this.$markerId++;
            return y.id = d, y.inFront = !!g, g ? (this.$frontMarkers[d] = y, this._signal("changeFrontMarker")) : (this.$backMarkers[d] = y, this._signal("changeBackMarker")), y;
          }
        }, m.prototype.removeMarker = function(y) {
          var g = this.$frontMarkers[y] || this.$backMarkers[y];
          if (g) {
            var d = g.inFront ? this.$frontMarkers : this.$backMarkers;
            delete d[y], this._signal(g.inFront ? "changeFrontMarker" : "changeBackMarker");
          }
        }, m.prototype.getMarkers = function(y) {
          return y ? this.$frontMarkers : this.$backMarkers;
        }, m.prototype.highlight = function(y) {
          if (!this.$searchHighlight) {
            var g = new s(null, "ace_selected-word", "text");
            this.$searchHighlight = this.addDynamicMarker(g);
          }
          this.$searchHighlight.setRegexp(y);
        }, m.prototype.highlightLines = function(y, g, d, x) {
          typeof g != "number" && (d = g, g = y), d || (d = "ace_step");
          var T = new r(y, 0, g, 1 / 0);
          return T.id = this.addMarker(T, d, "fullLine", x), T;
        }, m.prototype.setAnnotations = function(y) {
          this.$annotations = y, this._signal("changeAnnotation", {});
        }, m.prototype.getAnnotations = function() {
          return this.$annotations || [];
        }, m.prototype.clearAnnotations = function() {
          this.setAnnotations([]);
        }, m.prototype.$detectNewLine = function(y) {
          var g = y.match(/^.*?(\r?\n)/m);
          g ? this.$autoNewLine = g[1] : this.$autoNewLine = `
`;
        }, m.prototype.getWordRange = function(y, g) {
          var d = this.getLine(y), x = false;
          if (g > 0 && (x = !!d.charAt(g - 1).match(this.tokenRe)), x || (x = !!d.charAt(g).match(this.tokenRe)), x) var T = this.tokenRe;
          else if (/^\s+$/.test(d.slice(g - 1, g + 1))) var T = /\s/;
          else var T = this.nonTokenRe;
          var E = g;
          if (E > 0) {
            do
              E--;
            while (E >= 0 && d.charAt(E).match(T));
            E++;
          }
          for (var R = g; R < d.length && d.charAt(R).match(T); ) R++;
          return new r(y, E, y, R);
        }, m.prototype.getAWordRange = function(y, g) {
          for (var d = this.getWordRange(y, g), x = this.getLine(d.end.row); x.charAt(d.end.column).match(/[ \t]/); ) d.end.column += 1;
          return d;
        }, m.prototype.setNewLineMode = function(y) {
          this.doc.setNewLineMode(y);
        }, m.prototype.getNewLineMode = function() {
          return this.doc.getNewLineMode();
        }, m.prototype.setUseWorker = function(y) {
          this.setOption("useWorker", y);
        }, m.prototype.getUseWorker = function() {
          return this.$useWorker;
        }, m.prototype.onReloadTokenizer = function(y) {
          var g = y.data;
          this.bgTokenizer.start(g.first), this._signal("tokenizerUpdate", y);
        }, m.prototype.setMode = function(y, g) {
          if (y && typeof y == "object") {
            if (y.getTokenizer) return this.$onChangeMode(y);
            var d = y, x = d.path;
          } else x = y || "ace/mode/text";
          if (this.$modes["ace/mode/text"] || (this.$modes["ace/mode/text"] = new o()), this.$modes[x] && !d) {
            this.$onChangeMode(this.$modes[x]), g && g();
            return;
          }
          this.$modeId = x, a.loadModule([
            "mode",
            x
          ], function(T) {
            if (!this.destroyed) {
              if (this.$modeId !== x) return g && g();
              this.$modes[x] && !d ? this.$onChangeMode(this.$modes[x]) : T && T.Mode && (T = new T.Mode(d), d || (this.$modes[x] = T, T.$id = x), this.$onChangeMode(T)), g && g();
            }
          }.bind(this)), this.$mode || this.$onChangeMode(this.$modes["ace/mode/text"], true);
        }, m.prototype.$onChangeMode = function(y, g) {
          if (g || (this.$modeId = y.$id), this.$mode !== y) {
            var d = this.$mode;
            this.$mode = y, this.$stopWorker(), this.$useWorker && this.$startWorker();
            var x = y.getTokenizer();
            if (x.on !== void 0) {
              var T = this.onReloadTokenizer.bind(this);
              x.on("update", T);
            }
            this.bgTokenizer.setTokenizer(x), this.bgTokenizer.setDocument(this.getDocument()), this.tokenRe = y.tokenRe, this.nonTokenRe = y.nonTokenRe, g || (y.attachToSession && y.attachToSession(this), this.$options.wrapMethod.set.call(this, this.$wrapMethod), this.$setFolding(y.foldingRules), this.bgTokenizer.start(0), this._emit("changeMode", {
              oldMode: d,
              mode: y
            }));
          }
        }, m.prototype.$stopWorker = function() {
          this.$worker && (this.$worker.terminate(), this.$worker = null);
        }, m.prototype.$startWorker = function() {
          try {
            this.$worker = this.$mode.createWorker(this);
          } catch (y) {
            a.warn("Could not load worker", y), this.$worker = null;
          }
        }, m.prototype.getMode = function() {
          return this.$mode;
        }, m.prototype.setScrollTop = function(y) {
          this.$scrollTop === y || isNaN(y) || (this.$scrollTop = y, this._signal("changeScrollTop", y));
        }, m.prototype.getScrollTop = function() {
          return this.$scrollTop;
        }, m.prototype.setScrollLeft = function(y) {
          this.$scrollLeft === y || isNaN(y) || (this.$scrollLeft = y, this._signal("changeScrollLeft", y));
        }, m.prototype.getScrollLeft = function() {
          return this.$scrollLeft;
        }, m.prototype.getScreenWidth = function() {
          return this.$computeWidth(), this.lineWidgets ? Math.max(this.getLineWidgetMaxWidth(), this.screenWidth) : this.screenWidth;
        }, m.prototype.getLineWidgetMaxWidth = function() {
          if (this.lineWidgetsWidth != null) return this.lineWidgetsWidth;
          var y = 0;
          return this.lineWidgets.forEach(function(g) {
            g && g.screenWidth > y && (y = g.screenWidth);
          }), this.lineWidgetWidth = y;
        }, m.prototype.$computeWidth = function(y) {
          if (this.$modified || y) {
            if (this.$modified = false, this.$useWrapMode) return this.screenWidth = this.$wrapLimit;
            for (var g = this.doc.getAllLines(), d = this.$rowLengthCache, x = 0, T = 0, E = this.$foldData[T], R = E ? E.start.row : 1 / 0, I = g.length, O = 0; O < I; O++) {
              if (O > R) {
                if (O = E.end.row + 1, O >= I) break;
                E = this.$foldData[T++], R = E ? E.start.row : 1 / 0;
              }
              d[O] == null && (d[O] = this.$getStringScreenWidth(g[O])[0]), d[O] > x && (x = d[O]);
            }
            this.screenWidth = x;
          }
        }, m.prototype.getLine = function(y) {
          return this.doc.getLine(y);
        }, m.prototype.getLines = function(y, g) {
          return this.doc.getLines(y, g);
        }, m.prototype.getLength = function() {
          return this.doc.getLength();
        }, m.prototype.getTextRange = function(y) {
          return this.doc.getTextRange(y || this.selection.getRange());
        }, m.prototype.insert = function(y, g) {
          return this.doc.insert(y, g);
        }, m.prototype.remove = function(y) {
          return this.doc.remove(y);
        }, m.prototype.removeFullLines = function(y, g) {
          return this.doc.removeFullLines(y, g);
        }, m.prototype.undoChanges = function(y, g) {
          if (y.length) {
            this.$fromUndo = true;
            for (var d = y.length - 1; d != -1; d--) {
              var x = y[d];
              x.action == "insert" || x.action == "remove" ? this.doc.revertDelta(x) : x.folds && this.addFolds(x.folds);
            }
            !g && this.$undoSelect && (y.selectionBefore ? this.selection.fromJSON(y.selectionBefore) : this.selection.setRange(this.$getUndoSelection(y, true))), this.$fromUndo = false;
          }
        }, m.prototype.redoChanges = function(y, g) {
          if (y.length) {
            this.$fromUndo = true;
            for (var d = 0; d < y.length; d++) {
              var x = y[d];
              (x.action == "insert" || x.action == "remove") && this.doc.$safeApplyDelta(x);
            }
            !g && this.$undoSelect && (y.selectionAfter ? this.selection.fromJSON(y.selectionAfter) : this.selection.setRange(this.$getUndoSelection(y, false))), this.$fromUndo = false;
          }
        }, m.prototype.setUndoSelect = function(y) {
          this.$undoSelect = y;
        }, m.prototype.$getUndoSelection = function(y, g) {
          function d(I) {
            return g ? I.action !== "insert" : I.action === "insert";
          }
          for (var x, T, E = 0; E < y.length; E++) {
            var R = y[E];
            if (R.start) {
              if (!x) {
                d(R) ? x = r.fromPoints(R.start, R.end) : x = r.fromPoints(R.start, R.start);
                continue;
              }
              d(R) ? (T = R.start, x.compare(T.row, T.column) == -1 && x.setStart(T), T = R.end, x.compare(T.row, T.column) == 1 && x.setEnd(T)) : (T = R.start, x.compare(T.row, T.column) == -1 && (x = r.fromPoints(R.start, R.start)));
            }
          }
          return x;
        }, m.prototype.replace = function(y, g) {
          return this.doc.replace(y, g);
        }, m.prototype.moveText = function(y, g, d) {
          var x = this.getTextRange(y), T = this.getFoldsInRange(y), E = r.fromPoints(g, g);
          if (!d) {
            this.remove(y);
            var R = y.start.row - y.end.row, I = R ? -y.end.column : y.start.column - y.end.column;
            I && (E.start.row == y.end.row && E.start.column > y.end.column && (E.start.column += I), E.end.row == y.end.row && E.end.column > y.end.column && (E.end.column += I)), R && E.start.row >= y.end.row && (E.start.row += R, E.end.row += R);
          }
          if (E.end = this.insert(E.start, x), T.length) {
            var O = y.start, z = E.start, R = z.row - O.row, I = z.column - O.column;
            this.addFolds(T.map(function(W) {
              return W = W.clone(), W.start.row == O.row && (W.start.column += I), W.end.row == O.row && (W.end.column += I), W.start.row += R, W.end.row += R, W;
            }));
          }
          return E;
        }, m.prototype.indentRows = function(y, g, d) {
          d = d.replace(/\t/g, this.getTabString());
          for (var x = y; x <= g; x++) this.doc.insertInLine({
            row: x,
            column: 0
          }, d);
        }, m.prototype.outdentRows = function(y) {
          for (var g = y.collapseRows(), d = new r(0, 0, 0, 0), x = this.getTabSize(), T = g.start.row; T <= g.end.row; ++T) {
            var E = this.getLine(T);
            d.start.row = T, d.end.row = T;
            for (var R = 0; R < x && E.charAt(R) == " "; ++R) ;
            R < x && E.charAt(R) == "	" ? (d.start.column = R, d.end.column = R + 1) : (d.start.column = 0, d.end.column = R), this.remove(d);
          }
        }, m.prototype.$moveLines = function(y, g, d) {
          if (y = this.getRowFoldStart(y), g = this.getRowFoldEnd(g), d < 0) {
            var x = this.getRowFoldStart(y + d);
            if (x < 0) return 0;
            var T = x - y;
          } else if (d > 0) {
            var x = this.getRowFoldEnd(g + d);
            if (x > this.doc.getLength() - 1) return 0;
            var T = x - g;
          } else {
            y = this.$clipRowToDocument(y), g = this.$clipRowToDocument(g);
            var T = g - y + 1;
          }
          var E = new r(y, 0, g, Number.MAX_VALUE), R = this.getFoldsInRange(E).map(function(O) {
            return O = O.clone(), O.start.row += T, O.end.row += T, O;
          }), I = d == 0 ? this.doc.getLines(y, g) : this.doc.removeFullLines(y, g);
          return this.doc.insertFullLines(y + T, I), R.length && this.addFolds(R), T;
        }, m.prototype.moveLinesUp = function(y, g) {
          return this.$moveLines(y, g, -1);
        }, m.prototype.moveLinesDown = function(y, g) {
          return this.$moveLines(y, g, 1);
        }, m.prototype.duplicateLines = function(y, g) {
          return this.$moveLines(y, g, 0);
        }, m.prototype.$clipRowToDocument = function(y) {
          return Math.max(0, Math.min(y, this.doc.getLength() - 1));
        }, m.prototype.$clipColumnToRow = function(y, g) {
          return g < 0 ? 0 : Math.min(this.doc.getLine(y).length, g);
        }, m.prototype.$clipPositionToDocument = function(y, g) {
          if (g = Math.max(0, g), y < 0) y = 0, g = 0;
          else {
            var d = this.doc.getLength();
            y >= d ? (y = d - 1, g = this.doc.getLine(d - 1).length) : g = Math.min(this.doc.getLine(y).length, g);
          }
          return {
            row: y,
            column: g
          };
        }, m.prototype.$clipRangeToDocument = function(y) {
          y.start.row < 0 ? (y.start.row = 0, y.start.column = 0) : y.start.column = this.$clipColumnToRow(y.start.row, y.start.column);
          var g = this.doc.getLength() - 1;
          return y.end.row > g ? (y.end.row = g, y.end.column = this.doc.getLine(g).length) : y.end.column = this.$clipColumnToRow(y.end.row, y.end.column), y;
        }, m.prototype.setUseWrapMode = function(y) {
          if (y != this.$useWrapMode) {
            if (this.$useWrapMode = y, this.$modified = true, this.$resetRowCache(0), y) {
              var g = this.getLength();
              this.$wrapData = Array(g), this.$updateWrapData(0, g - 1);
            }
            this._signal("changeWrapMode");
          }
        }, m.prototype.getUseWrapMode = function() {
          return this.$useWrapMode;
        }, m.prototype.setWrapLimitRange = function(y, g) {
          (this.$wrapLimitRange.min !== y || this.$wrapLimitRange.max !== g) && (this.$wrapLimitRange = {
            min: y,
            max: g
          }, this.$modified = true, this.$bidiHandler.markAsDirty(), this.$useWrapMode && this._signal("changeWrapMode"));
        }, m.prototype.adjustWrapLimit = function(y, g) {
          var d = this.$wrapLimitRange;
          d.max < 0 && (d = {
            min: g,
            max: g
          });
          var x = this.$constrainWrapLimit(y, d.min, d.max);
          return x != this.$wrapLimit && x > 1 ? (this.$wrapLimit = x, this.$modified = true, this.$useWrapMode && (this.$updateWrapData(0, this.getLength() - 1), this.$resetRowCache(0), this._signal("changeWrapLimit")), true) : false;
        }, m.prototype.$constrainWrapLimit = function(y, g, d) {
          return g && (y = Math.max(g, y)), d && (y = Math.min(d, y)), y;
        }, m.prototype.getWrapLimit = function() {
          return this.$wrapLimit;
        }, m.prototype.setWrapLimit = function(y) {
          this.setWrapLimitRange(y, y);
        }, m.prototype.getWrapLimitRange = function() {
          return {
            min: this.$wrapLimitRange.min,
            max: this.$wrapLimitRange.max
          };
        }, m.prototype.$updateInternalDataOnChange = function(y) {
          var g = this.$useWrapMode, d = y.action, x = y.start, T = y.end, E = x.row, R = T.row, I = R - E, O = null;
          if (this.$updating = true, I != 0) if (d === "remove") {
            this[g ? "$wrapData" : "$rowLengthCache"].splice(E, I);
            var z = this.$foldData;
            O = this.getFoldsInRange(y), this.removeFolds(O);
            var F = this.getFoldLine(T.row), B = 0;
            if (F) {
              F.addRemoveChars(T.row, T.column, x.column - T.column), F.shiftRow(-I);
              var W = this.getFoldLine(E);
              W && W !== F && (W.merge(F), F = W), B = z.indexOf(F) + 1;
            }
            for (B; B < z.length; B++) {
              var F = z[B];
              F.start.row >= T.row && F.shiftRow(-I);
            }
            R = E;
          } else {
            var H = Array(I);
            H.unshift(E, 0);
            var U = g ? this.$wrapData : this.$rowLengthCache;
            U.splice.apply(U, H);
            var z = this.$foldData, F = this.getFoldLine(E), B = 0;
            if (F) {
              var V = F.range.compareInside(x.row, x.column);
              V == 0 ? (F = F.split(x.row, x.column), F && (F.shiftRow(I), F.addRemoveChars(R, 0, T.column - x.column))) : V == -1 && (F.addRemoveChars(E, 0, T.column - x.column), F.shiftRow(I)), B = z.indexOf(F) + 1;
            }
            for (B; B < z.length; B++) {
              var F = z[B];
              F.start.row >= E && F.shiftRow(I);
            }
          }
          else {
            I = Math.abs(y.start.column - y.end.column), d === "remove" && (O = this.getFoldsInRange(y), this.removeFolds(O), I = -I);
            var F = this.getFoldLine(E);
            F && F.addRemoveChars(E, x.column, I);
          }
          return g && this.$wrapData.length != this.doc.getLength() && console.error("doc.getLength() and $wrapData.length have to be the same!"), this.$updating = false, g ? this.$updateWrapData(E, R) : this.$updateRowLengthCache(E, R), O;
        }, m.prototype.$updateRowLengthCache = function(y, g) {
          this.$rowLengthCache[y] = null, this.$rowLengthCache[g] = null;
        }, m.prototype.$updateWrapData = function(y, g) {
          var d = this.doc.getAllLines(), x = this.getTabSize(), T = this.$wrapData, E = this.$wrapLimit, R, I, O = y;
          for (g = Math.min(g, d.length - 1); O <= g; ) I = this.getFoldLine(O, I), I ? (R = [], I.walk(function(z, F, B, W) {
            var H;
            if (z != null) {
              H = this.$getDisplayTokens(z, R.length), H[0] = f;
              for (var U = 1; U < H.length; U++) H[U] = c;
            } else H = this.$getDisplayTokens(d[F].substring(W, B), R.length);
            R = R.concat(H);
          }.bind(this), I.end.row, d[I.end.row].length + 1), T[I.start.row] = this.$computeWrapSplits(R, E, x), O = I.end.row + 1) : (R = this.$getDisplayTokens(d[O]), T[O] = this.$computeWrapSplits(R, E, x), O++);
        }, m.prototype.$computeWrapSplits = function(y, g, d) {
          if (y.length == 0) return [];
          var x = [], T = y.length, E = 0, R = 0, I = this.$wrapAsCode, O = this.$indentedSoftWrap, z = g <= Math.max(2 * d, 8) || O === false ? 0 : Math.floor(g / 2);
          function F() {
            var V = 0;
            if (z === 0) return V;
            if (O) for (var G = 0; G < y.length; G++) {
              var Y = y[G];
              if (Y == C) V += 1;
              else if (Y == p) V += d;
              else {
                if (Y == v) continue;
                break;
              }
            }
            return I && O !== false && (V += d), Math.min(V, z);
          }
          function B(V) {
            for (var G = V - E, Y = E; Y < V; Y++) {
              var J = y[Y];
              (J === 12 || J === 2) && (G -= 1);
            }
            x.length || (W = F(), x.indent = W), R += G, x.push(R), E = V;
          }
          for (var W = 0; T - E > g - W; ) {
            var H = E + g - W;
            if (y[H - 1] >= C && y[H] >= C) {
              B(H);
              continue;
            }
            if (y[H] == f || y[H] == c) {
              for (H; H != E - 1 && y[H] != f; H--) ;
              if (H > E) {
                B(H);
                continue;
              }
              for (H = E + g, H; H < y.length && y[H] == c; H++) ;
              if (H == y.length) break;
              B(H);
              continue;
            }
            for (var U = Math.max(H - (g - (g >> 2)), E - 1); H > U && y[H] < f; ) H--;
            if (I) {
              for (; H > U && y[H] < f; ) H--;
              for (; H > U && y[H] == w; ) H--;
            } else for (; H > U && y[H] < C; ) H--;
            if (H > U) {
              B(++H);
              continue;
            }
            H = E + g, y[H] == b && H--, B(H - W);
          }
          return x;
        }, m.prototype.$getDisplayTokens = function(y, g) {
          var d = [], x;
          g = g || 0;
          for (var T = 0; T < y.length; T++) {
            var E = y.charCodeAt(T);
            if (E == 9) {
              x = this.getScreenTabSize(d.length + g), d.push(p);
              for (var R = 1; R < x; R++) d.push(v);
            } else E == 32 ? d.push(C) : E > 39 && E < 48 || E > 57 && E < 64 ? d.push(w) : E >= 4352 && k(E) ? d.push(S, b) : d.push(S);
          }
          return d;
        }, m.prototype.$getStringScreenWidth = function(y, g, d) {
          if (g == 0) return [
            0,
            0
          ];
          g == null && (g = 1 / 0), d = d || 0;
          var x, T;
          for (T = 0; T < y.length && (x = y.charCodeAt(T), x == 9 ? d += this.getScreenTabSize(d) : x >= 4352 && k(x) ? d += 2 : d += 1, !(d > g)); T++) ;
          return [
            d,
            T
          ];
        }, m.prototype.getRowLength = function(y) {
          var g = 1;
          return this.lineWidgets && (g += this.lineWidgets[y] && this.lineWidgets[y].rowCount || 0), !this.$useWrapMode || !this.$wrapData[y] ? g : this.$wrapData[y].length + g;
        }, m.prototype.getRowLineCount = function(y) {
          return !this.$useWrapMode || !this.$wrapData[y] ? 1 : this.$wrapData[y].length + 1;
        }, m.prototype.getRowWrapIndent = function(y) {
          if (this.$useWrapMode) {
            var g = this.screenToDocumentPosition(y, Number.MAX_VALUE), d = this.$wrapData[g.row];
            return d.length && d[0] < g.column ? d.indent : 0;
          } else return 0;
        }, m.prototype.getScreenLastRowColumn = function(y) {
          var g = this.screenToDocumentPosition(y, Number.MAX_VALUE);
          return this.documentToScreenColumn(g.row, g.column);
        }, m.prototype.getDocumentLastRowColumn = function(y, g) {
          var d = this.documentToScreenRow(y, g);
          return this.getScreenLastRowColumn(d);
        }, m.prototype.getDocumentLastRowColumnPosition = function(y, g) {
          var d = this.documentToScreenRow(y, g);
          return this.screenToDocumentPosition(d, Number.MAX_VALUE / 10);
        }, m.prototype.getRowSplitData = function(y) {
          if (this.$useWrapMode) return this.$wrapData[y];
        }, m.prototype.getScreenTabSize = function(y) {
          return this.$tabSize - (y % this.$tabSize | 0);
        }, m.prototype.screenToDocumentRow = function(y, g) {
          return this.screenToDocumentPosition(y, g).row;
        }, m.prototype.screenToDocumentColumn = function(y, g) {
          return this.screenToDocumentPosition(y, g).column;
        }, m.prototype.screenToDocumentPosition = function(y, g, d) {
          if (y < 0) return {
            row: 0,
            column: 0
          };
          var x, T = 0, E = 0, R, I = 0, O = 0, z = this.$screenRowCache, F = this.$getRowCacheIndex(z, y), B = z.length;
          if (B && F >= 0) var I = z[F], T = this.$docRowCache[F], W = y > z[B - 1];
          else var W = !B;
          for (var H = this.getLength() - 1, U = this.getNextFoldLine(T), V = U ? U.start.row : 1 / 0; I <= y && (O = this.getRowLength(T), !(I + O > y || T >= H)); ) I += O, T++, T > V && (T = U.end.row + 1, U = this.getNextFoldLine(T, U), V = U ? U.start.row : 1 / 0), W && (this.$docRowCache.push(T), this.$screenRowCache.push(I));
          if (U && U.start.row <= T) x = this.getFoldDisplayLine(U), T = U.start.row;
          else {
            if (I + O <= y || T > H) return {
              row: H,
              column: this.getLine(H).length
            };
            x = this.getLine(T), U = null;
          }
          var G = 0, Y = Math.floor(y - I);
          if (this.$useWrapMode) {
            var J = this.$wrapData[T];
            J && (R = J[Y], Y > 0 && J.length && (G = J.indent, E = J[Y - 1] || J[J.length - 1], x = x.substring(E)));
          }
          return d !== void 0 && this.$bidiHandler.isBidiRow(I + Y, T, Y) && (g = this.$bidiHandler.offsetToCol(d)), E += this.$getStringScreenWidth(x, g - G)[1], this.$useWrapMode && E >= R && (E = R - 1), U ? U.idxToPosition(E) : {
            row: T,
            column: E
          };
        }, m.prototype.documentToScreenPosition = function(y, g) {
          if (typeof g > "u") var d = this.$clipPositionToDocument(y.row, y.column);
          else d = this.$clipPositionToDocument(y, g);
          y = d.row, g = d.column;
          var x = 0, T = null, E = null;
          E = this.getFoldAt(y, g, 1), E && (y = E.start.row, g = E.start.column);
          var R, I = 0, O = this.$docRowCache, z = this.$getRowCacheIndex(O, y), F = O.length;
          if (F && z >= 0) var I = O[z], x = this.$screenRowCache[z], B = y > O[F - 1];
          else var B = !F;
          for (var W = this.getNextFoldLine(I), H = W ? W.start.row : 1 / 0; I < y; ) {
            if (I >= H) {
              if (R = W.end.row + 1, R > y) break;
              W = this.getNextFoldLine(R, W), H = W ? W.start.row : 1 / 0;
            } else R = I + 1;
            x += this.getRowLength(I), I = R, B && (this.$docRowCache.push(I), this.$screenRowCache.push(x));
          }
          var U = "";
          W && I >= H ? (U = this.getFoldDisplayLine(W, y, g), T = W.start.row) : (U = this.getLine(y).substring(0, g), T = y);
          var V = 0;
          if (this.$useWrapMode) {
            var G = this.$wrapData[T];
            if (G) {
              for (var Y = 0; U.length >= G[Y]; ) x++, Y++;
              U = U.substring(G[Y - 1] || 0, U.length), V = Y > 0 ? G.indent : 0;
            }
          }
          return this.lineWidgets && this.lineWidgets[I] && this.lineWidgets[I].rowsAbove && (x += this.lineWidgets[I].rowsAbove), {
            row: x,
            column: V + this.$getStringScreenWidth(U)[0]
          };
        }, m.prototype.documentToScreenColumn = function(y, g) {
          return this.documentToScreenPosition(y, g).column;
        }, m.prototype.documentToScreenRow = function(y, g) {
          return this.documentToScreenPosition(y, g).row;
        }, m.prototype.getScreenLength = function() {
          var y = 0, g = null;
          if (this.$useWrapMode) for (var T = this.$wrapData.length, E = 0, x = 0, g = this.$foldData[x++], R = g ? g.start.row : 1 / 0; E < T; ) {
            var I = this.$wrapData[E];
            y += I ? I.length + 1 : 1, E++, E > R && (E = g.end.row + 1, g = this.$foldData[x++], R = g ? g.start.row : 1 / 0);
          }
          else {
            y = this.getLength();
            for (var d = this.$foldData, x = 0; x < d.length; x++) g = d[x], y -= g.end.row - g.start.row;
          }
          return this.lineWidgets && (y += this.$getWidgetScreenLength()), y;
        }, m.prototype.$setFontMetrics = function(y) {
          this.$enableVarChar && (this.$getStringScreenWidth = function(g, d, x) {
            if (d === 0) return [
              0,
              0
            ];
            d || (d = 1 / 0), x = x || 0;
            var T, E;
            for (E = 0; E < g.length && (T = g.charAt(E), T === "	" ? x += this.getScreenTabSize(x) : x += y.getCharacterWidth(T), !(x > d)); E++) ;
            return [
              x,
              E
            ];
          });
        }, m.prototype.getPrecedingCharacter = function() {
          var y = this.selection.getCursor();
          if (y.column === 0) return y.row === 0 ? "" : this.doc.getNewLineCharacter();
          var g = this.getLine(y.row);
          return g[y.column - 1];
        }, m.prototype.destroy = function() {
          this.destroyed || (this.bgTokenizer.setDocument(null), this.bgTokenizer.cleanup(), this.destroyed = true), this.endOperation(), this.$stopWorker(), this.removeAllListeners(), this.doc && this.doc.off("change", this.$onChange), this.selection && (this.selection.off("changeCursor", this.$onSelectionChange), this.selection.off("changeSelection", this.$onSelectionChange)), this.selection.detach();
        }, m;
      })();
      u.$uid = 0, u.prototype.$modes = a.$modes, u.prototype.getValue = u.prototype.toString, u.prototype.$defaultUndoManager = {
        undo: function() {
        },
        redo: function() {
        },
        hasUndo: function() {
        },
        hasRedo: function() {
        },
        reset: function() {
        },
        add: function() {
        },
        addSelection: function() {
        },
        startNewGroup: function() {
        },
        addSession: function() {
        }
      }, u.prototype.$overwrite = false, u.prototype.$mode = null, u.prototype.$modeId = null, u.prototype.$scrollTop = 0, u.prototype.$scrollLeft = 0, u.prototype.$wrapLimit = 80, u.prototype.$useWrapMode = false, u.prototype.$wrapLimitRange = {
        min: null,
        max: null
      }, u.prototype.lineWidgets = null, u.prototype.isFullWidth = k, L.implement(u.prototype, l);
      var S = 1, b = 2, f = 3, c = 4, w = 9, C = 10, p = 11, v = 12;
      function k(m) {
        return m < 4352 ? false : m >= 4352 && m <= 4447 || m >= 4515 && m <= 4519 || m >= 4602 && m <= 4607 || m >= 9001 && m <= 9002 || m >= 11904 && m <= 11929 || m >= 11931 && m <= 12019 || m >= 12032 && m <= 12245 || m >= 12272 && m <= 12283 || m >= 12288 && m <= 12350 || m >= 12353 && m <= 12438 || m >= 12441 && m <= 12543 || m >= 12549 && m <= 12589 || m >= 12593 && m <= 12686 || m >= 12688 && m <= 12730 || m >= 12736 && m <= 12771 || m >= 12784 && m <= 12830 || m >= 12832 && m <= 12871 || m >= 12880 && m <= 13054 || m >= 13056 && m <= 19903 || m >= 19968 && m <= 42124 || m >= 42128 && m <= 42182 || m >= 43360 && m <= 43388 || m >= 44032 && m <= 55203 || m >= 55216 && m <= 55238 || m >= 55243 && m <= 55291 || m >= 63744 && m <= 64255 || m >= 65040 && m <= 65049 || m >= 65072 && m <= 65106 || m >= 65108 && m <= 65126 || m >= 65128 && m <= 65131 || m >= 65281 && m <= 65376 || m >= 65504 && m <= 65510;
      }
      A("./edit_session/folding").Folding.call(u.prototype), A("./edit_session/bracket_match").BracketMatch.call(u.prototype), a.defineOptions(u.prototype, "session", {
        wrap: {
          set: function(m) {
            if (!m || m == "off" ? m = false : m == "free" ? m = true : m == "printMargin" ? m = -1 : typeof m == "string" && (m = parseInt(m, 10) || false), this.$wrap != m) if (this.$wrap = m, !m) this.setUseWrapMode(false);
            else {
              var y = typeof m == "number" ? m : null;
              this.setWrapLimitRange(y, y), this.setUseWrapMode(true);
            }
          },
          get: function() {
            return this.getUseWrapMode() ? this.$wrap == -1 ? "printMargin" : this.getWrapLimitRange().min ? this.$wrap : "free" : "off";
          },
          handlesSet: true
        },
        wrapMethod: {
          set: function(m) {
            m = m == "auto" ? this.$mode.type != "text" : m != "text", m != this.$wrapAsCode && (this.$wrapAsCode = m, this.$useWrapMode && (this.$useWrapMode = false, this.setUseWrapMode(true)));
          },
          initialValue: "auto"
        },
        indentedSoftWrap: {
          set: function() {
            this.$useWrapMode && (this.$useWrapMode = false, this.setUseWrapMode(true));
          },
          initialValue: true
        },
        firstLineNumber: {
          set: function() {
            this._signal("changeBreakpoint");
          },
          initialValue: 1
        },
        useWorker: {
          set: function(m) {
            this.$useWorker = m, this.$stopWorker(), m && this.$startWorker();
          },
          initialValue: true
        },
        useSoftTabs: {
          initialValue: true
        },
        tabSize: {
          set: function(m) {
            m = parseInt(m), m > 0 && this.$tabSize !== m && (this.$modified = true, this.$rowLengthCache = [], this.$tabSize = m, this._signal("changeTabSize"));
          },
          initialValue: 4,
          handlesSet: true
        },
        navigateWithinSoftTabs: {
          initialValue: false
        },
        foldStyle: {
          set: function(m) {
            this.setFoldStyle(m);
          },
          handlesSet: true
        },
        overwrite: {
          set: function(m) {
            this._signal("changeOverwrite");
          },
          initialValue: false
        },
        newLineMode: {
          set: function(m) {
            this.doc.setNewLineMode(m);
          },
          get: function() {
            return this.doc.getNewLineMode();
          },
          handlesSet: true
        },
        mode: {
          set: function(m) {
            this.setMode(m);
          },
          get: function() {
            return this.$modeId;
          },
          handlesSet: true
        }
      }), _.EditSession = u;
    }), ace.define("ace/search", [
      "require",
      "exports",
      "module",
      "ace/lib/lang",
      "ace/lib/oop",
      "ace/range"
    ], function(A, _, N) {
      var L = A("./lib/lang"), M = A("./lib/oop"), $ = A("./range").Range, a = (function() {
        function r() {
          this.$options = {};
        }
        return r.prototype.set = function(n) {
          return M.mixin(this.$options, n), this;
        }, r.prototype.getOptions = function() {
          return L.copyObject(this.$options);
        }, r.prototype.setOptions = function(n) {
          this.$options = n;
        }, r.prototype.find = function(n) {
          var e = this.$options, t = this.$matchIterator(n, e);
          if (!t) return false;
          var s = null;
          return t.forEach(function(h, u, S, b) {
            return s = new $(h, u, S, b), u == b && e.start && e.start.start && e.skipCurrent != false && s.isEqual(e.start) ? (s = null, false) : true;
          }), s;
        }, r.prototype.findAll = function(n) {
          var e = this.$options;
          if (!e.needle) return [];
          this.$assembleRegExp(e);
          var t = e.range, s = t ? n.getLines(t.start.row, t.end.row) : n.doc.getAllLines(), h = [], u = e.re;
          if (e.$isMultiLine) {
            var S = u.length, b = s.length - S, f;
            e: for (var c = u.offset || 0; c <= b; c++) {
              for (var w = 0; w < S; w++) if (s[c + w].search(u[w]) == -1) continue e;
              var C = s[c], p = s[c + S - 1], v = C.length - C.match(u[0])[0].length, k = p.match(u[S - 1])[0].length;
              f && f.end.row === c && f.end.column > v || (h.push(f = new $(c, v, c + S - 1, k)), S > 2 && (c = c + S - 2));
            }
          } else for (var m, y = 0; y < s.length; y++) if (this.$isMultilineSearch(e)) {
            var g = s.length - 1;
            if (m = this.$multiLineForward(n, u, y, g), m) {
              var d = m.endRow <= g ? m.endRow - 1 : g;
              d > y && (y = d), h.push(new $(m.startRow, m.startCol, m.endRow, m.endCol));
            }
          } else {
            m = L.getMatchOffsets(s[y], u);
            for (var w = 0; w < m.length; w++) {
              var x = m[w];
              h.push(new $(y, x.offset, y, x.offset + x.length));
            }
          }
          if (t) {
            for (var T = t.start.column, E = t.end.column, y = 0, w = h.length - 1; y < w && h[y].start.column < T && h[y].start.row == 0; ) y++;
            for (var R = t.end.row - t.start.row; y < w && h[w].end.column > E && h[w].end.row == R; ) w--;
            for (h = h.slice(y, w + 1), y = 0, w = h.length; y < w; y++) h[y].start.row += t.start.row, h[y].end.row += t.start.row;
          }
          return h;
        }, r.prototype.parseReplaceString = function(n) {
          for (var e = {
            DollarSign: 36,
            Ampersand: 38,
            Digit0: 48,
            Digit1: 49,
            Digit9: 57,
            Backslash: 92,
            n: 110,
            t: 116
          }, t = "", s = 0, h = n.length; s < h; s++) {
            var u = n.charCodeAt(s);
            if (u === e.Backslash) {
              if (s++, s >= h) {
                t += "\\";
                break;
              }
              var S = n.charCodeAt(s);
              switch (S) {
                case e.Backslash:
                  t += "\\";
                  break;
                case e.n:
                  t += `
`;
                  break;
                case e.t:
                  t += "	";
                  break;
              }
              continue;
            }
            if (u === e.DollarSign) {
              if (s++, s >= h) {
                t += "$";
                break;
              }
              var b = n.charCodeAt(s);
              if (b === e.DollarSign) {
                t += "$$";
                continue;
              }
              if (b === e.Digit0 || b === e.Ampersand) {
                t += "$&";
                continue;
              }
              if (e.Digit1 <= b && b <= e.Digit9) {
                t += "$" + n[s];
                continue;
              }
            }
            t += n[s];
          }
          return t || n;
        }, r.prototype.replace = function(n, e) {
          var t = this.$options, s = this.$assembleRegExp(t);
          if (t.$isMultiLine) return e;
          if (s) {
            var h = this.$isMultilineSearch(t);
            h && (n = n.replace(/\r\n|\r|\n/g, `
`));
            var u = s.exec(n);
            if (!u || !h && u[0].length != n.length) return null;
            if (e = t.regExp ? this.parseReplaceString(e) : e.replace(/\$/g, "$$$$"), e = n.replace(s, e), t.preserveCase) {
              e = e.split("");
              for (var S = Math.min(n.length, n.length); S--; ) {
                var b = n[S];
                b && b.toLowerCase() != b ? e[S] = e[S].toUpperCase() : e[S] = e[S].toLowerCase();
              }
              e = e.join("");
            }
            return e;
          }
        }, r.prototype.$assembleRegExp = function(n, e) {
          if (n.needle instanceof RegExp) return n.re = n.needle;
          var t = n.needle;
          if (!n.needle) return n.re = false;
          n.regExp || (t = L.escapeRegExp(t));
          var s = n.caseSensitive ? "gm" : "gmi";
          try {
            new RegExp(t, "u"), n.$supportsUnicodeFlag = true, s += "u";
          } catch {
            n.$supportsUnicodeFlag = false;
          }
          if (n.wholeWord && (t = l(t, n)), n.$isMultiLine = !e && /[\n\r]/.test(t), n.$isMultiLine) return n.re = this.$assembleMultilineRegExp(t, s);
          try {
            var h = new RegExp(t, s);
          } catch {
            h = false;
          }
          return n.re = h;
        }, r.prototype.$assembleMultilineRegExp = function(n, e) {
          for (var t = n.replace(/\r\n|\r|\n/g, `$
^`).split(`
`), s = [], h = 0; h < t.length; h++) try {
            s.push(new RegExp(t[h], e));
          } catch {
            return false;
          }
          return s;
        }, r.prototype.$isMultilineSearch = function(n) {
          return n.re && /\\r\\n|\\r|\\n/.test(n.re.source) && n.regExp && !n.$isMultiLine;
        }, r.prototype.$multiLineForward = function(n, e, t, s) {
          for (var h, u = o(n, t), S = t; S <= s; ) {
            for (var b = 0; b < u && !(S > s); b++) {
              var f = n.getLine(S++);
              h = h == null ? f : h + `
` + f;
            }
            var c = e.exec(h);
            if (e.lastIndex = 0, c) {
              var w = h.slice(0, c.index).split(`
`), C = c[0].split(`
`), p = t + w.length - 1, v = w[w.length - 1].length, k = p + C.length - 1, m = C.length == 1 ? v + C[0].length : C[C.length - 1].length;
              return {
                startRow: p,
                startCol: v,
                endRow: k,
                endCol: m
              };
            }
          }
          return null;
        }, r.prototype.$multiLineBackward = function(n, e, t, s, h) {
          for (var u, S = o(n, s), b = n.getLine(s).length - t, f = s; f >= h; ) {
            for (var c = 0; c < S && f >= h; c++) {
              var w = n.getLine(f--);
              u = u == null ? w : w + `
` + u;
            }
            var C = i(u, e, b);
            if (C) {
              var p = u.slice(0, C.index).split(`
`), v = C[0].split(`
`), k = f + p.length, m = p[p.length - 1].length, y = k + v.length - 1, g = v.length == 1 ? m + v[0].length : v[v.length - 1].length;
              return {
                startRow: k,
                startCol: m,
                endRow: y,
                endCol: g
              };
            }
          }
          return null;
        }, r.prototype.$matchIterator = function(n, e) {
          var t = this.$assembleRegExp(e);
          if (!t) return false;
          var s = this.$isMultilineSearch(e), h = this.$multiLineForward, u = this.$multiLineBackward, S = e.backwards == true, b = e.skipCurrent != false, f = t.unicode, c = e.range, w = e.start;
          w || (w = c ? c[S ? "end" : "start"] : n.selection.getRange()), w.start && (w = w[b != S ? "end" : "start"]);
          var C = c ? c.start.row : 0, p = c ? c.end.row : n.getLength() - 1;
          if (S) var v = function(y) {
            var g = w.row;
            if (!m(g, w.column, y)) {
              for (g--; g >= C; g--) if (m(g, Number.MAX_VALUE, y)) return;
              if (e.wrap != false) {
                for (g = p, C = w.row; g >= C; g--) if (m(g, Number.MAX_VALUE, y)) return;
              }
            }
          };
          else var v = function(g) {
            var d = w.row;
            if (!m(d, w.column, g)) {
              for (d = d + 1; d <= p; d++) if (m(d, 0, g)) return;
              if (e.wrap != false) {
                for (d = C, p = w.row; d <= p; d++) if (m(d, 0, g)) return;
              }
            }
          };
          if (e.$isMultiLine) var k = t.length, m = function(y, g, d) {
            var x = S ? y - k + 1 : y;
            if (!(x < 0 || x + k > n.getLength())) {
              var T = n.getLine(x), E = T.search(t[0]);
              if (!(!S && E < g || E === -1)) {
                for (var R = 1; R < k; R++) if (T = n.getLine(x + R), T.search(t[R]) == -1) return;
                var I = T.match(t[k - 1])[0].length;
                if (!(S && I > g) && d(x, E, x + k - 1, I)) return true;
              }
            }
          };
          else if (S) var m = function(g, d, x) {
            if (s) {
              var T = u(n, t, d, g, C);
              if (!T) return false;
              if (x(T.startRow, T.startCol, T.endRow, T.endCol)) return true;
            } else {
              var E = n.getLine(g), R = [], I, O = 0;
              for (t.lastIndex = 0; I = t.exec(E); ) {
                var z = I[0].length;
                if (O = I.index, !z) {
                  if (O >= E.length) break;
                  t.lastIndex = O += L.skipEmptyMatch(E, O, f);
                }
                if (I.index + z > d) break;
                R.push(I.index, z);
              }
              for (var F = R.length - 1; F >= 0; F -= 2) {
                var B = R[F - 1], z = R[F];
                if (x(g, B, g, B + z)) return true;
              }
            }
          };
          else var m = function(g, d, x) {
            if (t.lastIndex = d, s) {
              var T = h(n, t, g, p);
              if (T) {
                var E = T.endRow <= p ? T.endRow - 1 : p;
                E > g && (g = E);
              }
              if (!T) return false;
              if (x(T.startRow, T.startCol, T.endRow, T.endCol)) return true;
            } else for (var R = n.getLine(g), I, O; O = t.exec(R); ) {
              var z = O[0].length;
              if (I = O.index, x(g, I, g, I + z)) return true;
              if (!z && (t.lastIndex = I += L.skipEmptyMatch(R, I, f), I >= R.length)) return false;
            }
          };
          return {
            forEach: v
          };
        }, r;
      })();
      function l(r, n) {
        var e = L.supportsLookbehind();
        function t(S, b) {
          b === void 0 && (b = true);
          var f = e && n.$supportsUnicodeFlag ? new RegExp("[\\p{L}\\p{N}_]", "u") : new RegExp("\\w");
          return f.test(S) || n.regExp ? e && n.$supportsUnicodeFlag ? b ? "(?<=^|[^\\p{L}\\p{N}_])" : "(?=[^\\p{L}\\p{N}_]|$)" : "\\b" : "";
        }
        var s = Array.from(r), h = s[0], u = s[s.length - 1];
        return t(h) + r + t(u, false);
      }
      function i(r, n, e) {
        for (var t = null, s = 0; s <= r.length; ) {
          n.lastIndex = s;
          var h = n.exec(r);
          if (!h) break;
          var u = h.index + h[0].length;
          if (u > r.length - e) break;
          (!t || u > t.index + t[0].length) && (t = h), s = h.index + 1;
        }
        return t;
      }
      function o(r, n) {
        var e = 5e3, t = {
          row: n,
          column: 0
        }, s = r.doc.positionToIndex(t), h = s + e, u = r.doc.indexToPosition(h), S = u.row;
        return S + 1;
      }
      _.Search = a;
    }), ace.define("ace/keyboard/hash_handler", [
      "require",
      "exports",
      "module",
      "ace/lib/keys",
      "ace/lib/useragent"
    ], function(A, _, N) {
      var L = this && this.__extends || /* @__PURE__ */ (function() {
        var r = function(n, e) {
          return r = Object.setPrototypeOf || {
            __proto__: []
          } instanceof Array && function(t, s) {
            t.__proto__ = s;
          } || function(t, s) {
            for (var h in s) Object.prototype.hasOwnProperty.call(s, h) && (t[h] = s[h]);
          }, r(n, e);
        };
        return function(n, e) {
          if (typeof e != "function" && e !== null) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
          r(n, e);
          function t() {
            this.constructor = n;
          }
          n.prototype = e === null ? Object.create(e) : (t.prototype = e.prototype, new t());
        };
      })(), M = A("../lib/keys"), $ = A("../lib/useragent"), a = M.KEY_MODS, l = (function() {
        function r(n, e) {
          this.$init(n, e, false);
        }
        return r.prototype.$init = function(n, e, t) {
          this.platform = e || ($.isMac ? "mac" : "win"), this.commands = {}, this.commandKeyBinding = {}, this.addCommands(n), this.$singleCommand = t;
        }, r.prototype.addCommand = function(n) {
          this.commands[n.name] && this.removeCommand(n), this.commands[n.name] = n, n.bindKey && this._buildKeyHash(n);
        }, r.prototype.removeCommand = function(n, e) {
          var t = n && (typeof n == "string" ? n : n.name);
          n = this.commands[t], e || delete this.commands[t];
          var s = this.commandKeyBinding;
          for (var h in s) {
            var u = s[h];
            if (u == n) delete s[h];
            else if (Array.isArray(u)) {
              var S = u.indexOf(n);
              S != -1 && (u.splice(S, 1), u.length == 1 && (s[h] = u[0]));
            }
          }
        }, r.prototype.bindKey = function(n, e, t) {
          if (typeof n == "object" && n && (t == null && (t = n.position), n = n[this.platform]), !!n) {
            if (typeof e == "function") return this.addCommand({
              exec: e,
              bindKey: n,
              name: e.name || n
            });
            n.split("|").forEach(function(s) {
              var h = "";
              if (s.indexOf(" ") != -1) {
                var u = s.split(/\s+/);
                s = u.pop(), u.forEach(function(f) {
                  var c = this.parseKeys(f), w = a[c.hashId] + c.key;
                  h += (h ? " " : "") + w, this._addCommandToBinding(h, "chainKeys");
                }, this), h += " ";
              }
              var S = this.parseKeys(s), b = a[S.hashId] + S.key;
              this._addCommandToBinding(h + b, e, t);
            }, this);
          }
        }, r.prototype._addCommandToBinding = function(n, e, t) {
          var s = this.commandKeyBinding, h;
          if (!e) delete s[n];
          else if (!s[n] || this.$singleCommand) s[n] = e;
          else {
            Array.isArray(s[n]) ? (h = s[n].indexOf(e)) != -1 && s[n].splice(h, 1) : s[n] = [
              s[n]
            ], typeof t != "number" && (t = i(e));
            var u = s[n];
            for (h = 0; h < u.length; h++) {
              var S = u[h], b = i(S);
              if (b > t) break;
            }
            u.splice(h, 0, e);
          }
        }, r.prototype.addCommands = function(n) {
          n && Object.keys(n).forEach(function(e) {
            var t = n[e];
            if (t) {
              if (typeof t == "string") return this.bindKey(t, e);
              typeof t == "function" && (t = {
                exec: t
              }), typeof t == "object" && (t.name || (t.name = e), this.addCommand(t));
            }
          }, this);
        }, r.prototype.removeCommands = function(n) {
          Object.keys(n).forEach(function(e) {
            this.removeCommand(n[e]);
          }, this);
        }, r.prototype.bindKeys = function(n) {
          Object.keys(n).forEach(function(e) {
            this.bindKey(e, n[e]);
          }, this);
        }, r.prototype._buildKeyHash = function(n) {
          this.bindKey(n.bindKey, n);
        }, r.prototype.parseKeys = function(n) {
          var e = n.toLowerCase().split(/[\-\+]([\-\+])?/).filter(function(b) {
            return b;
          }), t = e.pop(), s = M[t];
          if (M.FUNCTION_KEYS[s]) t = M.FUNCTION_KEYS[s].toLowerCase();
          else if (e.length) {
            if (e.length == 1 && e[0] == "shift") return {
              key: t.toUpperCase(),
              hashId: -1
            };
          } else return {
            key: t,
            hashId: -1
          };
          for (var h = 0, u = e.length; u--; ) {
            var S = M.KEY_MODS[e[u]];
            if (S == null) return typeof console < "u" && console.error("invalid modifier " + e[u] + " in " + n), false;
            h |= S;
          }
          return {
            key: t,
            hashId: h
          };
        }, r.prototype.findKeyCommand = function(n, e) {
          var t = a[n] + e;
          return this.commandKeyBinding[t];
        }, r.prototype.handleKeyboard = function(n, e, t, s) {
          if (!(s < 0)) {
            var h = a[e] + t, u = this.commandKeyBinding[h];
            return n.$keyChain && (n.$keyChain += " " + h, u = this.commandKeyBinding[n.$keyChain] || u), u && (u == "chainKeys" || u[u.length - 1] == "chainKeys") ? (n.$keyChain = n.$keyChain || h, {
              command: "null"
            }) : (n.$keyChain && ((!e || e == 4) && t.length == 1 ? n.$keyChain = n.$keyChain.slice(0, -h.length - 1) : (e == -1 || s > 0) && (n.$keyChain = "")), {
              command: u
            });
          }
        }, r.prototype.getStatusText = function(n, e) {
          return e.$keyChain || "";
        }, r;
      })();
      function i(r) {
        return typeof r == "object" && r.bindKey && r.bindKey.position || (r.isDefault ? -100 : 0);
      }
      var o = (function(r) {
        L(n, r);
        function n(e, t) {
          var s = r.call(this, e, t) || this;
          return s.$singleCommand = true, s;
        }
        return n;
      })(l);
      o.call = function(r, n, e) {
        l.prototype.$init.call(r, n, e, true);
      }, l.call = function(r, n, e) {
        l.prototype.$init.call(r, n, e, false);
      }, _.HashHandler = o, _.MultiHashHandler = l;
    }), ace.define("ace/commands/command_manager", [
      "require",
      "exports",
      "module",
      "ace/lib/oop",
      "ace/keyboard/hash_handler",
      "ace/lib/event_emitter"
    ], function(A, _, N) {
      var L = this && this.__extends || /* @__PURE__ */ (function() {
        var i = function(o, r) {
          return i = Object.setPrototypeOf || {
            __proto__: []
          } instanceof Array && function(n, e) {
            n.__proto__ = e;
          } || function(n, e) {
            for (var t in e) Object.prototype.hasOwnProperty.call(e, t) && (n[t] = e[t]);
          }, i(o, r);
        };
        return function(o, r) {
          if (typeof r != "function" && r !== null) throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
          i(o, r);
          function n() {
            this.constructor = o;
          }
          o.prototype = r === null ? Object.create(r) : (n.prototype = r.prototype, new n());
        };
      })(), M = A("../lib/oop"), $ = A("../keyboard/hash_handler").MultiHashHandler, a = A("../lib/event_emitter").EventEmitter, l = (function(i) {
        L(o, i);
        function o(r, n) {
          var e = i.call(this, n, r) || this;
          return e.byName = e.commands, e.setDefaultHandler("exec", function(t) {
            return t.args ? t.command.exec(t.editor, t.args, t.event, false) : t.command.exec(t.editor, {}, t.event, true);
          }), e;
        }
        return o.prototype.exec = function(r, n, e) {
          if (Array.isArray(r)) {
            for (var t = r.length; t--; ) if (this.exec(r[t], n, e)) return true;
            return false;
          }
          typeof r == "string" && (r = this.commands[r]);
          var s = {
            editor: n,
            command: r,
            args: e
          };
          return this.canExecute(r, n) ? (s.returnValue = this._emit("exec", s), this._signal("afterExec", s), s.returnValue !== false) : (this._signal("commandUnavailable", s), false);
        }, o.prototype.canExecute = function(r, n) {
          return typeof r == "string" && (r = this.commands[r]), !(!r || n && n.$readOnly && !r.readOnly || this.$checkCommandState != false && r.isAvailable && !r.isAvailable(n));
        }, o.prototype.toggleRecording = function(r) {
          if (!this.$inReplay) return r && r._emit("changeStatus"), this.recording ? (this.macro.pop(), this.off("exec", this.$addCommandToMacro), this.macro.length || (this.macro = this.oldMacro), this.recording = false) : (this.$addCommandToMacro || (this.$addCommandToMacro = function(n) {
            this.macro.push([
              n.command,
              n.args
            ]);
          }.bind(this)), this.oldMacro = this.macro, this.macro = [], this.on("exec", this.$addCommandToMacro), this.recording = true);
        }, o.prototype.replay = function(r) {
          if (!(this.$inReplay || !this.macro)) {
            if (this.recording) return this.toggleRecording(r);
            try {
              this.$inReplay = true, this.macro.forEach(function(n) {
                typeof n == "string" ? this.exec(n, r) : this.exec(n[0], r, n[1]);
              }, this);
            } finally {
              this.$inReplay = false;
            }
          }
        }, o.prototype.trimMacro = function(r) {
          return r.map(function(n) {
            return typeof n[0] != "string" && (n[0] = n[0].name), n[1] || (n = n[0]), n;
          });
        }, o;
      })($);
      M.implement(l.prototype, a), _.CommandManager = l;
    }), ace.define("ace/commands/default_commands", [
      "require",
      "exports",
      "module",
      "ace/lib/lang",
      "ace/config",
      "ace/range"
    ], function(A, _, N) {
      var L = A("../lib/lang"), M = A("../config"), $ = A("../range").Range;
      function a(i, o) {
        return {
          win: i,
          mac: o
        };
      }
      _.commands = [
        {
          name: "showSettingsMenu",
          description: "Show settings menu",
          bindKey: a("Ctrl-,", "Command-,"),
          exec: function(i) {
            M.loadModule("ace/ext/settings_menu", function(o) {
              o.init(i), i.showSettingsMenu();
            });
          },
          readOnly: true
        },
        {
          name: "goToNextError",
          description: "Go to next error",
          bindKey: a("Alt-E", "F4"),
          exec: function(i) {
            M.loadModule("ace/ext/error_marker", function(o) {
              o.showErrorMarker(i, 1);
            });
          },
          scrollIntoView: "animate",
          readOnly: true
        },
        {
          name: "goToPreviousError",
          description: "Go to previous error",
          bindKey: a("Alt-Shift-E", "Shift-F4"),
          exec: function(i) {
            M.loadModule("ace/ext/error_marker", function(o) {
              o.showErrorMarker(i, -1);
            });
          },
          scrollIntoView: "animate",
          readOnly: true
        },
        {
          name: "selectall",
          description: "Select all",
          bindKey: a("Ctrl-A", "Command-A"),
          exec: function(i) {
            i.selectAll();
          },
          readOnly: true
        },
        {
          name: "centerselection",
          description: "Center selection",
          bindKey: a(null, "Ctrl-L"),
          exec: function(i) {
            i.centerSelection();
          },
          readOnly: true
        },
        {
          name: "gotoline",
          description: "Go to line...",
          bindKey: a("Ctrl-L", "Command-L"),
          exec: function(i, o) {
            typeof o == "number" && !isNaN(o) && i.gotoLine(o), i.prompt({
              $type: "gotoLine"
            });
          },
          readOnly: true
        },
        {
          name: "fold",
          bindKey: a("Alt-L|Ctrl-F1", "Command-Alt-L|Command-F1"),
          exec: function(i) {
            i.session.toggleFold(false);
          },
          multiSelectAction: "forEach",
          scrollIntoView: "center",
          readOnly: true
        },
        {
          name: "unfold",
          bindKey: a("Alt-Shift-L|Ctrl-Shift-F1", "Command-Alt-Shift-L|Command-Shift-F1"),
          exec: function(i) {
            i.session.toggleFold(true);
          },
          multiSelectAction: "forEach",
          scrollIntoView: "center",
          readOnly: true
        },
        {
          name: "toggleFoldWidget",
          description: "Toggle fold widget",
          bindKey: a("F2", "F2"),
          exec: function(i) {
            i.session.toggleFoldWidget();
          },
          multiSelectAction: "forEach",
          scrollIntoView: "center",
          readOnly: true
        },
        {
          name: "toggleParentFoldWidget",
          description: "Toggle parent fold widget",
          bindKey: a("Alt-F2", "Alt-F2"),
          exec: function(i) {
            i.session.toggleFoldWidget(true);
          },
          multiSelectAction: "forEach",
          scrollIntoView: "center",
          readOnly: true
        },
        {
          name: "foldall",
          description: "Fold all",
          bindKey: a(null, "Ctrl-Command-Option-0"),
          exec: function(i) {
            i.session.foldAll();
          },
          scrollIntoView: "center",
          readOnly: true
        },
        {
          name: "foldAllComments",
          description: "Fold all comments",
          bindKey: a(null, "Ctrl-Command-Option-0"),
          exec: function(i) {
            i.session.foldAllComments();
          },
          scrollIntoView: "center",
          readOnly: true
        },
        {
          name: "foldOther",
          description: "Fold other",
          bindKey: a("Alt-0", "Command-Option-0"),
          exec: function(i) {
            i.session.foldAll(), i.session.unfold(i.selection.getAllRanges());
          },
          scrollIntoView: "center",
          readOnly: true
        },
        {
          name: "unfoldall",
          description: "Unfold all",
          bindKey: a("Alt-Shift-0", "Command-Option-Shift-0"),
          exec: function(i) {
            i.session.unfold();
          },
          scrollIntoView: "center",
          readOnly: true
        },
        {
          name: "findnext",
          description: "Find next",
          bindKey: a("Ctrl-K", "Command-G"),
          exec: function(i) {
            i.findNext();
          },
          multiSelectAction: "forEach",
          scrollIntoView: "center",
          readOnly: true
        },
        {
          name: "findprevious",
          description: "Find previous",
          bindKey: a("Ctrl-Shift-K", "Command-Shift-G"),
          exec: function(i) {
            i.findPrevious();
          },
          multiSelectAction: "forEach",
          scrollIntoView: "center",
          readOnly: true
        },
        {
          name: "selectOrFindNext",
          description: "Select or find next",
          bindKey: a("Alt-K", "Ctrl-G"),
          exec: function(i) {
            i.selection.isEmpty() ? i.selection.selectWord() : i.findNext();
          },
          readOnly: true
        },
        {
          name: "selectOrFindPrevious",
          description: "Select or find previous",
          bindKey: a("Alt-Shift-K", "Ctrl-Shift-G"),
          exec: function(i) {
            i.selection.isEmpty() ? i.selection.selectWord() : i.findPrevious();
          },
          readOnly: true
        },
        {
          name: "find",
          description: "Find",
          bindKey: a("Ctrl-F", "Command-F"),
          exec: function(i) {
            M.loadModule("ace/ext/searchbox", function(o) {
              o.Search(i);
            });
          },
          readOnly: true
        },
        {
          name: "overwrite",
          description: "Overwrite",
          bindKey: "Insert",
          exec: function(i) {
            i.toggleOverwrite();
          },
          readOnly: true
        },
        {
          name: "selecttostart",
          description: "Select to start",
          bindKey: a("Ctrl-Shift-Home", "Command-Shift-Home|Command-Shift-Up"),
          exec: function(i) {
            i.getSelection().selectFileStart();
          },
          multiSelectAction: "forEach",
          readOnly: true,
          scrollIntoView: "animate",
          aceCommandGroup: "fileJump"
        },
        {
          name: "gotostart",
          description: "Go to start",
          bindKey: a("Ctrl-Home", "Command-Home|Command-Up"),
          exec: function(i) {
            i.navigateFileStart();
          },
          multiSelectAction: "forEach",
          readOnly: true,
          scrollIntoView: "animate",
          aceCommandGroup: "fileJump"
        },
        {
          name: "selectup",
          description: "Select up",
          bindKey: a("Shift-Up", "Shift-Up|Ctrl-Shift-P"),
          exec: function(i) {
            i.getSelection().selectUp();
          },
          multiSelectAction: "forEach",
          scrollIntoView: "cursor",
          readOnly: true
        },
        {
          name: "golineup",
          description: "Go line up",
          bindKey: a("Up", "Up|Ctrl-P"),
          exec: function(i, o) {
            i.navigateUp(o.times);
          },
          multiSelectAction: "forEach",
          scrollIntoView: "cursor",
          readOnly: true
        },
        {
          name: "selecttoend",
          description: "Select to end",
          bindKey: a("Ctrl-Shift-End", "Command-Shift-End|Command-Shift-Down"),
          exec: function(i) {
            i.getSelection().selectFileEnd();
          },
          multiSelectAction: "forEach",
          readOnly: true,
          scrollIntoView: "animate",
          aceCommandGroup: "fileJump"
        },
        {
          name: "gotoend",
          description: "Go to end",
          bindKey: a("Ctrl-End", "Command-End|Command-Down"),
          exec: function(i) {
            i.navigateFileEnd();
          },
          multiSelectAction: "forEach",
          readOnly: true,
          scrollIntoView: "animate",
          aceCommandGroup: "fileJump"
        },
        {
          name: "selectdown",
          description: "Select down",
          bindKey: a("Shift-Down", "Shift-Down|Ctrl-Shift-N"),
          exec: function(i) {
            i.getSelection().selectDown();
          },
          multiSelectAction: "forEach",
          scrollIntoView: "cursor",
          readOnly: true
        },
        {
          name: "golinedown",
          description: "Go line down",
          bindKey: a("Down", "Down|Ctrl-N"),
          exec: function(i, o) {
            i.navigateDown(o.times);
          },
          multiSelectAction: "forEach",
          scrollIntoView: "cursor",
          readOnly: true
        },
        {
          name: "selectwordleft",
          description: "Select word left",
          bindKey: a("Ctrl-Shift-Left", "Option-Shift-Left"),
          exec: function(i) {
            i.getSelection().selectWordLeft();
          },
          multiSelectAction: "forEach",
          scrollIntoView: "cursor",
          readOnly: true
        },
        {
          name: "gotowordleft",
          description: "Go to word left",
          bindKey: a("Ctrl-Left", "Option-Left"),
          exec: function(i) {
            i.navigateWordLeft();
          },
          multiSelectAction: "forEach",
          scrollIntoView: "cursor",
          readOnly: true
        },
        {
          name: "selecttolinestart",
          description: "Select to line start",
          bindKey: a("Alt-Shift-Left", "Command-Shift-Left|Ctrl-Shift-A"),
          exec: function(i) {
            i.getSelection().selectLineStart();
          },
          multiSelectAction: "forEach",
          scrollIntoView: "cursor",
          readOnly: true
        },
        {
          name: "gotolinestart",
          description: "Go to line start",
          bindKey: a("Alt-Left|Home", "Command-Left|Home|Ctrl-A"),
          exec: function(i) {
            i.navigateLineStart();
          },
          multiSelectAction: "forEach",
          scrollIntoView: "cursor",
          readOnly: true
        },
        {
          name: "selectleft",
          description: "Select left",
          bindKey: a("Shift-Left", "Shift-Left|Ctrl-Shift-B"),
          exec: function(i) {
            i.getSelection().selectLeft();
          },
          multiSelectAction: "forEach",
          scrollIntoView: "cursor",
          readOnly: true
        },
        {
          name: "gotoleft",
          description: "Go to left",
          bindKey: a("Left", "Left|Ctrl-B"),
          exec: function(i, o) {
            i.navigateLeft(o.times);
          },
          multiSelectAction: "forEach",
          scrollIntoView: "cursor",
          readOnly: true
        },
        {
          name: "selectwordright",
          description: "Select word right",
          bindKey: a("Ctrl-Shift-Right", "Option-Shift-Right"),
          exec: function(i) {
            i.getSelection().selectWordRight();
          },
          multiSelectAction: "forEach",
          scrollIntoView: "cursor",
          readOnly: true
        },
        {
          name: "gotowordright",
          description: "Go to word right",
          bindKey: a("Ctrl-Right", "Option-Right"),
          exec: function(i) {
            i.navigateWordRight();
          },
          multiSelectAction: "forEach",
          scrollIntoView: "cursor",
          readOnly: true
        },
        {
          name: "selecttolineend",
          description: "Select to line end",
          bindKey: a("Alt-Shift-Right", "Command-Shift-Right|Shift-End|Ctrl-Shift-E"),
          exec: function(i) {
            i.getSelection().selectLineEnd();
          },
          multiSelectAction: "forEach",
          scrollIntoView: "cursor",
          readOnly: true
        },
        {
          name: "gotolineend",
          description: "Go to line end",
          bindKey: a("Alt-Right|End", "Command-Right|End|Ctrl-E"),
          exec: function(i) {
            i.navigateLineEnd();
          },
          multiSelectAction: "forEach",
          scrollIntoView: "cursor",
          readOnly: true
        },
        {
          name: "selectright",
          description: "Select right",
          bindKey: a("Shift-Right", "Shift-Right"),
          exec: function(i) {
            i.getSelection().selectRight();
          },
          multiSelectAction: "forEach",
          scrollIntoView: "cursor",
          readOnly: true
        },
        {
          name: "gotoright",
          description: "Go to right",
          bindKey: a("Right", "Right|Ctrl-F"),
          exec: function(i, o) {
            i.navigateRight(o.times);
          },
          multiSelectAction: "forEach",
          scrollIntoView: "cursor",
          readOnly: true
        },
        {
          name: "selectpagedown",
          description: "Select page down",
          bindKey: "Shift-PageDown",
          exec: function(i) {
            i.selectPageDown();
          },
          readOnly: true
        },
        {
          name: "pagedown",
          description: "Page down",
          bindKey: a(null, "Option-PageDown"),
          exec: function(i) {
            i.scrollPageDown();
          },
          readOnly: true
        },
        {
          name: "gotopagedown",
          description: "Go to page down",
          bindKey: a("PageDown", "PageDown|Ctrl-V"),
          exec: function(i) {
            i.gotoPageDown();
          },
          readOnly: true
        },
        {
          name: "selectpageup",
          description: "Select page up",
          bindKey: "Shift-PageUp",
          exec: function(i) {
            i.selectPageUp();
          },
          readOnly: true
        },
        {
          name: "pageup",
          description: "Page up",
          bindKey: a(null, "Option-PageUp"),
          exec: function(i) {
            i.scrollPageUp();
          },
          readOnly: true
        },
        {
          name: "gotopageup",
          description: "Go to page up",
          bindKey: "PageUp",
          exec: function(i) {
            i.gotoPageUp();
          },
          readOnly: true
        },
        {
          name: "scrollup",
          description: "Scroll up",
          bindKey: a("Ctrl-Up", null),
          exec: function(i) {
            i.renderer.scrollBy(0, -2 * i.renderer.layerConfig.lineHeight);
          },
          readOnly: true
        },
        {
          name: "scrolldown",
          description: "Scroll down",
          bindKey: a("Ctrl-Down", null),
          exec: function(i) {
            i.renderer.scrollBy(0, 2 * i.renderer.layerConfig.lineHeight);
          },
          readOnly: true
        },
        {
          name: "selectlinestart",
          description: "Select line start",
          bindKey: "Shift-Home",
          exec: function(i) {
            i.getSelection().selectLineStart();
          },
          multiSelectAction: "forEach",
          scrollIntoView: "cursor",
          readOnly: true
        },
        {
          name: "selectlineend",
          description: "Select line end",
          bindKey: "Shift-End",
          exec: function(i) {
            i.getSelection().selectLineEnd();
          },
          multiSelectAction: "forEach",
          scrollIntoView: "cursor",
          readOnly: true
        },
        {
          name: "togglerecording",
          description: "Toggle recording",
          bindKey: a("Ctrl-Alt-E", "Command-Option-E"),
          exec: function(i) {
            i.commands.toggleRecording(i);
          },
          readOnly: true
        },
        {
          name: "replaymacro",
          description: "Replay macro",
          bindKey: a("Ctrl-Shift-E", "Command-Shift-E"),
          exec: function(i) {
            i.commands.replay(i);
          },
          readOnly: true
        },
        {
          name: "jumptomatching",
          description: "Jump to matching",
          bindKey: a("Ctrl-\\|Ctrl-P", "Command-\\"),
          exec: function(i) {
            i.jumpToMatching();
          },
          multiSelectAction: "forEach",
          scrollIntoView: "animate",
          readOnly: true
        },
        {
          name: "selecttomatching",
          description: "Select to matching",
          bindKey: a("Ctrl-Shift-\\|Ctrl-Shift-P", "Command-Shift-\\"),
          exec: function(i) {
            i.jumpToMatching(true);
          },
          multiSelectAction: "forEach",
          scrollIntoView: "animate",
          readOnly: true
        },
        {
          name: "expandToMatching",
          description: "Expand to matching",
          bindKey: a("Ctrl-Shift-M", "Ctrl-Shift-M"),
          exec: function(i) {
            i.jumpToMatching(true, true);
          },
          multiSelectAction: "forEach",
          scrollIntoView: "animate",
          readOnly: true
        },
        {
          name: "passKeysToBrowser",
          description: "Pass keys to browser",
          bindKey: a(null, null),
          exec: function() {
          },
          passEvent: true,
          readOnly: true
        },
        {
          name: "copy",
          description: "Copy",
          exec: function(i) {
          },
          readOnly: true
        },
        {
          name: "cut",
          description: "Cut",
          exec: function(i) {
            var o = i.$copyWithEmptySelection && i.selection.isEmpty(), r = o ? i.selection.getLineRange() : i.selection.getRange();
            i._emit("cut", r), r.isEmpty() || i.session.remove(r), i.clearSelection();
          },
          scrollIntoView: "cursor",
          multiSelectAction: "forEach"
        },
        {
          name: "paste",
          description: "Paste",
          exec: function(i, o) {
            i.$handlePaste(o);
          },
          scrollIntoView: "cursor"
        },
        {
          name: "removeline",
          description: "Remove line",
          bindKey: a("Ctrl-D", "Command-D"),
          exec: function(i) {
            i.removeLines();
          },
          scrollIntoView: "cursor",
          multiSelectAction: "forEachLine"
        },
        {
          name: "duplicateSelection",
          description: "Duplicate selection",
          bindKey: a("Ctrl-Shift-D", "Command-Shift-D"),
          exec: function(i) {
            i.duplicateSelection();
          },
          scrollIntoView: "cursor",
          multiSelectAction: "forEach"
        },
        {
          name: "sortlines",
          description: "Sort lines",
          bindKey: a("Ctrl-Alt-S", "Command-Alt-S"),
          exec: function(i) {
            i.sortLines();
          },
          scrollIntoView: "selection",
          multiSelectAction: "forEachLine"
        },
        {
          name: "togglecomment",
          description: "Toggle comment",
          bindKey: a("Ctrl-/", "Command-/"),
          exec: function(i) {
            i.toggleCommentLines();
          },
          multiSelectAction: "forEachLine",
          scrollIntoView: "selectionPart"
        },
        {
          name: "toggleBlockComment",
          description: "Toggle block comment",
          bindKey: a("Ctrl-Shift-/", "Command-Shift-/"),
          exec: function(i) {
            i.toggleBlockComment();
          },
          multiSelectAction: "forEach",
          scrollIntoView: "selectionPart"
        },
        {
          name: "modifyNumberUp",
          description: "Modify number up",
          bindKey: a("Ctrl-Shift-Up", "Alt-Shift-Up"),
          exec: function(i) {
            i.modifyNumber(1);
          },
          scrollIntoView: "cursor",
          multiSelectAction: "forEach"
        },
        {
          name: "modifyNumberDown",
          description: "Modify number down",
          bindKey: a("Ctrl-Shift-Down", "Alt-Shift-Down"),
          exec: function(i) {
            i.modifyNumber(-1);
          },
          scrollIntoView: "cursor",
          multiSelectAction: "forEach"
        },
        {
          name: "replace",
          description: "Replace",
          bindKey: a("Ctrl-H", "Command-Option-F"),
          exec: function(i) {
            M.loadModule("ace/ext/searchbox", function(o) {
              o.Search(i, true);
            });
          }
        },
        {
          name: "undo",
          description: "Undo",
          bindKey: a("Ctrl-Z", "Command-Z"),
          exec: function(i) {
            i.undo();
          }
        },
        {
          name: "redo",
          description: "Redo",
          bindKey: a("Ctrl-Shift-Z|Ctrl-Y", "Command-Shift-Z|Command-Y"),
          exec: function(i) {
            i.redo();
          }
        },
        {
          name: "copylinesup",
          description: "Copy lines up",
          bindKey: a("Alt-Shift-Up", "Command-Option-Up"),
          exec: function(i) {
            i.copyLinesUp();
          },
          scrollIntoView: "cursor"
        },
        {
          name: "movelinesup",
          description: "Move lines up",
          bindKey: a("Alt-Up", "Option-Up"),
          exec: function(i) {
            i.moveLinesUp();
          },
          scrollIntoView: "cursor"
        },
        {
          name: "copylinesdown",
          description: "Copy lines down",
          bindKey: a("Alt-Shift-Down", "Command-Option-Down"),
          exec: function(i) {
            i.copyLinesDown();
          },
          scrollIntoView: "cursor"
        },
        {
          name: "movelinesdown",
          description: "Move lines down",
          bindKey: a("Alt-Down", "Option-Down"),
          exec: function(i) {
            i.moveLinesDown();
          },
          scrollIntoView: "cursor"
        },
        {
          name: "del",
          description: "Delete",
          bindKey: a("Delete", "Delete|Ctrl-D|Shift-Delete"),
          exec: function(i) {
            i.remove("right");
          },
          multiSelectAction: "forEach",
          scrollIntoView: "cursor"
        },
        {
          name: "backspace",
          description: "Backspace",
          bindKey: a("Shift-Backspace|Backspace", "Ctrl-Backspace|Shift-Backspace|Backspace|Ctrl-H"),
          exec: function(i) {
            i.remove("left");
          },
          multiSelectAction: "forEach",
          scrollIntoView: "cursor"
        },
        {
          name: "cut_or_delete",
          description: "Cut or delete",
          bindKey: a("Shift-Delete", null),
          exec: function(i) {
            if (i.selection.isEmpty()) i.remove("left");
            else return false;
          },
          multiSelectAction: "forEach",
          scrollIntoView: "cursor"
        },
        {
          name: "removetolinestart",
          description: "Remove to line start",
          bindKey: a("Alt-Backspace", "Command-Backspace"),
          exec: function(i) {
            i.removeToLineStart();
          },
          multiSelectAction: "forEach",
          scrollIntoView: "cursor"
        },
        {
          name: "removetolineend",
          description: "Remove to line end",
          bindKey: a("Alt-Delete", "Ctrl-K|Command-Delete"),
          exec: function(i) {
            i.removeToLineEnd();
          },
          multiSelectAction: "forEach",
          scrollIntoView: "cursor"
        },
        {
          name: "removetolinestarthard",
          description: "Remove to line start hard",
          bindKey: a("Ctrl-Shift-Backspace", null),
          exec: function(i) {
            var o = i.selection.getRange();
            o.start.column = 0, i.session.remove(o);
          },
          multiSelectAction: "forEach",
          scrollIntoView: "cursor"
        },
        {
          name: "removetolineendhard",
          description: "Remove to line end hard",
          bindKey: a("Ctrl-Shift-Delete", null),
          exec: function(i) {
            var o = i.selection.getRange();
            o.end.column = Number.MAX_VALUE, i.session.remove(o);
          },
          multiSelectAction: "forEach",
          scrollIntoView: "cursor"
        },
        {
          name: "removewordleft",
          description: "Remove word left",
          bindKey: a("Ctrl-Backspace", "Alt-Backspace|Ctrl-Alt-Backspace"),
          exec: function(i) {
            i.removeWordLeft();
          },
          multiSelectAction: "forEach",
          scrollIntoView: "cursor"
        },
        {
          name: "removewordright",
          description: "Remove word right",
          bindKey: a("Ctrl-Delete", "Alt-Delete"),
          exec: function(i) {
            i.removeWordRight();
          },
          multiSelectAction: "forEach",
          scrollIntoView: "cursor"
        },
        {
          name: "outdent",
          description: "Outdent",
          bindKey: a("Shift-Tab", "Shift-Tab"),
          exec: function(i) {
            i.blockOutdent();
          },
          multiSelectAction: "forEach",
          scrollIntoView: "selectionPart"
        },
        {
          name: "indent",
          description: "Indent",
          bindKey: a("Tab", "Tab"),
          exec: function(i) {
            i.indent();
          },
          multiSelectAction: "forEach",
          scrollIntoView: "selectionPart"
        },
        {
          name: "blockoutdent",
          description: "Block outdent",
          bindKey: a("Ctrl-[", "Ctrl-["),
          exec: function(i) {
            i.blockOutdent();
          },
          multiSelectAction: "forEachLine",
          scrollIntoView: "selectionPart"
        },
        {
          name: "blockindent",
          description: "Block indent",
          bindKey: a("Ctrl-]", "Ctrl-]"),
          exec: function(i) {
            i.blockIndent();
          },
          multiSelectAction: "forEachLine",
          scrollIntoView: "selectionPart"
        },
        {
          name: "insertstring",
          description: "Insert string",
          exec: function(i, o) {
            i.insert(o);
          },
          multiSelectAction: "forEach",
          scrollIntoView: "cursor"
        },
        {
          name: "inserttext",
          description: "Insert text",
          exec: function(i, o) {
            i.insert(L.stringRepeat(o.text || "", o.times || 1));
          },
          multiSelectAction: "forEach",
          scrollIntoView: "cursor"
        },
        {
          name: "splitline",
          description: "Split line",
          bindKey: a(null, "Ctrl-O"),
          exec: function(i) {
            i.splitLine();
          },
          multiSelectAction: "forEach",
          scrollIntoView: "cursor"
        },
        {
          name: "transposeletters",
          description: "Transpose letters",
          bindKey: a("Alt-Shift-X", "Ctrl-T"),
          exec: function(i) {
            i.transposeLetters();
          },
          multiSelectAction: function(i) {
            i.transposeSelections(1);
          },
          scrollIntoView: "cursor"
        },
        {
          name: "touppercase",
          description: "To uppercase",
          bindKey: a("Ctrl-U", "Ctrl-U"),
          exec: function(i) {
            i.toUpperCase();
          },
          multiSelectAction: "forEach",
          scrollIntoView: "cursor"
        },
        {
          name: "tolowercase",
          description: "To lowercase",
          bindKey: a("Ctrl-Shift-U", "Ctrl-Shift-U"),
          exec: function(i) {
            i.toLowerCase();
          },
          multiSelectAction: "forEach",
          scrollIntoView: "cursor"
        },
        {
          name: "autoindent",
          description: "Auto Indent",
          bindKey: a(null, null),
          exec: function(i) {
            i.autoIndent();
          },
          scrollIntoView: "animate"
        },
        {
          name: "expandtoline",
          description: "Expand to line",
          bindKey: a("Ctrl-Shift-L", "Command-Shift-L"),
          exec: function(i) {
            var o = i.selection.getRange();
            o.start.column = o.end.column = 0, o.end.row++, i.selection.setRange(o, false);
          },
          multiSelectAction: "forEach",
          scrollIntoView: "cursor",
          readOnly: true
        },
        {
          name: "openlink",
          bindKey: a("Ctrl+F3", "F3"),
          exec: function(i) {
            i.openLink();
          }
        },
        {
          name: "joinlines",
          description: "Join lines",
          bindKey: a(null, null),
          exec: function(i) {
            for (var o = i.selection.isBackwards(), r = o ? i.selection.getSelectionLead() : i.selection.getSelectionAnchor(), n = o ? i.selection.getSelectionAnchor() : i.selection.getSelectionLead(), e = i.session.doc.getLine(r.row).length, t = i.session.doc.getTextRange(i.selection.getRange()), s = t.replace(/\n\s*/, " ").length, h = i.session.doc.getLine(r.row), u = r.row + 1; u <= n.row + 1; u++) {
              var S = L.stringTrimLeft(L.stringTrimRight(i.session.doc.getLine(u)));
              S.length !== 0 && (S = " " + S), h += S;
            }
            n.row + 1 < i.session.doc.getLength() - 1 && (h += i.session.doc.getNewLineCharacter()), i.clearSelection(), i.session.doc.replace(new $(r.row, 0, n.row + 2, 0), h), s > 0 ? (i.selection.moveCursorTo(r.row, r.column), i.selection.selectTo(r.row, r.column + s)) : (e = i.session.doc.getLine(r.row).length > e ? e + 1 : e, i.selection.moveCursorTo(r.row, e));
          },
          multiSelectAction: "forEach",
          readOnly: true
        },
        {
          name: "invertSelection",
          description: "Invert selection",
          bindKey: a(null, null),
          exec: function(i) {
            var o = i.session.doc.getLength() - 1, r = i.session.doc.getLine(o).length, n = i.selection.rangeList.ranges, e = [];
            n.length < 1 && (n = [
              i.selection.getRange()
            ]);
            for (var t = 0; t < n.length; t++) t == n.length - 1 && (n[t].end.row === o && n[t].end.column === r || e.push(new $(n[t].end.row, n[t].end.column, o, r))), t === 0 ? n[t].start.row === 0 && n[t].start.column === 0 || e.push(new $(0, 0, n[t].start.row, n[t].start.column)) : e.push(new $(n[t - 1].end.row, n[t - 1].end.column, n[t].start.row, n[t].start.column));
            i.exitMultiSelectMode(), i.clearSelection();
            for (var t = 0; t < e.length; t++) i.selection.addRange(e[t], false);
          },
          readOnly: true,
          scrollIntoView: "none"
        },
        {
          name: "addLineAfter",
          description: "Add new line after the current line",
          exec: function(i) {
            i.selection.clearSelection(), i.navigateLineEnd(), i.insert(`
`);
          },
          multiSelectAction: "forEach",
          scrollIntoView: "cursor"
        },
        {
          name: "addLineBefore",
          description: "Add new line before the current line",
          exec: function(i) {
            i.selection.clearSelection();
            var o = i.getCursorPosition();
            i.selection.moveTo(o.row - 1, Number.MAX_VALUE), i.insert(`
`), o.row === 0 && i.navigateUp();
          },
          multiSelectAction: "forEach",
          scrollIntoView: "cursor"
        },
        {
          name: "openCommandPallete",
          exec: function(i) {
            console.warn("This is an obsolete command. Please use `openCommandPalette` instead."), i.prompt({
              $type: "commands"
            });
          },
          readOnly: true
        },
        {
          name: "openCommandPalette",
          description: "Open command palette",
          bindKey: a("F1", "F1"),
          exec: function(i) {
            i.prompt({
              $type: "commands"
            });
          },
          readOnly: true
        },
        {
          name: "modeSelect",
          description: "Change language mode...",
          bindKey: a(null, null),
          exec: function(i) {
            i.prompt({
              $type: "modes"
            });
          },
          readOnly: true
        }
      ];
      for (var l = 1; l < 9; l++) _.commands.push({
        name: "foldToLevel" + l,
        description: "Fold To Level " + l,
        level: l,
        exec: function(i) {
          i.session.foldToLevel(this.level);
        },
        scrollIntoView: "center",
        readOnly: true
      });
    }), ace.define("ace/keyboard/gutter_handler", [
      "require",
      "exports",
      "module",
      "ace/lib/keys"
    ], function(A, _, N) {
      var L = A("../lib/keys"), M = (function() {
        function a(l) {
          this.editor = l, this.gutterLayer = l.renderer.$gutterLayer, this.element = l.renderer.$gutter, this.lines = l.renderer.$gutterLayer.$lines, this.activeRowIndex = null, this.activeLane = null, this.annotationTooltip = this.editor.$mouseHandler.$tooltip;
        }
        return a.prototype.addListener = function() {
          this.element.addEventListener("keydown", this.$onGutterKeyDown.bind(this)), this.element.addEventListener("focusout", this.$blurGutter.bind(this)), this.editor.on("mousewheel", this.$blurGutter.bind(this));
        }, a.prototype.removeListener = function() {
          this.element.removeEventListener("keydown", this.$onGutterKeyDown.bind(this)), this.element.removeEventListener("focusout", this.$blurGutter.bind(this)), this.editor.off("mousewheel", this.$blurGutter.bind(this));
        }, a.prototype.$onGutterKeyDown = function(l) {
          if (this.annotationTooltip.isOpen) {
            l.preventDefault(), l.keyCode === L.escape && this.annotationTooltip.hide();
            return;
          }
          if (l.target === this.element) {
            if (l.keyCode != L.enter) return;
            l.preventDefault();
            var i = this.editor.getCursorPosition().row;
            this.editor.isRowVisible(i) || this.editor.scrollToLine(i, true, true), setTimeout(function() {
              var o = this.$rowToRowIndex(this.gutterLayer.$cursorCell.row), r = this.$findNearestFoldLaneWidget(o), n = this.$findNearestAnnotation(o);
              if (!(r === null && n === null)) {
                var e = this.$findClosestNumber(r, n, o);
                if (e === r) if (this.activeLane = "fold", this.activeRowIndex = r, this.$isCustomWidgetVisible(r)) {
                  this.$focusCustomWidget(this.activeRowIndex);
                  return;
                } else {
                  this.$focusFoldWidget(this.activeRowIndex);
                  return;
                }
                else {
                  this.activeRowIndex = n, this.activeLane = "annotation", this.$focusAnnotation(this.activeRowIndex);
                  return;
                }
              }
            }.bind(this), 10);
            return;
          }
          this.$handleGutterKeyboardInteraction(l), setTimeout(function() {
            this.editor._signal("gutterkeydown", new $(l, this));
          }.bind(this), 10);
        }, a.prototype.$handleGutterKeyboardInteraction = function(l) {
          if (l.keyCode === L.tab) {
            l.preventDefault();
            return;
          }
          if (l.keyCode === L.escape) {
            l.preventDefault(), this.$blurGutter(), this.element.focus(), this.lane = null;
            return;
          }
          if (l.keyCode === L.up) {
            switch (l.preventDefault(), this.activeLane) {
              case "fold":
                this.$moveFoldWidgetUp();
                break;
              case "annotation":
                this.$moveAnnotationUp();
                break;
            }
            return;
          }
          if (l.keyCode === L.down) {
            switch (l.preventDefault(), this.activeLane) {
              case "fold":
                this.$moveFoldWidgetDown();
                break;
              case "annotation":
                this.$moveAnnotationDown();
                break;
            }
            return;
          }
          if (l.keyCode === L.left) {
            l.preventDefault(), this.$switchLane("annotation");
            return;
          }
          if (l.keyCode === L.right) {
            l.preventDefault(), this.$switchLane("fold");
            return;
          }
          if (l.keyCode === L.enter || l.keyCode === L.space) {
            switch (l.preventDefault(), this.activeLane) {
              case "fold":
                var i = this.$rowIndexToRow(this.activeRowIndex), o = this.editor.session.$gutterCustomWidgets[i];
                if (o) o.callbacks && o.callbacks.onClick && o.callbacks.onClick(l, i);
                else if (this.gutterLayer.session.foldWidgets[i] === "start") {
                  this.editor.session.onFoldWidgetClick(this.$rowIndexToRow(this.activeRowIndex), l), setTimeout(function() {
                    this.$rowIndexToRow(this.activeRowIndex) !== i && (this.$blurFoldWidget(this.activeRowIndex), this.activeRowIndex = this.$rowToRowIndex(i), this.$focusFoldWidget(this.activeRowIndex));
                  }.bind(this), 10);
                  break;
                } else if (this.gutterLayer.session.foldWidgets[this.$rowIndexToRow(this.activeRowIndex)] === "end") break;
                return;
              case "annotation":
                this.annotationTooltip.showTooltip(this.$rowIndexToRow(this.activeRowIndex)), this.annotationTooltip.$fromKeyboard = true;
                break;
            }
            return;
          }
        }, a.prototype.$blurGutter = function() {
          if (this.activeRowIndex !== null) switch (this.activeLane) {
            case "fold":
              this.$blurFoldWidget(this.activeRowIndex), this.$blurCustomWidget(this.activeRowIndex);
              break;
            case "annotation":
              this.$blurAnnotation(this.activeRowIndex);
              break;
          }
          this.annotationTooltip.isOpen && this.annotationTooltip.hide();
        }, a.prototype.$isFoldWidgetVisible = function(l) {
          var i = this.editor.isRowFullyVisible(this.$rowIndexToRow(l)), o = this.$getFoldWidget(l).style.display !== "none";
          return i && o;
        }, a.prototype.$isCustomWidgetVisible = function(l) {
          var i = this.editor.isRowFullyVisible(this.$rowIndexToRow(l)), o = !!this.$getCustomWidget(l);
          return i && o;
        }, a.prototype.$isAnnotationVisible = function(l) {
          var i = this.editor.isRowFullyVisible(this.$rowIndexToRow(l)), o = this.$getAnnotation(l).style.display !== "none";
          return i && o;
        }, a.prototype.$getFoldWidget = function(l) {
          var i = this.lines.get(l), o = i.element;
          return o.childNodes[1];
        }, a.prototype.$getCustomWidget = function(l) {
          var i = this.lines.get(l), o = i.element;
          return o.childNodes[3];
        }, a.prototype.$getAnnotation = function(l) {
          var i = this.lines.get(l), o = i.element;
          return o.childNodes[2];
        }, a.prototype.$findNearestFoldLaneWidget = function(l) {
          if (this.$isCustomWidgetVisible(l) || this.$isFoldWidgetVisible(l)) return l;
          for (var i = 0; l - i > 0 || l + i < this.lines.getLength() - 1; ) {
            if (i++, l - i >= 0 && this.$isCustomWidgetVisible(l - i)) return l - i;
            if (l + i <= this.lines.getLength() - 1 && this.$isCustomWidgetVisible(l + i)) return l + i;
            if (l - i >= 0 && this.$isFoldWidgetVisible(l - i)) return l - i;
            if (l + i <= this.lines.getLength() - 1 && this.$isFoldWidgetVisible(l + i)) return l + i;
          }
          return null;
        }, a.prototype.$findNearestAnnotation = function(l) {
          if (this.$isAnnotationVisible(l)) return l;
          for (var i = 0; l - i > 0 || l + i < this.lines.getLength() - 1; ) {
            if (i++, l - i >= 0 && this.$isAnnotationVisible(l - i)) return l - i;
            if (l + i <= this.lines.getLength() - 1 && this.$isAnnotationVisible(l + i)) return l + i;
          }
          return null;
        }, a.prototype.$focusFoldWidget = function(l) {
          if (l != null) {
            var i = this.$getFoldWidget(l);
            i.classList.add(this.editor.renderer.keyboardFocusClassName), i.focus();
          }
        }, a.prototype.$focusCustomWidget = function(l) {
          if (l != null) {
            var i = this.$getCustomWidget(l);
            i && (i.classList.add(this.editor.renderer.keyboardFocusClassName), i.focus());
          }
        }, a.prototype.$focusAnnotation = function(l) {
          if (l != null) {
            var i = this.$getAnnotation(l);
            i.classList.add(this.editor.renderer.keyboardFocusClassName), i.focus();
          }
        }, a.prototype.$blurFoldWidget = function(l) {
          var i = this.$getFoldWidget(l);
          i.classList.remove(this.editor.renderer.keyboardFocusClassName), i.blur();
        }, a.prototype.$blurCustomWidget = function(l) {
          var i = this.$getCustomWidget(l);
          i && (i.classList.remove(this.editor.renderer.keyboardFocusClassName), i.blur());
        }, a.prototype.$blurAnnotation = function(l) {
          var i = this.$getAnnotation(l);
          i.classList.remove(this.editor.renderer.keyboardFocusClassName), i.blur();
        }, a.prototype.$moveFoldWidgetUp = function() {
          for (var l = this.activeRowIndex; l > 0; ) if (l--, this.$isFoldWidgetVisible(l) || this.$isCustomWidgetVisible(l)) {
            this.$blurFoldWidget(this.activeRowIndex), this.$blurCustomWidget(this.activeRowIndex), this.activeRowIndex = l, this.$isFoldWidgetVisible(l) ? this.$focusFoldWidget(this.activeRowIndex) : this.$focusCustomWidget(this.activeRowIndex);
            return;
          }
        }, a.prototype.$moveFoldWidgetDown = function() {
          for (var l = this.activeRowIndex; l < this.lines.getLength() - 1; ) if (l++, this.$isFoldWidgetVisible(l) || this.$isCustomWidgetVisible(l)) {
            this.$blurFoldWidget(this.activeRowIndex), this.$blurCustomWidget(this.activeRowIndex), this.activeRowIndex = l, this.$isFoldWidgetVisible(l) ? this.$focusFoldWidget(this.activeRowIndex) : this.$focusCustomWidget(this.activeRowIndex);
            return;
          }
        }, a.prototype.$moveAnnotationUp = function() {
          for (var l = this.activeRowIndex; l > 0; ) if (l--, this.$isAnnotationVisible(l)) {
            this.$blurAnnotation(this.activeRowIndex), this.activeRowIndex = l, this.$focusAnnotation(this.activeRowIndex);
            return;
          }
        }, a.prototype.$moveAnnotationDown = function() {
          for (var l = this.activeRowIndex; l < this.lines.getLength() - 1; ) if (l++, this.$isAnnotationVisible(l)) {
            this.$blurAnnotation(this.activeRowIndex), this.activeRowIndex = l, this.$focusAnnotation(this.activeRowIndex);
            return;
          }
        }, a.prototype.$findClosestNumber = function(l, i, o) {
          return l === null ? i : i === null || Math.abs(o - l) <= Math.abs(o - i) ? l : i;
        }, a.prototype.$switchLane = function(l) {
          switch (l) {
            case "annotation":
              if (this.activeLane === "annotation") break;
              var i = this.$findNearestAnnotation(this.activeRowIndex);
              if (i == null) break;
              this.activeLane = "annotation", this.$blurFoldWidget(this.activeRowIndex), this.$blurCustomWidget(this.activeRowIndex), this.activeRowIndex = i, this.$focusAnnotation(this.activeRowIndex);
              break;
            case "fold":
              if (this.activeLane === "fold") break;
              var o = this.$findNearestFoldLaneWidget(this.activeRowIndex);
              if (o === null) break;
              this.activeLane = "fold", this.$blurAnnotation(this.activeRowIndex), this.activeRowIndex = o, this.$isCustomWidgetVisible(o) ? this.$focusCustomWidget(this.activeRowIndex) : this.$focusFoldWidget(this.activeRowIndex);
              break;
          }
        }, a.prototype.$rowIndexToRow = function(l) {
          var i = this.lines.get(l);
          return i ? i.row : null;
        }, a.prototype.$rowToRowIndex = function(l) {
          for (var i = 0; i < this.lines.getLength(); i++) {
            var o = this.lines.get(i);
            if (o.row == l) return i;
          }
          return null;
        }, a;
      })();
      _.GutterKeyboardHandler = M;
      var $ = (function() {
        function a(l, i) {
          this.gutterKeyboardHandler = i, this.domEvent = l;
        }
        return a.prototype.getKey = function() {
          return L.keyCodeToString(this.domEvent.keyCode);
        }, a.prototype.getRow = function() {
          return this.gutterKeyboardHandler.$rowIndexToRow(this.gutterKeyboardHandler.activeRowIndex);
        }, a.prototype.isInAnnotationLane = function() {
          return this.gutterKeyboardHandler.activeLane === "annotation";
        }, a.prototype.isInFoldLane = function() {
          return this.gutterKeyboardHandler.activeLane === "fold";
        }, a;
      })();
      _.GutterKeyboardEvent = $;
    }), ace.define("ace/editor", [
      "require",
      "exports",
      "module",
      "ace/lib/oop",
      "ace/lib/dom",
      "ace/lib/lang",
      "ace/lib/useragent",
      "ace/keyboard/textinput",
      "ace/mouse/mouse_handler",
      "ace/mouse/fold_handler",
      "ace/keyboard/keybinding",
      "ace/edit_session",
      "ace/search",
      "ace/range",
      "ace/lib/event_emitter",
      "ace/commands/command_manager",
      "ace/commands/default_commands",
      "ace/config",
      "ace/token_iterator",
      "ace/keyboard/gutter_handler",
      "ace/config",
      "ace/clipboard",
      "ace/lib/keys",
      "ace/lib/event",
      "ace/tooltip"
    ], function(A, _, N) {
      var L = this && this.__values || function(g) {
        var d = typeof Symbol == "function" && Symbol.iterator, x = d && g[d], T = 0;
        if (x) return x.call(g);
        if (g && typeof g.length == "number") return {
          next: function() {
            return g && T >= g.length && (g = void 0), {
              value: g && g[T++],
              done: !g
            };
          }
        };
        throw new TypeError(d ? "Object is not iterable." : "Symbol.iterator is not defined.");
      }, M = A("./lib/oop"), $ = A("./lib/dom"), a = A("./lib/lang"), l = A("./lib/useragent"), i = A("./keyboard/textinput").TextInput, o = A("./mouse/mouse_handler").MouseHandler, r = A("./mouse/fold_handler").FoldHandler, n = A("./keyboard/keybinding").KeyBinding, e = A("./edit_session").EditSession, t = A("./search").Search, s = A("./range").Range, h = A("./lib/event_emitter").EventEmitter, u = A("./commands/command_manager").CommandManager, S = A("./commands/default_commands").commands, b = A("./config"), f = A("./token_iterator").TokenIterator, c = A("./keyboard/gutter_handler").GutterKeyboardHandler, w = A("./config").nls, C = A("./clipboard"), p = A("./lib/keys"), v = A("./lib/event"), k = A("./tooltip").HoverTooltip, m = (function() {
        function g(d, x, T) {
          this.id = "editor" + ++g.$uid, this.session, this.$toDestroy = [];
          var E = d.getContainerElement();
          this.container = E, this.renderer = d, this.commands = new u(l.isMac ? "mac" : "win", S), typeof document == "object" && (this.textInput = new i(d.getTextAreaContainer(), this), this.renderer.textarea = this.textInput.getElement(), this.$mouseHandler = new o(this), new r(this)), this.keyBinding = new n(this), this.$search = new t().set({
            wrap: true
          }), this.$historyTracker = this.$historyTracker.bind(this), this.commands.on("exec", this.$historyTracker), this.$initOperationListeners(), this._$emitInputEvent = a.delayedCall(function() {
            this._signal("input", {}), this.session && !this.session.destroyed && this.session.bgTokenizer.scheduleStart();
          }.bind(this)), this.on("change", function(R, I) {
            I._$emitInputEvent.schedule(31);
          }), this.setSession(x || T && T.session || new e("")), b.resetOptions(this), T && this.setOptions(T), b._signal("editor", this);
        }
        return g.prototype.$initOperationListeners = function() {
          this.commands.on("exec", this.startOperation.bind(this), true), this.commands.on("afterExec", this.endOperation.bind(this), true);
        }, g.prototype.startOperation = function(d) {
          this.session.startOperation(d);
        }, g.prototype.endOperation = function(d) {
          this.session.endOperation(d);
        }, g.prototype.onStartOperation = function(d) {
          this.curOp = this.session.curOp, this.curOp.scrollTop = this.renderer.scrollTop, this.prevOp = this.session.prevOp, d || (this.previousCommand = null);
        }, g.prototype.onEndOperation = function(d) {
          if (this.curOp && this.session) {
            if (d && d.returnValue === false) {
              this.curOp = null;
              return;
            }
            if (this._signal("beforeEndOperation"), !this.curOp) return;
            var x = this.curOp.command, T = x && x.scrollIntoView;
            if (T) {
              switch (T) {
                case "center-animate":
                  T = "animate";
                case "center":
                  this.renderer.scrollCursorIntoView(null, 0.5);
                  break;
                case "animate":
                case "cursor":
                  this.renderer.scrollCursorIntoView();
                  break;
                case "selectionPart":
                  var E = this.selection.getRange(), R = this.renderer.layerConfig;
                  (E.start.row >= R.lastRow || E.end.row <= R.firstRow) && this.renderer.scrollSelectionIntoView(this.selection.anchor, this.selection.lead);
                  break;
              }
              T == "animate" && this.renderer.animateScrolling(this.curOp.scrollTop);
            }
            this.$lastSel = this.session.selection.toJSON(), this.prevOp = this.curOp, this.curOp = null;
          }
        }, g.prototype.$historyTracker = function(d) {
          if (this.$mergeUndoDeltas) {
            var x = this.prevOp, T = this.$mergeableCommands, E = x.command && d.command.name == x.command.name;
            if (d.command.name == "insertstring") {
              var R = d.args;
              this.mergeNextCommand === void 0 && (this.mergeNextCommand = true), E = E && this.mergeNextCommand && (!/\s/.test(R) || /\s/.test(x.args)), this.mergeNextCommand = true;
            } else E = E && T.indexOf(d.command.name) !== -1;
            this.$mergeUndoDeltas != "always" && Date.now() - this.sequenceStartTime > 2e3 && (E = false), E ? this.session.mergeUndoDeltas = true : T.indexOf(d.command.name) !== -1 && (this.sequenceStartTime = Date.now());
          }
        }, g.prototype.setKeyboardHandler = function(d, x) {
          if (d && typeof d == "string" && d != "ace") {
            this.$keybindingId = d;
            var T = this;
            b.loadModule([
              "keybinding",
              d
            ], function(E) {
              T.$keybindingId == d && T.keyBinding.setKeyboardHandler(E && E.handler), x && x();
            });
          } else this.$keybindingId = null, this.keyBinding.setKeyboardHandler(d), x && x();
        }, g.prototype.getKeyboardHandler = function() {
          return this.keyBinding.getKeyboardHandler();
        }, g.prototype.setSession = function(d) {
          if (this.session != d) {
            this.curOp && this.endOperation(), this.curOp = {};
            var x = this.session;
            if (x) {
              this.session.off("change", this.$onDocumentChange), this.session.off("changeMode", this.$onChangeMode), this.session.off("tokenizerUpdate", this.$onTokenizerUpdate), this.session.off("changeTabSize", this.$onChangeTabSize), this.session.off("changeWrapLimit", this.$onChangeWrapLimit), this.session.off("changeWrapMode", this.$onChangeWrapMode), this.session.off("changeFold", this.$onChangeFold), this.session.off("changeFrontMarker", this.$onChangeFrontMarker), this.session.off("changeBackMarker", this.$onChangeBackMarker), this.session.off("changeBreakpoint", this.$onChangeBreakpoint), this.session.off("changeAnnotation", this.$onChangeAnnotation), this.session.off("changeOverwrite", this.$onCursorChange), this.session.off("changeScrollTop", this.$onScrollTopChange), this.session.off("changeScrollLeft", this.$onScrollLeftChange), this.session.off("startOperation", this.$onStartOperation), this.session.off("endOperation", this.$onEndOperation);
              var T = this.session.getSelection();
              T.off("changeCursor", this.$onCursorChange), T.off("changeSelection", this.$onSelectionChange);
            }
            this.session = d, d ? (this.$onDocumentChange = this.onDocumentChange.bind(this), d.on("change", this.$onDocumentChange), this.renderer.setSession(d), this.$onChangeMode = this.onChangeMode.bind(this), d.on("changeMode", this.$onChangeMode), this.$onTokenizerUpdate = this.onTokenizerUpdate.bind(this), d.on("tokenizerUpdate", this.$onTokenizerUpdate), this.$onChangeTabSize = this.renderer.onChangeTabSize.bind(this.renderer), d.on("changeTabSize", this.$onChangeTabSize), this.$onChangeWrapLimit = this.onChangeWrapLimit.bind(this), d.on("changeWrapLimit", this.$onChangeWrapLimit), this.$onChangeWrapMode = this.onChangeWrapMode.bind(this), d.on("changeWrapMode", this.$onChangeWrapMode), this.$onChangeFold = this.onChangeFold.bind(this), d.on("changeFold", this.$onChangeFold), this.$onChangeFrontMarker = this.onChangeFrontMarker.bind(this), this.session.on("changeFrontMarker", this.$onChangeFrontMarker), this.$onChangeBackMarker = this.onChangeBackMarker.bind(this), this.session.on("changeBackMarker", this.$onChangeBackMarker), this.$onChangeBreakpoint = this.onChangeBreakpoint.bind(this), this.session.on("changeBreakpoint", this.$onChangeBreakpoint), this.$onChangeAnnotation = this.onChangeAnnotation.bind(this), this.session.on("changeAnnotation", this.$onChangeAnnotation), this.$onCursorChange = this.onCursorChange.bind(this), this.session.on("changeOverwrite", this.$onCursorChange), this.$onScrollTopChange = this.onScrollTopChange.bind(this), this.session.on("changeScrollTop", this.$onScrollTopChange), this.$onScrollLeftChange = this.onScrollLeftChange.bind(this), this.session.on("changeScrollLeft", this.$onScrollLeftChange), this.selection = d.getSelection(), this.selection.on("changeCursor", this.$onCursorChange), this.$onSelectionChange = this.onSelectionChange.bind(this), this.selection.on("changeSelection", this.$onSelectionChange), this.$onStartOperation = this.onStartOperation.bind(this), this.session.on("startOperation", this.$onStartOperation), this.$onEndOperation = this.onEndOperation.bind(this), this.session.on("endOperation", this.$onEndOperation), this.onChangeMode(), this.onCursorChange(), this.onScrollTopChange(), this.onScrollLeftChange(), this.onSelectionChange(), this.onChangeFrontMarker(), this.onChangeBackMarker(), this.onChangeBreakpoint(), this.onChangeAnnotation(), this.session.getUseWrapMode() && this.renderer.adjustWrapLimit(), this.renderer.updateFull()) : (this.selection = null, this.renderer.setSession(d)), this._signal("changeSession", {
              session: d,
              oldSession: x
            }), this.curOp = null, x && x._signal("changeEditor", {
              oldEditor: this
            }), x && (x.$editor = null), d && d._signal("changeEditor", {
              editor: this
            }), d && (d.$editor = this), d && !d.destroyed && d.bgTokenizer.scheduleStart();
          }
        }, g.prototype.getSession = function() {
          return this.session;
        }, g.prototype.setValue = function(d, x) {
          return this.session.doc.setValue(d), x ? x == 1 ? this.navigateFileEnd() : x == -1 && this.navigateFileStart() : this.selectAll(), d;
        }, g.prototype.getValue = function() {
          return this.session.getValue();
        }, g.prototype.getSelection = function() {
          return this.selection;
        }, g.prototype.resize = function(d) {
          this.renderer.onResize(d);
        }, g.prototype.setTheme = function(d, x) {
          this.renderer.setTheme(d, x);
        }, g.prototype.getTheme = function() {
          return this.renderer.getTheme();
        }, g.prototype.setStyle = function(d, x) {
          this.renderer.setStyle(d, x);
        }, g.prototype.unsetStyle = function(d) {
          this.renderer.unsetStyle(d);
        }, g.prototype.getFontSize = function() {
          return this.getOption("fontSize") || $.computedStyle(this.container).fontSize;
        }, g.prototype.setFontSize = function(d) {
          this.setOption("fontSize", d);
        }, g.prototype.$highlightBrackets = function() {
          if (!this.$highlightPending) {
            var d = this;
            this.$highlightPending = true, setTimeout(function() {
              d.$highlightPending = false;
              var x = d.session;
              if (!(!x || x.destroyed)) {
                x.$bracketHighlight && (x.$bracketHighlight.markerIds.forEach(function(W) {
                  x.removeMarker(W);
                }), x.$bracketHighlight = null);
                var T = d.getCursorPosition(), E = d.getKeyboardHandler(), R = E && E.$getDirectionForHighlight && E.$getDirectionForHighlight(d), I = x.getMatchingBracketRanges(T, R);
                if (!I) {
                  var O = new f(x, T.row, T.column), z = O.getCurrentToken();
                  if (z && /\b(?:tag-open|tag-name)/.test(z.type)) {
                    var F = x.getMatchingTags(T);
                    F && (I = [
                      F.openTagName.isEmpty() ? F.openTag : F.openTagName,
                      F.closeTagName.isEmpty() ? F.closeTag : F.closeTagName
                    ]);
                  }
                }
                if (!I && x.$mode.getMatching && (I = x.$mode.getMatching(d.session)), !I) {
                  d.getHighlightIndentGuides() && d.renderer.$textLayer.$highlightIndentGuide();
                  return;
                }
                var B = "ace_bracket";
                Array.isArray(I) ? I.length == 1 && (B = "ace_error_bracket") : I = [
                  I
                ], I.length == 2 && (s.comparePoints(I[0].end, I[1].start) == 0 ? I = [
                  s.fromPoints(I[0].start, I[1].end)
                ] : s.comparePoints(I[0].start, I[1].end) == 0 && (I = [
                  s.fromPoints(I[1].start, I[0].end)
                ])), x.$bracketHighlight = {
                  ranges: I,
                  markerIds: I.map(function(W) {
                    return x.addMarker(W, B, "text");
                  })
                }, d.getHighlightIndentGuides() && d.renderer.$textLayer.$highlightIndentGuide();
              }
            }, 50);
          }
        }, g.prototype.focus = function() {
          this.textInput.focus();
        }, g.prototype.isFocused = function() {
          return this.textInput.isFocused();
        }, g.prototype.blur = function() {
          this.textInput.blur();
        }, g.prototype.onFocus = function(d) {
          this.$isFocused || (this.$isFocused = true, this.renderer.showCursor(), this.renderer.visualizeFocus(), this._emit("focus", d));
        }, g.prototype.onBlur = function(d) {
          this.$isFocused && (this.$isFocused = false, this.renderer.hideCursor(), this.renderer.visualizeBlur(), this._emit("blur", d));
        }, g.prototype.$cursorChange = function() {
          this.renderer.updateCursor(), this.$highlightBrackets(), this.$updateHighlightActiveLine();
        }, g.prototype.onDocumentChange = function(d) {
          var x = this.session.$useWrapMode, T = d.start.row == d.end.row ? d.end.row : 1 / 0;
          this.renderer.updateLines(d.start.row, T, x), this._signal("change", d), this.$cursorChange();
        }, g.prototype.onTokenizerUpdate = function(d) {
          var x = d.data;
          this.renderer.updateLines(x.first, x.last);
        }, g.prototype.onScrollTopChange = function() {
          this.renderer.scrollToY(this.session.getScrollTop());
        }, g.prototype.onScrollLeftChange = function() {
          this.renderer.scrollToX(this.session.getScrollLeft());
        }, g.prototype.onCursorChange = function() {
          this.$cursorChange(), this._signal("changeSelection");
        }, g.prototype.$updateHighlightActiveLine = function() {
          var d = this.getSession(), x;
          if (this.$highlightActiveLine && ((this.$selectionStyle != "line" || !this.selection.isMultiLine()) && (x = this.getCursorPosition()), this.renderer.theme && this.renderer.theme.$selectionColorConflict && !this.selection.isEmpty() && (x = false), this.renderer.$maxLines && this.session.getLength() === 1 && !(this.renderer.$minLines > 1) && (x = false)), d.$highlightLineMarker && !x) d.removeMarker(d.$highlightLineMarker.id), d.$highlightLineMarker = null;
          else if (!d.$highlightLineMarker && x) {
            var T = new s(x.row, x.column, x.row, 1 / 0);
            T.id = d.addMarker(T, "ace_active-line", "screenLine"), d.$highlightLineMarker = T;
          } else x && (d.$highlightLineMarker.start.row = x.row, d.$highlightLineMarker.end.row = x.row, d.$highlightLineMarker.start.column = x.column, d._signal("changeBackMarker"));
        }, g.prototype.onSelectionChange = function(d) {
          var x = this.session;
          if (x.$selectionMarker && x.removeMarker(x.$selectionMarker), x.$selectionMarker = null, this.selection.isEmpty()) this.$updateHighlightActiveLine();
          else {
            var T = this.selection.getRange(), E = this.getSelectionStyle();
            x.$selectionMarker = x.addMarker(T, "ace_selection", E);
          }
          var R = this.$highlightSelectedWord && this.$getSelectionHighLightRegexp();
          this.session.highlight(R), this._signal("changeSelection");
        }, g.prototype.$getSelectionHighLightRegexp = function() {
          var d = this.session, x = this.getSelectionRange();
          if (!(x.isEmpty() || x.isMultiLine())) {
            var T = x.start.column, E = x.end.column, R = d.getLine(x.start.row), I = R.substring(T, E);
            if (!(I.length > 5e3 || !/[\w\d]/.test(I))) {
              var O = this.$search.$assembleRegExp({
                wholeWord: true,
                caseSensitive: true,
                needle: I
              }), z = R.substring(T - 1, E + 1);
              if (O.test(z)) return O;
            }
          }
        }, g.prototype.onChangeFrontMarker = function() {
          this.renderer.updateFrontMarkers();
        }, g.prototype.onChangeBackMarker = function() {
          this.renderer.updateBackMarkers();
        }, g.prototype.onChangeBreakpoint = function() {
          this.renderer.updateBreakpoints();
        }, g.prototype.onChangeAnnotation = function() {
          this.renderer.setAnnotations(this.session.getAnnotations());
        }, g.prototype.onChangeMode = function(d) {
          this.renderer.updateText(), this._emit("changeMode", d);
        }, g.prototype.onChangeWrapLimit = function() {
          this.renderer.updateFull();
        }, g.prototype.onChangeWrapMode = function() {
          this.renderer.onResize(true);
        }, g.prototype.onChangeFold = function() {
          this.$updateHighlightActiveLine(), this.renderer.updateFull();
        }, g.prototype.getSelectedText = function() {
          return this.session.getTextRange(this.getSelectionRange());
        }, g.prototype.getCopyText = function() {
          var d = this.getSelectedText(), x = this.session.doc.getNewLineCharacter(), T = false;
          if (!d && this.$copyWithEmptySelection) {
            T = true;
            for (var E = this.selection.getAllRanges(), R = 0; R < E.length; R++) {
              var I = E[R];
              R && E[R - 1].start.row == I.start.row || (d += this.session.getLine(I.start.row) + x);
            }
          }
          var O = {
            text: d
          };
          return this._signal("copy", O), C.lineMode = T ? O.text : false, O.text;
        }, g.prototype.onCopy = function() {
          this.commands.exec("copy", this);
        }, g.prototype.onCut = function() {
          this.commands.exec("cut", this);
        }, g.prototype.onPaste = function(d, x) {
          var T = {
            text: d,
            event: x
          };
          this.commands.exec("paste", this, T);
        }, g.prototype.$handlePaste = function(d) {
          typeof d == "string" && (d = {
            text: d
          }), this._signal("paste", d);
          var x = d.text, T = x === C.lineMode, E = this.session;
          if (!this.inMultiSelectMode || this.inVirtualSelectionMode) T ? E.insert({
            row: this.selection.lead.row,
            column: 0
          }, x) : this.insert(x);
          else if (T) this.selection.rangeList.ranges.forEach(function(B) {
            E.insert({
              row: B.start.row,
              column: 0
            }, x);
          });
          else {
            var R = x.split(/\r\n|\r|\n/), I = this.selection.rangeList.ranges, O = R.length == 2 && (!R[0] || !R[1]);
            if (R.length != I.length || O) return this.commands.exec("insertstring", this, x);
            for (var z = I.length; z--; ) {
              var F = I[z];
              F.isEmpty() || E.remove(F), E.insert(F.start, R[z]);
            }
          }
        }, g.prototype.execCommand = function(d, x) {
          return this.commands.exec(d, this, x);
        }, g.prototype.insert = function(d, x) {
          var T = this.session, E = T.getMode(), R = this.getCursorPosition();
          if (this.getBehavioursEnabled() && !x) {
            var I = E.transformAction(T.getState(R.row), "insertion", this, T, d);
            I && (d !== I.text && (this.inVirtualSelectionMode || (this.session.mergeUndoDeltas = false, this.mergeNextCommand = false)), d = I.text);
          }
          if (d == "	" && (d = this.session.getTabString()), this.selection.isEmpty()) {
            if (this.session.getOverwrite() && d.indexOf(`
`) == -1) {
              var O = s.fromPoints(R, R);
              O.end.column += d.length, this.session.remove(O);
            }
          } else {
            var O = this.getSelectionRange();
            R = this.session.remove(O), this.clearSelection();
          }
          if (d == `
` || d == `\r
`) {
            var W = T.getLine(R.row);
            if (R.column > W.search(/\S|$/)) {
              var z = W.substr(R.column).search(/\S|$/);
              T.doc.removeInLine(R.row, R.column, R.column + z);
            }
          }
          this.clearSelection();
          var F = R.column, B = T.getState(R.row), W = T.getLine(R.row), H = E.checkOutdent(B, W, d);
          if (T.insert(R, d), I && I.selection && (I.selection.length == 2 ? this.selection.setSelectionRange(new s(R.row, F + I.selection[0], R.row, F + I.selection[1])) : this.selection.setSelectionRange(new s(R.row + I.selection[0], I.selection[1], R.row + I.selection[2], I.selection[3]))), this.$enableAutoIndent) {
            if (T.getDocument().isNewLine(d)) {
              var U = E.getNextLineIndent(B, W.slice(0, R.column), T.getTabString());
              T.insert({
                row: R.row + 1,
                column: 0
              }, U);
            }
            H && E.autoOutdent(B, T, R.row);
          }
        }, g.prototype.autoIndent = function() {
          for (var d = this.session, x = d.getMode(), T = this.selection.isEmpty() ? [
            new s(0, 0, d.doc.getLength() - 1, 0)
          ] : this.selection.getAllRanges(), E = "", R = "", I = "", O = d.getTabString(), z = 0; z < T.length; z++) for (var F = T[z].start.row, B = T[z].end.row, W = F; W <= B; W++) {
            W > 0 && (E = d.getState(W - 1), R = d.getLine(W - 1), I = x.getNextLineIndent(E, R, O));
            var H = d.getLine(W), U = x.$getIndent(H);
            if (I !== U) {
              if (U.length > 0) {
                var V = new s(W, 0, W, U.length);
                d.remove(V);
              }
              I.length > 0 && d.insert({
                row: W,
                column: 0
              }, I);
            }
            x.autoOutdent(E, d, W);
          }
        }, g.prototype.onTextInput = function(d, x) {
          if (!x) return this.keyBinding.onTextInput(d);
          this.startOperation({
            command: {
              name: "insertstring"
            }
          });
          var T = this.applyComposition.bind(this, d, x);
          this.selection.rangeCount ? this.forEachSelection(T) : T(), this.endOperation();
        }, g.prototype.applyComposition = function(d, x) {
          if (x.extendLeft || x.extendRight) {
            var T = this.selection.getRange();
            T.start.column -= x.extendLeft, T.end.column += x.extendRight, T.start.column < 0 && (T.start.row--, T.start.column += this.session.getLine(T.start.row).length + 1), this.selection.setRange(T), !d && !T.isEmpty() && this.remove();
          }
          if ((d || !this.selection.isEmpty()) && this.insert(d, true), x.restoreStart || x.restoreEnd) {
            var T = this.selection.getRange();
            T.start.column -= x.restoreStart, T.end.column -= x.restoreEnd, this.selection.setRange(T);
          }
        }, g.prototype.onCommandKey = function(d, x, T) {
          return this.keyBinding.onCommandKey(d, x, T);
        }, g.prototype.setOverwrite = function(d) {
          this.session.setOverwrite(d);
        }, g.prototype.getOverwrite = function() {
          return this.session.getOverwrite();
        }, g.prototype.toggleOverwrite = function() {
          this.session.toggleOverwrite();
        }, g.prototype.setScrollSpeed = function(d) {
          this.setOption("scrollSpeed", d);
        }, g.prototype.getScrollSpeed = function() {
          return this.getOption("scrollSpeed");
        }, g.prototype.setDragDelay = function(d) {
          this.setOption("dragDelay", d);
        }, g.prototype.getDragDelay = function() {
          return this.getOption("dragDelay");
        }, g.prototype.setSelectionStyle = function(d) {
          this.setOption("selectionStyle", d);
        }, g.prototype.getSelectionStyle = function() {
          return this.getOption("selectionStyle");
        }, g.prototype.setHighlightActiveLine = function(d) {
          this.setOption("highlightActiveLine", d);
        }, g.prototype.getHighlightActiveLine = function() {
          return this.getOption("highlightActiveLine");
        }, g.prototype.setHighlightGutterLine = function(d) {
          this.setOption("highlightGutterLine", d);
        }, g.prototype.getHighlightGutterLine = function() {
          return this.getOption("highlightGutterLine");
        }, g.prototype.setHighlightSelectedWord = function(d) {
          this.setOption("highlightSelectedWord", d);
        }, g.prototype.getHighlightSelectedWord = function() {
          return this.$highlightSelectedWord;
        }, g.prototype.setAnimatedScroll = function(d) {
          this.renderer.setAnimatedScroll(d);
        }, g.prototype.getAnimatedScroll = function() {
          return this.renderer.getAnimatedScroll();
        }, g.prototype.setShowInvisibles = function(d) {
          this.renderer.setShowInvisibles(d);
        }, g.prototype.getShowInvisibles = function() {
          return this.renderer.getShowInvisibles();
        }, g.prototype.setDisplayIndentGuides = function(d) {
          this.renderer.setDisplayIndentGuides(d);
        }, g.prototype.getDisplayIndentGuides = function() {
          return this.renderer.getDisplayIndentGuides();
        }, g.prototype.setHighlightIndentGuides = function(d) {
          this.renderer.setHighlightIndentGuides(d);
        }, g.prototype.getHighlightIndentGuides = function() {
          return this.renderer.getHighlightIndentGuides();
        }, g.prototype.setShowPrintMargin = function(d) {
          this.renderer.setShowPrintMargin(d);
        }, g.prototype.getShowPrintMargin = function() {
          return this.renderer.getShowPrintMargin();
        }, g.prototype.setPrintMarginColumn = function(d) {
          this.renderer.setPrintMarginColumn(d);
        }, g.prototype.getPrintMarginColumn = function() {
          return this.renderer.getPrintMarginColumn();
        }, g.prototype.setReadOnly = function(d) {
          this.setOption("readOnly", d);
        }, g.prototype.getReadOnly = function() {
          return this.getOption("readOnly");
        }, g.prototype.setBehavioursEnabled = function(d) {
          this.setOption("behavioursEnabled", d);
        }, g.prototype.getBehavioursEnabled = function() {
          return this.getOption("behavioursEnabled");
        }, g.prototype.setWrapBehavioursEnabled = function(d) {
          this.setOption("wrapBehavioursEnabled", d);
        }, g.prototype.getWrapBehavioursEnabled = function() {
          return this.getOption("wrapBehavioursEnabled");
        }, g.prototype.setShowFoldWidgets = function(d) {
          this.setOption("showFoldWidgets", d);
        }, g.prototype.getShowFoldWidgets = function() {
          return this.getOption("showFoldWidgets");
        }, g.prototype.setFadeFoldWidgets = function(d) {
          this.setOption("fadeFoldWidgets", d);
        }, g.prototype.getFadeFoldWidgets = function() {
          return this.getOption("fadeFoldWidgets");
        }, g.prototype.remove = function(d) {
          this.selection.isEmpty() && (d == "left" ? this.selection.selectLeft() : this.selection.selectRight());
          var x = this.getSelectionRange();
          if (this.getBehavioursEnabled()) {
            var T = this.session, E = T.getState(x.start.row), R = T.getMode().transformAction(E, "deletion", this, T, x);
            if (x.end.column === 0) {
              var I = T.getTextRange(x);
              if (I[I.length - 1] == `
`) {
                var O = T.getLine(x.end.row);
                /^\s+$/.test(O) && (x.end.column = O.length);
              }
            }
            R && (x = R);
          }
          this.session.remove(x), this.clearSelection();
        }, g.prototype.removeWordRight = function() {
          this.selection.isEmpty() && this.selection.selectWordRight(), this.session.remove(this.getSelectionRange()), this.clearSelection();
        }, g.prototype.removeWordLeft = function() {
          this.selection.isEmpty() && this.selection.selectWordLeft(), this.session.remove(this.getSelectionRange()), this.clearSelection();
        }, g.prototype.removeToLineStart = function() {
          this.selection.isEmpty() && this.selection.selectLineStart(), this.selection.isEmpty() && this.selection.selectLeft(), this.session.remove(this.getSelectionRange()), this.clearSelection();
        }, g.prototype.removeToLineEnd = function() {
          this.selection.isEmpty() && this.selection.selectLineEnd();
          var d = this.getSelectionRange();
          d.start.column == d.end.column && d.start.row == d.end.row && (d.end.column = 0, d.end.row++), this.session.remove(d), this.clearSelection();
        }, g.prototype.splitLine = function() {
          this.selection.isEmpty() || (this.session.remove(this.getSelectionRange()), this.clearSelection());
          var d = this.getCursorPosition();
          this.insert(`
`), this.moveCursorToPosition(d);
        }, g.prototype.setGhostText = function(d, x) {
          this.renderer.setGhostText(d, x);
        }, g.prototype.removeGhostText = function() {
          this.renderer.removeGhostText();
        }, g.prototype.transposeLetters = function() {
          if (this.selection.isEmpty()) {
            var d = this.getCursorPosition(), x = d.column;
            if (x !== 0) {
              var T = this.session.getLine(d.row), E, R;
              x < T.length ? (E = T.charAt(x) + T.charAt(x - 1), R = new s(d.row, x - 1, d.row, x + 1)) : (E = T.charAt(x - 1) + T.charAt(x - 2), R = new s(d.row, x - 2, d.row, x)), this.session.replace(R, E), this.session.selection.moveToPosition(R.end);
            }
          }
        }, g.prototype.toLowerCase = function() {
          var d = this.getSelectionRange();
          this.selection.isEmpty() && this.selection.selectWord();
          var x = this.getSelectionRange(), T = this.session.getTextRange(x);
          this.session.replace(x, T.toLowerCase()), this.selection.setSelectionRange(d);
        }, g.prototype.toUpperCase = function() {
          var d = this.getSelectionRange();
          this.selection.isEmpty() && this.selection.selectWord();
          var x = this.getSelectionRange(), T = this.session.getTextRange(x);
          this.session.replace(x, T.toUpperCase()), this.selection.setSelectionRange(d);
        }, g.prototype.indent = function() {
          var d = this.session, x = this.getSelectionRange();
          if (x.start.row < x.end.row) {
            var T = this.$getSelectedRows();
            d.indentRows(T.first, T.last, "	");
            return;
          } else if (x.start.column < x.end.column) {
            var E = d.getTextRange(x);
            if (!/^\s+$/.test(E)) {
              var T = this.$getSelectedRows();
              d.indentRows(T.first, T.last, "	");
              return;
            }
          }
          var R = d.getLine(x.start.row), I = x.start, O = d.getTabSize(), z = d.documentToScreenColumn(I.row, I.column);
          if (this.session.getUseSoftTabs()) var F = O - z % O, B = a.stringRepeat(" ", F);
          else {
            for (var F = z % O; R[x.start.column - 1] == " " && F; ) x.start.column--, F--;
            this.selection.setSelectionRange(x), B = "	";
          }
          return this.insert(B);
        }, g.prototype.blockIndent = function() {
          var d = this.$getSelectedRows();
          this.session.indentRows(d.first, d.last, "	");
        }, g.prototype.blockOutdent = function() {
          var d = this.session.getSelection();
          this.session.outdentRows(d.getRange());
        }, g.prototype.sortLines = function() {
          for (var d = this.$getSelectedRows(), x = this.session, T = [], E = d.first; E <= d.last; E++) T.push(x.getLine(E));
          T.sort(function(O, z) {
            return O.toLowerCase() < z.toLowerCase() ? -1 : O.toLowerCase() > z.toLowerCase() ? 1 : 0;
          });
          for (var R = new s(0, 0, 0, 0), E = d.first; E <= d.last; E++) {
            var I = x.getLine(E);
            R.start.row = E, R.end.row = E, R.end.column = I.length, x.replace(R, T[E - d.first]);
          }
        }, g.prototype.toggleCommentLines = function() {
          var d = this.session.getState(this.getCursorPosition().row), x = this.$getSelectedRows();
          this.session.getMode().toggleCommentLines(d, this.session, x.first, x.last);
        }, g.prototype.toggleBlockComment = function() {
          var d = this.getCursorPosition(), x = this.session.getState(d.row), T = this.getSelectionRange();
          this.session.getMode().toggleBlockComment(x, this.session, T, d);
        }, g.prototype.getNumberAt = function(d, x) {
          var T = /[\-]?[0-9]+(?:\.[0-9]+)?/g;
          T.lastIndex = 0;
          for (var E = this.session.getLine(d); T.lastIndex < x; ) {
            var R = T.exec(E);
            if (R.index <= x && R.index + R[0].length >= x) {
              var I = {
                value: R[0],
                start: R.index,
                end: R.index + R[0].length
              };
              return I;
            }
          }
          return null;
        }, g.prototype.modifyNumber = function(d) {
          var x = this.selection.getCursor().row, T = this.selection.getCursor().column, E = new s(x, T - 1, x, T), R = this.session.getTextRange(E);
          if (!isNaN(parseFloat(R)) && isFinite(R)) {
            var I = this.getNumberAt(x, T);
            if (I) {
              var O = I.value.indexOf(".") >= 0 ? I.start + I.value.indexOf(".") + 1 : I.end, z = I.start + I.value.length - O, F = parseFloat(I.value);
              F *= Math.pow(10, z), O !== I.end && T < O ? d *= Math.pow(10, I.end - T - 1) : d *= Math.pow(10, I.end - T), F += d, F /= Math.pow(10, z);
              var B = F.toFixed(z), W = new s(x, I.start, x, I.end);
              this.session.replace(W, B), this.moveCursorTo(x, Math.max(I.start + 1, T + B.length - I.value.length));
            }
          } else this.toggleWord();
        }, g.prototype.toggleWord = function() {
          var d = this.selection.getCursor().row, x = this.selection.getCursor().column;
          this.selection.selectWord();
          var T = this.getSelectedText(), E = this.selection.getWordRange().start.column, R = T.replace(/([a-z]+|[A-Z]+)(?=[A-Z_]|$)/g, "$1 ").split(/\s/), I = x - E - 1;
          I < 0 && (I = 0);
          var O = 0, z = 0, F = this;
          T.match(/[A-Za-z0-9_]+/) && R.forEach(function(ee, ne) {
            z = O + ee.length, I >= O && I <= z && (T = ee, F.selection.clearSelection(), F.moveCursorTo(d, O + E), F.selection.selectTo(d, z + E)), O = z;
          });
          for (var B = this.$toggleWordPairs, W, H = 0; H < B.length; H++) for (var U = B[H], V = 0; V <= 1; V++) {
            var G = +!V, Y = T.match(new RegExp("^\\s?_?(" + a.escapeRegExp(U[V]) + ")\\s?$", "i"));
            if (Y) {
              var J = T.match(new RegExp("([_]|^|\\s)(" + a.escapeRegExp(Y[1]) + ")($|\\s)", "g"));
              J && (W = T.replace(new RegExp(a.escapeRegExp(U[V]), "i"), function(ee) {
                var ne = U[G];
                return ee.toUpperCase() == ee ? ne = ne.toUpperCase() : ee.charAt(0).toUpperCase() == ee.charAt(0) && (ne = ne.substr(0, 0) + U[G].charAt(0).toUpperCase() + ne.substr(1)), ne;
              }), this.insert(W), W = "");
            }
          }
        }, g.prototype.findLinkAt = function(d, x) {
          var T, E, R = this.session.getLine(d), I = R.split(/((?:https?|ftp):\/\/[\S]+)/), O = x;
          O < 0 && (O = 0);
          var z = 0, F = 0, B;
          try {
            for (var W = L(I), H = W.next(); !H.done; H = W.next()) {
              var U = H.value;
              if (F = z + U.length, O >= z && O <= F && U.match(/((?:https?|ftp):\/\/[\S]+)/)) {
                B = U.replace(/[\s:.,'";}\]]+$/, "");
                break;
              }
              z = F;
            }
          } catch (V) {
            T = {
              error: V
            };
          } finally {
            try {
              H && !H.done && (E = W.return) && E.call(W);
            } finally {
              if (T) throw T.error;
            }
          }
          return B;
        }, g.prototype.openLink = function() {
          var d = this.selection.getCursor(), x = this.findLinkAt(d.row, d.column);
          return x && window.open(x, "_blank"), x != null;
        }, g.prototype.removeLines = function() {
          var d = this.$getSelectedRows();
          this.session.removeFullLines(d.first, d.last), this.clearSelection();
        }, g.prototype.duplicateSelection = function() {
          var d = this.selection, x = this.session, T = d.getRange(), E = d.isBackwards();
          if (T.isEmpty()) {
            var R = T.start.row;
            x.duplicateLines(R, R);
          } else {
            var I = E ? T.start : T.end, O = x.insert(I, x.getTextRange(T));
            T.start = I, T.end = O, d.setSelectionRange(T, E);
          }
        }, g.prototype.moveLinesDown = function() {
          this.$moveLines(1, false);
        }, g.prototype.moveLinesUp = function() {
          this.$moveLines(-1, false);
        }, g.prototype.moveText = function(d, x, T) {
          return this.session.moveText(d, x, T);
        }, g.prototype.copyLinesUp = function() {
          this.$moveLines(-1, true);
        }, g.prototype.copyLinesDown = function() {
          this.$moveLines(1, true);
        }, g.prototype.$moveLines = function(d, x) {
          var T, E, R = this.selection;
          if (!R.inMultiSelectMode || this.inVirtualSelectionMode) {
            var I = R.toOrientedRange();
            T = this.$getSelectedRows(I), E = this.session.$moveLines(T.first, T.last, x ? 0 : d), x && d == -1 && (E = 0), I.moveBy(E, 0), R.fromOrientedRange(I);
          } else {
            var O = R.rangeList.ranges;
            R.rangeList.detach(this.session), this.inVirtualSelectionMode = true;
            for (var z = 0, F = 0, B = O.length, W = 0; W < B; W++) {
              var H = W;
              O[W].moveBy(z, 0), T = this.$getSelectedRows(O[W]);
              for (var U = T.first, V = T.last; ++W < B; ) {
                F && O[W].moveBy(F, 0);
                var G = this.$getSelectedRows(O[W]);
                if (x && G.first != V) break;
                if (!x && G.first > V + 1) break;
                V = G.last;
              }
              for (W--, z = this.session.$moveLines(U, V, x ? 0 : d), x && d == -1 && (H = W + 1); H <= W; ) O[H].moveBy(z, 0), H++;
              x || (z = 0), F += z;
            }
            R.fromOrientedRange(R.ranges[0]), R.rangeList.attach(this.session), this.inVirtualSelectionMode = false;
          }
        }, g.prototype.$getSelectedRows = function(d) {
          return d = (d || this.getSelectionRange()).collapseRows(), {
            first: this.session.getRowFoldStart(d.start.row),
            last: this.session.getRowFoldEnd(d.end.row)
          };
        }, g.prototype.onCompositionStart = function(d) {
          this.renderer.showComposition(d);
        }, g.prototype.onCompositionUpdate = function(d) {
          this.renderer.setCompositionText(d);
        }, g.prototype.onCompositionEnd = function() {
          this.renderer.hideComposition();
        }, g.prototype.getFirstVisibleRow = function() {
          return this.renderer.getFirstVisibleRow();
        }, g.prototype.getLastVisibleRow = function() {
          return this.renderer.getLastVisibleRow();
        }, g.prototype.isRowVisible = function(d) {
          return d >= this.getFirstVisibleRow() && d <= this.getLastVisibleRow();
        }, g.prototype.isRowFullyVisible = function(d) {
          return d >= this.renderer.getFirstFullyVisibleRow() && d <= this.renderer.getLastFullyVisibleRow();
        }, g.prototype.$getVisibleRowCount = function() {
          return this.renderer.getScrollBottomRow() - this.renderer.getScrollTopRow() + 1;
        }, g.prototype.$moveByPage = function(d, x) {
          var T = this.renderer, E = this.renderer.layerConfig, R = d * Math.floor(E.height / E.lineHeight);
          x === true ? this.selection.$moveSelection(function() {
            this.moveCursorBy(R, 0);
          }) : x === false && (this.selection.moveCursorBy(R, 0), this.selection.clearSelection());
          var I = T.scrollTop;
          T.scrollBy(0, R * E.lineHeight), x != null && T.scrollCursorIntoView(null, 0.5), T.animateScrolling(I);
        }, g.prototype.selectPageDown = function() {
          this.$moveByPage(1, true);
        }, g.prototype.selectPageUp = function() {
          this.$moveByPage(-1, true);
        }, g.prototype.gotoPageDown = function() {
          this.$moveByPage(1, false);
        }, g.prototype.gotoPageUp = function() {
          this.$moveByPage(-1, false);
        }, g.prototype.scrollPageDown = function() {
          this.$moveByPage(1);
        }, g.prototype.scrollPageUp = function() {
          this.$moveByPage(-1);
        }, g.prototype.scrollToRow = function(d) {
          this.renderer.scrollToRow(d);
        }, g.prototype.scrollToLine = function(d, x, T, E) {
          this.renderer.scrollToLine(d, x, T, E);
        }, g.prototype.centerSelection = function() {
          var d = this.getSelectionRange(), x = {
            row: Math.floor(d.start.row + (d.end.row - d.start.row) / 2),
            column: Math.floor(d.start.column + (d.end.column - d.start.column) / 2)
          };
          this.renderer.alignCursor(x, 0.5);
        }, g.prototype.getCursorPosition = function() {
          return this.selection.getCursor();
        }, g.prototype.getCursorPositionScreen = function() {
          return this.session.documentToScreenPosition(this.getCursorPosition());
        }, g.prototype.getSelectionRange = function() {
          return this.selection.getRange();
        }, g.prototype.selectAll = function() {
          this.selection.selectAll();
        }, g.prototype.clearSelection = function() {
          this.selection.clearSelection();
        }, g.prototype.moveCursorTo = function(d, x) {
          this.selection.moveCursorTo(d, x);
        }, g.prototype.moveCursorToPosition = function(d) {
          this.selection.moveCursorToPosition(d);
        }, g.prototype.jumpToMatching = function(d, x) {
          var T = this.getCursorPosition(), E = new f(this.session, T.row, T.column), R = E.getCurrentToken(), I = 0;
          R && R.type.indexOf("tag-name") !== -1 && (R = E.stepBackward());
          var O = R || E.stepForward();
          if (O) {
            var z, F = false, B = {}, W = T.column - O.start, H, U = {
              ")": "(",
              "(": "(",
              "]": "[",
              "[": "[",
              "{": "{",
              "}": "{"
            };
            do {
              if (O.value.match(/[{}()\[\]]/g)) {
                for (; W < O.value.length && !F; W++) if (U[O.value[W]]) switch (H = U[O.value[W]] + "." + O.type.replace("rparen", "lparen"), isNaN(B[H]) && (B[H] = 0), O.value[W]) {
                  case "(":
                  case "[":
                  case "{":
                    B[H]++;
                    break;
                  case ")":
                  case "]":
                  case "}":
                    B[H]--, B[H] === -1 && (z = "bracket", F = true);
                    break;
                }
              } else O.type.indexOf("tag-name") !== -1 && (isNaN(B[O.value]) && (B[O.value] = 0), R.value === "<" && I > 1 ? B[O.value]++ : R.value === "</" && B[O.value]--, B[O.value] === -1 && (z = "tag", F = true));
              F || (R = O, I++, O = E.stepForward(), W = 0);
            } while (O && !F);
            if (z) {
              var V, G;
              if (z === "bracket") V = this.session.getBracketRange(T), V || (V = new s(E.getCurrentTokenRow(), E.getCurrentTokenColumn() + W - 1, E.getCurrentTokenRow(), E.getCurrentTokenColumn() + W - 1), G = V.start, (x || G.row === T.row && Math.abs(G.column - T.column) < 2) && (V = this.session.getBracketRange(G)));
              else if (z === "tag") {
                if (!O || O.type.indexOf("tag-name") === -1) return;
                if (V = new s(E.getCurrentTokenRow(), E.getCurrentTokenColumn() - 2, E.getCurrentTokenRow(), E.getCurrentTokenColumn() - 2), V.compare(T.row, T.column) === 0) {
                  var Y = this.session.getMatchingTags(T);
                  Y && (Y.openTag.contains(T.row, T.column) ? (V = Y.closeTag, G = V.start) : (V = Y.openTag, Y.closeTag.start.row === T.row && Y.closeTag.start.column === T.column ? G = V.end : G = V.start));
                }
                G = G || V.start;
              }
              G = V && V.cursor || G, G && (d ? V && x ? this.selection.setRange(V) : V && V.isEqual(this.getSelectionRange()) ? this.clearSelection() : this.selection.selectTo(G.row, G.column) : this.selection.moveTo(G.row, G.column));
            }
          }
        }, g.prototype.gotoLine = function(d, x, T) {
          this.selection.clearSelection(), this.session.unfold({
            row: d - 1,
            column: x || 0
          }), this.exitMultiSelectMode && this.exitMultiSelectMode(), this.moveCursorTo(d - 1, x || 0), this.isRowFullyVisible(d - 1) || this.scrollToLine(d - 1, true, T);
        }, g.prototype.navigateTo = function(d, x) {
          this.selection.moveTo(d, x);
        }, g.prototype.navigateUp = function(d) {
          if (this.selection.isMultiLine() && !this.selection.isBackwards()) {
            var x = this.selection.anchor.getPosition();
            return this.moveCursorToPosition(x);
          }
          this.selection.clearSelection(), this.selection.moveCursorBy(-d || -1, 0);
        }, g.prototype.navigateDown = function(d) {
          if (this.selection.isMultiLine() && this.selection.isBackwards()) {
            var x = this.selection.anchor.getPosition();
            return this.moveCursorToPosition(x);
          }
          this.selection.clearSelection(), this.selection.moveCursorBy(d || 1, 0);
        }, g.prototype.navigateLeft = function(d) {
          if (this.selection.isEmpty()) for (d = d || 1; d--; ) this.selection.moveCursorLeft();
          else {
            var x = this.getSelectionRange().start;
            this.moveCursorToPosition(x);
          }
          this.clearSelection();
        }, g.prototype.navigateRight = function(d) {
          if (this.selection.isEmpty()) for (d = d || 1; d--; ) this.selection.moveCursorRight();
          else {
            var x = this.getSelectionRange().end;
            this.moveCursorToPosition(x);
          }
          this.clearSelection();
        }, g.prototype.navigateLineStart = function() {
          this.selection.moveCursorLineStart(), this.clearSelection();
        }, g.prototype.navigateLineEnd = function() {
          this.selection.moveCursorLineEnd(), this.clearSelection();
        }, g.prototype.navigateFileEnd = function() {
          this.selection.moveCursorFileEnd(), this.clearSelection();
        }, g.prototype.navigateFileStart = function() {
          this.selection.moveCursorFileStart(), this.clearSelection();
        }, g.prototype.navigateWordRight = function() {
          this.selection.moveCursorWordRight(), this.clearSelection();
        }, g.prototype.navigateWordLeft = function() {
          this.selection.moveCursorWordLeft(), this.clearSelection();
        }, g.prototype.replace = function(d, x) {
          x && this.$search.set(x);
          var T = this.$search.find(this.session), E = 0;
          return T && (this.$tryReplace(T, d) && (E = 1), this.selection.setSelectionRange(T), this.renderer.scrollSelectionIntoView(T.start, T.end)), E;
        }, g.prototype.replaceAll = function(d, x) {
          x && this.$search.set(x);
          var T = this.$search.findAll(this.session), E = 0;
          if (!T.length) return E;
          var R = this.getSelectionRange();
          this.selection.moveTo(0, 0);
          for (var I = T.length - 1; I >= 0; --I) this.$tryReplace(T[I], d) && E++;
          return this.selection.setSelectionRange(R), E;
        }, g.prototype.$tryReplace = function(d, x) {
          var T = this.session.getTextRange(d);
          return x = this.$search.replace(T, x), x !== null ? (d.end = this.session.replace(d, x), d) : null;
        }, g.prototype.getLastSearchOptions = function() {
          return this.$search.getOptions();
        }, g.prototype.find = function(d, x, T) {
          x || (x = {}), typeof d == "string" || d instanceof RegExp ? x.needle = d : typeof d == "object" && M.mixin(x, d);
          var E = this.selection.getRange();
          x.needle == null && (d = this.session.getTextRange(E) || this.$search.$options.needle, d || (E = this.session.getWordRange(E.start.row, E.start.column), d = this.session.getTextRange(E)), this.$search.set({
            needle: d
          })), this.$search.set(x), x.start || this.$search.set({
            start: E
          });
          var R = this.$search.find(this.session);
          if (x.preventScroll) return R;
          if (R) return this.revealRange(R, T), R;
          x.backwards ? E.start = E.end : E.end = E.start, this.selection.setRange(E);
        }, g.prototype.findNext = function(d, x) {
          this.find({
            skipCurrent: true,
            backwards: false
          }, d, x);
        }, g.prototype.findPrevious = function(d, x) {
          this.find(d, {
            skipCurrent: true,
            backwards: true
          }, x);
        }, g.prototype.revealRange = function(d, x) {
          this.session.unfold(d), this.selection.setSelectionRange(d);
          var T = this.renderer.scrollTop;
          this.renderer.scrollSelectionIntoView(d.start, d.end, 0.5), x !== false && this.renderer.animateScrolling(T);
        }, g.prototype.undo = function() {
          this.session.getUndoManager().undo(this.session), this.renderer.scrollCursorIntoView(null, 0.5);
        }, g.prototype.redo = function() {
          this.session.getUndoManager().redo(this.session), this.renderer.scrollCursorIntoView(null, 0.5);
        }, g.prototype.destroy = function() {
          this.destroyed = true, this.$toDestroy && (this.$toDestroy.forEach(function(d) {
            d.destroy();
          }), this.$toDestroy = []), this.$mouseHandler && this.$mouseHandler.destroy(), this.renderer.destroy(), this._signal("destroy", this), this.session && this.session.destroy(), this._$emitInputEvent && this._$emitInputEvent.cancel(), this.removeAllListeners();
        }, g.prototype.setAutoScrollEditorIntoView = function(d) {
          if (d) {
            var x, T = this, E = false;
            this.$scrollAnchor || (this.$scrollAnchor = document.createElement("div"));
            var R = this.$scrollAnchor;
            R.style.cssText = "position:absolute", this.container.insertBefore(R, this.container.firstChild);
            var I = this.on("changeSelection", function() {
              E = true;
            }), O = this.renderer.on("beforeRender", function() {
              E && (x = T.renderer.container.getBoundingClientRect());
            }), z = this.renderer.on("afterRender", function() {
              if (E && x && (T.isFocused() || T.searchBox && T.searchBox.isFocused())) {
                var F = T.renderer, B = F.$cursorLayer.$pixelPos, W = F.layerConfig, H = B.top - W.offset;
                B.top >= 0 && H + x.top < 0 ? E = true : B.top < W.height && B.top + x.top + W.lineHeight > window.innerHeight ? E = false : E = null, E != null && (R.style.top = H + "px", R.style.left = B.left + "px", R.style.height = W.lineHeight + "px", R.scrollIntoView(E)), E = x = null;
              }
            });
            this.setAutoScrollEditorIntoView = function(F) {
              F || (delete this.setAutoScrollEditorIntoView, this.off("changeSelection", I), this.renderer.off("afterRender", z), this.renderer.off("beforeRender", O));
            };
          }
        }, g.prototype.$resetCursorStyle = function() {
          var d = this.$cursorStyle || "ace", x = this.renderer.$cursorLayer;
          x && (x.setSmoothBlinking(/smooth/.test(d)), x.isBlinking = !this.$readOnly && d != "wide", $.setCssClass(x.element, "ace_slim-cursors", /slim/.test(d)));
        }, g.prototype.prompt = function(d, x, T) {
          var E = this;
          b.loadModule("ace/ext/prompt", function(R) {
            R.prompt(E, d, x, T);
          });
        }, Object.defineProperty(g.prototype, "hoverTooltip", {
          get: function() {
            return this.$hoverTooltip || (this.$hoverTooltip = new k(this.container));
          },
          set: function(d) {
            this.$hoverTooltip && this.$hoverTooltip.destroy(), this.$hoverTooltip = d;
          },
          enumerable: false,
          configurable: true
        }), g;
      })();
      m.$uid = 0, m.prototype.curOp = null, m.prototype.prevOp = {}, m.prototype.$mergeableCommands = [
        "backspace",
        "del",
        "insertstring"
      ], m.prototype.$toggleWordPairs = [
        [
          "first",
          "last"
        ],
        [
          "true",
          "false"
        ],
        [
          "yes",
          "no"
        ],
        [
          "width",
          "height"
        ],
        [
          "top",
          "bottom"
        ],
        [
          "right",
          "left"
        ],
        [
          "on",
          "off"
        ],
        [
          "x",
          "y"
        ],
        [
          "get",
          "set"
        ],
        [
          "max",
          "min"
        ],
        [
          "horizontal",
          "vertical"
        ],
        [
          "show",
          "hide"
        ],
        [
          "add",
          "remove"
        ],
        [
          "up",
          "down"
        ],
        [
          "before",
          "after"
        ],
        [
          "even",
          "odd"
        ],
        [
          "in",
          "out"
        ],
        [
          "inside",
          "outside"
        ],
        [
          "next",
          "previous"
        ],
        [
          "increase",
          "decrease"
        ],
        [
          "attach",
          "detach"
        ],
        [
          "&&",
          "||"
        ],
        [
          "==",
          "!="
        ]
      ], M.implement(m.prototype, h), b.defineOptions(m.prototype, "editor", {
        selectionStyle: {
          set: function(g) {
            this.onSelectionChange(), this._signal("changeSelectionStyle", {
              data: g
            });
          },
          initialValue: "line"
        },
        highlightActiveLine: {
          set: function() {
            this.$updateHighlightActiveLine();
          },
          initialValue: true
        },
        highlightSelectedWord: {
          set: function(g) {
            this.$onSelectionChange();
          },
          initialValue: true
        },
        readOnly: {
          set: function(g) {
            var d = this;
            if (this.textInput.setReadOnly(g), !this.destroyed) {
              this.$resetCursorStyle(), this.$readOnlyCallback || (this.$readOnlyCallback = function(T) {
                var E = false;
                if (T && T.type == "keydown") {
                  if (T && T.key && !T.ctrlKey && !T.metaKey && (T.key == " " && T.preventDefault(), E = T.key.length == 1), !E) return;
                } else T && T.type !== "exec" && (E = true);
                if (E) {
                  var R = $.createElement("div");
                  R.textContent = w("editor.tooltip.disable-editing", "Editing is disabled"), d.hoverTooltip.isOpen || d.hoverTooltip.showForRange(d, d.getSelectionRange(), R);
                } else d.hoverTooltip && d.hoverTooltip.isOpen && d.hoverTooltip.hide();
              });
              var x = this.textInput.getElement();
              g ? (v.addListener(x, "keydown", this.$readOnlyCallback, this), this.commands.on("exec", this.$readOnlyCallback), this.commands.on("commandUnavailable", this.$readOnlyCallback)) : (v.removeListener(x, "keydown", this.$readOnlyCallback), this.commands.off("exec", this.$readOnlyCallback), this.commands.off("commandUnavailable", this.$readOnlyCallback));
            }
          },
          initialValue: false
        },
        copyWithEmptySelection: {
          set: function(g) {
            this.textInput.setCopyWithEmptySelection(g);
          },
          initialValue: false
        },
        cursorStyle: {
          set: function(g) {
            this.$resetCursorStyle();
          },
          values: [
            "ace",
            "slim",
            "smooth",
            "wide"
          ],
          initialValue: "ace"
        },
        mergeUndoDeltas: {
          values: [
            false,
            true,
            "always"
          ],
          initialValue: true
        },
        behavioursEnabled: {
          initialValue: true
        },
        wrapBehavioursEnabled: {
          initialValue: true
        },
        enableAutoIndent: {
          initialValue: true
        },
        autoScrollEditorIntoView: {
          set: function(g) {
            this.setAutoScrollEditorIntoView(g);
          }
        },
        keyboardHandler: {
          set: function(g) {
            this.setKeyboardHandler(g);
          },
          get: function() {
            return this.$keybindingId;
          },
          handlesSet: true
        },
        value: {
          set: function(g) {
            this.session.setValue(g);
          },
          get: function() {
            return this.getValue();
          },
          handlesSet: true,
          hidden: true
        },
        session: {
          set: function(g) {
            this.setSession(g);
          },
          get: function() {
            return this.session;
          },
          handlesSet: true,
          hidden: true
        },
        showLineNumbers: {
          set: function(g) {
            this.renderer.$gutterLayer.setShowLineNumbers(g), this.renderer.$loop.schedule(this.renderer.CHANGE_GUTTER), g && this.$relativeLineNumbers ? y.attach(this) : y.detach(this);
          },
          initialValue: true
        },
        relativeLineNumbers: {
          set: function(g) {
            this.$showLineNumbers && g ? y.attach(this) : y.detach(this);
          }
        },
        placeholder: {
          set: function(g) {
            this.$updatePlaceholder || (this.$updatePlaceholder = function() {
              var d = this.session && (this.renderer.$composition || this.session.getLength() > 1 || this.session.getLine(0).length > 0);
              if (d && this.renderer.placeholderNode) this.renderer.off("afterRender", this.$updatePlaceholder), $.removeCssClass(this.container, "ace_hasPlaceholder"), this.renderer.placeholderNode.remove(), this.renderer.placeholderNode = null;
              else if (!d && !this.renderer.placeholderNode) {
                this.renderer.on("afterRender", this.$updatePlaceholder), $.addCssClass(this.container, "ace_hasPlaceholder");
                var x = $.createElement("div");
                x.className = "ace_placeholder", x.textContent = this.$placeholder || "", this.renderer.placeholderNode = x, this.renderer.content.appendChild(this.renderer.placeholderNode);
              } else !d && this.renderer.placeholderNode && (this.renderer.placeholderNode.textContent = this.$placeholder || "");
            }.bind(this), this.on("input", this.$updatePlaceholder)), this.$updatePlaceholder();
          }
        },
        enableKeyboardAccessibility: {
          set: function(g) {
            var d = {
              name: "blurTextInput",
              description: "Set focus to the editor content div to allow tabbing through the page",
              bindKey: "Esc",
              exec: function(E) {
                E.blur(), E.renderer.scroller.focus();
              },
              readOnly: true
            }, x = function(E) {
              if (E.target == this.renderer.scroller && E.keyCode === p.enter) {
                E.preventDefault();
                var R = this.getCursorPosition().row;
                this.isRowVisible(R) || this.scrollToLine(R, true, true), this.focus();
              }
            }, T;
            g ? (this.renderer.enableKeyboardAccessibility = true, this.renderer.keyboardFocusClassName = "ace_keyboard-focus", this.textInput.getElement().setAttribute("tabindex", -1), this.textInput.setNumberOfExtraLines(l.isWin ? 3 : 0), this.renderer.scroller.setAttribute("tabindex", 0), this.renderer.scroller.setAttribute("role", "group"), this.renderer.scroller.setAttribute("aria-roledescription", w("editor.scroller.aria-roledescription", "editor")), this.renderer.scroller.classList.add(this.renderer.keyboardFocusClassName), this.renderer.scroller.setAttribute("aria-label", w("editor.scroller.aria-label", "Editor content, press Enter to start editing, press Escape to exit")), this.renderer.scroller.addEventListener("keyup", x.bind(this)), this.commands.addCommand(d), this.renderer.$gutter.setAttribute("tabindex", 0), this.renderer.$gutter.setAttribute("aria-hidden", false), this.renderer.$gutter.setAttribute("role", "group"), this.renderer.$gutter.setAttribute("aria-roledescription", w("editor.gutter.aria-roledescription", "editor gutter")), this.renderer.$gutter.setAttribute("aria-label", w("editor.gutter.aria-label", "Editor gutter, press Enter to interact with controls using arrow keys, press Escape to exit")), this.renderer.$gutter.classList.add(this.renderer.keyboardFocusClassName), this.renderer.content.setAttribute("aria-hidden", true), T || (T = new c(this)), T.addListener(), this.textInput.setAriaOptions({
              setLabel: true
            })) : (this.renderer.enableKeyboardAccessibility = false, this.textInput.getElement().setAttribute("tabindex", 0), this.textInput.setNumberOfExtraLines(0), this.renderer.scroller.setAttribute("tabindex", -1), this.renderer.scroller.removeAttribute("role"), this.renderer.scroller.removeAttribute("aria-roledescription"), this.renderer.scroller.classList.remove(this.renderer.keyboardFocusClassName), this.renderer.scroller.removeAttribute("aria-label"), this.renderer.scroller.removeEventListener("keyup", x.bind(this)), this.commands.removeCommand(d), this.renderer.content.removeAttribute("aria-hidden"), this.renderer.$gutter.setAttribute("tabindex", -1), this.renderer.$gutter.setAttribute("aria-hidden", true), this.renderer.$gutter.removeAttribute("role"), this.renderer.$gutter.removeAttribute("aria-roledescription"), this.renderer.$gutter.removeAttribute("aria-label"), this.renderer.$gutter.classList.remove(this.renderer.keyboardFocusClassName), T && T.removeListener());
          },
          initialValue: false
        },
        textInputAriaLabel: {
          set: function(g) {
            this.$textInputAriaLabel = g;
          },
          initialValue: ""
        },
        enableMobileMenu: {
          set: function(g) {
            this.$enableMobileMenu = g;
          },
          initialValue: true
        },
        customScrollbar: "renderer",
        hScrollBarAlwaysVisible: "renderer",
        vScrollBarAlwaysVisible: "renderer",
        highlightGutterLine: "renderer",
        animatedScroll: "renderer",
        showInvisibles: "renderer",
        showPrintMargin: "renderer",
        printMarginColumn: "renderer",
        printMargin: "renderer",
        fadeFoldWidgets: "renderer",
        showFoldWidgets: "renderer",
        displayIndentGuides: "renderer",
        highlightIndentGuides: "renderer",
        showGutter: "renderer",
        fontSize: "renderer",
        fontFamily: "renderer",
        maxLines: "renderer",
        minLines: "renderer",
        scrollPastEnd: "renderer",
        fixedWidthGutter: "renderer",
        theme: "renderer",
        hasCssTransforms: "renderer",
        maxPixelHeight: "renderer",
        useTextareaForIME: "renderer",
        useResizeObserver: "renderer",
        useSvgGutterIcons: "renderer",
        showFoldedAnnotations: "renderer",
        scrollSpeed: "$mouseHandler",
        dragDelay: "$mouseHandler",
        dragEnabled: "$mouseHandler",
        focusTimeout: "$mouseHandler",
        firstLineNumber: "session",
        overwrite: "session",
        newLineMode: "session",
        useWorker: "session",
        useSoftTabs: "session",
        navigateWithinSoftTabs: "session",
        tabSize: "session",
        wrap: "session",
        indentedSoftWrap: "session",
        foldStyle: "session",
        mode: "session"
      });
      var y = {
        getText: function(g, d) {
          return (Math.abs(g.selection.lead.row - d) || d + 1 + (d < 9 ? "\xB7" : "")) + "";
        },
        getWidth: function(g, d, x) {
          return Math.max(d.toString().length, (x.lastRow + 1).toString().length, 2) * x.characterWidth;
        },
        update: function(g, d) {
          d.renderer.$loop.schedule(d.renderer.CHANGE_GUTTER);
        },
        attach: function(g) {
          g.renderer.$gutterLayer.$renderer = this, g.on("changeSelection", this.update), this.update(null, g);
        },
        detach: function(g) {
          g.renderer.$gutterLayer.$renderer == this && (g.renderer.$gutterLayer.$renderer = null), g.off("changeSelection", this.update), this.update(null, g);
        }
      };
      _.Editor = m;
    }), ace.define("ace/layer/lines", [
      "require",
      "exports",
      "module",
      "ace/lib/dom"
    ], function(A, _, N) {
      var L = A("../lib/dom"), M = (function() {
        function $(a, l) {
          this.element = a, this.canvasHeight = l || 5e5, this.element.style.height = this.canvasHeight * 2 + "px", this.cells = [], this.cellCache = [], this.$offsetCoefficient = 0;
        }
        return $.prototype.moveContainer = function(a) {
          L.translate(this.element, 0, -(a.firstRowScreen * a.lineHeight % this.canvasHeight) - a.offset * this.$offsetCoefficient);
        }, $.prototype.pageChanged = function(a, l) {
          return Math.floor(a.firstRowScreen * a.lineHeight / this.canvasHeight) !== Math.floor(l.firstRowScreen * l.lineHeight / this.canvasHeight);
        }, $.prototype.computeLineTop = function(a, l, i) {
          var o = l.firstRowScreen * l.lineHeight, r = Math.floor(o / this.canvasHeight), n = i.documentToScreenRow(a, 0) * l.lineHeight;
          return n - r * this.canvasHeight;
        }, $.prototype.computeLineHeight = function(a, l, i) {
          return l.lineHeight * i.getRowLineCount(a);
        }, $.prototype.getLength = function() {
          return this.cells.length;
        }, $.prototype.get = function(a) {
          return this.cells[a];
        }, $.prototype.shift = function() {
          this.$cacheCell(this.cells.shift());
        }, $.prototype.pop = function() {
          this.$cacheCell(this.cells.pop());
        }, $.prototype.push = function(a) {
          if (Array.isArray(a)) {
            this.cells.push.apply(this.cells, a);
            for (var l = L.createFragment(this.element), i = 0; i < a.length; i++) l.appendChild(a[i].element);
            this.element.appendChild(l);
          } else this.cells.push(a), this.element.appendChild(a.element);
        }, $.prototype.unshift = function(a) {
          if (Array.isArray(a)) {
            this.cells.unshift.apply(this.cells, a);
            for (var l = L.createFragment(this.element), i = 0; i < a.length; i++) l.appendChild(a[i].element);
            this.element.firstChild ? this.element.insertBefore(l, this.element.firstChild) : this.element.appendChild(l);
          } else this.cells.unshift(a), this.element.insertAdjacentElement("afterbegin", a.element);
        }, $.prototype.last = function() {
          return this.cells.length ? this.cells[this.cells.length - 1] : null;
        }, $.prototype.$cacheCell = function(a) {
          a && (a.element.remove(), this.cellCache.push(a));
        }, $.prototype.createCell = function(a, l, i, o) {
          var r = this.cellCache.pop();
          if (!r) {
            var n = L.createElement("div");
            o && o(n), this.element.appendChild(n), r = {
              element: n,
              text: "",
              row: a
            };
          }
          return r.row = a, r;
        }, $;
      })();
      _.Lines = M;
    }), ace.define("ace/layer/gutter", [
      "require",
      "exports",
      "module",
      "ace/lib/dom",
      "ace/lib/oop",
      "ace/lib/lang",
      "ace/lib/event_emitter",
      "ace/layer/lines",
      "ace/config"
    ], function(A, _, N) {
      var L = A("../lib/dom"), M = A("../lib/oop"), $ = A("../lib/lang"), a = A("../lib/event_emitter").EventEmitter, l = A("./lines").Lines, i = A("../config").nls, o = (function() {
        function n(e) {
          this.$showCursorMarker = null, this.element = L.createElement("div"), this.element.className = "ace_layer ace_gutter-layer", e.appendChild(this.element), this.setShowFoldWidgets(this.$showFoldWidgets), this.gutterWidth = 0, this.$annotations = [], this.$updateAnnotations = this.$updateAnnotations.bind(this), this.$lines = new l(this.element), this.$lines.$offsetCoefficient = 1;
        }
        return n.prototype.setSession = function(e) {
          this.session && this.session.off("change", this.$updateAnnotations), this.session = e, e && e.on("change", this.$updateAnnotations);
        }, n.prototype.addGutterDecoration = function(e, t) {
          window.console && console.warn && console.warn("deprecated use session.addGutterDecoration"), this.session.addGutterDecoration(e, t);
        }, n.prototype.removeGutterDecoration = function(e, t) {
          window.console && console.warn && console.warn("deprecated use session.removeGutterDecoration"), this.session.removeGutterDecoration(e, t);
        }, n.prototype.setAnnotations = function(e) {
          this.$annotations = [];
          for (var t = 0; t < e.length; t++) {
            var s = e[t], h = s.row, u = this.$annotations[h];
            u || (u = this.$annotations[h] = {
              text: [],
              type: [],
              displayText: []
            });
            var S = s.text, b = s.text, f = s.type;
            S = S ? $.escapeHTML(S) : s.html || "", b = b || s.html || "", u.text.indexOf(S) === -1 && (u.text.push(S), u.type.push(f), u.displayText.push(b));
            var c = s.className;
            c ? u.className = c : f === "error" ? u.className = " ace_error" : f === "security" && !/\bace_error\b/.test(u.className) ? u.className = " ace_security" : f === "warning" && !/\bace_(error|security)\b/.test(u.className) ? u.className = " ace_warning" : f === "info" && !u.className ? u.className = " ace_info" : f === "hint" && !u.className && (u.className = " ace_hint");
          }
        }, n.prototype.$updateAnnotations = function(e) {
          if (this.$annotations.length) {
            var t = e.start.row, s = e.end.row - t;
            if (s !== 0) if (e.action == "remove") this.$annotations.splice(t, s + 1, null);
            else {
              var h = new Array(s + 1);
              h.unshift(t, 1), this.$annotations.splice.apply(this.$annotations, h);
            }
          }
        }, n.prototype.update = function(e) {
          this.config = e;
          var t = this.session, s = e.firstRow, h = Math.min(e.lastRow + e.gutterOffset, t.getLength() - 1);
          this.oldLastRow = h, this.config = e, this.$lines.moveContainer(e), this.$updateCursorRow();
          for (var u = t.getNextFoldLine(s), S = u ? u.start.row : 1 / 0, b = null, f = -1, c = s; ; ) {
            if (c > S && (c = u.end.row + 1, u = t.getNextFoldLine(c, u), S = u ? u.start.row : 1 / 0), c > h) {
              for (; this.$lines.getLength() > f + 1; ) this.$lines.pop();
              break;
            }
            b = this.$lines.get(++f), b ? b.row = c : (b = this.$lines.createCell(c, e, this.session, r), this.$lines.push(b)), this.$renderCell(b, e, u, c), c++;
          }
          this._signal("afterRender"), this.$updateGutterWidth(e), this.$showCursorMarker && this.$highlightGutterLine && this.$updateCursorMarker();
        }, n.prototype.$updateGutterWidth = function(e) {
          var t = this.session, s = t.gutterRenderer || this.$renderer, h = t.$firstLineNumber, u = this.$lines.last() ? this.$lines.last().text : "";
          (this.$fixedWidth || t.$useWrapMode) && (u = t.getLength() + h - 1);
          var S = s ? s.getWidth(t, u, e) : u.toString().length * e.characterWidth, b = this.$padding || this.$computePadding();
          S += b.left + b.right, S !== this.gutterWidth && !isNaN(S) && (this.gutterWidth = S, this.element.parentNode.style.width = this.element.style.width = Math.ceil(this.gutterWidth) + "px", this._signal("changeGutterWidth", S));
        }, n.prototype.$updateCursorRow = function() {
          if (this.$highlightGutterLine) {
            var e = this.session.selection.getCursor();
            this.$cursorRow !== e.row && (this.$cursorRow = e.row);
          }
        }, n.prototype.updateLineHighlight = function() {
          if (this.$showCursorMarker && this.$updateCursorMarker(), !!this.$highlightGutterLine) {
            var e = this.session.selection.cursor.row;
            if (this.$cursorRow = e, !(this.$cursorCell && this.$cursorCell.row == e)) {
              this.$cursorCell && (this.$cursorCell.element.className = this.$cursorCell.element.className.replace("ace_gutter-active-line ", ""));
              var t = this.$lines.cells;
              this.$cursorCell = null;
              for (var s = 0; s < t.length; s++) {
                var h = t[s];
                if (h.row >= this.$cursorRow) {
                  if (h.row > this.$cursorRow) {
                    var u = this.session.getFoldLine(this.$cursorRow);
                    if (s > 0 && u && u.start.row == t[s - 1].row) h = t[s - 1];
                    else break;
                  }
                  h.element.className = "ace_gutter-active-line " + h.element.className, this.$cursorCell = h;
                  break;
                }
              }
            }
          }
        }, n.prototype.$updateCursorMarker = function() {
          if (this.session) {
            var e = this.session;
            this.$highlightElement || (this.$highlightElement = L.createElement("div"), this.$highlightElement.className = "ace_gutter-cursor", this.$highlightElement.style.pointerEvents = "none", this.element.appendChild(this.$highlightElement));
            var t = e.selection.cursor, s = this.config, h = this.$lines, u = s.firstRowScreen * s.lineHeight, S = Math.floor(u / h.canvasHeight), b = e.documentToScreenRow(t) * s.lineHeight, f = b - S * h.canvasHeight;
            L.setStyle(this.$highlightElement.style, "height", s.lineHeight + "px"), L.setStyle(this.$highlightElement.style, "top", f + "px");
          }
        }, n.prototype.scrollLines = function(e) {
          var t = this.config;
          if (this.config = e, this.$updateCursorRow(), this.$lines.pageChanged(t, e)) return this.update(e);
          this.$lines.moveContainer(e);
          var s = Math.min(e.lastRow + e.gutterOffset, this.session.getLength() - 1), h = this.oldLastRow;
          if (this.oldLastRow = s, !t || h < e.firstRow) return this.update(e);
          if (s < t.firstRow) return this.update(e);
          if (t.firstRow < e.firstRow) for (var u = this.session.getFoldedRowCount(t.firstRow, e.firstRow - 1); u > 0; u--) this.$lines.shift();
          if (h > s) for (var u = this.session.getFoldedRowCount(s + 1, h); u > 0; u--) this.$lines.pop();
          e.firstRow < t.firstRow && this.$lines.unshift(this.$renderLines(e, e.firstRow, t.firstRow - 1)), s > h && this.$lines.push(this.$renderLines(e, h + 1, s)), this.updateLineHighlight(), this._signal("afterRender"), this.$updateGutterWidth(e);
        }, n.prototype.$renderLines = function(e, t, s) {
          for (var h = [], u = t, S = this.session.getNextFoldLine(u), b = S ? S.start.row : 1 / 0; u > b && (u = S.end.row + 1, S = this.session.getNextFoldLine(u, S), b = S ? S.start.row : 1 / 0), !(u > s); ) {
            var f = this.$lines.createCell(u, e, this.session, r);
            this.$renderCell(f, e, S, u), h.push(f), u++;
          }
          return h;
        }, n.prototype.$renderCell = function(e, t, s, h) {
          var u = e.element, S = this.session, b = u.childNodes[0], f = u.childNodes[1], c = u.childNodes[2], w = u.childNodes[3], C = c.firstChild, p = S.$firstLineNumber, v = S.$breakpoints, k = S.$decorations, m = S.gutterRenderer || this.$renderer, y = this.$showFoldWidgets && S.foldWidgets, g = s ? s.start.row : Number.MAX_VALUE, d = t.lineHeight + "px", x = this.$useSvgGutterIcons ? "ace_gutter-cell_svg-icons " : "ace_gutter-cell ", T = this.$useSvgGutterIcons ? "ace_icon_svg" : "ace_icon", E = (m ? m.getText(S, h) : h + p).toString();
          if (this.$highlightGutterLine && (h == this.$cursorRow || s && h < this.$cursorRow && h >= g && this.$cursorRow <= s.end.row) && (x += "ace_gutter-active-line ", this.$cursorCell != e && (this.$cursorCell && (this.$cursorCell.element.className = this.$cursorCell.element.className.replace("ace_gutter-active-line ", "")), this.$cursorCell = e)), v[h] && (x += v[h]), k[h] && (x += k[h]), this.$annotations[h] && h !== g && (x += this.$annotations[h].className), y) {
            var R = y[h];
            R == null && (R = y[h] = S.getFoldWidget(h));
          }
          if (R) {
            var I = "ace_fold-widget ace_" + R, O = R == "start" && h == g && h < s.end.row;
            if (O) {
              I += " ace_closed";
              for (var z = "", F = false, B = h + 1; B <= s.end.row; B++) if (this.$annotations[B]) {
                if (this.$annotations[B].className === " ace_error") {
                  F = true, z = " ace_error_fold";
                  break;
                }
                this.$annotations[B].className === " ace_security" ? (F = true, z = " ace_security_fold") : this.$annotations[B].className === " ace_warning" && z !== " ace_security_fold" && (F = true, z = " ace_warning_fold");
              }
              x += z;
            } else I += " ace_open";
            f.className != I && (f.className = I), L.setStyle(f.style, "height", d), L.setStyle(f.style, "display", "inline-block"), f.setAttribute("role", "button"), f.setAttribute("tabindex", "-1");
            var W = S.getFoldWidgetRange(h);
            W ? f.setAttribute("aria-label", i("gutter.code-folding.range.aria-label", "Toggle code folding, rows $0 through $1", [
              W.start.row + 1,
              W.end.row + 1
            ])) : s ? f.setAttribute("aria-label", i("gutter.code-folding.closed.aria-label", "Toggle code folding, rows $0 through $1", [
              s.start.row + 1,
              s.end.row + 1
            ])) : f.setAttribute("aria-label", i("gutter.code-folding.open.aria-label", "Toggle code folding, row $0", [
              h + 1
            ])), O ? (f.setAttribute("aria-expanded", "false"), f.setAttribute("title", i("gutter.code-folding.closed.title", "Unfold code"))) : (f.setAttribute("aria-expanded", "true"), f.setAttribute("title", i("gutter.code-folding.open.title", "Fold code")));
          } else f && (L.setStyle(f.style, "display", "none"), f.setAttribute("tabindex", "0"), f.removeAttribute("role"), f.removeAttribute("aria-label"));
          var H = this.session.$gutterCustomWidgets[h];
          if (H ? this.$addCustomWidget(h, H, e) : w && this.$removeCustomWidget(h, e), F && this.$showFoldedAnnotations) {
            c.className = "ace_gutter_annotation", C.className = T, C.className += z, L.setStyle(C.style, "height", d), L.setStyle(c.style, "display", "block"), L.setStyle(c.style, "height", d);
            var U;
            switch (z) {
              case " ace_error_fold":
                U = i("gutter.annotation.aria-label.error", "Error, read annotations row $0", [
                  E
                ]);
                break;
              case " ace_security_fold":
                U = i("gutter.annotation.aria-label.security", "Security finding, read annotations row $0", [
                  E
                ]);
                break;
              case " ace_warning_fold":
                U = i("gutter.annotation.aria-label.warning", "Warning, read annotations row $0", [
                  E
                ]);
                break;
            }
            c.setAttribute("aria-label", U), c.setAttribute("tabindex", "-1"), c.setAttribute("role", "button");
          } else if (this.$annotations[h]) {
            c.className = "ace_gutter_annotation", C.className = T, this.$useSvgGutterIcons ? C.className += this.$annotations[h].className : u.classList.add(this.$annotations[h].className.replace(" ", "")), L.setStyle(C.style, "height", d), L.setStyle(c.style, "display", "block"), L.setStyle(c.style, "height", d);
            var U;
            switch (this.$annotations[h].className) {
              case " ace_error":
                U = i("gutter.annotation.aria-label.error", "Error, read annotations row $0", [
                  E
                ]);
                break;
              case " ace_security":
                U = i("gutter.annotation.aria-label.security", "Security finding, read annotations row $0", [
                  E
                ]);
                break;
              case " ace_warning":
                U = i("gutter.annotation.aria-label.warning", "Warning, read annotations row $0", [
                  E
                ]);
                break;
              case " ace_info":
                U = i("gutter.annotation.aria-label.info", "Info, read annotations row $0", [
                  E
                ]);
                break;
              case " ace_hint":
                U = i("gutter.annotation.aria-label.hint", "Suggestion, read annotations row $0", [
                  E
                ]);
                break;
            }
            c.setAttribute("aria-label", U), c.setAttribute("tabindex", "-1"), c.setAttribute("role", "button");
          } else L.setStyle(c.style, "display", "none"), c.removeAttribute("aria-label"), c.removeAttribute("role"), c.setAttribute("tabindex", "0");
          return E !== b.data && (b.data = E), u.className != x && (u.className = x), L.setStyle(e.element.style, "height", this.$lines.computeLineHeight(h, t, S) + "px"), L.setStyle(e.element.style, "top", this.$lines.computeLineTop(h, t, S) + "px"), e.text = E, c.style.display === "none" && f.style.display === "none" && !H ? e.element.setAttribute("aria-hidden", true) : e.element.setAttribute("aria-hidden", false), e;
        }, n.prototype.setHighlightGutterLine = function(e) {
          this.$highlightGutterLine = e, !e && this.$highlightElement && (this.$highlightElement.remove(), this.$highlightElement = null);
        }, n.prototype.setShowLineNumbers = function(e) {
          this.$renderer = !e && {
            getWidth: function() {
              return 0;
            },
            getText: function() {
              return "";
            }
          };
        }, n.prototype.getShowLineNumbers = function() {
          return this.$showLineNumbers;
        }, n.prototype.setShowFoldWidgets = function(e) {
          e ? L.addCssClass(this.element, "ace_folding-enabled") : L.removeCssClass(this.element, "ace_folding-enabled"), this.$showFoldWidgets = e, this.$padding = null;
        }, n.prototype.getShowFoldWidgets = function() {
          return this.$showFoldWidgets;
        }, n.prototype.$hideFoldWidget = function(e, t) {
          var s = t || this.$getGutterCell(e);
          if (s && s.element) {
            var h = s.element.childNodes[1];
            h && L.setStyle(h.style, "display", "none");
          }
        }, n.prototype.$showFoldWidget = function(e, t) {
          var s = t || this.$getGutterCell(e);
          if (s && s.element) {
            var h = s.element.childNodes[1];
            h && this.session.foldWidgets && this.session.foldWidgets[s.row] && L.setStyle(h.style, "display", "inline-block");
          }
        }, n.prototype.$getGutterCell = function(e) {
          var t = this.$lines.cells, s = 0, h = t.length - 1;
          if (!(e < t[0].row || e > t[h].row)) {
            for (; s <= h; ) {
              var u = Math.floor((s + h) / 2), S = t[u];
              if (S.row > e) h = u - 1;
              else if (S.row < e) s = u + 1;
              else return S;
            }
            return S;
          }
        }, n.prototype.$addCustomWidget = function(e, t, s) {
          var h = t.className, u = t.label, S = t.title, b = t.callbacks;
          this.session.$gutterCustomWidgets[e] = {
            className: h,
            label: u,
            title: S,
            callbacks: b
          }, this.$hideFoldWidget(e, s);
          var f = s || this.$getGutterCell(e);
          if (f && f.element) {
            var c = f.element.querySelector(".ace_custom-widget");
            c && c.remove(), c = L.createElement("span"), c.className = "ace_custom-widget ".concat(h), c.setAttribute("tabindex", "-1"), c.setAttribute("role", "button"), c.setAttribute("aria-label", u), c.setAttribute("title", S), L.setStyle(c.style, "display", "inline-block"), L.setStyle(c.style, "height", "inherit"), b && b.onClick && c.addEventListener("click", function(w) {
              b.onClick(w, e), w.stopPropagation();
            }), f.element.appendChild(c);
          }
        }, n.prototype.$removeCustomWidget = function(e, t) {
          delete this.session.$gutterCustomWidgets[e], this.$showFoldWidget(e, t);
          var s = t || this.$getGutterCell(e);
          if (s && s.element) {
            var h = s.element.querySelector(".ace_custom-widget");
            h && s.element.removeChild(h);
          }
        }, n.prototype.$computePadding = function() {
          if (!this.element.firstChild) return {
            left: 0,
            right: 0
          };
          var e = L.computedStyle(this.element.firstChild);
          return this.$padding = {}, this.$padding.left = (parseInt(e.borderLeftWidth) || 0) + (parseInt(e.paddingLeft) || 0) + 1, this.$padding.right = (parseInt(e.borderRightWidth) || 0) + (parseInt(e.paddingRight) || 0), this.$padding;
        }, n.prototype.getRegion = function(e) {
          var t = this.$padding || this.$computePadding(), s = this.element.getBoundingClientRect();
          if (e.x < t.left + s.left) return "markers";
          if (this.$showFoldWidgets && e.x > s.right - t.right) return "foldWidgets";
        }, n;
      })();
      o.prototype.$fixedWidth = false, o.prototype.$highlightGutterLine = true, o.prototype.$renderer = void 0, o.prototype.$showLineNumbers = true, o.prototype.$showFoldWidgets = true, M.implement(o.prototype, a);
      function r(n) {
        var e = document.createTextNode("");
        n.appendChild(e);
        var t = L.createElement("span");
        n.appendChild(t);
        var s = L.createElement("span");
        n.appendChild(s);
        var h = L.createElement("span");
        return s.appendChild(h), n;
      }
      _.Gutter = o;
    }), ace.define("ace/layer/marker", [
      "require",
      "exports",
      "module",
      "ace/range",
      "ace/lib/dom"
    ], function(A, _, N) {
      var L = A("../range").Range, M = A("../lib/dom"), $ = (function() {
        function l(i) {
          this.element = M.createElement("div"), this.element.className = "ace_layer ace_marker-layer", i.appendChild(this.element);
        }
        return l.prototype.setPadding = function(i) {
          this.$padding = i;
        }, l.prototype.setSession = function(i) {
          this.session = i;
        }, l.prototype.setMarkers = function(i) {
          this.markers = i;
        }, l.prototype.elt = function(i, o) {
          var r = this.i != -1 && this.element.childNodes[this.i];
          r ? this.i++ : (r = document.createElement("div"), this.element.appendChild(r), this.i = -1), r.style.cssText = o, r.className = i;
        }, l.prototype.update = function(i) {
          if (i) {
            this.config = i, this.i = 0;
            var o;
            for (var r in this.markers) {
              var n = this.markers[r];
              if (!n.range) {
                n.update(o, this, this.session, i);
                continue;
              }
              var e = n.range.clipRows(i.firstRow, i.lastRow);
              if (!e.isEmpty()) if (e = e.toScreenRange(this.session), n.renderer) {
                var t = this.$getTop(e.start.row, i), s = this.$padding + e.start.column * i.characterWidth;
                n.renderer(o, e, s, t, i);
              } else n.type == "fullLine" ? this.drawFullLineMarker(o, e, n.clazz, i) : n.type == "screenLine" ? this.drawScreenLineMarker(o, e, n.clazz, i) : e.isMultiLine() ? n.type == "text" ? this.drawTextMarker(o, e, n.clazz, i) : this.drawMultiLineMarker(o, e, n.clazz, i) : this.drawSingleLineMarker(o, e, n.clazz + " ace_start ace_br15", i);
            }
            if (this.i != -1) for (; this.i < this.element.childElementCount; ) this.element.removeChild(this.element.lastChild);
          }
        }, l.prototype.$getTop = function(i, o) {
          return (i - o.firstRowScreen) * o.lineHeight;
        }, l.prototype.drawTextMarker = function(i, o, r, n, e) {
          for (var t = this.session, s = o.start.row, h = o.end.row, u = s, S = 0, b = 0, f = t.getScreenLastRowColumn(u), c = new L(u, o.start.column, u, b); u <= h; u++) c.start.row = c.end.row = u, c.start.column = u == s ? o.start.column : t.getRowWrapIndent(u), c.end.column = f, S = b, b = f, f = u + 1 < h ? t.getScreenLastRowColumn(u + 1) : u == h ? 0 : o.end.column, this.drawSingleLineMarker(i, c, r + (u == s ? " ace_start" : "") + " ace_br" + a(u == s || u == s + 1 && o.start.column, S < b, b > f, u == h), n, u == h ? 0 : 1, e);
        }, l.prototype.drawMultiLineMarker = function(i, o, r, n, e) {
          var t = this.$padding, s = n.lineHeight, h = this.$getTop(o.start.row, n), u = t + o.start.column * n.characterWidth;
          if (e = e || "", this.session.$bidiHandler.isBidiRow(o.start.row)) {
            var S = o.clone();
            S.end.row = S.start.row, S.end.column = this.session.getLine(S.start.row).length, this.drawBidiSingleLineMarker(i, S, r + " ace_br1 ace_start", n, null, e);
          } else this.elt(r + " ace_br1 ace_start", "height:" + s + "px;right:" + t + "px;top:" + h + "px;left:" + u + "px;" + (e || ""));
          if (this.session.$bidiHandler.isBidiRow(o.end.row)) {
            var S = o.clone();
            S.start.row = S.end.row, S.start.column = 0, this.drawBidiSingleLineMarker(i, S, r + " ace_br12", n, null, e);
          } else {
            h = this.$getTop(o.end.row, n);
            var b = o.end.column * n.characterWidth;
            this.elt(r + " ace_br12", "height:" + s + "px;width:" + b + "px;top:" + h + "px;left:" + t + "px;" + (e || ""));
          }
          if (s = (o.end.row - o.start.row - 1) * n.lineHeight, !(s <= 0)) {
            h = this.$getTop(o.start.row + 1, n);
            var f = (o.start.column ? 1 : 0) | (o.end.column ? 0 : 8);
            this.elt(r + (f ? " ace_br" + f : ""), "height:" + s + "px;right:" + t + "px;top:" + h + "px;left:" + t + "px;" + (e || ""));
          }
        }, l.prototype.drawSingleLineMarker = function(i, o, r, n, e, t) {
          if (this.session.$bidiHandler.isBidiRow(o.start.row)) return this.drawBidiSingleLineMarker(i, o, r, n, e, t);
          var s = n.lineHeight, h = (o.end.column + (e || 0) - o.start.column) * n.characterWidth, u = this.$getTop(o.start.row, n), S = this.$padding + o.start.column * n.characterWidth;
          this.elt(r, "height:" + s + "px;width:" + h + "px;top:" + u + "px;left:" + S + "px;" + (t || ""));
        }, l.prototype.drawBidiSingleLineMarker = function(i, o, r, n, e, t) {
          var s = n.lineHeight, h = this.$getTop(o.start.row, n), u = this.$padding, S = this.session.$bidiHandler.getSelections(o.start.column, o.end.column);
          S.forEach(function(b) {
            this.elt(r, "height:" + s + "px;width:" + (b.width + (e || 0)) + "px;top:" + h + "px;left:" + (u + b.left) + "px;" + (t || ""));
          }, this);
        }, l.prototype.drawFullLineMarker = function(i, o, r, n, e) {
          var t = this.$getTop(o.start.row, n), s = n.lineHeight;
          o.start.row != o.end.row && (s += this.$getTop(o.end.row, n) - t), this.elt(r, "height:" + s + "px;top:" + t + "px;left:0;right:0;" + (e || ""));
        }, l.prototype.drawScreenLineMarker = function(i, o, r, n, e) {
          var t = this.$getTop(o.start.row, n), s = n.lineHeight;
          this.elt(r, "height:" + s + "px;top:" + t + "px;left:0;right:0;" + (e || ""));
        }, l;
      })();
      $.prototype.$padding = 0;
      function a(l, i, o, r) {
        return (l ? 1 : 0) | (i ? 2 : 0) | (o ? 4 : 0) | (r ? 8 : 0);
      }
      _.Marker = $;
    }), ace.define("ace/layer/text_util", [
      "require",
      "exports",
      "module"
    ], function(A, _, N) {
      var L = /* @__PURE__ */ new Set([
        "text",
        "rparen",
        "lparen"
      ]);
      _.isTextToken = function(M) {
        return L.has(M);
      };
    }), ace.define("ace/layer/text", [
      "require",
      "exports",
      "module",
      "ace/lib/oop",
      "ace/lib/dom",
      "ace/lib/lang",
      "ace/layer/lines",
      "ace/lib/event_emitter",
      "ace/config",
      "ace/layer/text_util"
    ], function(A, _, N) {
      var L = A("../lib/oop"), M = A("../lib/dom"), $ = A("../lib/lang"), a = A("./lines").Lines, l = A("../lib/event_emitter").EventEmitter, i = A("../config").nls, o = A("./text_util").isTextToken, r = (function() {
        function n(e) {
          this.dom = M, this.element = this.dom.createElement("div"), this.element.className = "ace_layer ace_text-layer", e.appendChild(this.element), this.$updateEolChar = this.$updateEolChar.bind(this), this.$lines = new a(this.element);
        }
        return n.prototype.$updateEolChar = function() {
          var e = this.session.doc, t = e.getNewLineCharacter() == `
` && e.getNewLineMode() != "windows", s = t ? this.EOL_CHAR_LF : this.EOL_CHAR_CRLF;
          if (this.EOL_CHAR != s) return this.EOL_CHAR = s, true;
        }, n.prototype.setPadding = function(e) {
          this.$padding = e, this.element.style.margin = "0 " + e + "px";
        }, n.prototype.getLineHeight = function() {
          return this.$fontMetrics.$characterSize.height || 0;
        }, n.prototype.getCharacterWidth = function() {
          return this.$fontMetrics.$characterSize.width || 0;
        }, n.prototype.$setFontMetrics = function(e) {
          this.$fontMetrics = e, this.$fontMetrics.on("changeCharacterSize", function(t) {
            this._signal("changeCharacterSize", t);
          }.bind(this)), this.$pollSizeChanges();
        }, n.prototype.checkForSizeChanges = function() {
          this.$fontMetrics.checkForSizeChanges();
        }, n.prototype.$pollSizeChanges = function() {
          return this.$pollSizeChangesTimer = this.$fontMetrics.$pollSizeChanges();
        }, n.prototype.setSession = function(e) {
          this.session = e, e && this.$computeTabString();
        }, n.prototype.setShowInvisibles = function(e) {
          return this.showInvisibles == e ? false : (this.showInvisibles = e, typeof e == "string" ? (this.showSpaces = /tab/i.test(e), this.showTabs = /space/i.test(e), this.showEOL = /eol/i.test(e)) : this.showSpaces = this.showTabs = this.showEOL = e, this.$computeTabString(), true);
        }, n.prototype.setDisplayIndentGuides = function(e) {
          return this.displayIndentGuides == e ? false : (this.displayIndentGuides = e, this.$computeTabString(), true);
        }, n.prototype.setHighlightIndentGuides = function(e) {
          return this.$highlightIndentGuides === e ? false : (this.$highlightIndentGuides = e, e);
        }, n.prototype.$computeTabString = function() {
          var e = this.session.getTabSize();
          this.tabSize = e;
          for (var t = this.$tabStrings = [
            0
          ], s = 1; s < e + 1; s++) if (this.showTabs) {
            var h = this.dom.createElement("span");
            h.className = "ace_invisible ace_invisible_tab", h.textContent = $.stringRepeat(this.TAB_CHAR, s), t.push(h);
          } else t.push(this.dom.createTextNode($.stringRepeat(" ", s), this.element));
          if (this.displayIndentGuides) {
            this.$indentGuideRe = /\s\S| \t|\t |\s$/;
            var u = "ace_indent-guide", S = this.showSpaces ? " ace_invisible ace_invisible_space" : "", b = this.showSpaces ? $.stringRepeat(this.SPACE_CHAR, this.tabSize) : $.stringRepeat(" ", this.tabSize), f = this.showTabs ? " ace_invisible ace_invisible_tab" : "", c = this.showTabs ? $.stringRepeat(this.TAB_CHAR, this.tabSize) : b, h = this.dom.createElement("span");
            h.className = u + S, h.textContent = b, this.$tabStrings[" "] = h;
            var h = this.dom.createElement("span");
            h.className = u + f, h.textContent = c, this.$tabStrings["	"] = h;
          }
        }, n.prototype.updateLines = function(e, t, s) {
          if (this.config.lastRow != e.lastRow || this.config.firstRow != e.firstRow) return this.update(e);
          this.config = e;
          for (var h = Math.max(t, e.firstRow), u = Math.min(s, e.lastRow), S = this.element.childNodes, b = 0, c = e.firstRow; c < h; c++) {
            var w = this.session.getFoldLine(c);
            if (w) if (w.containsRow(h)) {
              h = w.start.row;
              break;
            } else c = w.end.row;
            b++;
          }
          for (var f = false, c = h, w = this.session.getNextFoldLine(c), C = w ? w.start.row : 1 / 0; c > C && (c = w.end.row + 1, w = this.session.getNextFoldLine(c, w), C = w ? w.start.row : 1 / 0), !(c > u); ) {
            var p = S[b++];
            if (p) {
              this.dom.removeChildren(p), this.$renderLine(p, c, c == C ? w : false), f && (p.style.top = this.$lines.computeLineTop(c, e, this.session) + "px");
              var v = e.lineHeight * this.session.getRowLength(c) + "px";
              p.style.height != v && (f = true, p.style.height = v);
            }
            c++;
          }
          if (f) for (; b < this.$lines.cells.length; ) {
            var k = this.$lines.cells[b++];
            k.element.style.top = this.$lines.computeLineTop(k.row, e, this.session) + "px";
          }
        }, n.prototype.scrollLines = function(e) {
          var t = this.config;
          if (this.config = e, this.$lines.pageChanged(t, e)) return this.update(e);
          this.$lines.moveContainer(e);
          var s = e.lastRow, h = t ? t.lastRow : -1;
          if (!t || h < e.firstRow) return this.update(e);
          if (s < t.firstRow) return this.update(e);
          if (!t || t.lastRow < e.firstRow) return this.update(e);
          if (e.lastRow < t.firstRow) return this.update(e);
          if (t.firstRow < e.firstRow) for (var u = this.session.getFoldedRowCount(t.firstRow, e.firstRow - 1); u > 0; u--) this.$lines.shift();
          if (t.lastRow > e.lastRow) for (var u = this.session.getFoldedRowCount(e.lastRow + 1, t.lastRow); u > 0; u--) this.$lines.pop();
          e.firstRow < t.firstRow && this.$lines.unshift(this.$renderLinesFragment(e, e.firstRow, t.firstRow - 1)), e.lastRow > t.lastRow && this.$lines.push(this.$renderLinesFragment(e, t.lastRow + 1, e.lastRow)), this.$highlightIndentGuide();
        }, n.prototype.$renderLinesFragment = function(e, t, s) {
          for (var h = [], u = t, S = this.session.getNextFoldLine(u), b = S ? S.start.row : 1 / 0; u > b && (u = S.end.row + 1, S = this.session.getNextFoldLine(u, S), b = S ? S.start.row : 1 / 0), !(u > s); ) {
            var f = this.$lines.createCell(u, e, this.session), c = f.element;
            this.dom.removeChildren(c), M.setStyle(c.style, "height", this.$lines.computeLineHeight(u, e, this.session) + "px"), M.setStyle(c.style, "top", this.$lines.computeLineTop(u, e, this.session) + "px"), this.$renderLine(c, u, u == b ? S : false), this.$useLineGroups() ? c.className = "ace_line_group" : c.className = "ace_line", h.push(f), u++;
          }
          return h;
        }, n.prototype.update = function(e) {
          this.$lines.moveContainer(e), this.config = e;
          for (var t = e.firstRow, s = e.lastRow, h = this.$lines; h.getLength(); ) h.pop();
          h.push(this.$renderLinesFragment(e, t, s));
        }, n.prototype.$renderToken = function(e, t, s, h) {
          for (var u = this, S = /(\t)|( +)|([\x00-\x1f\x80-\xa0\xad\u1680\u180E\u2000-\u200f\u2028\u2029\u202F\u205F\uFEFF\uFFF9-\uFFFC\u2066\u2067\u2068\u202A\u202B\u202D\u202E\u202C\u2069\u2060\u2061\u2062\u2063\u2064\u206A\u206B\u206B\u206C\u206D\u206E\u206F]+)|(\u3000)|([\u1100-\u115F\u11A3-\u11A7\u11FA-\u11FF\u2329-\u232A\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFB\u3001-\u303E\u3041-\u3096\u3099-\u30FF\u3105-\u312D\u3131-\u318E\u3190-\u31BA\u31C0-\u31E3\u31F0-\u321E\u3220-\u3247\u3250-\u32FE\u3300-\u4DBF\u4E00-\uA48C\uA490-\uA4C6\uA960-\uA97C\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFAFF\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE66\uFE68-\uFE6B\uFF01-\uFF60\uFFE0-\uFFE6]|[\uD800-\uDBFF][\uDC00-\uDFFF])/g, b = this.dom.createFragment(this.element), f, c = 0; f = S.exec(h); ) {
            var w = f[1], C = f[2], p = f[3], v = f[4], k = f[5];
            if (!(!u.showSpaces && C)) {
              var m = c != f.index ? h.slice(c, f.index) : "";
              if (c = f.index + f[0].length, m && b.appendChild(this.dom.createTextNode(m, this.element)), w) {
                var y = u.session.getScreenTabSize(t + f.index), g = u.$tabStrings[y].cloneNode(true);
                g.charCount = 1, b.appendChild(g), t += y - 1;
              } else if (C) if (u.showSpaces) {
                var d = this.dom.createElement("span");
                d.className = "ace_invisible ace_invisible_space", d.textContent = $.stringRepeat(u.SPACE_CHAR, C.length), b.appendChild(d);
              } else b.appendChild(this.dom.createTextNode(C, this.element));
              else if (p) {
                var d = this.dom.createElement("span");
                d.className = "ace_invisible ace_invisible_space ace_invalid", d.textContent = $.stringRepeat(u.SPACE_CHAR, p.length), b.appendChild(d);
              } else if (v) {
                t += 1;
                var d = this.dom.createElement("span");
                d.style.width = u.config.characterWidth * 2 + "px", d.className = u.showSpaces ? "ace_cjk ace_invisible ace_invisible_space" : "ace_cjk", d.textContent = u.showSpaces ? u.SPACE_CHAR : v, b.appendChild(d);
              } else if (k) {
                t += 1;
                var d = this.dom.createElement("span");
                d.style.width = u.config.characterWidth * 2 + "px", d.className = "ace_cjk", d.textContent = k, b.appendChild(d);
              }
            }
          }
          if (b.appendChild(this.dom.createTextNode(c ? h.slice(c) : h, this.element)), o(s.type)) e.appendChild(b);
          else {
            var x = "ace_" + s.type.replace(/\./g, " ace_"), d = this.dom.createElement("span");
            s.type == "fold" && (d.style.width = s.value.length * this.config.characterWidth + "px", d.setAttribute("title", i("inline-fold.closed.title", "Unfold code"))), d.className = x, d.appendChild(b), e.appendChild(d);
          }
          return t + h.length;
        }, n.prototype.renderIndentGuide = function(e, t, s) {
          var h = t.search(this.$indentGuideRe);
          if (h <= 0 || h >= s) return t;
          if (t[0] == " ") {
            h -= h % this.tabSize;
            for (var u = h / this.tabSize, S = 0; S < u; S++) e.appendChild(this.$tabStrings[" "].cloneNode(true));
            return this.$highlightIndentGuide(), t.substr(h);
          } else if (t[0] == "	") {
            for (var S = 0; S < h; S++) {
              var b = this.$tabStrings["	"].cloneNode(true);
              b.charCount = 1, e.appendChild(b);
            }
            return this.$highlightIndentGuide(), t.substr(h);
          }
          return this.$highlightIndentGuide(), t;
        }, n.prototype.$highlightIndentGuide = function() {
          if (!(!this.$highlightIndentGuides || !this.displayIndentGuides)) {
            this.$highlightIndentGuideMarker = {
              indentLevel: void 0,
              start: void 0,
              end: void 0,
              dir: void 0
            };
            var e = this.session.doc.$lines;
            if (e) {
              var t = this.session.selection.getCursor(), s = /^\s*/.exec(this.session.doc.getLine(t.row))[0].length, h = Math.floor(s / this.tabSize);
              this.$highlightIndentGuideMarker = {
                indentLevel: h,
                start: t.row
              };
              var u = this.session.$bracketHighlight;
              if (u) {
                for (var S = this.session.$bracketHighlight.ranges, b = 0; b < S.length; b++) if (t.row !== S[b].start.row) {
                  this.$highlightIndentGuideMarker.end = S[b].start.row + 1, t.row > S[b].start.row ? this.$highlightIndentGuideMarker.dir = -1 : this.$highlightIndentGuideMarker.dir = 1;
                  break;
                }
              }
              if (!this.$highlightIndentGuideMarker.end && e[t.row] !== "" && t.column === e[t.row].length) {
                this.$highlightIndentGuideMarker.dir = 1;
                for (var b = t.row + 1; b < e.length; b++) {
                  var f = e[b], c = /^\s*/.exec(f)[0].length;
                  if (f !== "" && (this.$highlightIndentGuideMarker.end = b, c <= s)) break;
                }
              }
              this.$renderHighlightIndentGuide();
            }
          }
        }, n.prototype.$clearActiveIndentGuide = function() {
          for (var e = this.element.querySelectorAll(".ace_indent-guide-active"), t = 0; t < e.length; t++) e[t].classList.remove("ace_indent-guide-active");
        }, n.prototype.$setIndentGuideActive = function(e, t) {
          var s = this.session.doc.getLine(e.row);
          if (s !== "") {
            var h = e.element;
            if (e.element.classList && e.element.classList.contains("ace_line_group")) if (e.element.childNodes.length > 0) h = e.element.childNodes[0];
            else return;
            var u = h.childNodes;
            if (u) {
              var S = u[t - 1];
              S && S.classList && S.classList.contains("ace_indent-guide") && S.classList.add("ace_indent-guide-active");
            }
          }
        }, n.prototype.$renderHighlightIndentGuide = function() {
          if (this.$lines) {
            var e = this.$lines.cells;
            this.$clearActiveIndentGuide();
            var t = this.$highlightIndentGuideMarker.indentLevel;
            if (t !== 0) if (this.$highlightIndentGuideMarker.dir === 1) for (var s = 0; s < e.length; s++) {
              var h = e[s];
              if (this.$highlightIndentGuideMarker.end && h.row >= this.$highlightIndentGuideMarker.start + 1) {
                if (h.row >= this.$highlightIndentGuideMarker.end) break;
                this.$setIndentGuideActive(h, t);
              }
            }
            else for (var s = e.length - 1; s >= 0; s--) {
              var h = e[s];
              if (this.$highlightIndentGuideMarker.end && h.row < this.$highlightIndentGuideMarker.start) {
                if (h.row < this.$highlightIndentGuideMarker.end) break;
                this.$setIndentGuideActive(h, t);
              }
            }
          }
        }, n.prototype.$createLineElement = function(e) {
          var t = this.dom.createElement("div");
          return t.className = "ace_line", t.style.height = this.config.lineHeight + "px", t;
        }, n.prototype.$renderWrappedLine = function(e, t, s) {
          var h = 0, u = 0, S = s[0], b = 0, f = this.$createLineElement();
          e.appendChild(f);
          for (var c = 0; c < t.length; c++) {
            var w = t[c], C = w.value;
            if (c == 0 && this.displayIndentGuides) {
              if (h = C.length, C = this.renderIndentGuide(f, C, S), !C) continue;
              h -= C.length;
            }
            if (h + C.length < S) b = this.$renderToken(f, b, w, C), h += C.length;
            else {
              for (; h + C.length >= S; ) {
                b = this.$renderToken(f, b, w, C.substring(0, S - h)), C = C.substring(S - h), h = S, f = this.$createLineElement(), e.appendChild(f);
                var p = this.dom.createTextNode($.stringRepeat("\xA0", s.indent), this.element);
                p.charCount = 0, f.appendChild(p), u++, b = 0, S = s[u] || Number.MAX_VALUE;
              }
              C.length != 0 && (h += C.length, b = this.$renderToken(f, b, w, C));
            }
          }
          s[s.length - 1] > this.MAX_LINE_LENGTH && this.$renderOverflowMessage(f, b, null, "", true);
        }, n.prototype.$renderSimpleLine = function(e, t) {
          for (var s = 0, h = 0; h < t.length; h++) {
            var u = t[h], S = u.value;
            if (!(h == 0 && this.displayIndentGuides && (S = this.renderIndentGuide(e, S), !S))) {
              if (s + S.length > this.MAX_LINE_LENGTH) return this.$renderOverflowMessage(e, s, u, S);
              s = this.$renderToken(e, s, u, S);
            }
          }
        }, n.prototype.$renderOverflowMessage = function(e, t, s, h, u) {
          s && this.$renderToken(e, t, s, h.slice(0, this.MAX_LINE_LENGTH - t));
          var S = this.dom.createElement("span");
          S.className = "ace_inline_button ace_keyword ace_toggle_wrap", S.textContent = u ? "<hide>" : "<click to see more...>", e.appendChild(S);
        }, n.prototype.$renderLine = function(e, t, s) {
          if (!s && s != false && (s = this.session.getFoldLine(t)), s) var h = this.$getFoldLineTokens(t, s);
          else var h = this.session.getTokens(t);
          var u = e;
          if (h.length) {
            var S = this.session.getRowSplitData(t);
            if (S && S.length) {
              this.$renderWrappedLine(e, h, S);
              var u = e.lastChild;
            } else {
              var u = e;
              this.$useLineGroups() && (u = this.$createLineElement(), e.appendChild(u)), this.$renderSimpleLine(u, h);
            }
          } else this.$useLineGroups() && (u = this.$createLineElement(), e.appendChild(u));
          if (this.showEOL && u) {
            s && (t = s.end.row);
            var b = this.dom.createElement("span");
            b.className = "ace_invisible ace_invisible_eol", b.textContent = t == this.session.getLength() - 1 ? this.EOF_CHAR : this.EOL_CHAR, u.appendChild(b);
          }
        }, n.prototype.$getFoldLineTokens = function(e, t) {
          var s = this.session, h = [];
          function u(b, f, c) {
            for (var w = 0, C = 0; C + b[w].value.length < f; ) if (C += b[w].value.length, w++, w == b.length) return;
            if (C != f) {
              var p = b[w].value.substring(f - C);
              p.length > c - f && (p = p.substring(0, c - f)), h.push({
                type: b[w].type,
                value: p
              }), C = f + p.length, w += 1;
            }
            for (; C < c && w < b.length; ) {
              var p = b[w].value;
              p.length + C > c ? h.push({
                type: b[w].type,
                value: p.substring(0, c - C)
              }) : h.push(b[w]), C += p.length, w += 1;
            }
          }
          var S = s.getTokens(e);
          return t.walk(function(b, f, c, w, C) {
            b != null ? h.push({
              type: "fold",
              value: b
            }) : (C && (S = s.getTokens(f)), S.length && u(S, w, c));
          }, t.end.row, this.session.getLine(t.end.row).length), h;
        }, n.prototype.$useLineGroups = function() {
          return this.session.getUseWrapMode();
        }, n;
      })();
      r.prototype.EOF_CHAR = "\xB6", r.prototype.EOL_CHAR_LF = "\xAC", r.prototype.EOL_CHAR_CRLF = "\xA4", r.prototype.EOL_CHAR = r.prototype.EOL_CHAR_LF, r.prototype.TAB_CHAR = "\u2014", r.prototype.SPACE_CHAR = "\xB7", r.prototype.$padding = 0, r.prototype.MAX_LINE_LENGTH = 1e4, r.prototype.showInvisibles = false, r.prototype.showSpaces = false, r.prototype.showTabs = false, r.prototype.showEOL = false, r.prototype.displayIndentGuides = true, r.prototype.$highlightIndentGuides = true, r.prototype.$tabStrings = [], r.prototype.destroy = {}, r.prototype.onChangeTabSize = r.prototype.$computeTabString, L.implement(r.prototype, l), _.Text = r;
    }), ace.define("ace/layer/cursor", [
      "require",
      "exports",
      "module",
      "ace/lib/dom"
    ], function(A, _, N) {
      var L = A("../lib/dom"), M = (function() {
        function $(a) {
          this.element = L.createElement("div"), this.element.className = "ace_layer ace_cursor-layer", a.appendChild(this.element), this.isVisible = false, this.isBlinking = true, this.blinkInterval = 1e3, this.smoothBlinking = false, this.cursors = [], this.cursor = this.addCursor(), L.addCssClass(this.element, "ace_hidden-cursors"), this.$updateCursors = this.$updateOpacity.bind(this);
        }
        return $.prototype.$updateOpacity = function(a) {
          for (var l = this.cursors, i = l.length; i--; ) L.setStyle(l[i].style, "opacity", a ? "" : "0");
        }, $.prototype.$startCssAnimation = function() {
          for (var a = this.cursors, l = a.length; l--; ) a[l].style.animationDuration = this.blinkInterval + "ms";
          this.$isAnimating = true, setTimeout(function() {
            this.$isAnimating && L.addCssClass(this.element, "ace_animate-blinking");
          }.bind(this));
        }, $.prototype.$stopCssAnimation = function() {
          this.$isAnimating = false, L.removeCssClass(this.element, "ace_animate-blinking");
        }, $.prototype.setPadding = function(a) {
          this.$padding = a;
        }, $.prototype.setSession = function(a) {
          this.session = a;
        }, $.prototype.setBlinking = function(a) {
          a != this.isBlinking && (this.isBlinking = a, this.restartTimer());
        }, $.prototype.setBlinkInterval = function(a) {
          a != this.blinkInterval && (this.blinkInterval = a, this.restartTimer());
        }, $.prototype.setSmoothBlinking = function(a) {
          a != this.smoothBlinking && (this.smoothBlinking = a, L.setCssClass(this.element, "ace_smooth-blinking", a), this.$updateCursors(true), this.restartTimer());
        }, $.prototype.addCursor = function() {
          var a = L.createElement("div");
          return a.className = "ace_cursor", this.element.appendChild(a), this.cursors.push(a), a;
        }, $.prototype.removeCursor = function() {
          if (this.cursors.length > 1) {
            var a = this.cursors.pop();
            return a.parentNode.removeChild(a), a;
          }
        }, $.prototype.hideCursor = function() {
          this.isVisible = false, L.addCssClass(this.element, "ace_hidden-cursors"), this.restartTimer();
        }, $.prototype.showCursor = function() {
          this.isVisible = true, L.removeCssClass(this.element, "ace_hidden-cursors"), this.restartTimer();
        }, $.prototype.restartTimer = function() {
          var a = this.$updateCursors;
          if (clearInterval(this.intervalId), clearTimeout(this.timeoutId), this.$stopCssAnimation(), this.smoothBlinking && (this.$isSmoothBlinking = false, L.removeCssClass(this.element, "ace_smooth-blinking")), a(true), !this.isBlinking || !this.blinkInterval || !this.isVisible) {
            this.$stopCssAnimation();
            return;
          }
          if (this.smoothBlinking && (this.$isSmoothBlinking = true, setTimeout(function() {
            this.$isSmoothBlinking && L.addCssClass(this.element, "ace_smooth-blinking");
          }.bind(this))), L.HAS_CSS_ANIMATION) this.$startCssAnimation();
          else {
            var l = function() {
              this.timeoutId = setTimeout(function() {
                a(false);
              }, 0.6 * this.blinkInterval);
            }.bind(this);
            this.intervalId = setInterval(function() {
              a(true), l();
            }, this.blinkInterval), l();
          }
        }, $.prototype.getPixelPosition = function(a, l) {
          if (!this.config || !this.session) return {
            left: 0,
            top: 0
          };
          a || (a = this.session.selection.getCursor());
          var i = this.session.documentToScreenPosition(a), o = this.$padding + (this.session.$bidiHandler.isBidiRow(i.row, a.row) ? this.session.$bidiHandler.getPosLeft(i.column) : i.column * this.config.characterWidth), r = (i.row - (l ? this.config.firstRowScreen : 0)) * this.config.lineHeight;
          return {
            left: o,
            top: r
          };
        }, $.prototype.isCursorInView = function(a, l) {
          return a.top >= 0 && a.top < l.maxHeight;
        }, $.prototype.update = function(a) {
          this.config = a;
          var l = this.session.$selectionMarkers, i = 0, o = 0;
          (l === void 0 || l.length === 0) && (l = [
            {
              cursor: null
            }
          ]);
          for (var i = 0, r = l.length; i < r; i++) {
            var n = this.getPixelPosition(l[i].cursor, true);
            if (!((n.top > a.height + a.offset || n.top < 0) && i > 1)) {
              var e = this.cursors[o++] || this.addCursor(), t = e.style;
              this.drawCursor ? this.drawCursor(e, n, a, l[i], this.session) : this.isCursorInView(n, a) ? (L.setStyle(t, "display", "block"), L.translate(e, n.left, n.top), L.setStyle(t, "width", Math.round(a.characterWidth) + "px"), L.setStyle(t, "height", a.lineHeight + "px")) : L.setStyle(t, "display", "none");
            }
          }
          for (; this.cursors.length > o; ) this.removeCursor();
          var s = this.session.getOverwrite();
          this.$setOverwrite(s), this.$pixelPos = n, this.restartTimer();
        }, $.prototype.$setOverwrite = function(a) {
          a != this.overwrite && (this.overwrite = a, a ? L.addCssClass(this.element, "ace_overwrite-cursors") : L.removeCssClass(this.element, "ace_overwrite-cursors"));
        }, $.prototype.destroy = function() {
          clearInterval(this.intervalId), clearTimeout(this.timeoutId);
        }, $;
      })();
      M.prototype.$padding = 0, M.prototype.drawCursor = null, _.Cursor = M;
    }), ace.define("ace/scrollbar", [
      "require",
      "exports",
      "module",
      "ace/lib/oop",
      "ace/lib/dom",
      "ace/lib/event",
      "ace/lib/event_emitter"
    ], function(A, _, N) {
      var L = this && this.__extends || /* @__PURE__ */ (function() {
        var e = function(t, s) {
          return e = Object.setPrototypeOf || {
            __proto__: []
          } instanceof Array && function(h, u) {
            h.__proto__ = u;
          } || function(h, u) {
            for (var S in u) Object.prototype.hasOwnProperty.call(u, S) && (h[S] = u[S]);
          }, e(t, s);
        };
        return function(t, s) {
          if (typeof s != "function" && s !== null) throw new TypeError("Class extends value " + String(s) + " is not a constructor or null");
          e(t, s);
          function h() {
            this.constructor = t;
          }
          t.prototype = s === null ? Object.create(s) : (h.prototype = s.prototype, new h());
        };
      })(), M = A("./lib/oop"), $ = A("./lib/dom"), a = A("./lib/event"), l = A("./lib/event_emitter").EventEmitter, i = 32768, o = (function() {
        function e(t, s) {
          this.element = $.createElement("div"), this.element.className = "ace_scrollbar ace_scrollbar" + s, this.element.tabIndex = -1, this.inner = $.createElement("div"), this.inner.className = "ace_scrollbar-inner", this.inner.textContent = "\xA0", this.element.appendChild(this.inner), t.appendChild(this.element), this.setVisible(false), this.skipEvent = false, a.addListener(this.element, "scroll", this.onScroll.bind(this)), a.addListener(this.element, "mousedown", a.preventDefault);
        }
        return e.prototype.setVisible = function(t) {
          this.element.style.display = t ? "" : "none", this.isVisible = t, this.coeff = 1;
        }, e;
      })();
      M.implement(o.prototype, l);
      var r = (function(e) {
        L(t, e);
        function t(s, h) {
          var u = e.call(this, s, "-v") || this;
          return u.scrollTop = 0, u.scrollHeight = 0, h.$scrollbarWidth = u.width = $.scrollbarWidth(s.ownerDocument), u.inner.style.width = u.element.style.width = (u.width || 15) + 5 + "px", u.$minWidth = 0, u;
        }
        return t.prototype.onScroll = function() {
          if (!this.skipEvent) {
            if (this.scrollTop = this.element.scrollTop, this.coeff != 1) {
              var s = this.element.clientHeight / this.scrollHeight;
              this.scrollTop = this.scrollTop * (1 - s) / (this.coeff - s);
            }
            this._emit("scroll", {
              data: this.scrollTop
            });
          }
          this.skipEvent = false;
        }, t.prototype.getWidth = function() {
          return Math.max(this.isVisible ? this.width : 0, this.$minWidth || 0);
        }, t.prototype.setHeight = function(s) {
          this.element.style.height = s + "px";
        }, t.prototype.setScrollHeight = function(s) {
          this.scrollHeight = s, s > i ? (this.coeff = i / s, s = i) : this.coeff != 1 && (this.coeff = 1), this.inner.style.height = s + "px";
        }, t.prototype.setScrollTop = function(s) {
          this.scrollTop != s && (this.skipEvent = true, this.scrollTop = s, this.element.scrollTop = s * this.coeff);
        }, t;
      })(o);
      r.prototype.setInnerHeight = r.prototype.setScrollHeight;
      var n = (function(e) {
        L(t, e);
        function t(s, h) {
          var u = e.call(this, s, "-h") || this;
          return u.scrollLeft = 0, u.height = h.$scrollbarWidth, u.inner.style.height = u.element.style.height = (u.height || 15) + 5 + "px", u;
        }
        return t.prototype.onScroll = function() {
          this.skipEvent || (this.scrollLeft = this.element.scrollLeft, this._emit("scroll", {
            data: this.scrollLeft
          })), this.skipEvent = false;
        }, t.prototype.getHeight = function() {
          return this.isVisible ? this.height : 0;
        }, t.prototype.setWidth = function(s) {
          this.element.style.width = s + "px";
        }, t.prototype.setInnerWidth = function(s) {
          this.inner.style.width = s + "px";
        }, t.prototype.setScrollWidth = function(s) {
          this.inner.style.width = s + "px";
        }, t.prototype.setScrollLeft = function(s) {
          this.scrollLeft != s && (this.skipEvent = true, this.scrollLeft = this.element.scrollLeft = s);
        }, t;
      })(o);
      _.ScrollBar = r, _.ScrollBarV = r, _.ScrollBarH = n, _.VScrollBar = r, _.HScrollBar = n;
    }), ace.define("ace/scrollbar_custom", [
      "require",
      "exports",
      "module",
      "ace/lib/oop",
      "ace/lib/dom",
      "ace/lib/event",
      "ace/lib/event_emitter"
    ], function(A, _, N) {
      var L = this && this.__extends || /* @__PURE__ */ (function() {
        var n = function(e, t) {
          return n = Object.setPrototypeOf || {
            __proto__: []
          } instanceof Array && function(s, h) {
            s.__proto__ = h;
          } || function(s, h) {
            for (var u in h) Object.prototype.hasOwnProperty.call(h, u) && (s[u] = h[u]);
          }, n(e, t);
        };
        return function(e, t) {
          if (typeof t != "function" && t !== null) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
          n(e, t);
          function s() {
            this.constructor = e;
          }
          e.prototype = t === null ? Object.create(t) : (s.prototype = t.prototype, new s());
        };
      })(), M = A("./lib/oop"), $ = A("./lib/dom"), a = A("./lib/event"), l = A("./lib/event_emitter").EventEmitter;
      $.importCssString(`.ace_editor>.ace_sb-v div, .ace_editor>.ace_sb-h div{
  position: absolute;
  background: rgba(128, 128, 128, 0.6);
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  border: 1px solid #bbb;
  border-radius: 2px;
  z-index: 8;
}
.ace_editor>.ace_sb-v, .ace_editor>.ace_sb-h {
  position: absolute;
  z-index: 6;
  background: none;
  overflow: hidden!important;
}
.ace_editor>.ace_sb-v {
  z-index: 6;
  right: 0;
  top: 0;
  width: 12px;
}
.ace_editor>.ace_sb-v div {
  z-index: 8;
  right: 0;
  width: 100%;
}
.ace_editor>.ace_sb-h {
  bottom: 0;
  left: 0;
  height: 12px;
}
.ace_editor>.ace_sb-h div {
  bottom: 0;
  height: 100%;
}
.ace_editor>.ace_sb_grabbed {
  z-index: 8;
  background: #000;
}`, "ace_scrollbar.css", false);
      var i = (function() {
        function n(e, t) {
          this.element = $.createElement("div"), this.element.className = "ace_sb" + t, this.inner = $.createElement("div"), this.inner.className = "", this.element.appendChild(this.inner), this.VScrollWidth = 12, this.HScrollHeight = 12, e.appendChild(this.element), this.setVisible(false), this.skipEvent = false, a.addMultiMouseDownListener(this.element, [
            500,
            300,
            300
          ], this, "onMouseDown");
        }
        return n.prototype.setVisible = function(e) {
          this.element.style.display = e ? "" : "none", this.isVisible = e, this.coeff = 1;
        }, n;
      })();
      M.implement(i.prototype, l);
      var o = (function(n) {
        L(e, n);
        function e(t, s) {
          var h = n.call(this, t, "-v") || this;
          return h.scrollTop = 0, h.scrollHeight = 0, h.parent = t, h.width = h.VScrollWidth, h.renderer = s, h.inner.style.width = h.element.style.width = (h.width || 15) + "px", h.$minWidth = 0, h;
        }
        return e.prototype.onMouseDown = function(t, s) {
          if (t === "mousedown" && !(a.getButton(s) !== 0 || s.detail === 2)) {
            if (s.target === this.inner) {
              var h = this, u = s.clientY, S = function(v) {
                u = v.clientY;
              }, b = function() {
                clearInterval(C);
              }, f = s.clientY, c = this.thumbTop, w = function() {
                if (u !== void 0) {
                  var v = h.scrollTopFromThumbTop(c + u - f);
                  v !== h.scrollTop && h._emit("scroll", {
                    data: v
                  });
                }
              };
              a.capture(this.inner, S, b);
              var C = setInterval(w, 20);
              return a.preventDefault(s);
            }
            var p = s.clientY - this.element.getBoundingClientRect().top - this.thumbHeight / 2;
            return this._emit("scroll", {
              data: this.scrollTopFromThumbTop(p)
            }), a.preventDefault(s);
          }
        }, e.prototype.getHeight = function() {
          return this.height;
        }, e.prototype.scrollTopFromThumbTop = function(t) {
          var s = t * (this.pageHeight - this.viewHeight) / (this.slideHeight - this.thumbHeight);
          return s = s >> 0, s < 0 ? s = 0 : s > this.pageHeight - this.viewHeight && (s = this.pageHeight - this.viewHeight), s;
        }, e.prototype.getWidth = function() {
          return Math.max(this.isVisible ? this.width : 0, this.$minWidth || 0);
        }, e.prototype.setHeight = function(t) {
          this.height = Math.max(0, t), this.slideHeight = this.height, this.viewHeight = this.height, this.setScrollHeight(this.pageHeight, true);
        }, e.prototype.setScrollHeight = function(t, s) {
          this.pageHeight === t && !s || (this.pageHeight = t, this.thumbHeight = this.slideHeight * this.viewHeight / this.pageHeight, this.thumbHeight > this.slideHeight && (this.thumbHeight = this.slideHeight), this.thumbHeight < 15 && (this.thumbHeight = 15), this.inner.style.height = this.thumbHeight + "px", this.scrollTop > this.pageHeight - this.viewHeight && (this.scrollTop = this.pageHeight - this.viewHeight, this.scrollTop < 0 && (this.scrollTop = 0), this._emit("scroll", {
            data: this.scrollTop
          })));
        }, e.prototype.setScrollTop = function(t) {
          this.scrollTop = t, t < 0 && (t = 0), this.thumbTop = t * (this.slideHeight - this.thumbHeight) / (this.pageHeight - this.viewHeight), this.inner.style.top = this.thumbTop + "px";
        }, e;
      })(i);
      o.prototype.setInnerHeight = o.prototype.setScrollHeight;
      var r = (function(n) {
        L(e, n);
        function e(t, s) {
          var h = n.call(this, t, "-h") || this;
          return h.scrollLeft = 0, h.scrollWidth = 0, h.height = h.HScrollHeight, h.inner.style.height = h.element.style.height = (h.height || 12) + "px", h.renderer = s, h;
        }
        return e.prototype.onMouseDown = function(t, s) {
          if (t === "mousedown" && !(a.getButton(s) !== 0 || s.detail === 2)) {
            if (s.target === this.inner) {
              var h = this, u = s.clientX, S = function(v) {
                u = v.clientX;
              }, b = function() {
                clearInterval(C);
              }, f = s.clientX, c = this.thumbLeft, w = function() {
                if (u !== void 0) {
                  var v = h.scrollLeftFromThumbLeft(c + u - f);
                  v !== h.scrollLeft && h._emit("scroll", {
                    data: v
                  });
                }
              };
              a.capture(this.inner, S, b);
              var C = setInterval(w, 20);
              return a.preventDefault(s);
            }
            var p = s.clientX - this.element.getBoundingClientRect().left - this.thumbWidth / 2;
            return this._emit("scroll", {
              data: this.scrollLeftFromThumbLeft(p)
            }), a.preventDefault(s);
          }
        }, e.prototype.getHeight = function() {
          return this.isVisible ? this.height : 0;
        }, e.prototype.scrollLeftFromThumbLeft = function(t) {
          var s = t * (this.pageWidth - this.viewWidth) / (this.slideWidth - this.thumbWidth);
          return s = s >> 0, s < 0 ? s = 0 : s > this.pageWidth - this.viewWidth && (s = this.pageWidth - this.viewWidth), s;
        }, e.prototype.setWidth = function(t) {
          this.width = Math.max(0, t), this.element.style.width = this.width + "px", this.slideWidth = this.width, this.viewWidth = this.width, this.setScrollWidth(this.pageWidth, true);
        }, e.prototype.setScrollWidth = function(t, s) {
          this.pageWidth === t && !s || (this.pageWidth = t, this.thumbWidth = this.slideWidth * this.viewWidth / this.pageWidth, this.thumbWidth > this.slideWidth && (this.thumbWidth = this.slideWidth), this.thumbWidth < 15 && (this.thumbWidth = 15), this.inner.style.width = this.thumbWidth + "px", this.scrollLeft > this.pageWidth - this.viewWidth && (this.scrollLeft = this.pageWidth - this.viewWidth, this.scrollLeft < 0 && (this.scrollLeft = 0), this._emit("scroll", {
            data: this.scrollLeft
          })));
        }, e.prototype.setScrollLeft = function(t) {
          this.scrollLeft = t, t < 0 && (t = 0), this.thumbLeft = t * (this.slideWidth - this.thumbWidth) / (this.pageWidth - this.viewWidth), this.inner.style.left = this.thumbLeft + "px";
        }, e;
      })(i);
      r.prototype.setInnerWidth = r.prototype.setScrollWidth, _.ScrollBar = o, _.ScrollBarV = o, _.ScrollBarH = r, _.VScrollBar = o, _.HScrollBar = r;
    }), ace.define("ace/renderloop", [
      "require",
      "exports",
      "module",
      "ace/lib/event"
    ], function(A, _, N) {
      var L = A("./lib/event"), M = (function() {
        function $(a, l) {
          this.onRender = a, this.pending = false, this.changes = 0, this.$recursionLimit = 2, this.window = l || window;
          var i = this;
          this._flush = function(o) {
            i.pending = false;
            var r = i.changes;
            if (r && (L.blockIdle(100), i.changes = 0, i.onRender(r)), i.changes) {
              if (i.$recursionLimit-- < 0) return;
              i.schedule();
            } else i.$recursionLimit = 2;
          };
        }
        return $.prototype.schedule = function(a) {
          this.changes = this.changes | a, this.changes && !this.pending && (L.nextFrame(this._flush), this.pending = true);
        }, $.prototype.clear = function(a) {
          var l = this.changes;
          return this.changes = 0, l;
        }, $;
      })();
      _.RenderLoop = M;
    }), ace.define("ace/layer/font_metrics", [
      "require",
      "exports",
      "module",
      "ace/lib/oop",
      "ace/lib/dom",
      "ace/lib/lang",
      "ace/lib/event",
      "ace/lib/useragent",
      "ace/lib/event_emitter"
    ], function(A, _, N) {
      var L = A("../lib/oop"), M = A("../lib/dom"), $ = A("../lib/lang"), a = A("../lib/event"), l = A("../lib/useragent"), i = A("../lib/event_emitter").EventEmitter, o = 512, r = typeof ResizeObserver == "function", n = 200, e = (function() {
        function t(s) {
          this.el = M.createElement("div"), this.$setMeasureNodeStyles(this.el.style, true), this.$main = M.createElement("div"), this.$setMeasureNodeStyles(this.$main.style), this.$measureNode = M.createElement("div"), this.$setMeasureNodeStyles(this.$measureNode.style), this.el.appendChild(this.$main), this.el.appendChild(this.$measureNode), s.appendChild(this.el), this.$measureNode.textContent = $.stringRepeat("X", o), this.$characterSize = {
            width: 0,
            height: 0
          }, r ? this.$addObserver() : this.checkForSizeChanges();
        }
        return t.prototype.$setMeasureNodeStyles = function(s, h) {
          s.width = s.height = "auto", s.left = s.top = "0px", s.visibility = "hidden", s.position = "absolute", s.whiteSpace = "pre", l.isIE < 8 ? s["font-family"] = "inherit" : s.font = "inherit", s.overflow = h ? "hidden" : "visible";
        }, t.prototype.checkForSizeChanges = function(s) {
          if (s === void 0 && (s = this.$measureSizes()), s && (this.$characterSize.width !== s.width || this.$characterSize.height !== s.height)) {
            this.$measureNode.style.fontWeight = "bold";
            var h = this.$measureSizes();
            this.$measureNode.style.fontWeight = "", this.$characterSize = s, this.charSizes = /* @__PURE__ */ Object.create(null), this.allowBoldFonts = h && h.width === s.width && h.height === s.height, this._emit("changeCharacterSize", {
              data: s
            });
          }
        }, t.prototype.$addObserver = function() {
          var s = this;
          this.$observer = new window.ResizeObserver(function(h) {
            s.checkForSizeChanges();
          }), this.$observer.observe(this.$measureNode);
        }, t.prototype.$pollSizeChanges = function() {
          if (this.$pollSizeChangesTimer || this.$observer) return this.$pollSizeChangesTimer;
          var s = this;
          return this.$pollSizeChangesTimer = a.onIdle(function h() {
            s.checkForSizeChanges(), a.onIdle(h, 500);
          }, 500);
        }, t.prototype.setPolling = function(s) {
          s ? this.$pollSizeChanges() : this.$pollSizeChangesTimer && (clearInterval(this.$pollSizeChangesTimer), this.$pollSizeChangesTimer = 0);
        }, t.prototype.$measureSizes = function(s) {
          var h = {
            height: (s || this.$measureNode).clientHeight,
            width: (s || this.$measureNode).clientWidth / o
          };
          return h.width === 0 || h.height === 0 ? null : h;
        }, t.prototype.$measureCharWidth = function(s) {
          this.$main.textContent = $.stringRepeat(s, o);
          var h = this.$main.getBoundingClientRect();
          return h.width / o;
        }, t.prototype.getCharacterWidth = function(s) {
          var h = this.charSizes[s];
          return h === void 0 && (h = this.charSizes[s] = this.$measureCharWidth(s) / this.$characterSize.width), h;
        }, t.prototype.destroy = function() {
          clearInterval(this.$pollSizeChangesTimer), this.$observer && this.$observer.disconnect(), this.el && this.el.parentNode && this.el.parentNode.removeChild(this.el);
        }, t.prototype.$getZoom = function(s) {
          return !s || !s.parentElement ? 1 : (Number(window.getComputedStyle(s).zoom) || 1) * this.$getZoom(s.parentElement);
        }, t.prototype.$initTransformMeasureNodes = function() {
          var s = function(h, u) {
            return [
              "div",
              {
                style: "position: absolute;top:" + h + "px;left:" + u + "px;"
              }
            ];
          };
          this.els = M.buildDom([
            s(0, 0),
            s(n, 0),
            s(0, n),
            s(n, n)
          ], this.el);
        }, t.prototype.transformCoordinates = function(s, h) {
          if (s) {
            var u = this.$getZoom(this.el);
            s = c(1 / u, s);
          }
          function S(I, O, z) {
            var F = I[1] * O[0] - I[0] * O[1];
            return [
              (-O[1] * z[0] + O[0] * z[1]) / F,
              (+I[1] * z[0] - I[0] * z[1]) / F
            ];
          }
          function b(I, O) {
            return [
              I[0] - O[0],
              I[1] - O[1]
            ];
          }
          function f(I, O) {
            return [
              I[0] + O[0],
              I[1] + O[1]
            ];
          }
          function c(I, O) {
            return [
              I * O[0],
              I * O[1]
            ];
          }
          this.els || this.$initTransformMeasureNodes();
          function w(I) {
            var O = I.getBoundingClientRect();
            return [
              O.left,
              O.top
            ];
          }
          var C = w(this.els[0]), p = w(this.els[1]), v = w(this.els[2]), k = w(this.els[3]), m = S(b(k, p), b(k, v), b(f(p, v), f(k, C))), y = c(1 + m[0], b(p, C)), g = c(1 + m[1], b(v, C));
          if (h) {
            var d = h, x = m[0] * d[0] / n + m[1] * d[1] / n + 1, T = f(c(d[0], y), c(d[1], g));
            return f(c(1 / x / n, T), C);
          }
          var E = b(s, C), R = S(b(y, c(m[0], E)), b(g, c(m[1], E)), E);
          return c(n, R);
        }, t;
      })();
      e.prototype.$characterSize = {
        width: 0,
        height: 0
      }, L.implement(e.prototype, i), _.FontMetrics = e;
    }), ace.define("ace/css/editor-css", [
      "require",
      "exports",
      "module"
    ], function(A, _, N) {
      N.exports = `
.ace_br1 {border-top-left-radius    : 3px;}
.ace_br2 {border-top-right-radius   : 3px;}
.ace_br3 {border-top-left-radius    : 3px; border-top-right-radius:    3px;}
.ace_br4 {border-bottom-right-radius: 3px;}
.ace_br5 {border-top-left-radius    : 3px; border-bottom-right-radius: 3px;}
.ace_br6 {border-top-right-radius   : 3px; border-bottom-right-radius: 3px;}
.ace_br7 {border-top-left-radius    : 3px; border-top-right-radius:    3px; border-bottom-right-radius: 3px;}
.ace_br8 {border-bottom-left-radius : 3px;}
.ace_br9 {border-top-left-radius    : 3px; border-bottom-left-radius:  3px;}
.ace_br10{border-top-right-radius   : 3px; border-bottom-left-radius:  3px;}
.ace_br11{border-top-left-radius    : 3px; border-top-right-radius:    3px; border-bottom-left-radius:  3px;}
.ace_br12{border-bottom-right-radius: 3px; border-bottom-left-radius:  3px;}
.ace_br13{border-top-left-radius    : 3px; border-bottom-right-radius: 3px; border-bottom-left-radius:  3px;}
.ace_br14{border-top-right-radius   : 3px; border-bottom-right-radius: 3px; border-bottom-left-radius:  3px;}
.ace_br15{border-top-left-radius    : 3px; border-top-right-radius:    3px; border-bottom-right-radius: 3px; border-bottom-left-radius: 3px;}


.ace_editor {
    position: relative;
    overflow: hidden;
    padding: 0;
    font: 12px/normal 'Monaco', 'Menlo', 'Ubuntu Mono', 'Consolas', 'Source Code Pro', 'source-code-pro', monospace;
    direction: ltr;
    text-align: left;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    forced-color-adjust: none;
}

.ace_scroller {
    position: absolute;
    overflow: hidden;
    top: 0;
    bottom: 0;
    background-color: inherit;
    -ms-user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    user-select: none;
    cursor: text;
}

.ace_content {
    position: absolute;
    box-sizing: border-box;
    min-width: 100%;
    contain: style size layout;
    font-variant-ligatures: no-common-ligatures;
}
.ace_invisible {
    font-variant-ligatures: none;
}

.ace_keyboard-focus:focus {
    box-shadow: inset 0 0 0 2px #5E9ED6;
    outline: none;
}

.ace_dragging .ace_scroller:before{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    content: '';
    background: rgba(250, 250, 250, 0.01);
    z-index: 1000;
}
.ace_dragging.ace_dark .ace_scroller:before{
    background: rgba(0, 0, 0, 0.01);
}

.ace_gutter {
    position: absolute;
    overflow : hidden;
    width: auto;
    top: 0;
    bottom: 0;
    left: 0;
    cursor: default;
    z-index: 4;
    -ms-user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    user-select: none;
    contain: style size layout;
}

.ace_gutter-active-line {
    position: absolute;
    left: 0;
    right: 0;
}

.ace_scroller.ace_scroll-left:after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    box-shadow: 17px 0 16px -16px rgba(0, 0, 0, 0.4) inset;
    pointer-events: none;
}

.ace_gutter-cell, .ace_gutter-cell_svg-icons {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    padding-left: 19px;
    padding-right: 6px;
    background-repeat: no-repeat;
}

.ace_gutter-cell_svg-icons .ace_gutter_annotation {
    margin-left: -14px;
    float: left;
}

.ace_gutter-cell .ace_gutter_annotation {
    margin-left: -19px;
    float: left;
}

.ace_gutter-cell.ace_error, .ace_icon.ace_error, .ace_icon.ace_error_fold, .ace_gutter-cell.ace_security, .ace_icon.ace_security, .ace_icon.ace_security_fold {
    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAABOFBMVEX/////////QRswFAb/Ui4wFAYwFAYwFAaWGAfDRymzOSH/PxswFAb/SiUwFAYwFAbUPRvjQiDllog5HhHdRybsTi3/Tyv9Tir+Syj/UC3////XurebMBIwFAb/RSHbPx/gUzfdwL3kzMivKBAwFAbbvbnhPx66NhowFAYwFAaZJg8wFAaxKBDZurf/RB6mMxb/SCMwFAYwFAbxQB3+RB4wFAb/Qhy4Oh+4QifbNRcwFAYwFAYwFAb/QRzdNhgwFAYwFAbav7v/Uy7oaE68MBK5LxLewr/r2NXewLswFAaxJw4wFAbkPRy2PyYwFAaxKhLm1tMwFAazPiQwFAaUGAb/QBrfOx3bvrv/VC/maE4wFAbRPBq6MRO8Qynew8Dp2tjfwb0wFAbx6eju5+by6uns4uH9/f36+vr/GkHjAAAAYnRSTlMAGt+64rnWu/bo8eAA4InH3+DwoN7j4eLi4xP99Nfg4+b+/u9B/eDs1MD1mO7+4PHg2MXa347g7vDizMLN4eG+Pv7i5evs/v79yu7S3/DV7/498Yv24eH+4ufQ3Ozu/v7+y13sRqwAAADLSURBVHjaZc/XDsFgGIBhtDrshlitmk2IrbHFqL2pvXf/+78DPokj7+Fz9qpU/9UXJIlhmPaTaQ6QPaz0mm+5gwkgovcV6GZzd5JtCQwgsxoHOvJO15kleRLAnMgHFIESUEPmawB9ngmelTtipwwfASilxOLyiV5UVUyVAfbG0cCPHig+GBkzAENHS0AstVF6bacZIOzgLmxsHbt2OecNgJC83JERmePUYq8ARGkJx6XtFsdddBQgZE2nPR6CICZhawjA4Fb/chv+399kfR+MMMDGOQAAAABJRU5ErkJggg==");
    background-repeat: no-repeat;
    background-position: 2px center;
}

.ace_gutter-cell.ace_warning, .ace_icon.ace_warning, .ace_icon.ace_warning_fold {
    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAmVBMVEX///8AAAD///8AAAAAAABPSzb/5sAAAAB/blH/73z/ulkAAAAAAAD85pkAAAAAAAACAgP/vGz/rkDerGbGrV7/pkQICAf////e0IsAAAD/oED/qTvhrnUAAAD/yHD/njcAAADuv2r/nz//oTj/p064oGf/zHAAAAA9Nir/tFIAAAD/tlTiuWf/tkIAAACynXEAAAAAAAAtIRW7zBpBAAAAM3RSTlMAABR1m7RXO8Ln31Z36zT+neXe5OzooRDfn+TZ4p3h2hTf4t3k3ucyrN1K5+Xaks52Sfs9CXgrAAAAjklEQVR42o3PbQ+CIBQFYEwboPhSYgoYunIqqLn6/z8uYdH8Vmdnu9vz4WwXgN/xTPRD2+sgOcZjsge/whXZgUaYYvT8QnuJaUrjrHUQreGczuEafQCO/SJTufTbroWsPgsllVhq3wJEk2jUSzX3CUEDJC84707djRc5MTAQxoLgupWRwW6UB5fS++NV8AbOZgnsC7BpEAAAAABJRU5ErkJggg==");
    background-repeat: no-repeat;
    background-position: 2px center;
}

.ace_gutter-cell.ace_info, .ace_icon.ace_info, .ace_gutter-cell.ace_hint, .ace_icon.ace_hint {
    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAAAAAA6mKC9AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAAJ0Uk5TAAB2k804AAAAPklEQVQY02NgIB68QuO3tiLznjAwpKTgNyDbMegwisCHZUETUZV0ZqOquBpXj2rtnpSJT1AEnnRmL2OgGgAAIKkRQap2htgAAAAASUVORK5CYII=");
    background-repeat: no-repeat;
    background-position: 2px center;
}

.ace_dark .ace_gutter-cell.ace_info, .ace_dark .ace_icon.ace_info, .ace_dark .ace_gutter-cell.ace_hint, .ace_dark .ace_icon.ace_hint {
    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAJFBMVEUAAAChoaGAgIAqKiq+vr6tra1ZWVmUlJSbm5s8PDxubm56enrdgzg3AAAAAXRSTlMAQObYZgAAAClJREFUeNpjYMAPdsMYHegyJZFQBlsUlMFVCWUYKkAZMxZAGdxlDMQBAG+TBP4B6RyJAAAAAElFTkSuQmCC");
}

.ace_icon_svg.ace_error {
    -webkit-mask-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMCAxNiI+CjxnIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlPSJyZWQiIHNoYXBlLXJlbmRlcmluZz0iZ2VvbWV0cmljUHJlY2lzaW9uIj4KPGNpcmNsZSBmaWxsPSJub25lIiBjeD0iOCIgY3k9IjgiIHI9IjciIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPGxpbmUgeDE9IjExIiB5MT0iNSIgeDI9IjUiIHkyPSIxMSIvPgo8bGluZSB4MT0iMTEiIHkxPSIxMSIgeDI9IjUiIHkyPSI1Ii8+CjwvZz4KPC9zdmc+");
    background-color: crimson;
}
.ace_icon_svg.ace_security {
    -webkit-mask-image: url("data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjAgMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgICA8ZyBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZT0iZGFya29yYW5nZSIgZmlsbD0ibm9uZSIgc2hhcGUtcmVuZGVyaW5nPSJnZW9tZXRyaWNQcmVjaXNpb24iPgogICAgICAgIDxwYXRoIGNsYXNzPSJzdHJva2UtbGluZWpvaW4tcm91bmQiIGQ9Ik04IDE0LjgzMDdDOCAxNC44MzA3IDIgMTIuOTA0NyAyIDguMDg5OTJWMy4yNjU0OEM1LjMxIDMuMjY1NDggNy45ODk5OSAxLjM0OTE4IDcuOTg5OTkgMS4zNDkxOEM3Ljk4OTk5IDEuMzQ5MTggMTAuNjkgMy4yNjU0OCAxNCAzLjI2NTQ4VjguMDg5OTJDMTQgMTIuOTA0NyA4IDE0LjgzMDcgOCAxNC44MzA3WiIvPgogICAgICAgIDxwYXRoIGQ9Ik0yIDguMDg5OTJWMy4yNjU0OEM1LjMxIDMuMjY1NDggNy45ODk5OSAxLjM0OTE4IDcuOTg5OTkgMS4zNDkxOCIvPgogICAgICAgIDxwYXRoIGQ9Ik0xMy45OSA4LjA4OTkyVjMuMjY1NDhDMTAuNjggMy4yNjU0OCA4IDEuMzQ5MTggOCAxLjM0OTE4Ii8+CiAgICAgICAgPHBhdGggY2xhc3M9InN0cm9rZS1saW5lam9pbi1yb3VuZCIgZD0iTTggNFY5Ii8+CiAgICAgICAgPHBhdGggY2xhc3M9InN0cm9rZS1saW5lam9pbi1yb3VuZCIgZD0iTTggMTBWMTIiLz4KICAgIDwvZz4KPC9zdmc+");
    background-color: crimson;
}
.ace_icon_svg.ace_warning {
    -webkit-mask-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMCAxNiI+CjxnIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlPSJkYXJrb3JhbmdlIiBzaGFwZS1yZW5kZXJpbmc9Imdlb21ldHJpY1ByZWNpc2lvbiI+Cjxwb2x5Z29uIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGZpbGw9Im5vbmUiIHBvaW50cz0iOCAxIDE1IDE1IDEgMTUgOCAxIi8+CjxyZWN0IHg9IjgiIHk9IjEyIiB3aWR0aD0iMC4wMSIgaGVpZ2h0PSIwLjAxIi8+CjxsaW5lIHgxPSI4IiB5MT0iNiIgeDI9IjgiIHkyPSIxMCIvPgo8L2c+Cjwvc3ZnPg==");
    background-color: darkorange;
}
.ace_icon_svg.ace_info {
    -webkit-mask-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMCAxNiI+CjxnIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlPSJibHVlIiBzaGFwZS1yZW5kZXJpbmc9Imdlb21ldHJpY1ByZWNpc2lvbiI+CjxjaXJjbGUgZmlsbD0ibm9uZSIgY3g9IjgiIGN5PSI4IiByPSI3IiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjxwb2x5bGluZSBwb2ludHM9IjggMTEgOCA4Ii8+Cjxwb2x5bGluZSBwb2ludHM9IjkgOCA2IDgiLz4KPGxpbmUgeDE9IjEwIiB5MT0iMTEiIHgyPSI2IiB5Mj0iMTEiLz4KPHJlY3QgeD0iOCIgeT0iNSIgd2lkdGg9IjAuMDEiIGhlaWdodD0iMC4wMSIvPgo8L2c+Cjwvc3ZnPg==");
    background-color: royalblue;
}
.ace_icon_svg.ace_hint {
    -webkit-mask-image: url("data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjAgMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgICA8ZyBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZT0ic2lsdmVyIiBmaWxsPSJub25lIiBzaGFwZS1yZW5kZXJpbmc9Imdlb21ldHJpY1ByZWNpc2lvbiI+CiAgICAgICAgPHBhdGggY2xhc3M9InN0cm9rZS1saW5lam9pbi1yb3VuZCIgZD0iTTYgMTRIMTAiLz4KICAgICAgICA8cGF0aCBkPSJNOCAxMUg5QzkgOS40NzAwMiAxMiA4LjU0MDAyIDEyIDUuNzYwMDJDMTIuMDIgNC40MDAwMiAxMS4zOSAzLjM2MDAyIDEwLjQzIDIuNjcwMDJDOSAxLjY0MDAyIDcuMDAwMDEgMS42NDAwMiA1LjU3MDAxIDIuNjcwMDJDNC42MTAwMSAzLjM2MDAyIDMuOTggNC40MDAwMiA0IDUuNzYwMDJDNCA4LjU0MDAyIDcuMDAwMDEgOS40NzAwMiA3LjAwMDAxIDExSDhaIi8+CiAgICA8L2c+Cjwvc3ZnPg==");
    background-color: silver;
}

.ace_icon_svg.ace_error_fold {
    -webkit-mask-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMCAxNiIgZmlsbD0ibm9uZSI+CiAgPHBhdGggZD0ibSAxOC45Mjk4NTEsNy44Mjk4MDc2IGMgMC4xNDYzNTMsNi4zMzc0NjA0IC02LjMyMzE0Nyw3Ljc3Nzg0NDQgLTcuNDc3OTEyLDcuNzc3ODQ0NCAtMi4xMDcyNzI2LC0wLjEyODc1IDUuMTE3Njc4LDAuMzU2MjQ5IDUuMDUxNjk4LC03Ljg3MDA2MTggLTAuNjA0NjcyLC04LjAwMzk3MzQ5IC03LjA3NzI3MDYsLTcuNTYzMTE4OSAtNC44NTczLC03LjQzMDM5NTU2IDEuNjA2LC0wLjExNTE0MjI1IDYuODk3NDg1LDEuMjYyNTQ1OTYgNy4yODM1MTQsNy41MjI2MTI5NiB6IiBmaWxsPSJjcmltc29uIiBzdHJva2Utd2lkdGg9IjIiLz4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0ibSA4LjExNDc1NjIsMi4wNTI5ODI4IGMgMy4zNDkxNjk4LDAgNi4wNjQxMzI4LDIuNjc2ODYyNyA2LjA2NDEzMjgsNS45Nzg5NTMgMCwzLjMwMjExMjIgLTIuNzE0OTYzLDUuOTc4OTIwMiAtNi4wNjQxMzI4LDUuOTc4OTIwMiAtMy4zNDkxNDczLDAgLTYuMDY0MTc3MiwtMi42NzY4MDggLTYuMDY0MTc3MiwtNS45Nzg5MjAyIDAuMDA1MzksLTMuMjk5ODg2MSAyLjcxNzI2NTYsLTUuOTczNjQwOCA2LjA2NDE3NzIsLTUuOTc4OTUzIHogbSAwLC0xLjczNTgyNzE5IGMgLTQuMzIxNDgzNiwwIC03LjgyNDc0MDM4LDMuNDU0MDE4NDkgLTcuODI0NzQwMzgsNy43MTQ3ODAxOSAwLDQuMjYwNzI4MiAzLjUwMzI1Njc4LDcuNzE0NzQ1MiA3LjgyNDc0MDM4LDcuNzE0NzQ1MiA0LjMyMTQ0OTgsMCA3LjgyNDY5OTgsLTMuNDU0MDE3IDcuODI0Njk5OCwtNy43MTQ3NDUyIDAsLTIuMDQ2MDkxNCAtMC44MjQzOTIsLTQuMDA4MzY3MiAtMi4yOTE3NTYsLTUuNDU1MTc0NiBDIDEyLjE4MDIyNSwxLjEyOTk2NDggMTAuMTkwMDEzLDAuMzE3MTU1NjEgOC4xMTQ3NTYyLDAuMzE3MTU1NjEgWiBNIDYuOTM3NDU2Myw4LjI0MDU5ODUgNC42NzE4Njg1LDEwLjQ4NTg1MiA2LjAwODY4MTQsMTEuODc2NzI4IDguMzE3MDAzNSw5LjYwMDc5MTEgMTAuNjI1MzM3LDExLjg3NjcyOCAxMS45NjIxMzgsMTAuNDg1ODUyIDkuNjk2NTUwOCw4LjI0MDU5ODUgMTEuOTYyMTM4LDYuMDA2ODA2NiAxMC41NzMyNDYsNC42Mzc0MzM1IDguMzE3MDAzNSw2Ljg3MzQyOTcgNi4wNjA3NjA3LDQuNjM3NDMzNSA0LjY3MTg2ODUsNi4wMDY4MDY2IFoiIGZpbGw9ImNyaW1zb24iIHN0cm9rZS13aWR0aD0iMiIvPgo8L3N2Zz4=");
    background-color: crimson;
}
.ace_icon_svg.ace_security_fold {
    -webkit-mask-image: url("data:image/svg+xml;base64,CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMTcgMTQiIGZpbGw9Im5vbmUiPgogICAgPHBhdGggZD0iTTEwLjAwMDEgMTMuNjk5MkMxMC4wMDAxIDEzLjY5OTIgMTEuOTI0MSAxMy40NzYzIDEzIDEyLjY5OTJDMTQuNDEzOSAxMS42NzgxIDE2IDEwLjUgMTYuMTI1MSA2LjgxMTI2VjIuNTg5ODdDMTYuMTI1MSAyLjU0NzY4IDE2LjEyMjEgMi41MDYxOSAxNi4xMTY0IDIuNDY1NTlWMS43MTQ4NUgxNS4yNDE0TDE1LjIzMDcgMS43MTQ4NEwxNC42MjUxIDEuNjk5MjJWNi44MTEyM0MxNC42MjUxIDguNTEwNjEgMTQuNjI1MSA5LjQ2NDYxIDEyLjc4MjQgMTEuNzIxQzEyLjE1ODYgMTIuNDg0OCAxMC4wMDAxIDEzLjY5OTIgMTAuMDAwMSAxMy42OTkyWiIgZmlsbD0iY3JpbXNvbiIgc3Ryb2tlLXdpZHRoPSIyIi8+CiAgICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTcuMzM2MDkgMC4zNjc0NzVDNy4wMzIxNCAwLjE1MjY1MiA2LjYyNTQ4IDAuMTUzNjE0IDYuMzIyNTMgMC4zNjk5OTdMNi4zMDg2OSAwLjM3OTU1NEM2LjI5NTUzIDAuMzg4NTg4IDYuMjczODggMC40MDMyNjYgNi4yNDQxNyAwLjQyMjc4OUM2LjE4NDcxIDAuNDYxODYgNi4wOTMyMSAwLjUyMDE3MSA1Ljk3MzEzIDAuNTkxMzczQzUuNzMyNTEgMC43MzQwNTkgNS4zNzk5IDAuOTI2ODY0IDQuOTQyNzkgMS4xMjAwOUM0LjA2MTQ0IDEuNTA5NyAyLjg3NTQxIDEuODgzNzcgMS41ODk4NCAxLjg4Mzc3SDAuNzE0ODQ0VjIuNzU4NzdWNi45ODAxNUMwLjcxNDg0NCA5LjQ5Mzc0IDIuMjg4NjYgMTEuMTk3MyAzLjcwMjU0IDEyLjIxODVDNC40MTg0NSAxMi43MzU1IDUuMTI4NzQgMTMuMTA1MyA1LjY1NzMzIDEzLjM0NTdDNS45MjI4NCAxMy40NjY0IDYuMTQ1NjYgMTMuNTU1OSA2LjMwNDY1IDEzLjYxNjFDNi4zODQyMyAxMy42NDYyIDYuNDQ4MDUgMTMuNjY5IDYuNDkzNDkgMTMuNjg0OEM2LjUxNjIyIDEzLjY5MjcgNi41MzQzOCAxMy42OTg5IDYuNTQ3NjQgMTMuNzAzM0w2LjU2MzgyIDEzLjcwODdMNi41NjkwOCAxMy43MTA0TDYuNTcwOTkgMTMuNzExTDYuODM5ODQgMTMuNzUzM0w2LjU3MjQyIDEzLjcxMTVDNi43NDYzMyAxMy43NjczIDYuOTMzMzUgMTMuNzY3MyA3LjEwNzI3IDEzLjcxMTVMNy4xMDg3IDEzLjcxMUw3LjExMDYxIDEzLjcxMDRMNy4xMTU4NyAxMy43MDg3TDcuMTMyMDUgMTMuNzAzM0M3LjE0NTMxIDEzLjY5ODkgNy4xNjM0NiAxMy42OTI3IDcuMTg2MTkgMTMuNjg0OEM3LjIzMTY0IDEzLjY2OSA3LjI5NTQ2IDEzLjY0NjIgNy4zNzUwMyAxMy42MTYxQzcuNTM0MDMgMTMuNTU1OSA3Ljc1Njg1IDEzLjQ2NjQgOC4wMjIzNiAxMy4zNDU3QzguNTUwOTUgMTMuMTA1MyA5LjI2MTIzIDEyLjczNTUgOS45NzcxNSAxMi4yMTg1QzExLjM5MSAxMS4xOTczIDEyLjk2NDggOS40OTM3NyAxMi45NjQ4IDYuOTgwMThWMi43NTg4QzEyLjk2NDggMi43MTY2IDEyLjk2MTkgMi42NzUxMSAxMi45NTYxIDIuNjM0NTFWMS44ODM3N0gxMi4wODExQzEyLjA3NzUgMS44ODM3NyAxMi4wNzQgMS44ODM3NyAxMi4wNzA0IDEuODgzNzdDMTAuNzk3OSAxLjg4MDA0IDkuNjE5NjIgMS41MTEwMiA4LjczODk0IDEuMTI0ODZDOC43MzUzNCAxLjEyMzI3IDguNzMxNzQgMS4xMjE2OCA4LjcyODE0IDEuMTIwMDlDOC4yOTEwMyAwLjkyNjg2NCA3LjkzODQyIDAuNzM0MDU5IDcuNjk3NzkgMC41OTEzNzNDNy41Nzc3MiAwLjUyMDE3MSA3LjQ4NjIyIDAuNDYxODYgNy40MjY3NiAwLjQyMjc4OUM3LjM5NzA1IDAuNDAzMjY2IDcuMzc1MzkgMC4zODg1ODggNy4zNjIyNCAwLjM3OTU1NEw3LjM0ODk2IDAuMzcwMzVDNy4zNDg5NiAwLjM3MDM1IDcuMzQ4NDcgMC4zNzAwMiA3LjM0NTYzIDAuMzc0MDU0TDcuMzM3NzkgMC4zNjg2NTlMNy4zMzYwOSAwLjM2NzQ3NVpNOC4wMzQ3MSAyLjcyNjkxQzguODYwNCAzLjA5MDYzIDkuOTYwNjYgMy40NjMwOSAxMS4yMDYxIDMuNTg5MDdWNi45ODAxNUgxMS4yMTQ4QzExLjIxNDggOC42Nzk1MyAxMC4xNjM3IDkuOTI1MDcgOC45NTI1NCAxMC43OTk4QzguMzU1OTUgMTEuMjMwNiA3Ljc1Mzc0IDExLjU0NTQgNy4yOTc5NiAxMS43NTI3QzcuMTE2NzEgMTEuODM1MSA2Ljk2MDYyIDExLjg5OTYgNi44Mzk4NCAxMS45NDY5QzYuNzE5MDYgMTEuODk5NiA2LjU2Mjk3IDExLjgzNTEgNi4zODE3MyAxMS43NTI3QzUuOTI1OTUgMTEuNTQ1NCA1LjMyMzczIDExLjIzMDYgNC43MjcxNSAxMC43OTk4QzMuNTE2MDMgOS45MjUwNyAyLjQ2NDg0IDguNjc5NTUgMi40NjQ4NCA2Ljk4MDE4VjMuNTg5MDlDMy43MTczOCAzLjQ2MjM5IDQuODIzMDggMy4wODYzOSA1LjY1MDMzIDIuNzIwNzFDNi4xNDIyOCAyLjUwMzI0IDYuNTQ0ODUgMi4yODUzNyA2LjgzMjU0IDIuMTE2MjRDNy4xMjE4MSAyLjI4NTM1IDcuNTI3IDIuNTAzNTIgOC4wMjE5NiAyLjcyMTMxQzguMDI2MiAyLjcyMzE3IDguMDMwNDUgMi43MjUwNCA4LjAzNDcxIDIuNzI2OTFaTTUuOTY0ODQgMy40MDE0N1Y3Ljc3NjQ3SDcuNzE0ODRWMy40MDE0N0g1Ljk2NDg0Wk01Ljk2NDg0IDEwLjQwMTVWOC42NTE0N0g3LjcxNDg0VjEwLjQwMTVINS45NjQ4NFoiIGZpbGw9ImNyaW1zb24iIHN0cm9rZS13aWR0aD0iMiIvPgo8L3N2Zz4=");
    background-color: crimson;
}
.ace_icon_svg.ace_warning_fold {
    -webkit-mask-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAyMCAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNC43NzY5IDE0LjczMzdMOC42NTE5MiAyLjQ4MzY5QzguMzI5NDYgMS44Mzg3NyA3LjQwOTEzIDEuODM4NzcgNy4wODY2NyAyLjQ4MzY5TDAuOTYxNjY5IDE0LjczMzdDMC42NzA3NzUgMTUuMzE1NSAxLjA5MzgzIDE2IDEuNzQ0MjkgMTZIMTMuOTk0M0MxNC42NDQ4IDE2IDE1LjA2NzggMTUuMzE1NSAxNC43NzY5IDE0LjczMzdaTTMuMTYwMDcgMTQuMjVMNy44NjkyOSA0LjgzMTU2TDEyLjU3ODUgMTQuMjVIMy4xNjAwN1pNOC43NDQyOSAxMS42MjVWMTMuMzc1SDYuOTk0MjlWMTEuNjI1SDguNzQ0MjlaTTYuOTk0MjkgMTAuNzVWNy4yNUg4Ljc0NDI5VjEwLjc1SDYuOTk0MjlaIiBmaWxsPSIjRUM3MjExIi8+CjxwYXRoIGQ9Ik0xMS4xOTkxIDIuOTUyMzhDMTAuODgwOSAyLjMxNDY3IDEwLjM1MzcgMS44MDUyNiA5LjcwNTUgMS41MDlMMTEuMDQxIDEuMDY5NzhDMTEuNjg4MyAwLjk0OTgxNCAxMi4zMzcgMS4yNzI2MyAxMi42MzE3IDEuODYxNDFMMTcuNjEzNiAxMS44MTYxQzE4LjM1MjcgMTMuMjkyOSAxNy41OTM4IDE1LjA4MDQgMTYuMDE4IDE1LjU3NDVDMTYuNDA0NCAxNC40NTA3IDE2LjMyMzEgMTMuMjE4OCAxNS43OTI0IDEyLjE1NTVMMTEuMTk5MSAyLjk1MjM4WiIgZmlsbD0iI0VDNzIxMSIvPgo8L3N2Zz4=");
    background-color: darkorange;
}

.ace_scrollbar {
    contain: strict;
    position: absolute;
    right: 0;
    bottom: 0;
    z-index: 6;
}

.ace_scrollbar-inner {
    position: absolute;
    cursor: text;
    left: 0;
    top: 0;
}

.ace_scrollbar-v{
    overflow-x: hidden;
    overflow-y: scroll;
    top: 0;
}

.ace_scrollbar-h {
    overflow-x: scroll;
    overflow-y: hidden;
    left: 0;
}

.ace_print-margin {
    position: absolute;
    height: 100%;
}

.ace_text-input {
    position: absolute;
    z-index: 0;
    width: 0.5em;
    height: 1em;
    opacity: 0;
    background: transparent;
    -moz-appearance: none;
    appearance: none;
    border: none;
    resize: none;
    outline: none;
    overflow: hidden;
    font: inherit;
    padding: 0 1px;
    margin: 0 -1px;
    contain: strict;
    -ms-user-select: text;
    -moz-user-select: text;
    -webkit-user-select: text;
    user-select: text;
    /*with \`pre-line\` chrome inserts &nbsp; instead of space*/
    white-space: pre!important;
}
.ace_text-input.ace_composition {
    background: transparent;
    color: inherit;
    z-index: 1000;
    opacity: 1;
}
.ace_composition_placeholder { color: transparent }
.ace_composition_marker { 
    border-bottom: 1px solid;
    position: absolute;
    border-radius: 0;
    margin-top: 1px;
}

[ace_nocontext=true] {
    transform: none!important;
    filter: none!important;
    clip-path: none!important;
    mask : none!important;
    contain: none!important;
    perspective: none!important;
    mix-blend-mode: initial!important;
    z-index: auto;
}

.ace_layer {
    z-index: 1;
    position: absolute;
    overflow: hidden;
    /* workaround for chrome bug https://github.com/ajaxorg/ace/issues/2312*/
    word-wrap: normal;
    white-space: pre;
    height: 100%;
    width: 100%;
    box-sizing: border-box;
    /* setting pointer-events: auto; on node under the mouse, which changes
        during scroll, will break mouse wheel scrolling in Safari */
    pointer-events: none;
}

.ace_gutter-layer {
    position: relative;
    width: auto;
    text-align: right;
    pointer-events: auto;
    height: 1000000px;
    contain: style size layout;
}

.ace_text-layer {
    font: inherit !important;
    position: absolute;
    height: 1000000px;
    width: 1000000px;
    contain: style size layout;
}

.ace_text-layer > .ace_line, .ace_text-layer > .ace_line_group {
    contain: style size layout;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
}

.ace_hidpi .ace_text-layer,
.ace_hidpi .ace_gutter-layer,
.ace_hidpi .ace_content,
.ace_hidpi .ace_gutter {
    contain: strict;
}
.ace_hidpi .ace_text-layer > .ace_line, 
.ace_hidpi .ace_text-layer > .ace_line_group {
    contain: strict;
}

.ace_cjk {
    display: inline-block;
    text-align: center;
}

.ace_cursor-layer {
    z-index: 4;
}

.ace_cursor {
    z-index: 4;
    position: absolute;
    box-sizing: border-box;
    border-left: 2px solid;
    /* workaround for smooth cursor repaintng whole screen in chrome */
    transform: translatez(0);
}

.ace_multiselect .ace_cursor {
    border-left-width: 1px;
}

.ace_slim-cursors .ace_cursor {
    border-left-width: 1px;
}

.ace_overwrite-cursors .ace_cursor {
    border-left-width: 0;
    border-bottom: 1px solid;
}

.ace_hidden-cursors .ace_cursor {
    opacity: 0.2;
}

.ace_hasPlaceholder .ace_hidden-cursors .ace_cursor {
    opacity: 0;
}

.ace_smooth-blinking .ace_cursor {
    transition: opacity 0.18s;
}

.ace_animate-blinking .ace_cursor {
    animation-duration: 1000ms;
    animation-timing-function: step-end;
    animation-name: blink-ace-animate;
    animation-iteration-count: infinite;
}

.ace_animate-blinking.ace_smooth-blinking .ace_cursor {
    animation-duration: 1000ms;
    animation-timing-function: ease-in-out;
    animation-name: blink-ace-animate-smooth;
}
    
@keyframes blink-ace-animate {
    from, to { opacity: 1; }
    60% { opacity: 0; }
}

@keyframes blink-ace-animate-smooth {
    from, to { opacity: 1; }
    45% { opacity: 1; }
    60% { opacity: 0; }
    85% { opacity: 0; }
}

.ace_marker-layer .ace_step, .ace_marker-layer .ace_stack {
    position: absolute;
    z-index: 3;
}

.ace_marker-layer .ace_selection {
    position: absolute;
    z-index: 5;
}

.ace_marker-layer .ace_bracket {
    position: absolute;
    z-index: 6;
}

.ace_marker-layer .ace_error_bracket {
    position: absolute;
    border-bottom: 1px solid #DE5555;
    border-radius: 0;
}

.ace_marker-layer .ace_active-line {
    position: absolute;
    z-index: 2;
}

.ace_marker-layer .ace_selected-word {
    position: absolute;
    z-index: 4;
    box-sizing: border-box;
}

.ace_line .ace_fold {
    box-sizing: border-box;

    display: inline-block;
    height: 11px;
    margin-top: -2px;
    vertical-align: middle;

    background-image:
        url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAJCAYAAADU6McMAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAJpJREFUeNpi/P//PwOlgAXGYGRklAVSokD8GmjwY1wasKljQpYACtpCFeADcHVQfQyMQAwzwAZI3wJKvCLkfKBaMSClBlR7BOQikCFGQEErIH0VqkabiGCAqwUadAzZJRxQr/0gwiXIal8zQQPnNVTgJ1TdawL0T5gBIP1MUJNhBv2HKoQHHjqNrA4WO4zY0glyNKLT2KIfIMAAQsdgGiXvgnYAAAAASUVORK5CYII="),
        url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAA3CAYAAADNNiA5AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAACJJREFUeNpi+P//fxgTAwPDBxDxD078RSX+YeEyDFMCIMAAI3INmXiwf2YAAAAASUVORK5CYII=");
    background-repeat: no-repeat, repeat-x;
    background-position: center center, top left;
    color: transparent;

    border: 1px solid black;
    border-radius: 2px;

    cursor: pointer;
    pointer-events: auto;
}

.ace_dark .ace_fold {
}

.ace_fold:hover{
    background-image:
        url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAJCAYAAADU6McMAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAJpJREFUeNpi/P//PwOlgAXGYGRklAVSokD8GmjwY1wasKljQpYACtpCFeADcHVQfQyMQAwzwAZI3wJKvCLkfKBaMSClBlR7BOQikCFGQEErIH0VqkabiGCAqwUadAzZJRxQr/0gwiXIal8zQQPnNVTgJ1TdawL0T5gBIP1MUJNhBv2HKoQHHjqNrA4WO4zY0glyNKLT2KIfIMAAQsdgGiXvgnYAAAAASUVORK5CYII="),
        url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAA3CAYAAADNNiA5AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAACBJREFUeNpi+P//fz4TAwPDZxDxD5X4i5fLMEwJgAADAEPVDbjNw87ZAAAAAElFTkSuQmCC");
}

.ace_tooltip {
    background-color: #f5f5f5;
    border: 1px solid gray;
    border-radius: 1px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
    color: black;
    padding: 3px 4px;
    position: fixed;
    z-index: 999999;
    box-sizing: border-box;
    cursor: default;
    white-space: pre-wrap;
    word-wrap: break-word;
    line-height: normal;
    font-style: normal;
    font-weight: normal;
    letter-spacing: normal;
    pointer-events: none;
    overflow: auto;
    max-width: min(33em, 66vw);
    overscroll-behavior: contain;
}
.ace_tooltip pre {
    white-space: pre-wrap;
}

.ace_tooltip.ace_dark {
    background-color: #636363;
    color: #fff;
}

.ace_tooltip:focus {
    outline: 1px solid #5E9ED6;
}

.ace_icon {
    display: inline-block;
    width: 18px;
    vertical-align: top;
}

.ace_icon_svg {
    display: inline-block;
    width: 12px;
    vertical-align: top;
    -webkit-mask-repeat: no-repeat;
    -webkit-mask-size: 12px;
    -webkit-mask-position: center;
}

.ace_folding-enabled > .ace_gutter-cell, .ace_folding-enabled > .ace_gutter-cell_svg-icons {
    padding-right: 13px;
}

.ace_fold-widget, .ace_custom-widget {
    box-sizing: border-box;

    margin: 0 -12px 0 1px;
    display: none;
    width: 11px;
    vertical-align: top;

    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAANElEQVR42mWKsQ0AMAzC8ixLlrzQjzmBiEjp0A6WwBCSPgKAXoLkqSot7nN3yMwR7pZ32NzpKkVoDBUxKAAAAABJRU5ErkJggg==");
    background-repeat: no-repeat;
    background-position: center;

    border-radius: 3px;
    
    border: 1px solid transparent;
    cursor: pointer;
    pointer-events: auto;
}

.ace_custom-widget {
    background: none;
}

.ace_folding-enabled .ace_fold-widget {
    display: inline-block;   
}

.ace_fold-widget.ace_end {
    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAANElEQVR42m3HwQkAMAhD0YzsRchFKI7sAikeWkrxwScEB0nh5e7KTPWimZki4tYfVbX+MNl4pyZXejUO1QAAAABJRU5ErkJggg==");
}

.ace_fold-widget.ace_closed {
    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAGCAYAAAAG5SQMAAAAOUlEQVR42jXKwQkAMAgDwKwqKD4EwQ26sSOkVWjgIIHAzPiCgaqiqnJHZnKICBERHN194O5b9vbLuAVRL+l0YWnZAAAAAElFTkSuQmCCXA==");
}

.ace_fold-widget:hover {
    border: 1px solid rgba(0, 0, 0, 0.3);
    background-color: rgba(255, 255, 255, 0.2);
    box-shadow: 0 1px 1px rgba(255, 255, 255, 0.7);
}

.ace_fold-widget:active {
    border: 1px solid rgba(0, 0, 0, 0.4);
    background-color: rgba(0, 0, 0, 0.05);
    box-shadow: 0 1px 1px rgba(255, 255, 255, 0.8);
}
/**
 * Dark version for fold widgets
 */
.ace_dark .ace_fold-widget {
    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHklEQVQIW2P4//8/AzoGEQ7oGCaLLAhWiSwB146BAQCSTPYocqT0AAAAAElFTkSuQmCC");
}
.ace_dark .ace_fold-widget.ace_end {
    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAH0lEQVQIW2P4//8/AxQ7wNjIAjDMgC4AxjCVKBirIAAF0kz2rlhxpAAAAABJRU5ErkJggg==");
}
.ace_dark .ace_fold-widget.ace_closed {
    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAFCAYAAACAcVaiAAAAHElEQVQIW2P4//+/AxAzgDADlOOAznHAKgPWAwARji8UIDTfQQAAAABJRU5ErkJggg==");
}
.ace_dark .ace_fold-widget:hover {
    box-shadow: 0 1px 1px rgba(255, 255, 255, 0.2);
    background-color: rgba(255, 255, 255, 0.1);
}
.ace_dark .ace_fold-widget:active {
    box-shadow: 0 1px 1px rgba(255, 255, 255, 0.2);
}

.ace_inline_button {
    border: 1px solid lightgray;
    display: inline-block;
    margin: -1px 8px;
    padding: 0 5px;
    pointer-events: auto;
    cursor: pointer;
}
.ace_inline_button:hover {
    border-color: gray;
    background: rgba(200,200,200,0.2);
    display: inline-block;
    pointer-events: auto;
}

.ace_fold-widget.ace_invalid {
    background-color: #FFB4B4;
    border-color: #DE5555;
}

.ace_fade-fold-widgets .ace_fold-widget {
    transition: opacity 0.4s ease 0.05s;
    opacity: 0;
}

.ace_fade-fold-widgets:hover .ace_fold-widget {
    transition: opacity 0.05s ease 0.05s;
    opacity:1;
}

.ace_underline {
    text-decoration: underline;
}

.ace_bold {
    font-weight: bold;
}

.ace_nobold .ace_bold {
    font-weight: normal;
}

.ace_italic {
    font-style: italic;
}


.ace_error-marker {
    background-color: rgba(255, 0, 0,0.2);
    position: absolute;
    z-index: 9;
}

.ace_highlight-marker {
    background-color: rgba(255, 255, 0,0.2);
    position: absolute;
    z-index: 8;
}

.ace_mobile-menu {
    position: absolute;
    line-height: 1.5;
    border-radius: 4px;
    -ms-user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    user-select: none;
    background: white;
    box-shadow: 1px 3px 2px grey;
    border: 1px solid #dcdcdc;
    color: black;
}
.ace_dark > .ace_mobile-menu {
    background: #333;
    color: #ccc;
    box-shadow: 1px 3px 2px grey;
    border: 1px solid #444;

}
.ace_mobile-button {
    padding: 2px;
    cursor: pointer;
    overflow: hidden;
}
.ace_mobile-button:hover {
    background-color: #eee;
    opacity:1;
}
.ace_mobile-button:active {
    background-color: #ddd;
}

.ace_placeholder {
    position: relative;
    font-family: arial;
    transform: scale(0.9);
    transform-origin: left;
    white-space: pre;
    opacity: 0.7;
    margin: 0 10px;
    z-index: 1;
}

.ace_ghost_text {
    opacity: 0.5;
    font-style: italic;
}

.ace_ghost_text_container > div {
    white-space: pre;
}

.ghost_text_line_wrapped::after {
    content: "\u21A9";
    position: absolute;
}

.ace_lineWidgetContainer.ace_ghost_text {
    margin: 0px 4px
}

.ace_screenreader-only {
    position:absolute;
    left:-10000px;
    top:auto;
    width:1px;
    height:1px;
    overflow:hidden;
}

.ace_hidden_token {
    display: none;
}`;
    }), ace.define("ace/layer/decorators", [
      "require",
      "exports",
      "module",
      "ace/lib/dom",
      "ace/lib/oop",
      "ace/lib/event_emitter"
    ], function(A, _, N) {
      var L = A("../lib/dom"), M = A("../lib/oop"), $ = A("../lib/event_emitter").EventEmitter, a = (function() {
        function l(i, o) {
          this.renderer = o, this.pixelRatio = 1, this.maxHeight = o.layerConfig.maxHeight, this.lineHeight = o.layerConfig.lineHeight, this.minDecorationHeight = 2 * this.pixelRatio | 0, this.halfMinDecorationHeight = this.minDecorationHeight / 2 | 0, this.colors = {}, this.colors.dark = {
            error: "rgba(255, 18, 18, 1)",
            warning: "rgba(18, 136, 18, 1)",
            info: "rgba(18, 18, 136, 1)"
          }, this.colors.light = {
            error: "rgb(255,51,51)",
            warning: "rgb(32,133,72)",
            info: "rgb(35,68,138)"
          }, this.setScrollBarV(i);
        }
        return l.prototype.$createCanvas = function() {
          this.canvas = L.createElement("canvas"), this.canvas.style.top = "0px", this.canvas.style.right = "0px", this.canvas.style.zIndex = "7", this.canvas.style.position = "absolute";
        }, l.prototype.setScrollBarV = function(i) {
          this.$createCanvas(), this.scrollbarV = i, i.element.appendChild(this.canvas), this.setDimensions();
        }, l.prototype.$updateDecorators = function(i) {
          if (typeof this.canvas.getContext != "function") return;
          var o = this.renderer.theme.isDark === true ? this.colors.dark : this.colors.light;
          this.setDimensions(i);
          var r = this.canvas.getContext("2d");
          function n(y, g) {
            return y.priority < g.priority ? -1 : y.priority > g.priority ? 1 : 0;
          }
          var e = this.renderer.session.$annotations;
          if (r.clearRect(0, 0, this.canvas.width, this.canvas.height), e) {
            var t = {
              info: 1,
              warning: 2,
              error: 3
            };
            e.forEach(function(y) {
              y.priority = t[y.type] || null;
            }), e = e.sort(n);
            for (var s = 0; s < e.length; s++) {
              var h = e[s].row, u = this.getVerticalOffsetForRow(h), S = u + this.lineHeight, b = Math.round(this.heightRatio * u), f = Math.round(this.heightRatio * S), c = Math.round((b + f) / 2), w = f - c;
              w < this.halfMinDecorationHeight && (w = this.halfMinDecorationHeight), c - w < 0 && (c = w), c + w > this.canvasHeight && (c = this.canvasHeight - w);
              var C = c - w, p = c + w, v = p - C;
              r.fillStyle = o[e[s].type] || null, r.fillRect(0, C, Math.round(this.oneZoneWidth - 1), v);
            }
          }
          var k = this.renderer.session.selection.getCursor();
          if (k) {
            var m = Math.round(this.getVerticalOffsetForRow(k.row) * this.heightRatio);
            r.fillStyle = "rgba(0, 0, 0, 0.5)", r.fillRect(0, m, this.canvasWidth, 2);
          }
        }, l.prototype.getVerticalOffsetForRow = function(i) {
          i = i | 0;
          var o = this.renderer.session.documentToScreenRow(i, 0) * this.lineHeight;
          return o;
        }, l.prototype.setDimensions = function(i) {
          i = i || this.renderer.layerConfig, this.maxHeight = i.maxHeight, this.lineHeight = i.lineHeight, this.canvasHeight = i.height, this.canvasWidth = this.scrollbarV.width || this.canvasWidth, this.setZoneWidth(), this.canvas.width = this.canvasWidth, this.canvas.height = this.canvasHeight, this.maxHeight < this.canvasHeight ? this.heightRatio = 1 : this.heightRatio = this.canvasHeight / this.maxHeight;
        }, l.prototype.setZoneWidth = function() {
          this.oneZoneWidth = this.canvasWidth;
        }, l.prototype.destroy = function() {
          this.canvas.parentNode.removeChild(this.canvas);
        }, l;
      })();
      M.implement(a.prototype, $), _.Decorator = a;
    }), ace.define("ace/virtual_renderer", [
      "require",
      "exports",
      "module",
      "ace/lib/oop",
      "ace/lib/dom",
      "ace/lib/lang",
      "ace/config",
      "ace/layer/gutter",
      "ace/layer/marker",
      "ace/layer/text",
      "ace/layer/cursor",
      "ace/scrollbar",
      "ace/scrollbar",
      "ace/scrollbar_custom",
      "ace/scrollbar_custom",
      "ace/renderloop",
      "ace/layer/font_metrics",
      "ace/lib/event_emitter",
      "ace/css/editor-css",
      "ace/layer/decorators",
      "ace/lib/useragent",
      "ace/layer/text_util"
    ], function(A, _, N) {
      var L = A("./lib/oop"), M = A("./lib/dom"), $ = A("./lib/lang"), a = A("./config"), l = A("./layer/gutter").Gutter, i = A("./layer/marker").Marker, o = A("./layer/text").Text, r = A("./layer/cursor").Cursor, n = A("./scrollbar").HScrollBar, e = A("./scrollbar").VScrollBar, t = A("./scrollbar_custom").HScrollBar, s = A("./scrollbar_custom").VScrollBar, h = A("./renderloop").RenderLoop, u = A("./layer/font_metrics").FontMetrics, S = A("./lib/event_emitter").EventEmitter, b = A("./css/editor-css"), f = A("./layer/decorators").Decorator, c = A("./lib/useragent"), w = A("./layer/text_util").isTextToken;
      M.importCssString(b, "ace_editor.css", false);
      var C = (function() {
        function p(v, k) {
          var m = this;
          this.container = v || M.createElement("div"), M.addCssClass(this.container, "ace_editor"), M.HI_DPI && M.addCssClass(this.container, "ace_hidpi"), this.setTheme(k), a.get("useStrictCSP") == null && a.set("useStrictCSP", false), this.$gutter = M.createElement("div"), this.$gutter.className = "ace_gutter", this.container.appendChild(this.$gutter), this.$gutter.setAttribute("aria-hidden", "true"), this.scroller = M.createElement("div"), this.scroller.className = "ace_scroller", this.container.appendChild(this.scroller), this.content = M.createElement("div"), this.content.className = "ace_content", this.scroller.appendChild(this.content), this.$gutterLayer = new l(this.$gutter), this.$gutterLayer.on("changeGutterWidth", this.onGutterResize.bind(this)), this.$markerBack = new i(this.content);
          var y = this.$textLayer = new o(this.content);
          this.canvas = y.element, this.$markerFront = new i(this.content), this.$cursorLayer = new r(this.content), this.$horizScroll = false, this.$vScroll = false, this.scrollBar = this.scrollBarV = new e(this.container, this), this.scrollBarH = new n(this.container, this), this.scrollBarV.on("scroll", function(g) {
            m.$scrollAnimation || m.session.setScrollTop(g.data - m.scrollMargin.top);
          }), this.scrollBarH.on("scroll", function(g) {
            m.$scrollAnimation || m.session.setScrollLeft(g.data - m.scrollMargin.left);
          }), this.scrollTop = 0, this.scrollLeft = 0, this.cursorPos = {
            row: 0,
            column: 0
          }, this.$fontMetrics = new u(this.container), this.$textLayer.$setFontMetrics(this.$fontMetrics), this.$textLayer.on("changeCharacterSize", function(g) {
            m.updateCharacterSize(), m.onResize(true, m.gutterWidth, m.$size.width, m.$size.height), m._signal("changeCharacterSize", g);
          }), this.$size = {
            width: 0,
            height: 0,
            scrollerHeight: 0,
            scrollerWidth: 0,
            $dirty: true
          }, this.layerConfig = {
            width: 1,
            padding: 0,
            firstRow: 0,
            firstRowScreen: 0,
            lastRow: 0,
            lineHeight: 0,
            characterWidth: 0,
            minHeight: 1,
            maxHeight: 1,
            offset: 0,
            height: 1,
            gutterOffset: 1
          }, this.scrollMargin = {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            v: 0,
            h: 0
          }, this.margin = {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            v: 0,
            h: 0
          }, this.$keepTextAreaAtCursor = !c.isIOS, this.$loop = new h(this.$renderChanges.bind(this), this.container.ownerDocument.defaultView), this.$loop.schedule(this.CHANGE_FULL), this.updateCharacterSize(), this.setPadding(4), this.$addResizeObserver(), a.resetOptions(this), a._signal("renderer", this);
        }
        return p.prototype.updateCharacterSize = function() {
          this.$textLayer.allowBoldFonts != this.$allowBoldFonts && (this.$allowBoldFonts = this.$textLayer.allowBoldFonts, this.setStyle("ace_nobold", !this.$allowBoldFonts)), this.layerConfig.characterWidth = this.characterWidth = this.$textLayer.getCharacterWidth(), this.layerConfig.lineHeight = this.lineHeight = this.$textLayer.getLineHeight(), this.$updatePrintMargin(), M.setStyle(this.scroller.style, "line-height", this.lineHeight + "px");
        }, p.prototype.setSession = function(v) {
          this.session && this.session.doc.off("changeNewLineMode", this.onChangeNewLineMode), this.session = v, v && this.scrollMargin.top && v.getScrollTop() <= 0 && v.setScrollTop(-this.scrollMargin.top), this.$cursorLayer.setSession(v), this.$markerBack.setSession(v), this.$markerFront.setSession(v), this.$gutterLayer.setSession(v), this.$textLayer.setSession(v), v && (this.$loop.schedule(this.CHANGE_FULL), this.session.$setFontMetrics(this.$fontMetrics), this.scrollBarH.scrollLeft = this.scrollBarV.scrollTop = null, this.onChangeNewLineMode = this.onChangeNewLineMode.bind(this), this.onChangeNewLineMode(), this.session.doc.on("changeNewLineMode", this.onChangeNewLineMode));
        }, p.prototype.updateLines = function(v, k, m) {
          if (k === void 0 && (k = 1 / 0), this.$changedLines ? (this.$changedLines.firstRow > v && (this.$changedLines.firstRow = v), this.$changedLines.lastRow < k && (this.$changedLines.lastRow = k)) : this.$changedLines = {
            firstRow: v,
            lastRow: k
          }, this.$changedLines.lastRow < this.layerConfig.firstRow) if (m) this.$changedLines.lastRow = this.layerConfig.lastRow;
          else return;
          this.$changedLines.firstRow > this.layerConfig.lastRow || this.$loop.schedule(this.CHANGE_LINES);
        }, p.prototype.onChangeNewLineMode = function() {
          this.$loop.schedule(this.CHANGE_TEXT), this.$textLayer.$updateEolChar(), this.session.$bidiHandler.setEolChar(this.$textLayer.EOL_CHAR);
        }, p.prototype.onChangeTabSize = function() {
          this.$loop.schedule(this.CHANGE_TEXT | this.CHANGE_MARKER), this.$textLayer.onChangeTabSize();
        }, p.prototype.updateText = function() {
          this.$loop.schedule(this.CHANGE_TEXT);
        }, p.prototype.updateFull = function(v) {
          v ? this.$renderChanges(this.CHANGE_FULL, true) : this.$loop.schedule(this.CHANGE_FULL);
        }, p.prototype.updateFontSize = function() {
          this.$textLayer.checkForSizeChanges();
        }, p.prototype.$updateSizeAsync = function() {
          this.$loop.pending ? this.$size.$dirty = true : this.onResize();
        }, p.prototype.onResize = function(v, k, m, y) {
          if (!(this.resizing > 2)) {
            this.resizing > 0 ? this.resizing++ : this.resizing = v ? 1 : 0;
            var g = this.container;
            y || (y = g.clientHeight || g.scrollHeight), !y && this.$maxLines && this.lineHeight > 1 && (!g.style.height || g.style.height == "0px") && (g.style.height = "1px", y = g.clientHeight || g.scrollHeight), m || (m = g.clientWidth || g.scrollWidth);
            var d = this.$updateCachedSize(v, k, m, y);
            if (this.$resizeTimer && this.$resizeTimer.cancel(), !this.$size.scrollerHeight || !m && !y) return this.resizing = 0;
            v && (this.$gutterLayer.$padding = null), v ? this.$renderChanges(d | this.$changes, true) : this.$loop.schedule(d | this.$changes), this.resizing && (this.resizing = 0), this.scrollBarH.scrollLeft = this.scrollBarV.scrollTop = null, this.$customScrollbar && this.$updateCustomScrollbar(true);
          }
        }, p.prototype.$updateCachedSize = function(v, k, m, y) {
          y -= this.$extraHeight || 0;
          var g = 0, d = this.$size, x = {
            width: d.width,
            height: d.height,
            scrollerHeight: d.scrollerHeight,
            scrollerWidth: d.scrollerWidth
          };
          if (y && (v || d.height != y) && (d.height = y, g |= this.CHANGE_SIZE, d.scrollerHeight = d.height, this.$horizScroll && (d.scrollerHeight -= this.scrollBarH.getHeight()), this.scrollBarV.setHeight(d.scrollerHeight), this.scrollBarV.element.style.bottom = this.scrollBarH.getHeight() + "px", g = g | this.CHANGE_SCROLL), m && (v || d.width != m)) {
            g |= this.CHANGE_SIZE, d.width = m, k == null && (k = this.$showGutter ? this.$gutter.offsetWidth : 0), this.gutterWidth = k, M.setStyle(this.scrollBarH.element.style, "left", k + "px"), M.setStyle(this.scroller.style, "left", k + this.margin.left + "px"), d.scrollerWidth = Math.max(0, m - k - this.scrollBarV.getWidth() - this.margin.h), M.setStyle(this.$gutter.style, "left", this.margin.left + "px");
            var T = this.scrollBarV.getWidth() + "px";
            M.setStyle(this.scrollBarH.element.style, "right", T), M.setStyle(this.scroller.style, "right", T), M.setStyle(this.scroller.style, "bottom", this.scrollBarH.getHeight()), this.scrollBarH.setWidth(d.scrollerWidth), (this.session && this.session.getUseWrapMode() && this.adjustWrapLimit() || v) && (g |= this.CHANGE_FULL);
          }
          return d.$dirty = !m || !y, g && this._signal("resize", x), g;
        }, p.prototype.onGutterResize = function(v) {
          var k = this.$showGutter ? v : 0;
          k != this.gutterWidth && (this.$changes |= this.$updateCachedSize(true, k, this.$size.width, this.$size.height)), this.session.getUseWrapMode() && this.adjustWrapLimit() ? this.$loop.schedule(this.CHANGE_FULL) : this.$size.$dirty ? this.$loop.schedule(this.CHANGE_FULL) : this.$computeLayerConfig();
        }, p.prototype.adjustWrapLimit = function() {
          var v = this.$size.scrollerWidth - this.$padding * 2, k = Math.floor(v / this.characterWidth);
          return this.session.adjustWrapLimit(k, this.$showPrintMargin && this.$printMarginColumn);
        }, p.prototype.setAnimatedScroll = function(v) {
          this.setOption("animatedScroll", v);
        }, p.prototype.getAnimatedScroll = function() {
          return this.$animatedScroll;
        }, p.prototype.setShowInvisibles = function(v) {
          this.setOption("showInvisibles", v), this.session.$bidiHandler.setShowInvisibles(v);
        }, p.prototype.getShowInvisibles = function() {
          return this.getOption("showInvisibles");
        }, p.prototype.getDisplayIndentGuides = function() {
          return this.getOption("displayIndentGuides");
        }, p.prototype.setDisplayIndentGuides = function(v) {
          this.setOption("displayIndentGuides", v);
        }, p.prototype.getHighlightIndentGuides = function() {
          return this.getOption("highlightIndentGuides");
        }, p.prototype.setHighlightIndentGuides = function(v) {
          this.setOption("highlightIndentGuides", v);
        }, p.prototype.setShowPrintMargin = function(v) {
          this.setOption("showPrintMargin", v);
        }, p.prototype.getShowPrintMargin = function() {
          return this.getOption("showPrintMargin");
        }, p.prototype.setPrintMarginColumn = function(v) {
          this.setOption("printMarginColumn", v);
        }, p.prototype.getPrintMarginColumn = function() {
          return this.getOption("printMarginColumn");
        }, p.prototype.getShowGutter = function() {
          return this.getOption("showGutter");
        }, p.prototype.setShowGutter = function(v) {
          return this.setOption("showGutter", v);
        }, p.prototype.getFadeFoldWidgets = function() {
          return this.getOption("fadeFoldWidgets");
        }, p.prototype.setFadeFoldWidgets = function(v) {
          this.setOption("fadeFoldWidgets", v);
        }, p.prototype.setHighlightGutterLine = function(v) {
          this.setOption("highlightGutterLine", v);
        }, p.prototype.getHighlightGutterLine = function() {
          return this.getOption("highlightGutterLine");
        }, p.prototype.$updatePrintMargin = function() {
          if (!(!this.$showPrintMargin && !this.$printMarginEl)) {
            if (!this.$printMarginEl) {
              var v = M.createElement("div");
              v.className = "ace_layer ace_print-margin-layer", this.$printMarginEl = M.createElement("div"), this.$printMarginEl.className = "ace_print-margin", v.appendChild(this.$printMarginEl), this.content.insertBefore(v, this.content.firstChild);
            }
            var k = this.$printMarginEl.style;
            k.left = Math.round(this.characterWidth * this.$printMarginColumn + this.$padding) + "px", k.visibility = this.$showPrintMargin ? "visible" : "hidden", this.session && this.session.$wrap == -1 && this.adjustWrapLimit();
          }
        }, p.prototype.getContainerElement = function() {
          return this.container;
        }, p.prototype.getMouseEventTarget = function() {
          return this.scroller;
        }, p.prototype.getTextAreaContainer = function() {
          return this.container;
        }, p.prototype.$moveTextAreaToCursor = function() {
          if (!this.$isMousePressed) {
            var v = this.textarea.style, k = this.$composition;
            if (!this.$keepTextAreaAtCursor && !k) {
              M.translate(this.textarea, -100, 0);
              return;
            }
            var m = this.$cursorLayer.$pixelPos;
            if (m) {
              k && k.markerRange && (m = this.$cursorLayer.getPixelPosition(k.markerRange.start, true));
              var y = this.layerConfig, g = m.top, d = m.left;
              g -= y.offset;
              var x = k && k.useTextareaForIME || c.isMobile ? this.lineHeight : 1;
              if (g < 0 || g > y.height - x) {
                M.translate(this.textarea, 0, 0);
                return;
              }
              var T = 1, E = this.$size.height - x;
              if (!k) g += this.lineHeight;
              else if (k.useTextareaForIME) {
                var R = this.textarea.value;
                T = this.characterWidth * this.session.$getStringScreenWidth(R)[0];
              } else g += this.lineHeight + 2;
              d -= this.scrollLeft, d > this.$size.scrollerWidth - T && (d = this.$size.scrollerWidth - T), d += this.gutterWidth + this.margin.left, M.setStyle(v, "height", x + "px"), M.setStyle(v, "width", T + "px"), M.translate(this.textarea, Math.min(d, this.$size.scrollerWidth - T), Math.min(g, E));
            }
          }
        }, p.prototype.getFirstVisibleRow = function() {
          return this.layerConfig.firstRow;
        }, p.prototype.getFirstFullyVisibleRow = function() {
          return this.layerConfig.firstRow + (this.layerConfig.offset === 0 ? 0 : 1);
        }, p.prototype.getLastFullyVisibleRow = function() {
          var v = this.layerConfig, k = v.lastRow, m = this.session.documentToScreenRow(k, 0) * v.lineHeight;
          return m - this.session.getScrollTop() > v.height - v.lineHeight ? k - 1 : k;
        }, p.prototype.getLastVisibleRow = function() {
          return this.layerConfig.lastRow;
        }, p.prototype.setPadding = function(v) {
          this.$padding = v, this.$textLayer.setPadding(v), this.$cursorLayer.setPadding(v), this.$markerFront.setPadding(v), this.$markerBack.setPadding(v), this.$loop.schedule(this.CHANGE_FULL), this.$updatePrintMargin();
        }, p.prototype.setScrollMargin = function(v, k, m, y) {
          var g = this.scrollMargin;
          g.top = v | 0, g.bottom = k | 0, g.right = y | 0, g.left = m | 0, g.v = g.top + g.bottom, g.h = g.left + g.right, g.top && this.scrollTop <= 0 && this.session && this.session.setScrollTop(-g.top), this.updateFull();
        }, p.prototype.setMargin = function(v, k, m, y) {
          var g = this.margin;
          g.top = v | 0, g.bottom = k | 0, g.right = y | 0, g.left = m | 0, g.v = g.top + g.bottom, g.h = g.left + g.right, this.$updateCachedSize(true, this.gutterWidth, this.$size.width, this.$size.height), this.updateFull();
        }, p.prototype.getHScrollBarAlwaysVisible = function() {
          return this.$hScrollBarAlwaysVisible;
        }, p.prototype.setHScrollBarAlwaysVisible = function(v) {
          this.setOption("hScrollBarAlwaysVisible", v);
        }, p.prototype.getVScrollBarAlwaysVisible = function() {
          return this.$vScrollBarAlwaysVisible;
        }, p.prototype.setVScrollBarAlwaysVisible = function(v) {
          this.setOption("vScrollBarAlwaysVisible", v);
        }, p.prototype.$updateScrollBarV = function() {
          var v = this.layerConfig.maxHeight, k = this.$size.scrollerHeight;
          !this.$maxLines && this.$scrollPastEnd && (v -= (k - this.lineHeight) * this.$scrollPastEnd, this.scrollTop > v - k && (v = this.scrollTop + k, this.scrollBarV.scrollTop = null)), this.scrollBarV.setScrollHeight(v + this.scrollMargin.v), this.scrollBarV.setScrollTop(this.scrollTop + this.scrollMargin.top);
        }, p.prototype.$updateScrollBarH = function() {
          this.scrollBarH.setScrollWidth(this.layerConfig.width + 2 * this.$padding + this.scrollMargin.h), this.scrollBarH.setScrollLeft(this.scrollLeft + this.scrollMargin.left);
        }, p.prototype.freeze = function() {
          this.$frozen = true;
        }, p.prototype.unfreeze = function() {
          this.$frozen = false;
        }, p.prototype.$renderChanges = function(v, k) {
          if (this.$changes && (v |= this.$changes, this.$changes = 0), !this.session || !this.container.offsetWidth || this.$frozen || !v && !k) {
            this.$changes |= v;
            return;
          }
          if (this.$size.$dirty) return this.$changes |= v, this.onResize(true);
          this.lineHeight || this.$textLayer.checkForSizeChanges(), this._signal("beforeRender", v), this.session && this.session.$bidiHandler && this.session.$bidiHandler.updateCharacterWidths(this.$fontMetrics);
          var m = this.layerConfig;
          if (v & this.CHANGE_FULL || v & this.CHANGE_SIZE || v & this.CHANGE_TEXT || v & this.CHANGE_LINES || v & this.CHANGE_SCROLL || v & this.CHANGE_H_SCROLL) {
            if (v |= this.$computeLayerConfig() | this.$loop.clear(), m.firstRow != this.layerConfig.firstRow && m.firstRowScreen == this.layerConfig.firstRowScreen) {
              var y = this.scrollTop + (m.firstRow - Math.max(this.layerConfig.firstRow, 0)) * this.lineHeight;
              y > 0 && (this.scrollTop = y, v = v | this.CHANGE_SCROLL, v |= this.$computeLayerConfig() | this.$loop.clear());
            }
            m = this.layerConfig, this.$updateScrollBarV(), v & this.CHANGE_H_SCROLL && this.$updateScrollBarH(), M.translate(this.content, -this.scrollLeft, -m.offset);
            var g = m.width + 2 * this.$padding + "px", d = m.minHeight + "px";
            M.setStyle(this.content.style, "width", g), M.setStyle(this.content.style, "height", d);
          }
          if (v & this.CHANGE_H_SCROLL && (M.translate(this.content, -this.scrollLeft, -m.offset), this.scroller.className = this.scrollLeft <= 0 ? "ace_scroller " : "ace_scroller ace_scroll-left ", this.enableKeyboardAccessibility && (this.scroller.className += this.keyboardFocusClassName)), v & this.CHANGE_FULL) {
            this.$changedLines = null, this.$textLayer.update(m), this.$showGutter && this.$gutterLayer.update(m), this.$customScrollbar && this.$scrollDecorator.$updateDecorators(m), this.$markerBack.update(m), this.$markerFront.update(m), this.$cursorLayer.update(m), this.$moveTextAreaToCursor(), this._signal("afterRender", v);
            return;
          }
          if (v & this.CHANGE_SCROLL) {
            this.$changedLines = null, v & this.CHANGE_TEXT || v & this.CHANGE_LINES ? this.$textLayer.update(m) : this.$textLayer.scrollLines(m), this.$showGutter && (v & this.CHANGE_GUTTER || v & this.CHANGE_LINES ? this.$gutterLayer.update(m) : this.$gutterLayer.scrollLines(m)), this.$customScrollbar && this.$scrollDecorator.$updateDecorators(m), this.$markerBack.update(m), this.$markerFront.update(m), this.$cursorLayer.update(m), this.$moveTextAreaToCursor(), this._signal("afterRender", v);
            return;
          }
          v & this.CHANGE_TEXT ? (this.$changedLines = null, this.$textLayer.update(m), this.$showGutter && this.$gutterLayer.update(m), this.$customScrollbar && this.$scrollDecorator.$updateDecorators(m)) : v & this.CHANGE_LINES ? ((this.$updateLines() || v & this.CHANGE_GUTTER && this.$showGutter) && this.$gutterLayer.update(m), this.$customScrollbar && this.$scrollDecorator.$updateDecorators(m)) : v & this.CHANGE_TEXT || v & this.CHANGE_GUTTER ? (this.$showGutter && this.$gutterLayer.update(m), this.$customScrollbar && this.$scrollDecorator.$updateDecorators(m)) : v & this.CHANGE_CURSOR && (this.$highlightGutterLine && this.$gutterLayer.updateLineHighlight(m), this.$customScrollbar && this.$scrollDecorator.$updateDecorators(m)), v & this.CHANGE_CURSOR && (this.$cursorLayer.update(m), this.$moveTextAreaToCursor()), v & (this.CHANGE_MARKER | this.CHANGE_MARKER_FRONT) && this.$markerFront.update(m), v & (this.CHANGE_MARKER | this.CHANGE_MARKER_BACK) && this.$markerBack.update(m), this._signal("afterRender", v);
        }, p.prototype.$autosize = function() {
          var v = this.session.getScreenLength() * this.lineHeight, k = this.$maxLines * this.lineHeight, m = Math.min(k, Math.max((this.$minLines || 1) * this.lineHeight, v)) + this.scrollMargin.v + (this.$extraHeight || 0);
          this.$horizScroll && (m += this.scrollBarH.getHeight()), this.$maxPixelHeight && m > this.$maxPixelHeight && (m = this.$maxPixelHeight);
          var y = m <= 2 * this.lineHeight, g = !y && v > k;
          if (m != this.desiredHeight || this.$size.height != this.desiredHeight || g != this.$vScroll) {
            g != this.$vScroll && (this.$vScroll = g, this.scrollBarV.setVisible(g));
            var d = this.container.clientWidth;
            this.container.style.height = m + "px", this.$updateCachedSize(true, this.$gutterWidth, d, m), this.desiredHeight = m, this._signal("autosize");
          }
        }, p.prototype.$computeLayerConfig = function() {
          var v = this.session, k = this.$size, m = k.height <= 2 * this.lineHeight, y = this.session.getScreenLength(), g = y * this.lineHeight, d = this.$getLongestLine(), x = !m && (this.$hScrollBarAlwaysVisible || k.scrollerWidth - d - 2 * this.$padding < 0), T = this.$horizScroll !== x;
          T && (this.$horizScroll = x, this.scrollBarH.setVisible(x));
          var E = this.$vScroll;
          this.$maxLines && this.lineHeight > 1 && (this.$autosize(), m = k.height <= 2 * this.lineHeight);
          var R = k.scrollerHeight + this.lineHeight, I = !this.$maxLines && this.$scrollPastEnd ? (k.scrollerHeight - this.lineHeight) * this.$scrollPastEnd : 0;
          g += I;
          var O = this.scrollMargin;
          this.session.setScrollTop(Math.max(-O.top, Math.min(this.scrollTop, g - k.scrollerHeight + O.bottom))), this.session.setScrollLeft(Math.max(-O.left, Math.min(this.scrollLeft, d + 2 * this.$padding - k.scrollerWidth + O.right)));
          var z = !m && (this.$vScrollBarAlwaysVisible || k.scrollerHeight - g + I < 0 || this.scrollTop > O.top), F = E !== z;
          F && (this.$vScroll = z, this.scrollBarV.setVisible(z));
          var B = this.scrollTop % this.lineHeight, W = Math.ceil(R / this.lineHeight) - 1, H = Math.max(0, Math.round((this.scrollTop - B) / this.lineHeight)), U = H + W, V, G, Y = this.lineHeight;
          H = v.screenToDocumentRow(H, 0);
          var J = v.getFoldLine(H);
          J && (H = J.start.row), V = v.documentToScreenRow(H, 0), G = v.getRowLength(H) * Y, U = Math.min(v.screenToDocumentRow(U, 0), v.getLength() - 1), R = k.scrollerHeight + v.getRowLength(U) * Y + G, B = this.scrollTop - V * Y, B < 0 && V > 0 && (V = Math.max(0, V + Math.floor(B / Y)), B = this.scrollTop - V * Y);
          var ee = 0;
          return (this.layerConfig.width != d || T) && (ee = this.CHANGE_H_SCROLL), (T || F) && (ee |= this.$updateCachedSize(true, this.gutterWidth, k.width, k.height), this._signal("scrollbarVisibilityChanged"), F && (d = this.$getLongestLine())), this.layerConfig = {
            width: d,
            padding: this.$padding,
            firstRow: H,
            firstRowScreen: V,
            lastRow: U,
            lineHeight: Y,
            characterWidth: this.characterWidth,
            minHeight: R,
            maxHeight: g,
            offset: B,
            gutterOffset: Y ? Math.max(0, Math.ceil((B + k.height - k.scrollerHeight) / Y)) : 0,
            height: this.$size.scrollerHeight
          }, this.session.$bidiHandler && this.session.$bidiHandler.setContentWidth(d - this.$padding), ee;
        }, p.prototype.$updateLines = function() {
          if (this.$changedLines) {
            var v = this.$changedLines.firstRow, k = this.$changedLines.lastRow;
            this.$changedLines = null;
            var m = this.layerConfig;
            if (!(v > m.lastRow + 1) && !(k < m.firstRow)) {
              if (k === 1 / 0) {
                this.$showGutter && this.$gutterLayer.update(m), this.$textLayer.update(m);
                return;
              }
              return this.$textLayer.updateLines(m, v, k), true;
            }
          }
        }, p.prototype.$getLongestLine = function() {
          var v = this.session.getScreenWidth();
          return this.showInvisibles && !this.session.$useWrapMode && (v += 1), this.$textLayer && v > this.$textLayer.MAX_LINE_LENGTH && (v = this.$textLayer.MAX_LINE_LENGTH + 30), Math.max(this.$size.scrollerWidth - 2 * this.$padding, Math.round(v * this.characterWidth));
        }, p.prototype.updateFrontMarkers = function() {
          this.$markerFront.setMarkers(this.session.getMarkers(true)), this.$loop.schedule(this.CHANGE_MARKER_FRONT);
        }, p.prototype.updateBackMarkers = function() {
          this.$markerBack.setMarkers(this.session.getMarkers()), this.$loop.schedule(this.CHANGE_MARKER_BACK);
        }, p.prototype.addGutterDecoration = function(v, k) {
          this.$gutterLayer.addGutterDecoration(v, k);
        }, p.prototype.removeGutterDecoration = function(v, k) {
          this.$gutterLayer.removeGutterDecoration(v, k);
        }, p.prototype.updateBreakpoints = function(v) {
          this._rows = v, this.$loop.schedule(this.CHANGE_GUTTER);
        }, p.prototype.setAnnotations = function(v) {
          this.$gutterLayer.setAnnotations(v), this.$loop.schedule(this.CHANGE_GUTTER);
        }, p.prototype.updateCursor = function() {
          this.$loop.schedule(this.CHANGE_CURSOR);
        }, p.prototype.hideCursor = function() {
          this.$cursorLayer.hideCursor();
        }, p.prototype.showCursor = function() {
          this.$cursorLayer.showCursor();
        }, p.prototype.scrollSelectionIntoView = function(v, k, m) {
          this.scrollCursorIntoView(v, m), this.scrollCursorIntoView(k, m);
        }, p.prototype.scrollCursorIntoView = function(v, k, m) {
          if (this.$size.scrollerHeight !== 0) {
            var y = this.$cursorLayer.getPixelPosition(v), g = y.left, d = y.top, x = m && m.top || 0, T = m && m.bottom || 0;
            this.$scrollAnimation && (this.$stopAnimation = true);
            var E = this.$scrollAnimation ? this.session.getScrollTop() : this.scrollTop;
            E + x > d ? (k && E + x > d + this.lineHeight && (d -= k * this.$size.scrollerHeight), d === 0 && (d = -this.scrollMargin.top), this.session.setScrollTop(d)) : E + this.$size.scrollerHeight - T < d + this.lineHeight && (k && E + this.$size.scrollerHeight - T < d - this.lineHeight && (d += k * this.$size.scrollerHeight), this.session.setScrollTop(d + this.lineHeight + T - this.$size.scrollerHeight));
            var R = this.scrollLeft, I = 2 * this.layerConfig.characterWidth;
            g - I < R ? (g -= I, g < this.$padding + I && (g = -this.scrollMargin.left), this.session.setScrollLeft(g)) : (g += I, R + this.$size.scrollerWidth < g + this.characterWidth ? this.session.setScrollLeft(Math.round(g + this.characterWidth - this.$size.scrollerWidth)) : R <= this.$padding && g - R < this.characterWidth && this.session.setScrollLeft(0));
          }
        }, p.prototype.getScrollTop = function() {
          return this.session.getScrollTop();
        }, p.prototype.getScrollLeft = function() {
          return this.session.getScrollLeft();
        }, p.prototype.getScrollTopRow = function() {
          return this.scrollTop / this.lineHeight;
        }, p.prototype.getScrollBottomRow = function() {
          return Math.max(0, Math.floor((this.scrollTop + this.$size.scrollerHeight) / this.lineHeight) - 1);
        }, p.prototype.scrollToRow = function(v) {
          this.session.setScrollTop(v * this.lineHeight);
        }, p.prototype.alignCursor = function(v, k) {
          typeof v == "number" && (v = {
            row: v,
            column: 0
          });
          var m = this.$cursorLayer.getPixelPosition(v), y = this.$size.scrollerHeight - this.lineHeight, g = m.top - y * (k || 0);
          return this.session.setScrollTop(g), g;
        }, p.prototype.$calcSteps = function(v, k) {
          var m = 0, y = this.STEPS, g = [], d = function(x, T, E) {
            return E * (Math.pow(x - 1, 3) + 1) + T;
          };
          for (m = 0; m < y; ++m) g.push(d(m / this.STEPS, v, k - v));
          return g;
        }, p.prototype.scrollToLine = function(v, k, m, y) {
          var g = this.$cursorLayer.getPixelPosition({
            row: v,
            column: 0
          }), d = g.top;
          k && (d -= this.$size.scrollerHeight / 2);
          var x = this.scrollTop;
          this.session.setScrollTop(d), m !== false && this.animateScrolling(x, y);
        }, p.prototype.animateScrolling = function(v, k) {
          var m = this.scrollTop;
          if (!this.$animatedScroll) return;
          var y = this;
          if (v == m) return;
          if (this.$scrollAnimation) {
            var g = this.$scrollAnimation.steps;
            if (g.length && (v = g[0], v == m)) return;
          }
          var d = y.$calcSteps(v, m);
          this.$scrollAnimation = {
            from: v,
            to: m,
            steps: d
          }, clearInterval(this.$timer), y.session.setScrollTop(d.shift()), y.session.$scrollTop = m;
          function x() {
            y.$timer = clearInterval(y.$timer), y.$scrollAnimation = null, y.$stopAnimation = false, k && k();
          }
          this.$timer = setInterval(function() {
            if (y.$stopAnimation) {
              x();
              return;
            }
            if (!y.session) return clearInterval(y.$timer);
            d.length ? (y.session.setScrollTop(d.shift()), y.session.$scrollTop = m) : m != null ? (y.session.$scrollTop = -1, y.session.setScrollTop(m), m = null) : x();
          }, 10);
        }, p.prototype.scrollToY = function(v) {
          this.scrollTop !== v && (this.$loop.schedule(this.CHANGE_SCROLL), this.scrollTop = v);
        }, p.prototype.scrollToX = function(v) {
          this.scrollLeft !== v && (this.scrollLeft = v), this.$loop.schedule(this.CHANGE_H_SCROLL);
        }, p.prototype.scrollTo = function(v, k) {
          this.session.setScrollTop(k), this.session.setScrollLeft(v);
        }, p.prototype.scrollBy = function(v, k) {
          k && this.session.setScrollTop(this.session.getScrollTop() + k), v && this.session.setScrollLeft(this.session.getScrollLeft() + v);
        }, p.prototype.isScrollableBy = function(v, k) {
          if (k < 0 && this.session.getScrollTop() >= 1 - this.scrollMargin.top || k > 0 && this.session.getScrollTop() + this.$size.scrollerHeight - this.layerConfig.maxHeight < -1 + this.scrollMargin.bottom || v < 0 && this.session.getScrollLeft() >= 1 - this.scrollMargin.left || v > 0 && this.session.getScrollLeft() + this.$size.scrollerWidth - this.layerConfig.width < -1 + this.scrollMargin.right) return true;
        }, p.prototype.pixelToScreenCoordinates = function(v, k) {
          var m;
          if (this.$hasCssTransforms) {
            m = {
              top: 0,
              left: 0
            };
            var y = this.$fontMetrics.transformCoordinates([
              v,
              k
            ]);
            v = y[1] - this.gutterWidth - this.margin.left, k = y[0];
          } else m = this.scroller.getBoundingClientRect();
          var g = v + this.scrollLeft - m.left - this.$padding, d = g / this.characterWidth, x = Math.floor((k + this.scrollTop - m.top) / this.lineHeight), T = this.$blockCursor ? Math.floor(d) : Math.round(d);
          return {
            row: x,
            column: T,
            side: d - T > 0 ? 1 : -1,
            offsetX: g
          };
        }, p.prototype.screenToTextCoordinates = function(v, k) {
          var m;
          if (this.$hasCssTransforms) {
            m = {
              top: 0,
              left: 0
            };
            var y = this.$fontMetrics.transformCoordinates([
              v,
              k
            ]);
            v = y[1] - this.gutterWidth - this.margin.left, k = y[0];
          } else m = this.scroller.getBoundingClientRect();
          var g = v + this.scrollLeft - m.left - this.$padding, d = g / this.characterWidth, x = this.$blockCursor ? Math.floor(d) : Math.round(d), T = (k + this.scrollTop - m.top) / this.lineHeight;
          return this.session.screenToDocumentPosition(T, Math.max(x, 0), g);
        }, p.prototype.textToScreenCoordinates = function(v, k) {
          var m = this.scroller.getBoundingClientRect(), y = this.session.documentToScreenPosition(v, k), g = this.$padding + (this.session.$bidiHandler.isBidiRow(y.row, v) ? this.session.$bidiHandler.getPosLeft(y.column) : Math.round(y.column * this.characterWidth)), d = y.row * this.lineHeight;
          return {
            pageX: m.left + g - this.scrollLeft,
            pageY: m.top + d - this.scrollTop
          };
        }, p.prototype.visualizeFocus = function() {
          M.addCssClass(this.container, "ace_focus");
        }, p.prototype.visualizeBlur = function() {
          M.removeCssClass(this.container, "ace_focus");
        }, p.prototype.showComposition = function(v) {
          this.$composition = v, v.cssText || (v.cssText = this.textarea.style.cssText), v.useTextareaForIME == null && (v.useTextareaForIME = this.$useTextareaForIME), this.$useTextareaForIME ? (M.addCssClass(this.textarea, "ace_composition"), this.textarea.style.cssText = "", this.$moveTextAreaToCursor(), this.$cursorLayer.element.style.display = "none") : v.markerId = this.session.addMarker(v.markerRange, "ace_composition_marker", "text");
        }, p.prototype.setCompositionText = function(v) {
          var k = this.session.selection.cursor;
          this.addToken(v, "composition_placeholder", k.row, k.column), this.$moveTextAreaToCursor();
        }, p.prototype.hideComposition = function() {
          if (this.$composition) {
            this.$composition.markerId && this.session.removeMarker(this.$composition.markerId), M.removeCssClass(this.textarea, "ace_composition"), this.textarea.style.cssText = this.$composition.cssText;
            var v = this.session.selection.cursor;
            this.removeExtraToken(v.row, v.column), this.$composition = null, this.$cursorLayer.element.style.display = "";
          }
        }, p.prototype.setGhostText = function(v, k) {
          var m = this.session.selection.cursor, y = k || {
            row: m.row,
            column: m.column
          };
          this.removeGhostText();
          var g = this.$calculateWrappedTextChunks(v, y);
          this.addToken(g[0].text, "ghost_text", y.row, y.column), this.$ghostText = {
            text: v,
            position: {
              row: y.row,
              column: y.column
            }
          };
          var d = M.createElement("div");
          if (g.length > 1) {
            var x = this.hideTokensAfterPosition(y.row, y.column), T;
            g.slice(1).forEach(function(F) {
              var B = M.createElement("div"), W = M.createElement("span");
              W.className = "ace_ghost_text", F.wrapped && (B.className = "ghost_text_line_wrapped"), F.text.length === 0 && (F.text = " "), W.appendChild(M.createTextNode(F.text)), B.appendChild(W), d.appendChild(B), T = B;
            }), x.forEach(function(F) {
              var B = M.createElement("span");
              w(F.type) || (B.className = "ace_" + F.type.replace(/\./g, " ace_")), B.appendChild(M.createTextNode(F.value)), T.appendChild(B);
            }), this.$ghostTextWidget = {
              el: d,
              row: y.row,
              column: y.column,
              className: "ace_ghost_text_container"
            }, this.session.widgetManager.addLineWidget(this.$ghostTextWidget);
            var E = this.$cursorLayer.getPixelPosition(y, true), R = this.container, I = R.getBoundingClientRect().height, O = g.length * this.lineHeight, z = O < I - E.top;
            if (z) return;
            O < I ? this.scrollBy(0, (g.length - 1) * this.lineHeight) : this.scrollToRow(y.row);
          }
        }, p.prototype.$calculateWrappedTextChunks = function(v, k) {
          var m = this.$size.scrollerWidth - this.$padding * 2, y = Math.floor(m / this.characterWidth) - 2;
          y = y <= 0 ? 60 : y;
          for (var g = v.split(/\r?\n/), d = [], x = 0; x < g.length; x++) {
            var T = this.session.$getDisplayTokens(g[x], k.column), E = this.session.$computeWrapSplits(T, y, this.session.$tabSize);
            if (E.length > 0) {
              var R = 0;
              E.push(g[x].length);
              for (var I = 0; I < E.length; I++) {
                var O = g[x].slice(R, E[I]);
                d.push({
                  text: O,
                  wrapped: true
                }), R = E[I];
              }
            } else d.push({
              text: g[x],
              wrapped: false
            });
          }
          return d;
        }, p.prototype.removeGhostText = function() {
          if (this.$ghostText) {
            var v = this.$ghostText.position;
            this.removeExtraToken(v.row, v.column), this.$ghostTextWidget && (this.session.widgetManager.removeLineWidget(this.$ghostTextWidget), this.$ghostTextWidget = null), this.$ghostText = null;
          }
        }, p.prototype.addToken = function(v, k, m, y) {
          var g = this.session;
          g.bgTokenizer.lines[m] = null;
          var d = {
            type: k,
            value: v
          }, x = g.getTokens(m);
          if (y == null || !x.length) x.push(d);
          else for (var T = 0, E = 0; E < x.length; E++) {
            var R = x[E];
            if (T += R.value.length, y <= T) {
              var I = R.value.length - (T - y), O = R.value.slice(0, I), z = R.value.slice(I);
              x.splice(E, 1, {
                type: R.type,
                value: O
              }, d, {
                type: R.type,
                value: z
              });
              break;
            }
          }
          this.updateLines(m, m);
        }, p.prototype.hideTokensAfterPosition = function(v, k) {
          for (var m = this.session.getTokens(v), y = 0, g = false, d = [], x = 0; x < m.length; x++) {
            var T = m[x];
            if (y += T.value.length, T.type !== "ghost_text") {
              if (g) {
                d.push({
                  type: T.type,
                  value: T.value
                }), T.type = "hidden_token";
                continue;
              }
              y === k && (g = true);
            }
          }
          return this.updateLines(v, v), d;
        }, p.prototype.removeExtraToken = function(v, k) {
          this.session.bgTokenizer.lines[v] = null, this.updateLines(v, v);
        }, p.prototype.setTheme = function(v, k) {
          var m = this;
          if (this.$themeId = v, m._dispatchEvent("themeChange", {
            theme: v
          }), !v || typeof v == "string") {
            var y = v || this.$options.theme.initialValue;
            a.loadModule([
              "theme",
              y
            ], g);
          } else g(v);
          function g(d) {
            if (m.$themeId != v) return k && k();
            if (!d || !d.cssClass) throw new Error("couldn't load module " + v + " or it didn't call define");
            d.$id && (m.$themeId = d.$id), M.importCssString(d.cssText, d.cssClass, m.container), m.theme && M.removeCssClass(m.container, m.theme.cssClass);
            var x = "padding" in d ? d.padding : "padding" in (m.theme || {}) ? 4 : m.$padding;
            if (m.$padding && x != m.$padding && m.setPadding(x), m.$gutterLayer) {
              var T = d.$showGutterCursorMarker;
              T && !m.$gutterLayer.$showCursorMarker ? m.$gutterLayer.$showCursorMarker = "theme" : !T && m.$gutterLayer.$showCursorMarker == "theme" && (m.$gutterLayer.$showCursorMarker = null);
            }
            m.$theme = d.cssClass, m.theme = d, M.addCssClass(m.container, d.cssClass), M.setCssClass(m.container, "ace_dark", d.isDark), m.$size && (m.$size.width = 0, m.$updateSizeAsync()), m._dispatchEvent("themeLoaded", {
              theme: d
            }), k && k(), c.isSafari && m.scroller && (m.scroller.style.background = "red", m.scroller.style.background = "");
          }
        }, p.prototype.getTheme = function() {
          return this.$themeId;
        }, p.prototype.setStyle = function(v, k) {
          M.setCssClass(this.container, v, k !== false);
        }, p.prototype.unsetStyle = function(v) {
          M.removeCssClass(this.container, v);
        }, p.prototype.setCursorStyle = function(v) {
          M.setStyle(this.scroller.style, "cursor", v);
        }, p.prototype.setMouseCursor = function(v) {
          M.setStyle(this.scroller.style, "cursor", v);
        }, p.prototype.attachToShadowRoot = function() {
          M.importCssString(b, "ace_editor.css", this.container);
        }, p.prototype.destroy = function() {
          this.freeze(), this.$fontMetrics.destroy(), this.$cursorLayer.destroy(), this.removeAllListeners(), this.container.textContent = "", this.setOption("useResizeObserver", false);
        }, p.prototype.$updateCustomScrollbar = function(v) {
          var k = this;
          this.$horizScroll = this.$vScroll = null, this.scrollBarV.element.remove(), this.scrollBarH.element.remove(), v === true ? (this.scrollBarV = new s(this.container, this), this.scrollBarH = new t(this.container, this), this.scrollBarV.setHeight(this.$size.scrollerHeight), this.scrollBarH.setWidth(this.$size.scrollerWidth), this.scrollBarV.addEventListener("scroll", function(m) {
            k.$scrollAnimation || k.session.setScrollTop(m.data - k.scrollMargin.top);
          }), this.scrollBarH.addEventListener("scroll", function(m) {
            k.$scrollAnimation || k.session.setScrollLeft(m.data - k.scrollMargin.left);
          }), this.$scrollDecorator ? (this.$scrollDecorator.setScrollBarV(this.scrollBarV), this.$scrollDecorator.$updateDecorators()) : (this.$scrollDecorator = new f(this.scrollBarV, this), this.$scrollDecorator.$updateDecorators())) : (this.scrollBarV = new e(this.container, this), this.scrollBarH = new n(this.container, this), this.scrollBarV.addEventListener("scroll", function(m) {
            k.$scrollAnimation || k.session.setScrollTop(m.data - k.scrollMargin.top);
          }), this.scrollBarH.addEventListener("scroll", function(m) {
            k.$scrollAnimation || k.session.setScrollLeft(m.data - k.scrollMargin.left);
          }));
        }, p.prototype.$addResizeObserver = function() {
          if (!(!window.ResizeObserver || this.$resizeObserver)) {
            var v = this;
            this.$resizeTimer = $.delayedCall(function() {
              v.destroyed || v.onResize();
            }, 50), this.$resizeObserver = new window.ResizeObserver(function(k) {
              var m = k[0].contentRect.width, y = k[0].contentRect.height;
              Math.abs(v.$size.width - m) > 1 || Math.abs(v.$size.height - y) > 1 ? v.$resizeTimer.delay() : v.$resizeTimer.cancel();
            }), this.$resizeObserver.observe(this.container);
          }
        }, p;
      })();
      C.prototype.CHANGE_CURSOR = 1, C.prototype.CHANGE_MARKER = 2, C.prototype.CHANGE_GUTTER = 4, C.prototype.CHANGE_SCROLL = 8, C.prototype.CHANGE_LINES = 16, C.prototype.CHANGE_TEXT = 32, C.prototype.CHANGE_SIZE = 64, C.prototype.CHANGE_MARKER_BACK = 128, C.prototype.CHANGE_MARKER_FRONT = 256, C.prototype.CHANGE_FULL = 512, C.prototype.CHANGE_H_SCROLL = 1024, C.prototype.$changes = 0, C.prototype.$padding = null, C.prototype.$frozen = false, C.prototype.STEPS = 8, L.implement(C.prototype, S), a.defineOptions(C.prototype, "renderer", {
        useResizeObserver: {
          set: function(p) {
            !p && this.$resizeObserver ? (this.$resizeObserver.disconnect(), this.$resizeTimer.cancel(), this.$resizeTimer = this.$resizeObserver = null) : p && !this.$resizeObserver && this.$addResizeObserver();
          }
        },
        animatedScroll: {
          initialValue: false
        },
        showInvisibles: {
          set: function(p) {
            this.$textLayer.setShowInvisibles(p) && this.$loop.schedule(this.CHANGE_TEXT);
          },
          initialValue: false
        },
        showPrintMargin: {
          set: function() {
            this.$updatePrintMargin();
          },
          initialValue: true
        },
        printMarginColumn: {
          set: function() {
            this.$updatePrintMargin();
          },
          initialValue: 80
        },
        printMargin: {
          set: function(p) {
            typeof p == "number" && (this.$printMarginColumn = p), this.$showPrintMargin = !!p, this.$updatePrintMargin();
          },
          get: function() {
            return this.$showPrintMargin && this.$printMarginColumn;
          }
        },
        showGutter: {
          set: function(p) {
            this.$gutter.style.display = p ? "block" : "none", this.$loop.schedule(this.CHANGE_FULL), this.onGutterResize();
          },
          initialValue: true
        },
        useSvgGutterIcons: {
          set: function(p) {
            this.$gutterLayer.$useSvgGutterIcons = p;
          },
          initialValue: false
        },
        showFoldedAnnotations: {
          set: function(p) {
            this.$gutterLayer.$showFoldedAnnotations = p;
          },
          initialValue: false
        },
        fadeFoldWidgets: {
          set: function(p) {
            M.setCssClass(this.$gutter, "ace_fade-fold-widgets", p);
          },
          initialValue: false
        },
        showFoldWidgets: {
          set: function(p) {
            this.$gutterLayer.setShowFoldWidgets(p), this.$loop.schedule(this.CHANGE_GUTTER);
          },
          initialValue: true
        },
        displayIndentGuides: {
          set: function(p) {
            this.$textLayer.setDisplayIndentGuides(p) && this.$loop.schedule(this.CHANGE_TEXT);
          },
          initialValue: true
        },
        highlightIndentGuides: {
          set: function(p) {
            this.$textLayer.setHighlightIndentGuides(p) == true ? this.$textLayer.$highlightIndentGuide() : this.$textLayer.$clearActiveIndentGuide(this.$textLayer.$lines.cells);
          },
          initialValue: true
        },
        highlightGutterLine: {
          set: function(p) {
            this.$gutterLayer.setHighlightGutterLine(p), this.$loop.schedule(this.CHANGE_GUTTER);
          },
          initialValue: true
        },
        hScrollBarAlwaysVisible: {
          set: function(p) {
            (!this.$hScrollBarAlwaysVisible || !this.$horizScroll) && this.$loop.schedule(this.CHANGE_SCROLL);
          },
          initialValue: false
        },
        vScrollBarAlwaysVisible: {
          set: function(p) {
            (!this.$vScrollBarAlwaysVisible || !this.$vScroll) && this.$loop.schedule(this.CHANGE_SCROLL);
          },
          initialValue: false
        },
        fontSize: {
          set: function(p) {
            typeof p == "number" && (p = p + "px"), this.container.style.fontSize = p, this.updateFontSize();
          },
          initialValue: 12
        },
        fontFamily: {
          set: function(p) {
            this.container.style.fontFamily = p, this.updateFontSize();
          }
        },
        maxLines: {
          set: function(p) {
            this.updateFull();
          }
        },
        minLines: {
          set: function(p) {
            this.$minLines < 562949953421311 || (this.$minLines = 0), this.updateFull();
          }
        },
        maxPixelHeight: {
          set: function(p) {
            this.updateFull();
          },
          initialValue: 0
        },
        scrollPastEnd: {
          set: function(p) {
            p = +p || 0, this.$scrollPastEnd != p && (this.$scrollPastEnd = p, this.$loop.schedule(this.CHANGE_SCROLL));
          },
          initialValue: 0,
          handlesSet: true
        },
        fixedWidthGutter: {
          set: function(p) {
            this.$gutterLayer.$fixedWidth = !!p, this.$loop.schedule(this.CHANGE_GUTTER);
          }
        },
        customScrollbar: {
          set: function(p) {
            this.$updateCustomScrollbar(p);
          },
          initialValue: false
        },
        theme: {
          set: function(p) {
            this.setTheme(p);
          },
          get: function() {
            return this.$themeId || this.theme;
          },
          initialValue: "./theme/textmate",
          handlesSet: true
        },
        hasCssTransforms: {},
        useTextareaForIME: {
          initialValue: !c.isMobile && !c.isIE
        }
      }), _.VirtualRenderer = C;
    }), ace.define("ace/worker/worker_client", [
      "require",
      "exports",
      "module",
      "ace/lib/oop",
      "ace/lib/net",
      "ace/lib/event_emitter",
      "ace/config"
    ], function(A, _, N) {
      var L = A("../lib/oop"), M = A("../lib/net"), $ = A("../lib/event_emitter").EventEmitter, a = A("../config");
      function l(n) {
        var e = "importScripts('" + M.qualifyURL(n) + "');";
        try {
          return new Blob([
            e
          ], {
            type: "application/javascript"
          });
        } catch {
          var t = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder, s = new t();
          return s.append(e), s.getBlob("application/javascript");
        }
      }
      function i(n) {
        if (typeof Worker > "u") return {
          postMessage: function() {
          },
          terminate: function() {
          }
        };
        if (a.get("loadWorkerFromBlob")) {
          var e = l(n), t = window.URL || window.webkitURL, s = t.createObjectURL(e);
          return new Worker(s);
        }
        return new Worker(n);
      }
      var o = function(n) {
        n.postMessage || (n = this.$createWorkerFromOldConfig.apply(this, arguments)), this.$worker = n, this.$sendDeltaQueue = this.$sendDeltaQueue.bind(this), this.changeListener = this.changeListener.bind(this), this.onMessage = this.onMessage.bind(this), this.callbackId = 1, this.callbacks = {}, this.$worker.onmessage = this.onMessage;
      };
      (function() {
        L.implement(this, $), this.$createWorkerFromOldConfig = function(n, e, t, s, h) {
          if (A.nameToUrl && !A.toUrl && (A.toUrl = A.nameToUrl), a.get("packaged") || !A.toUrl) s = s || a.moduleUrl(e, "worker");
          else {
            var u = this.$normalizePath;
            s = s || u(A.toUrl("ace/worker/worker.js", null, "_"));
            var S = {};
            n.forEach(function(b) {
              S[b] = u(A.toUrl(b, null, "_").replace(/(\.js)?(\?.*)?$/, ""));
            });
          }
          return this.$worker = i(s), h && this.send("importScripts", h), this.$worker.postMessage({
            init: true,
            tlns: S,
            module: e,
            classname: t
          }), this.$worker;
        }, this.onMessage = function(n) {
          var e = n.data;
          switch (e.type) {
            case "event":
              this._signal(e.name, {
                data: e.data
              });
              break;
            case "call":
              var t = this.callbacks[e.id];
              t && (t(e.data), delete this.callbacks[e.id]);
              break;
            case "error":
              this.reportError(e.data);
              break;
            case "log":
              window.console && console.log && console.log.apply(console, e.data);
              break;
          }
        }, this.reportError = function(n) {
          window.console && console.error && console.error(n);
        }, this.$normalizePath = function(n) {
          return M.qualifyURL(n);
        }, this.terminate = function() {
          this._signal("terminate", {}), this.deltaQueue = null, this.$worker.terminate(), this.$worker.onerror = function(n) {
            n.preventDefault();
          }, this.$worker = null, this.$doc && this.$doc.off("change", this.changeListener), this.$doc = null;
        }, this.send = function(n, e) {
          this.$worker.postMessage({
            command: n,
            args: e
          });
        }, this.call = function(n, e, t) {
          if (t) {
            var s = this.callbackId++;
            this.callbacks[s] = t, e.push(s);
          }
          this.send(n, e);
        }, this.emit = function(n, e) {
          try {
            e.data && e.data.err && (e.data.err = {
              message: e.data.err.message,
              stack: e.data.err.stack,
              code: e.data.err.code
            }), this.$worker && this.$worker.postMessage({
              event: n,
              data: {
                data: e.data
              }
            });
          } catch (t) {
            console.error(t.stack);
          }
        }, this.attachToDocument = function(n) {
          this.$doc && this.terminate(), this.$doc = n, this.call("setValue", [
            n.getValue()
          ]), n.on("change", this.changeListener, true);
        }, this.changeListener = function(n) {
          this.deltaQueue || (this.deltaQueue = [], setTimeout(this.$sendDeltaQueue, 0)), n.action == "insert" ? this.deltaQueue.push(n.start, n.lines) : this.deltaQueue.push(n.start, n.end);
        }, this.$sendDeltaQueue = function() {
          var n = this.deltaQueue;
          n && (this.deltaQueue = null, n.length > 50 && n.length > this.$doc.getLength() >> 1 ? this.call("setValue", [
            this.$doc.getValue()
          ]) : this.emit("change", {
            data: n
          }));
        };
      }).call(o.prototype);
      var r = function(n, e, t) {
        var s = null, h = false, u = Object.create($), S = [], b = new o({
          messageBuffer: S,
          terminate: function() {
          },
          postMessage: function(c) {
            S.push(c), s && (h ? setTimeout(f) : f());
          }
        });
        b.setEmitSync = function(c) {
          h = c;
        };
        var f = function() {
          var c = S.shift();
          c.command ? s[c.command].apply(s, c.args) : c.event && u._signal(c.event, c.data);
        };
        return u.postMessage = function(c) {
          b.onMessage({
            data: c
          });
        }, u.callback = function(c, w) {
          this.postMessage({
            type: "call",
            id: w,
            data: c
          });
        }, u.emit = function(c, w) {
          this.postMessage({
            type: "event",
            name: c,
            data: w
          });
        }, a.loadModule([
          "worker",
          e
        ], function(c) {
          for (s = new c[t](u); S.length; ) f();
        }), b;
      };
      _.UIWorkerClient = r, _.WorkerClient = o, _.createWorker = i;
    }), ace.define("ace/placeholder", [
      "require",
      "exports",
      "module",
      "ace/range",
      "ace/lib/event_emitter",
      "ace/lib/oop"
    ], function(A, _, N) {
      var L = A("./range").Range, M = A("./lib/event_emitter").EventEmitter, $ = A("./lib/oop"), a = (function() {
        function l(i, o, r, n, e, t) {
          var s = this;
          this.length = o, this.session = i, this.doc = i.getDocument(), this.mainClass = e, this.othersClass = t, this.$onUpdate = this.onUpdate.bind(this), this.doc.on("change", this.$onUpdate, true), this.$others = n, this.$onCursorChange = function() {
            setTimeout(function() {
              s.onCursorChange();
            });
          }, this.$pos = r;
          var h = i.getUndoManager().$undoStack || i.getUndoManager().$undostack || {
            length: -1
          };
          this.$undoStackDepth = h.length, this.setup(), i.selection.on("changeCursor", this.$onCursorChange);
        }
        return l.prototype.setup = function() {
          var i = this, o = this.doc, r = this.session;
          this.selectionBefore = r.selection.toJSON(), r.selection.inMultiSelectMode && r.selection.toSingleRange(), this.pos = o.createAnchor(this.$pos.row, this.$pos.column);
          var n = this.pos;
          n.$insertRight = true, n.detach(), n.markerId = r.addMarker(new L(n.row, n.column, n.row, n.column + this.length), this.mainClass, null, false), this.others = [], this.$others.forEach(function(e) {
            var t = o.createAnchor(e.row, e.column);
            t.$insertRight = true, t.detach(), i.others.push(t);
          }), r.setUndoSelect(false);
        }, l.prototype.showOtherMarkers = function() {
          if (!this.othersActive) {
            var i = this.session, o = this;
            this.othersActive = true, this.others.forEach(function(r) {
              r.markerId = i.addMarker(new L(r.row, r.column, r.row, r.column + o.length), o.othersClass, null, false);
            });
          }
        }, l.prototype.hideOtherMarkers = function() {
          if (this.othersActive) {
            this.othersActive = false;
            for (var i = 0; i < this.others.length; i++) this.session.removeMarker(this.others[i].markerId);
          }
        }, l.prototype.onUpdate = function(i) {
          if (this.$updating) return this.updateAnchors(i);
          var o = i;
          if (o.start.row === o.end.row && o.start.row === this.pos.row) {
            this.$updating = true;
            var r = i.action === "insert" ? o.end.column - o.start.column : o.start.column - o.end.column, n = o.start.column >= this.pos.column && o.start.column <= this.pos.column + this.length + 1, e = o.start.column - this.pos.column;
            if (this.updateAnchors(i), n && (this.length += r), n && !this.session.$fromUndo) {
              if (i.action === "insert") for (var t = this.others.length - 1; t >= 0; t--) {
                var s = this.others[t], h = {
                  row: s.row,
                  column: s.column + e
                };
                this.doc.insertMergedLines(h, i.lines);
              }
              else if (i.action === "remove") for (var t = this.others.length - 1; t >= 0; t--) {
                var s = this.others[t], h = {
                  row: s.row,
                  column: s.column + e
                };
                this.doc.remove(new L(h.row, h.column, h.row, h.column - r));
              }
            }
            this.$updating = false, this.updateMarkers();
          }
        }, l.prototype.updateAnchors = function(i) {
          this.pos.onChange(i);
          for (var o = this.others.length; o--; ) this.others[o].onChange(i);
          this.updateMarkers();
        }, l.prototype.updateMarkers = function() {
          if (!this.$updating) {
            var i = this, o = this.session, r = function(e, t) {
              o.removeMarker(e.markerId), e.markerId = o.addMarker(new L(e.row, e.column, e.row, e.column + i.length), t, null, false);
            };
            r(this.pos, this.mainClass);
            for (var n = this.others.length; n--; ) r(this.others[n], this.othersClass);
          }
        }, l.prototype.onCursorChange = function(i) {
          if (!(this.$updating || !this.session)) {
            var o = this.session.selection.getCursor();
            o.row === this.pos.row && o.column >= this.pos.column && o.column <= this.pos.column + this.length ? (this.showOtherMarkers(), this._emit("cursorEnter", i)) : (this.hideOtherMarkers(), this._emit("cursorLeave", i));
          }
        }, l.prototype.detach = function() {
          this.session.removeMarker(this.pos && this.pos.markerId), this.hideOtherMarkers(), this.doc.off("change", this.$onUpdate), this.session.selection.off("changeCursor", this.$onCursorChange), this.session.setUndoSelect(true), this.session = null;
        }, l.prototype.cancel = function() {
          if (this.$undoStackDepth !== -1) {
            for (var i = this.session.getUndoManager(), o = (i.$undoStack || i.$undostack).length - this.$undoStackDepth, r = 0; r < o; r++) i.undo(this.session, true);
            this.selectionBefore && this.session.selection.fromJSON(this.selectionBefore);
          }
        }, l;
      })();
      $.implement(a.prototype, M), _.PlaceHolder = a;
    }), ace.define("ace/mouse/multi_select_handler", [
      "require",
      "exports",
      "module",
      "ace/lib/event",
      "ace/lib/useragent"
    ], function(A, _, N) {
      var L = A("../lib/event"), M = A("../lib/useragent");
      function $(l, i) {
        return l.row == i.row && l.column == i.column;
      }
      function a(l) {
        var i = l.domEvent, o = i.altKey, r = i.shiftKey, n = i.ctrlKey, e = l.getAccelKey(), t = l.getButton();
        if (n && M.isMac && (t = i.button), l.editor.inMultiSelectMode && t == 2) {
          l.editor.textInput.onContextMenu(l.domEvent);
          return;
        }
        if (!n && !o && !e) {
          t === 0 && l.editor.inMultiSelectMode && l.editor.exitMultiSelectMode();
          return;
        }
        if (t === 0) {
          var s = l.editor, h = s.selection, u = s.inMultiSelectMode, S = l.getDocumentPosition(), b = h.getCursor(), f = l.inSelection() || h.isEmpty() && $(S, b), c = l.x, w = l.y, C = function(O) {
            c = O.clientX, w = O.clientY;
          }, p = s.session, v = s.renderer.pixelToScreenCoordinates(c, w), k = v, m;
          if (s.$mouseHandler.$enableJumpToDef) n && o || e && o ? m = r ? "block" : "add" : o && s.$blockSelectEnabled && (m = "block");
          else if (e && !o) {
            if (m = "add", !u && r) return;
          } else o && s.$blockSelectEnabled && (m = "block");
          if (m && M.isMac && i.ctrlKey && s.$mouseHandler.cancelContextMenu(), m == "add") {
            if (!u && f) return;
            if (!u) {
              var y = h.toOrientedRange();
              s.addSelectionMarker(y);
            }
            var g = h.rangeList.rangeAtPoint(S);
            s.inVirtualSelectionMode = true, r && (g = null, y = h.ranges[0] || y, s.removeSelectionMarker(y)), s.once("mouseup", function() {
              var O = h.toOrientedRange();
              g && O.isEmpty() && $(g.cursor, O.cursor) ? h.substractPoint(O.cursor) : (r ? h.substractPoint(y.cursor) : y && (s.removeSelectionMarker(y), h.addRange(y)), h.addRange(O)), s.inVirtualSelectionMode = false;
            });
          } else if (m == "block") {
            l.stop(), s.inVirtualSelectionMode = true;
            var d, x = [], T = function() {
              var O = s.renderer.pixelToScreenCoordinates(c, w), z = p.screenToDocumentPosition(O.row, O.column, O.offsetX);
              $(k, O) && $(z, h.lead) || (k = O, s.selection.moveToPosition(z), s.renderer.scrollCursorIntoView(), s.removeSelectionMarkers(x), x = h.rectangularRangeBlock(k, v), s.$mouseHandler.$clickSelection && x.length == 1 && x[0].isEmpty() && (x[0] = s.$mouseHandler.$clickSelection.clone()), x.forEach(s.addSelectionMarker, s), s.updateSelectionMarkers());
            };
            u && !e ? h.toSingleRange() : !u && e && (d = h.toOrientedRange(), s.addSelectionMarker(d)), r ? v = p.documentToScreenPosition(h.lead) : h.moveToPosition(S), k = {
              row: -1,
              column: -1
            };
            var E = function(O) {
              T(), clearInterval(I), s.removeSelectionMarkers(x), x.length || (x = [
                h.toOrientedRange()
              ]), d && (s.removeSelectionMarker(d), h.toSingleRange(d));
              for (var z = 0; z < x.length; z++) h.addRange(x[z]);
              s.inVirtualSelectionMode = false, s.$mouseHandler.$clickSelection = null;
            }, R = T;
            L.capture(s.container, C, E);
            var I = setInterval(function() {
              R();
            }, 20);
            return l.preventDefault();
          }
        }
      }
      _.onMouseDown = a;
    }), ace.define("ace/commands/multi_select_commands", [
      "require",
      "exports",
      "module",
      "ace/keyboard/hash_handler"
    ], function(A, _, N) {
      _.defaultCommands = [
        {
          name: "addCursorAbove",
          description: "Add cursor above",
          exec: function(M) {
            M.selectMoreLines(-1);
          },
          bindKey: {
            win: "Ctrl-Alt-Up",
            mac: "Ctrl-Alt-Up"
          },
          scrollIntoView: "cursor",
          readOnly: true
        },
        {
          name: "addCursorBelow",
          description: "Add cursor below",
          exec: function(M) {
            M.selectMoreLines(1);
          },
          bindKey: {
            win: "Ctrl-Alt-Down",
            mac: "Ctrl-Alt-Down"
          },
          scrollIntoView: "cursor",
          readOnly: true
        },
        {
          name: "addCursorAboveSkipCurrent",
          description: "Add cursor above (skip current)",
          exec: function(M) {
            M.selectMoreLines(-1, true);
          },
          bindKey: {
            win: "Ctrl-Alt-Shift-Up",
            mac: "Ctrl-Alt-Shift-Up"
          },
          scrollIntoView: "cursor",
          readOnly: true
        },
        {
          name: "addCursorBelowSkipCurrent",
          description: "Add cursor below (skip current)",
          exec: function(M) {
            M.selectMoreLines(1, true);
          },
          bindKey: {
            win: "Ctrl-Alt-Shift-Down",
            mac: "Ctrl-Alt-Shift-Down"
          },
          scrollIntoView: "cursor",
          readOnly: true
        },
        {
          name: "selectMoreBefore",
          description: "Select more before",
          exec: function(M) {
            M.selectMore(-1);
          },
          bindKey: {
            win: "Ctrl-Alt-Left",
            mac: "Ctrl-Alt-Left"
          },
          scrollIntoView: "cursor",
          readOnly: true
        },
        {
          name: "selectMoreAfter",
          description: "Select more after",
          exec: function(M) {
            M.selectMore(1);
          },
          bindKey: {
            win: "Ctrl-Alt-Right",
            mac: "Ctrl-Alt-Right"
          },
          scrollIntoView: "cursor",
          readOnly: true
        },
        {
          name: "selectNextBefore",
          description: "Select next before",
          exec: function(M) {
            M.selectMore(-1, true);
          },
          bindKey: {
            win: "Ctrl-Alt-Shift-Left",
            mac: "Ctrl-Alt-Shift-Left"
          },
          scrollIntoView: "cursor",
          readOnly: true
        },
        {
          name: "selectNextAfter",
          description: "Select next after",
          exec: function(M) {
            M.selectMore(1, true);
          },
          bindKey: {
            win: "Ctrl-Alt-Shift-Right",
            mac: "Ctrl-Alt-Shift-Right"
          },
          scrollIntoView: "cursor",
          readOnly: true
        },
        {
          name: "toggleSplitSelectionIntoLines",
          description: "Split selection into lines",
          exec: function(M) {
            M.multiSelect.rangeCount > 1 ? M.multiSelect.joinSelections() : M.multiSelect.splitIntoLines();
          },
          bindKey: {
            win: "Ctrl-Alt-L",
            mac: "Ctrl-Alt-L"
          },
          readOnly: true
        },
        {
          name: "splitSelectionIntoLines",
          description: "Split into lines",
          exec: function(M) {
            M.multiSelect.splitIntoLines();
          },
          readOnly: true
        },
        {
          name: "alignCursors",
          description: "Align cursors",
          exec: function(M) {
            M.alignCursors();
          },
          bindKey: {
            win: "Ctrl-Alt-A",
            mac: "Ctrl-Alt-A"
          },
          scrollIntoView: "cursor"
        },
        {
          name: "findAll",
          description: "Find all",
          exec: function(M) {
            M.findAll();
          },
          bindKey: {
            win: "Ctrl-Alt-K",
            mac: "Ctrl-Alt-G"
          },
          scrollIntoView: "cursor",
          readOnly: true
        }
      ], _.multiSelectCommands = [
        {
          name: "singleSelection",
          description: "Single selection",
          bindKey: "esc",
          exec: function(M) {
            M.exitMultiSelectMode();
          },
          scrollIntoView: "cursor",
          readOnly: true,
          isAvailable: function(M) {
            return M && M.inMultiSelectMode;
          }
        }
      ];
      var L = A("../keyboard/hash_handler").HashHandler;
      _.keyboardHandler = new L(_.multiSelectCommands);
    }), ace.define("ace/multi_select", [
      "require",
      "exports",
      "module",
      "ace/range_list",
      "ace/range",
      "ace/selection",
      "ace/mouse/multi_select_handler",
      "ace/lib/event",
      "ace/lib/lang",
      "ace/commands/multi_select_commands",
      "ace/search",
      "ace/edit_session",
      "ace/editor",
      "ace/config"
    ], function(A, _, N) {
      var L = A("./range_list").RangeList, M = A("./range").Range, $ = A("./selection").Selection, a = A("./mouse/multi_select_handler").onMouseDown, l = A("./lib/event"), i = A("./lib/lang"), o = A("./commands/multi_select_commands");
      _.commands = o.defaultCommands.concat(o.multiSelectCommands);
      var r = A("./search").Search, n = new r();
      function e(b, f, c) {
        return n.$options.wrap = true, n.$options.needle = f, n.$options.backwards = c == -1, n.find(b);
      }
      var t = A("./edit_session").EditSession;
      (function() {
        this.getSelectionMarkers = function() {
          return this.$selectionMarkers;
        };
      }).call(t.prototype), (function() {
        this.ranges = null, this.rangeList = null, this.addRange = function(b, f) {
          if (b) {
            if (!this.inMultiSelectMode && this.rangeCount === 0) {
              var c = this.toOrientedRange();
              if (this.rangeList.add(c), this.rangeList.add(b), this.rangeList.ranges.length != 2) return this.rangeList.removeAll(), f || this.fromOrientedRange(b);
              this.rangeList.removeAll(), this.rangeList.add(c), this.$onAddRange(c);
            }
            b.cursor || (b.cursor = b.end);
            var w = this.rangeList.add(b);
            return this.$onAddRange(b), w.length && this.$onRemoveRange(w), this.rangeCount > 1 && !this.inMultiSelectMode && (this._signal("multiSelect"), this.inMultiSelectMode = true, this.session.$undoSelect = false, this.rangeList.attach(this.session)), f || this.fromOrientedRange(b);
          }
        }, this.toSingleRange = function(b) {
          b = b || this.ranges[0];
          var f = this.rangeList.removeAll();
          f.length && this.$onRemoveRange(f), b && this.fromOrientedRange(b);
        }, this.substractPoint = function(b) {
          var f = this.rangeList.substractPoint(b);
          if (f) return this.$onRemoveRange(f), f[0];
        }, this.mergeOverlappingRanges = function() {
          var b = this.rangeList.merge();
          b.length && this.$onRemoveRange(b);
        }, this.$onAddRange = function(b) {
          this.rangeCount = this.rangeList.ranges.length, this.ranges.unshift(b), this._signal("addRange", {
            range: b
          });
        }, this.$onRemoveRange = function(b) {
          if (this.rangeCount = this.rangeList.ranges.length, this.rangeCount == 1 && this.inMultiSelectMode) {
            var f = this.rangeList.ranges.pop();
            b.push(f), this.rangeCount = 0;
          }
          for (var c = b.length; c--; ) {
            var w = this.ranges.indexOf(b[c]);
            this.ranges.splice(w, 1);
          }
          this._signal("removeRange", {
            ranges: b
          }), this.rangeCount === 0 && this.inMultiSelectMode && (this.inMultiSelectMode = false, this._signal("singleSelect"), this.session.$undoSelect = true, this.rangeList.detach(this.session)), f = f || this.ranges[0], f && !f.isEqual(this.getRange()) && this.fromOrientedRange(f);
        }, this.$initRangeList = function() {
          this.rangeList || (this.rangeList = new L(), this.ranges = [], this.rangeCount = 0);
        }, this.getAllRanges = function() {
          return this.rangeCount ? this.rangeList.ranges.concat() : [
            this.getRange()
          ];
        }, this.splitIntoLines = function() {
          for (var b = this.ranges.length ? this.ranges : [
            this.getRange()
          ], f = [], c = 0; c < b.length; c++) {
            var w = b[c], C = w.start.row, p = w.end.row;
            if (C === p) f.push(w.clone());
            else {
              for (f.push(new M(C, w.start.column, C, this.session.getLine(C).length)); ++C < p; ) f.push(this.getLineRange(C, true));
              f.push(new M(p, 0, p, w.end.column));
            }
            c == 0 && !this.isBackwards() && (f = f.reverse());
          }
          this.toSingleRange();
          for (var c = f.length; c--; ) this.addRange(f[c]);
        }, this.joinSelections = function() {
          var b = this.rangeList.ranges, f = b[b.length - 1], c = M.fromPoints(b[0].start, f.end);
          this.toSingleRange(), this.setSelectionRange(c, f.cursor == f.start);
        }, this.toggleBlockSelection = function() {
          if (this.rangeCount > 1) {
            var b = this.rangeList.ranges, f = b[b.length - 1], c = M.fromPoints(b[0].start, f.end);
            this.toSingleRange(), this.setSelectionRange(c, f.cursor == f.start);
          } else {
            var w = this.session.documentToScreenPosition(this.cursor), C = this.session.documentToScreenPosition(this.anchor), p = this.rectangularRangeBlock(w, C);
            p.forEach(this.addRange, this);
          }
        }, this.rectangularRangeBlock = function(b, f, c) {
          var w = [], C = b.column < f.column;
          if (C) var p = b.column, v = f.column, k = b.offsetX, m = f.offsetX;
          else var p = f.column, v = b.column, k = f.offsetX, m = b.offsetX;
          var y = b.row < f.row;
          if (y) var g = b.row, d = f.row;
          else var g = f.row, d = b.row;
          p < 0 && (p = 0), g < 0 && (g = 0), g == d && (c = true);
          for (var x, T = g; T <= d; T++) {
            var E = M.fromPoints(this.session.screenToDocumentPosition(T, p, k), this.session.screenToDocumentPosition(T, v, m));
            if (E.isEmpty()) {
              if (x && h(E.end, x)) break;
              x = E.end;
            }
            E.cursor = C ? E.start : E.end, w.push(E);
          }
          if (y && w.reverse(), !c) {
            for (var R = w.length - 1; w[R].isEmpty() && R > 0; ) R--;
            if (R > 0) for (var I = 0; w[I].isEmpty(); ) I++;
            for (var O = R; O >= I; O--) w[O].isEmpty() && w.splice(O, 1);
          }
          return w;
        };
      }).call($.prototype);
      var s = A("./editor").Editor;
      (function() {
        this.updateSelectionMarkers = function() {
          this.renderer.updateCursor(), this.renderer.updateBackMarkers();
        }, this.addSelectionMarker = function(b) {
          b.cursor || (b.cursor = b.end);
          var f = this.getSelectionStyle();
          return b.marker = this.session.addMarker(b, "ace_selection", f), this.session.$selectionMarkers.push(b), this.session.selectionMarkerCount = this.session.$selectionMarkers.length, b;
        }, this.removeSelectionMarker = function(b) {
          if (b.marker) {
            this.session.removeMarker(b.marker);
            var f = this.session.$selectionMarkers.indexOf(b);
            f != -1 && this.session.$selectionMarkers.splice(f, 1), this.session.selectionMarkerCount = this.session.$selectionMarkers.length;
          }
        }, this.removeSelectionMarkers = function(b) {
          for (var f = this.session.$selectionMarkers, c = b.length; c--; ) {
            var w = b[c];
            if (w.marker) {
              this.session.removeMarker(w.marker);
              var C = f.indexOf(w);
              C != -1 && f.splice(C, 1);
            }
          }
          this.session.selectionMarkerCount = f.length;
        }, this.$onAddRange = function(b) {
          this.addSelectionMarker(b.range), this.renderer.updateCursor(), this.renderer.updateBackMarkers();
        }, this.$onRemoveRange = function(b) {
          this.removeSelectionMarkers(b.ranges), this.renderer.updateCursor(), this.renderer.updateBackMarkers();
        }, this.$onMultiSelect = function(b) {
          this.inMultiSelectMode || (this.inMultiSelectMode = true, this.setStyle("ace_multiselect"), this.keyBinding.addKeyboardHandler(o.keyboardHandler), this.commands.setDefaultHandler("exec", this.$onMultiSelectExec), this.renderer.updateCursor(), this.renderer.updateBackMarkers());
        }, this.$onSingleSelect = function(b) {
          this.session.multiSelect.inVirtualMode || (this.inMultiSelectMode = false, this.unsetStyle("ace_multiselect"), this.keyBinding.removeKeyboardHandler(o.keyboardHandler), this.commands.removeDefaultHandler("exec", this.$onMultiSelectExec), this.renderer.updateCursor(), this.renderer.updateBackMarkers(), this._emit("changeSelection"));
        }, this.$onMultiSelectExec = function(b) {
          var f = b.command, c = b.editor;
          if (c.multiSelect) {
            if (f.multiSelectAction) f.multiSelectAction == "forEach" ? w = c.forEachSelection(f, b.args) : f.multiSelectAction == "forEachLine" ? w = c.forEachSelection(f, b.args, true) : f.multiSelectAction == "single" ? (c.exitMultiSelectMode(), w = f.exec(c, b.args || {})) : w = f.multiSelectAction(c, b.args || {});
            else {
              var w = f.exec(c, b.args || {});
              c.multiSelect.addRange(c.multiSelect.toOrientedRange()), c.multiSelect.mergeOverlappingRanges();
            }
            return w;
          }
        }, this.forEachSelection = function(b, f, c) {
          if (!this.inVirtualSelectionMode) {
            var w = c && c.keepOrder, C = c == true || c && c.$byLines, p = this.session, v = this.selection, k = v.rangeList, m = (w ? v : k).ranges, y;
            if (!m.length) return b.exec ? b.exec(this, f || {}) : b(this, f || {});
            var g = v._eventRegistry;
            v._eventRegistry = {};
            var d = new $(p);
            this.inVirtualSelectionMode = true;
            for (var x = m.length; x--; ) {
              if (C) for (; x > 0 && m[x].start.row == m[x - 1].end.row; ) x--;
              d.fromOrientedRange(m[x]), d.index = x, this.selection = p.selection = d;
              var T = b.exec ? b.exec(this, f || {}) : b(this, f || {});
              !y && T !== void 0 && (y = T), d.toOrientedRange(m[x]);
            }
            d.detach(), this.selection = p.selection = v, this.inVirtualSelectionMode = false, v._eventRegistry = g, v.mergeOverlappingRanges(), v.ranges[0] && v.fromOrientedRange(v.ranges[0]);
            var E = this.renderer.$scrollAnimation;
            return this.onCursorChange(), this.onSelectionChange(), E && E.from == E.to && this.renderer.animateScrolling(E.from), y;
          }
        }, this.exitMultiSelectMode = function() {
          !this.inMultiSelectMode || this.inVirtualSelectionMode || this.multiSelect.toSingleRange();
        }, this.getSelectedText = function() {
          var b = "";
          if (this.inMultiSelectMode && !this.inVirtualSelectionMode) {
            for (var f = this.multiSelect.rangeList.ranges, c = [], w = 0; w < f.length; w++) c.push(this.session.getTextRange(f[w]));
            var C = this.session.getDocument().getNewLineCharacter();
            b = c.join(C), b.length == (c.length - 1) * C.length && (b = "");
          } else this.selection.isEmpty() || (b = this.session.getTextRange(this.getSelectionRange()));
          return b;
        }, this.$checkMultiselectChange = function(b, f) {
          if (this.inMultiSelectMode && !this.inVirtualSelectionMode) {
            var c = this.multiSelect.ranges[0];
            if (this.multiSelect.isEmpty() && f == this.multiSelect.anchor) return;
            var w = f == this.multiSelect.anchor ? c.cursor == c.start ? c.end : c.start : c.cursor;
            w.row != f.row || this.session.$clipPositionToDocument(w.row, w.column).column != f.column ? this.multiSelect.toSingleRange(this.multiSelect.toOrientedRange()) : this.multiSelect.mergeOverlappingRanges();
          }
        }, this.findAll = function(b, f, c) {
          if (f = f || {}, f.needle = b || f.needle, f.needle == null) {
            var w = this.selection.isEmpty() ? this.selection.getWordRange() : this.selection.getRange();
            f.needle = this.session.getTextRange(w);
          }
          this.$search.set(f);
          var C = this.$search.findAll(this.session);
          if (!C.length) return 0;
          var p = this.multiSelect;
          c || p.toSingleRange(C[0]);
          for (var v = C.length; v--; ) p.addRange(C[v], true);
          return w && p.rangeList.rangeAtPoint(w.start) && p.addRange(w, true), C.length;
        }, this.selectMoreLines = function(b, f) {
          var c = this.selection.toOrientedRange(), w = c.cursor == c.end, C = this.session.documentToScreenPosition(c.cursor);
          this.selection.$desiredColumn && (C.column = this.selection.$desiredColumn);
          var p = this.session.screenToDocumentPosition(C.row + b, C.column);
          if (c.isEmpty()) var k = p;
          else var v = this.session.documentToScreenPosition(w ? c.end : c.start), k = this.session.screenToDocumentPosition(v.row + b, v.column);
          if (w) {
            var m = M.fromPoints(p, k);
            m.cursor = m.start;
          } else {
            var m = M.fromPoints(k, p);
            m.cursor = m.end;
          }
          if (m.desiredColumn = C.column, !this.selection.inMultiSelectMode) this.selection.addRange(c);
          else if (f) var y = c.cursor;
          this.selection.addRange(m), y && this.selection.substractPoint(y);
        }, this.transposeSelections = function(b) {
          for (var f = this.session, c = f.multiSelect, w = c.ranges, C = w.length; C--; ) {
            var p = w[C];
            if (p.isEmpty()) {
              var v = f.getWordRange(p.start.row, p.start.column);
              p.start.row = v.start.row, p.start.column = v.start.column, p.end.row = v.end.row, p.end.column = v.end.column;
            }
          }
          c.mergeOverlappingRanges();
          for (var k = [], C = w.length; C--; ) {
            var p = w[C];
            k.unshift(f.getTextRange(p));
          }
          b < 0 ? k.unshift(k.pop()) : k.push(k.shift());
          for (var C = w.length; C--; ) {
            var p = w[C], m = p.clone();
            f.replace(p, k[C]), p.start.row = m.start.row, p.start.column = m.start.column;
          }
          c.fromOrientedRange(c.ranges[0]);
        }, this.selectMore = function(b, f, c) {
          var w = this.session, C = w.multiSelect, p = C.toOrientedRange();
          if (!(p.isEmpty() && (p = w.getWordRange(p.start.row, p.start.column), p.cursor = b == -1 ? p.start : p.end, this.multiSelect.addRange(p), c))) {
            var v = w.getTextRange(p), k = e(w, v, b);
            k && (k.cursor = b == -1 ? k.start : k.end, this.session.unfold(k), this.multiSelect.addRange(k), this.renderer.scrollCursorIntoView(null, 0.5)), f && this.multiSelect.substractPoint(p.cursor);
          }
        }, this.alignCursors = function() {
          var b = this.session, f = b.multiSelect, c = f.ranges, w = -1, C = c.filter(function(R) {
            if (R.cursor.row == w) return true;
            w = R.cursor.row;
          });
          if (!c.length || C.length == c.length - 1) {
            var p = this.selection.getRange(), v = p.start.row, k = p.end.row, m = v == k;
            if (m) {
              var y = this.session.getLength(), g;
              do
                g = this.session.getLine(k);
              while (/[=:]/.test(g) && ++k < y);
              do
                g = this.session.getLine(v);
              while (/[=:]/.test(g) && --v > 0);
              v < 0 && (v = 0), k >= y && (k = y - 1);
            }
            var d = this.session.removeFullLines(v, k);
            d = this.$reAlignText(d, m), this.session.insert({
              row: v,
              column: 0
            }, d.join(`
`) + `
`), m || (p.start.column = 0, p.end.column = d[d.length - 1].length), this.selection.setRange(p);
          } else {
            C.forEach(function(R) {
              f.substractPoint(R.cursor);
            });
            var x = 0, T = 1 / 0, E = c.map(function(R) {
              var I = R.cursor, O = b.getLine(I.row), z = O.substr(I.column).search(/\S/g);
              return z == -1 && (z = 0), I.column > x && (x = I.column), z < T && (T = z), z;
            });
            c.forEach(function(R, I) {
              var O = R.cursor, z = x - O.column, F = E[I] - T;
              z > F ? b.insert(O, i.stringRepeat(" ", z - F)) : b.remove(new M(O.row, O.column, O.row, O.column - z + F)), R.start.column = R.end.column = x, R.start.row = R.end.row = O.row, R.cursor = R.end;
            }), f.fromOrientedRange(c[0]), this.renderer.updateCursor(), this.renderer.updateBackMarkers();
          }
        }, this.$reAlignText = function(b, f) {
          var c = true, w = true, C, p, v;
          return b.map(function(d) {
            var x = d.match(/(\s*)(.*?)(\s*)([=:].*)/);
            return x ? C == null ? (C = x[1].length, p = x[2].length, v = x[3].length, x) : (C + p + v != x[1].length + x[2].length + x[3].length && (w = false), C != x[1].length && (c = false), C > x[1].length && (C = x[1].length), p < x[2].length && (p = x[2].length), v > x[3].length && (v = x[3].length), x) : [
              d
            ];
          }).map(f ? m : c ? w ? y : m : g);
          function k(d) {
            return i.stringRepeat(" ", d);
          }
          function m(d) {
            return d[2] ? k(C) + d[2] + k(p - d[2].length + v) + d[4].replace(/^([=:])\s+/, "$1 ") : d[0];
          }
          function y(d) {
            return d[2] ? k(C + p - d[2].length) + d[2] + k(v) + d[4].replace(/^([=:])\s+/, "$1 ") : d[0];
          }
          function g(d) {
            return d[2] ? k(C) + d[2] + k(v) + d[4].replace(/^([=:])\s+/, "$1 ") : d[0];
          }
        };
      }).call(s.prototype);
      function h(b, f) {
        return b.row == f.row && b.column == f.column;
      }
      _.onSessionChange = function(b) {
        var f = b.session;
        f && !f.multiSelect && (f.$selectionMarkers = [], f.selection.$initRangeList(), f.multiSelect = f.selection), this.multiSelect = f && f.multiSelect;
        var c = b.oldSession;
        c && (c.multiSelect.off("addRange", this.$onAddRange), c.multiSelect.off("removeRange", this.$onRemoveRange), c.multiSelect.off("multiSelect", this.$onMultiSelect), c.multiSelect.off("singleSelect", this.$onSingleSelect), c.multiSelect.lead.off("change", this.$checkMultiselectChange), c.multiSelect.anchor.off("change", this.$checkMultiselectChange)), f && (f.multiSelect.on("addRange", this.$onAddRange), f.multiSelect.on("removeRange", this.$onRemoveRange), f.multiSelect.on("multiSelect", this.$onMultiSelect), f.multiSelect.on("singleSelect", this.$onSingleSelect), f.multiSelect.lead.on("change", this.$checkMultiselectChange), f.multiSelect.anchor.on("change", this.$checkMultiselectChange)), f && this.inMultiSelectMode != f.selection.inMultiSelectMode && (f.selection.inMultiSelectMode ? this.$onMultiSelect() : this.$onSingleSelect());
      };
      function u(b) {
        b.$multiselectOnSessionChange || (b.$onAddRange = b.$onAddRange.bind(b), b.$onRemoveRange = b.$onRemoveRange.bind(b), b.$onMultiSelect = b.$onMultiSelect.bind(b), b.$onSingleSelect = b.$onSingleSelect.bind(b), b.$multiselectOnSessionChange = _.onSessionChange.bind(b), b.$checkMultiselectChange = b.$checkMultiselectChange.bind(b), b.$multiselectOnSessionChange(b), b.on("changeSession", b.$multiselectOnSessionChange), b.on("mousedown", a), b.commands.addCommands(o.defaultCommands), S(b));
      }
      function S(b) {
        if (!b.textInput) return;
        var f = b.textInput.getElement(), c = false;
        l.addListener(f, "keydown", function(C) {
          var p = C.keyCode == 18 && !(C.ctrlKey || C.shiftKey || C.metaKey);
          b.$blockSelectEnabled && p ? c || (b.renderer.setMouseCursor("crosshair"), c = true) : c && w();
        }, b), l.addListener(f, "keyup", w, b), l.addListener(f, "blur", w, b);
        function w(C) {
          c && (b.renderer.setMouseCursor(""), c = false);
        }
      }
      _.MultiSelect = u, A("./config").defineOptions(s.prototype, "editor", {
        enableMultiselect: {
          set: function(b) {
            u(this), b ? this.on("mousedown", a) : this.off("mousedown", a);
          },
          value: true
        },
        enableBlockSelect: {
          set: function(b) {
            this.$blockSelectEnabled = b;
          },
          value: true
        }
      });
    }), ace.define("ace/mode/folding/fold_mode", [
      "require",
      "exports",
      "module",
      "ace/range"
    ], function(A, _, N) {
      var L = A("../../range").Range, M = _.FoldMode = function() {
      };
      (function() {
        this.foldingStartMarker = null, this.foldingStopMarker = null, this.getFoldWidget = function($, a, l) {
          var i = $.getLine(l);
          return this.foldingStartMarker.test(i) ? "start" : a == "markbeginend" && this.foldingStopMarker && this.foldingStopMarker.test(i) ? "end" : "";
        }, this.getFoldWidgetRange = function($, a, l) {
          return null;
        }, this.indentationBlock = function($, a, l) {
          var i = /\S/, o = $.getLine(a), r = o.search(i);
          if (r != -1) {
            for (var n = l || o.length, e = $.getLength(), t = a, s = a; ++a < e; ) {
              var h = $.getLine(a).search(i);
              if (h != -1) {
                if (h <= r) {
                  var u = $.getTokenAt(a, 0);
                  if (!u || u.type !== "string") break;
                }
                s = a;
              }
            }
            if (s > t) {
              var S = $.getLine(s).length;
              return new L(t, n, s, S);
            }
          }
        }, this.openingBracketBlock = function($, a, l, i, o) {
          var r = {
            row: l,
            column: i + 1
          }, n = $.$findClosingBracket(a, r, o);
          if (n) {
            var e = $.foldWidgets[n.row];
            return e == null && (e = $.getFoldWidget(n.row)), e == "start" && n.row > r.row && (n.row--, n.column = $.getLine(n.row).length), L.fromPoints(r, n);
          }
        }, this.closingBracketBlock = function($, a, l, i, o) {
          var r = {
            row: l,
            column: i
          }, n = $.$findOpeningBracket(a, r);
          if (n) return n.column++, r.column--, L.fromPoints(n, r);
        };
      }).call(M.prototype);
    }), ace.define("ace/ext/error_marker", [
      "require",
      "exports",
      "module",
      "ace/lib/dom",
      "ace/range",
      "ace/config"
    ], function(A, _, N) {
      var L = A("../lib/dom"), M = A("../range").Range, $ = A("../config").nls;
      function a(i, o, r) {
        for (var n = 0, e = i.length - 1; n <= e; ) {
          var t = n + e >> 1, s = r(o, i[t]);
          if (s > 0) n = t + 1;
          else if (s < 0) e = t - 1;
          else return t;
        }
        return -(n + 1);
      }
      function l(i, o, r) {
        var n = i.getAnnotations().sort(M.comparePoints);
        if (n.length) {
          var e = a(n, {
            row: o,
            column: -1
          }, M.comparePoints);
          e < 0 && (e = -e - 1), e >= n.length ? e = r > 0 ? 0 : n.length - 1 : e === 0 && r < 0 && (e = n.length - 1);
          var t = n[e];
          if (!(!t || !r)) {
            if (t.row === o) {
              do
                t = n[e += r];
              while (t && t.row === o);
              if (!t) return n.slice();
            }
            var s = [];
            o = t.row;
            do
              s[r < 0 ? "unshift" : "push"](t), t = n[e += r];
            while (t && t.row == o);
            return s.length && s;
          }
        }
      }
      _.showErrorMarker = function(i, o) {
        var r = i.session, n = i.getCursorPosition(), e = n.row, t = r.widgetManager.getWidgetsAtRow(e).filter(function(C) {
          return C.type == "errorMarker";
        })[0];
        t ? t.destroy() : e -= o;
        var s = l(r, e, o), h;
        if (s) {
          var u = s[0];
          n.column = (u.pos && typeof u.column != "number" ? u.pos.sc : u.column) || 0, n.row = u.row, h = i.renderer.$gutterLayer.$annotations[n.row];
        } else {
          if (t) return;
          h = {
            displayText: [
              $("error-marker.good-state", "Looks good!")
            ],
            className: "ace_ok"
          };
        }
        i.session.unfold(n.row), i.selection.moveToPosition(n);
        var S = {
          row: n.row,
          fixedWidth: true,
          coverGutter: true,
          el: L.createElement("div"),
          type: "errorMarker"
        }, b = S.el.appendChild(L.createElement("div")), f = S.el.appendChild(L.createElement("div"));
        f.className = "error_widget_arrow " + h.className;
        var c = i.renderer.$cursorLayer.getPixelPosition(n).left;
        f.style.left = c + i.renderer.gutterWidth - 5 + "px", S.el.className = "error_widget_wrapper", b.className = "error_widget " + h.className, h.displayText.forEach(function(C, p) {
          b.appendChild(L.createTextNode(C)), p < h.displayText.length - 1 && b.appendChild(L.createElement("br"));
        }), b.appendChild(L.createElement("div"));
        var w = function(C, p, v) {
          if (p === 0 && (v === "esc" || v === "return")) return S.destroy(), {
            command: "null"
          };
        };
        S.destroy = function() {
          i.$mouseHandler.isMousePressed || (i.keyBinding.removeKeyboardHandler(w), r.widgetManager.removeLineWidget(S), i.off("changeSelection", S.destroy), i.off("changeSession", S.destroy), i.off("mouseup", S.destroy), i.off("change", S.destroy));
        }, i.keyBinding.addKeyboardHandler(w), i.on("changeSelection", S.destroy), i.on("changeSession", S.destroy), i.on("mouseup", S.destroy), i.on("change", S.destroy), i.session.widgetManager.addLineWidget(S), S.el.onmousedown = i.focus.bind(i), i.renderer.scrollCursorIntoView(null, 0.5, {
          bottom: S.el.offsetHeight
        });
      }, L.importCssString(`
    .error_widget_wrapper {
        background: inherit;
        color: inherit;
        border:none
    }
    .error_widget {
        border-top: solid 2px;
        border-bottom: solid 2px;
        margin: 5px 0;
        padding: 10px 40px;
        white-space: pre-wrap;
    }
    .error_widget.ace_error, .error_widget_arrow.ace_error{
        border-color: #ff5a5a
    }
    .error_widget.ace_warning, .error_widget_arrow.ace_warning{
        border-color: #F1D817
    }
    .error_widget.ace_info, .error_widget_arrow.ace_info{
        border-color: #5a5a5a
    }
    .error_widget.ace_ok, .error_widget_arrow.ace_ok{
        border-color: #5aaa5a
    }
    .error_widget_arrow {
        position: absolute;
        border: solid 5px;
        border-top-color: transparent!important;
        border-right-color: transparent!important;
        border-left-color: transparent!important;
        top: -5px;
    }
`, "error_marker.css", false);
    }), ace.define("ace/ace", [
      "require",
      "exports",
      "module",
      "ace/lib/dom",
      "ace/range",
      "ace/editor",
      "ace/edit_session",
      "ace/undomanager",
      "ace/virtual_renderer",
      "ace/worker/worker_client",
      "ace/keyboard/hash_handler",
      "ace/placeholder",
      "ace/multi_select",
      "ace/mode/folding/fold_mode",
      "ace/theme/textmate",
      "ace/ext/error_marker",
      "ace/config",
      "ace/loader_build"
    ], function(A, _, N) {
      A("./loader_build")(_);
      var L = A("./lib/dom"), M = A("./range").Range, $ = A("./editor").Editor, a = A("./edit_session").EditSession, l = A("./undomanager").UndoManager, i = A("./virtual_renderer").VirtualRenderer;
      A("./worker/worker_client"), A("./keyboard/hash_handler"), A("./placeholder"), A("./multi_select"), A("./mode/folding/fold_mode"), A("./theme/textmate"), A("./ext/error_marker"), _.config = A("./config"), _.edit = function(r, n) {
        if (typeof r == "string") {
          var e = r;
          if (r = document.getElementById(e), !r) throw new Error("ace.edit can't find div #" + e);
        }
        if (r && r.env && r.env.editor instanceof $) return r.env.editor;
        var t = "";
        if (r && /input|textarea/i.test(r.tagName)) {
          var s = r;
          t = s.value, r = L.createElement("pre"), s.parentNode.replaceChild(r, s);
        } else r && (t = r.textContent, r.innerHTML = "");
        var h = _.createEditSession(t), u = new $(new i(r), h, n), S = {
          document: h,
          editor: u,
          onResize: u.resize.bind(u, null)
        };
        return s && (S.textarea = s), u.on("destroy", function() {
          S.editor.container.env = null;
        }), u.container.env = u.env = S, u;
      }, _.createEditSession = function(r, n) {
        var e = new a(r, n);
        return e.setUndoManager(new l()), e;
      }, _.Range = M, _.Editor = $, _.EditSession = a, _.UndoManager = l, _.VirtualRenderer = i;
      var o = _.config.version;
      _.version = o;
    }), (function() {
      ace.require([
        "ace/ace"
      ], function(A) {
        A && (A.config.init(true), A.define = ace.define);
        var _ = /* @__PURE__ */ (function() {
          return this;
        })();
        !_ && typeof window < "u" && (_ = window), !_ && typeof self < "u" && (_ = self), _.ace || (_.ace = A);
        for (var N in A) A.hasOwnProperty(N) && (_.ace[N] = A[N]);
        _.ace.default = _.ace, j && (j.exports = _.ace);
      });
    })();
  })(Tt);
  var rt = Tt.exports, Ze = {
    exports: {}
  };
  Ze.exports;
  (function(j, Q) {
    var A = 200, _ = "__lodash_hash_undefined__", N = 1, L = 2, M = 9007199254740991, $ = "[object Arguments]", a = "[object Array]", l = "[object AsyncFunction]", i = "[object Boolean]", o = "[object Date]", r = "[object Error]", n = "[object Function]", e = "[object GeneratorFunction]", t = "[object Map]", s = "[object Number]", h = "[object Null]", u = "[object Object]", S = "[object Promise]", b = "[object Proxy]", f = "[object RegExp]", c = "[object Set]", w = "[object String]", C = "[object Symbol]", p = "[object Undefined]", v = "[object WeakMap]", k = "[object ArrayBuffer]", m = "[object DataView]", y = "[object Float32Array]", g = "[object Float64Array]", d = "[object Int8Array]", x = "[object Int16Array]", T = "[object Int32Array]", E = "[object Uint8Array]", R = "[object Uint8ClampedArray]", I = "[object Uint16Array]", O = "[object Uint32Array]", z = /[\\^$.*+?()[\]{}|]/g, F = /^\[object .+?Constructor\]$/, B = /^(?:0|[1-9]\d*)$/, W = {};
    W[y] = W[g] = W[d] = W[x] = W[T] = W[E] = W[R] = W[I] = W[O] = true, W[$] = W[a] = W[k] = W[i] = W[m] = W[o] = W[r] = W[n] = W[t] = W[s] = W[u] = W[f] = W[c] = W[w] = W[v] = false;
    var H = typeof Oe == "object" && Oe && Oe.Object === Object && Oe, U = typeof self == "object" && self && self.Object === Object && self, V = H || U || Function("return this")(), G = Q && !Q.nodeType && Q, Y = G && true && j && !j.nodeType && j, J = Y && Y.exports === G, ee = J && H.process, ne = (function() {
      try {
        return ee && ee.binding && ee.binding("util");
      } catch {
      }
    })(), ae = ne && ne.isTypedArray;
    function ie(D, P) {
      for (var K = -1, Z = D == null ? 0 : D.length, te = 0, q = []; ++K < Z; ) {
        var oe = D[K];
        P(oe, K, D) && (q[te++] = oe);
      }
      return q;
    }
    function de(D, P) {
      for (var K = -1, Z = P.length, te = D.length; ++K < Z; ) D[te + K] = P[K];
      return D;
    }
    function Be(D, P) {
      for (var K = -1, Z = D == null ? 0 : D.length; ++K < Z; ) if (P(D[K], K, D)) return true;
      return false;
    }
    function Ee(D, P) {
      for (var K = -1, Z = Array(D); ++K < D; ) Z[K] = P(K);
      return Z;
    }
    function It(D) {
      return function(P) {
        return D(P);
      };
    }
    function Ot(D, P) {
      return D.has(P);
    }
    function Dt(D, P) {
      return D == null ? void 0 : D[P];
    }
    function Nt(D) {
      var P = -1, K = Array(D.size);
      return D.forEach(function(Z, te) {
        K[++P] = [
          te,
          Z
        ];
      }), K;
    }
    function Ft(D, P) {
      return function(K) {
        return D(P(K));
      };
    }
    function Wt(D) {
      var P = -1, K = Array(D.size);
      return D.forEach(function(Z) {
        K[++P] = Z;
      }), K;
    }
    var Ht = Array.prototype, Bt = Function.prototype, Pe = Object.prototype, Xe = V["__core-js_shared__"], st = Bt.toString, ve = Pe.hasOwnProperty, at = (function() {
      var D = /[^.]+$/.exec(Xe && Xe.keys && Xe.keys.IE_PROTO || "");
      return D ? "Symbol(src)_1." + D : "";
    })(), lt = Pe.toString, Pt = RegExp("^" + st.call(ve).replace(z, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"), ct = J ? V.Buffer : void 0, ze = V.Symbol, ht = V.Uint8Array, ut = Pe.propertyIsEnumerable, zt = Ht.splice, _e = ze ? ze.toStringTag : void 0, dt = Object.getOwnPropertySymbols, jt = ct ? ct.isBuffer : void 0, Ut = Ft(Object.keys, Object), Je = Re(V, "DataView"), Ne = Re(V, "Map"), qe = Re(V, "Promise"), et = Re(V, "Set"), tt = Re(V, "WeakMap"), Fe = Re(Object, "create"), Vt = Te(Je), Gt = Te(Ne), Kt = Te(qe), Yt = Te(et), Qt = Te(tt), ft = ze ? ze.prototype : void 0, nt = ft ? ft.valueOf : void 0;
    function ke(D) {
      var P = -1, K = D == null ? 0 : D.length;
      for (this.clear(); ++P < K; ) {
        var Z = D[P];
        this.set(Z[0], Z[1]);
      }
    }
    function Zt() {
      this.__data__ = Fe ? Fe(null) : {}, this.size = 0;
    }
    function Xt(D) {
      var P = this.has(D) && delete this.__data__[D];
      return this.size -= P ? 1 : 0, P;
    }
    function Jt(D) {
      var P = this.__data__;
      if (Fe) {
        var K = P[D];
        return K === _ ? void 0 : K;
      }
      return ve.call(P, D) ? P[D] : void 0;
    }
    function qt(D) {
      var P = this.__data__;
      return Fe ? P[D] !== void 0 : ve.call(P, D);
    }
    function en(D, P) {
      var K = this.__data__;
      return this.size += this.has(D) ? 0 : 1, K[D] = Fe && P === void 0 ? _ : P, this;
    }
    ke.prototype.clear = Zt, ke.prototype.delete = Xt, ke.prototype.get = Jt, ke.prototype.has = qt, ke.prototype.set = en;
    function be(D) {
      var P = -1, K = D == null ? 0 : D.length;
      for (this.clear(); ++P < K; ) {
        var Z = D[P];
        this.set(Z[0], Z[1]);
      }
    }
    function tn() {
      this.__data__ = [], this.size = 0;
    }
    function nn(D) {
      var P = this.__data__, K = Ue(P, D);
      if (K < 0) return false;
      var Z = P.length - 1;
      return K == Z ? P.pop() : zt.call(P, K, 1), --this.size, true;
    }
    function rn(D) {
      var P = this.__data__, K = Ue(P, D);
      return K < 0 ? void 0 : P[K][1];
    }
    function on(D) {
      return Ue(this.__data__, D) > -1;
    }
    function sn(D, P) {
      var K = this.__data__, Z = Ue(K, D);
      return Z < 0 ? (++this.size, K.push([
        D,
        P
      ])) : K[Z][1] = P, this;
    }
    be.prototype.clear = tn, be.prototype.delete = nn, be.prototype.get = rn, be.prototype.has = on, be.prototype.set = sn;
    function Me(D) {
      var P = -1, K = D == null ? 0 : D.length;
      for (this.clear(); ++P < K; ) {
        var Z = D[P];
        this.set(Z[0], Z[1]);
      }
    }
    function an() {
      this.size = 0, this.__data__ = {
        hash: new ke(),
        map: new (Ne || be)(),
        string: new ke()
      };
    }
    function ln(D) {
      var P = Ve(this, D).delete(D);
      return this.size -= P ? 1 : 0, P;
    }
    function cn(D) {
      return Ve(this, D).get(D);
    }
    function hn(D) {
      return Ve(this, D).has(D);
    }
    function un(D, P) {
      var K = Ve(this, D), Z = K.size;
      return K.set(D, P), this.size += K.size == Z ? 0 : 1, this;
    }
    Me.prototype.clear = an, Me.prototype.delete = ln, Me.prototype.get = cn, Me.prototype.has = hn, Me.prototype.set = un;
    function je(D) {
      var P = -1, K = D == null ? 0 : D.length;
      for (this.__data__ = new Me(); ++P < K; ) this.add(D[P]);
    }
    function dn(D) {
      return this.__data__.set(D, _), this;
    }
    function fn(D) {
      return this.__data__.has(D);
    }
    je.prototype.add = je.prototype.push = dn, je.prototype.has = fn;
    function Ce(D) {
      var P = this.__data__ = new be(D);
      this.size = P.size;
    }
    function pn() {
      this.__data__ = new be(), this.size = 0;
    }
    function gn(D) {
      var P = this.__data__, K = P.delete(D);
      return this.size = P.size, K;
    }
    function mn(D) {
      return this.__data__.get(D);
    }
    function vn(D) {
      return this.__data__.has(D);
    }
    function yn(D, P) {
      var K = this.__data__;
      if (K instanceof be) {
        var Z = K.__data__;
        if (!Ne || Z.length < A - 1) return Z.push([
          D,
          P
        ]), this.size = ++K.size, this;
        K = this.__data__ = new Me(Z);
      }
      return K.set(D, P), this.size = K.size, this;
    }
    Ce.prototype.clear = pn, Ce.prototype.delete = gn, Ce.prototype.get = mn, Ce.prototype.has = vn, Ce.prototype.set = yn;
    function bn(D, P) {
      var K = Ge(D), Z = !K && On(D), te = !K && !Z && it(D), q = !K && !Z && !te && Ct(D), oe = K || Z || te || q, le = oe ? Ee(D.length, String) : [], ce = le.length;
      for (var re in D) ve.call(D, re) && !(oe && (re == "length" || te && (re == "offset" || re == "parent") || q && (re == "buffer" || re == "byteLength" || re == "byteOffset") || Tn(re, ce))) && le.push(re);
      return le;
    }
    function Ue(D, P) {
      for (var K = D.length; K--; ) if (yt(D[K][0], P)) return K;
      return -1;
    }
    function wn(D, P, K) {
      var Z = P(D);
      return Ge(D) ? Z : de(Z, K(D));
    }
    function We(D) {
      return D == null ? D === void 0 ? p : h : _e && _e in Object(D) ? kn(D) : In(D);
    }
    function pt(D) {
      return He(D) && We(D) == $;
    }
    function gt(D, P, K, Z, te) {
      return D === P ? true : D == null || P == null || !He(D) && !He(P) ? D !== D && P !== P : xn(D, P, K, Z, gt, te);
    }
    function xn(D, P, K, Z, te, q) {
      var oe = Ge(D), le = Ge(P), ce = oe ? a : Se(D), re = le ? a : Se(P);
      ce = ce == $ ? u : ce, re = re == $ ? u : re;
      var fe = ce == u, me = re == u, he = ce == re;
      if (he && it(D)) {
        if (!it(P)) return false;
        oe = true, fe = false;
      }
      if (he && !fe) return q || (q = new Ce()), oe || Ct(D) ? mt(D, P, K, Z, te, q) : An(D, P, ce, K, Z, te, q);
      if (!(K & N)) {
        var pe = fe && ve.call(D, "__wrapped__"), ge = me && ve.call(P, "__wrapped__");
        if (pe || ge) {
          var $e = pe ? D.value() : D, we = ge ? P.value() : P;
          return q || (q = new Ce()), te($e, we, K, Z, q);
        }
      }
      return he ? (q || (q = new Ce()), _n(D, P, K, Z, te, q)) : false;
    }
    function Cn(D) {
      if (!xt(D) || En(D)) return false;
      var P = bt(D) ? Pt : F;
      return P.test(Te(D));
    }
    function Sn(D) {
      return He(D) && wt(D.length) && !!W[We(D)];
    }
    function $n(D) {
      if (!Rn(D)) return Ut(D);
      var P = [];
      for (var K in Object(D)) ve.call(D, K) && K != "constructor" && P.push(K);
      return P;
    }
    function mt(D, P, K, Z, te, q) {
      var oe = K & N, le = D.length, ce = P.length;
      if (le != ce && !(oe && ce > le)) return false;
      var re = q.get(D);
      if (re && q.get(P)) return re == P;
      var fe = -1, me = true, he = K & L ? new je() : void 0;
      for (q.set(D, P), q.set(P, D); ++fe < le; ) {
        var pe = D[fe], ge = P[fe];
        if (Z) var $e = oe ? Z(ge, pe, fe, P, D, q) : Z(pe, ge, fe, D, P, q);
        if ($e !== void 0) {
          if ($e) continue;
          me = false;
          break;
        }
        if (he) {
          if (!Be(P, function(we, Le) {
            if (!Ot(he, Le) && (pe === we || te(pe, we, K, Z, q))) return he.push(Le);
          })) {
            me = false;
            break;
          }
        } else if (!(pe === ge || te(pe, ge, K, Z, q))) {
          me = false;
          break;
        }
      }
      return q.delete(D), q.delete(P), me;
    }
    function An(D, P, K, Z, te, q, oe) {
      switch (K) {
        case m:
          if (D.byteLength != P.byteLength || D.byteOffset != P.byteOffset) return false;
          D = D.buffer, P = P.buffer;
        case k:
          return !(D.byteLength != P.byteLength || !q(new ht(D), new ht(P)));
        case i:
        case o:
        case s:
          return yt(+D, +P);
        case r:
          return D.name == P.name && D.message == P.message;
        case f:
        case w:
          return D == P + "";
        case t:
          var le = Nt;
        case c:
          var ce = Z & N;
          if (le || (le = Wt), D.size != P.size && !ce) return false;
          var re = oe.get(D);
          if (re) return re == P;
          Z |= L, oe.set(D, P);
          var fe = mt(le(D), le(P), Z, te, q, oe);
          return oe.delete(D), fe;
        case C:
          if (nt) return nt.call(D) == nt.call(P);
      }
      return false;
    }
    function _n(D, P, K, Z, te, q) {
      var oe = K & N, le = vt(D), ce = le.length, re = vt(P), fe = re.length;
      if (ce != fe && !oe) return false;
      for (var me = ce; me--; ) {
        var he = le[me];
        if (!(oe ? he in P : ve.call(P, he))) return false;
      }
      var pe = q.get(D);
      if (pe && q.get(P)) return pe == P;
      var ge = true;
      q.set(D, P), q.set(P, D);
      for (var $e = oe; ++me < ce; ) {
        he = le[me];
        var we = D[he], Le = P[he];
        if (Z) var St = oe ? Z(Le, we, he, P, D, q) : Z(we, Le, he, D, P, q);
        if (!(St === void 0 ? we === Le || te(we, Le, K, Z, q) : St)) {
          ge = false;
          break;
        }
        $e || ($e = he == "constructor");
      }
      if (ge && !$e) {
        var Ke = D.constructor, Ye = P.constructor;
        Ke != Ye && "constructor" in D && "constructor" in P && !(typeof Ke == "function" && Ke instanceof Ke && typeof Ye == "function" && Ye instanceof Ye) && (ge = false);
      }
      return q.delete(D), q.delete(P), ge;
    }
    function vt(D) {
      return wn(D, Fn, Mn);
    }
    function Ve(D, P) {
      var K = D.__data__;
      return Ln(P) ? K[typeof P == "string" ? "string" : "hash"] : K.map;
    }
    function Re(D, P) {
      var K = Dt(D, P);
      return Cn(K) ? K : void 0;
    }
    function kn(D) {
      var P = ve.call(D, _e), K = D[_e];
      try {
        D[_e] = void 0;
        var Z = true;
      } catch {
      }
      var te = lt.call(D);
      return Z && (P ? D[_e] = K : delete D[_e]), te;
    }
    var Mn = dt ? function(D) {
      return D == null ? [] : (D = Object(D), ie(dt(D), function(P) {
        return ut.call(D, P);
      }));
    } : Wn, Se = We;
    (Je && Se(new Je(new ArrayBuffer(1))) != m || Ne && Se(new Ne()) != t || qe && Se(qe.resolve()) != S || et && Se(new et()) != c || tt && Se(new tt()) != v) && (Se = function(D) {
      var P = We(D), K = P == u ? D.constructor : void 0, Z = K ? Te(K) : "";
      if (Z) switch (Z) {
        case Vt:
          return m;
        case Gt:
          return t;
        case Kt:
          return S;
        case Yt:
          return c;
        case Qt:
          return v;
      }
      return P;
    });
    function Tn(D, P) {
      return P = P ?? M, !!P && (typeof D == "number" || B.test(D)) && D > -1 && D % 1 == 0 && D < P;
    }
    function Ln(D) {
      var P = typeof D;
      return P == "string" || P == "number" || P == "symbol" || P == "boolean" ? D !== "__proto__" : D === null;
    }
    function En(D) {
      return !!at && at in D;
    }
    function Rn(D) {
      var P = D && D.constructor, K = typeof P == "function" && P.prototype || Pe;
      return D === K;
    }
    function In(D) {
      return lt.call(D);
    }
    function Te(D) {
      if (D != null) {
        try {
          return st.call(D);
        } catch {
        }
        try {
          return D + "";
        } catch {
        }
      }
      return "";
    }
    function yt(D, P) {
      return D === P || D !== D && P !== P;
    }
    var On = pt(/* @__PURE__ */ (function() {
      return arguments;
    })()) ? pt : function(D) {
      return He(D) && ve.call(D, "callee") && !ut.call(D, "callee");
    }, Ge = Array.isArray;
    function Dn(D) {
      return D != null && wt(D.length) && !bt(D);
    }
    var it = jt || Hn;
    function Nn(D, P) {
      return gt(D, P);
    }
    function bt(D) {
      if (!xt(D)) return false;
      var P = We(D);
      return P == n || P == e || P == l || P == b;
    }
    function wt(D) {
      return typeof D == "number" && D > -1 && D % 1 == 0 && D <= M;
    }
    function xt(D) {
      var P = typeof D;
      return D != null && (P == "object" || P == "function");
    }
    function He(D) {
      return D != null && typeof D == "object";
    }
    var Ct = ae ? It(ae) : Sn;
    function Fn(D) {
      return Dn(D) ? bn(D) : $n(D);
    }
    function Wn() {
      return [];
    }
    function Hn() {
      return false;
    }
    j.exports = Nn;
  })(Ze, Ze.exports);
  var Zn = Ze.exports, ye = {};
  Object.defineProperty(ye, "__esModule", {
    value: true
  });
  ye.getAceInstance = ye.debounce = ye.editorEvents = ye.editorOptions = void 0;
  var Xn = [
    "minLines",
    "maxLines",
    "readOnly",
    "highlightActiveLine",
    "tabSize",
    "enableBasicAutocompletion",
    "enableLiveAutocompletion",
    "enableSnippets"
  ];
  ye.editorOptions = Xn;
  var Jn = [
    "onChange",
    "onFocus",
    "onInput",
    "onBlur",
    "onCopy",
    "onPaste",
    "onSelectionChange",
    "onCursorChange",
    "onScroll",
    "handleOptions",
    "updateRef"
  ];
  ye.editorEvents = Jn;
  var qn = function() {
    var j;
    return typeof window > "u" ? (Oe.window = {}, j = rt, delete Oe.window) : window.ace ? (j = window.ace, j.acequire = window.ace.require || window.ace.acequire) : j = rt, j;
  };
  ye.getAceInstance = qn;
  var ei = function(j, Q) {
    var A = null;
    return function() {
      var _ = this, N = arguments;
      clearTimeout(A), A = setTimeout(function() {
        j.apply(_, N);
      }, Q);
    };
  };
  ye.debounce = ei;
  var ti = De && De.__extends || /* @__PURE__ */ (function() {
    var j = function(Q, A) {
      return j = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function(_, N) {
        _.__proto__ = N;
      } || function(_, N) {
        for (var L in N) Object.prototype.hasOwnProperty.call(N, L) && (_[L] = N[L]);
      }, j(Q, A);
    };
    return function(Q, A) {
      if (typeof A != "function" && A !== null) throw new TypeError("Class extends value " + String(A) + " is not a constructor or null");
      j(Q, A);
      function _() {
        this.constructor = Q;
      }
      Q.prototype = A === null ? Object.create(A) : (_.prototype = A.prototype, new _());
    };
  })(), ot = De && De.__assign || function() {
    return ot = Object.assign || function(j) {
      for (var Q, A = 1, _ = arguments.length; A < _; A++) {
        Q = arguments[A];
        for (var N in Q) Object.prototype.hasOwnProperty.call(Q, N) && (j[N] = Q[N]);
      }
      return j;
    }, ot.apply(this, arguments);
  };
  Object.defineProperty(De, "__esModule", {
    value: true
  });
  var ni = rt, X = zn, $t = xe, Qe = Zn, Ie = ye, At = (0, Ie.getAceInstance)(), ii = (function(j) {
    ti(Q, j);
    function Q(A) {
      var _ = j.call(this, A) || this;
      return Ie.editorEvents.forEach(function(N) {
        _[N] = _[N].bind(_);
      }), _.debounce = Ie.debounce, _;
    }
    return Q.prototype.isInShadow = function(A) {
      for (var _ = A && A.parentNode; _; ) {
        if (_.toString() === "[object ShadowRoot]") return true;
        _ = _.parentNode;
      }
      return false;
    }, Q.prototype.componentDidMount = function() {
      var A = this, _ = this.props, N = _.className, L = _.onBeforeLoad, M = _.onValidate, $ = _.mode, a = _.focus, l = _.theme, i = _.fontSize, o = _.lineHeight, r = _.value, n = _.defaultValue, e = _.showGutter, t = _.wrapEnabled, s = _.showPrintMargin, h = _.scrollMargin, u = h === void 0 ? [
        0,
        0,
        0,
        0
      ] : h, S = _.keyboardHandler, b = _.onLoad, f = _.commands, c = _.annotations, w = _.markers, C = _.placeholder;
      this.editor = At.edit(this.refEditor), L && L(At);
      for (var p = Object.keys(this.props.editorProps), v = 0; v < p.length; v++) this.editor[p[v]] = this.props.editorProps[p[v]];
      this.props.debounceChangePeriod && (this.onChange = this.debounce(this.onChange, this.props.debounceChangePeriod)), this.editor.renderer.setScrollMargin(u[0], u[1], u[2], u[3]), this.isInShadow(this.refEditor) && this.editor.renderer.attachToShadowRoot(), this.editor.getSession().setMode(typeof $ == "string" ? "ace/mode/".concat($) : $), l && l !== "" && this.editor.setTheme("ace/theme/".concat(l)), this.editor.setFontSize(typeof i == "number" ? "".concat(i, "px") : i), o && (this.editor.container.style.lineHeight = typeof o == "number" ? "".concat(o, "px") : "".concat(o), this.editor.renderer.updateFontSize()), this.editor.getSession().setValue(n || r || ""), this.props.navigateToFileEnd && this.editor.navigateFileEnd(), this.editor.renderer.setShowGutter(e), this.editor.getSession().setUseWrapMode(t), this.editor.setShowPrintMargin(s), this.editor.on("focus", this.onFocus), this.editor.on("blur", this.onBlur), this.editor.on("copy", this.onCopy), this.editor.on("paste", this.onPaste), this.editor.on("change", this.onChange), this.editor.on("input", this.onInput), C && this.updatePlaceholder(), this.editor.getSession().selection.on("changeSelection", this.onSelectionChange), this.editor.getSession().selection.on("changeCursor", this.onCursorChange), M && this.editor.getSession().on("changeAnnotation", function() {
        var m = A.editor.getSession().getAnnotations();
        A.props.onValidate(m);
      }), this.editor.session.on("changeScrollTop", this.onScroll), this.editor.getSession().setAnnotations(c || []), w && w.length > 0 && this.handleMarkers(w);
      var k = this.editor.$options;
      Ie.editorOptions.forEach(function(m) {
        k.hasOwnProperty(m) ? A.editor.setOption(m, A.props[m]) : A.props[m] && console.warn("ReactAce: editor option ".concat(m, " was activated but not found. Did you need to import a related tool or did you possibly mispell the option?"));
      }), this.handleOptions(this.props), Array.isArray(f) && f.forEach(function(m) {
        typeof m.exec == "string" ? A.editor.commands.bindKey(m.bindKey, m.exec) : A.editor.commands.addCommand(m);
      }), S && this.editor.setKeyboardHandler("ace/keyboard/" + S), N && (this.refEditor.className += " " + N), b && b(this.editor), this.editor.resize(), a && this.editor.focus();
    }, Q.prototype.componentDidUpdate = function(A) {
      for (var _ = A, N = this.props, L = 0; L < Ie.editorOptions.length; L++) {
        var M = Ie.editorOptions[L];
        N[M] !== _[M] && this.editor.setOption(M, N[M]);
      }
      if (N.className !== _.className) {
        var $ = this.refEditor.className, a = $.trim().split(" "), l = _.className.trim().split(" ");
        l.forEach(function(r) {
          var n = a.indexOf(r);
          a.splice(n, 1);
        }), this.refEditor.className = " " + N.className + " " + a.join(" ");
      }
      var i = this.editor && N.value != null && this.editor.getValue() !== N.value;
      if (i) {
        this.silent = true;
        var o = this.editor.session.selection.toJSON();
        this.editor.setValue(N.value, N.cursorStart), this.editor.session.selection.fromJSON(o), this.silent = false;
      }
      N.placeholder !== _.placeholder && this.updatePlaceholder(), N.mode !== _.mode && this.editor.getSession().setMode(typeof N.mode == "string" ? "ace/mode/".concat(N.mode) : N.mode), N.theme !== _.theme && this.editor.setTheme("ace/theme/" + N.theme), N.keyboardHandler !== _.keyboardHandler && (N.keyboardHandler ? this.editor.setKeyboardHandler("ace/keyboard/" + N.keyboardHandler) : this.editor.setKeyboardHandler(null)), N.fontSize !== _.fontSize && this.editor.setFontSize(typeof N.fontSize == "number" ? "".concat(N.fontSize, "px") : N.fontSize), N.lineHeight !== _.lineHeight && (this.editor.container.style.lineHeight = typeof N.lineHeight == "number" ? "".concat(N.lineHeight, "px") : N.lineHeight, this.editor.renderer.updateFontSize()), N.wrapEnabled !== _.wrapEnabled && this.editor.getSession().setUseWrapMode(N.wrapEnabled), N.showPrintMargin !== _.showPrintMargin && this.editor.setShowPrintMargin(N.showPrintMargin), N.showGutter !== _.showGutter && this.editor.renderer.setShowGutter(N.showGutter), Qe(N.setOptions, _.setOptions) || this.handleOptions(N), (i || !Qe(N.annotations, _.annotations)) && this.editor.getSession().setAnnotations(N.annotations || []), !Qe(N.markers, _.markers) && Array.isArray(N.markers) && this.handleMarkers(N.markers), Qe(N.scrollMargin, _.scrollMargin) || this.handleScrollMargins(N.scrollMargin), (A.height !== this.props.height || A.width !== this.props.width) && this.editor.resize(), this.props.focus && !A.focus && this.editor.focus();
    }, Q.prototype.handleScrollMargins = function(A) {
      A === void 0 && (A = [
        0,
        0,
        0,
        0
      ]), this.editor.renderer.setScrollMargin(A[0], A[1], A[2], A[3]);
    }, Q.prototype.componentWillUnmount = function() {
      this.editor && (this.editor.destroy(), this.editor = null);
    }, Q.prototype.onChange = function(A) {
      if (this.editor && this.props.onChange && !this.silent) {
        var _ = this.editor.getValue();
        this.props.onChange(_, A);
      }
    }, Q.prototype.onSelectionChange = function(A) {
      if (this.props.onSelectionChange) {
        var _ = this.editor.getSelection();
        this.props.onSelectionChange(_, A);
      }
    }, Q.prototype.onCursorChange = function(A) {
      if (this.props.onCursorChange) {
        var _ = this.editor.getSelection();
        this.props.onCursorChange(_, A);
      }
    }, Q.prototype.onInput = function(A) {
      this.props.onInput && this.props.onInput(A), this.props.placeholder && this.updatePlaceholder();
    }, Q.prototype.onFocus = function(A) {
      this.props.onFocus && this.props.onFocus(A, this.editor);
    }, Q.prototype.onBlur = function(A) {
      this.props.onBlur && this.props.onBlur(A, this.editor);
    }, Q.prototype.onCopy = function(A) {
      var _ = A.text;
      this.props.onCopy && this.props.onCopy(_);
    }, Q.prototype.onPaste = function(A) {
      var _ = A.text;
      this.props.onPaste && this.props.onPaste(_);
    }, Q.prototype.onScroll = function() {
      this.props.onScroll && this.props.onScroll(this.editor);
    }, Q.prototype.handleOptions = function(A) {
      for (var _ = Object.keys(A.setOptions), N = 0; N < _.length; N++) this.editor.setOption(_[N], A.setOptions[_[N]]);
    }, Q.prototype.handleMarkers = function(A) {
      var _ = this, N = this.editor.getSession().getMarkers(true);
      for (var L in N) N.hasOwnProperty(L) && this.editor.getSession().removeMarker(N[L].id);
      N = this.editor.getSession().getMarkers(false);
      for (var L in N) N.hasOwnProperty(L) && N[L].clazz !== "ace_active-line" && N[L].clazz !== "ace_selected-word" && this.editor.getSession().removeMarker(N[L].id);
      A.forEach(function(M) {
        var $ = M.startRow, a = M.startCol, l = M.endRow, i = M.endCol, o = M.className, r = M.type, n = M.inFront, e = n === void 0 ? false : n, t = new ni.Range($, a, l, i);
        _.editor.getSession().addMarker(t, o, r, e);
      });
    }, Q.prototype.updatePlaceholder = function() {
      var A = this.editor, _ = this.props.placeholder, N = !A.session.getValue().length, L = A.renderer.placeholderNode;
      !N && L ? (A.renderer.scroller.removeChild(A.renderer.placeholderNode), A.renderer.placeholderNode = null) : N && !L ? (L = A.renderer.placeholderNode = document.createElement("div"), L.textContent = _ || "", L.className = "ace_comment ace_placeholder", L.style.padding = "0 9px", L.style.position = "absolute", L.style.zIndex = "3", A.renderer.scroller.appendChild(L)) : N && L && (L.textContent = _);
    }, Q.prototype.updateRef = function(A) {
      this.refEditor = A;
    }, Q.prototype.render = function() {
      var A = this.props, _ = A.name, N = A.width, L = A.height, M = A.style, $ = ot({
        width: N,
        height: L
      }, M);
      return $t.createElement("div", {
        ref: this.updateRef,
        id: _,
        style: $
      });
    }, Q.propTypes = {
      mode: X.oneOfType([
        X.string,
        X.object
      ]),
      focus: X.bool,
      theme: X.string,
      name: X.string,
      className: X.string,
      height: X.string,
      width: X.string,
      fontSize: X.oneOfType([
        X.number,
        X.string
      ]),
      lineHeight: X.oneOfType([
        X.number,
        X.string
      ]),
      showGutter: X.bool,
      onChange: X.func,
      onCopy: X.func,
      onPaste: X.func,
      onFocus: X.func,
      onInput: X.func,
      onBlur: X.func,
      onScroll: X.func,
      value: X.string,
      defaultValue: X.string,
      onLoad: X.func,
      onSelectionChange: X.func,
      onCursorChange: X.func,
      onBeforeLoad: X.func,
      onValidate: X.func,
      minLines: X.number,
      maxLines: X.number,
      readOnly: X.bool,
      highlightActiveLine: X.bool,
      tabSize: X.number,
      showPrintMargin: X.bool,
      cursorStart: X.number,
      debounceChangePeriod: X.number,
      editorProps: X.object,
      setOptions: X.object,
      style: X.object,
      scrollMargin: X.array,
      annotations: X.array,
      markers: X.array,
      keyboardHandler: X.string,
      wrapEnabled: X.bool,
      enableSnippets: X.bool,
      enableBasicAutocompletion: X.oneOfType([
        X.bool,
        X.array
      ]),
      enableLiveAutocompletion: X.oneOfType([
        X.bool,
        X.array
      ]),
      navigateToFileEnd: X.bool,
      commands: X.array,
      placeholder: X.string
    }, Q.defaultProps = {
      name: "ace-editor",
      focus: false,
      mode: "",
      theme: "",
      height: "500px",
      width: "500px",
      fontSize: 12,
      enableSnippets: false,
      showGutter: true,
      onChange: null,
      onPaste: null,
      onLoad: null,
      onScroll: null,
      minLines: null,
      maxLines: null,
      readOnly: false,
      highlightActiveLine: true,
      showPrintMargin: true,
      tabSize: 4,
      cursorStart: 1,
      editorProps: {},
      style: {},
      scrollMargin: [
        0,
        0,
        0,
        0
      ],
      setOptions: {},
      wrapEnabled: false,
      enableBasicAutocompletion: false,
      enableLiveAutocompletion: false,
      placeholder: null,
      navigateToFileEnd: true
    }, Q;
  })($t.Component), ri = De.default = ii, oi = {
    exports: {}
  };
  (function(j, Q) {
    ace.define("ace/mode/css_highlight_rules", [
      "require",
      "exports",
      "module",
      "ace/lib/oop",
      "ace/lib/lang",
      "ace/mode/text_highlight_rules"
    ], function(A, _, N) {
      var L = A("../lib/oop");
      A("../lib/lang");
      var M = A("./text_highlight_rules").TextHighlightRules, $ = _.supportType = "align-content|align-items|align-self|all|animation|animation-delay|animation-direction|animation-duration|animation-fill-mode|animation-iteration-count|animation-name|animation-play-state|animation-timing-function|backface-visibility|background|background-attachment|background-blend-mode|background-clip|background-color|background-image|background-origin|background-position|background-repeat|background-size|border|border-bottom|border-bottom-color|border-bottom-left-radius|border-bottom-right-radius|border-bottom-style|border-bottom-width|border-collapse|border-color|border-image|border-image-outset|border-image-repeat|border-image-slice|border-image-source|border-image-width|border-left|border-left-color|border-left-style|border-left-width|border-radius|border-right|border-right-color|border-right-style|border-right-width|border-spacing|border-style|border-top|border-top-color|border-top-left-radius|border-top-right-radius|border-top-style|border-top-width|border-width|bottom|box-shadow|box-sizing|caption-side|clear|clip|color|column-count|column-fill|column-gap|column-rule|column-rule-color|column-rule-style|column-rule-width|column-span|column-width|columns|content|counter-increment|counter-reset|cursor|direction|display|empty-cells|filter|flex|flex-basis|flex-direction|flex-flow|flex-grow|flex-shrink|flex-wrap|float|font|font-family|font-size|font-size-adjust|font-stretch|font-style|font-variant|font-weight|hanging-punctuation|height|justify-content|left|letter-spacing|line-height|list-style|list-style-image|list-style-position|list-style-type|margin|margin-bottom|margin-left|margin-right|margin-top|max-height|max-width|max-zoom|min-height|min-width|min-zoom|nav-down|nav-index|nav-left|nav-right|nav-up|opacity|order|outline|outline-color|outline-offset|outline-style|outline-width|overflow|overflow-x|overflow-y|padding|padding-bottom|padding-left|padding-right|padding-top|page-break-after|page-break-before|page-break-inside|perspective|perspective-origin|position|quotes|resize|right|tab-size|table-layout|text-align|text-align-last|text-decoration|text-decoration-color|text-decoration-line|text-decoration-style|text-indent|text-justify|text-overflow|text-shadow|text-transform|top|transform|transform-origin|transform-style|transition|transition-delay|transition-duration|transition-property|transition-timing-function|unicode-bidi|user-select|user-zoom|vertical-align|visibility|white-space|width|word-break|word-spacing|word-wrap|z-index", a = _.supportFunction = "rgb|rgba|url|attr|counter|counters", l = _.supportConstant = "absolute|after-edge|after|all-scroll|all|alphabetic|always|antialiased|armenian|auto|avoid-column|avoid-page|avoid|balance|baseline|before-edge|before|below|bidi-override|block-line-height|block|bold|bolder|border-box|both|bottom|box|break-all|break-word|capitalize|caps-height|caption|center|central|char|circle|cjk-ideographic|clone|close-quote|col-resize|collapse|column|consider-shifts|contain|content-box|cover|crosshair|cubic-bezier|dashed|decimal-leading-zero|decimal|default|disabled|disc|disregard-shifts|distribute-all-lines|distribute-letter|distribute-space|distribute|dotted|double|e-resize|ease-in|ease-in-out|ease-out|ease|ellipsis|end|exclude-ruby|flex-end|flex-start|fill|fixed|georgian|glyphs|grid-height|groove|hand|hanging|hebrew|help|hidden|hiragana-iroha|hiragana|horizontal|icon|ideograph-alpha|ideograph-numeric|ideograph-parenthesis|ideograph-space|ideographic|inactive|include-ruby|inherit|initial|inline-block|inline-box|inline-line-height|inline-table|inline|inset|inside|inter-ideograph|inter-word|invert|italic|justify|katakana-iroha|katakana|keep-all|last|left|lighter|line-edge|line-through|line|linear|list-item|local|loose|lower-alpha|lower-greek|lower-latin|lower-roman|lowercase|lr-tb|ltr|mathematical|max-height|max-size|medium|menu|message-box|middle|move|n-resize|ne-resize|newspaper|no-change|no-close-quote|no-drop|no-open-quote|no-repeat|none|normal|not-allowed|nowrap|nw-resize|oblique|open-quote|outset|outside|overline|padding-box|page|pointer|pre-line|pre-wrap|pre|preserve-3d|progress|relative|repeat-x|repeat-y|repeat|replaced|reset-size|ridge|right|round|row-resize|rtl|s-resize|scroll|se-resize|separate|slice|small-caps|small-caption|solid|space|square|start|static|status-bar|step-end|step-start|steps|stretch|strict|sub|super|sw-resize|table-caption|table-cell|table-column-group|table-column|table-footer-group|table-header-group|table-row-group|table-row|table|tb-rl|text-after-edge|text-before-edge|text-bottom|text-size|text-top|text|thick|thin|transparent|underline|upper-alpha|upper-latin|upper-roman|uppercase|use-script|vertical-ideographic|vertical-text|visible|w-resize|wait|whitespace|z-index|zero|zoom", i = _.supportConstantColor = "aliceblue|antiquewhite|aqua|aquamarine|azure|beige|bisque|black|blanchedalmond|blue|blueviolet|brown|burlywood|cadetblue|chartreuse|chocolate|coral|cornflowerblue|cornsilk|crimson|cyan|darkblue|darkcyan|darkgoldenrod|darkgray|darkgreen|darkgrey|darkkhaki|darkmagenta|darkolivegreen|darkorange|darkorchid|darkred|darksalmon|darkseagreen|darkslateblue|darkslategray|darkslategrey|darkturquoise|darkviolet|deeppink|deepskyblue|dimgray|dimgrey|dodgerblue|firebrick|floralwhite|forestgreen|fuchsia|gainsboro|ghostwhite|gold|goldenrod|gray|green|greenyellow|grey|honeydew|hotpink|indianred|indigo|ivory|khaki|lavender|lavenderblush|lawngreen|lemonchiffon|lightblue|lightcoral|lightcyan|lightgoldenrodyellow|lightgray|lightgreen|lightgrey|lightpink|lightsalmon|lightseagreen|lightskyblue|lightslategray|lightslategrey|lightsteelblue|lightyellow|lime|limegreen|linen|magenta|maroon|mediumaquamarine|mediumblue|mediumorchid|mediumpurple|mediumseagreen|mediumslateblue|mediumspringgreen|mediumturquoise|mediumvioletred|midnightblue|mintcream|mistyrose|moccasin|navajowhite|navy|oldlace|olive|olivedrab|orange|orangered|orchid|palegoldenrod|palegreen|paleturquoise|palevioletred|papayawhip|peachpuff|peru|pink|plum|powderblue|purple|rebeccapurple|red|rosybrown|royalblue|saddlebrown|salmon|sandybrown|seagreen|seashell|sienna|silver|skyblue|slateblue|slategray|slategrey|snow|springgreen|steelblue|tan|teal|thistle|tomato|turquoise|violet|wheat|white|whitesmoke|yellow|yellowgreen", o = _.supportConstantFonts = "arial|century|comic|courier|cursive|fantasy|garamond|georgia|helvetica|impact|lucida|symbol|system|tahoma|times|trebuchet|utopia|verdana|webdings|sans-serif|serif|monospace", r = _.numRe = "\\-?(?:(?:[0-9]+(?:\\.[0-9]+)?)|(?:\\.[0-9]+))", n = _.pseudoElements = "(\\:+)\\b(after|before|first-letter|first-line|moz-selection|selection)\\b", e = _.pseudoClasses = "(:)\\b(active|checked|disabled|empty|enabled|first-child|first-of-type|focus|hover|indeterminate|invalid|last-child|last-of-type|link|not|nth-child|nth-last-child|nth-last-of-type|nth-of-type|only-child|only-of-type|required|root|target|valid|visited)\\b", t = function() {
        var s = this.createKeywordMapper({
          "support.function": a,
          "support.constant": l,
          "support.type": $,
          "support.constant.color": i,
          "support.constant.fonts": o
        }, "text", true);
        this.$rules = {
          start: [
            {
              include: [
                "strings",
                "url",
                "comments"
              ]
            },
            {
              token: "paren.lparen",
              regex: "\\{",
              next: "ruleset"
            },
            {
              token: "paren.rparen",
              regex: "\\}"
            },
            {
              token: "string",
              regex: "@(?!viewport)",
              next: "media"
            },
            {
              token: "keyword",
              regex: "#[a-z0-9-_]+"
            },
            {
              token: "keyword",
              regex: "%"
            },
            {
              token: "variable",
              regex: "\\.[a-z0-9-_]+"
            },
            {
              token: "string",
              regex: ":[a-z0-9-_]+"
            },
            {
              token: "constant.numeric",
              regex: r
            },
            {
              token: "constant",
              regex: "[a-z0-9-_]+"
            },
            {
              caseInsensitive: true
            }
          ],
          media: [
            {
              include: [
                "strings",
                "url",
                "comments"
              ]
            },
            {
              token: "paren.lparen",
              regex: "\\{",
              next: "start"
            },
            {
              token: "paren.rparen",
              regex: "\\}",
              next: "start"
            },
            {
              token: "string",
              regex: ";",
              next: "start"
            },
            {
              token: "keyword",
              regex: "(?:media|supports|document|charset|import|namespace|media|supports|document|page|font|keyframes|viewport|counter-style|font-feature-values|swash|ornaments|annotation|stylistic|styleset|character-variant)"
            }
          ],
          comments: [
            {
              token: "comment",
              regex: "\\/\\*",
              push: [
                {
                  token: "comment",
                  regex: "\\*\\/",
                  next: "pop"
                },
                {
                  defaultToken: "comment"
                }
              ]
            }
          ],
          ruleset: [
            {
              regex: "-(webkit|ms|moz|o)-",
              token: "text"
            },
            {
              token: "punctuation.operator",
              regex: "[:;]"
            },
            {
              token: "paren.rparen",
              regex: "\\}",
              next: "start"
            },
            {
              include: [
                "strings",
                "url",
                "comments"
              ]
            },
            {
              token: [
                "constant.numeric",
                "keyword"
              ],
              regex: "(" + r + ")(ch|cm|deg|em|ex|fr|gd|grad|Hz|in|kHz|mm|ms|pc|pt|px|rad|rem|s|turn|vh|vmax|vmin|vm|vw|%)"
            },
            {
              token: "constant.numeric",
              regex: r
            },
            {
              token: "constant.numeric",
              regex: "#[a-f0-9]{6}"
            },
            {
              token: "constant.numeric",
              regex: "#[a-f0-9]{3}"
            },
            {
              token: [
                "punctuation",
                "entity.other.attribute-name.pseudo-element.css"
              ],
              regex: n
            },
            {
              token: [
                "punctuation",
                "entity.other.attribute-name.pseudo-class.css"
              ],
              regex: e
            },
            {
              include: "url"
            },
            {
              token: s,
              regex: "\\-?[a-zA-Z_][a-zA-Z0-9_\\-]*"
            },
            {
              token: "paren.lparen",
              regex: "\\{"
            },
            {
              caseInsensitive: true
            }
          ],
          url: [
            {
              token: "support.function",
              regex: "(?:url(:?-prefix)?|domain|regexp)\\(",
              push: [
                {
                  token: "support.function",
                  regex: "\\)",
                  next: "pop"
                },
                {
                  defaultToken: "string"
                }
              ]
            }
          ],
          strings: [
            {
              token: "string.start",
              regex: "'",
              push: [
                {
                  token: "string.end",
                  regex: "'|$",
                  next: "pop"
                },
                {
                  include: "escapes"
                },
                {
                  token: "constant.language.escape",
                  regex: /\\$/,
                  consumeLineEnd: true
                },
                {
                  defaultToken: "string"
                }
              ]
            },
            {
              token: "string.start",
              regex: '"',
              push: [
                {
                  token: "string.end",
                  regex: '"|$',
                  next: "pop"
                },
                {
                  include: "escapes"
                },
                {
                  token: "constant.language.escape",
                  regex: /\\$/,
                  consumeLineEnd: true
                },
                {
                  defaultToken: "string"
                }
              ]
            }
          ],
          escapes: [
            {
              token: "constant.language.escape",
              regex: /\\([a-fA-F\d]{1,6}|[^a-fA-F\d])/
            }
          ]
        }, this.normalizeRules();
      };
      L.inherits(t, M), _.CssHighlightRules = t;
    }), ace.define("ace/mode/jsdoc_comment_highlight_rules", [
      "require",
      "exports",
      "module",
      "ace/lib/oop",
      "ace/mode/text_highlight_rules"
    ], function(A, _, N) {
      var L = A("../lib/oop"), M = A("./text_highlight_rules").TextHighlightRules, $ = function() {
        this.$rules = {
          start: [
            {
              token: [
                "comment.doc.tag",
                "comment.doc.text",
                "lparen.doc"
              ],
              regex: "(@(?:param|member|typedef|property|namespace|var|const|callback))(\\s*)({)",
              push: [
                {
                  token: "lparen.doc",
                  regex: "{",
                  push: [
                    {
                      include: "doc-syntax"
                    },
                    {
                      token: "rparen.doc",
                      regex: "}|(?=$)",
                      next: "pop"
                    }
                  ]
                },
                {
                  token: [
                    "rparen.doc",
                    "text.doc",
                    "variable.parameter.doc",
                    "lparen.doc",
                    "variable.parameter.doc",
                    "rparen.doc"
                  ],
                  regex: /(})(\s*)(?:([\w=:\/\.]+)|(?:(\[)([\w=:\/\.\-\'\" ]+)(\])))/,
                  next: "pop"
                },
                {
                  token: "rparen.doc",
                  regex: "}|(?=$)",
                  next: "pop"
                },
                {
                  include: "doc-syntax"
                },
                {
                  defaultToken: "text.doc"
                }
              ]
            },
            {
              token: [
                "comment.doc.tag",
                "text.doc",
                "lparen.doc"
              ],
              regex: "(@(?:returns?|yields|type|this|suppress|public|protected|private|package|modifies|implements|external|exception|throws|enum|define|extends))(\\s*)({)",
              push: [
                {
                  token: "lparen.doc",
                  regex: "{",
                  push: [
                    {
                      include: "doc-syntax"
                    },
                    {
                      token: "rparen.doc",
                      regex: "}|(?=$)",
                      next: "pop"
                    }
                  ]
                },
                {
                  token: "rparen.doc",
                  regex: "}|(?=$)",
                  next: "pop"
                },
                {
                  include: "doc-syntax"
                },
                {
                  defaultToken: "text.doc"
                }
              ]
            },
            {
              token: [
                "comment.doc.tag",
                "text.doc",
                "variable.parameter.doc"
              ],
              regex: '(@(?:alias|memberof|instance|module|name|lends|namespace|external|this|template|requires|param|implements|function|extends|typedef|mixes|constructor|var|memberof\\!|event|listens|exports|class|constructs|interface|emits|fires|throws|const|callback|borrows|augments))(\\s+)(\\w[\\w#.:/~"\\-]*)?'
            },
            {
              token: [
                "comment.doc.tag",
                "text.doc",
                "variable.parameter.doc"
              ],
              regex: "(@method)(\\s+)(\\w[\\w.\\(\\)]*)"
            },
            {
              token: "comment.doc.tag",
              regex: "@access\\s+(?:private|public|protected)"
            },
            {
              token: "comment.doc.tag",
              regex: "@kind\\s+(?:class|constant|event|external|file|function|member|mixin|module|namespace|typedef)"
            },
            {
              token: "comment.doc.tag",
              regex: "@\\w+(?=\\s|$)"
            },
            $.getTagRule(),
            {
              defaultToken: "comment.doc.body",
              caseInsensitive: true
            }
          ],
          "doc-syntax": [
            {
              token: "operator.doc",
              regex: /[|:]/
            },
            {
              token: "paren.doc",
              regex: /[\[\]]/
            }
          ]
        }, this.normalizeRules();
      };
      L.inherits($, M), $.getTagRule = function(a) {
        return {
          token: "comment.doc.tag.storage.type",
          regex: "\\b(?:TODO|FIXME|XXX|HACK)\\b"
        };
      }, $.getStartRule = function(a) {
        return {
          token: "comment.doc",
          regex: /\/\*\*(?!\/)/,
          next: a
        };
      }, $.getEndRule = function(a) {
        return {
          token: "comment.doc",
          regex: "\\*\\/",
          next: a
        };
      }, _.JsDocCommentHighlightRules = $;
    }), ace.define("ace/mode/javascript_highlight_rules", [
      "require",
      "exports",
      "module",
      "ace/lib/oop",
      "ace/mode/jsdoc_comment_highlight_rules",
      "ace/mode/text_highlight_rules"
    ], function(A, _, N) {
      var L = A("../lib/oop"), M = A("./jsdoc_comment_highlight_rules").JsDocCommentHighlightRules, $ = A("./text_highlight_rules").TextHighlightRules, a = "[a-zA-Z\\$_\xA1-\uFFFF][a-zA-Z\\d\\$_\xA1-\uFFFF]*", l = function(r) {
        var n = {
          "variable.language": "Array|Boolean|Date|Function|Iterator|Number|Object|RegExp|String|Proxy|Symbol|Namespace|QName|XML|XMLList|ArrayBuffer|Float32Array|Float64Array|Int16Array|Int32Array|Int8Array|Uint16Array|Uint32Array|Uint8Array|Uint8ClampedArray|Error|EvalError|InternalError|RangeError|ReferenceError|StopIteration|SyntaxError|TypeError|URIError|decodeURI|decodeURIComponent|encodeURI|encodeURIComponent|eval|isFinite|isNaN|parseFloat|parseInt|JSON|Math|this|arguments|prototype|window|document",
          keyword: "const|yield|import|get|set|async|await|break|case|catch|continue|default|delete|do|else|finally|for|if|in|of|instanceof|new|return|switch|throw|try|typeof|let|var|while|with|debugger|__parent__|__count__|escape|unescape|with|__proto__|class|enum|extends|super|export|implements|private|public|interface|package|protected|static|constructor",
          "storage.type": "const|let|var|function",
          "constant.language": "null|Infinity|NaN|undefined",
          "support.function": "alert",
          "constant.language.boolean": "true|false"
        }, e = this.createKeywordMapper(n, "identifier"), t = "case|do|else|finally|in|instanceof|return|throw|try|typeof|yield|void", s = "\\\\(?:x[0-9a-fA-F]{2}|u[0-9a-fA-F]{4}|u{[0-9a-fA-F]{1,6}}|[0-2][0-7]{0,2}|3[0-7][0-7]?|[4-7][0-7]?|.)", h = "(function)(\\s*)(\\*?)", u = {
          token: [
            "identifier",
            "text",
            "paren.lparen"
          ],
          regex: "(\\b(?!" + Object.values(n).join("|") + "\\b)" + a + ")(\\s*)(\\()"
        };
        this.$rules = {
          no_regex: [
            M.getStartRule("doc-start"),
            o("no_regex"),
            u,
            {
              token: "string",
              regex: "'(?=.)",
              next: "qstring"
            },
            {
              token: "string",
              regex: '"(?=.)',
              next: "qqstring"
            },
            {
              include: "numeric_constants"
            },
            {
              token: [
                "entity.name.function",
                "text",
                "keyword.operator",
                "text",
                "storage.type",
                "text",
                "storage.type",
                "text",
                "paren.lparen"
              ],
              regex: "(" + a + ")(\\s*)(=)(\\s*)" + h + "(\\s*)(\\()",
              next: "function_arguments"
            },
            {
              token: [
                "storage.type",
                "text",
                "storage.type",
                "text",
                "text",
                "entity.name.function",
                "text",
                "paren.lparen"
              ],
              regex: "(function)(?:(?:(\\s*)(\\*)(\\s*))|(\\s+))(" + a + ")(\\s*)(\\()",
              next: "function_arguments"
            },
            {
              token: [
                "entity.name.function",
                "text",
                "punctuation.operator",
                "text",
                "storage.type",
                "text",
                "storage.type",
                "text",
                "paren.lparen"
              ],
              regex: "(" + a + ")(\\s*)(:)(\\s*)" + h + "(\\s*)(\\()",
              next: "function_arguments"
            },
            {
              token: [
                "text",
                "text",
                "storage.type",
                "text",
                "storage.type",
                "text",
                "paren.lparen"
              ],
              regex: "(:)(\\s*)" + h + "(\\s*)(\\()",
              next: "function_arguments"
            },
            {
              token: "keyword",
              regex: `from(?=\\s*('|"))`
            },
            {
              token: "keyword",
              regex: "(?:" + t + ")\\b",
              next: "start"
            },
            {
              token: "support.constant",
              regex: /that\b/
            },
            {
              token: [
                "storage.type",
                "punctuation.operator",
                "support.function.firebug"
              ],
              regex: /(console)(\.)(warn|info|log|error|debug|time|trace|timeEnd|assert)\b/
            },
            {
              token: e,
              regex: a
            },
            {
              token: "punctuation.operator",
              regex: /[.](?![.])/,
              next: "property"
            },
            {
              token: "storage.type",
              regex: /=>/,
              next: "start"
            },
            {
              token: "keyword.operator",
              regex: /--|\+\+|\.{3}|===|==|=|!=|!==|<+=?|>+=?|!|&&|\|\||\?:|[!$%&*+\-~\/^]=?/,
              next: "start"
            },
            {
              token: "punctuation.operator",
              regex: /[?:,;.]/,
              next: "start"
            },
            {
              token: "paren.lparen",
              regex: /[\[({]/,
              next: "start"
            },
            {
              token: "paren.rparen",
              regex: /[\])}]/
            },
            {
              token: "comment",
              regex: /^#!.*$/
            }
          ],
          property: [
            {
              token: "text",
              regex: "\\s+"
            },
            {
              token: "keyword.operator",
              regex: /=/
            },
            {
              token: [
                "storage.type",
                "text",
                "storage.type",
                "text",
                "paren.lparen"
              ],
              regex: h + "(\\s*)(\\()",
              next: "function_arguments"
            },
            {
              token: [
                "storage.type",
                "text",
                "storage.type",
                "text",
                "text",
                "entity.name.function",
                "text",
                "paren.lparen"
              ],
              regex: "(function)(?:(?:(\\s*)(\\*)(\\s*))|(\\s+))(\\w+)(\\s*)(\\()",
              next: "function_arguments"
            },
            {
              token: "punctuation.operator",
              regex: /[.](?![.])/
            },
            {
              token: "support.function",
              regex: "prototype"
            },
            {
              token: "support.function",
              regex: /(s(?:h(?:ift|ow(?:Mod(?:elessDialog|alDialog)|Help))|croll(?:X|By(?:Pages|Lines)?|Y|To)?|t(?:op|rike)|i(?:n|zeToContent|debar|gnText)|ort|u(?:p|b(?:str(?:ing)?)?)|pli(?:ce|t)|e(?:nd|t(?:Re(?:sizable|questHeader)|M(?:i(?:nutes|lliseconds)|onth)|Seconds|Ho(?:tKeys|urs)|Year|Cursor|Time(?:out)?|Interval|ZOptions|Date|UTC(?:M(?:i(?:nutes|lliseconds)|onth)|Seconds|Hours|Date|FullYear)|FullYear|Active)|arch)|qrt|lice|avePreferences|mall)|h(?:ome|andleEvent)|navigate|c(?:har(?:CodeAt|At)|o(?:s|n(?:cat|textual|firm)|mpile)|eil|lear(?:Timeout|Interval)?|a(?:ptureEvents|ll)|reate(?:StyleSheet|Popup|EventObject))|t(?:o(?:GMTString|S(?:tring|ource)|U(?:TCString|pperCase)|Lo(?:caleString|werCase))|est|a(?:n|int(?:Enabled)?))|i(?:s(?:NaN|Finite)|ndexOf|talics)|d(?:isableExternalCapture|ump|etachEvent)|u(?:n(?:shift|taint|escape|watch)|pdateCommands)|j(?:oin|avaEnabled)|p(?:o(?:p|w)|ush|lugins.refresh|a(?:ddings|rse(?:Int|Float)?)|r(?:int|ompt|eference))|e(?:scape|nableExternalCapture|val|lementFromPoint|x(?:p|ec(?:Script|Command)?))|valueOf|UTC|queryCommand(?:State|Indeterm|Enabled|Value)|f(?:i(?:nd|lter|le(?:ModifiedDate|Size|CreatedDate|UpdatedDate)|xed)|o(?:nt(?:size|color)|rward|rEach)|loor|romCharCode)|watch|l(?:ink|o(?:ad|g)|astIndexOf)|a(?:sin|nchor|cos|t(?:tachEvent|ob|an(?:2)?)|pply|lert|b(?:s|ort))|r(?:ou(?:nd|teEvents)|e(?:size(?:By|To)|calc|turnValue|place|verse|l(?:oad|ease(?:Capture|Events)))|andom)|g(?:o|et(?:ResponseHeader|M(?:i(?:nutes|lliseconds)|onth)|Se(?:conds|lection)|Hours|Year|Time(?:zoneOffset)?|Da(?:y|te)|UTC(?:M(?:i(?:nutes|lliseconds)|onth)|Seconds|Hours|Da(?:y|te)|FullYear)|FullYear|A(?:ttention|llResponseHeaders)))|m(?:in|ove(?:B(?:y|elow)|To(?:Absolute)?|Above)|ergeAttributes|a(?:tch|rgins|x))|b(?:toa|ig|o(?:ld|rderWidths)|link|ack))\b(?=\()/
            },
            {
              token: "support.function.dom",
              regex: /(s(?:ub(?:stringData|mit)|plitText|e(?:t(?:NamedItem|Attribute(?:Node)?)|lect))|has(?:ChildNodes|Feature)|namedItem|c(?:l(?:ick|o(?:se|neNode))|reate(?:C(?:omment|DATASection|aption)|T(?:Head|extNode|Foot)|DocumentFragment|ProcessingInstruction|E(?:ntityReference|lement)|Attribute))|tabIndex|i(?:nsert(?:Row|Before|Cell|Data)|tem)|open|delete(?:Row|C(?:ell|aption)|T(?:Head|Foot)|Data)|focus|write(?:ln)?|a(?:dd|ppend(?:Child|Data))|re(?:set|place(?:Child|Data)|move(?:NamedItem|Child|Attribute(?:Node)?)?)|get(?:NamedItem|Element(?:sBy(?:Name|TagName|ClassName)|ById)|Attribute(?:Node)?)|blur)\b(?=\()/
            },
            {
              token: "support.constant",
              regex: /(s(?:ystemLanguage|cr(?:ipts|ollbars|een(?:X|Y|Top|Left))|t(?:yle(?:Sheets)?|atus(?:Text|bar)?)|ibling(?:Below|Above)|ource|uffixes|e(?:curity(?:Policy)?|l(?:ection|f)))|h(?:istory|ost(?:name)?|as(?:h|Focus))|y|X(?:MLDocument|SLDocument)|n(?:ext|ame(?:space(?:s|URI)|Prop))|M(?:IN_VALUE|AX_VALUE)|c(?:haracterSet|o(?:n(?:structor|trollers)|okieEnabled|lorDepth|mp(?:onents|lete))|urrent|puClass|l(?:i(?:p(?:boardData)?|entInformation)|osed|asses)|alle(?:e|r)|rypto)|t(?:o(?:olbar|p)|ext(?:Transform|Indent|Decoration|Align)|ags)|SQRT(?:1_2|2)|i(?:n(?:ner(?:Height|Width)|put)|ds|gnoreCase)|zIndex|o(?:scpu|n(?:readystatechange|Line)|uter(?:Height|Width)|p(?:sProfile|ener)|ffscreenBuffering)|NEGATIVE_INFINITY|d(?:i(?:splay|alog(?:Height|Top|Width|Left|Arguments)|rectories)|e(?:scription|fault(?:Status|Ch(?:ecked|arset)|View)))|u(?:ser(?:Profile|Language|Agent)|n(?:iqueID|defined)|pdateInterval)|_content|p(?:ixelDepth|ort|ersonalbar|kcs11|l(?:ugins|atform)|a(?:thname|dding(?:Right|Bottom|Top|Left)|rent(?:Window|Layer)?|ge(?:X(?:Offset)?|Y(?:Offset)?))|r(?:o(?:to(?:col|type)|duct(?:Sub)?|mpter)|e(?:vious|fix)))|e(?:n(?:coding|abledPlugin)|x(?:ternal|pando)|mbeds)|v(?:isibility|endor(?:Sub)?|Linkcolor)|URLUnencoded|P(?:I|OSITIVE_INFINITY)|f(?:ilename|o(?:nt(?:Size|Family|Weight)|rmName)|rame(?:s|Element)|gColor)|E|whiteSpace|l(?:i(?:stStyleType|n(?:eHeight|kColor))|o(?:ca(?:tion(?:bar)?|lName)|wsrc)|e(?:ngth|ft(?:Context)?)|a(?:st(?:M(?:odified|atch)|Index|Paren)|yer(?:s|X)|nguage))|a(?:pp(?:MinorVersion|Name|Co(?:deName|re)|Version)|vail(?:Height|Top|Width|Left)|ll|r(?:ity|guments)|Linkcolor|bove)|r(?:ight(?:Context)?|e(?:sponse(?:XML|Text)|adyState))|global|x|m(?:imeTypes|ultiline|enubar|argin(?:Right|Bottom|Top|Left))|L(?:N(?:10|2)|OG(?:10E|2E))|b(?:o(?:ttom|rder(?:Width|RightWidth|BottomWidth|Style|Color|TopWidth|LeftWidth))|ufferDepth|elow|ackground(?:Color|Image)))\b/
            },
            {
              token: "identifier",
              regex: a
            },
            {
              regex: "",
              token: "empty",
              next: "no_regex"
            }
          ],
          start: [
            M.getStartRule("doc-start"),
            o("start"),
            {
              token: "string.regexp",
              regex: "\\/",
              next: "regex"
            },
            {
              token: "text",
              regex: "\\s+|^$",
              next: "start"
            },
            {
              token: "empty",
              regex: "",
              next: "no_regex"
            }
          ],
          regex: [
            {
              token: "regexp.keyword.operator",
              regex: "\\\\(?:u[\\da-fA-F]{4}|x[\\da-fA-F]{2}|.)"
            },
            {
              token: "string.regexp",
              regex: "/[sxngimy]*",
              next: "no_regex"
            },
            {
              token: "invalid",
              regex: /\{\d+\b,?\d*\}[+*]|[+*$^?][+*]|[$^][?]|\?{3,}/
            },
            {
              token: "constant.language.escape",
              regex: /\(\?[:=!]|\)|\{\d+\b,?\d*\}|[+*]\?|[()$^+*?.]/
            },
            {
              token: "constant.language.delimiter",
              regex: /\|/
            },
            {
              token: "constant.language.escape",
              regex: /\[\^?/,
              next: "regex_character_class"
            },
            {
              token: "empty",
              regex: "$",
              next: "no_regex"
            },
            {
              defaultToken: "string.regexp"
            }
          ],
          regex_character_class: [
            {
              token: "regexp.charclass.keyword.operator",
              regex: "\\\\(?:u[\\da-fA-F]{4}|x[\\da-fA-F]{2}|.)"
            },
            {
              token: "constant.language.escape",
              regex: "]",
              next: "regex"
            },
            {
              token: "constant.language.escape",
              regex: "-"
            },
            {
              token: "empty",
              regex: "$",
              next: "no_regex"
            },
            {
              defaultToken: "string.regexp.charachterclass"
            }
          ],
          default_parameter: [
            {
              token: "string",
              regex: "'(?=.)",
              push: [
                {
                  token: "string",
                  regex: "'|$",
                  next: "pop"
                },
                {
                  include: "qstring"
                }
              ]
            },
            {
              token: "string",
              regex: '"(?=.)',
              push: [
                {
                  token: "string",
                  regex: '"|$',
                  next: "pop"
                },
                {
                  include: "qqstring"
                }
              ]
            },
            {
              token: "constant.language",
              regex: "null|Infinity|NaN|undefined"
            },
            {
              include: "numeric_constants"
            },
            {
              token: "punctuation.operator",
              regex: ",",
              next: "function_arguments"
            },
            {
              token: "text",
              regex: "\\s+"
            },
            {
              token: "punctuation.operator",
              regex: "$"
            },
            {
              token: "empty",
              regex: "",
              next: "no_regex"
            }
          ],
          function_arguments: [
            o("function_arguments"),
            {
              token: "variable.parameter",
              regex: a
            },
            {
              token: "punctuation.operator",
              regex: ","
            },
            {
              token: "text",
              regex: "\\s+"
            },
            {
              token: "punctuation.operator",
              regex: "$"
            },
            {
              token: "empty",
              regex: "",
              next: "no_regex"
            }
          ],
          qqstring: [
            {
              token: "constant.language.escape",
              regex: s
            },
            {
              token: "string",
              regex: "\\\\$",
              consumeLineEnd: true
            },
            {
              token: "string",
              regex: '"|$',
              next: "no_regex"
            },
            {
              defaultToken: "string"
            }
          ],
          qstring: [
            {
              token: "constant.language.escape",
              regex: s
            },
            {
              token: "string",
              regex: "\\\\$",
              consumeLineEnd: true
            },
            {
              token: "string",
              regex: "'|$",
              next: "no_regex"
            },
            {
              defaultToken: "string"
            }
          ],
          numeric_constants: [
            {
              token: "constant.numeric",
              regex: /0(?:[xX][0-9a-fA-F_]+|[oO][0-7_]+|[bB][01_]+)\b/
            },
            {
              token: "constant.numeric",
              regex: /(?:\d[\d_]*(?:\.[\d_]*)?|\.\d[\d_]*)(?:[eE][+-]?\d+\b)?/
            }
          ]
        }, (!r || !r.noES6) && (this.$rules.no_regex.unshift({
          regex: "[{}]",
          onMatch: function(S, b, f) {
            if (this.next = S == "{" ? this.nextState : "", S == "{" && f.length) f.unshift("start", b);
            else if (S == "}" && f.length && (f.shift(), this.next = f.shift(), this.next.indexOf("string") != -1 || this.next.indexOf("jsx") != -1)) return "paren.quasi.end";
            return S == "{" ? "paren.lparen" : "paren.rparen";
          },
          nextState: "start"
        }, {
          token: "string.quasi.start",
          regex: /`/,
          push: [
            {
              token: "constant.language.escape",
              regex: s
            },
            {
              token: "paren.quasi.start",
              regex: /\${/,
              push: "start"
            },
            {
              token: "string.quasi.end",
              regex: /`/,
              next: "pop"
            },
            {
              defaultToken: "string.quasi"
            }
          ]
        }, {
          token: [
            "variable.parameter",
            "text"
          ],
          regex: "(" + a + ")(\\s*)(?=\\=>)"
        }, {
          token: "paren.lparen",
          regex: "(\\()(?=[^\\(]+\\s*=>)",
          next: "function_arguments"
        }, {
          token: "variable.language",
          regex: "(?:(?:(?:Weak)?(?:Set|Map))|Promise)\\b"
        }), this.$rules.function_arguments.unshift({
          token: "keyword.operator",
          regex: "=",
          next: "default_parameter"
        }, {
          token: "keyword.operator",
          regex: "\\.{3}"
        }), this.$rules.property.unshift({
          token: "support.function",
          regex: "(findIndex|repeat|startsWith|endsWith|includes|isSafeInteger|trunc|cbrt|log2|log10|sign|then|catch|finally|resolve|reject|race|any|all|allSettled|keys|entries|isInteger)\\b(?=\\()"
        }, {
          token: "constant.language",
          regex: "(?:MAX_SAFE_INTEGER|MIN_SAFE_INTEGER|EPSILON)\\b"
        }), (!r || r.jsx != false) && i.call(this)), this.embedRules(M, "doc-", [
          M.getEndRule("no_regex")
        ]), this.normalizeRules();
      };
      L.inherits(l, $);
      function i() {
        var r = a.replace("\\d", "\\d\\-"), n = {
          onMatch: function(t, s, h) {
            var u = t.charAt(1) == "/" ? 2 : 1;
            return u == 1 ? (s != this.nextState ? h.unshift(this.next, this.nextState, 0) : h.unshift(this.next), h[2]++) : u == 2 && s == this.nextState && (h[1]--, (!h[1] || h[1] < 0) && (h.shift(), h.shift())), [
              {
                type: "meta.tag.punctuation." + (u == 1 ? "" : "end-") + "tag-open.xml",
                value: t.slice(0, u)
              },
              {
                type: "meta.tag.tag-name.xml",
                value: t.substr(u)
              }
            ];
          },
          regex: "</?(?:" + r + "|(?=>))",
          next: "jsxAttributes",
          nextState: "jsx"
        };
        this.$rules.start.unshift(n);
        var e = {
          regex: "{",
          token: "paren.quasi.start",
          push: "start"
        };
        this.$rules.jsx = [
          e,
          n,
          {
            include: "reference"
          },
          {
            defaultToken: "string.xml"
          }
        ], this.$rules.jsxAttributes = [
          {
            token: "meta.tag.punctuation.tag-close.xml",
            regex: "/?>",
            onMatch: function(t, s, h) {
              return s == h[0] && h.shift(), t.length == 2 && (h[0] == this.nextState && h[1]--, (!h[1] || h[1] < 0) && h.splice(0, 2)), this.next = h[0] || "start", [
                {
                  type: this.token,
                  value: t
                }
              ];
            },
            nextState: "jsx"
          },
          e,
          o("jsxAttributes"),
          {
            token: "entity.other.attribute-name.xml",
            regex: r
          },
          {
            token: "keyword.operator.attribute-equals.xml",
            regex: "="
          },
          {
            token: "text.tag-whitespace.xml",
            regex: "\\s+"
          },
          {
            token: "string.attribute-value.xml",
            regex: "'",
            stateName: "jsx_attr_q",
            push: [
              {
                token: "string.attribute-value.xml",
                regex: "'",
                next: "pop"
              },
              {
                include: "reference"
              },
              {
                defaultToken: "string.attribute-value.xml"
              }
            ]
          },
          {
            token: "string.attribute-value.xml",
            regex: '"',
            stateName: "jsx_attr_qq",
            push: [
              {
                token: "string.attribute-value.xml",
                regex: '"',
                next: "pop"
              },
              {
                include: "reference"
              },
              {
                defaultToken: "string.attribute-value.xml"
              }
            ]
          },
          n
        ], this.$rules.reference = [
          {
            token: "constant.language.escape.reference.xml",
            regex: "(?:&#[0-9]+;)|(?:&#x[0-9a-fA-F]+;)|(?:&[a-zA-Z0-9_:\\.-]+;)"
          }
        ];
      }
      function o(r) {
        return [
          {
            token: "comment",
            regex: /\/\*/,
            next: [
              M.getTagRule(),
              {
                token: "comment",
                regex: "\\*\\/",
                next: r || "pop"
              },
              {
                defaultToken: "comment",
                caseInsensitive: true
              }
            ]
          },
          {
            token: "comment",
            regex: "\\/\\/",
            next: [
              M.getTagRule(),
              {
                token: "comment",
                regex: "$|^",
                next: r || "pop"
              },
              {
                defaultToken: "comment",
                caseInsensitive: true
              }
            ]
          }
        ];
      }
      _.JavaScriptHighlightRules = l;
    }), ace.define("ace/mode/xml_highlight_rules", [
      "require",
      "exports",
      "module",
      "ace/lib/oop",
      "ace/mode/text_highlight_rules"
    ], function(A, _, N) {
      var L = A("../lib/oop"), M = A("./text_highlight_rules").TextHighlightRules, $ = function(a) {
        var l = "[_:a-zA-Z\xC0-\uFFFF][-_:.a-zA-Z0-9\xC0-\uFFFF]*";
        this.$rules = {
          start: [
            {
              token: "string.cdata.xml",
              regex: "<\\!\\[CDATA\\[",
              next: "cdata"
            },
            {
              token: [
                "punctuation.instruction.xml",
                "keyword.instruction.xml"
              ],
              regex: "(<\\?)(" + l + ")",
              next: "processing_instruction"
            },
            {
              token: "comment.start.xml",
              regex: "<\\!--",
              next: "comment"
            },
            {
              token: [
                "xml-pe.doctype.xml",
                "xml-pe.doctype.xml"
              ],
              regex: "(<\\!)(DOCTYPE)(?=[\\s])",
              next: "doctype",
              caseInsensitive: true
            },
            {
              include: "tag"
            },
            {
              token: "text.end-tag-open.xml",
              regex: "</"
            },
            {
              token: "text.tag-open.xml",
              regex: "<"
            },
            {
              include: "reference"
            },
            {
              defaultToken: "text.xml"
            }
          ],
          processing_instruction: [
            {
              token: "entity.other.attribute-name.decl-attribute-name.xml",
              regex: l
            },
            {
              token: "keyword.operator.decl-attribute-equals.xml",
              regex: "="
            },
            {
              include: "whitespace"
            },
            {
              include: "string"
            },
            {
              token: "punctuation.xml-decl.xml",
              regex: "\\?>",
              next: "start"
            }
          ],
          doctype: [
            {
              include: "whitespace"
            },
            {
              include: "string"
            },
            {
              token: "xml-pe.doctype.xml",
              regex: ">",
              next: "start"
            },
            {
              token: "xml-pe.xml",
              regex: "[-_a-zA-Z0-9:]+"
            },
            {
              token: "punctuation.int-subset",
              regex: "\\[",
              push: "int_subset"
            }
          ],
          int_subset: [
            {
              token: "text.xml",
              regex: "\\s+"
            },
            {
              token: "punctuation.int-subset.xml",
              regex: "]",
              next: "pop"
            },
            {
              token: [
                "punctuation.markup-decl.xml",
                "keyword.markup-decl.xml"
              ],
              regex: "(<\\!)(" + l + ")",
              push: [
                {
                  token: "text",
                  regex: "\\s+"
                },
                {
                  token: "punctuation.markup-decl.xml",
                  regex: ">",
                  next: "pop"
                },
                {
                  include: "string"
                }
              ]
            }
          ],
          cdata: [
            {
              token: "string.cdata.xml",
              regex: "\\]\\]>",
              next: "start"
            },
            {
              token: "text.xml",
              regex: "\\s+"
            },
            {
              token: "text.xml",
              regex: "(?:[^\\]]|\\](?!\\]>))+"
            }
          ],
          comment: [
            {
              token: "comment.end.xml",
              regex: "-->",
              next: "start"
            },
            {
              defaultToken: "comment.xml"
            }
          ],
          reference: [
            {
              token: "constant.language.escape.reference.xml",
              regex: "(?:&#[0-9]+;)|(?:&#x[0-9a-fA-F]+;)|(?:&[a-zA-Z0-9_:\\.-]+;)"
            }
          ],
          attr_reference: [
            {
              token: "constant.language.escape.reference.attribute-value.xml",
              regex: "(?:&#[0-9]+;)|(?:&#x[0-9a-fA-F]+;)|(?:&[a-zA-Z0-9_:\\.-]+;)"
            }
          ],
          tag: [
            {
              token: [
                "meta.tag.punctuation.tag-open.xml",
                "meta.tag.punctuation.end-tag-open.xml",
                "meta.tag.tag-name.xml"
              ],
              regex: "(?:(<)|(</))((?:" + l + ":)?" + l + ")",
              next: [
                {
                  include: "attributes"
                },
                {
                  token: "meta.tag.punctuation.tag-close.xml",
                  regex: "/?>",
                  next: "start"
                }
              ]
            }
          ],
          tag_whitespace: [
            {
              token: "text.tag-whitespace.xml",
              regex: "\\s+"
            }
          ],
          whitespace: [
            {
              token: "text.whitespace.xml",
              regex: "\\s+"
            }
          ],
          string: [
            {
              token: "string.xml",
              regex: "'",
              push: [
                {
                  token: "string.xml",
                  regex: "'",
                  next: "pop"
                },
                {
                  defaultToken: "string.xml"
                }
              ]
            },
            {
              token: "string.xml",
              regex: '"',
              push: [
                {
                  token: "string.xml",
                  regex: '"',
                  next: "pop"
                },
                {
                  defaultToken: "string.xml"
                }
              ]
            }
          ],
          attributes: [
            {
              token: "entity.other.attribute-name.xml",
              regex: l
            },
            {
              token: "keyword.operator.attribute-equals.xml",
              regex: "="
            },
            {
              include: "tag_whitespace"
            },
            {
              include: "attribute_value"
            }
          ],
          attribute_value: [
            {
              token: "string.attribute-value.xml",
              regex: "'",
              push: [
                {
                  token: "string.attribute-value.xml",
                  regex: "'",
                  next: "pop"
                },
                {
                  include: "attr_reference"
                },
                {
                  defaultToken: "string.attribute-value.xml"
                }
              ]
            },
            {
              token: "string.attribute-value.xml",
              regex: '"',
              push: [
                {
                  token: "string.attribute-value.xml",
                  regex: '"',
                  next: "pop"
                },
                {
                  include: "attr_reference"
                },
                {
                  defaultToken: "string.attribute-value.xml"
                }
              ]
            }
          ]
        }, this.constructor === $ && this.normalizeRules();
      };
      (function() {
        this.embedTagRules = function(a, l, i) {
          this.$rules.tag.unshift({
            token: [
              "meta.tag.punctuation.tag-open.xml",
              "meta.tag." + i + ".tag-name.xml"
            ],
            regex: "(<)(" + i + "(?=\\s|>|$))",
            next: [
              {
                include: "attributes"
              },
              {
                token: "meta.tag.punctuation.tag-close.xml",
                regex: "/?>",
                next: l + "start"
              }
            ]
          }), this.$rules[i + "-end"] = [
            {
              include: "attributes"
            },
            {
              token: "meta.tag.punctuation.tag-close.xml",
              regex: "/?>",
              next: "start",
              onMatch: function(o, r, n) {
                return n.splice(0), this.token;
              }
            }
          ], this.embedRules(a, l, [
            {
              token: [
                "meta.tag.punctuation.end-tag-open.xml",
                "meta.tag." + i + ".tag-name.xml"
              ],
              regex: "(</)(" + i + "(?=\\s|>|$))",
              next: i + "-end"
            },
            {
              token: "string.cdata.xml",
              regex: "<\\!\\[CDATA\\["
            },
            {
              token: "string.cdata.xml",
              regex: "\\]\\]>"
            }
          ]);
        };
      }).call(M.prototype), L.inherits($, M), _.XmlHighlightRules = $;
    }), ace.define("ace/mode/html_highlight_rules", [
      "require",
      "exports",
      "module",
      "ace/lib/oop",
      "ace/lib/lang",
      "ace/mode/css_highlight_rules",
      "ace/mode/javascript_highlight_rules",
      "ace/mode/xml_highlight_rules"
    ], function(A, _, N) {
      var L = A("../lib/oop"), M = A("../lib/lang"), $ = A("./css_highlight_rules").CssHighlightRules, a = A("./javascript_highlight_rules").JavaScriptHighlightRules, l = A("./xml_highlight_rules").XmlHighlightRules, i = M.createMap({
        a: "anchor",
        button: "form",
        form: "form",
        img: "image",
        input: "form",
        label: "form",
        option: "form",
        script: "script",
        select: "form",
        textarea: "form",
        style: "style",
        table: "table",
        tbody: "table",
        td: "table",
        tfoot: "table",
        th: "table",
        tr: "table"
      }), o = function() {
        l.call(this), this.addRules({
          attributes: [
            {
              include: "tag_whitespace"
            },
            {
              token: "entity.other.attribute-name.xml",
              regex: "[-_a-zA-Z0-9:.]+"
            },
            {
              token: "keyword.operator.attribute-equals.xml",
              regex: "=",
              push: [
                {
                  include: "tag_whitespace"
                },
                {
                  token: "string.unquoted.attribute-value.html",
                  regex: "[^<>='\"`\\s]+",
                  next: "pop"
                },
                {
                  token: "empty",
                  regex: "",
                  next: "pop"
                }
              ]
            },
            {
              include: "attribute_value"
            }
          ],
          tag: [
            {
              token: function(r, n) {
                var e = i[n];
                return [
                  "meta.tag.punctuation." + (r == "<" ? "" : "end-") + "tag-open.xml",
                  "meta.tag" + (e ? "." + e : "") + ".tag-name.xml"
                ];
              },
              regex: "(</?)([-_a-zA-Z0-9:.]+)",
              next: "tag_stuff"
            }
          ],
          tag_stuff: [
            {
              include: "attributes"
            },
            {
              token: "meta.tag.punctuation.tag-close.xml",
              regex: "/?>",
              next: "start"
            }
          ]
        }), this.embedTagRules($, "css-", "style"), this.embedTagRules(new a({
          jsx: false
        }).getRules(), "js-", "script"), this.constructor === o && this.normalizeRules();
      };
      L.inherits(o, l), _.HtmlHighlightRules = o;
    }), ace.define("ace/mode/matching_brace_outdent", [
      "require",
      "exports",
      "module",
      "ace/range"
    ], function(A, _, N) {
      var L = A("../range").Range, M = function() {
      };
      (function() {
        this.checkOutdent = function($, a) {
          return /^\s+$/.test($) ? /^\s*\}/.test(a) : false;
        }, this.autoOutdent = function($, a) {
          var l = $.getLine(a), i = l.match(/^(\s*\})/);
          if (!i) return 0;
          var o = i[1].length, r = $.findMatchingBracket({
            row: a,
            column: o
          });
          if (!r || r.row == a) return 0;
          var n = this.$getIndent($.getLine(r.row));
          $.replace(new L(a, 0, a, o - 1), n);
        }, this.$getIndent = function($) {
          return $.match(/^\s*/)[0];
        };
      }).call(M.prototype), _.MatchingBraceOutdent = M;
    }), ace.define("ace/mode/behaviour/xml", [
      "require",
      "exports",
      "module",
      "ace/lib/oop",
      "ace/mode/behaviour",
      "ace/token_iterator"
    ], function(A, _, N) {
      var L = A("../../lib/oop"), M = A("../behaviour").Behaviour, $ = A("../../token_iterator").TokenIterator;
      function a(i, o) {
        return i && i.type.lastIndexOf(o + ".xml") > -1;
      }
      var l = function() {
        this.add("string_dquotes", "insertion", function(i, o, r, n, e) {
          if (e == '"' || e == "'") {
            var t = e, s = n.doc.getTextRange(r.getSelectionRange());
            if (s !== "" && s !== "'" && s != '"' && r.getWrapBehavioursEnabled()) return {
              text: t + s + t,
              selection: false
            };
            var h = r.getCursorPosition(), u = n.doc.getLine(h.row), S = u.substring(h.column, h.column + 1), b = new $(n, h.row, h.column), f = b.getCurrentToken();
            if (S == t && (a(f, "attribute-value") || a(f, "string"))) return {
              text: "",
              selection: [
                1,
                1
              ]
            };
            if (f || (f = b.stepBackward()), !f) return;
            for (; a(f, "tag-whitespace") || a(f, "whitespace"); ) f = b.stepBackward();
            var c = !S || S.match(/\s/);
            if (a(f, "attribute-equals") && (c || S == ">") || a(f, "decl-attribute-equals") && (c || S == "?")) return {
              text: t + t,
              selection: [
                1,
                1
              ]
            };
          }
        }), this.add("string_dquotes", "deletion", function(i, o, r, n, e) {
          var t = n.doc.getTextRange(e);
          if (!e.isMultiLine() && (t == '"' || t == "'")) {
            var s = n.doc.getLine(e.start.row), h = s.substring(e.start.column + 1, e.start.column + 2);
            if (h == t) return e.end.column++, e;
          }
        }), this.add("autoclosing", "insertion", function(i, o, r, n, e) {
          if (e == ">") {
            var t = r.getSelectionRange().start, s = new $(n, t.row, t.column), h = s.getCurrentToken() || s.stepBackward();
            if (!h || !(a(h, "tag-name") || a(h, "tag-whitespace") || a(h, "attribute-name") || a(h, "attribute-equals") || a(h, "attribute-value")) || a(h, "reference.attribute-value")) return;
            if (a(h, "attribute-value")) {
              var u = s.getCurrentTokenColumn() + h.value.length;
              if (t.column < u) return;
              if (t.column == u) {
                var S = s.stepForward();
                if (S && a(S, "attribute-value")) return;
                s.stepBackward();
              }
            }
            if (/^\s*>/.test(n.getLine(t.row).slice(t.column))) return;
            for (; !a(h, "tag-name"); ) if (h = s.stepBackward(), h.value == "<") {
              h = s.stepForward();
              break;
            }
            var b = s.getCurrentTokenRow(), f = s.getCurrentTokenColumn();
            if (a(s.stepBackward(), "end-tag-open")) return;
            var c = h.value;
            return b == t.row && (c = c.substring(0, t.column - f)), this.voidElements && this.voidElements.hasOwnProperty(c.toLowerCase()) ? void 0 : {
              text: "></" + c + ">",
              selection: [
                1,
                1
              ]
            };
          }
        }), this.add("autoindent", "insertion", function(i, o, r, n, e) {
          if (e == `
`) {
            var t = r.getCursorPosition(), s = n.getLine(t.row), h = new $(n, t.row, t.column), u = h.getCurrentToken();
            if (a(u, "") && u.type.indexOf("tag-close") !== -1) {
              if (u.value == "/>") return;
              for (; u && u.type.indexOf("tag-name") === -1; ) u = h.stepBackward();
              if (!u) return;
              var S = u.value, b = h.getCurrentTokenRow();
              if (u = h.stepBackward(), !u || u.type.indexOf("end-tag") !== -1) return;
              if (this.voidElements && !this.voidElements[S] || !this.voidElements) {
                var f = n.getTokenAt(t.row, t.column + 1), s = n.getLine(b), c = this.$getIndent(s), w = c + n.getTabString();
                return f && f.value === "</" ? {
                  text: `
` + w + `
` + c,
                  selection: [
                    1,
                    w.length,
                    1,
                    w.length
                  ]
                } : {
                  text: `
` + w
                };
              }
            }
          }
        });
      };
      L.inherits(l, M), _.XmlBehaviour = l;
    }), ace.define("ace/mode/behaviour/javascript", [
      "require",
      "exports",
      "module",
      "ace/lib/oop",
      "ace/token_iterator",
      "ace/mode/behaviour/cstyle",
      "ace/mode/behaviour/xml"
    ], function(A, _, N) {
      var L = A("../../lib/oop"), M = A("../../token_iterator").TokenIterator, $ = A("../behaviour/cstyle").CstyleBehaviour, a = A("../behaviour/xml").XmlBehaviour, l = function() {
        var i = new a({
          closeCurlyBraces: true
        }).getBehaviours();
        this.addBehaviours(i), this.inherit($), this.add("autoclosing-fragment", "insertion", function(o, r, n, e, t) {
          if (t == ">") {
            var s = n.getSelectionRange().start, h = new M(e, s.row, s.column), u = h.getCurrentToken() || h.stepBackward();
            if (!u) return;
            if (u.value == "<") return {
              text: "></>",
              selection: [
                1,
                1
              ]
            };
          }
        });
      };
      L.inherits(l, $), _.JavaScriptBehaviour = l;
    }), ace.define("ace/mode/folding/xml", [
      "require",
      "exports",
      "module",
      "ace/lib/oop",
      "ace/range",
      "ace/mode/folding/fold_mode"
    ], function(A, _, N) {
      var L = A("../../lib/oop"), M = A("../../range").Range, $ = A("./fold_mode").FoldMode, a = _.FoldMode = function(o, r) {
        $.call(this), this.voidElements = o || {}, this.optionalEndTags = L.mixin({}, this.voidElements), r && L.mixin(this.optionalEndTags, r);
      };
      L.inherits(a, $);
      var l = function() {
        this.tagName = "", this.closing = false, this.selfClosing = false, this.start = {
          row: 0,
          column: 0
        }, this.end = {
          row: 0,
          column: 0
        };
      };
      function i(o, r) {
        return o && o.type && o.type.lastIndexOf(r + ".xml") > -1;
      }
      (function() {
        this.getFoldWidget = function(o, r, n) {
          var e = this._getFirstTagInLine(o, n);
          return e ? e.closing || !e.tagName && e.selfClosing ? r === "markbeginend" ? "end" : "" : !e.tagName || e.selfClosing || this.voidElements.hasOwnProperty(e.tagName.toLowerCase()) || this._findEndTagInLine(o, n, e.tagName, e.end.column) ? "" : "start" : this.getCommentFoldWidget(o, n);
        }, this.getCommentFoldWidget = function(o, r) {
          return /comment/.test(o.getState(r)) && /<!-/.test(o.getLine(r)) ? "start" : "";
        }, this._getFirstTagInLine = function(o, r) {
          for (var n = o.getTokens(r), e = new l(), t = 0; t < n.length; t++) {
            var s = n[t];
            if (i(s, "tag-open")) {
              if (e.end.column = e.start.column + s.value.length, e.closing = i(s, "end-tag-open"), s = n[++t], !s) return null;
              if (e.tagName = s.value, s.value === "") {
                if (s = n[++t], !s) return null;
                e.tagName = s.value;
              }
              for (e.end.column += s.value.length, t++; t < n.length; t++) if (s = n[t], e.end.column += s.value.length, i(s, "tag-close")) {
                e.selfClosing = s.value == "/>";
                break;
              }
              return e;
            } else if (i(s, "tag-close")) return e.selfClosing = s.value == "/>", e;
            e.start.column += s.value.length;
          }
          return null;
        }, this._findEndTagInLine = function(o, r, n, e) {
          for (var t = o.getTokens(r), s = 0, h = 0; h < t.length; h++) {
            var u = t[h];
            if (s += u.value.length, !(s < e - 1) && i(u, "end-tag-open") && (u = t[h + 1], i(u, "tag-name") && u.value === "" && (u = t[h + 2]), u && u.value == n)) return true;
          }
          return false;
        }, this.getFoldWidgetRange = function(o, r, n) {
          var e = this._getFirstTagInLine(o, n);
          if (!e) return this.getCommentFoldWidget(o, n) && o.getCommentFoldRange(n, o.getLine(n).length);
          var t = o.getMatchingTags({
            row: n,
            column: 0
          });
          if (t) return new M(t.openTag.end.row, t.openTag.end.column, t.closeTag.start.row, t.closeTag.start.column);
        };
      }).call(a.prototype);
    }), ace.define("ace/mode/folding/cstyle", [
      "require",
      "exports",
      "module",
      "ace/lib/oop",
      "ace/range",
      "ace/mode/folding/fold_mode"
    ], function(A, _, N) {
      var L = A("../../lib/oop"), M = A("../../range").Range, $ = A("./fold_mode").FoldMode, a = _.FoldMode = function(l) {
        l && (this.foldingStartMarker = new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/, "|" + l.start)), this.foldingStopMarker = new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/, "|" + l.end)));
      };
      L.inherits(a, $), (function() {
        this.foldingStartMarker = /([\{\[\(])[^\}\]\)]*$|^\s*(\/\*)/, this.foldingStopMarker = /^[^\[\{\(]*([\}\]\)])|^[\s\*]*(\*\/)/, this.singleLineBlockCommentRe = /^\s*(\/\*).*\*\/\s*$/, this.tripleStarBlockCommentRe = /^\s*(\/\*\*\*).*\*\/\s*$/, this.startRegionRe = /^\s*(\/\*|\/\/)#?region\b/, this._getFoldWidgetBase = this.getFoldWidget, this.getFoldWidget = function(l, i, o) {
          var r = l.getLine(o);
          if (this.singleLineBlockCommentRe.test(r) && !this.startRegionRe.test(r) && !this.tripleStarBlockCommentRe.test(r)) return "";
          var n = this._getFoldWidgetBase(l, i, o);
          return !n && this.startRegionRe.test(r) ? "start" : n;
        }, this.getFoldWidgetRange = function(l, i, o, r) {
          var n = l.getLine(o);
          if (this.startRegionRe.test(n)) return this.getCommentRegionBlock(l, n, o);
          var s = n.match(this.foldingStartMarker);
          if (s) {
            var e = s.index;
            if (s[1]) return this.openingBracketBlock(l, s[1], o, e);
            var t = l.getCommentFoldRange(o, e + s[0].length, 1);
            return t && !t.isMultiLine() && (r ? t = this.getSectionRange(l, o) : i != "all" && (t = null)), t;
          }
          if (i !== "markbegin") {
            var s = n.match(this.foldingStopMarker);
            if (s) {
              var e = s.index + s[0].length;
              return s[1] ? this.closingBracketBlock(l, s[1], o, e) : l.getCommentFoldRange(o, e, -1);
            }
          }
        }, this.getSectionRange = function(l, i) {
          var o = l.getLine(i), r = o.search(/\S/), n = i, e = o.length;
          i = i + 1;
          for (var t = i, s = l.getLength(); ++i < s; ) {
            o = l.getLine(i);
            var h = o.search(/\S/);
            if (h !== -1) {
              if (r > h) break;
              var u = this.getFoldWidgetRange(l, "all", i);
              if (u) {
                if (u.start.row <= n) break;
                if (u.isMultiLine()) i = u.end.row;
                else if (r == h) break;
              }
              t = i;
            }
          }
          return new M(n, e, t, l.getLine(t).length);
        }, this.getCommentRegionBlock = function(l, i, o) {
          for (var r = i.search(/\s*$/), n = l.getLength(), e = o, t = /^\s*(?:\/\*|\/\/|--)#?(end)?region\b/, s = 1; ++o < n; ) {
            i = l.getLine(o);
            var h = t.exec(i);
            if (h && (h[1] ? s-- : s++, !s)) break;
          }
          var u = o;
          if (u > e) return new M(e, r, u, i.length);
        };
      }).call(a.prototype);
    }), ace.define("ace/mode/folding/javascript", [
      "require",
      "exports",
      "module",
      "ace/lib/oop",
      "ace/mode/folding/xml",
      "ace/mode/folding/cstyle"
    ], function(A, _, N) {
      var L = A("../../lib/oop"), M = A("./xml").FoldMode, $ = A("./cstyle").FoldMode, a = _.FoldMode = function(l) {
        l && (this.foldingStartMarker = new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/, "|" + l.start)), this.foldingStopMarker = new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/, "|" + l.end))), this.xmlFoldMode = new M();
      };
      L.inherits(a, $), (function() {
        this.getFoldWidgetRangeBase = this.getFoldWidgetRange, this.getFoldWidgetBase = this.getFoldWidget, this.getFoldWidget = function(l, i, o) {
          var r = this.getFoldWidgetBase(l, i, o);
          return r || this.xmlFoldMode.getFoldWidget(l, i, o);
        }, this.getFoldWidgetRange = function(l, i, o, r) {
          var n = this.getFoldWidgetRangeBase(l, i, o, r);
          return n || this.xmlFoldMode.getFoldWidgetRange(l, i, o);
        };
      }).call(a.prototype);
    }), ace.define("ace/mode/javascript", [
      "require",
      "exports",
      "module",
      "ace/lib/oop",
      "ace/mode/text",
      "ace/mode/javascript_highlight_rules",
      "ace/mode/matching_brace_outdent",
      "ace/worker/worker_client",
      "ace/mode/behaviour/javascript",
      "ace/mode/folding/javascript"
    ], function(A, _, N) {
      var L = A("../lib/oop"), M = A("./text").Mode, $ = A("./javascript_highlight_rules").JavaScriptHighlightRules, a = A("./matching_brace_outdent").MatchingBraceOutdent, l = A("../worker/worker_client").WorkerClient, i = A("./behaviour/javascript").JavaScriptBehaviour, o = A("./folding/javascript").FoldMode, r = function() {
        this.HighlightRules = $, this.$outdent = new a(), this.$behaviour = new i(), this.foldingRules = new o();
      };
      L.inherits(r, M), (function() {
        this.lineCommentStart = "//", this.blockComment = {
          start: "/*",
          end: "*/"
        }, this.$quotes = {
          '"': '"',
          "'": "'",
          "`": "`"
        }, this.$pairQuotesAfter = {
          "`": /\w/
        }, this.getNextLineIndent = function(n, e, t) {
          var s = this.$getIndent(e), h = this.getTokenizer().getLineTokens(e, n), u = h.tokens, S = h.state;
          if (u.length && u[u.length - 1].type == "comment") return s;
          if (n == "start" || n == "no_regex") {
            var b = e.match(/^.*(?:\bcase\b.*:|[\{\(\[])\s*$/);
            b && (s += t);
          } else if (n == "doc-start" && (S == "start" || S == "no_regex")) return "";
          return s;
        }, this.checkOutdent = function(n, e, t) {
          return this.$outdent.checkOutdent(e, t);
        }, this.autoOutdent = function(n, e, t) {
          this.$outdent.autoOutdent(e, t);
        }, this.createWorker = function(n) {
          var e = new l([
            "ace"
          ], "ace/mode/javascript_worker", "JavaScriptWorker");
          return e.attachToDocument(n.getDocument()), e.on("annotate", function(t) {
            n.setAnnotations(t.data);
          }), e.on("terminate", function() {
            n.clearAnnotations();
          }), e;
        }, this.$id = "ace/mode/javascript", this.snippetFileId = "ace/snippets/javascript";
      }).call(r.prototype), _.Mode = r;
    }), ace.define("ace/mode/css_completions", [
      "require",
      "exports",
      "module"
    ], function(A, _, N) {
      var L = {
        background: {
          "#$0": 1
        },
        "background-color": {
          "#$0": 1,
          transparent: 1,
          fixed: 1
        },
        "background-image": {
          "url('/$0')": 1
        },
        "background-repeat": {
          repeat: 1,
          "repeat-x": 1,
          "repeat-y": 1,
          "no-repeat": 1,
          inherit: 1
        },
        "background-position": {
          bottom: 2,
          center: 2,
          left: 2,
          right: 2,
          top: 2,
          inherit: 2
        },
        "background-attachment": {
          scroll: 1,
          fixed: 1
        },
        "background-size": {
          cover: 1,
          contain: 1
        },
        "background-clip": {
          "border-box": 1,
          "padding-box": 1,
          "content-box": 1
        },
        "background-origin": {
          "border-box": 1,
          "padding-box": 1,
          "content-box": 1
        },
        border: {
          "solid $0": 1,
          "dashed $0": 1,
          "dotted $0": 1,
          "#$0": 1
        },
        "border-color": {
          "#$0": 1
        },
        "border-style": {
          solid: 2,
          dashed: 2,
          dotted: 2,
          double: 2,
          groove: 2,
          hidden: 2,
          inherit: 2,
          inset: 2,
          none: 2,
          outset: 2,
          ridged: 2
        },
        "border-collapse": {
          collapse: 1,
          separate: 1
        },
        bottom: {
          px: 1,
          em: 1,
          "%": 1
        },
        clear: {
          left: 1,
          right: 1,
          both: 1,
          none: 1
        },
        color: {
          "#$0": 1,
          "rgb(#$00,0,0)": 1
        },
        cursor: {
          default: 1,
          pointer: 1,
          move: 1,
          text: 1,
          wait: 1,
          help: 1,
          progress: 1,
          "n-resize": 1,
          "ne-resize": 1,
          "e-resize": 1,
          "se-resize": 1,
          "s-resize": 1,
          "sw-resize": 1,
          "w-resize": 1,
          "nw-resize": 1
        },
        display: {
          none: 1,
          block: 1,
          inline: 1,
          "inline-block": 1,
          "table-cell": 1
        },
        "empty-cells": {
          show: 1,
          hide: 1
        },
        float: {
          left: 1,
          right: 1,
          none: 1
        },
        "font-family": {
          Arial: 2,
          "Comic Sans MS": 2,
          Consolas: 2,
          "Courier New": 2,
          Courier: 2,
          Georgia: 2,
          Monospace: 2,
          "Sans-Serif": 2,
          "Segoe UI": 2,
          Tahoma: 2,
          "Times New Roman": 2,
          "Trebuchet MS": 2,
          Verdana: 1
        },
        "font-size": {
          px: 1,
          em: 1,
          "%": 1
        },
        "font-weight": {
          bold: 1,
          normal: 1
        },
        "font-style": {
          italic: 1,
          normal: 1
        },
        "font-variant": {
          normal: 1,
          "small-caps": 1
        },
        height: {
          px: 1,
          em: 1,
          "%": 1
        },
        left: {
          px: 1,
          em: 1,
          "%": 1
        },
        "letter-spacing": {
          normal: 1
        },
        "line-height": {
          normal: 1
        },
        "list-style-type": {
          none: 1,
          disc: 1,
          circle: 1,
          square: 1,
          decimal: 1,
          "decimal-leading-zero": 1,
          "lower-roman": 1,
          "upper-roman": 1,
          "lower-greek": 1,
          "lower-latin": 1,
          "upper-latin": 1,
          georgian: 1,
          "lower-alpha": 1,
          "upper-alpha": 1
        },
        margin: {
          px: 1,
          em: 1,
          "%": 1
        },
        "margin-right": {
          px: 1,
          em: 1,
          "%": 1
        },
        "margin-left": {
          px: 1,
          em: 1,
          "%": 1
        },
        "margin-top": {
          px: 1,
          em: 1,
          "%": 1
        },
        "margin-bottom": {
          px: 1,
          em: 1,
          "%": 1
        },
        "max-height": {
          px: 1,
          em: 1,
          "%": 1
        },
        "max-width": {
          px: 1,
          em: 1,
          "%": 1
        },
        "min-height": {
          px: 1,
          em: 1,
          "%": 1
        },
        "min-width": {
          px: 1,
          em: 1,
          "%": 1
        },
        overflow: {
          hidden: 1,
          visible: 1,
          auto: 1,
          scroll: 1
        },
        "overflow-x": {
          hidden: 1,
          visible: 1,
          auto: 1,
          scroll: 1
        },
        "overflow-y": {
          hidden: 1,
          visible: 1,
          auto: 1,
          scroll: 1
        },
        padding: {
          px: 1,
          em: 1,
          "%": 1
        },
        "padding-top": {
          px: 1,
          em: 1,
          "%": 1
        },
        "padding-right": {
          px: 1,
          em: 1,
          "%": 1
        },
        "padding-bottom": {
          px: 1,
          em: 1,
          "%": 1
        },
        "padding-left": {
          px: 1,
          em: 1,
          "%": 1
        },
        "page-break-after": {
          auto: 1,
          always: 1,
          avoid: 1,
          left: 1,
          right: 1
        },
        "page-break-before": {
          auto: 1,
          always: 1,
          avoid: 1,
          left: 1,
          right: 1
        },
        position: {
          absolute: 1,
          relative: 1,
          fixed: 1,
          static: 1
        },
        right: {
          px: 1,
          em: 1,
          "%": 1
        },
        "table-layout": {
          fixed: 1,
          auto: 1
        },
        "text-decoration": {
          none: 1,
          underline: 1,
          "line-through": 1,
          blink: 1
        },
        "text-align": {
          left: 1,
          right: 1,
          center: 1,
          justify: 1
        },
        "text-transform": {
          capitalize: 1,
          uppercase: 1,
          lowercase: 1,
          none: 1
        },
        top: {
          px: 1,
          em: 1,
          "%": 1
        },
        "vertical-align": {
          top: 1,
          bottom: 1
        },
        visibility: {
          hidden: 1,
          visible: 1
        },
        "white-space": {
          nowrap: 1,
          normal: 1,
          pre: 1,
          "pre-line": 1,
          "pre-wrap": 1
        },
        width: {
          px: 1,
          em: 1,
          "%": 1
        },
        "word-spacing": {
          normal: 1
        },
        filter: {
          "alpha(opacity=$0100)": 1
        },
        "text-shadow": {
          "$02px 2px 2px #777": 1
        },
        "text-overflow": {
          "ellipsis-word": 1,
          clip: 1,
          ellipsis: 1
        },
        "-moz-border-radius": 1,
        "-moz-border-radius-topright": 1,
        "-moz-border-radius-bottomright": 1,
        "-moz-border-radius-topleft": 1,
        "-moz-border-radius-bottomleft": 1,
        "-webkit-border-radius": 1,
        "-webkit-border-top-right-radius": 1,
        "-webkit-border-top-left-radius": 1,
        "-webkit-border-bottom-right-radius": 1,
        "-webkit-border-bottom-left-radius": 1,
        "-moz-box-shadow": 1,
        "-webkit-box-shadow": 1,
        transform: {
          "rotate($00deg)": 1,
          "skew($00deg)": 1
        },
        "-moz-transform": {
          "rotate($00deg)": 1,
          "skew($00deg)": 1
        },
        "-webkit-transform": {
          "rotate($00deg)": 1,
          "skew($00deg)": 1
        }
      }, M = function() {
      };
      (function() {
        this.completionsDefined = false, this.defineCompletions = function() {
          if (document) {
            var $ = document.createElement("c").style;
            for (var a in $) if (typeof $[a] == "string") {
              var l = a.replace(/[A-Z]/g, function(i) {
                return "-" + i.toLowerCase();
              });
              L.hasOwnProperty(l) || (L[l] = 1);
            }
          }
          this.completionsDefined = true;
        }, this.getCompletions = function($, a, l, i) {
          if (this.completionsDefined || this.defineCompletions(), $ === "ruleset" || a.$mode.$id == "ace/mode/scss") {
            var o = a.getLine(l.row).substr(0, l.column), r = /\([^)]*$/.test(o);
            return r && (o = o.substr(o.lastIndexOf("(") + 1)), /:[^;]+$/.test(o) ? this.getPropertyValueCompletions($, a, l, i) : this.getPropertyCompletions($, a, l, i, r);
          }
          return [];
        }, this.getPropertyCompletions = function($, a, l, i, o) {
          o = o || false;
          var r = Object.keys(L);
          return r.map(function(n) {
            return {
              caption: n,
              snippet: n + ": $0" + (o ? "" : ";"),
              meta: "property",
              score: 1e6
            };
          });
        }, this.getPropertyValueCompletions = function($, a, l, i) {
          var o = a.getLine(l.row).substr(0, l.column), r = (/([\w\-]+):[^:]*$/.exec(o) || {})[1];
          if (!r) return [];
          var n = [];
          return r in L && typeof L[r] == "object" && (n = Object.keys(L[r])), n.map(function(e) {
            return {
              caption: e,
              snippet: e,
              meta: "property value",
              score: 1e6
            };
          });
        };
      }).call(M.prototype), _.CssCompletions = M;
    }), ace.define("ace/mode/behaviour/css", [
      "require",
      "exports",
      "module",
      "ace/lib/oop",
      "ace/mode/behaviour",
      "ace/mode/behaviour/cstyle",
      "ace/token_iterator"
    ], function(A, _, N) {
      var L = A("../../lib/oop");
      A("../behaviour").Behaviour;
      var M = A("./cstyle").CstyleBehaviour, $ = A("../../token_iterator").TokenIterator, a = function() {
        this.inherit(M), this.add("colon", "insertion", function(l, i, o, r, n) {
          if (n === ":" && o.selection.isEmpty()) {
            var e = o.getCursorPosition(), t = new $(r, e.row, e.column), s = t.getCurrentToken();
            if (s && s.value.match(/\s+/) && (s = t.stepBackward()), s && s.type === "support.type") {
              var h = r.doc.getLine(e.row), u = h.substring(e.column, e.column + 1);
              if (u === ":") return {
                text: "",
                selection: [
                  1,
                  1
                ]
              };
              if (/^(\s+[^;]|\s*$)/.test(h.substring(e.column))) return {
                text: ":;",
                selection: [
                  1,
                  1
                ]
              };
            }
          }
        }), this.add("colon", "deletion", function(l, i, o, r, n) {
          var e = r.doc.getTextRange(n);
          if (!n.isMultiLine() && e === ":") {
            var t = o.getCursorPosition(), s = new $(r, t.row, t.column), h = s.getCurrentToken();
            if (h && h.value.match(/\s+/) && (h = s.stepBackward()), h && h.type === "support.type") {
              var u = r.doc.getLine(n.start.row), S = u.substring(n.end.column, n.end.column + 1);
              if (S === ";") return n.end.column++, n;
            }
          }
        }), this.add("semicolon", "insertion", function(l, i, o, r, n) {
          if (n === ";" && o.selection.isEmpty()) {
            var e = o.getCursorPosition(), t = r.doc.getLine(e.row), s = t.substring(e.column, e.column + 1);
            if (s === ";") return {
              text: "",
              selection: [
                1,
                1
              ]
            };
          }
        }), this.add("!important", "insertion", function(l, i, o, r, n) {
          if (n === "!" && o.selection.isEmpty()) {
            var e = o.getCursorPosition(), t = r.doc.getLine(e.row);
            if (/^\s*(;|}|$)/.test(t.substring(e.column))) return {
              text: "!important",
              selection: [
                10,
                10
              ]
            };
          }
        });
      };
      L.inherits(a, M), _.CssBehaviour = a;
    }), ace.define("ace/mode/css", [
      "require",
      "exports",
      "module",
      "ace/lib/oop",
      "ace/mode/text",
      "ace/mode/css_highlight_rules",
      "ace/mode/matching_brace_outdent",
      "ace/worker/worker_client",
      "ace/mode/css_completions",
      "ace/mode/behaviour/css",
      "ace/mode/folding/cstyle"
    ], function(A, _, N) {
      var L = A("../lib/oop"), M = A("./text").Mode, $ = A("./css_highlight_rules").CssHighlightRules, a = A("./matching_brace_outdent").MatchingBraceOutdent, l = A("../worker/worker_client").WorkerClient, i = A("./css_completions").CssCompletions, o = A("./behaviour/css").CssBehaviour, r = A("./folding/cstyle").FoldMode, n = function() {
        this.HighlightRules = $, this.$outdent = new a(), this.$behaviour = new o(), this.$completer = new i(), this.foldingRules = new r();
      };
      L.inherits(n, M), (function() {
        this.foldingRules = "cStyle", this.blockComment = {
          start: "/*",
          end: "*/"
        }, this.getNextLineIndent = function(e, t, s) {
          var h = this.$getIndent(t), u = this.getTokenizer().getLineTokens(t, e).tokens;
          if (u.length && u[u.length - 1].type == "comment") return h;
          var S = t.match(/^.*\{\s*$/);
          return S && (h += s), h;
        }, this.checkOutdent = function(e, t, s) {
          return this.$outdent.checkOutdent(t, s);
        }, this.autoOutdent = function(e, t, s) {
          this.$outdent.autoOutdent(t, s);
        }, this.getCompletions = function(e, t, s, h) {
          return this.$completer.getCompletions(e, t, s, h);
        }, this.createWorker = function(e) {
          var t = new l([
            "ace"
          ], "ace/mode/css_worker", "Worker");
          return t.attachToDocument(e.getDocument()), t.on("annotate", function(s) {
            e.setAnnotations(s.data);
          }), t.on("terminate", function() {
            e.clearAnnotations();
          }), t;
        }, this.$id = "ace/mode/css", this.snippetFileId = "ace/snippets/css";
      }).call(n.prototype), _.Mode = n;
    }), ace.define("ace/mode/folding/mixed", [
      "require",
      "exports",
      "module",
      "ace/lib/oop",
      "ace/mode/folding/fold_mode"
    ], function(A, _, N) {
      var L = A("../../lib/oop"), M = A("./fold_mode").FoldMode, $ = _.FoldMode = function(a, l) {
        this.defaultMode = a, this.subModes = l;
      };
      L.inherits($, M), (function() {
        this.$getMode = function(a) {
          typeof a != "string" && (a = a[0]);
          for (var l in this.subModes) if (a.indexOf(l) === 0) return this.subModes[l];
          return null;
        }, this.$tryMode = function(a, l, i, o) {
          var r = this.$getMode(a);
          return r ? r.getFoldWidget(l, i, o) : "";
        }, this.getFoldWidget = function(a, l, i) {
          return this.$tryMode(a.getState(i - 1), a, l, i) || this.$tryMode(a.getState(i), a, l, i) || this.defaultMode.getFoldWidget(a, l, i);
        }, this.getFoldWidgetRange = function(a, l, i) {
          var o = this.$getMode(a.getState(i - 1));
          return (!o || !o.getFoldWidget(a, l, i)) && (o = this.$getMode(a.getState(i))), (!o || !o.getFoldWidget(a, l, i)) && (o = this.defaultMode), o.getFoldWidgetRange(a, l, i);
        };
      }).call($.prototype);
    }), ace.define("ace/mode/folding/html", [
      "require",
      "exports",
      "module",
      "ace/lib/oop",
      "ace/mode/folding/mixed",
      "ace/mode/folding/xml",
      "ace/mode/folding/cstyle"
    ], function(A, _, N) {
      var L = A("../../lib/oop"), M = A("./mixed").FoldMode, $ = A("./xml").FoldMode, a = A("./cstyle").FoldMode, l = _.FoldMode = function(i, o) {
        M.call(this, new $(i, o), {
          "js-": new a(),
          "css-": new a()
        });
      };
      L.inherits(l, M);
    }), ace.define("ace/mode/html_completions", [
      "require",
      "exports",
      "module",
      "ace/token_iterator"
    ], function(A, _, N) {
      var L = A("../token_iterator").TokenIterator, M = [
        "accesskey",
        "class",
        "contenteditable",
        "contextmenu",
        "dir",
        "draggable",
        "dropzone",
        "hidden",
        "id",
        "inert",
        "itemid",
        "itemprop",
        "itemref",
        "itemscope",
        "itemtype",
        "lang",
        "spellcheck",
        "style",
        "tabindex",
        "title",
        "translate"
      ], $ = [
        "onabort",
        "onblur",
        "oncancel",
        "oncanplay",
        "oncanplaythrough",
        "onchange",
        "onclick",
        "onclose",
        "oncontextmenu",
        "oncuechange",
        "ondblclick",
        "ondrag",
        "ondragend",
        "ondragenter",
        "ondragleave",
        "ondragover",
        "ondragstart",
        "ondrop",
        "ondurationchange",
        "onemptied",
        "onended",
        "onerror",
        "onfocus",
        "oninput",
        "oninvalid",
        "onkeydown",
        "onkeypress",
        "onkeyup",
        "onload",
        "onloadeddata",
        "onloadedmetadata",
        "onloadstart",
        "onmousedown",
        "onmousemove",
        "onmouseout",
        "onmouseover",
        "onmouseup",
        "onmousewheel",
        "onpause",
        "onplay",
        "onplaying",
        "onprogress",
        "onratechange",
        "onreset",
        "onscroll",
        "onseeked",
        "onseeking",
        "onselect",
        "onshow",
        "onstalled",
        "onsubmit",
        "onsuspend",
        "ontimeupdate",
        "onvolumechange",
        "onwaiting"
      ], a = M.concat($), l = {
        a: {
          href: 1,
          target: {
            _blank: 1,
            top: 1
          },
          ping: 1,
          rel: {
            nofollow: 1,
            alternate: 1,
            author: 1,
            bookmark: 1,
            help: 1,
            license: 1,
            next: 1,
            noreferrer: 1,
            prefetch: 1,
            prev: 1,
            search: 1,
            tag: 1
          },
          media: 1,
          hreflang: 1,
          type: 1
        },
        abbr: {},
        address: {},
        area: {
          shape: 1,
          coords: 1,
          href: 1,
          hreflang: 1,
          alt: 1,
          target: 1,
          media: 1,
          rel: 1,
          ping: 1,
          type: 1
        },
        article: {
          pubdate: 1
        },
        aside: {},
        audio: {
          src: 1,
          autobuffer: 1,
          autoplay: {
            autoplay: 1
          },
          loop: {
            loop: 1
          },
          controls: {
            controls: 1
          },
          muted: {
            muted: 1
          },
          preload: {
            auto: 1,
            metadata: 1,
            none: 1
          }
        },
        b: {},
        base: {
          href: 1,
          target: 1
        },
        bdi: {},
        bdo: {},
        blockquote: {
          cite: 1
        },
        body: {
          onafterprint: 1,
          onbeforeprint: 1,
          onbeforeunload: 1,
          onhashchange: 1,
          onmessage: 1,
          onoffline: 1,
          onpopstate: 1,
          onredo: 1,
          onresize: 1,
          onstorage: 1,
          onundo: 1,
          onunload: 1
        },
        br: {},
        button: {
          autofocus: 1,
          disabled: {
            disabled: 1
          },
          form: 1,
          formaction: 1,
          formenctype: 1,
          formmethod: 1,
          formnovalidate: 1,
          formtarget: 1,
          name: 1,
          value: 1,
          type: {
            button: 1,
            submit: 1
          }
        },
        canvas: {
          width: 1,
          height: 1
        },
        caption: {},
        cite: {},
        code: {},
        col: {
          span: 1
        },
        colgroup: {
          span: 1
        },
        command: {
          type: 1,
          label: 1,
          icon: 1,
          disabled: 1,
          checked: 1,
          radiogroup: 1,
          command: 1
        },
        data: {},
        datalist: {},
        dd: {},
        del: {
          cite: 1,
          datetime: 1
        },
        details: {
          open: 1
        },
        dfn: {},
        dialog: {
          open: 1
        },
        div: {},
        dl: {},
        dt: {},
        em: {},
        embed: {
          src: 1,
          height: 1,
          width: 1,
          type: 1
        },
        fieldset: {
          disabled: 1,
          form: 1,
          name: 1
        },
        figcaption: {},
        figure: {},
        footer: {},
        form: {
          "accept-charset": 1,
          action: 1,
          autocomplete: 1,
          enctype: {
            "multipart/form-data": 1,
            "application/x-www-form-urlencoded": 1
          },
          method: {
            get: 1,
            post: 1
          },
          name: 1,
          novalidate: 1,
          target: {
            _blank: 1,
            top: 1
          }
        },
        h1: {},
        h2: {},
        h3: {},
        h4: {},
        h5: {},
        h6: {},
        head: {},
        header: {},
        hr: {},
        html: {
          manifest: 1
        },
        i: {},
        iframe: {
          name: 1,
          src: 1,
          height: 1,
          width: 1,
          sandbox: {
            "allow-same-origin": 1,
            "allow-top-navigation": 1,
            "allow-forms": 1,
            "allow-scripts": 1
          },
          seamless: {
            seamless: 1
          }
        },
        img: {
          alt: 1,
          src: 1,
          height: 1,
          width: 1,
          usemap: 1,
          ismap: 1
        },
        input: {
          type: {
            text: 1,
            password: 1,
            hidden: 1,
            checkbox: 1,
            submit: 1,
            radio: 1,
            file: 1,
            button: 1,
            reset: 1,
            image: 31,
            color: 1,
            date: 1,
            datetime: 1,
            "datetime-local": 1,
            email: 1,
            month: 1,
            number: 1,
            range: 1,
            search: 1,
            tel: 1,
            time: 1,
            url: 1,
            week: 1
          },
          accept: 1,
          alt: 1,
          autocomplete: {
            on: 1,
            off: 1
          },
          autofocus: {
            autofocus: 1
          },
          checked: {
            checked: 1
          },
          disabled: {
            disabled: 1
          },
          form: 1,
          formaction: 1,
          formenctype: {
            "application/x-www-form-urlencoded": 1,
            "multipart/form-data": 1,
            "text/plain": 1
          },
          formmethod: {
            get: 1,
            post: 1
          },
          formnovalidate: {
            formnovalidate: 1
          },
          formtarget: {
            _blank: 1,
            _self: 1,
            _parent: 1,
            _top: 1
          },
          height: 1,
          list: 1,
          max: 1,
          maxlength: 1,
          min: 1,
          multiple: {
            multiple: 1
          },
          name: 1,
          pattern: 1,
          placeholder: 1,
          readonly: {
            readonly: 1
          },
          required: {
            required: 1
          },
          size: 1,
          src: 1,
          step: 1,
          width: 1,
          files: 1,
          value: 1
        },
        ins: {
          cite: 1,
          datetime: 1
        },
        kbd: {},
        keygen: {
          autofocus: 1,
          challenge: {
            challenge: 1
          },
          disabled: {
            disabled: 1
          },
          form: 1,
          keytype: {
            rsa: 1,
            dsa: 1,
            ec: 1
          },
          name: 1
        },
        label: {
          form: 1,
          for: 1
        },
        legend: {},
        li: {
          value: 1
        },
        link: {
          href: 1,
          hreflang: 1,
          rel: {
            stylesheet: 1,
            icon: 1
          },
          media: {
            all: 1,
            screen: 1,
            print: 1
          },
          type: {
            "text/css": 1,
            "image/png": 1,
            "image/jpeg": 1,
            "image/gif": 1
          },
          sizes: 1
        },
        main: {},
        map: {
          name: 1
        },
        mark: {},
        math: {},
        menu: {
          type: 1,
          label: 1
        },
        meta: {
          "http-equiv": {
            "content-type": 1
          },
          name: {
            description: 1,
            keywords: 1
          },
          content: {
            "text/html; charset=UTF-8": 1
          },
          charset: 1
        },
        meter: {
          value: 1,
          min: 1,
          max: 1,
          low: 1,
          high: 1,
          optimum: 1
        },
        nav: {},
        noscript: {
          href: 1
        },
        object: {
          param: 1,
          data: 1,
          type: 1,
          height: 1,
          width: 1,
          usemap: 1,
          name: 1,
          form: 1,
          classid: 1
        },
        ol: {
          start: 1,
          reversed: 1
        },
        optgroup: {
          disabled: 1,
          label: 1
        },
        option: {
          disabled: 1,
          selected: 1,
          label: 1,
          value: 1
        },
        output: {
          for: 1,
          form: 1,
          name: 1
        },
        p: {},
        param: {
          name: 1,
          value: 1
        },
        pre: {},
        progress: {
          value: 1,
          max: 1
        },
        q: {
          cite: 1
        },
        rp: {},
        rt: {},
        ruby: {},
        s: {},
        samp: {},
        script: {
          charset: 1,
          type: {
            "text/javascript": 1
          },
          src: 1,
          defer: 1,
          async: 1
        },
        select: {
          autofocus: 1,
          disabled: 1,
          form: 1,
          multiple: {
            multiple: 1
          },
          name: 1,
          size: 1,
          readonly: {
            readonly: 1
          }
        },
        small: {},
        source: {
          src: 1,
          type: 1,
          media: 1
        },
        span: {},
        strong: {},
        style: {
          type: 1,
          media: {
            all: 1,
            screen: 1,
            print: 1
          },
          scoped: 1
        },
        sub: {},
        sup: {},
        svg: {},
        table: {
          summary: 1
        },
        tbody: {},
        td: {
          headers: 1,
          rowspan: 1,
          colspan: 1
        },
        textarea: {
          autofocus: {
            autofocus: 1
          },
          disabled: {
            disabled: 1
          },
          form: 1,
          maxlength: 1,
          name: 1,
          placeholder: 1,
          readonly: {
            readonly: 1
          },
          required: {
            required: 1
          },
          rows: 1,
          cols: 1,
          wrap: {
            on: 1,
            off: 1,
            hard: 1,
            soft: 1
          }
        },
        tfoot: {},
        th: {
          headers: 1,
          rowspan: 1,
          colspan: 1,
          scope: 1
        },
        thead: {},
        time: {
          datetime: 1
        },
        title: {},
        tr: {},
        track: {
          kind: 1,
          src: 1,
          srclang: 1,
          label: 1,
          default: 1
        },
        section: {},
        summary: {},
        u: {},
        ul: {},
        var: {},
        video: {
          src: 1,
          autobuffer: 1,
          autoplay: {
            autoplay: 1
          },
          loop: {
            loop: 1
          },
          controls: {
            controls: 1
          },
          width: 1,
          height: 1,
          poster: 1,
          muted: {
            muted: 1
          },
          preload: {
            auto: 1,
            metadata: 1,
            none: 1
          }
        },
        wbr: {}
      }, i = Object.keys(l);
      function o(t, s) {
        return t.type.lastIndexOf(s + ".xml") > -1;
      }
      function r(t, s) {
        for (var h = new L(t, s.row, s.column), u = h.getCurrentToken(); u && !o(u, "tag-name"); ) u = h.stepBackward();
        if (u) return u.value;
      }
      function n(t, s) {
        for (var h = new L(t, s.row, s.column), u = h.getCurrentToken(); u && !o(u, "attribute-name"); ) u = h.stepBackward();
        if (u) return u.value;
      }
      var e = function() {
      };
      (function() {
        this.getCompletions = function(t, s, h, u) {
          var S = s.getTokenAt(h.row, h.column);
          if (!S) return [];
          if (o(S, "tag-name") || o(S, "tag-open") || o(S, "end-tag-open")) return this.getTagCompletions(t, s, h, u);
          if (o(S, "tag-whitespace") || o(S, "attribute-name")) return this.getAttributeCompletions(t, s, h, u);
          if (o(S, "attribute-value")) return this.getAttributeValueCompletions(t, s, h, u);
          var b = s.getLine(h.row).substr(0, h.column);
          return /&[a-z]*$/i.test(b) ? this.getHTMLEntityCompletions(t, s, h, u) : [];
        }, this.getTagCompletions = function(t, s, h, u) {
          return i.map(function(S) {
            return {
              value: S,
              meta: "tag",
              score: 1e6
            };
          });
        }, this.getAttributeCompletions = function(t, s, h, u) {
          var S = r(s, h);
          if (!S) return [];
          var b = a;
          return S in l && (b = b.concat(Object.keys(l[S]))), b.map(function(f) {
            return {
              caption: f,
              snippet: f + '="$0"',
              meta: "attribute",
              score: 1e6
            };
          });
        }, this.getAttributeValueCompletions = function(t, s, h, u) {
          var S = r(s, h), b = n(s, h);
          if (!S) return [];
          var f = [];
          return S in l && b in l[S] && typeof l[S][b] == "object" && (f = Object.keys(l[S][b])), f.map(function(c) {
            return {
              caption: c,
              snippet: c,
              meta: "attribute value",
              score: 1e6
            };
          });
        }, this.getHTMLEntityCompletions = function(t, s, h, u) {
          var S = [
            "Aacute;",
            "aacute;",
            "Acirc;",
            "acirc;",
            "acute;",
            "AElig;",
            "aelig;",
            "Agrave;",
            "agrave;",
            "alefsym;",
            "Alpha;",
            "alpha;",
            "amp;",
            "and;",
            "ang;",
            "Aring;",
            "aring;",
            "asymp;",
            "Atilde;",
            "atilde;",
            "Auml;",
            "auml;",
            "bdquo;",
            "Beta;",
            "beta;",
            "brvbar;",
            "bull;",
            "cap;",
            "Ccedil;",
            "ccedil;",
            "cedil;",
            "cent;",
            "Chi;",
            "chi;",
            "circ;",
            "clubs;",
            "cong;",
            "copy;",
            "crarr;",
            "cup;",
            "curren;",
            "Dagger;",
            "dagger;",
            "dArr;",
            "darr;",
            "deg;",
            "Delta;",
            "delta;",
            "diams;",
            "divide;",
            "Eacute;",
            "eacute;",
            "Ecirc;",
            "ecirc;",
            "Egrave;",
            "egrave;",
            "empty;",
            "emsp;",
            "ensp;",
            "Epsilon;",
            "epsilon;",
            "equiv;",
            "Eta;",
            "eta;",
            "ETH;",
            "eth;",
            "Euml;",
            "euml;",
            "euro;",
            "exist;",
            "fnof;",
            "forall;",
            "frac12;",
            "frac14;",
            "frac34;",
            "frasl;",
            "Gamma;",
            "gamma;",
            "ge;",
            "gt;",
            "hArr;",
            "harr;",
            "hearts;",
            "hellip;",
            "Iacute;",
            "iacute;",
            "Icirc;",
            "icirc;",
            "iexcl;",
            "Igrave;",
            "igrave;",
            "image;",
            "infin;",
            "int;",
            "Iota;",
            "iota;",
            "iquest;",
            "isin;",
            "Iuml;",
            "iuml;",
            "Kappa;",
            "kappa;",
            "Lambda;",
            "lambda;",
            "lang;",
            "laquo;",
            "lArr;",
            "larr;",
            "lceil;",
            "ldquo;",
            "le;",
            "lfloor;",
            "lowast;",
            "loz;",
            "lrm;",
            "lsaquo;",
            "lsquo;",
            "lt;",
            "macr;",
            "mdash;",
            "micro;",
            "middot;",
            "minus;",
            "Mu;",
            "mu;",
            "nabla;",
            "nbsp;",
            "ndash;",
            "ne;",
            "ni;",
            "not;",
            "notin;",
            "nsub;",
            "Ntilde;",
            "ntilde;",
            "Nu;",
            "nu;",
            "Oacute;",
            "oacute;",
            "Ocirc;",
            "ocirc;",
            "OElig;",
            "oelig;",
            "Ograve;",
            "ograve;",
            "oline;",
            "Omega;",
            "omega;",
            "Omicron;",
            "omicron;",
            "oplus;",
            "or;",
            "ordf;",
            "ordm;",
            "Oslash;",
            "oslash;",
            "Otilde;",
            "otilde;",
            "otimes;",
            "Ouml;",
            "ouml;",
            "para;",
            "part;",
            "permil;",
            "perp;",
            "Phi;",
            "phi;",
            "Pi;",
            "pi;",
            "piv;",
            "plusmn;",
            "pound;",
            "Prime;",
            "prime;",
            "prod;",
            "prop;",
            "Psi;",
            "psi;",
            "quot;",
            "radic;",
            "rang;",
            "raquo;",
            "rArr;",
            "rarr;",
            "rceil;",
            "rdquo;",
            "real;",
            "reg;",
            "rfloor;",
            "Rho;",
            "rho;",
            "rlm;",
            "rsaquo;",
            "rsquo;",
            "sbquo;",
            "Scaron;",
            "scaron;",
            "sdot;",
            "sect;",
            "shy;",
            "Sigma;",
            "sigma;",
            "sigmaf;",
            "sim;",
            "spades;",
            "sub;",
            "sube;",
            "sum;",
            "sup;",
            "sup1;",
            "sup2;",
            "sup3;",
            "supe;",
            "szlig;",
            "Tau;",
            "tau;",
            "there4;",
            "Theta;",
            "theta;",
            "thetasym;",
            "thinsp;",
            "THORN;",
            "thorn;",
            "tilde;",
            "times;",
            "trade;",
            "Uacute;",
            "uacute;",
            "uArr;",
            "uarr;",
            "Ucirc;",
            "ucirc;",
            "Ugrave;",
            "ugrave;",
            "uml;",
            "upsih;",
            "Upsilon;",
            "upsilon;",
            "Uuml;",
            "uuml;",
            "weierp;",
            "Xi;",
            "xi;",
            "Yacute;",
            "yacute;",
            "yen;",
            "Yuml;",
            "yuml;",
            "Zeta;",
            "zeta;",
            "zwj;",
            "zwnj;"
          ];
          return S.map(function(b) {
            return {
              caption: b,
              snippet: b,
              meta: "html entity",
              score: 1e6
            };
          });
        };
      }).call(e.prototype), _.HtmlCompletions = e;
    }), ace.define("ace/mode/html", [
      "require",
      "exports",
      "module",
      "ace/lib/oop",
      "ace/lib/lang",
      "ace/mode/text",
      "ace/mode/javascript",
      "ace/mode/css",
      "ace/mode/html_highlight_rules",
      "ace/mode/behaviour/xml",
      "ace/mode/folding/html",
      "ace/mode/html_completions",
      "ace/worker/worker_client"
    ], function(A, _, N) {
      var L = A("../lib/oop"), M = A("../lib/lang"), $ = A("./text").Mode, a = A("./javascript").Mode, l = A("./css").Mode, i = A("./html_highlight_rules").HtmlHighlightRules, o = A("./behaviour/xml").XmlBehaviour, r = A("./folding/html").FoldMode, n = A("./html_completions").HtmlCompletions, e = A("../worker/worker_client").WorkerClient, t = [
        "area",
        "base",
        "br",
        "col",
        "embed",
        "hr",
        "img",
        "input",
        "keygen",
        "link",
        "meta",
        "menuitem",
        "param",
        "source",
        "track",
        "wbr"
      ], s = [
        "li",
        "dt",
        "dd",
        "p",
        "rt",
        "rp",
        "optgroup",
        "option",
        "colgroup",
        "td",
        "th"
      ], h = function(u) {
        this.fragmentContext = u && u.fragmentContext, this.HighlightRules = i, this.$behaviour = new o(), this.$completer = new n(), this.createModeDelegates({
          "js-": a,
          "css-": l
        }), this.foldingRules = new r(this.voidElements, M.arrayToMap(s));
      };
      L.inherits(h, $), (function() {
        this.blockComment = {
          start: "<!--",
          end: "-->"
        }, this.voidElements = M.arrayToMap(t), this.getNextLineIndent = function(u, S, b) {
          return this.$getIndent(S);
        }, this.checkOutdent = function(u, S, b) {
          return false;
        }, this.getCompletions = function(u, S, b, f) {
          return this.$completer.getCompletions(u, S, b, f);
        }, this.createWorker = function(u) {
          if (this.constructor == h) {
            var S = new e([
              "ace"
            ], "ace/mode/html_worker", "Worker");
            return S.attachToDocument(u.getDocument()), this.fragmentContext && S.call("setOptions", [
              {
                context: this.fragmentContext
              }
            ]), S.on("error", function(b) {
              u.setAnnotations(b.data);
            }), S.on("terminate", function() {
              u.clearAnnotations();
            }), S;
          }
        }, this.$id = "ace/mode/html", this.snippetFileId = "ace/snippets/html";
      }).call(h.prototype), _.Mode = h;
    }), ace.define("ace/mode/ruby_highlight_rules", [
      "require",
      "exports",
      "module",
      "ace/lib/oop",
      "ace/mode/text_highlight_rules"
    ], function(A, _, N) {
      var L = A("../lib/oop"), M = A("./text_highlight_rules").TextHighlightRules, $ = _.constantOtherSymbol = {
        token: "constant.other.symbol.ruby",
        regex: "[:](?:[A-Za-z_]|[@$](?=[a-zA-Z0-9_]))[a-zA-Z0-9_]*[!=?]?"
      };
      _.qString = {
        token: "string",
        regex: "['](?:(?:\\\\.)|(?:[^'\\\\]))*?[']"
      }, _.qqString = {
        token: "string",
        regex: '["](?:(?:\\\\.)|(?:[^"\\\\]))*?["]'
      }, _.tString = {
        token: "string",
        regex: "[`](?:(?:\\\\.)|(?:[^'\\\\]))*?[`]"
      };
      var a = _.constantNumericHex = {
        token: "constant.numeric",
        regex: "0[xX][0-9a-fA-F](?:[0-9a-fA-F]|_(?=[0-9a-fA-F]))*\\b"
      }, l = _.constantNumericBinary = {
        token: "constant.numeric",
        regex: /\b(0[bB][01](?:[01]|_(?=[01]))*)\b/
      }, i = _.constantNumericDecimal = {
        token: "constant.numeric",
        regex: /\b(0[dD](?:[1-9](?:[\d]|_(?=[\d]))*|0))\b/
      }, o = _.constantNumericOctal = {
        token: "constant.numeric",
        regex: /\b(0[oO]?(?:[1-7](?:[0-7]|_(?=[0-7]))*|0))\b/
      }, r = _.constantNumericRational = {
        token: "constant.numeric",
        regex: /\b([\d]+(?:[./][\d]+)?ri?)\b/
      }, n = _.constantNumericComplex = {
        token: "constant.numeric",
        regex: /\b([\d]i)\b/
      }, e = _.constantNumericFloat = {
        token: "constant.numeric",
        regex: "[+-]?\\d(?:\\d|_(?=\\d))*(?:(?:\\.\\d(?:\\d|_(?=\\d))*)?(?:[eE][+-]?\\d+)?)?i?\\b"
      }, t = _.instanceVariable = {
        token: "variable.instance",
        regex: "@{1,2}[a-zA-Z_\\d]+"
      }, s = function() {
        var h = "abort|Array|assert|assert_equal|assert_not_equal|assert_same|assert_not_same|assert_nil|assert_not_nil|assert_match|assert_no_match|assert_in_delta|assert_throws|assert_raise|assert_nothing_raised|assert_instance_of|assert_kind_of|assert_respond_to|assert_operator|assert_send|assert_difference|assert_no_difference|assert_recognizes|assert_generates|assert_response|assert_redirected_to|assert_template|assert_select|assert_select_email|assert_select_rjs|assert_select_encoded|css_select|at_exit|attr|attr_writer|attr_reader|attr_accessor|attr_accessible|autoload|binding|block_given?|callcc|caller|catch|chomp|chomp!|chop|chop!|defined?|delete_via_redirect|eval|exec|exit|exit!|fail|Float|flunk|follow_redirect!|fork|form_for|form_tag|format|gets|global_variables|gsub|gsub!|get_via_redirect|host!|https?|https!|include|Integer|lambda|link_to|link_to_unless_current|link_to_function|link_to_remote|load|local_variables|loop|open|open_session|p|print|printf|proc|putc|puts|post_via_redirect|put_via_redirect|raise|rand|raw|readline|readlines|redirect?|request_via_redirect|require|scan|select|set_trace_func|sleep|split|sprintf|srand|String|stylesheet_link_tag|syscall|system|sub|sub!|test|throw|trace_var|trap|untrace_var|atan2|cos|exp|frexp|ldexp|log|log10|sin|sqrt|tan|render|javascript_include_tag|csrf_meta_tag|label_tag|text_field_tag|submit_tag|check_box_tag|content_tag|radio_button_tag|text_area_tag|password_field_tag|hidden_field_tag|fields_for|select_tag|options_for_select|options_from_collection_for_select|collection_select|time_zone_select|select_date|select_time|select_datetime|date_select|time_select|datetime_select|select_year|select_month|select_day|select_hour|select_minute|select_second|file_field_tag|file_field|respond_to|skip_before_filter|around_filter|after_filter|verify|protect_from_forgery|rescue_from|helper_method|redirect_to|before_filter|send_data|send_file|validates_presence_of|validates_uniqueness_of|validates_length_of|validates_format_of|validates_acceptance_of|validates_associated|validates_exclusion_of|validates_inclusion_of|validates_numericality_of|validates_with|validates_each|authenticate_or_request_with_http_basic|authenticate_or_request_with_http_digest|filter_parameter_logging|match|get|post|resources|redirect|scope|assert_routing|translate|localize|extract_locale_from_tld|caches_page|expire_page|caches_action|expire_action|cache|expire_fragment|expire_cache_for|observe|cache_sweeper|has_many|has_one|belongs_to|has_and_belongs_to_many|p|warn|refine|using|module_function|extend|alias_method|private_class_method|remove_method|undef_method", u = "alias|and|BEGIN|begin|break|case|class|def|defined|do|else|elsif|END|end|ensure|__FILE__|finally|for|gem|if|in|__LINE__|module|next|not|or|private|protected|public|redo|rescue|retry|return|super|then|undef|unless|until|when|while|yield|__ENCODING__|prepend", S = "true|TRUE|false|FALSE|nil|NIL|ARGF|ARGV|DATA|ENV|RUBY_PLATFORM|RUBY_RELEASE_DATE|RUBY_VERSION|STDERR|STDIN|STDOUT|TOPLEVEL_BINDING|RUBY_PATCHLEVEL|RUBY_REVISION|RUBY_COPYRIGHT|RUBY_ENGINE|RUBY_ENGINE_VERSION|RUBY_DESCRIPTION", b = "$DEBUG|$defout|$FILENAME|$LOAD_PATH|$SAFE|$stdin|$stdout|$stderr|$VERBOSE|$!|root_url|flash|session|cookies|params|request|response|logger|self", f = this.$keywords = this.createKeywordMapper({
          keyword: u,
          "constant.language": S,
          "variable.language": b,
          "support.function": h,
          "invalid.deprecated": "debugger"
        }, "identifier"), c = `\\\\(?:n(?:[1-7][0-7]{0,2}|0)|[nsrtvfbae'"\\\\]|c(?:\\\\M-)?.|M-(?:\\\\C-|\\\\c)?.|C-(?:\\\\M-)?.|[0-7]{3}|x[\\da-fA-F]{2}|u[\\da-fA-F]{4}|u{[\\da-fA-F]{1,6}(?:\\s[\\da-fA-F]{1,6})*})`, w = {
          "(": ")",
          "[": "]",
          "{": "}",
          "<": ">",
          "^": "^",
          "|": "|",
          "%": "%"
        };
        this.$rules = {
          start: [
            {
              token: "comment",
              regex: "#.*$"
            },
            {
              token: "comment.multiline",
              regex: "^=begin(?=$|\\s.*$)",
              next: "comment"
            },
            {
              token: "string.regexp",
              regex: /[/](?=.*\/)/,
              next: "regex"
            },
            [
              {
                token: [
                  "constant.other.symbol.ruby",
                  "string.start"
                ],
                regex: /(:)?(")/,
                push: [
                  {
                    token: "constant.language.escape",
                    regex: c
                  },
                  {
                    token: "paren.start",
                    regex: /#{/,
                    push: "start"
                  },
                  {
                    token: "string.end",
                    regex: /"/,
                    next: "pop"
                  },
                  {
                    defaultToken: "string"
                  }
                ]
              },
              {
                token: "string.start",
                regex: /`/,
                push: [
                  {
                    token: "constant.language.escape",
                    regex: c
                  },
                  {
                    token: "paren.start",
                    regex: /#{/,
                    push: "start"
                  },
                  {
                    token: "string.end",
                    regex: /`/,
                    next: "pop"
                  },
                  {
                    defaultToken: "string"
                  }
                ]
              },
              {
                token: [
                  "constant.other.symbol.ruby",
                  "string.start"
                ],
                regex: /(:)?(')/,
                push: [
                  {
                    token: "constant.language.escape",
                    regex: /\\['\\]/
                  },
                  {
                    token: "string.end",
                    regex: /'/,
                    next: "pop"
                  },
                  {
                    defaultToken: "string"
                  }
                ]
              },
              {
                token: "string.start",
                regex: /%[qwx]([(\[<{^|%])/,
                onMatch: function(C, p, v) {
                  v.length && (v = []);
                  var k = C[C.length - 1];
                  return v.unshift(k, p), this.next = "qStateWithoutInterpolation", this.token;
                }
              },
              {
                token: "string.start",
                regex: /%[QWX]?([(\[<{^|%])/,
                onMatch: function(C, p, v) {
                  v.length && (v = []);
                  var k = C[C.length - 1];
                  return v.unshift(k, p), this.next = "qStateWithInterpolation", this.token;
                }
              },
              {
                token: "constant.other.symbol.ruby",
                regex: /%[si]([(\[<{^|%])/,
                onMatch: function(C, p, v) {
                  v.length && (v = []);
                  var k = C[C.length - 1];
                  return v.unshift(k, p), this.next = "sStateWithoutInterpolation", this.token;
                }
              },
              {
                token: "constant.other.symbol.ruby",
                regex: /%[SI]([(\[<{^|%])/,
                onMatch: function(C, p, v) {
                  v.length && (v = []);
                  var k = C[C.length - 1];
                  return v.unshift(k, p), this.next = "sStateWithInterpolation", this.token;
                }
              },
              {
                token: "string.regexp",
                regex: /%[r]([(\[<{^|%])/,
                onMatch: function(C, p, v) {
                  v.length && (v = []);
                  var k = C[C.length - 1];
                  return v.unshift(k, p), this.next = "rState", this.token;
                }
              }
            ],
            {
              token: "punctuation",
              regex: "::"
            },
            t,
            {
              token: "variable.global",
              regex: "[$][a-zA-Z_\\d]+"
            },
            {
              token: "support.class",
              regex: "[A-Z][a-zA-Z_\\d]*"
            },
            {
              token: [
                "punctuation.operator",
                "support.function"
              ],
              regex: /(\.)([a-zA-Z_\d]+)(?=\()/
            },
            {
              token: [
                "punctuation.operator",
                "identifier"
              ],
              regex: /(\.)([a-zA-Z_][a-zA-Z_\d]*)/
            },
            {
              token: "string.character",
              regex: "\\B\\?(?:" + c + "|\\S)"
            },
            {
              token: "punctuation.operator",
              regex: /\?(?=.+:)/
            },
            r,
            n,
            $,
            a,
            e,
            l,
            i,
            o,
            {
              token: "constant.language.boolean",
              regex: "(?:true|false)\\b"
            },
            {
              token: f,
              regex: "[a-zA-Z_$][a-zA-Z0-9_$]*\\b"
            },
            {
              token: "punctuation.separator.key-value",
              regex: "=>"
            },
            {
              stateName: "heredoc",
              onMatch: function(C, p, v) {
                var k = C[2] == "-" || C[2] == "~" ? "indentedHeredoc" : "heredoc", m = C.split(this.splitRegex);
                return v.push(k, m[3]), [
                  {
                    type: "constant",
                    value: m[1]
                  },
                  {
                    type: "string",
                    value: m[2]
                  },
                  {
                    type: "support.class",
                    value: m[3]
                  },
                  {
                    type: "string",
                    value: m[4]
                  }
                ];
              },
              regex: "(<<[-~]?)(['\"`]?)([\\w]+)(['\"`]?)",
              rules: {
                heredoc: [
                  {
                    onMatch: function(C, p, v) {
                      return C === v[1] ? (v.shift(), v.shift(), this.next = v[0] || "start", "support.class") : (this.next = "", "string");
                    },
                    regex: ".*$",
                    next: "start"
                  }
                ],
                indentedHeredoc: [
                  {
                    token: "string",
                    regex: "^ +"
                  },
                  {
                    onMatch: function(C, p, v) {
                      return C === v[1] ? (v.shift(), v.shift(), this.next = v[0] || "start", "support.class") : (this.next = "", "string");
                    },
                    regex: ".*$",
                    next: "start"
                  }
                ]
              }
            },
            {
              regex: "$",
              token: "empty",
              next: function(C, p) {
                return p[0] === "heredoc" || p[0] === "indentedHeredoc" ? p[0] : C;
              }
            },
            {
              token: "keyword.operator",
              regex: "!|\\$|%|&|\\*|/|\\-\\-|\\-|\\+\\+|\\+|~|===|==|=|!=|!==|<=|>=|<<=|>>=|>>>=|<>|<|>|!|&&|\\|\\||\\?\\:|\\*=|%=|\\+=|\\-=|&=|\\^=|\\||\\b(?:in|instanceof|new|delete|typeof|void)"
            },
            {
              token: "paren.lparen",
              regex: "[[({]"
            },
            {
              token: "paren.rparen",
              regex: "[\\])}]",
              onMatch: function(C, p, v) {
                return this.next = "", C == "}" && v.length > 1 && v[1] != "start" && (v.shift(), this.next = v.shift()), this.token;
              }
            },
            {
              token: "text",
              regex: "\\s+"
            },
            {
              token: "punctuation.operator",
              regex: /[?:,;.]/
            }
          ],
          comment: [
            {
              token: "comment.multiline",
              regex: "^=end(?=$|\\s.*$)",
              next: "start"
            },
            {
              token: "comment",
              regex: ".+"
            }
          ],
          qStateWithInterpolation: [
            {
              token: "string.start",
              regex: /[(\[<{]/,
              onMatch: function(C, p, v) {
                return v.length && C === v[0] ? (v.unshift(C, p), this.token) : "string";
              }
            },
            {
              token: "constant.language.escape",
              regex: c
            },
            {
              token: "constant.language.escape",
              regex: /\\./
            },
            {
              token: "paren.start",
              regex: /#{/,
              push: "start"
            },
            {
              token: "string.end",
              regex: /[)\]>}^|%]/,
              onMatch: function(C, p, v) {
                return v.length && C === w[v[0]] ? (v.shift(), this.next = v.shift(), this.token) : (this.next = "", "string");
              }
            },
            {
              defaultToken: "string"
            }
          ],
          qStateWithoutInterpolation: [
            {
              token: "string.start",
              regex: /[(\[<{]/,
              onMatch: function(C, p, v) {
                return v.length && C === v[0] ? (v.unshift(C, p), this.token) : "string";
              }
            },
            {
              token: "constant.language.escape",
              regex: /\\['\\]/
            },
            {
              token: "constant.language.escape",
              regex: /\\./
            },
            {
              token: "string.end",
              regex: /[)\]>}^|%]/,
              onMatch: function(C, p, v) {
                return v.length && C === w[v[0]] ? (v.shift(), this.next = v.shift(), this.token) : (this.next = "", "string");
              }
            },
            {
              defaultToken: "string"
            }
          ],
          sStateWithoutInterpolation: [
            {
              token: "constant.other.symbol.ruby",
              regex: /[(\[<{]/,
              onMatch: function(C, p, v) {
                return v.length && C === v[0] ? (v.unshift(C, p), this.token) : "constant.other.symbol.ruby";
              }
            },
            {
              token: "constant.other.symbol.ruby",
              regex: /[)\]>}^|%]/,
              onMatch: function(C, p, v) {
                return v.length && C === w[v[0]] ? (v.shift(), this.next = v.shift(), this.token) : (this.next = "", "constant.other.symbol.ruby");
              }
            },
            {
              defaultToken: "constant.other.symbol.ruby"
            }
          ],
          sStateWithInterpolation: [
            {
              token: "constant.other.symbol.ruby",
              regex: /[(\[<{]/,
              onMatch: function(C, p, v) {
                return v.length && C === v[0] ? (v.unshift(C, p), this.token) : "constant.other.symbol.ruby";
              }
            },
            {
              token: "constant.language.escape",
              regex: c
            },
            {
              token: "constant.language.escape",
              regex: /\\./
            },
            {
              token: "paren.start",
              regex: /#{/,
              push: "start"
            },
            {
              token: "constant.other.symbol.ruby",
              regex: /[)\]>}^|%]/,
              onMatch: function(C, p, v) {
                return v.length && C === w[v[0]] ? (v.shift(), this.next = v.shift(), this.token) : (this.next = "", "constant.other.symbol.ruby");
              }
            },
            {
              defaultToken: "constant.other.symbol.ruby"
            }
          ],
          rState: [
            {
              token: "string.regexp",
              regex: /[(\[<{]/,
              onMatch: function(C, p, v) {
                return v.length && C === v[0] ? (v.unshift(C, p), this.token) : "constant.language.escape";
              }
            },
            {
              token: "paren.start",
              regex: /#{/,
              push: "start"
            },
            {
              token: "string.regexp",
              regex: /\//
            },
            {
              token: "string.regexp",
              regex: /[)\]>}^|%][imxouesn]*/,
              onMatch: function(C, p, v) {
                return v.length && C[0] === w[v[0]] ? (v.shift(), this.next = v.shift(), this.token) : (this.next = "", "constant.language.escape");
              }
            },
            {
              include: "regex"
            },
            {
              defaultToken: "string.regexp"
            }
          ],
          regex: [
            {
              token: "regexp.keyword",
              regex: /\\[wWdDhHsS]/
            },
            {
              token: "constant.language.escape",
              regex: /\\[AGbBzZ]/
            },
            {
              token: "constant.language.escape",
              regex: /\\g<[a-zA-Z0-9]*>/
            },
            {
              token: [
                "constant.language.escape",
                "regexp.keyword",
                "constant.language.escape"
              ],
              regex: /(\\p{\^?)(Alnum|Alpha|Blank|Cntrl|Digit|Graph|Lower|Print|Punct|Space|Upper|XDigit|Word|ASCII|Any|Assigned|Arabic|Armenian|Balinese|Bengali|Bopomofo|Braille|Buginese|Buhid|Canadian_Aboriginal|Carian|Cham|Cherokee|Common|Coptic|Cuneiform|Cypriot|Cyrillic|Deseret|Devanagari|Ethiopic|Georgian|Glagolitic|Gothic|Greek|Gujarati|Gurmukhi|Han|Hangul|Hanunoo|Hebrew|Hiragana|Inherited|Kannada|Katakana|Kayah_Li|Kharoshthi|Khmer|Lao|Latin|Lepcha|Limbu|Linear_B|Lycian|Lydian|Malayalam|Mongolian|Myanmar|New_Tai_Lue|Nko|Ogham|Ol_Chiki|Old_Italic|Old_Persian|Oriya|Osmanya|Phags_Pa|Phoenician|Rejang|Runic|Saurashtra|Shavian|Sinhala|Sundanese|Syloti_Nagri|Syriac|Tagalog|Tagbanwa|Tai_Le|Tamil|Telugu|Thaana|Thai|Tibetan|Tifinagh|Ugaritic|Vai|Yi|Ll|Lm|Lt|Lu|Lo|Mn|Mc|Me|Nd|Nl|Pc|Pd|Ps|Pe|Pi|Pf|Po|No|Sm|Sc|Sk|So|Zs|Zl|Zp|Cc|Cf|Cn|Co|Cs|N|L|M|P|S|Z|C)(})/
            },
            {
              token: [
                "constant.language.escape",
                "invalid",
                "constant.language.escape"
              ],
              regex: /(\\p{\^?)([^/]*)(})/
            },
            {
              token: "regexp.keyword.operator",
              regex: "\\\\(?:u[\\da-fA-F]{4}|x[\\da-fA-F]{2}|.)"
            },
            {
              token: "string.regexp",
              regex: /[/][imxouesn]*/,
              next: "start"
            },
            {
              token: "invalid",
              regex: /\{\d+\b,?\d*\}[+*]|[+*$^?][+*]|[$^][?]|\?{3,}/
            },
            {
              token: "constant.language.escape",
              regex: /\(\?(?:[:=!>]|<'?[a-zA-Z]*'?>|<[=!])|\)|\{\d+\b,?\d*\}|[+*]\?|[()$^+*?.]/
            },
            {
              token: "constant.language.delimiter",
              regex: /\|/
            },
            {
              token: "regexp.keyword",
              regex: /\[\[:(?:alnum|alpha|blank|cntrl|digit|graph|lower|print|punct|space|upper|xdigit|word|ascii):\]\]/
            },
            {
              token: "constant.language.escape",
              regex: /\[\^?/,
              push: "regex_character_class"
            },
            {
              defaultToken: "string.regexp"
            }
          ],
          regex_character_class: [
            {
              token: "regexp.keyword",
              regex: /\\[wWdDhHsS]/
            },
            {
              token: "regexp.charclass.keyword.operator",
              regex: "\\\\(?:u[\\da-fA-F]{4}|x[\\da-fA-F]{2}|.)"
            },
            {
              token: "constant.language.escape",
              regex: /&?&?\[\^?/,
              push: "regex_character_class"
            },
            {
              token: "constant.language.escape",
              regex: "]",
              next: "pop"
            },
            {
              token: "constant.language.escape",
              regex: "-"
            },
            {
              defaultToken: "string.regexp.characterclass"
            }
          ]
        }, this.normalizeRules();
      };
      L.inherits(s, M), _.RubyHighlightRules = s;
    }), ace.define("ace/mode/folding/ruby", [
      "require",
      "exports",
      "module",
      "ace/lib/oop",
      "ace/mode/folding/fold_mode",
      "ace/range",
      "ace/token_iterator"
    ], function(A, _, N) {
      var L = A("../../lib/oop"), M = A("./fold_mode").FoldMode, $ = A("../../range").Range, a = A("../../token_iterator").TokenIterator, l = _.FoldMode = function() {
      };
      L.inherits(l, M), (function() {
        this.indentKeywords = {
          class: 1,
          def: 1,
          module: 1,
          do: 1,
          unless: 1,
          if: 1,
          while: 1,
          for: 1,
          until: 1,
          begin: 1,
          else: 0,
          elsif: 0,
          rescue: 0,
          ensure: 0,
          when: 0,
          end: -1,
          case: 1,
          "=begin": 1,
          "=end": -1
        }, this.foldingStartMarker = /(?:\s|^)(def|do|while|class|unless|module|if|for|until|begin|else|elsif|case|rescue|ensure|when)\b|({\s*$)|(=begin)/, this.foldingStopMarker = /(=end(?=$|\s.*$))|(^\s*})|\b(end)\b/, this.getFoldWidget = function(i, o, r) {
          var n = i.getLine(r), e = this.foldingStartMarker.test(n), t = this.foldingStopMarker.test(n);
          if (e && !t) {
            var s = n.match(this.foldingStartMarker);
            if (s[1]) {
              if ((s[1] == "if" || s[1] == "else" || s[1] == "while" || s[1] == "until" || s[1] == "unless") && (s[1] == "else" && /^\s*else\s*$/.test(n) === false || /^\s*(?:if|else|while|until|unless)\s*/.test(n) === false) || s[1] == "when" && /\sthen\s/.test(n) === true) return;
              if (i.getTokenAt(r, s.index + 2).type === "keyword") return "start";
            } else if (s[3]) {
              if (i.getTokenAt(r, s.index + 1).type === "comment.multiline") return "start";
            } else return "start";
          }
          if (o != "markbeginend" || !t || e && t) return "";
          var s = n.match(this.foldingStopMarker);
          if (s[3] === "end") {
            if (i.getTokenAt(r, s.index + 1).type === "keyword") return "end";
          } else if (s[1]) {
            if (i.getTokenAt(r, s.index + 1).type === "comment.multiline") return "end";
          } else return "end";
        }, this.getFoldWidgetRange = function(i, o, r) {
          var n = i.doc.getLine(r), e = this.foldingStartMarker.exec(n);
          if (e) return e[1] || e[3] ? this.rubyBlock(i, r, e.index + 2) : this.openingBracketBlock(i, "{", r, e.index);
          var e = this.foldingStopMarker.exec(n);
          if (e) return e[3] === "end" && i.getTokenAt(r, e.index + 1).type === "keyword" ? this.rubyBlock(i, r, e.index + 1) : e[1] === "=end" && i.getTokenAt(r, e.index + 1).type === "comment.multiline" ? this.rubyBlock(i, r, e.index + 1) : this.closingBracketBlock(i, "}", r, e.index + e[0].length);
        }, this.rubyBlock = function(i, m, r, n) {
          var e = new a(i, m, r), t = e.getCurrentToken();
          if (!(!t || t.type != "keyword" && t.type != "comment.multiline")) {
            var s = t.value, h = i.getLine(m);
            switch (t.value) {
              case "if":
              case "unless":
              case "while":
              case "until":
                var u = new RegExp("^\\s*" + t.value);
                if (!u.test(h)) return;
                var S = this.indentKeywords[s];
                break;
              case "when":
                if (/\sthen\s/.test(h)) return;
              case "elsif":
              case "rescue":
              case "ensure":
                var S = 1;
                break;
              case "else":
                var u = new RegExp("^\\s*" + t.value + "\\s*$");
                if (!u.test(h)) return;
                var S = 1;
                break;
              default:
                var S = this.indentKeywords[s];
                break;
            }
            var b = [
              s
            ];
            if (S) {
              var f = S === -1 ? i.getLine(m - 1).length : i.getLine(m).length, c = m, w = [];
              if (w.push(e.getCurrentTokenRange()), e.step = S === -1 ? e.stepBackward : e.stepForward, t.type == "comment.multiline") {
                for (; t = e.step(); ) if (t.type === "comment.multiline") {
                  if (S == 1) {
                    if (f = 6, t.value == "=end") break;
                  } else if (t.value == "=begin") break;
                }
              } else for (; t = e.step(); ) {
                var C = false;
                if (t.type === "keyword") {
                  var p = S * this.indentKeywords[t.value];
                  switch (h = i.getLine(e.getCurrentTokenRow()), t.value) {
                    case "do":
                      for (var v = e.$tokenIndex - 1; v >= 0; v--) {
                        var k = e.$rowTokens[v];
                        if (k && (k.value == "while" || k.value == "until" || k.value == "for")) {
                          p = 0;
                          break;
                        }
                      }
                      break;
                    case "else":
                      var u = new RegExp("^\\s*" + t.value + "\\s*$");
                      (!u.test(h) || s == "case") && (p = 0, C = true);
                      break;
                    case "if":
                    case "unless":
                    case "while":
                    case "until":
                      var u = new RegExp("^\\s*" + t.value);
                      u.test(h) || (p = 0, C = true);
                      break;
                    case "when":
                      (/\sthen\s/.test(h) || s == "case") && (p = 0, C = true);
                      break;
                  }
                  if (p > 0) b.unshift(t.value);
                  else if (p <= 0 && C === false) {
                    if (b.shift(), !b.length && ((s == "while" || s == "until" || s == "for") && t.value != "do" || t.value == "do" && S == -1 && p != 0 || t.value != "do")) break;
                    p === 0 && b.unshift(t.value);
                  }
                }
              }
              if (!t) return null;
              if (n) return w.push(e.getCurrentTokenRange()), w;
              var m = e.getCurrentTokenRow();
              if (S === -1) {
                if (t.type === "comment.multiline") var y = 6;
                else var y = i.getLine(m).length;
                return new $(m, y, c - 1, f);
              } else return new $(c, f, m - 1, i.getLine(m - 1).length);
            }
          }
        };
      }).call(l.prototype);
    }), ace.define("ace/mode/ruby", [
      "require",
      "exports",
      "module",
      "ace/lib/oop",
      "ace/mode/text",
      "ace/mode/ruby_highlight_rules",
      "ace/mode/matching_brace_outdent",
      "ace/range",
      "ace/mode/folding/ruby"
    ], function(A, _, N) {
      var L = A("../lib/oop"), M = A("./text").Mode, $ = A("./ruby_highlight_rules").RubyHighlightRules, a = A("./matching_brace_outdent").MatchingBraceOutdent, l = A("../range").Range, i = A("./folding/ruby").FoldMode, o = function() {
        this.HighlightRules = $, this.$outdent = new a(), this.$behaviour = this.$defaultBehaviour, this.foldingRules = new i(), this.indentKeywords = this.foldingRules.indentKeywords;
      };
      L.inherits(o, M), (function() {
        this.lineCommentStart = "#", this.getNextLineIndent = function(r, n, e) {
          var t = this.$getIndent(n), s = this.getTokenizer().getLineTokens(n, r), h = s.tokens;
          if (h.length && h[h.length - 1].type == "comment") return t;
          if (r == "start") {
            var u = n.match(/^.*[\{\(\[]\s*$/), S = n.match(/^\s*(class|def|module)\s.*$/), b = n.match(/.*do(\s*|\s+\|.*\|\s*)$/), f = n.match(/^\s*(if|else|when|elsif|unless|while|for|begin|rescue|ensure)\s*/);
            (u || S || b || f) && (t += e);
          }
          return t;
        }, this.checkOutdent = function(r, n, e) {
          return /^\s+(end|else|rescue|ensure)$/.test(n + e) || this.$outdent.checkOutdent(n, e);
        }, this.autoOutdent = function(r, n, e) {
          var t = n.getLine(e);
          if (/}/.test(t)) return this.$outdent.autoOutdent(n, e);
          var s = this.$getIndent(t), h = n.getLine(e - 1), u = this.$getIndent(h), S = n.getTabString();
          u.length <= s.length && s.slice(-S.length) == S && n.remove(new l(e, s.length - S.length, e, s.length));
        }, this.getMatching = function(r, n, e) {
          if (n == null) {
            var t = r.selection.lead;
            e = t.column, n = t.row;
          }
          var s = r.getTokenAt(n, e);
          if (s && s.value in this.indentKeywords) return this.foldingRules.rubyBlock(r, n, e, true);
        }, this.$id = "ace/mode/ruby", this.snippetFileId = "ace/snippets/ruby";
      }).call(o.prototype), _.Mode = o;
    }), ace.define("ace/mode/ejs", [
      "require",
      "exports",
      "module",
      "ace/lib/oop",
      "ace/mode/html_highlight_rules",
      "ace/mode/javascript_highlight_rules",
      "ace/lib/oop",
      "ace/mode/html",
      "ace/mode/javascript",
      "ace/mode/css",
      "ace/mode/ruby"
    ], function(A, _, N) {
      var a = A("../lib/oop"), L = A("./html_highlight_rules").HtmlHighlightRules, M = A("./javascript_highlight_rules").JavaScriptHighlightRules, $ = function(n, e) {
        L.call(this), n || (n = "(?:<%|<\\?|{{)"), e || (e = "(?:%>|\\?>|}})");
        for (var t in this.$rules) this.$rules[t].unshift({
          token: "markup.list.meta.tag",
          regex: n + "(?![>}])[-=]?",
          push: "ejs-start"
        });
        this.embedRules(new M({
          jsx: false
        }).getRules(), "ejs-", [
          {
            token: "markup.list.meta.tag",
            regex: "-?" + e,
            next: "pop"
          },
          {
            token: "comment",
            regex: "//.*?" + e,
            next: "pop"
          }
        ]), this.normalizeRules();
      };
      a.inherits($, L), _.EjsHighlightRules = $;
      var a = A("../lib/oop"), l = A("./html").Mode, i = A("./javascript").Mode, o = A("./css").Mode;
      A("./ruby").Mode;
      var r = function() {
        l.call(this), this.HighlightRules = $, this.createModeDelegates({
          "js-": i,
          "css-": o,
          "ejs-": i
        });
      };
      a.inherits(r, l), (function() {
        this.$id = "ace/mode/ejs";
      }).call(r.prototype), _.Mode = r;
    }), (function() {
      ace.require([
        "ace/mode/ejs"
      ], function(A) {
        j && (j.exports = A);
      });
    })();
  })(oi);
  var si = {
    exports: {}
  };
  (function(j, Q) {
    ace.define("ace/theme/clouds_midnight-css", [
      "require",
      "exports",
      "module"
    ], function(A, _, N) {
      N.exports = `.ace-clouds-midnight .ace_gutter {
  background: #232323;
  color: #929292
}

.ace-clouds-midnight .ace_print-margin {
  width: 1px;
  background: #232323
}

.ace-clouds-midnight {
  background-color: #191919;
  color: #929292
}

.ace-clouds-midnight .ace_cursor {
  color: #7DA5DC
}

.ace-clouds-midnight .ace_marker-layer .ace_selection {
  background: #000000
}

.ace-clouds-midnight.ace_multiselect .ace_selection.ace_start {
  box-shadow: 0 0 3px 0px #191919;
}

.ace-clouds-midnight .ace_marker-layer .ace_step {
  background: rgb(102, 82, 0)
}

.ace-clouds-midnight .ace_marker-layer .ace_bracket {
  margin: -1px 0 0 -1px;
  border: 1px solid #BFBFBF
}

.ace-clouds-midnight .ace_marker-layer .ace_active-line {
  background: rgba(215, 215, 215, 0.031)
}

.ace-clouds-midnight .ace_gutter-active-line {
  background-color: rgba(215, 215, 215, 0.031)
}

.ace-clouds-midnight .ace_marker-layer .ace_selected-word {
  border: 1px solid #000000
}

.ace-clouds-midnight .ace_invisible {
  color: #666
}

.ace-clouds-midnight .ace_keyword,
.ace-clouds-midnight .ace_meta,
.ace-clouds-midnight .ace_support.ace_constant.ace_property-value {
  color: #927C5D
}

.ace-clouds-midnight .ace_keyword.ace_operator {
  color: #4B4B4B
}

.ace-clouds-midnight .ace_keyword.ace_other.ace_unit {
  color: #366F1A
}

.ace-clouds-midnight .ace_constant.ace_language {
  color: #39946A
}

.ace-clouds-midnight .ace_constant.ace_numeric {
  color: #46A609
}

.ace-clouds-midnight .ace_constant.ace_character.ace_entity {
  color: #A165AC
}

.ace-clouds-midnight .ace_invalid {
  color: #FFFFFF;
  background-color: #E92E2E
}

.ace-clouds-midnight .ace_fold {
  background-color: #927C5D;
  border-color: #929292
}

.ace-clouds-midnight .ace_storage,
.ace-clouds-midnight .ace_support.ace_class,
.ace-clouds-midnight .ace_support.ace_function,
.ace-clouds-midnight .ace_support.ace_other,
.ace-clouds-midnight .ace_support.ace_type {
  color: #E92E2E
}

.ace-clouds-midnight .ace_string {
  color: #5D90CD
}

.ace-clouds-midnight .ace_comment {
  color: #3C403B
}

.ace-clouds-midnight .ace_entity.ace_name.ace_tag,
.ace-clouds-midnight .ace_entity.ace_other.ace_attribute-name {
  color: #606060
}

.ace-clouds-midnight .ace_indent-guide {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQImWNgYGBgYHB3d/8PAAOIAdULw8qMAAAAAElFTkSuQmCC) right repeat-y
}

.ace-clouds-midnight .ace_indent-guide-active {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQIW2PQ1dX9zzBz5sz/ABCcBFFentLlAAAAAElFTkSuQmCC) right repeat-y;
}
`;
    }), ace.define("ace/theme/clouds_midnight", [
      "require",
      "exports",
      "module",
      "ace/theme/clouds_midnight-css",
      "ace/lib/dom"
    ], function(A, _, N) {
      _.isDark = true, _.cssClass = "ace-clouds-midnight", _.cssText = A("./clouds_midnight-css");
      var L = A("../lib/dom");
      L.importCssString(_.cssText, _.cssClass, false);
    }), (function() {
      ace.require([
        "ace/theme/clouds_midnight"
      ], function(A) {
        j && (j.exports = A);
      });
    })();
  })(si);
  var ai = {
    exports: {}
  };
  (function(j, Q) {
    ace.define("ace/theme/chrome-css", [
      "require",
      "exports",
      "module"
    ], function(A, _, N) {
      N.exports = `.ace-chrome .ace_gutter {
  background: #ebebeb;
  color: #333;
  overflow : hidden;
}

.ace-chrome .ace_print-margin {
  width: 1px;
  background: #e8e8e8;
}

.ace-chrome {
  background-color: #FFFFFF;
  color: black;
}

.ace-chrome .ace_cursor {
  color: black;
}

.ace-chrome .ace_invisible {
  color: rgb(191, 191, 191);
}

.ace-chrome .ace_constant.ace_buildin {
  color: rgb(88, 72, 246);
}

.ace-chrome .ace_constant.ace_language {
  color: rgb(88, 92, 246);
}

.ace-chrome .ace_constant.ace_library {
  color: rgb(6, 150, 14);
}

.ace-chrome .ace_invalid {
  background-color: rgb(153, 0, 0);
  color: white;
}

.ace-chrome .ace_fold {
}

.ace-chrome .ace_support.ace_function {
  color: rgb(60, 76, 114);
}

.ace-chrome .ace_support.ace_constant {
  color: rgb(6, 150, 14);
}

.ace-chrome .ace_support.ace_type,
.ace-chrome .ace_support.ace_class
.ace-chrome .ace_support.ace_other {
  color: rgb(109, 121, 222);
}

.ace-chrome .ace_variable.ace_parameter {
  font-style:italic;
  color:#FD971F;
}
.ace-chrome .ace_keyword.ace_operator {
  color: rgb(104, 118, 135);
}

.ace-chrome .ace_comment {
  color: #236e24;
}

.ace-chrome .ace_comment.ace_doc {
  color: #236e24;
}

.ace-chrome .ace_comment.ace_doc.ace_tag {
  color: #236e24;
}

.ace-chrome .ace_constant.ace_numeric {
  color: rgb(0, 0, 205);
}

.ace-chrome .ace_variable {
  color: rgb(49, 132, 149);
}

.ace-chrome .ace_xml-pe {
  color: rgb(104, 104, 91);
}

.ace-chrome .ace_entity.ace_name.ace_function {
  color: #0000A2;
}


.ace-chrome .ace_heading {
  color: rgb(12, 7, 255);
}

.ace-chrome .ace_list {
  color:rgb(185, 6, 144);
}

.ace-chrome .ace_marker-layer .ace_selection {
  background: rgb(181, 213, 255);
}

.ace-chrome .ace_marker-layer .ace_step {
  background: rgb(252, 255, 0);
}

.ace-chrome .ace_marker-layer .ace_stack {
  background: rgb(164, 229, 101);
}

.ace-chrome .ace_marker-layer .ace_bracket {
  margin: -1px 0 0 -1px;
  border: 1px solid rgb(192, 192, 192);
}

.ace-chrome .ace_marker-layer .ace_active-line {
  background: rgba(0, 0, 0, 0.07);
}

.ace-chrome .ace_gutter-active-line {
    background-color : #dcdcdc;
}

.ace-chrome .ace_marker-layer .ace_selected-word {
  background: rgb(250, 250, 255);
  border: 1px solid rgb(200, 200, 250);
}

.ace-chrome .ace_storage,
.ace-chrome .ace_keyword,
.ace-chrome .ace_meta.ace_tag {
  color: rgb(147, 15, 128);
}

.ace-chrome .ace_string.ace_regex {
  color: rgb(255, 0, 0)
}

.ace-chrome .ace_string {
  color: #1A1AA6;
}

.ace-chrome .ace_entity.ace_other.ace_attribute-name {
  color: #994409;
}

.ace-chrome .ace_indent-guide {
  background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAE0lEQVQImWP4////f4bLly//BwAmVgd1/w11/gAAAABJRU5ErkJggg==") right repeat-y;
}
  
.ace-chrome .ace_indent-guide-active {
  background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAZSURBVHjaYvj///9/hivKyv8BAAAA//8DACLqBhbvk+/eAAAAAElFTkSuQmCC") right repeat-y;
}
`;
    }), ace.define("ace/theme/chrome", [
      "require",
      "exports",
      "module",
      "ace/theme/chrome-css",
      "ace/lib/dom"
    ], function(A, _, N) {
      _.isDark = false, _.cssClass = "ace-chrome", _.cssText = A("./chrome-css");
      var L = A("../lib/dom");
      L.importCssString(_.cssText, _.cssClass, false);
    }), (function() {
      ace.require([
        "ace/theme/chrome"
      ], function(A) {
        j && (j.exports = A);
      });
    })();
  })(ai);
  var li = {
    exports: {}
  };
  (function(j, Q) {
    (function() {
      ace.require([
        "ace/snippets/ejs"
      ], function(A) {
        j && (j.exports = A);
      });
    })();
  })(li);
  var ci = {
    exports: {}
  };
  (function(j, Q) {
    ace.define("ace/snippets", [
      "require",
      "exports",
      "module",
      "ace/lib/dom",
      "ace/lib/oop",
      "ace/lib/event_emitter",
      "ace/lib/lang",
      "ace/range",
      "ace/range_list",
      "ace/keyboard/hash_handler",
      "ace/tokenizer",
      "ace/clipboard",
      "ace/editor"
    ], function(A, _, N) {
      var L = A("./lib/dom"), M = A("./lib/oop"), $ = A("./lib/event_emitter").EventEmitter, a = A("./lib/lang"), l = A("./range").Range, i = A("./range_list").RangeList, o = A("./keyboard/hash_handler").HashHandler, r = A("./tokenizer").Tokenizer, n = A("./clipboard"), e = {
        CURRENT_WORD: function(c) {
          return c.session.getTextRange(c.session.getWordRange());
        },
        SELECTION: function(c, w, C) {
          var p = c.session.getTextRange();
          return C ? p.replace(/\n\r?([ \t]*\S)/g, `
` + C + "$1") : p;
        },
        CURRENT_LINE: function(c) {
          return c.session.getLine(c.getCursorPosition().row);
        },
        PREV_LINE: function(c) {
          return c.session.getLine(c.getCursorPosition().row - 1);
        },
        LINE_INDEX: function(c) {
          return c.getCursorPosition().row;
        },
        LINE_NUMBER: function(c) {
          return c.getCursorPosition().row + 1;
        },
        SOFT_TABS: function(c) {
          return c.session.getUseSoftTabs() ? "YES" : "NO";
        },
        TAB_SIZE: function(c) {
          return c.session.getTabSize();
        },
        CLIPBOARD: function(c) {
          return n.getText && n.getText();
        },
        FILENAME: function(c) {
          return /[^/\\]*$/.exec(this.FILEPATH(c))[0];
        },
        FILENAME_BASE: function(c) {
          return /[^/\\]*$/.exec(this.FILEPATH(c))[0].replace(/\.[^.]*$/, "");
        },
        DIRECTORY: function(c) {
          return this.FILEPATH(c).replace(/[^/\\]*$/, "");
        },
        FILEPATH: function(c) {
          return "/not implemented.txt";
        },
        WORKSPACE_NAME: function() {
          return "Unknown";
        },
        FULLNAME: function() {
          return "Unknown";
        },
        BLOCK_COMMENT_START: function(c) {
          var w = c.session.$mode || {};
          return w.blockComment && w.blockComment.start || "";
        },
        BLOCK_COMMENT_END: function(c) {
          var w = c.session.$mode || {};
          return w.blockComment && w.blockComment.end || "";
        },
        LINE_COMMENT: function(c) {
          var w = c.session.$mode || {};
          return w.lineCommentStart || "";
        },
        CURRENT_YEAR: t.bind(null, {
          year: "numeric"
        }),
        CURRENT_YEAR_SHORT: t.bind(null, {
          year: "2-digit"
        }),
        CURRENT_MONTH: t.bind(null, {
          month: "numeric"
        }),
        CURRENT_MONTH_NAME: t.bind(null, {
          month: "long"
        }),
        CURRENT_MONTH_NAME_SHORT: t.bind(null, {
          month: "short"
        }),
        CURRENT_DATE: t.bind(null, {
          day: "2-digit"
        }),
        CURRENT_DAY_NAME: t.bind(null, {
          weekday: "long"
        }),
        CURRENT_DAY_NAME_SHORT: t.bind(null, {
          weekday: "short"
        }),
        CURRENT_HOUR: t.bind(null, {
          hour: "2-digit",
          hour12: false
        }),
        CURRENT_MINUTE: t.bind(null, {
          minute: "2-digit"
        }),
        CURRENT_SECOND: t.bind(null, {
          second: "2-digit"
        })
      };
      e.SELECTED_TEXT = e.SELECTION;
      function t(c) {
        var w = (/* @__PURE__ */ new Date()).toLocaleString("en-us", c);
        return w.length == 1 ? "0" + w : w;
      }
      var s = (function() {
        function c() {
          this.snippetMap = {}, this.snippetNameMap = {}, this.variables = e;
        }
        return c.prototype.getTokenizer = function() {
          return c.$tokenizer || this.createTokenizer();
        }, c.prototype.createTokenizer = function() {
          function w(v) {
            return v = v.substr(1), /^\d+$/.test(v) ? [
              {
                tabstopId: parseInt(v, 10)
              }
            ] : [
              {
                text: v
              }
            ];
          }
          function C(v) {
            return "(?:[^\\\\" + v + "]|\\\\.)";
          }
          var p = {
            regex: "/(" + C("/") + "+)/",
            onMatch: function(v, k, m) {
              var y = m[0];
              return y.fmtString = true, y.guard = v.slice(1, -1), y.flag = "", "";
            },
            next: "formatString"
          };
          return c.$tokenizer = new r({
            start: [
              {
                regex: /\\./,
                onMatch: function(v, k, m) {
                  var y = v[1];
                  return (y == "}" && m.length || "`$\\".indexOf(y) != -1) && (v = y), [
                    v
                  ];
                }
              },
              {
                regex: /}/,
                onMatch: function(v, k, m) {
                  return [
                    m.length ? m.shift() : v
                  ];
                }
              },
              {
                regex: /\$(?:\d+|\w+)/,
                onMatch: w
              },
              {
                regex: /\$\{[\dA-Z_a-z]+/,
                onMatch: function(v, k, m) {
                  var y = w(v.substr(1));
                  return m.unshift(y[0]), y;
                },
                next: "snippetVar"
              },
              {
                regex: /\n/,
                token: "newline",
                merge: false
              }
            ],
            snippetVar: [
              {
                regex: "\\|" + C("\\|") + "*\\|",
                onMatch: function(v, k, m) {
                  var y = v.slice(1, -1).replace(/\\[,|\\]|,/g, function(g) {
                    return g.length == 2 ? g[1] : "\0";
                  }).split("\0").map(function(g) {
                    return {
                      value: g
                    };
                  });
                  return m[0].choices = y, [
                    y[0]
                  ];
                },
                next: "start"
              },
              p,
              {
                regex: "([^:}\\\\]|\\\\.)*:?",
                token: "",
                next: "start"
              }
            ],
            formatString: [
              {
                regex: /:/,
                onMatch: function(v, k, m) {
                  return m.length && m[0].expectElse ? (m[0].expectElse = false, m[0].ifEnd = {
                    elseEnd: m[0]
                  }, [
                    m[0].ifEnd
                  ]) : ":";
                }
              },
              {
                regex: /\\./,
                onMatch: function(v, k, m) {
                  var y = v[1];
                  return y == "}" && m.length || "`$\\".indexOf(y) != -1 ? v = y : y == "n" ? v = `
` : y == "t" ? v = "	" : "ulULE".indexOf(y) != -1 && (v = {
                    changeCase: y,
                    local: y > "a"
                  }), [
                    v
                  ];
                }
              },
              {
                regex: "/\\w*}",
                onMatch: function(v, k, m) {
                  var y = m.shift();
                  return y && (y.flag = v.slice(1, -1)), this.next = y && y.tabstopId ? "start" : "", [
                    y || v
                  ];
                },
                next: "start"
              },
              {
                regex: /\$(?:\d+|\w+)/,
                onMatch: function(v, k, m) {
                  return [
                    {
                      text: v.slice(1)
                    }
                  ];
                }
              },
              {
                regex: /\${\w+/,
                onMatch: function(v, k, m) {
                  var y = {
                    text: v.slice(2)
                  };
                  return m.unshift(y), [
                    y
                  ];
                },
                next: "formatStringVar"
              },
              {
                regex: /\n/,
                token: "newline",
                merge: false
              },
              {
                regex: /}/,
                onMatch: function(v, k, m) {
                  var y = m.shift();
                  return this.next = y && y.tabstopId ? "start" : "", [
                    y || v
                  ];
                },
                next: "start"
              }
            ],
            formatStringVar: [
              {
                regex: /:\/\w+}/,
                onMatch: function(v, k, m) {
                  var y = m[0];
                  return y.formatFunction = v.slice(2, -1), [
                    m.shift()
                  ];
                },
                next: "formatString"
              },
              p,
              {
                regex: /:[\?\-+]?/,
                onMatch: function(v, k, m) {
                  v[1] == "+" && (m[0].ifEnd = m[0]), v[1] == "?" && (m[0].expectElse = true);
                },
                next: "formatString"
              },
              {
                regex: "([^:}\\\\]|\\\\.)*:?",
                token: "",
                next: "formatString"
              }
            ]
          }), c.$tokenizer;
        }, c.prototype.tokenizeTmSnippet = function(w, C) {
          return this.getTokenizer().getLineTokens(w, C).tokens.map(function(p) {
            return p.value || p;
          });
        }, c.prototype.getVariableValue = function(w, C, p) {
          if (/^\d+$/.test(C)) return (this.variables.__ || {})[C] || "";
          if (/^[A-Z]\d+$/.test(C)) return (this.variables[C[0] + "__"] || {})[C.substr(1)] || "";
          if (C = C.replace(/^TM_/, ""), !this.variables.hasOwnProperty(C)) return "";
          var v = this.variables[C];
          return typeof v == "function" && (v = this.variables[C](w, C, p)), v ?? "";
        }, c.prototype.tmStrFormat = function(w, C, p) {
          if (!C.fmt) return w;
          var v = C.flag || "", k = C.guard;
          k = new RegExp(k, v.replace(/[^gim]/g, ""));
          var m = typeof C.fmt == "string" ? this.tokenizeTmSnippet(C.fmt, "formatString") : C.fmt, y = this, g = w.replace(k, function() {
            var d = y.variables.__;
            y.variables.__ = [].slice.call(arguments);
            for (var x = y.resolveVariables(m, p), T = "E", E = 0; E < x.length; E++) {
              var R = x[E];
              if (typeof R == "object") if (x[E] = "", R.changeCase && R.local) {
                var I = x[E + 1];
                I && typeof I == "string" && (R.changeCase == "u" ? x[E] = I[0].toUpperCase() : x[E] = I[0].toLowerCase(), x[E + 1] = I.substr(1));
              } else R.changeCase && (T = R.changeCase);
              else T == "U" ? x[E] = R.toUpperCase() : T == "L" && (x[E] = R.toLowerCase());
            }
            return y.variables.__ = d, x.join("");
          });
          return g;
        }, c.prototype.tmFormatFunction = function(w, C, p) {
          return C.formatFunction == "upcase" ? w.toUpperCase() : C.formatFunction == "downcase" ? w.toLowerCase() : w;
        }, c.prototype.resolveVariables = function(w, C) {
          for (var p = [], v = "", k = true, m = 0; m < w.length; m++) {
            var y = w[m];
            if (typeof y == "string") {
              p.push(y), y == `
` ? (k = true, v = "") : k && (v = /^\t*/.exec(y)[0], k = /\S/.test(y));
              continue;
            }
            if (y) {
              if (k = false, y.fmtString) {
                var g = w.indexOf(y, m + 1);
                g == -1 && (g = w.length), y.fmt = w.slice(m + 1, g), m = g;
              }
              if (y.text) {
                var d = this.getVariableValue(C, y.text, v) + "";
                y.fmtString && (d = this.tmStrFormat(d, y, C)), y.formatFunction && (d = this.tmFormatFunction(d, y, C)), d && !y.ifEnd ? (p.push(d), x(y)) : !d && y.ifEnd && x(y.ifEnd);
              } else y.elseEnd ? x(y.elseEnd) : (y.tabstopId != null || y.changeCase != null) && p.push(y);
            }
          }
          function x(T) {
            var E = w.indexOf(T, m + 1);
            E != -1 && (m = E);
          }
          return p;
        }, c.prototype.getDisplayTextForSnippet = function(w, C) {
          var p = h.call(this, w, C);
          return p.text;
        }, c.prototype.insertSnippetForSelection = function(w, C, p) {
          p === void 0 && (p = {});
          var v = h.call(this, w, C, p), k = w.getSelectionRange(), m = w.session.replace(k, v.text), y = new u(w), g = w.inVirtualSelectionMode && w.selection.index;
          y.addTabstops(v.tabstops, k.start, m, g);
        }, c.prototype.insertSnippet = function(w, C, p) {
          p === void 0 && (p = {});
          var v = this;
          if (w.inVirtualSelectionMode) return v.insertSnippetForSelection(w, C, p);
          w.forEachSelection(function() {
            v.insertSnippetForSelection(w, C, p);
          }, null, {
            keepOrder: true
          }), w.tabstopManager && w.tabstopManager.tabNext();
        }, c.prototype.$getScope = function(w) {
          var C = w.session.$mode.$id || "";
          if (C = C.split("/").pop(), C === "html" || C === "php") {
            C === "php" && !w.session.$mode.inlinePhp && (C = "html");
            var p = w.getCursorPosition(), v = w.session.getState(p.row);
            typeof v == "object" && (v = v[0]), v.substring && (v.substring(0, 3) == "js-" ? C = "javascript" : v.substring(0, 4) == "css-" ? C = "css" : v.substring(0, 4) == "php-" && (C = "php"));
          }
          return C;
        }, c.prototype.getActiveScopes = function(w) {
          var C = this.$getScope(w), p = [
            C
          ], v = this.snippetMap;
          return v[C] && v[C].includeScopes && p.push.apply(p, v[C].includeScopes), p.push("_"), p;
        }, c.prototype.expandWithTab = function(w, C) {
          var p = this, v = w.forEachSelection(function() {
            return p.expandSnippetForSelection(w, C);
          }, null, {
            keepOrder: true
          });
          return v && w.tabstopManager && w.tabstopManager.tabNext(), v;
        }, c.prototype.expandSnippetForSelection = function(w, C) {
          var p = w.getCursorPosition(), v = w.session.getLine(p.row), k = v.substring(0, p.column), m = v.substr(p.column), y = this.snippetMap, g;
          return this.getActiveScopes(w).some(function(d) {
            var x = y[d];
            return x && (g = this.findMatchingSnippet(x, k, m)), !!g;
          }, this), g ? (C && C.dryRun || (w.session.doc.removeInLine(p.row, p.column - g.replaceBefore.length, p.column + g.replaceAfter.length), this.variables.M__ = g.matchBefore, this.variables.T__ = g.matchAfter, this.insertSnippetForSelection(w, g.content), this.variables.M__ = this.variables.T__ = null), true) : false;
        }, c.prototype.findMatchingSnippet = function(w, C, p) {
          for (var v = w.length; v--; ) {
            var k = w[v];
            if (!(k.startRe && !k.startRe.test(C)) && !(k.endRe && !k.endRe.test(p)) && !(!k.startRe && !k.endRe)) return k.matchBefore = k.startRe ? k.startRe.exec(C) : [
              ""
            ], k.matchAfter = k.endRe ? k.endRe.exec(p) : [
              ""
            ], k.replaceBefore = k.triggerRe ? k.triggerRe.exec(C)[0] : "", k.replaceAfter = k.endTriggerRe ? k.endTriggerRe.exec(p)[0] : "", k;
          }
        }, c.prototype.register = function(w, C) {
          var p = this.snippetMap, v = this.snippetNameMap, k = this;
          w || (w = []);
          function m(d) {
            return d && !/^\^?\(.*\)\$?$|^\\b$/.test(d) && (d = "(?:" + d + ")"), d || "";
          }
          function y(d, x, T) {
            return d = m(d), x = m(x), d = x + d, d && d[d.length - 1] != "$" && (d = d + "$"), new RegExp(d);
          }
          function g(d) {
            d.scope || (d.scope = C || "_"), C = d.scope, p[C] || (p[C] = [], v[C] = {});
            var x = v[C];
            if (d.name) {
              var T = x[d.name];
              T && k.unregister(T), x[d.name] = d;
            }
            p[C].push(d), d.prefix && (d.tabTrigger = d.prefix), !d.content && d.body && (d.content = Array.isArray(d.body) ? d.body.join(`
`) : d.body), d.tabTrigger && !d.trigger && (!d.guard && /^\w/.test(d.tabTrigger) && (d.guard = "\\b"), d.trigger = a.escapeRegExp(d.tabTrigger)), !(!d.trigger && !d.guard && !d.endTrigger && !d.endGuard) && (d.startRe = y(d.trigger, d.guard), d.triggerRe = new RegExp(d.trigger), d.endRe = y(d.endTrigger, d.endGuard), d.endTriggerRe = new RegExp(d.endTrigger));
          }
          Array.isArray(w) ? w.forEach(g) : Object.keys(w).forEach(function(d) {
            g(w[d]);
          }), this._signal("registerSnippets", {
            scope: C
          });
        }, c.prototype.unregister = function(w, C) {
          var p = this.snippetMap, v = this.snippetNameMap;
          function k(m) {
            var y = v[m.scope || C];
            if (y && y[m.name]) {
              delete y[m.name];
              var g = p[m.scope || C], d = g && g.indexOf(m);
              d >= 0 && g.splice(d, 1);
            }
          }
          w.content ? k(w) : Array.isArray(w) && w.forEach(k);
        }, c.prototype.parseSnippetFile = function(w) {
          w = w.replace(/\r/g, "");
          for (var C = [], p = {}, v = /^#.*|^({[\s\S]*})\s*$|^(\S+) (.*)$|^((?:\n*\t.*)+)/gm, k; k = v.exec(w); ) {
            if (k[1]) try {
              p = JSON.parse(k[1]), C.push(p);
            } catch {
            }
            if (k[4]) p.content = k[4].replace(/^\t/gm, ""), C.push(p), p = {};
            else {
              var m = k[2], y = k[3];
              if (m == "regex") {
                var g = /\/((?:[^\/\\]|\\.)*)|$/g;
                p.guard = g.exec(y)[1], p.trigger = g.exec(y)[1], p.endTrigger = g.exec(y)[1], p.endGuard = g.exec(y)[1];
              } else m == "snippet" ? (p.tabTrigger = y.match(/^\S*/)[0], p.name || (p.name = y)) : m && (p[m] = y);
            }
          }
          return C;
        }, c.prototype.getSnippetByName = function(w, C) {
          var p = this.snippetNameMap, v;
          return this.getActiveScopes(C).some(function(k) {
            var m = p[k];
            return m && (v = m[w]), !!v;
          }, this), v;
        }, c;
      })();
      M.implement(s.prototype, $);
      var h = function(c, w, C) {
        C === void 0 && (C = {});
        var p = c.getCursorPosition(), v = c.session.getLine(p.row), k = c.session.getTabString(), m = v.match(/^\s*/)[0];
        p.column < m.length && (m = m.slice(0, p.column)), w = w.replace(/\r/g, "");
        var y = this.tokenizeTmSnippet(w);
        y = this.resolveVariables(y, c), y = y.map(function(H) {
          return H == `
` && !C.excludeExtraIndent ? H + m : typeof H == "string" ? H.replace(/\t/g, k) : H;
        });
        var g = [];
        y.forEach(function(H, U) {
          if (typeof H == "object") {
            var V = H.tabstopId, G = g[V];
            if (G || (G = g[V] = [], G.index = V, G.value = "", G.parents = {}), G.indexOf(H) === -1) {
              H.choices && !G.choices && (G.choices = H.choices), G.push(H);
              var Y = y.indexOf(H, U + 1);
              if (Y !== -1) {
                var J = y.slice(U + 1, Y), ee = J.some(function(ne) {
                  return typeof ne == "object";
                });
                ee && !G.value ? G.value = J : J.length && (!G.value || typeof G.value != "string") && (G.value = J.join(""));
              }
            }
          }
        }), g.forEach(function(H) {
          H.length = 0;
        });
        var d = {};
        function x(H) {
          for (var U = [], V = 0; V < H.length; V++) {
            var G = H[V];
            if (typeof G == "object") {
              if (d[G.tabstopId]) continue;
              var Y = H.lastIndexOf(G, V - 1);
              G = U[Y] || {
                tabstopId: G.tabstopId
              };
            }
            U[V] = G;
          }
          return U;
        }
        for (var T = 0; T < y.length; T++) {
          var E = y[T];
          if (typeof E == "object") {
            var R = E.tabstopId, I = g[R], O = y.indexOf(E, T + 1);
            if (d[R]) {
              d[R] === E && (delete d[R], Object.keys(d).forEach(function(H) {
                I.parents[H] = true;
              }));
              continue;
            }
            d[R] = E;
            var z = I.value;
            typeof z != "string" ? z = x(z) : E.fmt && (z = this.tmStrFormat(z, E, c)), y.splice.apply(y, [
              T + 1,
              Math.max(0, O - T)
            ].concat(z, E)), I.indexOf(E) === -1 && I.push(E);
          }
        }
        var F = 0, B = 0, W = "";
        return y.forEach(function(H) {
          if (typeof H == "string") {
            var U = H.split(`
`);
            U.length > 1 ? (B = U[U.length - 1].length, F += U.length - 1) : B += H.length, W += H;
          } else H && (H.start ? H.end = {
            row: F,
            column: B
          } : H.start = {
            row: F,
            column: B
          });
        }), {
          text: W,
          tabstops: g,
          tokens: y
        };
      }, u = (function() {
        function c(w) {
          if (this.index = 0, this.ranges = [], this.tabstops = [], w.tabstopManager) return w.tabstopManager;
          w.tabstopManager = this, this.$onChange = this.onChange.bind(this), this.$onChangeSelection = a.delayedCall(this.onChangeSelection.bind(this)).schedule, this.$onChangeSession = this.onChangeSession.bind(this), this.$onAfterExec = this.onAfterExec.bind(this), this.attach(w);
        }
        return c.prototype.attach = function(w) {
          this.$openTabstops = null, this.selectedTabstop = null, this.editor = w, this.session = w.session, this.editor.on("change", this.$onChange), this.editor.on("changeSelection", this.$onChangeSelection), this.editor.on("changeSession", this.$onChangeSession), this.editor.commands.on("afterExec", this.$onAfterExec), this.editor.keyBinding.addKeyboardHandler(this.keyboardHandler);
        }, c.prototype.detach = function() {
          this.tabstops.forEach(this.removeTabstopMarkers, this), this.ranges.length = 0, this.tabstops.length = 0, this.selectedTabstop = null, this.editor.off("change", this.$onChange), this.editor.off("changeSelection", this.$onChangeSelection), this.editor.off("changeSession", this.$onChangeSession), this.editor.commands.off("afterExec", this.$onAfterExec), this.editor.keyBinding.removeKeyboardHandler(this.keyboardHandler), this.editor.tabstopManager = null, this.session = null, this.editor = null;
        }, c.prototype.onChange = function(w) {
          for (var C = w.action[0] == "r", p = this.selectedTabstop || {}, v = p.parents || {}, k = this.tabstops.slice(), m = 0; m < k.length; m++) {
            var y = k[m], g = y == p || v[y.index];
            if (y.rangeList.$bias = g ? 0 : 1, w.action == "remove" && y !== p) {
              var d = y.parents && y.parents[p.index], x = y.rangeList.pointIndex(w.start, d);
              x = x < 0 ? -x - 1 : x + 1;
              var T = y.rangeList.pointIndex(w.end, d);
              T = T < 0 ? -T - 1 : T - 1;
              for (var E = y.rangeList.ranges.slice(x, T), R = 0; R < E.length; R++) this.removeRange(E[R]);
            }
            y.rangeList.$onChange(w);
          }
          var I = this.session;
          !this.$inChange && C && I.getLength() == 1 && !I.getValue() && this.detach();
        }, c.prototype.updateLinkedFields = function() {
          var w = this.selectedTabstop;
          if (!(!w || !w.hasLinkedRanges || !w.firstNonLinked)) {
            this.$inChange = true;
            for (var C = this.session, p = C.getTextRange(w.firstNonLinked), v = 0; v < w.length; v++) {
              var k = w[v];
              if (k.linked) {
                var m = k.original, y = _.snippetManager.tmStrFormat(p, m, this.editor);
                C.replace(k, y);
              }
            }
            this.$inChange = false;
          }
        }, c.prototype.onAfterExec = function(w) {
          w.command && !w.command.readOnly && this.updateLinkedFields();
        }, c.prototype.onChangeSelection = function() {
          if (this.editor) {
            for (var w = this.editor.selection.lead, C = this.editor.selection.anchor, p = this.editor.selection.isEmpty(), v = 0; v < this.ranges.length; v++) if (!this.ranges[v].linked) {
              var k = this.ranges[v].contains(w.row, w.column), m = p || this.ranges[v].contains(C.row, C.column);
              if (k && m) return;
            }
            this.detach();
          }
        }, c.prototype.onChangeSession = function() {
          this.detach();
        }, c.prototype.tabNext = function(w) {
          var C = this.tabstops.length, p = this.index + (w || 1);
          p = Math.min(Math.max(p, 1), C), p == C && (p = 0), this.selectTabstop(p), this.updateTabstopMarkers(), p === 0 && this.detach();
        }, c.prototype.selectTabstop = function(w) {
          this.$openTabstops = null;
          var C = this.tabstops[this.index];
          if (C && this.addTabstopMarkers(C), this.index = w, C = this.tabstops[this.index], !(!C || !C.length)) {
            this.selectedTabstop = C;
            var p = C.firstNonLinked || C;
            if (C.choices && (p.cursor = p.start), this.editor.inVirtualSelectionMode) this.editor.selection.fromOrientedRange(p);
            else {
              var v = this.editor.multiSelect;
              v.toSingleRange(p);
              for (var k = 0; k < C.length; k++) C.hasLinkedRanges && C[k].linked || v.addRange(C[k].clone(), true);
            }
            this.editor.keyBinding.addKeyboardHandler(this.keyboardHandler), this.selectedTabstop && this.selectedTabstop.choices && this.editor.execCommand("startAutocomplete", {
              matches: this.selectedTabstop.choices
            });
          }
        }, c.prototype.addTabstops = function(w, C, p) {
          var v = this.useLink || !this.editor.getOption("enableMultiselect");
          if (this.$openTabstops || (this.$openTabstops = []), !w[0]) {
            var k = l.fromPoints(p, p);
            b(k.start, C), b(k.end, C), w[0] = [
              k
            ], w[0].index = 0;
          }
          var m = this.index, y = [
            m + 1,
            0
          ], g = this.ranges, d = this.snippetId = (this.snippetId || 0) + 1;
          w.forEach(function(x, T) {
            var E = this.$openTabstops[T] || x;
            E.snippetId = d;
            for (var R = 0; R < x.length; R++) {
              var I = x[R], O = l.fromPoints(I.start, I.end || I.start);
              S(O.start, C), S(O.end, C), O.original = I, O.tabstop = E, g.push(O), E != x ? E.unshift(O) : E[R] = O, I.fmtString || E.firstNonLinked && v ? (O.linked = true, E.hasLinkedRanges = true) : E.firstNonLinked || (E.firstNonLinked = O);
            }
            E.firstNonLinked || (E.hasLinkedRanges = false), E === x && (y.push(E), this.$openTabstops[T] = E), this.addTabstopMarkers(E), E.rangeList = E.rangeList || new i(), E.rangeList.$bias = 0, E.rangeList.addList(E);
          }, this), y.length > 2 && (this.tabstops.length && y.push(y.splice(2, 1)[0]), this.tabstops.splice.apply(this.tabstops, y));
        }, c.prototype.addTabstopMarkers = function(w) {
          var C = this.session;
          w.forEach(function(p) {
            p.markerId || (p.markerId = C.addMarker(p, "ace_snippet-marker", "text"));
          });
        }, c.prototype.removeTabstopMarkers = function(w) {
          var C = this.session;
          w.forEach(function(p) {
            C.removeMarker(p.markerId), p.markerId = null;
          });
        }, c.prototype.updateTabstopMarkers = function() {
          if (this.selectedTabstop) {
            var w = this.selectedTabstop.snippetId;
            this.selectedTabstop.index === 0 && w--, this.tabstops.forEach(function(C) {
              C.snippetId === w ? this.addTabstopMarkers(C) : this.removeTabstopMarkers(C);
            }, this);
          }
        }, c.prototype.removeRange = function(w) {
          var C = w.tabstop.indexOf(w);
          C != -1 && w.tabstop.splice(C, 1), C = this.ranges.indexOf(w), C != -1 && this.ranges.splice(C, 1), C = w.tabstop.rangeList.ranges.indexOf(w), C != -1 && w.tabstop.splice(C, 1), this.session.removeMarker(w.markerId), w.tabstop.length || (C = this.tabstops.indexOf(w.tabstop), C != -1 && this.tabstops.splice(C, 1), this.tabstops.length || this.detach());
        }, c;
      })();
      u.prototype.keyboardHandler = new o(), u.prototype.keyboardHandler.bindKeys({
        Tab: function(c) {
          _.snippetManager && _.snippetManager.expandWithTab(c) || (c.tabstopManager.tabNext(1), c.renderer.scrollCursorIntoView());
        },
        "Shift-Tab": function(c) {
          c.tabstopManager.tabNext(-1), c.renderer.scrollCursorIntoView();
        },
        Esc: function(c) {
          c.tabstopManager.detach();
        }
      });
      var S = function(c, w) {
        c.row == 0 && (c.column += w.column), c.row += w.row;
      }, b = function(c, w) {
        c.row == w.row && (c.column -= w.column), c.row -= w.row;
      };
      L.importCssString(`
.ace_snippet-marker {
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    background: rgba(194, 193, 208, 0.09);
    border: 1px dotted rgba(211, 208, 235, 0.62);
    position: absolute;
}`, "snippets.css", false), _.snippetManager = new s();
      var f = A("./editor").Editor;
      (function() {
        this.insertSnippet = function(c, w) {
          return _.snippetManager.insertSnippet(this, c, w);
        }, this.expandSnippet = function(c) {
          return _.snippetManager.expandWithTab(this, c);
        };
      }).call(f.prototype);
    }), ace.define("ace/autocomplete/popup", [
      "require",
      "exports",
      "module",
      "ace/virtual_renderer",
      "ace/editor",
      "ace/range",
      "ace/lib/event",
      "ace/lib/lang",
      "ace/lib/dom",
      "ace/config",
      "ace/lib/useragent"
    ], function(A, _, N) {
      var L = A("../virtual_renderer").VirtualRenderer, M = A("../editor").Editor, $ = A("../range").Range, a = A("../lib/event"), l = A("../lib/lang"), i = A("../lib/dom"), o = A("../config").nls, r = A("./../lib/useragent"), n = function(S) {
        return "suggest-aria-id:".concat(S);
      }, e = r.isSafari ? "menu" : "listbox", t = r.isSafari ? "menuitem" : "option", s = r.isSafari ? "aria-current" : "aria-selected", h = function(S) {
        var b = new L(S);
        b.$maxLines = 4;
        var f = new M(b);
        return f.setHighlightActiveLine(false), f.setShowPrintMargin(false), f.renderer.setShowGutter(false), f.renderer.setHighlightGutterLine(false), f.$mouseHandler.$focusTimeout = 0, f.$highlightTagPending = true, f;
      }, u = /* @__PURE__ */ (function() {
        function S(b) {
          var f = i.createElement("div"), c = h(f);
          b && b.appendChild(f), f.style.display = "none", c.renderer.content.style.cursor = "default", c.renderer.setStyle("ace_autocomplete"), c.renderer.$textLayer.element.setAttribute("role", e), c.renderer.$textLayer.element.setAttribute("aria-roledescription", o("autocomplete.popup.aria-roledescription", "Autocomplete suggestions")), c.renderer.$textLayer.element.setAttribute("aria-label", o("autocomplete.popup.aria-label", "Autocomplete suggestions")), c.renderer.textarea.setAttribute("aria-hidden", "true"), c.setOption("displayIndentGuides", false), c.setOption("dragDelay", 150);
          var w = function() {
          };
          c.focus = w, c.$isFocused = true, c.renderer.$cursorLayer.restartTimer = w, c.renderer.$cursorLayer.element.style.opacity = "0", c.renderer.$maxLines = 8, c.renderer.$keepTextAreaAtCursor = false, c.setHighlightActiveLine(false), c.session.highlight(""), c.session.$searchHighlight.clazz = "ace_highlight-marker", c.on("mousedown", function(g) {
            var d = g.getDocumentPosition();
            c.selection.moveToPosition(d), v.start.row = v.end.row = d.row, g.stop();
          });
          var C, p = new $(-1, 0, -1, 1 / 0), v = new $(-1, 0, -1, 1 / 0);
          v.id = c.session.addMarker(v, "ace_active-line", "fullLine"), c.setSelectOnHover = function(g) {
            g ? p.id && (c.session.removeMarker(p.id), p.id = null) : p.id = c.session.addMarker(p, "ace_line-hover", "fullLine");
          }, c.setSelectOnHover(false), c.on("mousemove", function(g) {
            if (!C) {
              C = g;
              return;
            }
            if (!(C.x == g.x && C.y == g.y)) {
              C = g, C.scrollTop = c.renderer.scrollTop, c.isMouseOver = true;
              var d = C.getDocumentPosition().row;
              p.start.row != d && (p.id || c.setRow(d), m(d));
            }
          }), c.renderer.on("beforeRender", function() {
            if (C && p.start.row != -1) {
              C.$pos = null;
              var g = C.getDocumentPosition().row;
              p.id || c.setRow(g), m(g, true);
            }
          }), c.renderer.on("afterRender", function() {
            for (var g = c.renderer.$textLayer, d = g.config.firstRow, x = g.config.lastRow; d <= x; d++) {
              var T = g.element.childNodes[d - g.config.firstRow];
              T.setAttribute("role", t), T.setAttribute("aria-roledescription", o("autocomplete.popup.item.aria-roledescription", "item")), T.setAttribute("aria-setsize", c.data.length), T.setAttribute("aria-describedby", "doc-tooltip"), T.setAttribute("aria-posinset", d + 1);
              var E = c.getData(d);
              if (E) {
                var R = "".concat(E.caption || E.value).concat(E.meta ? ", ".concat(E.meta) : "");
                T.setAttribute("aria-label", R);
              }
              var I = T.querySelectorAll(".ace_completion-highlight");
              I.forEach(function(O) {
                O.setAttribute("role", "mark");
              });
            }
          }), c.renderer.on("afterRender", function() {
            var g = c.getRow(), d = c.renderer.$textLayer, x = d.element.childNodes[g - d.config.firstRow], T = document.activeElement;
            if (x !== c.selectedNode && c.selectedNode && (i.removeCssClass(c.selectedNode, "ace_selected"), c.selectedNode.removeAttribute(s), c.selectedNode.removeAttribute("id")), T.removeAttribute("aria-activedescendant"), c.selectedNode = x, x) {
              var E = n(g);
              i.addCssClass(x, "ace_selected"), x.id = E, d.element.setAttribute("aria-activedescendant", E), T.setAttribute("aria-activedescendant", E), x.setAttribute(s, "true");
            }
          });
          var k = function() {
            m(-1);
          }, m = function(g, d) {
            g !== p.start.row && (p.start.row = p.end.row = g, d || c.session._emit("changeBackMarker"), c._emit("changeHoverMarker"));
          };
          c.getHoveredRow = function() {
            return p.start.row;
          }, a.addListener(c.container, "mouseout", function() {
            c.isMouseOver = false, k();
          }), c.on("hide", k), c.on("changeSelection", k), c.session.doc.getLength = function() {
            return c.data.length;
          }, c.session.doc.getLine = function(g) {
            var d = c.data[g];
            return typeof d == "string" ? d : d && d.value || "";
          };
          var y = c.session.bgTokenizer;
          return y.$tokenizeRow = function(g) {
            var d = c.data[g], x = [];
            if (!d) return x;
            typeof d == "string" && (d = {
              value: d
            });
            var T = d.caption || d.value || d.name;
            function E(H, U) {
              H && x.push({
                type: (d.className || "") + (U || ""),
                value: H
              });
            }
            for (var R = T.toLowerCase(), I = (c.filterText || "").toLowerCase(), O = 0, z = 0, F = 0; F <= I.length; F++) if (F != z && (d.matchMask & 1 << F || F == I.length)) {
              var B = I.slice(z, F);
              z = F;
              var W = R.indexOf(B, O);
              if (W == -1) continue;
              E(T.slice(O, W), ""), O = W + B.length, E(T.slice(W, O), "completion-highlight");
            }
            return E(T.slice(O, T.length), ""), x.push({
              type: "completion-spacer",
              value: " "
            }), d.meta && x.push({
              type: "completion-meta",
              value: d.meta
            }), d.message && x.push({
              type: "completion-message",
              value: d.message
            }), x;
          }, y.$updateOnChange = w, y.start = w, c.session.$computeWidth = function() {
            return this.screenWidth = 0;
          }, c.isOpen = false, c.isTopdown = false, c.autoSelect = true, c.filterText = "", c.isMouseOver = false, c.data = [], c.setData = function(g, d) {
            c.filterText = d || "", c.setValue(l.stringRepeat(`
`, g.length), -1), c.data = g || [], c.setRow(0);
          }, c.getData = function(g) {
            return c.data[g];
          }, c.getRow = function() {
            return v.start.row;
          }, c.setRow = function(g) {
            g = Math.max(this.autoSelect ? 0 : -1, Math.min(this.data.length - 1, g)), v.start.row != g && (c.selection.clearSelection(), v.start.row = v.end.row = g || 0, c.session._emit("changeBackMarker"), c.moveCursorTo(g || 0, 0), c.isOpen && c._signal("select"));
          }, c.on("changeSelection", function() {
            c.isOpen && c.setRow(c.selection.lead.row), c.renderer.scrollCursorIntoView();
          }), c.hide = function() {
            this.container.style.display = "none", c.anchorPos = null, c.anchor = null, c.isOpen && (c.isOpen = false, this._signal("hide"));
          }, c.tryShow = function(g, d, x, T) {
            if (!T && c.isOpen && c.anchorPos && c.anchor && c.anchorPos.top === g.top && c.anchorPos.left === g.left && c.anchor === x) return true;
            var E = this.container, R = this.renderer.scrollBar.width || 10, I = window.innerHeight - R, O = window.innerWidth - R, z = this.renderer, F = z.$maxLines * d * 1.4, B = {
              top: 0,
              bottom: 0
            }, W = I - g.top - 3 * this.$borderSize - d, H = g.top - 3 * this.$borderSize;
            x || (H <= W || W >= F ? x = "bottom" : x = "top"), x === "top" ? (B.bottom = g.top - this.$borderSize, B.top = B.bottom - F) : x === "bottom" && (B.top = g.top + d + this.$borderSize, B.bottom = B.top + F);
            var U = B.top >= 0 && B.bottom <= I;
            if (!T && !U) return false;
            U ? z.$maxPixelHeight = null : x === "top" ? z.$maxPixelHeight = H : z.$maxPixelHeight = W, x === "top" ? (E.style.top = "", E.style.bottom = I + R - B.bottom + "px", c.isTopdown = false) : (E.style.top = B.top + "px", E.style.bottom = "", c.isTopdown = true), E.style.display = "";
            var V = g.left;
            return V + E.offsetWidth > O && (V = O - E.offsetWidth), E.style.left = V + "px", E.style.right = "", i.$fixPositionBug(E), c.isOpen || (c.isOpen = true, this._signal("show"), C = null), c.anchorPos = g, c.anchor = x, true;
          }, c.show = function(g, d, x) {
            this.tryShow(g, d, x ? "bottom" : void 0, true);
          }, c.goTo = function(g) {
            var d = this.getRow(), x = this.session.getLength() - 1;
            switch (g) {
              case "up":
                d = d <= 0 ? x : d - 1;
                break;
              case "down":
                d = d >= x ? -1 : d + 1;
                break;
              case "start":
                d = 0;
                break;
              case "end":
                d = x;
                break;
            }
            this.setRow(d);
          }, c.getTextLeftOffset = function() {
            return this.$borderSize + this.renderer.$padding + this.$imageSize;
          }, c.$imageSize = 0, c.$borderSize = 1, c;
        }
        return S;
      })();
      i.importCssString(`
.ace_editor.ace_autocomplete .ace_marker-layer .ace_active-line {
    background-color: #CAD6FA;
    z-index: 1;
}
.ace_dark.ace_editor.ace_autocomplete .ace_marker-layer .ace_active-line {
    background-color: #3a674e;
}
.ace_editor.ace_autocomplete .ace_line-hover {
    border: 1px solid #abbffe;
    margin-top: -1px;
    background: rgba(233,233,253,0.4);
    position: absolute;
    z-index: 2;
}
.ace_dark.ace_editor.ace_autocomplete .ace_line-hover {
    border: 1px solid rgba(109, 150, 13, 0.8);
    background: rgba(58, 103, 78, 0.62);
}
.ace_completion-meta {
    opacity: 0.5;
    margin-left: 0.9em;
}
.ace_completion-message {
    margin-left: 0.9em;
    color: blue;
}
.ace_editor.ace_autocomplete .ace_completion-highlight{
    color: #2d69c7;
}
.ace_dark.ace_editor.ace_autocomplete .ace_completion-highlight{
    color: #93ca12;
}
.ace_editor.ace_autocomplete {
    width: 300px;
    z-index: 200000;
    border: 1px lightgray solid;
    position: fixed;
    box-shadow: 2px 3px 5px rgba(0,0,0,.2);
    line-height: 1.4;
    background: #fefefe;
    color: #111;
}
.ace_dark.ace_editor.ace_autocomplete {
    border: 1px #484747 solid;
    box-shadow: 2px 3px 5px rgba(0, 0, 0, 0.51);
    line-height: 1.4;
    background: #25282c;
    color: #c1c1c1;
}
.ace_autocomplete .ace_text-layer  {
    width: calc(100% - 8px);
}
.ace_autocomplete .ace_line {
    display: flex;
    align-items: center;
}
.ace_autocomplete .ace_line > * {
    min-width: 0;
    flex: 0 0 auto;
}
.ace_autocomplete .ace_line .ace_ {
    flex: 0 1 auto;
    overflow: hidden;
    text-overflow: ellipsis;
}
.ace_autocomplete .ace_completion-spacer {
    flex: 1;
}
.ace_autocomplete.ace_loading:after  {
    content: "";
    position: absolute;
    top: 0px;
    height: 2px;
    width: 8%;
    background: blue;
    z-index: 100;
    animation: ace_progress 3s infinite linear;
    animation-delay: 300ms;
    transform: translateX(-100%) scaleX(1);
}
@keyframes ace_progress {
    0% { transform: translateX(-100%) scaleX(1) }
    50% { transform: translateX(625%) scaleX(2) } 
    100% { transform: translateX(1500%) scaleX(3) } 
}
@media (prefers-reduced-motion) {
    .ace_autocomplete.ace_loading:after {
        transform: translateX(625%) scaleX(2);
        animation: none;
     }
}
`, "autocompletion.css", false), _.AcePopup = u, _.$singleLineEditor = h, _.getAriaId = n;
    }), ace.define("ace/autocomplete/inline_screenreader", [
      "require",
      "exports",
      "module"
    ], function(A, _, N) {
      var L = (function() {
        function M($) {
          this.editor = $, this.screenReaderDiv = document.createElement("div"), this.screenReaderDiv.classList.add("ace_screenreader-only"), this.editor.container.appendChild(this.screenReaderDiv);
        }
        return M.prototype.setScreenReaderContent = function($) {
          for (!this.popup && this.editor.completer && this.editor.completer.popup && (this.popup = this.editor.completer.popup, this.popup.renderer.on("afterRender", function() {
            var l = this.popup.getRow(), i = this.popup.renderer.$textLayer, o = i.element.childNodes[l - i.config.firstRow];
            if (o) {
              for (var r = "doc-tooltip ", n = 0; n < this._lines.length; n++) r += "ace-inline-screenreader-line-".concat(n, " ");
              o.setAttribute("aria-describedby", r);
            }
          }.bind(this))); this.screenReaderDiv.firstChild; ) this.screenReaderDiv.removeChild(this.screenReaderDiv.firstChild);
          this._lines = $.split(/\r\n|\r|\n/);
          var a = this.createCodeBlock();
          this.screenReaderDiv.appendChild(a);
        }, M.prototype.destroy = function() {
          this.screenReaderDiv.remove();
        }, M.prototype.createCodeBlock = function() {
          var $ = document.createElement("pre");
          $.setAttribute("id", "ace-inline-screenreader");
          for (var a = 0; a < this._lines.length; a++) {
            var l = document.createElement("code");
            l.setAttribute("id", "ace-inline-screenreader-line-".concat(a));
            var i = document.createTextNode(this._lines[a]);
            l.appendChild(i), $.appendChild(l);
          }
          return $;
        }, M;
      })();
      _.AceInlineScreenReader = L;
    }), ace.define("ace/autocomplete/inline", [
      "require",
      "exports",
      "module",
      "ace/snippets",
      "ace/autocomplete/inline_screenreader"
    ], function(A, _, N) {
      var L = A("../snippets").snippetManager, M = A("./inline_screenreader").AceInlineScreenReader, $ = (function() {
        function a() {
          this.editor = null;
        }
        return a.prototype.show = function(l, i, o) {
          if (o = o || "", l && this.editor && this.editor !== l && (this.hide(), this.editor = null, this.inlineScreenReader = null), !l || !i) return false;
          this.inlineScreenReader || (this.inlineScreenReader = new M(l));
          var r = i.snippet ? L.getDisplayTextForSnippet(l, i.snippet) : i.value;
          return i.hideInlinePreview || !r || !r.startsWith(o) ? false : (this.editor = l, this.inlineScreenReader.setScreenReaderContent(r), r = r.slice(o.length), r === "" ? l.removeGhostText() : l.setGhostText(r), true);
        }, a.prototype.isOpen = function() {
          return this.editor ? !!this.editor.renderer.$ghostText : false;
        }, a.prototype.hide = function() {
          return this.editor ? (this.editor.removeGhostText(), true) : false;
        }, a.prototype.destroy = function() {
          this.hide(), this.editor = null, this.inlineScreenReader && (this.inlineScreenReader.destroy(), this.inlineScreenReader = null);
        }, a;
      })();
      _.AceInline = $;
    }), ace.define("ace/autocomplete/util", [
      "require",
      "exports",
      "module"
    ], function(A, _, N) {
      _.parForEach = function(M, $, a) {
        var l = 0, i = M.length;
        i === 0 && a();
        for (var o = 0; o < i; o++) $(M[o], function(r, n) {
          l++, l === i && a(r, n);
        });
      };
      var L = /[a-zA-Z_0-9\$\-\u00A2-\u2000\u2070-\uFFFF]/;
      _.retrievePrecedingIdentifier = function(M, $, a) {
        a = a || L;
        for (var l = [], i = $ - 1; i >= 0 && a.test(M[i]); i--) l.push(M[i]);
        return l.reverse().join("");
      }, _.retrieveFollowingIdentifier = function(M, $, a) {
        a = a || L;
        for (var l = [], i = $; i < M.length && a.test(M[i]); i++) l.push(M[i]);
        return l;
      }, _.getCompletionPrefix = function(M) {
        var $ = M.getCursorPosition(), a = M.session.getLine($.row), l;
        return M.completers.forEach(function(i) {
          i.identifierRegexps && i.identifierRegexps.forEach(function(o) {
            !l && o && (l = this.retrievePrecedingIdentifier(a, $.column, o));
          }.bind(this));
        }.bind(this)), l || this.retrievePrecedingIdentifier(a, $.column);
      }, _.triggerAutocomplete = function(M, a) {
        var a = a ?? M.session.getPrecedingCharacter();
        return M.completers.some(function(l) {
          if (l.triggerCharacters && Array.isArray(l.triggerCharacters)) return l.triggerCharacters.includes(a);
        });
      };
    }), ace.define("ace/autocomplete", [
      "require",
      "exports",
      "module",
      "ace/keyboard/hash_handler",
      "ace/autocomplete/popup",
      "ace/autocomplete/inline",
      "ace/autocomplete/popup",
      "ace/autocomplete/util",
      "ace/lib/lang",
      "ace/lib/dom",
      "ace/snippets",
      "ace/config",
      "ace/lib/event",
      "ace/lib/scroll"
    ], function(A, _, N) {
      var L = A("./keyboard/hash_handler").HashHandler, M = A("./autocomplete/popup").AcePopup, $ = A("./autocomplete/inline").AceInline, a = A("./autocomplete/popup").getAriaId, l = A("./autocomplete/util"), i = A("./lib/lang"), o = A("./lib/dom"), r = A("./snippets").snippetManager, n = A("./config"), e = A("./lib/event"), t = A("./lib/scroll").preventParentScroll, s = function(b, f) {
        f.completer && f.completer.destroy();
      }, h = (function() {
        function b() {
          this.autoInsert = false, this.autoSelect = true, this.autoShown = false, this.exactMatch = false, this.inlineEnabled = false, this.keyboardHandler = new L(), this.keyboardHandler.bindKeys(this.commands), this.parentNode = null, this.setSelectOnHover = false, this.hasSeen = /* @__PURE__ */ new Set(), this.showLoadingState = false, this.stickySelectionDelay = 500, this.blurListener = this.blurListener.bind(this), this.changeListener = this.changeListener.bind(this), this.mousedownListener = this.mousedownListener.bind(this), this.mousewheelListener = this.mousewheelListener.bind(this), this.onLayoutChange = this.onLayoutChange.bind(this), this.changeTimer = i.delayedCall(function() {
            this.updateCompletions(true);
          }.bind(this)), this.tooltipTimer = i.delayedCall(this.updateDocTooltip.bind(this), 50), this.popupTimer = i.delayedCall(this.$updatePopupPosition.bind(this), 50), this.stickySelectionTimer = i.delayedCall(function() {
            this.stickySelection = true;
          }.bind(this), this.stickySelectionDelay), this.$firstOpenTimer = i.delayedCall(function() {
            var f = this.completionProvider && this.completionProvider.initialPosition;
            this.autoShown || this.popup && this.popup.isOpen || !f || this.editor.completers.length === 0 || (this.completions = new S(b.completionsForLoading), this.openPopup(this.editor, f.prefix, false), this.popup.renderer.setStyle("ace_loading", true));
          }.bind(this), this.stickySelectionDelay);
        }
        return Object.defineProperty(b, "completionsForLoading", {
          get: function() {
            return [
              {
                caption: n.nls("autocomplete.loading", "Loading..."),
                value: ""
              }
            ];
          },
          enumerable: false,
          configurable: true
        }), b.prototype.$init = function() {
          return this.popup = new M(this.parentNode || document.body || document.documentElement), this.popup.on("click", function(f) {
            this.insertMatch(), f.stop();
          }.bind(this)), this.popup.focus = this.editor.focus.bind(this.editor), this.popup.on("show", this.$onPopupShow.bind(this)), this.popup.on("hide", this.$onHidePopup.bind(this)), this.popup.on("select", this.$onPopupChange.bind(this)), e.addListener(this.popup.container, "mouseout", this.mouseOutListener.bind(this)), this.popup.on("changeHoverMarker", this.tooltipTimer.bind(null, null)), this.popup.renderer.on("afterRender", this.$onPopupRender.bind(this)), this.popup;
        }, b.prototype.$initInline = function() {
          if (!(!this.inlineEnabled || this.inlineRenderer)) return this.inlineRenderer = new $(), this.inlineRenderer;
        }, b.prototype.getPopup = function() {
          return this.popup || this.$init();
        }, b.prototype.$onHidePopup = function() {
          this.inlineRenderer && this.inlineRenderer.hide(), this.hideDocTooltip(), this.stickySelectionTimer.cancel(), this.popupTimer.cancel(), this.stickySelection = false;
        }, b.prototype.$seen = function(f) {
          !this.hasSeen.has(f) && f && f.completer && f.completer.onSeen && typeof f.completer.onSeen == "function" && (f.completer.onSeen(this.editor, f), this.hasSeen.add(f));
        }, b.prototype.$onPopupChange = function(f) {
          if (this.inlineRenderer && this.inlineEnabled) {
            var c = f ? null : this.popup.getData(this.popup.getRow());
            if (this.$updateGhostText(c), this.popup.isMouseOver && this.setSelectOnHover) {
              this.tooltipTimer.call(null, null);
              return;
            }
            this.popupTimer.schedule(), this.tooltipTimer.schedule();
          } else this.popupTimer.call(null, null), this.tooltipTimer.call(null, null);
        }, b.prototype.$updateGhostText = function(f) {
          var c = this.base.row, w = this.base.column, C = this.editor.getCursorPosition().column, p = this.editor.session.getLine(c).slice(w, C);
          this.inlineRenderer.show(this.editor, f, p) ? this.$seen(f) : this.inlineRenderer.hide();
        }, b.prototype.$onPopupRender = function() {
          var f = this.inlineRenderer && this.inlineEnabled;
          if (this.completions && this.completions.filtered && this.completions.filtered.length > 0) for (var c = this.popup.getFirstVisibleRow(); c <= this.popup.getLastVisibleRow(); c++) {
            var w = this.popup.getData(c);
            w && (!f || w.hideInlinePreview) && this.$seen(w);
          }
        }, b.prototype.$onPopupShow = function(f) {
          this.$onPopupChange(f), this.stickySelection = false, this.stickySelectionDelay >= 0 && this.stickySelectionTimer.schedule(this.stickySelectionDelay);
        }, b.prototype.observeLayoutChanges = function() {
          if (!(this.$elements || !this.editor)) {
            window.addEventListener("resize", this.onLayoutChange, {
              passive: true
            }), window.addEventListener("wheel", this.mousewheelListener);
            for (var f = this.editor.container.parentNode, c = []; f; ) c.push(f), f.addEventListener("scroll", this.onLayoutChange, {
              passive: true
            }), f = f.parentNode;
            this.$elements = c;
          }
        }, b.prototype.unObserveLayoutChanges = function() {
          var f = this;
          window.removeEventListener("resize", this.onLayoutChange, {
            passive: true
          }), window.removeEventListener("wheel", this.mousewheelListener), this.$elements && this.$elements.forEach(function(c) {
            c.removeEventListener("scroll", f.onLayoutChange, {
              passive: true
            });
          }), this.$elements = null;
        }, b.prototype.onLayoutChange = function() {
          if (!this.popup.isOpen) return this.unObserveLayoutChanges();
          this.$updatePopupPosition(), this.updateDocTooltip();
        }, b.prototype.$updatePopupPosition = function() {
          var f = this.editor, c = f.renderer, w = c.layerConfig.lineHeight, C = c.$cursorLayer.getPixelPosition(this.base, true);
          C.left -= this.popup.getTextLeftOffset();
          var p = f.container.getBoundingClientRect();
          C.top += p.top - c.layerConfig.offset, C.left += p.left - f.renderer.scrollLeft, C.left += c.gutterWidth;
          var v = {
            top: C.top,
            left: C.left
          };
          c.$ghostText && c.$ghostTextWidget && this.base.row === c.$ghostText.position.row && (v.top += c.$ghostTextWidget.el.offsetHeight);
          var k = f.container.getBoundingClientRect().bottom - w, m = k < v.top ? {
            top: k,
            left: v.left
          } : v;
          this.popup.tryShow(m, w, "bottom") || this.popup.tryShow(C, w, "top") || this.popup.show(C, w);
        }, b.prototype.openPopup = function(f, c, w) {
          this.$firstOpenTimer.cancel(), this.popup || this.$init(), this.inlineEnabled && !this.inlineRenderer && this.$initInline(), this.popup.autoSelect = this.autoSelect, this.popup.setSelectOnHover(this.setSelectOnHover);
          var C = this.popup.getRow(), p = this.popup.data[C];
          this.popup.setData(this.completions.filtered, this.completions.filterText), this.editor.textInput.setAriaOptions && this.editor.textInput.setAriaOptions({
            activeDescendant: a(this.popup.getRow()),
            inline: this.inlineEnabled
          }), f.keyBinding.addKeyboardHandler(this.keyboardHandler);
          var v;
          this.stickySelection && (v = this.popup.data.indexOf(p)), (!v || v === -1) && (v = 0), this.popup.setRow(this.autoSelect ? v : -1), v === C && p !== this.completions.filtered[v] && this.$onPopupChange();
          var k = this.inlineRenderer && this.inlineEnabled;
          if (v === C && k) {
            var m = this.popup.getData(this.popup.getRow());
            this.$updateGhostText(m);
          }
          w || (this.popup.setTheme(f.getTheme()), this.popup.setFontSize(f.getFontSize()), this.$updatePopupPosition(), this.tooltipNode && this.updateDocTooltip()), this.changeTimer.cancel(), this.observeLayoutChanges();
        }, b.prototype.detach = function() {
          this.editor && (this.editor.keyBinding.removeKeyboardHandler(this.keyboardHandler), this.editor.off("changeSelection", this.changeListener), this.editor.off("blur", this.blurListener), this.editor.off("mousedown", this.mousedownListener), this.editor.off("mousewheel", this.mousewheelListener)), this.$firstOpenTimer.cancel(), this.changeTimer.cancel(), this.hideDocTooltip(), this.completionProvider && this.completionProvider.detach(), this.popup && this.popup.isOpen && this.popup.hide(), this.popup && this.popup.renderer && this.popup.renderer.off("afterRender", this.$onPopupRender), this.base && this.base.detach(), this.activated = false, this.completionProvider = this.completions = this.base = null, this.unObserveLayoutChanges();
        }, b.prototype.changeListener = function(f) {
          var c = this.editor.selection.lead;
          (c.row != this.base.row || c.column < this.base.column) && this.detach(), this.activated ? this.changeTimer.schedule() : this.detach();
        }, b.prototype.blurListener = function(f) {
          var c = document.activeElement, w = this.editor.textInput.getElement(), C = f.relatedTarget && this.tooltipNode && this.tooltipNode.contains(f.relatedTarget), p = this.popup && this.popup.container;
          c != w && c.parentNode != p && !C && c != this.tooltipNode && f.relatedTarget != w && this.detach();
        }, b.prototype.mousedownListener = function(f) {
          this.detach();
        }, b.prototype.mousewheelListener = function(f) {
          this.popup && !this.popup.isMouseOver && this.detach();
        }, b.prototype.mouseOutListener = function(f) {
          this.popup.isOpen && this.$updatePopupPosition();
        }, b.prototype.goTo = function(f) {
          this.popup.goTo(f);
        }, b.prototype.insertMatch = function(f, c) {
          if (f || (f = this.popup.getData(this.popup.getRow())), !f) return false;
          if (f.value === "") return this.detach();
          var w = this.completions, C = this.getCompletionProvider().insertMatch(this.editor, f, w.filterText, c);
          return this.completions == w && this.detach(), C;
        }, b.prototype.showPopup = function(f, c) {
          this.editor && this.detach(), this.activated = true, this.editor = f, f.completer != this && (f.completer && f.completer.detach(), f.completer = this), f.on("changeSelection", this.changeListener), f.on("blur", this.blurListener), f.on("mousedown", this.mousedownListener), f.on("mousewheel", this.mousewheelListener), this.updateCompletions(false, c);
        }, b.prototype.getCompletionProvider = function(f) {
          return this.completionProvider || (this.completionProvider = new u(f)), this.completionProvider;
        }, b.prototype.gatherCompletions = function(f, c) {
          return this.getCompletionProvider().gatherCompletions(f, c);
        }, b.prototype.updateCompletions = function(f, c) {
          if (f && this.base && this.completions) {
            var C = this.editor.getCursorPosition(), p = this.editor.session.getTextRange({
              start: this.base,
              end: C
            });
            if (p == this.completions.filterText) return;
            if (this.completions.setFilter(p), !this.completions.filtered.length) return this.detach();
            if (this.completions.filtered.length == 1 && this.completions.filtered[0].value == p && !this.completions.filtered[0].snippet) return this.detach();
            this.openPopup(this.editor, p, f);
            return;
          }
          if (c && c.matches) {
            var C = this.editor.getSelectionRange().start;
            return this.base = this.editor.session.doc.createAnchor(C.row, C.column), this.base.$insertRight = true, this.completions = new S(c.matches), this.getCompletionProvider().completions = this.completions, this.openPopup(this.editor, "", f);
          }
          var w = this.editor.getSession(), C = this.editor.getCursorPosition(), p = l.getCompletionPrefix(this.editor);
          this.base = w.doc.createAnchor(C.row, C.column - p.length), this.base.$insertRight = true;
          var v = {
            exactMatch: this.exactMatch,
            ignoreCaption: this.ignoreCaption
          };
          this.getCompletionProvider({
            prefix: p,
            pos: C
          }).provideCompletions(this.editor, v, function(k, m, y) {
            var g = m.filtered, d = l.getCompletionPrefix(this.editor);
            if (this.$firstOpenTimer.cancel(), y) {
              if (!g.length) {
                var x = !this.autoShown && this.emptyMessage;
                if (typeof x == "function" && (x = this.emptyMessage(d)), x) {
                  var T = [
                    {
                      caption: x,
                      value: ""
                    }
                  ];
                  this.completions = new S(T), this.openPopup(this.editor, d, f), this.popup.renderer.setStyle("ace_loading", false), this.popup.renderer.setStyle("ace_empty-message", true);
                  return;
                }
                return this.detach();
              }
              if (g.length == 1 && g[0].value == d && !g[0].snippet) return this.detach();
              if (this.autoInsert && !this.autoShown && g.length == 1) return this.insertMatch(g[0]);
            }
            this.completions = !y && this.showLoadingState ? new S(b.completionsForLoading.concat(g), m.filterText) : m, this.openPopup(this.editor, d, f), this.popup.renderer.setStyle("ace_empty-message", false), this.popup.renderer.setStyle("ace_loading", !y);
          }.bind(this)), this.showLoadingState && !this.autoShown && !(this.popup && this.popup.isOpen) && this.$firstOpenTimer.delay(this.stickySelectionDelay / 2);
        }, b.prototype.cancelContextMenu = function() {
          this.editor.$mouseHandler.cancelContextMenu();
        }, b.prototype.updateDocTooltip = function() {
          var f = this.popup, c = this.completions && this.completions.filtered, w = c && (c[f.getHoveredRow()] || c[f.getRow()]), C = null;
          if (!w || !this.editor || !this.popup.isOpen) return this.hideDocTooltip();
          for (var p = this.editor.completers.length, v = 0; v < p; v++) {
            var k = this.editor.completers[v];
            if (k.getDocTooltip && w.completerId === k.id) {
              C = k.getDocTooltip(w);
              break;
            }
          }
          if (!C && typeof w != "string" && (C = w), typeof C == "string" && (C = {
            docText: C
          }), !C || !(C.docHTML || C.docText)) return this.hideDocTooltip();
          this.showDocTooltip(C);
        }, b.prototype.showDocTooltip = function(f) {
          this.tooltipNode || (this.tooltipNode = o.createElement("div"), this.tooltipNode.style.margin = "0", this.tooltipNode.style.pointerEvents = "auto", this.tooltipNode.style.overscrollBehavior = "contain", this.tooltipNode.tabIndex = -1, this.tooltipNode.onblur = this.blurListener.bind(this), this.tooltipNode.onclick = this.onTooltipClick.bind(this), this.tooltipNode.id = "doc-tooltip", this.tooltipNode.setAttribute("role", "tooltip"), this.tooltipNode.addEventListener("wheel", t));
          var c = this.editor.renderer.theme;
          this.tooltipNode.className = "ace_tooltip ace_doc-tooltip " + (c.isDark ? "ace_dark " : "") + (c.cssClass || "");
          var w = this.tooltipNode;
          f.docHTML ? w.innerHTML = f.docHTML : f.docText && (w.textContent = f.docText), w.parentNode || this.popup.container.appendChild(this.tooltipNode);
          var C = this.popup, p = C.container.getBoundingClientRect(), v = 400, k = 300, m = C.renderer.scrollBar.width || 10, y = p.left, g = window.innerWidth - p.right - m, d = C.isTopdown ? window.innerHeight - m - p.bottom : p.top, x = [
            Math.min(g / v, 1),
            Math.min(y / v, 1),
            Math.min(d / k, 1) * 0.9
          ], T = Math.max.apply(Math, x), E = w.style;
          E.display = "block", T == x[0] || x[0] >= 1 ? (E.left = p.right + 1 + "px", E.right = "", E.maxWidth = v * T + "px", E.top = p.top + "px", E.bottom = "", E.maxHeight = Math.min(window.innerHeight - m - p.top, k) + "px") : T == x[1] || x[1] >= 1 ? (E.right = window.innerWidth - p.left + "px", E.left = "", E.maxWidth = v * T + "px", E.top = p.top + "px", E.bottom = "", E.maxHeight = Math.min(window.innerHeight - m - p.top, k) + "px") : T == x[2] && (E.left = p.left + "px", E.right = "", E.maxWidth = Math.min(v, window.innerWidth - p.left) + "px", C.isTopdown ? (E.top = p.bottom + "px", E.bottom = "", E.maxHeight = Math.min(window.innerHeight - m - p.bottom, k) + "px") : (E.top = "", E.bottom = window.innerHeight - p.top + "px", E.maxHeight = Math.min(p.top, k) + "px")), o.$fixPositionBug(w);
        }, b.prototype.hideDocTooltip = function() {
          if (this.tooltipTimer.cancel(), !!this.tooltipNode) {
            var f = this.tooltipNode;
            !this.editor.isFocused() && document.activeElement == f && this.editor.focus(), this.tooltipNode = null, f.parentNode && f.parentNode.removeChild(f);
          }
        }, b.prototype.onTooltipClick = function(f) {
          for (var c = f.target; c && c != this.tooltipNode; ) {
            if (c.nodeName == "A" && c.href) {
              c.rel = "noreferrer", c.target = "_blank";
              break;
            }
            c = c.parentNode;
          }
        }, b.prototype.destroy = function() {
          if (this.detach(), this.popup) {
            this.popup.destroy();
            var f = this.popup.container;
            f && f.parentNode && f.parentNode.removeChild(f);
          }
          this.editor && this.editor.completer == this && (this.editor.off("destroy", s), this.editor.completer = null), this.inlineRenderer = this.popup = this.editor = null;
        }, b.for = function(f) {
          return f.completer instanceof b || (f.completer && (f.completer.destroy(), f.completer = null), n.get("sharedPopups") ? (b.$sharedInstance || (b.$sharedInstance = new b()), f.completer = b.$sharedInstance) : (f.completer = new b(), f.once("destroy", s))), f.completer;
        }, b;
      })();
      h.prototype.commands = {
        Up: function(b) {
          b.completer.goTo("up");
        },
        Down: function(b) {
          b.completer.goTo("down");
        },
        "Ctrl-Up|Ctrl-Home": function(b) {
          b.completer.goTo("start");
        },
        "Ctrl-Down|Ctrl-End": function(b) {
          b.completer.goTo("end");
        },
        Esc: function(b) {
          b.completer.detach();
        },
        Return: function(b) {
          return b.completer.insertMatch();
        },
        "Shift-Return": function(b) {
          b.completer.insertMatch(null, {
            deleteSuffix: true
          });
        },
        Tab: function(b) {
          var f = b.completer.insertMatch();
          if (!f && !b.tabstopManager) b.completer.goTo("down");
          else return f;
        },
        Backspace: function(b) {
          b.execCommand("backspace");
          var f = l.getCompletionPrefix(b);
          !f && b.completer && b.completer.detach();
        },
        PageUp: function(b) {
          b.completer.popup.gotoPageUp();
        },
        PageDown: function(b) {
          b.completer.popup.gotoPageDown();
        }
      }, h.startCommand = {
        name: "startAutocomplete",
        exec: function(b, f) {
          var c = h.for(b);
          c.autoInsert = false, c.autoSelect = true, c.autoShown = false, c.showPopup(b, f), c.cancelContextMenu();
        },
        bindKey: "Ctrl-Space|Ctrl-Shift-Space|Alt-Space"
      };
      var u = (function() {
        function b(f) {
          this.initialPosition = f, this.active = true;
        }
        return b.prototype.insertByIndex = function(f, c, w) {
          return !this.completions || !this.completions.filtered ? false : this.insertMatch(f, this.completions.filtered[c], w);
        }, b.prototype.insertMatch = function(f, c, w) {
          if (!c) return false;
          if (f.startOperation({
            command: {
              name: "insertMatch"
            }
          }), c.completer && c.completer.insertMatch) c.completer.insertMatch(f, c);
          else {
            if (!this.completions) return false;
            var C = this.completions.filterText.length, p = 0;
            if (c.range && c.range.start.row === c.range.end.row && (C -= this.initialPosition.prefix.length, C += this.initialPosition.pos.column - c.range.start.column, p += c.range.end.column - this.initialPosition.pos.column), C || p) {
              var v;
              f.selection.getAllRanges ? v = f.selection.getAllRanges() : v = [
                f.getSelectionRange()
              ];
              for (var k = 0, m; m = v[k]; k++) m.start.column -= C, m.end.column += p, f.session.remove(m);
            }
            c.snippet ? r.insertSnippet(f, c.snippet) : this.$insertString(f, c), c.completer && c.completer.onInsert && typeof c.completer.onInsert == "function" && c.completer.onInsert(f, c), c.command && c.command === "startAutocomplete" && f.execCommand(c.command);
          }
          return f.endOperation(), true;
        }, b.prototype.$insertString = function(f, c) {
          var w = c.value || c;
          f.execCommand("insertstring", w);
        }, b.prototype.gatherCompletions = function(f, c) {
          var w = f.getSession(), C = f.getCursorPosition(), p = l.getCompletionPrefix(f), v = [];
          this.completers = f.completers;
          var k = f.completers.length;
          return f.completers.forEach(function(m, y) {
            m.getCompletions(f, w, C, p, function(g, d) {
              m.hideInlinePreview && (d = d.map(function(x) {
                return Object.assign(x, {
                  hideInlinePreview: m.hideInlinePreview
                });
              })), !g && d && (v = v.concat(d)), c(null, {
                prefix: l.getCompletionPrefix(f),
                matches: v,
                finished: --k === 0
              });
            });
          }), true;
        }, b.prototype.provideCompletions = function(f, c, w) {
          var C = function(m) {
            var y = m.prefix, g = m.matches;
            this.completions = new S(g), c.exactMatch && (this.completions.exactMatch = true), c.ignoreCaption && (this.completions.ignoreCaption = true), this.completions.setFilter(y), (m.finished || this.completions.filtered.length) && w(null, this.completions, m.finished);
          }.bind(this), p = true, v = null;
          if (this.gatherCompletions(f, function(m, y) {
            if (this.active) {
              m && (w(m, [], true), this.detach());
              var g = y.prefix;
              if (g.indexOf(y.prefix) === 0) {
                if (p) {
                  v = y;
                  return;
                }
                C(y);
              }
            }
          }.bind(this)), p = false, v) {
            var k = v;
            v = null, C(k);
          }
        }, b.prototype.detach = function() {
          this.active = false, this.completers && this.completers.forEach(function(f) {
            typeof f.cancel == "function" && f.cancel();
          });
        }, b;
      })(), S = (function() {
        function b(f, c) {
          this.all = f, this.filtered = f, this.filterText = c || "", this.exactMatch = false, this.ignoreCaption = false;
        }
        return b.prototype.setFilter = function(f) {
          if (f.length > this.filterText && f.lastIndexOf(this.filterText, 0) === 0) var c = this.filtered;
          else var c = this.all;
          this.filterText = f, c = this.filterCompletions(c, this.filterText), c = c.sort(function(C, p) {
            return p.exactMatch - C.exactMatch || p.$score - C.$score || (C.caption || C.value).localeCompare(p.caption || p.value);
          });
          var w = null;
          c = c.filter(function(C) {
            var p = C.snippet || C.caption || C.value;
            return p === w ? false : (w = p, true);
          }), this.filtered = c;
        }, b.prototype.filterCompletions = function(f, c) {
          var w = [], C = c.toUpperCase(), p = c.toLowerCase();
          e: for (var v = 0, k; k = f[v]; v++) {
            if (k.skipFilter) {
              k.$score = k.score, w.push(k);
              continue;
            }
            var m = !this.ignoreCaption && k.caption || k.value || k.snippet;
            if (m) {
              var y = -1, g = 0, d = 0, x, T;
              if (this.exactMatch) {
                if (c !== m.substr(0, c.length)) continue e;
              } else {
                var E = m.toLowerCase().indexOf(p);
                if (E > -1) d = E;
                else for (var R = 0; R < c.length; R++) {
                  var I = m.indexOf(p[R], y + 1), O = m.indexOf(C[R], y + 1);
                  if (x = I >= 0 && (O < 0 || I < O) ? I : O, x < 0) continue e;
                  T = x - y - 1, T > 0 && (y === -1 && (d += 10), d += T, g = g | 1 << R), y = x;
                }
              }
              k.matchMask = g, k.exactMatch = d ? 0 : 1, k.$score = (k.score || 0) - d, w.push(k);
            }
          }
          return w;
        }, b;
      })();
      _.Autocomplete = h, _.CompletionProvider = u, _.FilteredList = S;
    }), ace.define("ace/marker_group", [
      "require",
      "exports",
      "module"
    ], function(A, _, N) {
      var L = (function() {
        function M($, a) {
          a && (this.markerType = a.markerType), this.markers = [], this.session = $, $.addDynamicMarker(this);
        }
        return M.prototype.getMarkerAtPosition = function($) {
          return this.markers.find(function(a) {
            return a.range.contains($.row, $.column);
          });
        }, M.prototype.markersComparator = function($, a) {
          return $.range.start.row - a.range.start.row;
        }, M.prototype.setMarkers = function($) {
          this.markers = $.sort(this.markersComparator).slice(0, this.MAX_MARKERS), this.session._signal("changeBackMarker");
        }, M.prototype.update = function($, a, l, i) {
          if (!(!this.markers || !this.markers.length)) for (var o = i.firstRow, r = i.lastRow, n, e = 0, t = 0, s = 0; s < this.markers.length; s++) {
            var h = this.markers[s];
            if (!(h.range.end.row < o) && !(h.range.start.row > r) && (h.range.start.row === t ? e++ : (t = h.range.start.row, e = 0), !(e > 200))) {
              var u = h.range.clipRows(o, r);
              if (!(u.start.row === u.end.row && u.start.column === u.end.column)) {
                var S = u.toScreenRange(l);
                if (S.isEmpty()) {
                  n = l.getNextFoldLine(u.end.row, n), n && n.end.row > u.end.row && (o = n.end.row);
                  continue;
                }
                this.markerType === "fullLine" ? a.drawFullLineMarker($, S, h.className, i) : S.isMultiLine() ? this.markerType === "line" ? a.drawMultiLineMarker($, S, h.className, i) : a.drawTextMarker($, S, h.className, i) : a.drawSingleLineMarker($, S, h.className + " ace_br15", i);
              }
            }
          }
        }, M;
      })();
      L.prototype.MAX_MARKERS = 1e4, _.MarkerGroup = L;
    }), ace.define("ace/autocomplete/text_completer", [
      "require",
      "exports",
      "module",
      "ace/range"
    ], function(A, _, N) {
      var L = A("../range").Range, M = /[^a-zA-Z_0-9\$\-\u00C0-\u1FFF\u2C00-\uD7FF\w]+/;
      function $(l, i) {
        var o = l.getTextRange(L.fromPoints({
          row: 0,
          column: 0
        }, i));
        return o.split(M).length - 1;
      }
      function a(l, i) {
        var o = $(l, i), r = l.getValue().split(M), n = /* @__PURE__ */ Object.create(null), e = r[o];
        return r.forEach(function(t, s) {
          if (!(!t || t === e)) {
            var h = Math.abs(o - s), u = r.length - h;
            n[t] ? n[t] = Math.max(u, n[t]) : n[t] = u;
          }
        }), n;
      }
      _.id = "textCompleter", _.getCompletions = function(l, i, o, r, n) {
        var e = a(i, o), t = Object.keys(e);
        n(null, t.map(function(s) {
          return {
            caption: s,
            value: s,
            score: e[s],
            meta: "local"
          };
        }));
      };
    }), ace.define("ace/ext/language_tools", [
      "require",
      "exports",
      "module",
      "ace/snippets",
      "ace/autocomplete",
      "ace/config",
      "ace/lib/lang",
      "ace/autocomplete/util",
      "ace/marker_group",
      "ace/autocomplete/text_completer",
      "ace/editor",
      "ace/config"
    ], function(A, _, N) {
      var L = A("../snippets").snippetManager, M = A("../autocomplete").Autocomplete, $ = A("../config"), a = A("../lib/lang"), l = A("../autocomplete/util"), i = A("../marker_group").MarkerGroup, o = A("../autocomplete/text_completer"), r = {
        getCompletions: function(p, v, k, m, y) {
          if (v.$mode.completer) return v.$mode.completer.getCompletions(p, v, k, m, y);
          var g = p.session.getState(k.row), d = v.$mode.getCompletions(g, v, k, m);
          d = d.map(function(x) {
            return x.completerId = r.id, x;
          }), y(null, d);
        },
        id: "keywordCompleter"
      }, n = function(p) {
        var v = {};
        return p.replace(/\${(\d+)(:(.*?))?}/g, function(k, m, y, g) {
          return v[m] = g || "";
        }).replace(/\$(\d+?)/g, function(k, m) {
          return v[m];
        });
      }, e = {
        getCompletions: function(p, v, k, m, y) {
          var g = [], d = v.getTokenAt(k.row, k.column);
          d && d.type.match(/(tag-name|tag-open|tag-whitespace|attribute-name|attribute-value)\.xml$/) ? g.push("html-tag") : g = L.getActiveScopes(p);
          var x = L.snippetMap, T = [];
          g.forEach(function(E) {
            for (var R = x[E] || [], I = R.length; I--; ) {
              var O = R[I], z = O.name || O.tabTrigger;
              z && T.push({
                caption: z,
                snippet: O.content,
                meta: O.tabTrigger && !O.name ? O.tabTrigger + "\u21E5 " : "snippet",
                completerId: e.id
              });
            }
          }, this), y(null, T);
        },
        getDocTooltip: function(p) {
          p.snippet && !p.docHTML && (p.docHTML = [
            "<b>",
            a.escapeHTML(p.caption),
            "</b>",
            "<hr></hr>",
            a.escapeHTML(n(p.snippet))
          ].join(""));
        },
        id: "snippetCompleter"
      }, t = [
        e,
        o,
        r
      ];
      _.setCompleters = function(p) {
        t.length = 0, p && t.push.apply(t, p);
      }, _.addCompleter = function(p) {
        t.push(p);
      }, _.textCompleter = o, _.keyWordCompleter = r, _.snippetCompleter = e;
      var s = {
        name: "expandSnippet",
        exec: function(p) {
          return L.expandWithTab(p);
        },
        bindKey: "Tab"
      }, h = function(p, v) {
        u(v.session.$mode);
      }, u = function(p) {
        typeof p == "string" && (p = $.$modes[p]), p && (L.files || (L.files = {}), S(p.$id, p.snippetFileId), p.modes && p.modes.forEach(u));
      }, S = function(p, v) {
        !v || !p || L.files[p] || (L.files[p] = {}, $.loadModule(v, function(k) {
          k && (L.files[p] = k, !k.snippets && k.snippetText && (k.snippets = L.parseSnippetFile(k.snippetText)), L.register(k.snippets || [], k.scope), k.includeScopes && (L.snippetMap[k.scope].includeScopes = k.includeScopes, k.includeScopes.forEach(function(m) {
            u("ace/mode/" + m);
          })));
        }));
      }, b = function(p) {
        var v = p.editor, k = v.completer && v.completer.activated;
        if (p.command.name === "backspace") k && !l.getCompletionPrefix(v) && v.completer.detach();
        else if (p.command.name === "insertstring" && !k) {
          f = p;
          var m = p.editor.$liveAutocompletionDelay;
          m ? c.delay(m) : w(p);
        }
      }, f, c = a.delayedCall(function() {
        w(f);
      }, 0), w = function(p) {
        var v = p.editor, k = l.getCompletionPrefix(v), m = p.args, y = l.triggerAutocomplete(v, m);
        if (k && k.length >= v.$liveAutocompletionThreshold || y) {
          var g = M.for(v);
          g.autoShown = true, g.showPopup(v);
        }
      }, C = A("../editor").Editor;
      A("../config").defineOptions(C.prototype, "editor", {
        enableBasicAutocompletion: {
          set: function(p) {
            p ? (M.for(this), this.completers || (this.completers = Array.isArray(p) ? p : t), this.commands.addCommand(M.startCommand)) : this.commands.removeCommand(M.startCommand);
          },
          value: false
        },
        enableLiveAutocompletion: {
          set: function(p) {
            p ? (this.completers || (this.completers = Array.isArray(p) ? p : t), this.commands.on("afterExec", b)) : this.commands.off("afterExec", b);
          },
          value: false
        },
        liveAutocompletionDelay: {
          initialValue: 0
        },
        liveAutocompletionThreshold: {
          initialValue: 0
        },
        enableSnippets: {
          set: function(p) {
            p ? (this.commands.addCommand(s), this.on("changeMode", h), h(null, this)) : (this.commands.removeCommand(s), this.off("changeMode", h));
          },
          value: false
        }
      }), _.MarkerGroup = i;
    }), (function() {
      ace.require([
        "ace/ext/language_tools"
      ], function(A) {
        j && (j.exports = A);
      });
    })();
  })(ci);
  let hi, ui;
  hi = (j) => {
    const Q = xe.useRef(null);
    return xe.useEffect(() => {
      let A = null, _ = null, N = null;
      const L = (M) => {
        M.key === "f" && M.ctrlKey && (_ = setInterval(() => {
          if (!A) return;
          const $ = A.parentNode;
          if (!$) return;
          const a = $.querySelector(".ace_search_field");
          a && _ && (clearInterval(_), _ = null), (a == null ? void 0 : a.placeholder) === "Search for" && (a.placeholder = ue.I18n.t("ace_Search for"));
          const l = $.querySelector('.ace_searchbtn[action="findAll"]');
          (l == null ? void 0 : l.innerHTML) === "All" && (l.innerHTML = ue.I18n.t("ace_All"));
          const i = $.querySelector('.ace_button[action="toggleRegexpMode"]');
          (i == null ? void 0 : i.title) === "RegExp Search" && (i.title = ue.I18n.t("ace_RegExp Search"));
          const o = $.querySelector('.ace_button[action="toggleCaseSensitive"]');
          (o == null ? void 0 : o.title) === "CaseSensitive Search" && (o.title = ue.I18n.t("ace_CaseSensitive Search"));
          const r = $.querySelector('.ace_button[action="toggleWholeWords"]');
          (r == null ? void 0 : r.title) === "Whole Word Search" && (r.title = ue.I18n.t("ace_Whole Word Search"));
          const n = $.querySelector('.ace_button[action="searchInSelection"]');
          (n == null ? void 0 : n.title) === "Search In Selection" && (n.title = ue.I18n.t("ace_Search In Selection"));
          const e = $.querySelector('.ace_button[action="toggleReplace"]');
          (e == null ? void 0 : e.title) === "Toggle Replace mode" && (e.title = ue.I18n.t("ace_Toggle Replace mode")), A == null ? void 0 : A.removeEventListener("keydown", L), A = null;
        }, 100));
      };
      return ue.I18n.getLanguage() !== "en" && (N = setTimeout(() => {
        A = window.document.querySelector(".ace_text-input"), A == null ? void 0 : A.addEventListener("keydown", L);
      }, 200)), () => {
        N && clearTimeout(N), _ && clearInterval(_), A == null ? void 0 : A.removeEventListener("keydown", L), A = null;
      };
    }, []), se.jsx("div", {
      style: {
        width: j.width || "100%",
        height: j.height || "100%",
        border: j.error ? "1px solid #800" : "1px solid transparent"
      },
      ref: Q,
      children: se.jsx(ri, {
        mode: "ejs",
        theme: j.themeType === "dark" ? "clouds_midnight" : "chrome",
        width: "100%",
        height: "100%",
        value: j.value,
        onChange: (A) => {
          var _a;
          return (_a = j.onChange) == null ? void 0 : _a.call(j, A);
        },
        readOnly: j.readOnly || false,
        focus: j.focus,
        highlightActiveLine: true,
        enableBasicAutocompletion: true,
        enableLiveAutocompletion: true,
        enableSnippets: true,
        setOptions: {
          useWorker: false
        }
      })
    });
  };
  ui = (j) => {
    const [Q, A] = xe.useState(j.value);
    return j.open ? se.jsx(Qn, {
      keyboardDisabled: true,
      title: ue.I18n.t("rssfeed_widget_title"),
      open: true,
      actionTitle: ue.I18n.t("rssfeed_widget_save"),
      action: () => j.onChange(Q),
      onClose: j.onClose,
      minWidth: 800,
      actionDisabled: Q === j.value,
      children: se.jsx(hi, {
        value: Q,
        focus: true,
        height: 400,
        onChange: (_) => A(_),
        themeType: j.themeType
      })
    }) : null;
  };
  Mi = ({ field: j, data: Q, onDataChange: A, props: _ }) => {
    const L = j.name || "", [M, $] = xe.useState(false);
    return se.jsxs(se.Fragment, {
      children: [
        se.jsx(Ae.TextField, {
          sx: {
            ".MuiInputBase-input": {
              fontSize: "80%"
            }
          },
          size: "small",
          variant: "standard",
          value: Q && Q[L],
          fullWidth: true,
          error: false,
          helperText: ue.I18n.t(""),
          onChange: (a) => {
            A({
              [L]: a.target.value
            });
          },
          InputProps: {
            endAdornment: se.jsx(Ae.Button, {
              size: "small",
              onClick: () => $(true),
              children: se.jsx(Mt.Edit, {})
            })
          },
          rows: 2
        }),
        M ? se.jsx(ui, {
          open: true,
          value: Q[L],
          onChange: (a) => A({
            [L]: a
          }),
          onClose: () => $(false),
          themeType: _.context.theme.name
        }) : null
      ]
    });
  };
  function di() {
    return window;
  }
  function fi(j, Q) {
    const A = (j || "").trim();
    return A ? `
(() => {
    const __cleanupKey = ${JSON.stringify(Q)};
    const __cleanupStore = (window.__visJsonTemplateCleanup = window.__visJsonTemplateCleanup || {});

    window.__visJsonTemplateRegisterCleanup = function (fn) {
        if (typeof fn === 'function') {
            __cleanupStore[__cleanupKey] = fn;
        } else {
            delete __cleanupStore[__cleanupKey];
        }
    };

    try {
${pi(A, 8)}
    } finally {
        try {
            delete window.__visJsonTemplateRegisterCleanup;
        } catch (e) {
            window.__visJsonTemplateRegisterCleanup = undefined;
        }
    }
})();
`.trim() : "";
  }
  function pi(j, Q) {
    const A = " ".repeat(Q);
    return String(j).split(`
`).map((_) => `${A}${_}`).join(`
`);
  }
  function gi(j) {
    if (j.hasAttribute("src")) return false;
    const A = (j.getAttribute("type") || "").trim().toLowerCase();
    return !A || A === "text/javascript" || A === "application/javascript";
  }
  function Lt(j, Q) {
    if (!j) return j;
    if (j.nodeType === Node.ELEMENT_NODE && j instanceof HTMLScriptElement) {
      const _ = document.createElement("script");
      for (const N of j.attributes) _.setAttribute(N.name, N.value);
      return j.hasAttribute("src") || (gi(j) ? _.textContent = fi(j.textContent || "", Q) : _.textContent = j.textContent || ""), _;
    }
    const A = j.cloneNode(false);
    for (const _ of j.childNodes) A.appendChild(Lt(_, Q));
    return A;
  }
  function mi(j, Q) {
    const A = document.createElement("template");
    A.innerHTML = j;
    const _ = document.createDocumentFragment();
    for (const N of Array.from(A.content.childNodes)) _.appendChild(Lt(N, Q));
    return _;
  }
  function _t(j) {
    const A = di().__visJsonTemplateCleanup;
    if (!A || !j) return;
    const _ = A[j];
    if (typeof _ == "function") try {
      _();
    } catch (N) {
      console.error("InnerHTML cleanup failed:", N);
    }
    delete A[j];
  }
  Ti = function({ html: j, allowRerender: Q, ...A }) {
    const _ = xe.useRef(null), N = xe.useRef(`vis-json-template-${Math.random().toString(36).slice(2)}`), L = xe.useRef(0);
    return xe.useEffect(() => {
      if (j == null) throw new Error("html prop can't be null");
      const M = _.current;
      if (!M) return;
      L.current += 1;
      const $ = `${N.current}:${L.current}`, a = M.dataset.cleanupKey;
      a && _t(a), M.innerHTML = "", M.dataset.cleanupKey = $;
      const l = mi(j, $);
      return M.appendChild(l), () => {
        const i = M.dataset.cleanupKey;
        i && _t(i), M.innerHTML = "", delete M.dataset.cleanupKey;
      };
    }, [
      j,
      Q
    ]), se.jsx("div", {
      ...A,
      ref: _
    });
  };
  var Et = {};
  const vi = {}, yi = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: vi
  }, Symbol.toStringTag, {
    value: "Module"
  })), kt = jn(yi);
  var Rt = {};
  (function(j) {
    var Q = /[|\\{}()[\]^$+*?.]/g, A = Object.prototype.hasOwnProperty, _ = function(l, i) {
      return A.apply(l, [
        i
      ]);
    };
    j.escapeRegExpChars = function(l) {
      return l ? String(l).replace(Q, "\\$&") : "";
    };
    var N = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&#34;",
      "'": "&#39;"
    }, L = /[&<>'"]/g;
    function M(l) {
      return N[l] || l;
    }
    var $ = `var _ENCODE_HTML_RULES = {
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
    j.escapeXML = function(l) {
      return l == null ? "" : String(l).replace(L, M);
    };
    function a() {
      return Function.prototype.toString.call(this) + `;
` + $;
    }
    try {
      typeof Object.defineProperty == "function" ? Object.defineProperty(j.escapeXML, "toString", {
        value: a
      }) : j.escapeXML.toString = a;
    } catch {
      console.warn("Unable to set escapeXML.toString (is the Function prototype frozen?)");
    }
    j.shallowCopy = function(l, i) {
      if (i = i || {}, l != null) for (var o in i) _(i, o) && (o === "__proto__" || o === "constructor" || (l[o] = i[o]));
      return l;
    }, j.shallowCopyFromList = function(l, i, o) {
      if (o = o || [], i = i || {}, l != null) for (var r = 0; r < o.length; r++) {
        var n = o[r];
        if (typeof i[n] < "u") {
          if (!_(i, n) || n === "__proto__" || n === "constructor") continue;
          l[n] = i[n];
        }
      }
      return l;
    }, j.cache = {
      _data: {},
      set: function(l, i) {
        this._data[l] = i;
      },
      get: function(l) {
        return this._data[l];
      },
      remove: function(l) {
        delete this._data[l];
      },
      reset: function() {
        this._data = {};
      }
    }, j.hyphenToCamel = function(l) {
      return l.replace(/-[a-z]/g, function(i) {
        return i[1].toUpperCase();
      });
    }, j.createNullProtoObjWherePossible = (function() {
      return typeof Object.create == "function" ? function() {
        return /* @__PURE__ */ Object.create(null);
      } : {
        __proto__: null
      } instanceof Object ? function() {
        return {};
      } : function() {
        return {
          __proto__: null
        };
      };
    })(), j.hasOwnOnlyObject = function(l) {
      var i = j.createNullProtoObjWherePossible();
      for (var o in l) _(l, o) && (i[o] = l[o]);
      return i;
    };
  })(Rt);
  const bi = "3.1.10", wi = {
    version: bi
  };
  (function(j) {
    var Q = kt, A = kt, _ = Rt, N = false, L = wi.version, M = "<", $ = ">", a = "%", l = "locals", i = "ejs", o = "(<%%|%%>|<%=|<%-|<%_|<%#|<%|%>|-%>|_%>)", r = [
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
    ], n = r.concat("cache"), e = /^\uFEFF/, t = /^[a-zA-Z_$][0-9a-zA-Z_$]*$/;
    j.cache = _.cache, j.fileLoader = Q.readFileSync, j.localsName = l, j.promiseImpl = new Function("return this;")().Promise, j.resolveInclude = function(p, v, k) {
      var m = A.dirname, y = A.extname, g = A.resolve, d = g(k ? v : m(v), p), x = y(p);
      return x || (d += ".ejs"), d;
    };
    function s(p, v) {
      var k;
      if (v.some(function(m) {
        return k = j.resolveInclude(p, m, true), Q.existsSync(k);
      })) return k;
    }
    function h(p, v) {
      var k, m, y = v.views, g = /^[A-Za-z]+:\\|^\//.exec(p);
      if (g && g.length) p = p.replace(/^\/*/, ""), Array.isArray(v.root) ? k = s(p, v.root) : k = j.resolveInclude(p, v.root || "/", true);
      else if (v.filename && (m = j.resolveInclude(p, v.filename), Q.existsSync(m) && (k = m)), !k && Array.isArray(y) && (k = s(p, y)), !k && typeof v.includer != "function") throw new Error('Could not find the include file "' + v.escapeFunction(p) + '"');
      return k;
    }
    function u(p, v) {
      var k, m = p.filename, y = arguments.length > 1;
      if (p.cache) {
        if (!m) throw new Error("cache option requires a filename");
        if (k = j.cache.get(m), k) return k;
        y || (v = b(m).toString().replace(e, ""));
      } else if (!y) {
        if (!m) throw new Error("Internal EJS error: no file name or template provided");
        v = b(m).toString().replace(e, "");
      }
      return k = j.compile(v, p), p.cache && j.cache.set(m, k), k;
    }
    function S(p, v, k) {
      var m;
      if (k) {
        try {
          m = u(p)(v);
        } catch (y) {
          return k(y);
        }
        k(null, m);
      } else {
        if (typeof j.promiseImpl == "function") return new j.promiseImpl(function(y, g) {
          try {
            m = u(p)(v), y(m);
          } catch (d) {
            g(d);
          }
        });
        throw new Error("Please provide a callback function");
      }
    }
    function b(p) {
      return j.fileLoader(p);
    }
    function f(p, v) {
      var k = _.shallowCopy(_.createNullProtoObjWherePossible(), v);
      if (k.filename = h(p, k), typeof v.includer == "function") {
        var m = v.includer(p, k.filename);
        if (m && (m.filename && (k.filename = m.filename), m.template)) return u(k, m.template);
      }
      return u(k);
    }
    function c(p, v, k, m, y) {
      var g = v.split(`
`), d = Math.max(m - 3, 0), x = Math.min(g.length, m + 3), T = y(k), E = g.slice(d, x).map(function(R, I) {
        var O = I + d + 1;
        return (O == m ? " >> " : "    ") + O + "| " + R;
      }).join(`
`);
      throw p.path = T, p.message = (T || "ejs") + ":" + m + `
` + E + `

` + p.message, p;
    }
    function w(p) {
      return p.replace(/;(\s*$)/, "$1");
    }
    j.compile = function(v, k) {
      var m;
      return k && k.scope && (N || (console.warn("`scope` option is deprecated and will be removed in EJS 3"), N = true), k.context || (k.context = k.scope), delete k.scope), m = new C(v, k), m.compile();
    }, j.render = function(p, v, k) {
      var m = v || _.createNullProtoObjWherePossible(), y = k || _.createNullProtoObjWherePossible();
      return arguments.length == 2 && _.shallowCopyFromList(y, m, r), u(y, p)(m);
    }, j.renderFile = function() {
      var p = Array.prototype.slice.call(arguments), v = p.shift(), k, m = {
        filename: v
      }, y, g;
      return typeof arguments[arguments.length - 1] == "function" && (k = p.pop()), p.length ? (y = p.shift(), p.length ? _.shallowCopy(m, p.pop()) : (y.settings && (y.settings.views && (m.views = y.settings.views), y.settings["view cache"] && (m.cache = true), g = y.settings["view options"], g && _.shallowCopy(m, g)), _.shallowCopyFromList(m, y, n)), m.filename = v) : y = _.createNullProtoObjWherePossible(), S(m, y, k);
    }, j.Template = C, j.clearCache = function() {
      j.cache.reset();
    };
    function C(p, v) {
      var k = _.hasOwnOnlyObject(v), m = _.createNullProtoObjWherePossible();
      this.templateText = p, this.mode = null, this.truncate = false, this.currentLine = 1, this.source = "", m.client = k.client || false, m.escapeFunction = k.escape || k.escapeFunction || _.escapeXML, m.compileDebug = k.compileDebug !== false, m.debug = !!k.debug, m.filename = k.filename, m.openDelimiter = k.openDelimiter || j.openDelimiter || M, m.closeDelimiter = k.closeDelimiter || j.closeDelimiter || $, m.delimiter = k.delimiter || j.delimiter || a, m.strict = k.strict || false, m.context = k.context, m.cache = k.cache || false, m.rmWhitespace = k.rmWhitespace, m.root = k.root, m.includer = k.includer, m.outputFunctionName = k.outputFunctionName, m.localsName = k.localsName || j.localsName || l, m.views = k.views, m.async = k.async, m.destructuredLocals = k.destructuredLocals, m.legacyInclude = typeof k.legacyInclude < "u" ? !!k.legacyInclude : true, m.strict ? m._with = false : m._with = typeof k._with < "u" ? k._with : true, this.opts = m, this.regex = this.createRegex();
    }
    C.modes = {
      EVAL: "eval",
      ESCAPED: "escaped",
      RAW: "raw",
      COMMENT: "comment",
      LITERAL: "literal"
    }, C.prototype = {
      createRegex: function() {
        var p = o, v = _.escapeRegExpChars(this.opts.delimiter), k = _.escapeRegExpChars(this.opts.openDelimiter), m = _.escapeRegExpChars(this.opts.closeDelimiter);
        return p = p.replace(/%/g, v).replace(/</g, k).replace(/>/g, m), new RegExp(p);
      },
      compile: function() {
        var p, v, k = this.opts, m = "", y = "", g = k.escapeFunction, d, x = k.filename ? JSON.stringify(k.filename) : "undefined";
        if (!this.source) {
          if (this.generateSource(), m += `  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
`, k.outputFunctionName) {
            if (!t.test(k.outputFunctionName)) throw new Error("outputFunctionName is not a valid JS identifier.");
            m += "  var " + k.outputFunctionName + ` = __append;
`;
          }
          if (k.localsName && !t.test(k.localsName)) throw new Error("localsName is not a valid JS identifier.");
          if (k.destructuredLocals && k.destructuredLocals.length) {
            for (var T = "  var __locals = (" + k.localsName + ` || {}),
`, E = 0; E < k.destructuredLocals.length; E++) {
              var R = k.destructuredLocals[E];
              if (!t.test(R)) throw new Error("destructuredLocals[" + E + "] is not a valid JS identifier.");
              E > 0 && (T += `,
  `), T += R + " = __locals." + R;
            }
            m += T + `;
`;
          }
          k._with !== false && (m += "  with (" + k.localsName + ` || {}) {
`, y += `  }
`), y += `  return __output;
`, this.source = m + this.source + y;
        }
        k.compileDebug ? p = `var __line = 1
  , __lines = ` + JSON.stringify(this.templateText) + `
  , __filename = ` + x + `;
try {
` + this.source + `} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}
` : p = this.source, k.client && (p = "escapeFn = escapeFn || " + g.toString() + `;
` + p, k.compileDebug && (p = "rethrow = rethrow || " + c.toString() + `;
` + p)), k.strict && (p = `"use strict";
` + p), k.debug && console.log(p), k.compileDebug && k.filename && (p = p + `
//# sourceURL=` + x + `
`);
        try {
          if (k.async) try {
            d = new Function("return (async function(){}).constructor;")();
          } catch (F) {
            throw F instanceof SyntaxError ? new Error("This environment does not support async/await") : F;
          }
          else d = Function;
          v = new d(k.localsName + ", escapeFn, include, rethrow", p);
        } catch (F) {
          throw F instanceof SyntaxError && (k.filename && (F.message += " in " + k.filename), F.message += ` while compiling ejs

`, F.message += `If the above error is not helpful, you may want to try EJS-Lint:
`, F.message += "https://github.com/RyanZim/EJS-Lint", k.async || (F.message += `
`, F.message += "Or, if you meant to create an async function, pass `async: true` as an option.")), F;
        }
        var I = k.client ? v : function(B) {
          var W = function(H, U) {
            var V = _.shallowCopy(_.createNullProtoObjWherePossible(), B);
            return U && (V = _.shallowCopy(V, U)), f(H, k)(V);
          };
          return v.apply(k.context, [
            B || _.createNullProtoObjWherePossible(),
            g,
            W,
            c
          ]);
        };
        if (k.filename && typeof Object.defineProperty == "function") {
          var O = k.filename, z = A.basename(O, A.extname(O));
          try {
            Object.defineProperty(I, "name", {
              value: z,
              writable: false,
              enumerable: false,
              configurable: true
            });
          } catch {
          }
        }
        return I;
      },
      generateSource: function() {
        var p = this.opts;
        p.rmWhitespace && (this.templateText = this.templateText.replace(/[\r\n]+/g, `
`).replace(/^\s+|\s+$/gm, "")), this.templateText = this.templateText.replace(/[ \t]*<%_/gm, "<%_").replace(/_%>[ \t]*/gm, "_%>");
        var v = this, k = this.parseTemplateText(), m = this.opts.delimiter, y = this.opts.openDelimiter, g = this.opts.closeDelimiter;
        k && k.length && k.forEach(function(d, x) {
          var T;
          if (d.indexOf(y + m) === 0 && d.indexOf(y + m + m) !== 0 && (T = k[x + 2], !(T == m + g || T == "-" + m + g || T == "_" + m + g))) throw new Error('Could not find matching close tag for "' + d + '".');
          v.scanLine(d);
        });
      },
      parseTemplateText: function() {
        for (var p = this.templateText, v = this.regex, k = v.exec(p), m = [], y; k; ) y = k.index, y !== 0 && (m.push(p.substring(0, y)), p = p.slice(y)), m.push(k[0]), p = p.slice(k[0].length), k = v.exec(p);
        return p && m.push(p), m;
      },
      _addOutput: function(p) {
        if (this.truncate && (p = p.replace(/^(?:\r\n|\r|\n)/, ""), this.truncate = false), !p) return p;
        p = p.replace(/\\/g, "\\\\"), p = p.replace(/\n/g, "\\n"), p = p.replace(/\r/g, "\\r"), p = p.replace(/"/g, '\\"'), this.source += '    ; __append("' + p + `")
`;
      },
      scanLine: function(p) {
        var v = this, k = this.opts.delimiter, m = this.opts.openDelimiter, y = this.opts.closeDelimiter, g = 0;
        switch (g = p.split(`
`).length - 1, p) {
          case m + k:
          case m + k + "_":
            this.mode = C.modes.EVAL;
            break;
          case m + k + "=":
            this.mode = C.modes.ESCAPED;
            break;
          case m + k + "-":
            this.mode = C.modes.RAW;
            break;
          case m + k + "#":
            this.mode = C.modes.COMMENT;
            break;
          case m + k + k:
            this.mode = C.modes.LITERAL, this.source += '    ; __append("' + p.replace(m + k + k, m + k) + `")
`;
            break;
          case k + k + y:
            this.mode = C.modes.LITERAL, this.source += '    ; __append("' + p.replace(k + k + y, k + y) + `")
`;
            break;
          case k + y:
          case "-" + k + y:
          case "_" + k + y:
            this.mode == C.modes.LITERAL && this._addOutput(p), this.mode = null, this.truncate = p.indexOf("-") === 0 || p.indexOf("_") === 0;
            break;
          default:
            if (this.mode) {
              switch (this.mode) {
                case C.modes.EVAL:
                case C.modes.ESCAPED:
                case C.modes.RAW:
                  p.lastIndexOf("//") > p.lastIndexOf(`
`) && (p += `
`);
              }
              switch (this.mode) {
                case C.modes.EVAL:
                  this.source += "    ; " + p + `
`;
                  break;
                case C.modes.ESCAPED:
                  this.source += "    ; __append(escapeFn(" + w(p) + `))
`;
                  break;
                case C.modes.RAW:
                  this.source += "    ; __append(" + w(p) + `)
`;
                  break;
                case C.modes.COMMENT:
                  break;
                case C.modes.LITERAL:
                  this._addOutput(p);
                  break;
              }
            } else this._addOutput(p);
        }
        v.opts.compileDebug && g && (this.currentLine += g, this.source += "    ; __line = " + this.currentLine + `
`);
      }
    }, j.escapeXML = _.escapeXML, j.__express = j.renderFile, j.VERSION = L, j.name = i, typeof window < "u" && (window.ejs = j);
  })(Et);
  Li = Un(Et);
});
export {
  Ti as I,
  Mi as V,
  __tla,
  Li as e
};
