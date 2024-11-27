const { Transform } = require('node:stream');
const chardet = require('chardet');
const iconv = require('iconv-lite');

module.exports = class TransformCharactorDecoder extends Transform {
    enctype = '';
    url = '';
    mybuffer = Buffer.from('');
    /**
     * Constructs a new TransformCharactorDecoder instance.
     *
     * @param options - Options for the Transform stream.
     * @param adapter - Adapter for logging and other utilities.
     * @param url - URL associated with the stream.
     */
    constructor(options, adapter, url) {
        super(options);
        this.adapter = adapter;
        this.url = url;
    }
    /**
     * Transforms the incoming data chunk by buffering it and processing
     * it once certain conditions are met.
     *
     * @param chunk - The data chunk to be transformed.
     * @param encoding - The encoding type (not used in this function).
     * @param callback - The callback function to be called after transformation.
     */
    _transform(chunk, encoding, callback) {
        this.adapter.logdebug(`transform get chunk: ${this.url},size: ${chunk.length}`);
        if (chunk.length + this.mybuffer.length < 100000 && this.enctype == '') {
            this.mybuffer = Buffer.concat([this.mybuffer, chunk]);
            callback();
            return;
        }
        chunk = Buffer.concat([this.mybuffer, chunk]);
        this.mybuffer = Buffer.from('');
        this.process(chunk, callback);
    }

    /**
     * Called when the writable side of the stream ends.
     *
     * @param callback - The callback function to be called after transformation.
     */
    _flush(callback) {
        this.process(this.mybuffer, callback);
    }
    /**
     * Processes the given data chunk, detects its encoding, and decodes it.
     *
     * @param chunk - The data chunk to be processed.
     * @param callback - The callback function to be called after processing.
     */
    process(chunk, callback) {
        this.adapter.logdebug(`process chunk ${this.url}`);
        this.enctype = this.enctype || chardet.detect(chunk) || 'UTF-8';
        this.adapter.logdebug(`process enctype: ${this.enctype}`);
        const temp = iconv.decode(Buffer.from(chunk), this.enctype);
        this.push(temp);
        callback();
    }
};
