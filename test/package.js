/* global describe, it */
const path = require("path");
const fs = require("fs");
const assert = require("assert");
const { tests } = require("@iobroker/testing");

// Validate the package files
tests.packageFiles(path.join(__dirname, ".."));

describe("VIS-2 widget package", () => {
    it("registers all public widgets and contains the federation entry point", () => {
        const rootDir = path.join(__dirname, "..");
        const ioPackage = require(path.join(rootDir, "io-package.json"));
        const registration = ioPackage.common.visWidgets.vis2rssfeedWidgets;

        assert.deepStrictEqual(registration.components, [
            "RSSArticleMarquee5",
            "RSSMetaHelper",
            "RSSArticleHelper",
            "RSSWidget",
            "RSSMultiWidget",
        ]);
        assert.strictEqual(registration.bundlerType, "module");
        assert.ok(fs.existsSync(path.join(rootDir, "widgets", registration.url)));
    });
});
