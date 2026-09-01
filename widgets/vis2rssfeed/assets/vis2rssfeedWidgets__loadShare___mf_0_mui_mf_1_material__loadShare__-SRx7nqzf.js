import { v as _, a as s, __tla as __tla_0 } from "./vis2rssfeedWidgets__mf_v__runtimeInit__mf_v__-CIJsaS2U.js";
let n;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  const { loadShare: r } = s, { initPromise: i } = _, t = i.then((e) => r("@mui/material", {
    customShareInfo: {
      shareConfig: {
        singleton: true,
        strictVersion: false,
        requiredVersion: "*"
      }
    }
  })), a = await t.then((e) => e());
  n = a;
});
export {
  __tla,
  n as v
};
