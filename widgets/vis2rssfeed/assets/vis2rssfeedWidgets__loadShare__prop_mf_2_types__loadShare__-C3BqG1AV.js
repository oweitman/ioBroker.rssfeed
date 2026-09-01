import { a as s } from "./_commonjsHelpers-DsqdWQfm.js";
import { v as r, a as o, __tla as __tla_0 } from "./vis2rssfeedWidgets__mf_v__runtimeInit__mf_v__-CIJsaS2U.js";
let m, n;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  const { loadShare: t } = o, { initPromise: _ } = r, a = _.then((e) => t("prop-types", {
    customShareInfo: {
      shareConfig: {
        singleton: true,
        strictVersion: false,
        requiredVersion: "*"
      }
    }
  })), i = await a.then((e) => e());
  n = i;
  m = s(n);
});
export {
  m as P,
  __tla,
  n as v
};
