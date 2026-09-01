import { a as i } from "./_commonjsHelpers-DsqdWQfm.js";
import { v as _, a as c, __tla as __tla_0 } from "./vis2rssfeedWidgets__mf_v__runtimeInit__mf_v__-CIJsaS2U.js";
let m, h, n;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  function f(e, a) {
    for (var o = 0; o < a.length; o++) {
      const t = a[o];
      if (typeof t != "string" && !Array.isArray(t)) {
        for (const r in t) if (r !== "default" && !(r in e)) {
          const s = Object.getOwnPropertyDescriptor(t, r);
          s && Object.defineProperty(e, r, s.get ? s : {
            enumerable: true,
            get: () => t[r]
          });
        }
      }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }));
  }
  const { loadShare: d } = c, { initPromise: l } = _, u = l.then((e) => d("react", {
    customShareInfo: {
      shareConfig: {
        singleton: true,
        strictVersion: false,
        requiredVersion: "*"
      }
    }
  })), g = await u.then((e) => e());
  n = g;
  m = i(n);
  h = f({
    __proto__: null,
    default: m
  }, [
    n
  ]);
});
export {
  m as R,
  __tla,
  h as a,
  n as v
};
