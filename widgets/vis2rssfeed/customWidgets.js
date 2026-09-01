const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./assets/index-D5a900JT.js","./assets/defaultTheme-CnUWaJB8.js","./assets/vis2rssfeedWidgets__loadShare__react__loadShare__-DZcZP6XT.js","./assets/_commonjsHelpers-DsqdWQfm.js","./assets/vis2rssfeedWidgets__mf_v__runtimeInit__mf_v__-CIJsaS2U.js","./assets/vis2rssfeedWidgets__loadShare__prop_mf_2_types__loadShare__-C3BqG1AV.js","./assets/vis2rssfeedWidgets__loadShare___mf_0_mui_mf_1_material__loadShare__-SRx7nqzf.js","./assets/vis2rssfeedWidgets__loadShare___mf_0_mui_mf_1_icons_mf_2_material__loadShare__-59lJ2BkQ.js","./assets/useTheme-CBr1SOjK.js","./assets/index-9Q4Rf6zb.js","./assets/jsx-runtime-5TN6Phqd.js","./assets/createSvgIcon-BNXykqM_.js","./assets/index-VcWy9dct.js","./assets/index-mSUAwCBH.js","./assets/index-DN8zaYv1.js","./assets/index-CnPkgegJ.js"])))=>i.map(i=>d[i]);
import { i as m, v as p, __tla as __tla_0 } from "./assets/vis2rssfeedWidgets__mf_v__runtimeInit__mf_v__-CIJsaS2U.js";
import n, { __tla as __tla_1 } from "./assets/virtualExposes-BAXQ2bmo.js";
import { _ as a } from "./assets/preload-helper-PPVm8Dsz.js";
let k, y;
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
  const i = {
    "@iobroker/adapter-react-v5": async () => await a(() => import("./assets/index-D5a900JT.js").then(async (m2) => {
      await m2.__tla;
      return m2;
    }), __vite__mapDeps([0,1,2,3,4,5,6,7,8]), import.meta.url),
    "@mui/icons-material": async () => await a(() => import("./assets/index-9Q4Rf6zb.js").then(async (m2) => {
      await m2.__tla;
      return m2;
    }), __vite__mapDeps([9,10,2,3,4,11,5,1]), import.meta.url),
    "@mui/material": async () => await a(() => import("./assets/index-VcWy9dct.js").then(async (m2) => {
      await m2.__tla;
      return m2;
    }), __vite__mapDeps([12,1,2,3,4,5,11,10,8]), import.meta.url),
    "prop-types": async () => await a(() => import("./assets/index-mSUAwCBH.js").then((t) => t.i), __vite__mapDeps([13,3]), import.meta.url),
    react: async () => await a(() => import("./assets/index-DN8zaYv1.js").then((t) => t.i), __vite__mapDeps([14,3]), import.meta.url),
    "react-dom": async () => await a(() => import("./assets/index-CnPkgegJ.js").then(async (m2) => {
      await m2.__tla;
      return m2;
    }).then((t) => t.i), __vite__mapDeps([15,3,2,4]), import.meta.url)
  }, o = {
    "@iobroker/adapter-react-v5": {
      name: "@iobroker/adapter-react-v5",
      version: "8.3.2",
      scope: [
        "default"
      ],
      loaded: false,
      from: "vis2rssfeedWidgets",
      async get() {
        o["@iobroker/adapter-react-v5"].loaded = true;
        const { "@iobroker/adapter-react-v5": e } = i, r = {
          ...await e()
        };
        return Object.defineProperty(r, "__esModule", {
          value: true,
          enumerable: false
        }), function() {
          return r;
        };
      },
      shareConfig: {
        singleton: true,
        requiredVersion: "*"
      }
    },
    "@mui/icons-material": {
      name: "@mui/icons-material",
      version: "6.5.0",
      scope: [
        "default"
      ],
      loaded: false,
      from: "vis2rssfeedWidgets",
      async get() {
        o["@mui/icons-material"].loaded = true;
        const { "@mui/icons-material": e } = i, r = {
          ...await e()
        };
        return Object.defineProperty(r, "__esModule", {
          value: true,
          enumerable: false
        }), function() {
          return r;
        };
      },
      shareConfig: {
        singleton: true,
        requiredVersion: "*"
      }
    },
    "@mui/material": {
      name: "@mui/material",
      version: "6.5.0",
      scope: [
        "default"
      ],
      loaded: false,
      from: "vis2rssfeedWidgets",
      async get() {
        o["@mui/material"].loaded = true;
        const { "@mui/material": e } = i, r = {
          ...await e()
        };
        return Object.defineProperty(r, "__esModule", {
          value: true,
          enumerable: false
        }), function() {
          return r;
        };
      },
      shareConfig: {
        singleton: true,
        requiredVersion: "*"
      }
    },
    "prop-types": {
      name: "prop-types",
      version: "15.8.1",
      scope: [
        "default"
      ],
      loaded: false,
      from: "vis2rssfeedWidgets",
      async get() {
        o["prop-types"].loaded = true;
        const { "prop-types": e } = i, r = {
          ...await e()
        };
        return Object.defineProperty(r, "__esModule", {
          value: true,
          enumerable: false
        }), function() {
          return r;
        };
      },
      shareConfig: {
        singleton: true,
        requiredVersion: "*"
      }
    },
    react: {
      name: "react",
      version: "18.3.1",
      scope: [
        "default"
      ],
      loaded: false,
      from: "vis2rssfeedWidgets",
      async get() {
        o.react.loaded = true;
        const { react: e } = i, r = {
          ...await e()
        };
        return Object.defineProperty(r, "__esModule", {
          value: true,
          enumerable: false
        }), function() {
          return r;
        };
      },
      shareConfig: {
        singleton: true,
        requiredVersion: "*"
      }
    },
    "react-dom": {
      name: "react-dom",
      version: "18.3.1",
      scope: [
        "default"
      ],
      loaded: false,
      from: "vis2rssfeedWidgets",
      async get() {
        o["react-dom"].loaded = true;
        const { "react-dom": e } = i, r = {
          ...await e()
        };
        return Object.defineProperty(r, "__esModule", {
          value: true,
          enumerable: false
        }), function() {
          return r;
        };
      },
      shareConfig: {
        singleton: true,
        requiredVersion: "*"
      }
    }
  }, f = [], u = {}, d = "default", l = "vis2rssfeedWidgets";
  y = async function(e = {}, t = []) {
    const r = m({
      name: l,
      remotes: f,
      shared: o,
      plugins: [],
      shareStrategy: "version-first"
    });
    var s = u[d];
    if (s || (s = u[d] = {
      from: l
    }), !(t.indexOf(s) >= 0)) {
      t.push(s), r.initShareScopeMap("default", e);
      try {
        await Promise.all(await r.initializeSharing("default", {
          strategy: "version-first",
          from: "build",
          initScope: t
        }));
      } catch (c) {
        console.error(c);
      }
      return p.initResolve(r), r;
    }
  };
  k = function(e) {
    if (!(e in n)) throw new Error(`Module ${e} does not exist in container.`);
    return n[e]().then((t) => () => t);
  };
});
export {
  __tla,
  k as get,
  y as init
};
