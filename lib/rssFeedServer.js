/* xxeslint-disable no-var */
/*jshint -W069 */
const chardet = require("chardet");
const iconv = require("iconv-lite");
const { Transform } = require("stream");
const FeedParser = require("feedparser");
const request = require("request"); // for fetching the feed

function rssfeedclass(adapter) {

    this.stateTemplate = {
        "rss": {
            name: "rss",
            read: true,
            write: false,
            type: "string",
            role: "value"
        },
    };

    this.sbRssFeedStatus = {
        "lastRequest": {
            name: "lastRequest",
            read: true,
            write: false,
            type: "string",
            role: "value",
            exist: false
        },
        "forceRefresh": {
            name: "forceRefresh",
            read: true,
            write: true,
            type: "boolean",
            role: "button",
            def: false,
            exist: false
        }
    };

    this.defmeta = [
        "title",
        "description",
        "link",
        "xmlurl",
        "date",
        "pubdate",
        "author",
        "language",
        "image",
        "favicon",
        "copyright",
        "generator",
        "categories"
    ];

    this.defarticle = [
        "title",
        "description",
        "summary",
        "link",
        "origlink",
        "permalink",
        "date",
        "pubdate",
        "author",
        "guid",
        "comments",
        "image",
        "categories",
        "source",
        "enclosures"
    ];
    this.adapter = adapter;
    this.log = {};
    this.islogsilly = false;
    this.islogdebug = true;
    this.observers = [];
    this.RssFeedPath = "info";

    this.debug = false;

    this.init = function () {
        this.logdebug("init");
        this.setState("connection", true, this.RssFeedPath);
        this.initCmdStates(this.doObserver.bind(this));
    };
    this.initCmdStates = function (callback) {
        this.logdebug("initCmdStates");
        const key = "forceRefresh";
        let stateTemplate = this.sbRssFeedStatus[key];
        if (!stateTemplate.exist) {

            this.createObject(stateTemplate, this.RssFeedPath);
            this.sbRssFeedStatus[key].exist = true;
        }
        stateTemplate = JSON.parse(JSON.stringify(this.sbRssFeedStatus["lastRequest"]));
        this.createObject(stateTemplate, this.RssFeedPath, false, () => {
            //this.createObject(stateTemplate,this.RssFeedPath,false,function(){
            this.getState(stateTemplate.name, this.RssFeedPath, false, (err, state) => {
                if (state == null) {
                    this.setState(stateTemplate.name, "{}", this.RssFeedPath, false, callback);
                } else {
                    callback();
                }
            });
        });
    };
    this.doObserver = function () {
        this.logdebug("doObserver");
        this.getData();
        this.setTimeout("doObserver", this.doObserver.bind(this), 60 * 1000); //production every minute
        //this.setTimeout('doObserver',this.doObserver.bind(this),1000); //test every second
    };
    this.getData = function (force = false) {
        this.logdebug("getData started");
        const stateTemplate = JSON.parse(JSON.stringify(this.sbRssFeedStatus["lastRequest"]));
        this.getState(stateTemplate.name, this.RssFeedPath, false, (err, state) => {
            const rss = (typeof this.adapter.config.rss == "object") ? this.adapter.config.rss : JSON.parse(this.adapter.config.rss || "[]");
            //var lastrequestdata = JSON.parse(state.val);
            const lastrequestdata = JSON.parse(state.val || "{}");
            rss.forEach((item, index, rss) => {
                let lastrequest = lastrequestdata[item.name] || 0;
                // @ts-ignore
                if (this.debug || force) lastrequest = 0;
                if (lastrequest + (item.refresh * 60 * 1000) < Date.now()) {
                    lastrequestdata[item.name] = Date.now();
                    // @ts-ignore
                    if (index == rss.length - 1) this.setState(stateTemplate.name, JSON.stringify(lastrequestdata), this.RssFeedPath);
                    // @ts-ignore
                    this.logdebug("getData settimeout in");
                    setTimeout(function () {
                        // @ts-ignore
                        this.logdebug("getData settimeout out");
                        // @ts-ignore
                        this.request(item.url, item.maxarticles || this.adapter.config.maxarticles, function (item, err, data) {
                            if (!err) {
                                // @ts-ignore
                                this.logdebug("got articles #: " + data.articles.length + " from " + item.name);
                                // @ts-ignore
                                const stateTemplate = JSON.parse(JSON.stringify(this.stateTemplate["rss"]));
                                stateTemplate.name = item.name;

                                // @ts-ignore
                                this.createObject(stateTemplate, item.cat, false, () => {
                                    // @ts-ignore
                                    this.setState(stateTemplate.name, JSON.stringify(data), item.cat);
                                });
                            }
                            // @ts-ignore
                        }.bind(this, item));
                        // @ts-ignore
                    }.bind(this), (100 * index) + 100);
                } else {
                    // @ts-ignore
                    this.logdebug("getData wait: " + item.name);
                }
            });
        });
    };
    this.compareArticles = function (articles1, articles2) {
        this.logdebug("compareArticles");
        if (articles1.length != articles2.length) return false;
        for (let i = 0; i < articles1.length; i++) {
            if (articles1[i].title + articles1[i].description != articles2[i].title + articles2[i].description) return false;
        }
        return true;
    };
    this.setLastRequest = function (item, lastrequest) {
        this.logdebug("setLastRequest start");
        const rss = JSON.parse(this.adapter.config.rss);
        const index = rss.findIndex(el => el.name == item.name);
        rss[index].lastrequest = lastrequest;
        this.adapter.config.rss = JSON.stringify(rss);
        this.logdebug("setLastRequest end");
    };
    this.stateChange = function (id, state) {
        this.logdebug("stateChange " + id);
        // Warning, state can be null if it was deleted
        if (!id || !state || state.ack) {
            return;
        }
        const idParts = id.split(".");
        idParts.shift();
        idParts.shift();
        if (idParts[0] == this.RssFeedPath) this.doServerStateChange(idParts, state);
    };
    this.doServerStateChange = function (idParts, state) {
        this.logdebug("doServerStateChange");
        idParts.shift();
        if (idParts[0] == "forceRefresh") {
            if (state.val == true) this.getData(true);
        }
    };
    this.request = function (url, maxarticles, request_cb) {
        this.logdebug("request: " + url);
        const that = this;
        const data = {};
        let counter = 0;
        let mybuffer = Buffer.from("");
        const transformEncoding = new Transform({
            transform(chunk, encoding, transform_cb) {
                // @ts-ignore
                this.that.logdebug("transform get chunk: " + this.url + ",size: " + chunk.length);
                // @ts-ignore
                if ((chunk.length + mybuffer.length) < 100000 && this.enctype == "") {
                    mybuffer = Buffer.concat([mybuffer, chunk]);
                    transform_cb();
                    return;
                } else {
                    chunk = Buffer.concat([mybuffer, chunk]);
                    mybuffer = Buffer.from("");
                    // @ts-ignore
                    this.process(chunk, transform_cb);
                }
            },
            flush(flush_cb) {
                // @ts-ignore
                this.process(mybuffer, flush_cb);
            }
        });
        // @ts-ignore
        transformEncoding.chardet = chardet;
        // @ts-ignore
        transformEncoding.iconv = iconv;
        // @ts-ignore
        transformEncoding.enctype = "";
        // @ts-ignore
        transformEncoding.that = this;
        // @ts-ignore
        transformEncoding.url = url;
        // @ts-ignore
        transformEncoding.process = function (chunk, process_cb) {
            // @ts-ignore
            transformEncoding.that.logdebug("process chunk " + transformEncoding.url);
            // @ts-ignore
            this.enctype = this.enctype || this.chardet.detect(chunk) || "UTF-8";
            // @ts-ignore
            transformEncoding.that.logdebug("process enctype: " + this.enctype);
            // @ts-ignore
            const temp = this.iconv.decode(Buffer.from(chunk), this.enctype);
            // @ts-ignore
            this.push(temp);
            process_cb();
        };
        transformEncoding.on("error", function (err) {
            // @ts-ignore
            transformEncoding.that.logerror("transform error " + err.toString());
        });
        const feedparser = new FeedParser();
        feedparser.url = url;
        feedparser.maxarticles = maxarticles;
        feedparser.on("error", function (err) {
            // @ts-ignore
            that.logerror("feedparser error: " + this.url);
            that.logerror(err.toString());
            request_cb(err);
        });
        feedparser.on("readable", function () {
            // @ts-ignore
            that.logdebug("feedparser readable " + this.url);
            // This is where the action is!
            // @ts-ignore
            const stream = this; // `this` is `feedparser`, which is a stream
            // @ts-ignore
            const meta = this.meta; // **NOTE** the "meta" is always available in the context of the feedparser instance
            let item;
            if (!Object.prototype.hasOwnProperty.call(data, "meta")) {
                data["meta"] = that.filterattributes(that.defmeta, meta);
                data["articles"] = [];
            }
            // eslint-disable-next-line no-cond-assign
            while (item = stream.read()) { // jshint ignore:line
                that.logsilly(item);
                // @ts-ignore
                if (counter >= this.maxarticles) return;
                counter++;
                data["articles"].push(that.filterattributes(that.defarticle, item));
            }
        });
        feedparser.on("end", function () {
            that.logdebug("feedparser end");
            request_cb(undefined, data);
        });

        try {
            const that = this;
            request
                .get(url)
                .on("error", function (err) {
                    // handle any request errors
                    that.logerror(err.toString());
                })
                .on("response", function (res) {
                    // not used var stream = this; // `this` is `req`, which is a stream
                    if (res.statusCode !== 200) {
                        //throw new Error(`Problem with ${this.href} and status code: ${res.statusCode}`);
                        this.emit("error", `Problem with ${this.href} is status code: ${res.statusCode}`);
                        // @ts-ignore
                        //this.emit("error", new Error("Bad status code"));
                    }
                })
                .pipe(transformEncoding)
                .pipe(feedparser);
        }
        catch (e) {
            // Anweisungen für jeden Fehler
            this.logerror("request error: " + e.toString());
        }
    };
    this.filterattributes = function (filter, attributes) {
        const obj = {};
        this.logdebug("filterattributes");
        for (const key in filter) {
            if (Object.prototype.hasOwnProperty.call(attributes, filter[key])) {
                obj[filter[key]] = attributes[filter[key]];
            }
        }
        return obj;
    };
    this.createState = function (stateTemplate, level1path = false, level2path = false, callback) { // jshint ignore:line
        this.logdebug("createState " + stateTemplate.name);
        const name = (level1path ? level1path + "." : "") + (level2path ? level2path + "." : "") + stateTemplate.name;
        this.logdebug("Create Key " + name);
        this.adapter.createState(level1path, level2path, stateTemplate.name, stateTemplate, callback);
    };
    this.setState = function (name, value, level1path, level2path, callback) {
        this.logdebug("setState " + name);
        name = (level1path ? level1path + "." : "") + (level2path ? level2path + "." : "") + name;
        this.adapter.log.debug("setState name: " + name /*+ ' value: ' + value*/);
        (callback) ? this.adapter.setState(name, value, true, callback) : this.adapter.setState(name, value, true); // jshint ignore:line
    };
    this.getStates = function (pattern, level1path = false, level2path = false, callback) { // jshint ignore:line
        this.logdebug("getStates " + pattern);
        const name = (level1path ? level1path + "." : "") + (level2path ? level2path + "." : "") + pattern;
        this.adapter.getStates(name, callback);
    };
    this.getState = function (id, level1path, level2path, callback) { // jshint ignore:line
        this.logdebug("getState " + id);
        const name = (level1path ? level1path + "." : "") + (level2path ? level2path + "." : "") + id;
        this.adapter.getState(name, callback);
    };
    this.createObject = function (stateTemplate, level1path, level2path, callback) {
        this.logdebug("createObject " + stateTemplate.name);
        const name = (level1path ? level1path + "." : "") + (level2path ? level2path + "." : "") + stateTemplate.name;
        this.adapter.getObject(name, (err, obj) => {
            const newobj = {
                type: "state",
                common: stateTemplate,
                native: {}
            };
            if (!obj) {
                (callback) ? this.adapter.setObject(name, newobj, callback) : this.adapter.setObject(name, newobj); // jshint ignore:line
            } else {
                if (callback) callback();
            }
        });
    };
    this.setTimeout = function (id, callback, time) {
        this.logdebug("setTimeout " + id);
        this.clearTimeout(id);
        this.observers[id] = setTimeout(callback.bind(this), time);
    };

    this.setInterval = function (id, callback, time) {
        this.logdebug("setInterval " + id);
        this.clearInterval(id);
        this.observers[id] = setInterval(callback.bind(this), time);
    };
    this.clearInterval = function (id) {
        this.logdebug("clearInterval " + id);
        if (this.observers[id]) clearInterval(this.observers[id]);
        delete this.observers[id];
    };
    this.clearTimeout = function (id) {
        this.logdebug("clearTimeout " + id);
        if (this.observers[id]) clearTimeout(this.observers[id]);
        delete this.observers[id];
    };
    this.deleteObservers = function () {
        this.logdebug("deleteObservers");
        this.clearTimeout("doObserver");
    };
    this.closeConnections = function () {
        this.logdebug("closeConnections");
        this.deleteObservers();
    };
    this.logsilly = (s) => {
        if (this.islogsilly) this.adapter.log.silly(s);
    };
    this.logdebug = (s) => {
        if (this.islogdebug) this.adapter.log.debug(s);
    };
    this.logerror = function (s) {
        // @ts-ignore
        this.adapter.log.error(s);
    };
    this.loginfo = (s) => {
        this.adapter.log.info(s);
    };
    this.init.bind(this)();

}
module.exports = rssfeedclass;
//decoding https://github.com/danmactough/node-feedparser/issues/62
//beispiel https://www.oeamtc.at/spritfeed/diesel/
//https://github.com/signicode/rereadable-stream#readme

//redis-cli --scan --pattern io.rssfeed* | xargs redis-cli del
