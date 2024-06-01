"use strict";

/*
 * Created with @iobroker/create-adapter v2.3.0
 */

// The adapter-core module gives you access to the core ioBroker functions
// you need to create an adapter
const utils = require("@iobroker/adapter-core");

// Load your modules here, e.g.:
// const fs = require("fs");
const RssFeedRequire = require("./lib/rssFeedServer");
let rssFeedServer;
class RssFeed extends utils.Adapter {
    /**
     * @param {Partial<utils.AdapterOptions>} [options={}]
     */
    constructor(options) {
        super({
            ...options,
            name: "rssfeed",
        });
        this.on("ready", this.onReady.bind(this));
        this.on("objectChange", this.onObjectChange.bind(this));
        this.on("stateChange", this.onStateChange.bind(this));
        // this.on('message', this.onMessage.bind(this));
        this.on("unload", this.onUnload.bind(this));
    }

    /**
     * Is called when databases are connected and adapter received configuration.
     */
    async onReady() {
        this.log.debug("main onReady start");
        // Reset the connection indicator during startup
        this.setState("info.connection", false, true);

        // Initialize your adapter here
        if (!rssFeedServer) {
            this.log.debug("main onReady open rssfeed");
            rssFeedServer = new RssFeedRequire(this);
        }
    }

    /**
     * Is called when adapter shuts down - callback has to be called under any circumstances!
     * @param {() => void} callback
     */
    onUnload(callback) {
        try {
            this.log.debug("main onUnload try");

            rssFeedServer.closeConnections();
            this.log.info("cleaned everything up...");
            // Reset the connection indicator during startup
            this.setState("info.connection", false, true);
            callback();
        } catch (e) {
            this.log.debug("main onUnload error");
            callback();
        }
    }
    /**
     * Is called if a subscribed object changes
     * @param {string} id
     * @param {ioBroker.Object | null | undefined} obj
     */
    onObjectChange(id, obj) {
        if (obj) {
            // The object was changed
            this.log.silly(`object ${id} changed: ${JSON.stringify(obj)}`);
        } else {
            // The object was deleted
            this.log.silly(`object ${id} deleted`);
        }
    }

    onStateChange(id, state) {
        if (state) {
            // The state was changed
            this.log.silly(`state ${id} changed: ${state.val} (ack = ${state.ack})`);
            rssFeedServer.stateChange(id,state);
        } else {
            // The state was deleted
            this.log.silly(`state ${id} deleted`);
        }
    }
}

if (require.main !== module) {
    // Export the constructor in compact mode
    /**
     * @param {Partial<utils.AdapterOptions>} [options={}]
     */
    module.exports = (options) => new RssFeed(options);
} else {
    // otherwise start the instance directly
    new RssFeed();
}
