/* xxeslint-disable no-var */
/*jshint -W069 */
// const chardet = require('chardet');
// const iconv = require('iconv-lite');
// const { Transform } = require('stream');
const TransformCharactorDecoder = require('./TransformCharactorDecoder');
const FeedParser = require('feedparser');
const axios = require('axios'); // for fetching the feed

/**
 * rssfeedclass
 *
 * @param adapter - Adapter object
 */
function rssfeedclass(adapter) {
    this.stateTemplate = {
        rss: {
            name: 'rss',
            read: true,
            write: false,
            type: 'string',
            role: 'value',
        },
    };

    this.sbRssFeedStatus = {
        lastRequest: {
            name: 'lastRequest',
            read: true,
            write: false,
            type: 'string',
            role: 'value',
            exist: false,
        },
        forceRefresh: {
            name: 'forceRefresh',
            read: true,
            write: true,
            type: 'boolean',
            role: 'button',
            def: false,
            exist: false,
        },
    };

    this.defmeta = [
        'title',
        'description',
        'link',
        'xmlurl',
        'date',
        'pubdate',
        'author',
        'language',
        'image',
        'favicon',
        'copyright',
        'generator',
        'categories',
    ];

    this.defarticle = [
        'title',
        'description',
        'summary',
        'link',
        'origlink',
        'permalink',
        'date',
        'pubdate',
        'author',
        'guid',
        'comments',
        'image',
        'categories',
        'source',
        'enclosures',
    ];
    this.adapter = adapter;
    this.log = {};
    this.islogsilly = false;
    this.islogdebug = true;
    this.observers = [];
    this.RssFeedPath = 'info';

    this.debug = false;

    /**
     * Init function of the adapter.
     * It registers the adapter with ioBroker and registers the adapter for all states changes.
     */
    this.init = function () {
        this.logdebug('init');
        this.setState('connection', true, this.RssFeedPath);
        this.initCmdStates(this.doObserver.bind(this));
    };
    /**
     * Init all command states.
     *
     * @param callback - called when all command states are initialized
     */
    this.initCmdStates = function (callback) {
        this.logdebug('initCmdStates');
        const key = 'forceRefresh';
        let stateTemplate = this.sbRssFeedStatus[key];
        if (!stateTemplate.exist) {
            this.createObject(stateTemplate, this.RssFeedPath);
            this.sbRssFeedStatus[key].exist = true;
        }
        stateTemplate = JSON.parse(JSON.stringify(this.sbRssFeedStatus['lastRequest']));
        this.createObject(stateTemplate, this.RssFeedPath, false, () => {
            //this.createObject(stateTemplate,this.RssFeedPath,false,function(){
            this.getState(stateTemplate.name, this.RssFeedPath, false, (err, state) => {
                if (state == null) {
                    this.setState(stateTemplate.name, '{}', this.RssFeedPath, false, callback);
                } else {
                    callback();
                }
            });
        });
    };
    /**
     * Starts the data acquisition every minute.
     */
    this.doObserver = function () {
        this.logdebug('doObserver');
        this.getData();
        this.setTimeout('doObserver', this.doObserver.bind(this), 60 * 1000); //production every minute
        //this.setTimeout('doObserver',this.doObserver.bind(this),1000); //test every second
    };
    /**
     * This function is called every minute by the doObserver function.
     * It compares the last refresh time of every RSS feed with the current time.
     * If the last refresh time is older than the refresh time specified in the RSS feed configuration,
     * it requests the RSS feed and saves the articles in the object tree.
     *
     * @param force - set to true to force a refresh of all RSS feeds
     */
    this.getData = function (force = false) {
        this.logdebug('getData started');
        const stateTemplate = JSON.parse(JSON.stringify(this.sbRssFeedStatus['lastRequest']));
        this.getState(stateTemplate.name, this.RssFeedPath, false, (err, state) => {
            const rss =
                typeof this.adapter.config.rss == 'object'
                    ? this.adapter.config.rss
                    : JSON.parse(this.adapter.config.rss || '[]');
            //var lastrequestdata = JSON.parse(state.val);
            const lastrequestdata = JSON.parse(state.val || '{}');
            rss.forEach((item, index, rss) => {
                let lastrequest = lastrequestdata[item.name] || 0;
                if (this.debug || force) {
                    lastrequest = 0;
                }
                if (lastrequest + item.refresh * 60 * 1000 < Date.now()) {
                    lastrequestdata[item.name] = Date.now();

                    if (index == rss.length - 1) {
                        this.setState(stateTemplate.name, JSON.stringify(lastrequestdata), this.RssFeedPath);
                    }

                    this.logdebug('getData settimeout in');
                    setTimeout(
                        () => {
                            this.logdebug('getData settimeout out');

                            this.request(
                                item.url,
                                item.maxarticles || this.adapter.config.maxarticles,
                                (err, data) => {
                                    if (!err) {
                                        this.logdebug(`got articles #: ${data.articles.length} from ${item.name}`);

                                        const stateTemplate = JSON.parse(JSON.stringify(this.stateTemplate['rss']));
                                        stateTemplate.name = item.name;

                                        this.createObject(stateTemplate, item.cat, false, () => {
                                            this.setState(stateTemplate.name, JSON.stringify(data), item.cat);
                                        });
                                    }
                                } /* .bind(this, item) */,
                            );
                        } /* .bind(this) */,
                        100 * index + 100,
                    );
                } else {
                    this.logdebug(`getData wait: ${item.name}`);
                }
            });
        });
    };
    /**
     * Compare two arrays of articles. Articles are compared by title and description.
     *
     * @param articles1 - first array of articles
     * @param articles2 - second array of articles
     * @returns true, if articles are equal, false otherwise
     */
    this.compareArticles = function (articles1, articles2) {
        this.logdebug('compareArticles');
        if (articles1.length != articles2.length) {
            return false;
        }
        for (let i = 0; i < articles1.length; i++) {
            if (articles1[i].title + articles1[i].description != articles2[i].title + articles2[i].description) {
                return false;
            }
        }
        return true;
    };
    /**
     * Sets the last request date for a specific feed.
     *
     * @param item - the feed configuration
     * @param lastrequest - the last request date in milliseconds
     */
    this.setLastRequest = function (item, lastrequest) {
        this.logdebug('setLastRequest start');
        const rss = JSON.parse(this.adapter.config.rss);
        const index = rss.findIndex(el => el.name == item.name);
        rss[index].lastrequest = lastrequest;
        this.adapter.config.rss = JSON.stringify(rss);
        this.logdebug('setLastRequest end');
    };
    /**
     * Is called when a subscribed state changes
     *
     * @param id the id of the changed state
     * @param state the new state
     */
    this.stateChange = function (id, state) {
        this.logdebug(`stateChange ${id}`);
        // Warning, state can be null if it was deleted
        if (!id || !state || state.ack) {
            return;
        }
        const idParts = id.split('.');
        idParts.shift();
        idParts.shift();
        if (idParts[0] == this.RssFeedPath) {
            this.doServerStateChange(idParts, state);
        }
    };
    /**
     * Handles state changes for rssfeed server states
     *
     * @param idParts - the parts of the state id
     * @param state - the new state
     */
    this.doServerStateChange = function (idParts, state) {
        this.logdebug('doServerStateChange');
        idParts.shift();
        if (idParts[0] == 'forceRefresh') {
            if (state.val == true) {
                this.getData(true);
            }
        }
    };
    /**
     * Fetches a feed from the given url and processes it.
     *
     * @param url the url of the feed
     * @param maxarticles the maximum number of articles to fetch
     * @param request_cb a callback function which is called with the result
     */
    this.request = function (url, maxarticles, request_cb) {
        this.logdebug(`request: ${url}`);
        const data = {};
        let counter = 0;
        let transformEncoding = new TransformCharactorDecoder({}, this, url);
        const feedparser = new FeedParser();
        feedparser.url = url;
        feedparser.maxarticles = maxarticles;
        feedparser.on('error', err => {
            this.logerror(`feedparser error: ${url}`);
            this.logerror(err.toString());
            request_cb(err);
        });
        feedparser.on('readable', () => {
            this.logdebug(`feedparser readable ${url}`);
            // This is where the action is!

            // const meta = this.meta; // **NOTE** the "meta" is always available in the context of the feedparser instance
            let item;
            if (!Object.prototype.hasOwnProperty.call(data, 'meta')) {
                data['meta'] = this.filterattributes(this.defmeta, feedparser.meta);
                data['articles'] = [];
            }
            while ((item = feedparser.read())) {
                // jshint ignore:line
                this.logsilly(item);

                if (counter >= maxarticles) {
                    return;
                }
                counter++;
                data['articles'].push(this.filterattributes(this.defarticle, item));
            }
        });
        feedparser.on('end', () => {
            this.logdebug('feedparser end');
            request_cb(undefined, data);
        });
        try {
            axios({
                method: 'get',
                url: url,
                headers: {
                    Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
                },
                responseType: 'stream',
            })
                .then(response => {
                    response.data
                        .on('error', err => {
                            // handle any request errors
                            this.logerror(err.toString());
                        })
                        .pipe(transformEncoding)
                        .pipe(feedparser);
                })
                .catch(err => {
                    this.logerror(`request error: ${err.toString()}`);
                });
        } catch (e) {
            // Anweisungen für jeden Fehler
            this.logerror(`request error: ${e.toString()}`);
        }
    };
    /**
     * filterattributes
     *
     * filter the attribute object
     *
     * @param filter - Object with keys of attributes to filter
     * @param attributes - Object with all attributes
     * @returns - filtered object
     */
    this.filterattributes = function (filter, attributes) {
        const obj = {};
        this.logdebug('filterattributes');
        for (const key in filter) {
            if (Object.prototype.hasOwnProperty.call(attributes, filter[key])) {
                obj[filter[key]] = attributes[filter[key]];
            }
        }
        return obj;
    };
    /**
     * Creates a new state in the adapter with the specified template and paths.
     *
     * @param stateTemplate - The template containing the state definition.
     * @param level1path - The first level path for the state, or false if not applicable.
     * @param level2path - The second level path for the state, or false if not applicable.
     * @param callback - A callback function to be called after the state is created.
     */
    this.createState = function (stateTemplate, level1path, level2path, callback) {
        // jshint ignore:line
        this.logdebug(`createState ${stateTemplate.name}`);
        const name = (level1path ? `${level1path}.` : '') + (level2path ? `${level2path}.` : '') + stateTemplate.name;
        this.logdebug(`Create Key ${name}`);
        this.adapter.createState(level1path, level2path, stateTemplate.name, stateTemplate, callback);
    };
    /**
     * Sets the state of an object in the adapter with the specified name and value.
     *
     * @param name - The name of the state to set.
     * @param value - The value to assign to the state.
     * @param [level1path] - The first level path for the state, or false if not applicable.
     * @param [level2path] - The second level path for the state, or false if not applicable.
     * @param [callback] - An optional callback function to be executed after setting the state.
     */
    this.setState = function (name, value, level1path, level2path, callback) {
        this.logdebug(`setState ${name}`);
        name = (level1path ? `${level1path}.` : '') + (level2path ? `${level2path}.` : '') + name;
        this.adapter.log.debug(`setState name: ${name}` /*+ ' value: ' + value*/);
        callback ? this.adapter.setState(name, value, true, callback) : this.adapter.setState(name, value, true); // jshint ignore:line
    };
    /**
     * Get states of an object in the adapter with the specified name and value.
     *
     * @param pattern - The pattern of the state to get.
     * @param [level1path] - The first level path for the state, or false if not applicable.
     * @param [level2path] - The second level path for the state, or false if not applicable.
     * @param [callback] - An optional callback function to be executed after getting the state.
     */
    this.getStates = function (pattern, level1path = false, level2path = false, callback) {
        // jshint ignore:line
        this.logdebug(`getStates ${pattern}`);
        const name = (level1path ? `${level1path}.` : '') + (level2path ? `${level2path}.` : '') + pattern;
        this.adapter.getStates(name, callback);
    };
    /**
     * Gets the state of an object in the adapter with the specified name.
     *
     * @param id - The name of the state to get.
     * @param [level1path] - The first level path for the state, or false if not applicable.
     * @param [level2path] - The second level path for the state, or false if not applicable.
     * @param [callback] - An optional callback function to be executed after getting the state.
     */
    this.getState = function (id, level1path, level2path, callback) {
        // jshint ignore:line
        this.logdebug(`getState ${id}`);
        const name = (level1path ? `${level1path}.` : '') + (level2path ? `${level2path}.` : '') + id;
        this.adapter.getState(name, callback);
    };
    /**
     * Creates a new object in the adapter with the specified template and paths.
     *
     * @param stateTemplate - The template containing the state definition.
     * @param [level1path] - The first level path for the state, or false if not applicable.
     * @param [level2path] - The second level path for the state, or false if not applicable.
     * @param [callback] - An optional callback function to be executed after creating the state.
     */
    this.createObject = function (stateTemplate, level1path, level2path, callback) {
        this.logdebug(`createObject ${stateTemplate.name}`);
        const name = (level1path ? `${level1path}.` : '') + (level2path ? `${level2path}.` : '') + stateTemplate.name;
        this.adapter.getObject(name, (err, obj) => {
            const newobj = {
                type: 'state',
                common: stateTemplate,
                native: {},
            };
            if (!obj) {
                callback ? this.adapter.setObject(name, newobj, callback) : this.adapter.setObject(name, newobj); // jshint ignore:line
            } else {
                if (callback) {
                    callback();
                }
            }
        });
    };
    /**
     * Starts a timer that calls the specified function after the specified time.
     * Any existing timer with the same id is cleared.
     *
     * @param id - The name of the timer.
     * @param callback - The function to call when the timer expires.
     * @param time - The time in milliseconds until the timer expires.
     */
    this.setTimeout = function (id, callback, time) {
        this.logdebug(`setTimeout ${id}`);
        this.clearTimeout(id);
        this.observers[id] = setTimeout(callback.bind(this), time);
    };

    /**
     * Starts a timer that calls the specified function every time the specified time has passed.
     * Any existing timer with the same id is cleared.
     *
     * @param id - The name of the timer.
     * @param callback - The function to call when the timer expires.
     * @param time - The time in milliseconds between calls to the function.
     */
    this.setInterval = function (id, callback, time) {
        this.logdebug(`setInterval ${id}`);
        this.clearInterval(id);
        this.observers[id] = setInterval(callback.bind(this), time);
    };
    /**
     * Clears an interval timer with the specified id.
     *
     * @param id - The name of the interval timer to clear.
     */
    this.clearInterval = function (id) {
        this.logdebug(`clearInterval ${id}`);
        if (this.observers[id]) {
            clearInterval(this.observers[id]);
        }
        delete this.observers[id];
    };
    /**
     * Clears a timer with the specified id.
     *
     * @param id - The name of the timer to clear.
     */
    this.clearTimeout = function (id) {
        this.logdebug(`clearTimeout ${id}`);
        if (this.observers[id]) {
            clearTimeout(this.observers[id]);
        }
        delete this.observers[id];
    };
    /**
     * Deletes the observers by clearing the 'doObserver' timeout.
     * Logs a debug message indicating the action.
     */
    this.deleteObservers = function () {
        this.logdebug('deleteObservers');
        this.clearTimeout('doObserver');
    };
    /**
     * Close all connections (i.e. delete all observers).
     */
    this.closeConnections = function () {
        this.logdebug('closeConnections');
        this.deleteObservers();
    };
    this.logsilly = s => {
        if (this.islogsilly) {
            this.adapter.log.silly(s);
        }
    };
    this.logdebug = s => {
        if (this.islogdebug) {
            this.adapter.log.debug(s);
        }
    };
    this.logerror = function (s) {
        this.adapter.log.error(s);
    };
    this.loginfo = s => {
        this.adapter.log.info(s);
    };
    this.init.bind(this)();
}
module.exports = rssfeedclass;
//decoding https://github.com/danmactough/node-feedparser/issues/62
//beispiel https://www.oeamtc.at/spritfeed/diesel/
//https://github.com/signicode/rereadable-stream#readme

//redis-cli --scan --pattern io.rssfeed* | xargs redis-cli del
