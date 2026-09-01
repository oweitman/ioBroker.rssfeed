import { v as s, __tla as __tla_0 } from "./vis2rssfeedWidgets__loadShare__react__loadShare__-DZcZP6XT.js";
import { T as n, t as r, I as a, H as o, __tla as __tla_1 } from "./defaultTheme-CnUWaJB8.js";
let h, m, i;
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
  })()
]).then(async () => {
  function u(e) {
    return Object.keys(e).length === 0;
  }
  m = function(e = null) {
    const t = s.useContext(n);
    return !t || u(t) ? e : t;
  };
  const c = r();
  h = function(e = c) {
    return m(e);
  };
  i = function() {
    const e = h(o);
    return e[a] || e;
  };
});
export {
  __tla,
  h as a,
  m as b,
  i as u
};
