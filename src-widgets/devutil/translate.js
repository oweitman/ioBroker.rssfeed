// const fs = require("node:fs");
// const path = require("path");

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'url';
import { createRequire } from "module";
const require = createRequire(import.meta.url);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let langTemplate = {
    "en": {},
    "de": {},
    "ru": {},
    "pt": {},
    "nl": {},
    "fr": {},
    "it": {},
    "es": {},
    "pl": {},
    "uk": {},
    "zh-cn": {}
};
let i18npath = '../src/i18n';

function importi18nKeys() {
    // importiere alle json dateien, die in einem bestimmten verzeichnis liegen
    const i18n = {};
    const dir = path.resolve(__dirname, i18npath);
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const filePath = `${dir}/${file}`;
        if (fs.statSync(filePath).isFile() && filePath.endsWith('.json')) {
            i18n[file.replace('.json', '')] = require(filePath);
        }
    }
    return i18n;
}
function exporti18nKeys(i18n) {
    const dir = path.resolve(__dirname, i18npath);
    for (const lang in i18n) {
        const json = JSON.stringify(i18n[lang], null, 4);
        const filePath = `${dir}/${lang}.json`;
        fs.writeFileSync(filePath, json);
    }
}
function extendLanguages(i18n) {
    return { ...langTemplate, ...i18n };
}
function extendLanguageKeysFromLang(i18n, lang) {
    let obj = createObjectFromKeys(Object.keys(i18n[lang]));
    for (const key in i18n) {
        i18n[key] = { ...obj, ...i18n[key] };
    }
    return i18n;
}
function createObjectFromKeys(keyNames) {
    const obj = {};
    keyNames.forEach((key) => {
        if (key !== "") obj[key] = "";
    });
    return obj;
}
function isKeyEmptyInAnyLanguage(i18n, key) {
    if (key === "") return false;
    for (const lang in i18n) {
        if (i18n[lang][key] === "") {
            console.log(`Key ${key} is empty in ${lang}`);
            return true;
        }
    }
    return false;
}
async function updateEmptyKeysWithTranslation(i18n, lang) {
    for (const key in i18n[lang]) {
        if (isKeyEmptyInAnyLanguage(i18n, key)) {
            let translatedKey = await fetchTranslations(i18n[lang][key]);
            for (const k in translatedKey) {
                if (i18n[k][key] === "") i18n[k][key] = translatedKey[k];
            }
        }
    }
    return i18n;
}

async function fetchTranslations(word) {
    console.log("translate " + word);
    const response = await fetch("https://oz7q7o4tl3.execute-api.eu-west-1.amazonaws.com/", {
        "headers": {
            "Referer": "https://translator-ui.iobroker.in/",
        },
        "body": JSON.stringify({ "text": word, "together": false }),
        "method": "POST"
    });
    const data = await response.json();
    return data;
}
function deleteKeys(i18n, keys) {
    keys.forEach((key) => {
        for (const lang in i18n) {
            if (lang === "en") continue;
            if (i18n[lang][key] !== undefined) {
                delete i18n[lang][key];
            }
        }
    });
    return i18n;
}
function emptyKeys(i18n, keys) {
    keys.forEach((key) => {
        for (const lang in i18n) {
            if (lang === "en") continue;
            if (i18n[lang][key] !== undefined) {
                i18n[lang][key] = "";
            }
        }
    });
    return i18n;
}
function emptyLang(i18n, lang) {
    for (const key in i18n[lang]) {
        if (i18n[lang][key] !== undefined) {
            i18n[lang][key] = "";
        }
    }
    return i18n;
}
async function main() {
    let args = process.argv.slice(2);
    if (args.length === 0) {
        doTranslate();
        return;
    }
    if (args[0] === "deletekey") {
        args.shift();
        doDeleteKeys(args);
    }
    if (args[0] === "emptykey") {
        args.shift();
        doEmptyKeys(args);
    }
    if (args[0] === "emptylang") {
        args.shift();
        doEmptyLang(args);
    }
}
function doEmptyLang(args) {
    console.log("start empty lang");
    if (args.length !== 1) {
        console.log("Only one language is supported");
        return;
    }
    if (args.length > 0) {
        let lang = args[0].trim();
        if (lang === "en") {
            console.log("empty of en not allowed");
            return;
        }
        let i18n = importi18nKeys();
        i18n = emptyLang(i18n, lang);
        exporti18nKeys(i18n);
    }
    console.log("end empty lang");
}
function doEmptyKeys(args) {
    console.log("start empty keys");
    if (args.length > 1) args[0] = args.join(",");
    if (args.length > 0) {
        let keys = args[0].split(",");
        keys = keys.map(k => k.trim());
        let i18n = importi18nKeys();
        i18n = emptyKeys(i18n, keys);
        exporti18nKeys(i18n);
    }
    console.log("end empty keys");
}
function doDeleteKeys(args) {
    console.log("start delete keys");
    if (args.length > 1) args[0] = args.join(",");
    if (args.length > 0) {
        let keys = args[0].split(",");
        keys = keys.map(k => k.trim());
        let i18n = importi18nKeys();
        i18n = deleteKeys(i18n, keys);
        exporti18nKeys(i18n);
    }
    console.log("end delete keys");
}
async function doTranslate() {
    console.log("start translate");
    let i18n = importi18nKeys();
    i18n = extendLanguages(i18n);
    i18n = extendLanguageKeysFromLang(i18n, "en");
    i18n = await updateEmptyKeysWithTranslation(i18n, "en")
    exporti18nKeys(i18n);
    console.log("end translate");
}
main();
