import { v as i, __tla as __tla_0 } from "./vis2rssfeedWidgets__loadShare__react__loadShare__-DZcZP6XT.js";
let c;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  var p = {
    exports: {}
  }, _ = {};
  var l = i, a = /* @__PURE__ */ Symbol.for("react.element"), d = /* @__PURE__ */ Symbol.for("react.fragment"), m = Object.prototype.hasOwnProperty, v = l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, y = {
    key: true,
    ref: true,
    __self: true,
    __source: true
  };
  function u(t, r, n) {
    var e, o = {}, s = null, f = null;
    n !== void 0 && (s = "" + n), r.key !== void 0 && (s = "" + r.key), r.ref !== void 0 && (f = r.ref);
    for (e in r) m.call(r, e) && !y.hasOwnProperty(e) && (o[e] = r[e]);
    if (t && t.defaultProps) for (e in r = t.defaultProps, r) o[e] === void 0 && (o[e] = r[e]);
    return {
      $$typeof: a,
      type: t,
      key: s,
      ref: f,
      props: o,
      _owner: v.current
    };
  }
  _.Fragment = d;
  _.jsx = u;
  _.jsxs = u;
  p.exports = _;
  c = p.exports;
});
export {
  __tla,
  c as j
};
