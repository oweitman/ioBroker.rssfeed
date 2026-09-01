"use strict";
(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
    get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
  }) : x)(function(x) {
    if (typeof require !== "undefined") return require.apply(this, arguments);
    throw Error('Dynamic require of "' + x + '" is not supported');
  });
  var __commonJS = (cb, mod) => function __require2() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // rssfeed/myi18n/translations.json
  var require_translations = __commonJS({
    "rssfeed/myi18n/translations.json"(exports, module) {
      module.exports = {
        "rssfeed adapter settings": {
          en: "Adapter settings for rssfeed",
          de: "Adaptereinstellungen f\xFCr rssfeed",
          ru: "\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u0430\u0434\u0430\u043F\u0442\u0435\u0440\u0430 \u0434\u043B\u044F rssfeed",
          pt: "Defini\xE7\xF5es do adaptador para o rssfeed",
          nl: "Instellingen voor de RSS-feed",
          fr: "Param\xE8tres de l'adaptateur pour le flux RSS",
          it: "Impostazioni dell'adattatore per rssfeed",
          es: "Configuraci\xF3n del adaptador para rssfeed",
          pl: "Ustawienia adaptera dla kana\u0142u RSS",
          uk: "\u041D\u0430\u043B\u0430\u0448\u0442\u0443\u0432\u0430\u043D\u043D\u044F \u0430\u0434\u0430\u043F\u0442\u0435\u0440\u0430 \u0434\u043B\u044F rssfeed",
          "zh-cn": "Adapter settings for rssfeed"
        },
        rss_oid: {
          en: "RSS feed data point",
          de: "RSS-Feed-Datenpunkt",
          ru: "\u042D\u043B\u0435\u043C\u0435\u043D\u0442 \u0434\u0430\u043D\u043D\u044B\u0445 RSS-\u043A\u0430\u043D\u0430\u043B\u0430",
          pt: "Dados do feed RSS",
          nl: "RSS-feed-gegevenspunt",
          fr: "\xC9l\xE9ment de donn\xE9es du flux RSS",
          it: "Dato del feed RSS",
          es: "Datos del canal RSS",
          pl: "Element danych kana\u0142u RSS",
          uk: "\u0415\u043B\u0435\u043C\u0435\u043D\u0442 \u0434\u0430\u043D\u0438\u0445 RSS-\u043A\u0430\u043D\u0430\u043B\u0443",
          "zh-cn": "RSS feed data point"
        },
        rss_template: {
          en: "RSS Template",
          de: "RSS-Vorlage",
          ru: "\u0428\u0430\u0431\u043B\u043E\u043D RSS",
          pt: "Modelo RSS",
          nl: "RSS-sjabloon",
          fr: "Mod\xE8le RSS",
          it: "Modello RSS",
          es: "Plantilla RSS",
          pl: "Szablon RSS",
          uk: "\u0428\u0430\u0431\u043B\u043E\u043D RSS",
          "zh-cn": "RSS Template"
        },
        rss_maxarticles: {
          en: "RSS max. articles",
          de: "RSS \u2013 maximale Anzahl an Artikeln",
          ru: "\u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u043E\u0435 \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0441\u0442\u0430\u0442\u0435\u0439 \u0432 RSS",
          pt: "N\xFAmero m\xE1ximo de artigos no RSS",
          nl: "Max. aantal RSS-artikelen",
          fr: "Nombre maximal d'articles RSS",
          it: "Numero massimo di articoli RSS",
          es: "N\xFAmero m\xE1ximo de art\xEDculos en RSS",
          pl: "Maksymalna liczba artyku\u0142\xF3w w kanale RSS",
          uk: "\u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u0430 \u043A\u0456\u043B\u044C\u043A\u0456\u0441\u0442\u044C \u0441\u0442\u0430\u0442\u0435\u0439 \u0443 RSS",
          "zh-cn": "RSS max. articles"
        },
        rss_filter: {
          en: "RSS Filter",
          de: "RSS-Filter",
          ru: "\u0424\u0438\u043B\u044C\u0442\u0440 RSS",
          pt: "Filtro RSS",
          nl: "RSS-filter",
          fr: "Filtre RSS",
          it: "Filtro RSS",
          es: "Filtro RSS",
          pl: "Filtr RSS",
          uk: "\u0424\u0456\u043B\u044C\u0442\u0440 RSS",
          "zh-cn": "RSS Filter"
        },
        rss_feedCount: {
          en: "RSS Feed Number",
          de: "Anzahl der RSS-Feeds",
          ru: "\u041D\u043E\u043C\u0435\u0440 RSS-\u043A\u0430\u043D\u0430\u043B\u0430",
          pt: "N\xFAmero do feed RSS",
          nl: "Aantal RSS-feeds",
          fr: "Nombre d'abonnements RSS",
          it: "Numero del feed RSS",
          es: "N\xFAmero de fuentes RSS",
          pl: "Liczba kana\u0142\xF3w RSS",
          uk: "\u041D\u043E\u043C\u0435\u0440 RSS-\u043A\u0430\u043D\u0430\u043B\u0443",
          "zh-cn": "RSS Feed Number"
        },
        rss_dpCount: {
          en: "Additional datapoint Count",
          de: "Anzahl der zus\xE4tzlichen Datenpunkte",
          ru: "\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0434\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0445 \u0442\u043E\u0447\u0435\u043A \u0434\u0430\u043D\u043D\u044B\u0445",
          pt: "Contagem de pontos de dados adicionais",
          nl: "Aantal extra gegevenspunten",
          fr: "Nombre de points de donn\xE9es suppl\xE9mentaires",
          it: "Numero di dati aggiuntivi",
          es: "Recuento de datos adicionales",
          pl: "Liczba dodatkowych punkt\xF3w danych",
          uk: "\u041A\u0456\u043B\u044C\u043A\u0456\u0441\u0442\u044C \u0434\u043E\u0434\u0430\u0442\u043A\u043E\u0432\u0438\u0445 \u0434\u0430\u043D\u0438\u0445",
          "zh-cn": "Additional datapoint Count"
        },
        rss_dp: {
          en: "data point",
          de: "Datenpunkt",
          ru: "\u0442\u043E\u0447\u043A\u0430 \u0434\u0430\u043D\u043D\u044B\u0445",
          pt: "valor",
          nl: "gegevenspunt",
          fr: "data point",
          it: "data point",
          es: "dato",
          pl: "punkt danych",
          uk: "\u0434\u0430\u043D\u0456",
          "zh-cn": "data point"
        },
        rss_name: {
          en: "RSS Name",
          de: "RSS-Name",
          ru: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 RSS",
          pt: "Nome do RSS",
          nl: "RSS-naam",
          fr: "Nom du flux RSS",
          it: "Nome RSS",
          es: "Nombre del RSS",
          pl: "Nazwa kana\u0142u RSS",
          uk: "\u041D\u0430\u0437\u0432\u0430 RSS",
          "zh-cn": "RSS Name"
        },
        group_feeds: {
          en: "RSS Feed Group",
          de: "RSS-Feed-Gruppe",
          ru: "\u0413\u0440\u0443\u043F\u043F\u0430 RSS-\u043A\u0430\u043D\u0430\u043B\u043E\u0432",
          pt: "Grupo de feeds RSS",
          nl: "RSS-feedgroep",
          fr: "Groupe de flux RSS",
          it: "Gruppo feed RSS",
          es: "Grupo de fuentes RSS",
          pl: "Grupa kana\u0142\xF3w RSS",
          uk: "\u0413\u0440\u0443\u043F\u0430 RSS-\u043A\u0430\u043D\u0430\u043B\u0456\u0432",
          "zh-cn": "RSS Feed Group"
        },
        rss_prefix: {
          en: "RSS Prefix",
          de: "RSS-Pr\xE4fix",
          ru: "\u041F\u0440\u0435\u0444\u0438\u043A\u0441 RSS",
          pt: "Prefixo RSS",
          nl: "RSS-voorvoegsel",
          fr: "Pr\xE9fixe RSS",
          it: "Prefisso RSS",
          es: "Prefijo RSS",
          pl: "Prefiks RSS",
          uk: "\u041F\u0440\u0435\u0444\u0456\u043A\u0441 RSS",
          "zh-cn": "RSS Prefix"
        },
        rss_article: {
          en: "RSS Article count",
          de: "Anzahl der RSS-Artikel",
          ru: "\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0441\u0442\u0430\u0442\u0435\u0439 \u0432 RSS",
          pt: "N\xFAmero de artigos RSS",
          nl: "Aantal RSS-artikelen",
          fr: "Nombre d'articles RSS",
          it: "Numero di articoli RSS",
          es: "RSS: N\xFAmero de art\xEDculos",
          pl: "Liczba artyku\u0142\xF3w RSS",
          uk: "\u041A\u0456\u043B\u044C\u043A\u0456\u0441\u0442\u044C \u0441\u0442\u0430\u0442\u0435\u0439 \u0443 RSS",
          "zh-cn": "RSS Article count"
        },
        rss_speed: {
          en: "RSS Speed",
          de: "RSS-Geschwindigkeit",
          ru: "\u0421\u043A\u043E\u0440\u043E\u0441\u0442\u044C RSS",
          pt: "Velocidade do RSS",
          nl: "RSS-snelheid",
          fr: "Vitesse RSS",
          it: "Velocit\xE0 RSS",
          es: "Velocidad RSS",
          pl: "Pr\u0119dko\u015B\u0107 RSS",
          uk: "\u0428\u0432\u0438\u0434\u043A\u0456\u0441\u0442\u044C RSS",
          "zh-cn": "RSS Speed"
        },
        rss_divider: {
          en: "RSS Seperator",
          de: "RSS-Trennzeichen",
          ru: "\u0420\u0430\u0437\u0434\u0435\u043B\u0438\u0442\u0435\u043B\u044C RSS",
          pt: "Separador RSS",
          nl: "RSS-scheidingsteken",
          fr: "S\xE9parateur RSS",
          it: "Separatore RSS",
          es: "Separador RSS",
          pl: "Separator RSS",
          uk: "\u0420\u043E\u0437\u0434\u0456\u043B\u044C\u043D\u0438\u043A RSS",
          "zh-cn": "RSS Seperator"
        },
        rss_pauseonhover: {
          en: "RSS Pause on hover",
          de: "RSS beim Bewegen des Mauszeigers anhalten",
          ru: "RSS: \u043F\u0440\u0438 \u043D\u0430\u0432\u0435\u0434\u0435\u043D\u0438\u0438 \u043A\u0443\u0440\u0441\u043E\u0440\u0430",
          pt: "RSS: Pausar ao passar o cursor",
          nl: "RSS: pauzeren bij aanwijzen",
          fr: "RSS : mise en pause au survol",
          it: "RSS: Pausa al passaggio del mouse",
          es: "RSS: Pausa al pasar el cursor",
          pl: "RSS \u2013 Wstrzymaj przy najechaniu kursorem",
          uk: "RSS: \u041F\u0440\u0438\u0437\u0443\u043F\u0438\u043D\u0438\u0442\u0438 \u043F\u0440\u0438 \u043D\u0430\u0432\u0435\u0434\u0435\u043D\u043D\u0456 \u043A\u0443\u0440\u0441\u043E\u0440\u0443",
          "zh-cn": "RSS Pause on hover"
        },
        rss_link: {
          en: "RSS Link",
          de: "RSS-Link",
          ru: "\u0421\u0441\u044B\u043B\u043A\u0430 RSS",
          pt: "Link RSS",
          nl: "RSS-link",
          fr: "Lien RSS",
          it: "Link RSS",
          es: "Enlace RSS",
          pl: "Link do kana\u0142u RSS",
          uk: "\u041F\u043E\u0441\u0438\u043B\u0430\u043D\u043D\u044F \u043D\u0430 RSS",
          "zh-cn": "RSS Link"
        },
        rss_withtime: {
          en: "RSS with time",
          de: "RSS mit Zeitangabe",
          ru: "RSS \u0441 \u0443\u043A\u0430\u0437\u0430\u043D\u0438\u0435\u043C \u0432\u0440\u0435\u043C\u0435\u043D\u0438",
          pt: "RSS com hora",
          nl: "RSS met tijdsaanduiding",
          fr: "RSS avec l'heure",
          it: "RSS con indicazione dell'ora",
          es: "RSS con hora",
          pl: "RSS z dat\u0105",
          uk: "RSS \u0456\u0437 \u0437\u0430\u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F\u043C \u0447\u0430\u0441\u0443",
          "zh-cn": "RSS with time"
        },
        json_oid: {
          en: "JSON data point",
          de: "JSON-Datenpunkt",
          ru: "\u042D\u043B\u0435\u043C\u0435\u043D\u0442 \u0434\u0430\u043D\u043D\u044B\u0445 JSON",
          pt: "Ponto de dados JSON",
          nl: "JSON-gegevenspunt",
          fr: "\xC9l\xE9ment de donn\xE9es JSON",
          it: "Voce di dati JSON",
          es: "Punto de datos JSON",
          pl: "Warto\u015B\u0107 danych JSON",
          uk: "\u0415\u043B\u0435\u043C\u0435\u043D\u0442 \u0434\u0430\u043D\u0438\u0445 JSON",
          "zh-cn": "JSON data point"
        },
        json_template: {
          en: "JSON Template",
          de: "JSON-Vorlage",
          ru: "\u0428\u0430\u0431\u043B\u043E\u043D JSON",
          pt: "Modelo JSON",
          nl: "JSON-sjabloon",
          fr: "Mod\xE8le JSON",
          it: "Modello JSON",
          es: "Plantilla JSON",
          pl: "Szablon JSON",
          uk: "\u0428\u0430\u0431\u043B\u043E\u043D JSON",
          "zh-cn": "JSON Template"
        }
      };
    }
  });

  // node_modules/ejs/ejs.min.js
  var require_ejs_min = __commonJS({
    "node_modules/ejs/ejs.min.js"(exports, module) {
      (function(f) {
        if (typeof exports === "object" && typeof module !== "undefined") {
          module.exports = f();
        } else if (typeof define === "function" && define.amd) {
          define([], f);
        } else {
          var g;
          if (typeof window !== "undefined") {
            g = window;
          } else if (typeof global !== "undefined") {
            g = global;
          } else if (typeof self !== "undefined") {
            g = self;
          } else {
            g = this;
          }
          g.ejs = f();
        }
      })(function() {
        var define2, module2, exports2;
        return (/* @__PURE__ */ (function() {
          function r(e, n, t) {
            function o(i2, f) {
              if (!n[i2]) {
                if (!e[i2]) {
                  var c = "function" == typeof __require && __require;
                  if (!f && c) return c(i2, true);
                  if (u) return u(i2, true);
                  var a = new Error("Cannot find module '" + i2 + "'");
                  throw a.code = "MODULE_NOT_FOUND", a;
                }
                var p = n[i2] = { exports: {} };
                e[i2][0].call(p.exports, function(r2) {
                  var n2 = e[i2][1][r2];
                  return o(n2 || r2);
                }, p, p.exports, r, e, n, t);
              }
              return n[i2].exports;
            }
            for (var u = "function" == typeof __require && __require, i = 0; i < t.length; i++) o(t[i]);
            return o;
          }
          return r;
        })())({ 1: [function(require2, module3, exports3) {
          "use strict";
          var __importDefault = this && this.__importDefault || function(mod) {
            return mod && mod.__esModule ? mod : { default: mod };
          };
          Object.defineProperty(exports3, "__esModule", { value: true });
          var fs_1 = __importDefault(require2("fs"));
          var path_1 = __importDefault(require2("path"));
          var utils_js_1 = __importDefault(require2("./utils.js"));
          var DECLARATION_KEYWORD = "var";
          var ejs2 = {};
          var _DEFAULT_OPEN_DELIMITER = "<";
          var _DEFAULT_CLOSE_DELIMITER = ">";
          var _DEFAULT_DELIMITER = "%";
          var _DEFAULT_LOCALS_NAME = "locals";
          var _REGEX_STRING = "(<%%|%%>|<%=|<%-|<%_|<%#|<%|%>|-%>|_%>)";
          var _OPTS_PASSABLE_WITH_DATA = ["delimiter", "scope", "context", "debug", "compileDebug", "_with", "rmWhitespace", "strict", "filename", "async"];
          var _OPTS_PASSABLE_WITH_DATA_EXPRESS = _OPTS_PASSABLE_WITH_DATA.concat("cache");
          var _BOM = /^\uFEFF/;
          var _JS_IDENTIFIER = /^[a-zA-Z_$][0-9a-zA-Z_$]*$/;
          ejs2.cache = utils_js_1.default.cache;
          ejs2.fileLoader = fs_1.default.readFileSync;
          ejs2.localsName = _DEFAULT_LOCALS_NAME;
          ejs2.promiseImpl = new Function("return this;")().Promise;
          ejs2.resolveInclude = function(name, filename, isDir) {
            var dirname = path_1.default.dirname;
            var extname = path_1.default.extname;
            var resolve = path_1.default.resolve;
            var includePath = resolve(isDir ? filename : dirname(filename), name);
            var ext = extname(name);
            if (!ext) {
              includePath += ".ejs";
            }
            return includePath;
          };
          function resolvePaths(name, paths) {
            var filePath;
            if (paths.some(function(v) {
              filePath = ejs2.resolveInclude(name, v, true);
              return fs_1.default.existsSync(filePath);
            })) {
              return filePath;
            }
          }
          function getIncludePath(path, options) {
            var includePath;
            var filePath;
            var views = options.views;
            var match = /^[A-Za-z]+:\\|^\//.exec(path);
            if (match && match.length) {
              path = path.replace(/^\/*/, "");
              if (Array.isArray(options.root)) {
                includePath = resolvePaths(path, options.root);
              } else {
                includePath = ejs2.resolveInclude(path, options.root || "/", true);
              }
            } else {
              if (options.filename) {
                filePath = ejs2.resolveInclude(path, options.filename);
                if (fs_1.default.existsSync(filePath)) {
                  includePath = filePath;
                }
              }
              if (!includePath && Array.isArray(views)) {
                includePath = resolvePaths(path, views);
              }
              if (!includePath && typeof options.includer !== "function") {
                throw new Error('Could not find the include file "' + options.escapeFunction(path) + '"');
              }
            }
            return includePath;
          }
          function handleCache(options, template) {
            var func;
            var filename = options.filename;
            var hasTemplate = arguments.length > 1;
            if (options.cache) {
              if (!filename) {
                throw new Error("cache option requires a filename");
              }
              func = ejs2.cache.get(filename);
              if (func) {
                return func;
              }
              if (!hasTemplate) {
                template = fileLoader(filename).toString().replace(_BOM, "");
              }
            } else if (!hasTemplate) {
              if (!filename) {
                throw new Error("Internal EJS error: no file name or template provided");
              }
              template = fileLoader(filename).toString().replace(_BOM, "");
            }
            func = ejs2.compile(template, options);
            if (options.cache) {
              ejs2.cache.set(filename, func);
            }
            return func;
          }
          function tryHandleCache(options, data, cb) {
            var result;
            if (!cb) {
              if (typeof ejs2.promiseImpl == "function") {
                return new ejs2.promiseImpl(function(resolve, reject) {
                  try {
                    result = handleCache(options)(data);
                    resolve(result);
                  } catch (err) {
                    reject(err);
                  }
                });
              } else {
                throw new Error("Please provide a callback function");
              }
            } else {
              try {
                result = handleCache(options)(data);
              } catch (err) {
                return cb(err);
              }
              cb(null, result);
            }
          }
          function fileLoader(filePath) {
            return ejs2.fileLoader(filePath);
          }
          function includeFile(path, options) {
            var opts = utils_js_1.default.shallowCopy(utils_js_1.default.createNullProtoObjWherePossible(), options);
            opts.filename = getIncludePath(path, opts);
            if (typeof options.includer === "function") {
              var includerResult = options.includer(path, opts.filename);
              if (includerResult) {
                if (includerResult.filename) {
                  opts.filename = includerResult.filename;
                }
                if (includerResult.template) {
                  return handleCache(opts, includerResult.template);
                }
              }
            }
            return handleCache(opts);
          }
          function rethrow(err, str, flnm, lineno, esc) {
            var lines = str.split("\n");
            var start = Math.max(lineno - 3, 0);
            var end = Math.min(lines.length, lineno + 3);
            var filename = esc(flnm);
            var context = lines.slice(start, end).map(function(line, i) {
              var curr = i + start + 1;
              return (curr == lineno ? " >> " : "    ") + curr + "| " + line;
            }).join("\n");
            err.path = filename;
            err.message = (filename || "ejs") + ":" + lineno + "\n" + context + "\n\n" + err.message;
            throw err;
          }
          function stripSemi(str) {
            return str.replace(/;(\s*$)/, "$1");
          }
          ejs2.compile = function compile(template, opts) {
            var templ;
            if (opts && opts.scope) {
              console.warn("`scope` option is deprecated and will be removed in future EJS");
              if (!opts.context) {
                opts.context = opts.scope;
              }
              delete opts.scope;
            }
            templ = new Template(template, opts);
            return templ.compile();
          };
          ejs2.render = function(template, d, o) {
            var data = d || utils_js_1.default.createNullProtoObjWherePossible();
            var opts = o || utils_js_1.default.createNullProtoObjWherePossible();
            if (arguments.length == 2) {
              utils_js_1.default.shallowCopyFromList(opts, data, _OPTS_PASSABLE_WITH_DATA);
            }
            return handleCache(opts, template)(data);
          };
          ejs2.renderFile = function() {
            var args = Array.prototype.slice.call(arguments);
            var filename = args.shift();
            var cb;
            var opts = { filename };
            var data;
            var viewOpts;
            if (typeof arguments[arguments.length - 1] == "function") {
              cb = args.pop();
            }
            if (args.length) {
              data = args.shift();
              if (args.length) {
                utils_js_1.default.shallowCopy(opts, args.pop());
              } else {
                if (utils_js_1.default.hasOwn(data, "settings") && data.settings) {
                  if (data.settings.views) {
                    opts.views = data.settings.views;
                  }
                  if (data.settings["view cache"]) {
                    opts.cache = true;
                  }
                  viewOpts = data.settings["view options"];
                  if (viewOpts) {
                    utils_js_1.default.shallowCopy(opts, viewOpts);
                  }
                }
                utils_js_1.default.shallowCopyFromList(opts, data, _OPTS_PASSABLE_WITH_DATA_EXPRESS);
              }
              opts.filename = filename;
            } else {
              data = utils_js_1.default.createNullProtoObjWherePossible();
            }
            return tryHandleCache(opts, data, cb);
          };
          ejs2.Template = Template;
          ejs2.clearCache = function() {
            ejs2.cache.reset();
          };
          function Template(text, optsParam) {
            var opts = utils_js_1.default.hasOwnOnlyObject(optsParam);
            var options = utils_js_1.default.createNullProtoObjWherePossible();
            this.templateText = text;
            this.mode = null;
            this.truncate = false;
            this.currentLine = 1;
            this.source = "";
            options.escapeFunction = opts.escape || opts.escapeFunction || utils_js_1.default.escapeXML;
            options.compileDebug = opts.compileDebug !== false;
            options.debug = !!opts.debug;
            options.filename = opts.filename;
            options.openDelimiter = opts.openDelimiter || ejs2.openDelimiter || _DEFAULT_OPEN_DELIMITER;
            options.closeDelimiter = opts.closeDelimiter || ejs2.closeDelimiter || _DEFAULT_CLOSE_DELIMITER;
            options.delimiter = opts.delimiter || ejs2.delimiter || _DEFAULT_DELIMITER;
            options.strict = opts.strict || false;
            options.context = opts.context;
            options.cache = opts.cache || false;
            options.rmWhitespace = opts.rmWhitespace;
            options.root = opts.root;
            options.includer = opts.includer;
            options.outputFunctionName = opts.outputFunctionName;
            options.localsName = opts.localsName || ejs2.localsName || _DEFAULT_LOCALS_NAME;
            options.views = opts.views;
            options.async = opts.async;
            options.destructuredLocals = opts.destructuredLocals;
            options.legacyInclude = typeof opts.legacyInclude != "undefined" ? !!opts.legacyInclude : true;
            options.unsafePrototypeLocals = !!opts.unsafePrototypeLocals;
            if (options.strict) {
              options._with = false;
            } else {
              options._with = typeof opts._with != "undefined" ? opts._with : true;
            }
            this.opts = options;
            this.regex = this.createRegex();
          }
          Template.modes = { EVAL: "eval", ESCAPED: "escaped", RAW: "raw", COMMENT: "comment", LITERAL: "literal" };
          Template.prototype = { createRegex: function() {
            var str = _REGEX_STRING;
            var delim = utils_js_1.default.escapeRegExpChars(this.opts.delimiter);
            var open = utils_js_1.default.escapeRegExpChars(this.opts.openDelimiter);
            var close = utils_js_1.default.escapeRegExpChars(this.opts.closeDelimiter);
            str = str.replace(/%/g, delim).replace(/</g, open).replace(/>/g, close);
            return new RegExp(str);
          }, compile: function() {
            var src;
            var fn;
            var opts = this.opts;
            var prepended = "";
            var appended = "";
            var escapeFn = opts.escapeFunction;
            var ctor;
            var sanitizedFilename = opts.filename ? JSON.stringify(opts.filename) : "undefined";
            if (!this.source) {
              this.generateSource();
              prepended += "  ".concat(DECLARATION_KEYWORD, ' __output = "";\n') + "  function __append(s) { if (s !== undefined && s !== null) __output += s }\n";
              if (opts.outputFunctionName) {
                if (!_JS_IDENTIFIER.test(opts.outputFunctionName)) {
                  throw new Error("outputFunctionName is not a valid JS identifier.");
                }
                prepended += "  ".concat(DECLARATION_KEYWORD, " ") + opts.outputFunctionName + " = __append;\n";
              }
              if (opts.localsName && !_JS_IDENTIFIER.test(opts.localsName)) {
                throw new Error("localsName is not a valid JS identifier.");
              }
              if (opts.destructuredLocals && opts.destructuredLocals.length) {
                var destructuring = "  ".concat(DECLARATION_KEYWORD, " __locals = (") + opts.localsName + " || {}),\n";
                for (var i = 0; i < opts.destructuredLocals.length; i++) {
                  var name_1 = opts.destructuredLocals[i];
                  if (!_JS_IDENTIFIER.test(name_1)) {
                    throw new Error("destructuredLocals[" + i + "] is not a valid JS identifier.");
                  }
                  if (i > 0) {
                    destructuring += ",\n  ";
                  }
                  destructuring += name_1 + " = __locals." + name_1;
                }
                prepended += destructuring + ";\n";
              }
              if (opts._with !== false) {
                prepended += "  with (" + opts.localsName + " || {}) {\n";
                appended += "  }\n";
              }
              appended += "  return __output;\n";
              this.source = prepended + this.source + appended;
            }
            if (opts.compileDebug) {
              src = "".concat(DECLARATION_KEYWORD, " __line = 1") + "\n  , __lines = " + JSON.stringify(this.templateText) + "\n  , __filename = " + sanitizedFilename + ";\ntry {\n" + this.source + "} catch (e) {\n  rethrow(e, __lines, __filename, __line, escapeFn);\n}\n";
            } else {
              src = this.source;
            }
            if (opts.strict) {
              src = '"use strict";\n' + src;
            }
            if (opts.debug) {
              console.log(src);
            }
            if (opts.compileDebug && opts.filename) {
              src = src + "\n//# sourceURL=" + sanitizedFilename + "\n";
            }
            try {
              if (opts.async) {
                try {
                  ctor = new Function("return (async function(){}).constructor;")();
                } catch (e) {
                  if (e instanceof SyntaxError) {
                    throw new Error("This environment does not support async/await");
                  } else {
                    throw e;
                  }
                }
              } else {
                ctor = Function;
              }
              fn = new ctor(opts.localsName + ", escapeFn, include, rethrow", src);
            } catch (e) {
              if (e instanceof SyntaxError) {
                if (opts.filename) {
                  e.message += " in " + opts.filename;
                }
                e.message += " while compiling ejs\n\n";
                e.message += "If the above error is not helpful, you may want to try EJS-Lint:\n";
                e.message += "https://github.com/RyanZim/EJS-Lint";
                if (!opts.async) {
                  e.message += "\n";
                  e.message += "Or, if you meant to create an async function, pass `async: true` as an option.";
                }
              }
              throw e;
            }
            var returnedFn = function anonymous(data) {
              var include = function(path, includeData) {
                var d = utils_js_1.default.shallowCopy(utils_js_1.default.createNullProtoObjWherePossible(), data);
                if (includeData) {
                  d = utils_js_1.default.shallowCopy(d, includeData);
                }
                return includeFile(path, opts)(d);
              };
              var locals;
              if (opts.unsafePrototypeLocals) {
                locals = data || utils_js_1.default.createNullProtoObjWherePossible();
              } else {
                locals = utils_js_1.default.shallowCopy(utils_js_1.default.createNullProtoObjWherePossible(), data);
              }
              return fn.apply(opts.context, [locals, escapeFn, include, rethrow]);
            };
            if (opts.filename && typeof Object.defineProperty === "function") {
              var filename = opts.filename;
              var basename = path_1.default.basename(filename, path_1.default.extname(filename));
              try {
                Object.defineProperty(returnedFn, "name", { value: basename, writable: false, enumerable: false, configurable: true });
              } catch (e) {
              }
            }
            return returnedFn;
          }, generateSource: function() {
            var opts = this.opts;
            if (opts.rmWhitespace) {
              this.templateText = this.templateText.replace(/[\r\n]+/g, "\n").replace(/^\s+|\s+$/gm, "");
            }
            var self2 = this;
            var d = this.opts.delimiter;
            var o = this.opts.openDelimiter;
            var c = this.opts.closeDelimiter;
            var openWhitespaceSlurpTag = utils_js_1.default.escapeRegExpChars(o + d + "_");
            var closeWhitespaceSlurpTag = utils_js_1.default.escapeRegExpChars("_" + d + c);
            var openWhitespaceSlurpReplacement = o + d + "_";
            var closeWhitespaceSlurpReplacement = "_" + d + c;
            this.templateText = this.templateText.replace(new RegExp("[ \\t]*" + openWhitespaceSlurpTag, "gm"), openWhitespaceSlurpReplacement).replace(new RegExp(closeWhitespaceSlurpTag + "[ \\t]*", "gm"), closeWhitespaceSlurpReplacement);
            var matches = this.parseTemplateText();
            if (matches && matches.length) {
              matches.forEach(function(line, index) {
                var closing;
                if (line.indexOf(o + d) === 0 && line.indexOf(o + d + d) !== 0) {
                  closing = matches[index + 2];
                  if (!(closing == d + c || closing == "-" + d + c || closing == "_" + d + c)) {
                    throw new Error('Could not find matching close tag for "' + line + '".');
                  }
                }
                self2.scanLine(line);
              });
            }
          }, parseTemplateText: function() {
            var str = this.templateText;
            var pat = this.regex;
            var result = pat.exec(str);
            var arr = [];
            var firstPos;
            while (result) {
              firstPos = result.index;
              if (firstPos !== 0) {
                arr.push(str.substring(0, firstPos));
                str = str.slice(firstPos);
              }
              arr.push(result[0]);
              str = str.slice(result[0].length);
              result = pat.exec(str);
            }
            if (str) {
              arr.push(str);
            }
            return arr;
          }, _addOutput: function(line) {
            if (this.truncate) {
              line = line.replace(/^(?:\r\n|\r|\n)/, "");
              this.truncate = false;
            }
            if (!line) {
              return line;
            }
            line = line.replace(/\\/g, "\\\\");
            line = line.replace(/\n/g, "\\n");
            line = line.replace(/\r/g, "\\r");
            line = line.replace(/"/g, '\\"');
            this.source += '    ; __append("' + line + '")\n';
          }, scanLine: function(line) {
            var self2 = this;
            var d = this.opts.delimiter;
            var o = this.opts.openDelimiter;
            var c = this.opts.closeDelimiter;
            var newLineCount = 0;
            newLineCount = line.split("\n").length - 1;
            switch (line) {
              case o + d:
              case o + d + "_":
                this.mode = Template.modes.EVAL;
                break;
              case o + d + "=":
                this.mode = Template.modes.ESCAPED;
                break;
              case o + d + "-":
                this.mode = Template.modes.RAW;
                break;
              case o + d + "#":
                this.mode = Template.modes.COMMENT;
                break;
              case o + d + d:
                this.mode = Template.modes.LITERAL;
                this.source += '    ; __append("' + line.replace(o + d + d, o + d) + '")\n';
                break;
              case d + d + c:
                this.mode = Template.modes.LITERAL;
                this.source += '    ; __append("' + line.replace(d + d + c, d + c) + '")\n';
                break;
              case d + c:
              case "-" + d + c:
              case "_" + d + c:
                if (this.mode == Template.modes.LITERAL) {
                  this._addOutput(line);
                }
                this.mode = null;
                this.truncate = line.indexOf("-") === 0 || line.indexOf("_") === 0;
                break;
              default:
                if (this.mode) {
                  switch (this.mode) {
                    case Template.modes.EVAL:
                    case Template.modes.ESCAPED:
                    case Template.modes.RAW:
                      if (line.lastIndexOf("//") > line.lastIndexOf("\n")) {
                        line += "\n";
                      }
                  }
                  switch (this.mode) {
                    case Template.modes.EVAL:
                      this.source += "    ; " + line + "\n";
                      break;
                    case Template.modes.ESCAPED:
                      this.source += "    ; __append(escapeFn(" + stripSemi(line) + "))\n";
                      break;
                    case Template.modes.RAW:
                      this.source += "    ; __append(" + stripSemi(line) + ")\n";
                      break;
                    case Template.modes.COMMENT:
                      break;
                    case Template.modes.LITERAL:
                      this._addOutput(line);
                      break;
                  }
                } else {
                  this._addOutput(line);
                }
            }
            if (self2.opts.compileDebug && newLineCount) {
              this.currentLine += newLineCount;
              this.source += "    ; __line = " + this.currentLine + "\n";
            }
          } };
          ejs2.escapeXML = utils_js_1.default.escapeXML;
          ejs2.__express = ejs2.renderFile;
          if (typeof window != "undefined") {
            window.ejs = ejs2;
          }
          module3.exports = ejs2;
        }, { "./utils.js": 2, fs: 3, path: 4 }], 2: [function(require2, module3, exports3) {
          "use strict";
          Object.defineProperty(exports3, "__esModule", { value: true });
          var utils = {};
          var regExpChars = /[|\\{}()[\]^$+*?.]/g;
          var hasOwnProperty = Object.prototype.hasOwnProperty;
          var hasOwn = function(obj, key) {
            return hasOwnProperty.apply(obj, [key]);
          };
          utils.hasOwn = hasOwn;
          utils.escapeRegExpChars = function(string) {
            if (!string) {
              return "";
            }
            return String(string).replace(regExpChars, "\\$&");
          };
          var _ENCODE_HTML_RULES = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&#34;", "'": "&#39;" };
          var _MATCH_HTML = /[&<>'"]/g;
          function encode_char(c) {
            return _ENCODE_HTML_RULES[c] || c;
          }
          var escapeFuncStr = `var _ENCODE_HTML_RULES = {
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
          utils.escapeXML = function(markup) {
            return markup == void 0 ? "" : String(markup).replace(_MATCH_HTML, encode_char);
          };
          function escapeXMLToString() {
            return Function.prototype.toString.call(this) + ";\n" + escapeFuncStr;
          }
          try {
            if (typeof Object.defineProperty === "function") {
              Object.defineProperty(utils.escapeXML, "toString", { value: escapeXMLToString });
            } else {
              utils.escapeXML.toString = escapeXMLToString;
            }
          } catch (err) {
            console.warn("Unable to set escapeXML.toString (is the Function prototype frozen?)");
          }
          utils.shallowCopy = function(to, from) {
            from = from || {};
            if (to !== null && to !== void 0) {
              for (var p in from) {
                if (!hasOwn(from, p)) {
                  continue;
                }
                if (p === "__proto__" || p === "constructor") {
                  continue;
                }
                to[p] = from[p];
              }
            }
            return to;
          };
          utils.shallowCopyFromList = function(to, from, list) {
            list = list || [];
            from = from || {};
            if (to !== null && to !== void 0) {
              for (var i = 0; i < list.length; i++) {
                var p = list[i];
                if (typeof from[p] != "undefined") {
                  if (!hasOwn(from, p)) {
                    continue;
                  }
                  if (p === "__proto__" || p === "constructor") {
                    continue;
                  }
                  to[p] = from[p];
                }
              }
            }
            return to;
          };
          utils.cache = { _data: {}, set: function(key, val) {
            this._data[key] = val;
          }, get: function(key) {
            return this._data[key];
          }, remove: function(key) {
            delete this._data[key];
          }, reset: function() {
            this._data = {};
          } };
          utils.hyphenToCamel = function(str) {
            return str.replace(/-[a-z]/g, function(match) {
              return match[1].toUpperCase();
            });
          };
          utils.createNullProtoObjWherePossible = (function() {
            if (typeof Object.create == "function") {
              return function() {
                return /* @__PURE__ */ Object.create(null);
              };
            }
            if (!({ __proto__: null } instanceof Object)) {
              return function() {
                return { __proto__: null };
              };
            }
            return function() {
              return {};
            };
          })();
          utils.hasOwnOnlyObject = function(obj) {
            var o = utils.createNullProtoObjWherePossible();
            for (var p in obj) {
              if (hasOwn(obj, p)) {
                o[p] = obj[p];
              }
            }
            return o;
          };
          module3.exports = utils;
        }, {}], 3: [function(require2, module3, exports3) {
        }, {}], 4: [function(require2, module3, exports3) {
          (function(process) {
            (function() {
              "use strict";
              function assertPath(path) {
                if (typeof path !== "string") {
                  throw new TypeError("Path must be a string. Received " + JSON.stringify(path));
                }
              }
              function normalizeStringPosix(path, allowAboveRoot) {
                var res = "";
                var lastSegmentLength = 0;
                var lastSlash = -1;
                var dots = 0;
                var code;
                for (var i = 0; i <= path.length; ++i) {
                  if (i < path.length) code = path.charCodeAt(i);
                  else if (code === 47) break;
                  else code = 47;
                  if (code === 47) {
                    if (lastSlash === i - 1 || dots === 1) {
                    } else if (lastSlash !== i - 1 && dots === 2) {
                      if (res.length < 2 || lastSegmentLength !== 2 || res.charCodeAt(res.length - 1) !== 46 || res.charCodeAt(res.length - 2) !== 46) {
                        if (res.length > 2) {
                          var lastSlashIndex = res.lastIndexOf("/");
                          if (lastSlashIndex !== res.length - 1) {
                            if (lastSlashIndex === -1) {
                              res = "";
                              lastSegmentLength = 0;
                            } else {
                              res = res.slice(0, lastSlashIndex);
                              lastSegmentLength = res.length - 1 - res.lastIndexOf("/");
                            }
                            lastSlash = i;
                            dots = 0;
                            continue;
                          }
                        } else if (res.length === 2 || res.length === 1) {
                          res = "";
                          lastSegmentLength = 0;
                          lastSlash = i;
                          dots = 0;
                          continue;
                        }
                      }
                      if (allowAboveRoot) {
                        if (res.length > 0) res += "/..";
                        else res = "..";
                        lastSegmentLength = 2;
                      }
                    } else {
                      if (res.length > 0) res += "/" + path.slice(lastSlash + 1, i);
                      else res = path.slice(lastSlash + 1, i);
                      lastSegmentLength = i - lastSlash - 1;
                    }
                    lastSlash = i;
                    dots = 0;
                  } else if (code === 46 && dots !== -1) {
                    ++dots;
                  } else {
                    dots = -1;
                  }
                }
                return res;
              }
              function _format(sep, pathObject) {
                var dir = pathObject.dir || pathObject.root;
                var base = pathObject.base || (pathObject.name || "") + (pathObject.ext || "");
                if (!dir) {
                  return base;
                }
                if (dir === pathObject.root) {
                  return dir + base;
                }
                return dir + sep + base;
              }
              var posix = { resolve: function resolve() {
                var resolvedPath = "";
                var resolvedAbsolute = false;
                var cwd;
                for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
                  var path;
                  if (i >= 0) path = arguments[i];
                  else {
                    if (cwd === void 0) cwd = process.cwd();
                    path = cwd;
                  }
                  assertPath(path);
                  if (path.length === 0) {
                    continue;
                  }
                  resolvedPath = path + "/" + resolvedPath;
                  resolvedAbsolute = path.charCodeAt(0) === 47;
                }
                resolvedPath = normalizeStringPosix(resolvedPath, !resolvedAbsolute);
                if (resolvedAbsolute) {
                  if (resolvedPath.length > 0) return "/" + resolvedPath;
                  else return "/";
                } else if (resolvedPath.length > 0) {
                  return resolvedPath;
                } else {
                  return ".";
                }
              }, normalize: function normalize(path) {
                assertPath(path);
                if (path.length === 0) return ".";
                var isAbsolute = path.charCodeAt(0) === 47;
                var trailingSeparator = path.charCodeAt(path.length - 1) === 47;
                path = normalizeStringPosix(path, !isAbsolute);
                if (path.length === 0 && !isAbsolute) path = ".";
                if (path.length > 0 && trailingSeparator) path += "/";
                if (isAbsolute) return "/" + path;
                return path;
              }, isAbsolute: function isAbsolute(path) {
                assertPath(path);
                return path.length > 0 && path.charCodeAt(0) === 47;
              }, join: function join() {
                if (arguments.length === 0) return ".";
                var joined;
                for (var i = 0; i < arguments.length; ++i) {
                  var arg = arguments[i];
                  assertPath(arg);
                  if (arg.length > 0) {
                    if (joined === void 0) joined = arg;
                    else joined += "/" + arg;
                  }
                }
                if (joined === void 0) return ".";
                return posix.normalize(joined);
              }, relative: function relative(from, to) {
                assertPath(from);
                assertPath(to);
                if (from === to) return "";
                from = posix.resolve(from);
                to = posix.resolve(to);
                if (from === to) return "";
                var fromStart = 1;
                for (; fromStart < from.length; ++fromStart) {
                  if (from.charCodeAt(fromStart) !== 47) break;
                }
                var fromEnd = from.length;
                var fromLen = fromEnd - fromStart;
                var toStart = 1;
                for (; toStart < to.length; ++toStart) {
                  if (to.charCodeAt(toStart) !== 47) break;
                }
                var toEnd = to.length;
                var toLen = toEnd - toStart;
                var length = fromLen < toLen ? fromLen : toLen;
                var lastCommonSep = -1;
                var i = 0;
                for (; i <= length; ++i) {
                  if (i === length) {
                    if (toLen > length) {
                      if (to.charCodeAt(toStart + i) === 47) {
                        return to.slice(toStart + i + 1);
                      } else if (i === 0) {
                        return to.slice(toStart + i);
                      }
                    } else if (fromLen > length) {
                      if (from.charCodeAt(fromStart + i) === 47) {
                        lastCommonSep = i;
                      } else if (i === 0) {
                        lastCommonSep = 0;
                      }
                    }
                    break;
                  }
                  var fromCode = from.charCodeAt(fromStart + i);
                  var toCode = to.charCodeAt(toStart + i);
                  if (fromCode !== toCode) break;
                  else if (fromCode === 47) lastCommonSep = i;
                }
                var out = "";
                for (i = fromStart + lastCommonSep + 1; i <= fromEnd; ++i) {
                  if (i === fromEnd || from.charCodeAt(i) === 47) {
                    if (out.length === 0) out += "..";
                    else out += "/..";
                  }
                }
                if (out.length > 0) return out + to.slice(toStart + lastCommonSep);
                else {
                  toStart += lastCommonSep;
                  if (to.charCodeAt(toStart) === 47) ++toStart;
                  return to.slice(toStart);
                }
              }, _makeLong: function _makeLong(path) {
                return path;
              }, dirname: function dirname(path) {
                assertPath(path);
                if (path.length === 0) return ".";
                var code = path.charCodeAt(0);
                var hasRoot = code === 47;
                var end = -1;
                var matchedSlash = true;
                for (var i = path.length - 1; i >= 1; --i) {
                  code = path.charCodeAt(i);
                  if (code === 47) {
                    if (!matchedSlash) {
                      end = i;
                      break;
                    }
                  } else {
                    matchedSlash = false;
                  }
                }
                if (end === -1) return hasRoot ? "/" : ".";
                if (hasRoot && end === 1) return "//";
                return path.slice(0, end);
              }, basename: function basename(path, ext) {
                if (ext !== void 0 && typeof ext !== "string") throw new TypeError('"ext" argument must be a string');
                assertPath(path);
                var start = 0;
                var end = -1;
                var matchedSlash = true;
                var i;
                if (ext !== void 0 && ext.length > 0 && ext.length <= path.length) {
                  if (ext.length === path.length && ext === path) return "";
                  var extIdx = ext.length - 1;
                  var firstNonSlashEnd = -1;
                  for (i = path.length - 1; i >= 0; --i) {
                    var code = path.charCodeAt(i);
                    if (code === 47) {
                      if (!matchedSlash) {
                        start = i + 1;
                        break;
                      }
                    } else {
                      if (firstNonSlashEnd === -1) {
                        matchedSlash = false;
                        firstNonSlashEnd = i + 1;
                      }
                      if (extIdx >= 0) {
                        if (code === ext.charCodeAt(extIdx)) {
                          if (--extIdx === -1) {
                            end = i;
                          }
                        } else {
                          extIdx = -1;
                          end = firstNonSlashEnd;
                        }
                      }
                    }
                  }
                  if (start === end) end = firstNonSlashEnd;
                  else if (end === -1) end = path.length;
                  return path.slice(start, end);
                } else {
                  for (i = path.length - 1; i >= 0; --i) {
                    if (path.charCodeAt(i) === 47) {
                      if (!matchedSlash) {
                        start = i + 1;
                        break;
                      }
                    } else if (end === -1) {
                      matchedSlash = false;
                      end = i + 1;
                    }
                  }
                  if (end === -1) return "";
                  return path.slice(start, end);
                }
              }, extname: function extname(path) {
                assertPath(path);
                var startDot = -1;
                var startPart = 0;
                var end = -1;
                var matchedSlash = true;
                var preDotState = 0;
                for (var i = path.length - 1; i >= 0; --i) {
                  var code = path.charCodeAt(i);
                  if (code === 47) {
                    if (!matchedSlash) {
                      startPart = i + 1;
                      break;
                    }
                    continue;
                  }
                  if (end === -1) {
                    matchedSlash = false;
                    end = i + 1;
                  }
                  if (code === 46) {
                    if (startDot === -1) startDot = i;
                    else if (preDotState !== 1) preDotState = 1;
                  } else if (startDot !== -1) {
                    preDotState = -1;
                  }
                }
                if (startDot === -1 || end === -1 || preDotState === 0 || preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
                  return "";
                }
                return path.slice(startDot, end);
              }, format: function format(pathObject) {
                if (pathObject === null || typeof pathObject !== "object") {
                  throw new TypeError('The "pathObject" argument must be of type Object. Received type ' + typeof pathObject);
                }
                return _format("/", pathObject);
              }, parse: function parse(path) {
                assertPath(path);
                var ret = { root: "", dir: "", base: "", ext: "", name: "" };
                if (path.length === 0) return ret;
                var code = path.charCodeAt(0);
                var isAbsolute = code === 47;
                var start;
                if (isAbsolute) {
                  ret.root = "/";
                  start = 1;
                } else {
                  start = 0;
                }
                var startDot = -1;
                var startPart = 0;
                var end = -1;
                var matchedSlash = true;
                var i = path.length - 1;
                var preDotState = 0;
                for (; i >= start; --i) {
                  code = path.charCodeAt(i);
                  if (code === 47) {
                    if (!matchedSlash) {
                      startPart = i + 1;
                      break;
                    }
                    continue;
                  }
                  if (end === -1) {
                    matchedSlash = false;
                    end = i + 1;
                  }
                  if (code === 46) {
                    if (startDot === -1) startDot = i;
                    else if (preDotState !== 1) preDotState = 1;
                  } else if (startDot !== -1) {
                    preDotState = -1;
                  }
                }
                if (startDot === -1 || end === -1 || preDotState === 0 || preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
                  if (end !== -1) {
                    if (startPart === 0 && isAbsolute) ret.base = ret.name = path.slice(1, end);
                    else ret.base = ret.name = path.slice(startPart, end);
                  }
                } else {
                  if (startPart === 0 && isAbsolute) {
                    ret.name = path.slice(1, startDot);
                    ret.base = path.slice(1, end);
                  } else {
                    ret.name = path.slice(startPart, startDot);
                    ret.base = path.slice(startPart, end);
                  }
                  ret.ext = path.slice(startDot, end);
                }
                if (startPart > 0) ret.dir = path.slice(0, startPart - 1);
                else if (isAbsolute) ret.dir = "/";
                return ret;
              }, sep: "/", delimiter: ":", win32: null, posix: null };
              posix.posix = posix;
              module3.exports = posix;
            }).call(this);
          }).call(this, require2("_process"));
        }, { _process: 5 }], 5: [function(require2, module3, exports3) {
          var process = module3.exports = {};
          var cachedSetTimeout;
          var cachedClearTimeout;
          function defaultSetTimout() {
            throw new Error("setTimeout has not been defined");
          }
          function defaultClearTimeout() {
            throw new Error("clearTimeout has not been defined");
          }
          (function() {
            try {
              if (typeof setTimeout === "function") {
                cachedSetTimeout = setTimeout;
              } else {
                cachedSetTimeout = defaultSetTimout;
              }
            } catch (e) {
              cachedSetTimeout = defaultSetTimout;
            }
            try {
              if (typeof clearTimeout === "function") {
                cachedClearTimeout = clearTimeout;
              } else {
                cachedClearTimeout = defaultClearTimeout;
              }
            } catch (e) {
              cachedClearTimeout = defaultClearTimeout;
            }
          })();
          function runTimeout(fun) {
            if (cachedSetTimeout === setTimeout) {
              return setTimeout(fun, 0);
            }
            if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
              cachedSetTimeout = setTimeout;
              return setTimeout(fun, 0);
            }
            try {
              return cachedSetTimeout(fun, 0);
            } catch (e) {
              try {
                return cachedSetTimeout.call(null, fun, 0);
              } catch (e2) {
                return cachedSetTimeout.call(this, fun, 0);
              }
            }
          }
          function runClearTimeout(marker) {
            if (cachedClearTimeout === clearTimeout) {
              return clearTimeout(marker);
            }
            if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
              cachedClearTimeout = clearTimeout;
              return clearTimeout(marker);
            }
            try {
              return cachedClearTimeout(marker);
            } catch (e) {
              try {
                return cachedClearTimeout.call(null, marker);
              } catch (e2) {
                return cachedClearTimeout.call(this, marker);
              }
            }
          }
          var queue = [];
          var draining = false;
          var currentQueue;
          var queueIndex = -1;
          function cleanUpNextTick() {
            if (!draining || !currentQueue) {
              return;
            }
            draining = false;
            if (currentQueue.length) {
              queue = currentQueue.concat(queue);
            } else {
              queueIndex = -1;
            }
            if (queue.length) {
              drainQueue();
            }
          }
          function drainQueue() {
            if (draining) {
              return;
            }
            var timeout = runTimeout(cleanUpNextTick);
            draining = true;
            var len = queue.length;
            while (len) {
              currentQueue = queue;
              queue = [];
              while (++queueIndex < len) {
                if (currentQueue) {
                  currentQueue[queueIndex].run();
                }
              }
              queueIndex = -1;
              len = queue.length;
            }
            currentQueue = null;
            draining = false;
            runClearTimeout(timeout);
          }
          process.nextTick = function(fun) {
            var args = new Array(arguments.length - 1);
            if (arguments.length > 1) {
              for (var i = 1; i < arguments.length; i++) {
                args[i - 1] = arguments[i];
              }
            }
            queue.push(new Item(fun, args));
            if (queue.length === 1 && !draining) {
              runTimeout(drainQueue);
            }
          };
          function Item(fun, array) {
            this.fun = fun;
            this.array = array;
          }
          Item.prototype.run = function() {
            this.fun.apply(null, this.array);
          };
          process.title = "browser";
          process.browser = true;
          process.env = {};
          process.argv = [];
          process.version = "";
          process.versions = {};
          function noop() {
          }
          process.on = noop;
          process.addListener = noop;
          process.once = noop;
          process.off = noop;
          process.removeListener = noop;
          process.removeAllListeners = noop;
          process.emit = noop;
          process.prependListener = noop;
          process.prependOnceListener = noop;
          process.listeners = function(name) {
            return [];
          };
          process.binding = function(name) {
            throw new Error("process.binding is not supported");
          };
          process.cwd = function() {
            return "/";
          };
          process.chdir = function(dir) {
            throw new Error("process.chdir is not supported");
          };
          process.umask = function() {
            return 0;
          };
        }, {}] }, {}, [1])(1);
      });
    }
  });

  // ../package.json
  var version = "4.1.2";

  // rssfeed/js/rssfeed.js
  var translations = require_translations();
  $.extend(true, systemDictionary, translations);
  vis.binds["rssfeed"] = {
    version,
    /**
     * Log the version of rssfeed and remove it.
     * Should be called from the main thread, as it logs to the console.
     */
    showVersion: function() {
      if (vis.binds["rssfeed"].version) {
        console.log(`Version rssfeed: ${vis.binds["rssfeed"].version}`);
        vis.binds["rssfeed"].version = null;
      }
    },
    rssfeedmultiwidget3: {
      /**
       * Initializes and creates an RSS feed multi widget.
       *
       * @param widgetID - The ID of the widget element.
       * @param view - The view object containing widget information.
       * @param data - Contains configuration data for the widget, including feed and data point counts.
       * @param style - Style settings for the widget.
       *
       * The function checks for the widget element by its ID. If not found, it retries after a delay.
       * It processes the RSS feed and data point configurations, binding them if necessary.
       * Finally, it renders the widget with the provided data and style.
       */
      createWidget: function(widgetID, view, data, style) {
        const $div = $(`#${widgetID}`);
        if (!$div.length) {
          return setTimeout(function() {
            vis.binds["rssfeed"].rssfeedmultiwidget3.createWidget(widgetID, view, data, style);
          }, 100);
        }
        const feedCount = data.rss_feedCount ? data.rss_feedCount : 1;
        const dpCount = data.rss_dpCount ? data.rss_dpCount : 1;
        const bound = [];
        for (let i1 = 1; i1 <= dpCount; i1++) {
          if (data[`rss_dp${i1}`]) {
            bound.push(data[`rss_dp${i1}`]);
            console.debug("bound");
          }
        }
        for (let i = 1; i <= feedCount; i++) {
          const rss = data[`rss_oid${i}`] ? JSON.parse(vis.states.attr(`${data[`rss_oid${i}`]}.val`)) : {};
          if (!Object.prototype.hasOwnProperty.call(rss, "articles")) {
            continue;
          }
          bound.push(data[`rss_oid${i}`]);
        }
        function onChange(e, newVal) {
          if (newVal) {
            vis.binds["rssfeed"].rssfeedmultiwidget3.render(widgetID, data);
          }
        }
        if (bound.length > 0) {
          if (!vis.editMode) {
            vis.binds["rssfeed"].bindStates($div, bound, onChange);
          }
        }
        this.render(widgetID, data, style);
      },
      /**
       * Renders the RSS feed multi widget.
       *
       * @param widgetID - The ID of the widget element.
       * @param data - Contains configuration data for the widget, including feed and data point counts.
       * @param style - Style settings for the widget.
       *
       * The function renders the widget with the provided data and style.
       * It checks for the widget element by its ID. If not found, it retries after a delay.
       * It processes the RSS feed and data point configurations, binding them if necessary.
       * Finally, it renders the widget with the provided data and style.
       * If no articles are available, it shows a message.
       */
      render: function(widgetID, data, style) {
        const articles = [];
        const datapoints = [];
        const feedCount = data.rss_feedCount ? data.rss_feedCount : 1;
        const dpCount = data.rss_dpCount ? data.rss_dpCount : 1;
        for (let i1 = 1; i1 <= dpCount; i1++) {
          if (data[`rss_dp${i1}`]) {
            datapoints[data[`rss_dp${i1}`]] = vis.states.attr(`${data[`rss_dp${i1}`]}.val`);
          }
        }
        const defaulttemplate = `
<style>
  #<%- widgetid %> img {
    width: calc(<%- style.width || "230px" %> - 15px);
    height: auto;
  }
  #<%- widgetid %> img.rssfeed {
    width: auto;
    height: auto;
  }
</style>
<% rss.articles.forEach(function(item){ %>
<p><%- item.meta_name || item.meta_title || '' %></p>
<p><small><%- vis.formatDate(item.pubdate, "TT.MM.JJJJ SS:mm") %></small></p>
<h3><%- item.title %></h3>
<p><%- item.description %></p>
<div style="clear:both;" />
<% }); %>
                            `;
        const template = data["rss_template"] ? data["rss_template"].trim() ? data["rss_template"].trim() : defaulttemplate : defaulttemplate;
        for (let i = 1; i <= feedCount; i++) {
          const rss = data[`rss_oid${i}`] ? JSON.parse(vis.states.attr(`${data[`rss_oid${i}`]}.val`)) : {};
          if (!Object.prototype.hasOwnProperty.call(rss, "articles")) {
            continue;
          }
          const filter = data[`rss_filter${i}`] ? data[`rss_filter${i}`] : "";
          let maxarticles = data[`rss_maxarticles${i}`] ? data[`rss_maxarticles${i}`] : 999;
          maxarticles = maxarticles > 0 ? maxarticles : 1;
          const name = data[`rss_name${i}`] ? data[`rss_name${i}`] : "";
          if (rss && rss.articles && rss.articles.length > maxarticles) {
            rss.articles = rss.articles.slice(0, maxarticles);
          }
          if (filter != "") {
            rss.articles = rss.articles.filter((item) => {
              return vis.binds["rssfeed"].checkHighlite(
                item.title + item.description + item.categories.toString(),
                filter
              );
            });
          }
          rss.articles = rss.articles.map((item) => {
            item["meta_title"] = rss.meta.title;
            item["meta_description"] = rss.meta.description;
            item["meta_name"] = name;
            return item;
          });
          articles.push(rss.articles);
        }
        let collect = [];
        articles.forEach(function(item) {
          collect = collect.concat(item);
        });
        collect.sort(function(a, b) {
          return new Date(b.date) - new Date(a.date);
        });
        const meta = new Proxy(
          {},
          {
            get(target, name) {
              if (name == "title" || name == "description") {
                return `meta.${name} is not available please use RSS Feed widget. Read the widget help`;
              }
              return "meta is not available please use RSS Feed widget. Read the widget help.";
            }
          }
        );
        let text = "";
        try {
          if (collect.length == 0) {
            text = "articles is empty, please select a RSS feed datapoint.";
          } else {
            text = ejs.render(template, {
              rss: { articles: collect, meta },
              dp: datapoints,
              widgetid: widgetID,
              style
            });
          }
        } catch (e) {
          text = vis.binds["rssfeed"].escapeHTML(e.message).replace(/(?:\r\n|\r|\n)/g, "<br>");
          text = text.replace(/ /gm, "&nbsp;");
          text = `<code style="color:red;">${text}</code>`;
        }
        $(`#${widgetID}`).html(text);
      }
    },
    marquee5: {
      /**
       * Initializes and creates a marquee widget for displaying RSS feed titles.
       *
       * @param widgetID - The ID of the widget element.
       * @param view - The view object containing widget information.
       * @param data - Contains configuration data for the widget, including feed and display settings.
       * @param style - Style settings for the widget, such as color and background.
       *
       * The function checks for the widget element by its ID and retries if not found. It processes the RSS feed configurations,
       * binds states if necessary, applies styles and animations for the marquee effect, and renders the widget with the provided
       * data and styles.
       */
      createWidget: function(widgetID, view, data, style) {
        const $div = $(`#${widgetID}`);
        if (!$div.length) {
          return setTimeout(function() {
            vis.binds["rssfeed"].marquee5.createWidget(widgetID, view, data, style);
          }, 100);
        }
        const bound = [];
        const feedCount = data.rss_feedCount ? data.rss_feedCount : 1;
        const pauseonhover = data.rss_pauseonhover ? true : data.rss_pauseonhover;
        const frontcolor = style.color ? style.color : void 0;
        const backcolor = style["background-color"] ? style["background-color"] : void 0;
        const opentype = data.rss_opentype ? data.rss_opentype : "none";
        for (let i = 1; i <= feedCount; i++) {
          const rss = data[`rss_oid${i}`] ? JSON.parse(vis.states.attr(`${data[`rss_oid${i}`]}.val`)) : {};
          if (!Object.prototype.hasOwnProperty.call(rss, "articles")) {
            continue;
          }
          bound.push(data[`rss_oid${i}`]);
        }
        function onChange(e, newVal) {
          if (newVal) {
            vis.binds["rssfeed"].marquee5.render(widgetID, data);
          }
        }
        if (bound.length > 0) {
          if (!vis.editMode) {
            console.debug("bound");
            vis.binds["rssfeed"].bindStates($div, bound, onChange);
          }
        }
        let text = "";
        text += "<style> \n";
        text += `#${widgetID} .marquee {
`;
        text += "    max-width: 100vw; /* iOS braucht das */\n";
        text += "    white-space: nowrap;\n";
        text += "    overflow: hidden;\n";
        if (backcolor) {
          text += `    background-color: ${backcolor};
`;
        }
        text += "    font-size:20px;\n";
        text += "}\n";
        text += `#${widgetID} .marquee span {
`;
        text += "    display: inline-block;\n";
        text += "    padding-left: 100%;\n";
        text += `    animation: ${widgetID}marquee 100s linear infinite;
`;
        if (frontcolor) {
          text += `    color: ${frontcolor}; /* Textfarbe des Lauftextes */
`;
        }
        text += "}\n";
        if (pauseonhover) {
          text += "/* Optional: mouseover (oder Tipp auf dem Touchscreen) pausiert die Laufschrift */\n";
          text += `#${widgetID} .marquee span:hover {
`;
          text += "    animation-play-state: paused \n";
          text += "}\n";
        }
        text += "/* Make it move */\n";
        text += `@keyframes ${widgetID}marquee {
`;
        text += "    0%   { transform: translateX(0); }\n";
        text += "    100% { transform: translateX(-100%); }\n";
        text += "}\n";
        text += `#${widgetID} a {
`;
        text += "    text-decoration: none;";
        text += "    color: inherit;";
        text += "}\n";
        text += "</style> \n";
        text += `<div class="${widgetID} marquee"><span>test test test</span></div>`;
        if (opentype == "popup") {
          text += "<style> \n";
          text += `.${widgetID} .wrapper {
`;
          text += "    position: relative;";
          text += "    width: 100%;";
          text += "    height: 100%;";
          text += "}\n";
          text += `dialog.${widgetID} {
`;
          text += "    width: 90%;";
          text += "    height: 90%;";
          text += "    overflow: hidden;";
          text += "}\n";
          text += `iframe.${widgetID} {
`;
          text += "    position: absolute;";
          text += "    top: 0;";
          text += "    left: 0;";
          text += "    width: 100%;";
          text += "    height: 100%;";
          text += "}\n";
          text += `.${widgetID} .close {
`;
          text += "    position: absolute;";
          text += "    top: 8px;";
          text += "    right: 8px;";
          text += "    background-color: red;";
          text += "    color: #fff;";
          text += "    width: 30px;";
          text += "    height: 30px;";
          text += "    font-size: 1rem;";
          text += "    z-index: 999;";
          text += "}\n";
          text += "</style> \n";
          text += `<div class="${widgetID} wrapper">`;
          text += `    <dialog class="${widgetID}">`;
          text += `        <button class="${widgetID} close" onclick="document.querySelector('dialog.${widgetID}').close()">X</button>`;
          text += `        <iframe class="${widgetID}" src="" height="100%" width="100%"/>`;
          text += `        <div class="${widgetID} overlay"/>`;
          text += `    </dialog>`;
          text += `</div>`;
        }
        $(`#${widgetID}`).html(text);
        for (const attr in style) {
          if ("left,top,width,height".indexOf(attr) < 0 && style[attr] != "") {
            $(`#${widgetID} span`).css(attr, style[attr]);
          }
        }
        this.render(widgetID, data);
      },
      dialog: function(el, event, widgetID, link) {
        event.stopPropagation();
        let dialog = document.querySelector(`#${widgetID} dialog`);
        let iframe = document.querySelector(`#${widgetID} dialog iframe`);
        iframe.src = link;
        dialog.showModal();
      },
      /**
       * Renders the RSS feed articles into a marquee format.
       *
       * @param widgetID - The ID of the widget element.
       * @param data - Contains configuration data for the widget, such as feed count,
       *                        display options (time, date, year, name), divider, link option, and speed.
       *
       * This function processes multiple RSS feeds, applies filters and limits on articles,
       * and constructs a concatenated string of titles or links. It updates the animation duration
       * based on the total length of titles and sets the generated HTML content to the specified widget.
       */
      render: function(widgetID, data) {
        const articles = [];
        const feedCount = data.rss_feedCount ? data.rss_feedCount : 1;
        const rss_withtime = data.rss_withtime ? data.rss_withtime : false;
        const rss_withdate = data.rss_withdate ? data.rss_withdate : false;
        const rss_withyear = data.rss_withyear ? data.rss_withyear : false;
        const rss_withname = data.rss_withname ? data.rss_withname : false;
        const divider = data.rss_divider ? data.rss_divider : "+++";
        const opentype = data.rss_opentype ? data.rss_opentype : "none";
        const speed = data.rss_speed ? data.rss_speed : 6;
        for (let i = 1; i <= feedCount; i++) {
          const filter = data[`rss_filter${i}`] ? data[`rss_filter${i}`] : "";
          const rss = data[`rss_oid${i}`] ? JSON.parse(vis.states.attr(`${data[`rss_oid${i}`]}.val`)) : {};
          if (!Object.prototype.hasOwnProperty.call(rss, "articles")) {
            continue;
          }
          let maxarticles = data[`rss_maxarticles${i}`] ? data[`rss_maxarticles${i}`] : 999;
          maxarticles = maxarticles > 0 ? maxarticles : 1;
          const name = data[`rss_name${i}`] ? data[`rss_name${i}`] : "";
          if (filter) {
            rss.articles = rss.articles.filter((item) => {
              return vis.binds["rssfeed"].checkHighlite(
                item.title + item.description + item.categories.toString(),
                filter
              );
            });
          }
          if (rss && rss.articles && rss.articles.length > maxarticles) {
            rss.articles = rss.articles.slice(0, maxarticles);
          }
          rss.articles = rss.articles.map((item) => {
            item["meta_title"] = rss.meta.title;
            item["meta_description"] = rss.meta.description;
            item["meta_name"] = name;
            item["meta_image"] = rss.meta.image.url ? rss.meta.image.url : "";
            return item;
          });
          articles.push(rss.articles);
        }
        let collect = [];
        articles.forEach(function(item) {
          collect = collect.concat(item);
        });
        collect.sort(function(a, b) {
          return new Date(b.date) - new Date(a.date);
        });
        let titles = "";
        let titleslength = 0;
        if (collect && collect.length > 0) {
          titles = collect.reduce(function(t, item) {
            let time = "";
            titleslength += item.title.length;
            if (rss_withtime) {
              time = vis.formatDate(item.date, "hh:mm");
            }
            if (rss_withdate) {
              time = vis.formatDate(item.date, "DD.MM/hh:mm");
            }
            if (rss_withyear) {
              time = vis.formatDate(item.date, "DD.MM.YY/hh:mm");
            }
            const source = rss_withname ? `${item.meta_name || item.meta_title}: ` : "";
            let title;
            if (opentype === "link") {
              title = `<a href="${item.link}" target="rssarticle">${time} ${item.title}</a>`;
            } else if (opentype === "popup") {
              title = `<a onclick="vis.binds.rssfeed.marquee5.dialog(this,event,'${widgetID}','${item.link}')">${time} ${item.title}</a>`;
            } else {
              title = item.title;
            }
            t += ` ${divider} ${time} ${source}${title}`;
            return t;
          }, titles);
          const duration = (titleslength / speed).toFixed();
          $(`#${widgetID} .marquee span`).css("animation-duration", `${duration}s`);
          $(`#${widgetID} .marquee span`).html(titles);
        }
      }
    },
    rssfeedwidget2: {
      /**
       * Create the widget content
       *
       * @param widgetID - the id of the widget
       * @param view - the view object
       * @param data - the data object
       * @param style - the style object
       */
      createWidget: function(widgetID, view, data, style) {
        const $div = $(`#${widgetID}`);
        if (!$div.length) {
          return setTimeout(function() {
            vis.binds["rssfeed"].rssfeedwidget2.createWidget(widgetID, view, data, style);
          }, 100);
        }
        const rss = data.rss_oid ? JSON.parse(vis.states.attr(`${data.rss_oid}.val`)) : {};
        const defaulttemplate = `
<!--
 available variables:
 widgetid      ->  id of the widget 
 rss.meta      ->  all meta informations of an feed, details see Meta Helper widget 
 rss.articles  ->  all articles as array, details see Article Helper widget 
 style         ->  all style settings for the widget
 
 all variables are read only
-->
<style>
#<%- widgetid %> img {
    width: calc(<%- style.width || "230px" %> - 15px);
    height: auto;
}
#<%- widgetid %> img.rssfeed  {
    width: auto;
    height: auto;
}

</style>
<p><%- rss.meta.title %> </p>
<% rss.articles.forEach(function(item){ %>
    <div class="article">
    <p><small><%- vis.formatDate(item.pubdate, "TT.MM.JJJJ SS:mm") %></small></p>    
    <h3><%- item.title %></h3>
    <p><%- item.description %></p>
    <div style="clear:both;"></div>
</div>
<% }); %> 
        `;
        const errortemplate = `
            No Object ID set
            `;
        const template = data.rss_template ? data.rss_template : defaulttemplate;
        const filter = data.rss_filter ? data.rss_filter : "";
        let maxarticles = data.rss_maxarticles ? data.rss_maxarticles : 999;
        maxarticles = maxarticles > 0 ? maxarticles : 1;
        if (rss && rss.articles && rss.articles.length > maxarticles) {
          rss.articles = rss.articles.slice(0, maxarticles);
        }
        if (filter != "") {
          rss.articles = rss.articles.filter(function(item) {
            return vis.binds["rssfeed"].checkHighlite(
              item.title + item.description + item.categories.toString(),
              filter
            );
          });
        }
        function onChange(e, newVal) {
          if (newVal) {
            vis.binds["rssfeed"].rssfeedwidget2.createWidget(widgetID, view, data, style);
          }
        }
        if (data.rss_oid) {
          if (!vis.editMode) {
            vis.binds["rssfeed"].bindStates($div, [data.rss_oid], onChange);
          }
        }
        let text = "";
        try {
          if (typeof rss.meta == "undefined") {
            text = ejs.render(errortemplate, rss);
          } else {
            text = ejs.render(template, { rss, widgetid: widgetID, style });
          }
        } catch (e) {
          text = vis.binds["rssfeed"].escapeHTML(e.message).replace(/(?:\r\n|\r|\n)/g, "<br>");
          text = text.replace(/ /gm, "&nbsp;");
          text = `<code style="color:red;">${text}</code>`;
        }
        $(`#${widgetID}`).html(text);
      }
    },
    metahelper: {
      /**
       * Creates the content of the meta helper widget.
       *
       * @param widgetID - the id of the widget
       * @param view - the view object
       * @param data - the data object
       * @param style - the style object
       *
       * The function waits until the widget HTML element is available and creates its content.
       * It retrieves data associated with the JSON object ID and additional data points.
       * It then uses this data to create a table containing the meta information of the feed.
       * Finally, it updates the widget's HTML content with the rendered table.
       */
      createWidget: function(widgetID, view, data, style) {
        const $div = $(`#${widgetID}`);
        if (!$div.length) {
          return setTimeout(function() {
            vis.binds["rssfeed"].metahelper.createWidget(widgetID, view, data, style);
          }, 100);
        }
        const rss = data.rss_oid ? JSON.parse(vis.states.attr(`${data.rss_oid}.val`)) : {};
        function onChange(e, newVal) {
          if (newVal) {
            vis.binds["rssfeed"].metahelper.createWidget(widgetID, view, data, style);
          }
        }
        if (data.rss_oid) {
          if (!vis.editMode) {
            vis.binds["rssfeed"].bindStates($div, [data.rss_oid], onChange);
          }
        }
        let text = "";
        text += "<style> \n";
        text += `#${widgetID} .rssfeed th {
`;
        text += "   white-space: nowrap;\n";
        text += "   text-align: left;\n";
        text += "   vertical-align: top;\n";
        text += "} \n";
        text += "</style> \n";
        text += '<table class="rssfeed attributes">';
        text += `<tr><th>meta.title</th><td>${rss.meta.title}</td></tr>`;
        text += `<tr><th>meta.description</th><td>${rss.meta.description}</td></tr>`;
        text += `<tr><th>meta.link</th><td>${rss.meta.link}</td></tr>`;
        text += `<tr><th>meta.xmlurl</th><td>${rss.meta.xmlurl}</td></tr>`;
        text += `<tr><th>meta.date</th><td>${rss.meta.date}</td></tr>`;
        text += `<tr><th>meta.pubdate</th><td>${rss.meta.pubdate}</td></tr>`;
        text += `<tr><th>meta.author</th><td>${rss.meta.author}</td></tr>`;
        text += `<tr><th>meta.language</th><td>${rss.meta.language}</td></tr>`;
        text += `<tr><th>meta.image.url</th><td>${rss.meta.image.url}</td></tr>`;
        text += `<tr><th>meta.image.title</th><td>${rss.meta.image.title}</td></tr>`;
        text += `<tr><th>meta.favicon</th><td>${rss.meta.favicon}</td></tr>`;
        text += `<tr><th>meta.copyright</th><td>${rss.meta.copyright}</td></tr>`;
        text += `<tr><th>meta.generator</th><td>${rss.meta.generator}</td></tr>`;
        text += `<tr><th>meta.categories</th><td>${rss.meta.categories.toString()}</td></tr>`;
        text += "</table>";
        $(`#${widgetID}`).html(text);
      }
    },
    articlehelper2: {
      /**
       * This function creates a widget that displays the properties of an RSS feed article.
       * It is called from the vis.binds['rssfeed'].articlehelper2.createWidget function.
       * It is used as a state change callback for the data point binding.
       * It is called whenever the value of the bound data point changes.
       * If the new value is truthy, it recreates the widget content.
       *
       * @param widgetID - the id of the widget
       * @param view - the vis.view object
       * @param data - the vis.data object
       * @param style - the vis.style object
       */
      createWidget: function(widgetID, view, data, style) {
        const $div = $(`#${widgetID}`);
        if (!$div.length) {
          return setTimeout(function() {
            vis.binds["rssfeed"].articlehelper2.createWidget(widgetID, view, data, style);
          }, 100);
        }
        const rss = data.rss_oid ? JSON.parse(vis.states.attr(`${data.rss_oid}.val`)) : {};
        const prefix = data.rss_prefix ? data.rss_prefix : "item";
        let article = data.rss_article ? data.rss_article : 1;
        article = article > 0 ? article : 1;
        function onChange(e, newVal) {
          if (newVal) {
            vis.binds["rssfeed"].articlehelper2.createWidget(widgetID, view, data, style);
          }
        }
        if (data.rss_oid) {
          if (!vis.editMode) {
            vis.binds["rssfeed"].bindStates($div, [data.rss_oid], onChange);
          }
        }
        const item = rss.articles[article - 1];
        let text = "";
        if (item) {
          text += "<style> \n";
          text += `#${widgetID} .rssfeed th {
`;
          text += "   white-space: nowrap;\n";
          text += "   text-align: left;\n";
          text += "   vertical-align: top;\n";
          text += "} \n";
          text += "</style> \n";
          text += '<table class="rssfeed attributes">';
          text += `<tr><th>${prefix}.title</th><td>${item.title}</td></tr>`;
          text += `<tr><th>${prefix}.description</th><td>${item.description}</td></tr>`;
          text += `<tr><th>${prefix}.summary</th><td>${item.summary}</td></tr>`;
          text += `<tr><th>${prefix}.link</th><td>${item.link}</td></tr>`;
          text += `<tr><th>${prefix}.origlink</th><td>${item.origlink}</td></tr>`;
          text += `<tr><th>${prefix}.permalink</th><td>${item.permalink}</td></tr>`;
          text += `<tr><th>${prefix}.date</th><td>${item.date}</td></tr>`;
          text += `<tr><th>${prefix}.pubdate</th><td>${item.pubdate}</td></tr>`;
          text += `<tr><th>${prefix}.author</th><td>${item.author}</td></tr>`;
          text += `<tr><th>${prefix}.guid</th><td>${item.guid}</td></tr>`;
          text += `<tr><th>${prefix}.comments</th><td>${item.comments}</td></tr>`;
          text += `<tr><th>${prefix}.image.url</th><td>${item.image.url}</td></tr>`;
          text += `<tr><th>${prefix}.image.title</th><td>${item.image.title}</td></tr>`;
          text += `<tr><th>${prefix}.categories</th><td>${item.categories}</td></tr>`;
          text += `<tr><th>${prefix}.source</th><td>${JSON.stringify(item.source)}</td></tr>`;
          text += `<tr><th>${prefix}.enclosures</th><td>${JSON.stringify(item.enclosures)}</td></tr>`;
          text += "</table>";
        } else {
          text += '<table class="rssfeed attributes">';
          text += `<tr><th>No Data. End of List of ${rss.articles.length} Articles</th></tr>`;
          text += "</table>";
        }
        $(`#${widgetID}`).html(text);
      }
    },
    /**
     * Check if any of the highlights is in the value.
     *
     * @param value - the value to be checked
     * @param highlights - semicolon separated list of highlights
     * @param [sep] - the separator to split the highlights
     * @returns true if any of the highlights is in the value
     */
    checkHighlite: function(value, highlights, sep) {
      sep = typeof sep !== "undefined" ? sep : ";";
      const highlight = highlights.split(sep);
      return highlight.reduce(function(acc, cur) {
        if (cur == "") {
          return acc;
        }
        return acc || value.toLowerCase().indexOf(cur.toLowerCase()) >= 0;
      }, false);
    },
    /**
     * Bind states to an element.
     *
     * First unbind all previously bound states and then get the current values of the states.
     * Then subscribe to the states and bind the callback to the states.
     * Finally, update the states of the element.
     *
     * @param elem - the element to bind the states to
     * @param bound - the states to bind
     * @param change_callback - the callback to call if one of the states changes
     */
    bindStates: function(elem, bound, change_callback) {
      const $div = $(elem);
      const boundstates = $div.data("bound");
      if (boundstates) {
        for (let i = 0; i < boundstates.length; i++) {
          vis.states.unbind(boundstates[i], change_callback);
        }
      }
      $div.data("bound", null);
      $div.data("bindHandler", null);
      vis.conn.gettingStates = 0;
      vis.conn.getStates(
        bound,
        function(error, states) {
          vis.conn.subscribe(bound);
          $div.data("bound", bound);
          $div.data("bindHandler", change_callback);
          for (let i = 0; i < bound.length; i++) {
            bound[i] = `${bound[i]}.val`;
            vis.states.bind(bound[i], change_callback);
          }
          vis.updateStates(states);
        }.bind({ change_callback })
      );
    },
    /**
     * Escapes HTML special characters in a given string.
     *
     * @param html - The string to escape.
     * @returns The escaped string.
     */
    escapeHTML: function(html) {
      let escapeEl = document.createElement("textarea");
      escapeEl.textContent = html;
      const ret = escapeEl.innerHTML;
      escapeEl = null;
      return ret;
    },
    /**
     * Shows a dialog for editing a template.
     *
     * @param widAttr - The attribute of the widget to edit.
     * @returns A object with two properties: 'input' and 'button'. 'input' is a string containing the HTML of a
     *      'textarea' element with id 'inspect_<widAttr>'. 'button' is an object with properties 'icon', 'text', 'title',
     *      'click'. 'click' is a function which is called when the button is clicked. The function shows a dialog with
     *      the 'textarea' element. The dialog has a 'save' and a 'cancel' button. The 'save' button saves the changes to
     *      the attribute and closes the dialog. The 'cancel' button just closes the dialog.
     */
    editEjs: function(widAttr) {
      const that = vis;
      const line = {
        input: `<textarea id="inspect_${widAttr}"></textarea>`
      };
      line.button = {
        icon: "ui-icon-note",
        text: false,
        title: _("Select color"),
        click: function() {
          const wdata = $(this).data("wdata");
          let data = {};
          if (that.config["dialog-edit-text"]) {
            data = JSON.parse(that.config["dialog-edit-text"]);
          }
          ace.config.setModuleUrl("ace/mode/ejs", "widgets/rssfeed/js/mode-ejs.js");
          const editor = ace.edit("dialog-edit-text-textarea");
          let changed = false;
          $("#dialog-edit-text").dialog({
            autoOpen: true,
            width: data.width || 800,
            height: data.height || 600,
            modal: true,
            resize: function() {
              editor.resize();
            },
            open: function(event) {
              $(event.target).parent().find(".ui-dialog-titlebar-close .ui-button-text").html("");
              $(this).parent().css({ "z-index": 1e3 });
              if (data.top !== void 0) {
                if (data.top >= 0) {
                  $(this).parent().css({ top: data.top });
                } else {
                  $(this).parent().css({ top: 0 });
                }
              }
              if (data.left !== void 0) {
                if (data.left >= 0) {
                  $(this).parent().css({ left: data.left });
                } else {
                  $(this).parent().css({ left: 0 });
                }
              }
              editor.getSession().setMode("ace/mode/ejs");
              editor.setOptions({
                enableBasicAutocompletion: true,
                enableLiveAutocompletion: true
              });
              editor.$blockScrolling = Infinity;
              editor.getSession().setUseWrapMode(true);
              editor.setValue($(`#inspect_${wdata.attr}`).val());
              editor.navigateFileEnd();
              editor.focus();
              editor.getSession().on("change", function() {
                changed = true;
              });
            },
            beforeClose: function() {
              const $parent = $("#dialog-edit-text").parent();
              const pos = $parent.position();
              that.editSaveConfig(
                "dialog-edit-text",
                JSON.stringify({
                  top: pos.top > 0 ? pos.top : 0,
                  left: pos.left > 0 ? pos.left : 0,
                  width: $parent.width(),
                  height: $parent.height() + 9
                })
              );
              if (changed) {
                if (!window.confirm(_("Changes are not saved!. Continue?"))) {
                  return false;
                }
              }
            },
            buttons: [
              {
                text: _("Ok"),
                click: function() {
                  $(`#inspect_${wdata.attr}`).val(editor.getValue()).trigger("change");
                  changed = false;
                  $(this).dialog("close");
                }
              },
              {
                text: _("Cancel"),
                click: function() {
                  $(this).dialog("close");
                }
              }
            ]
          }).show();
        }
      };
      return line;
    }
  };
  vis.binds["rssfeed"].showVersion();

  // rssfeed/js/bundle.js
  var import_ejs_min = __toESM(require_ejs_min());
})();
//# sourceMappingURL=bundle.js.map
