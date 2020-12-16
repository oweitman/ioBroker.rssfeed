/***
 * Copyright 2018-2019 bluefox <dogafox@gmail.com>
 *
 * MIT License
 *
 ***/
import I18n from "@iobroker/adapter-react/i18n";
/**
  * Translation string management.
  */
class I18nd extends I18n {
    static used = {};
    static notrans = {};
    static transfiles = {};

    /**
     * Translate the given string to the selected language.
     * @param {string} word The (key) word to look up the string.
     * @param {string[]} args Optional arguments which will replace the first (second, third, ...) occurence of %s
     */
    static t(word, ...args) {
        const translation = I18n.translations[I18n.lang];
        if (!this.used[I18n.lang]) this.used[I18n.lang] = {};
        if (!this.notrans[I18n.lang]) this.notrans[I18n.lang] = {};
        if (translation) {
            const w = translation[word];
            if (w) {
                this.used[I18n.lang][word]=word;
                word = w;
            } else {
                this.notrans[I18n.lang][word]=word;
                console.log(`Translate: ${word}`);
            }
        }
        for (const arg of args) {
            word = word.replace("%s", arg);
        }
        return word;
    }
    static getUsed() {
        console.log("Output used:");
        console.log(JSON.stringify(this.used));
    }
    static getNoTranslation() {
        console.log("Output not translated:");
        console.log(JSON.stringify(this.notrans));
    }
    static getTranslationfiles() {
        this.transfiles = {
            "en": require("./i18n/en.json"),
            "de": require("./i18n/de.json"),
            "ru": require("./i18n/ru.json"),
            "pt": require("./i18n/pt.json"),
            "nl": require("./i18n/nl.json"),
            "fr": require("./i18n/fr.json"),
            "it": require("./i18n/it.json"),
            "es": require("./i18n/es.json"),
            "pl": require("./i18n/pl.json"),
            "zh-cn": require("./i18n/zh-cn.json")
        };
    }
    static getUnused() {
        const unused={};
        if (Object.keys(this.transfiles).length==0) this.getTranslationfiles();
        if (!this.used[I18n.lang]) this.used[I18n.lang]={};
        if (!unused[I18n.lang]) unused[I18n.lang]={};
        Object.keys(this.transfiles[I18n.lang]).forEach(key=>{

            (!this.used[I18n.lang][key])?unused[I18n.lang][key]=this.transfiles[I18n.lang][key]:false;
        });
        console.log("Output unused:");
        console.log(JSON.stringify(unused));
    }
}

export default I18nd;