/* global describe, it */
const path = require("path");
const fs = require("fs");
const assert = require("assert");
const { tests } = require("@iobroker/testing");

// Validate the package files
tests.packageFiles(path.join(__dirname, ".."));

describe("VIS-1 widget package", () => {
    it("ships only runtime files and keeps node_modules out of the adapter package", () => {
        const rootDir = path.join(__dirname, "..");
        const packageJson = require(path.join(rootDir, "package.json"));
        const vis1DistDir = path.join(rootDir, "widgets", "rssfeed", "dist");

        assert.ok(packageJson.files.includes("widgets/rssfeed/dist/*.{css,js,map}"));
        assert.ok(!packageJson.files.some(file => file.startsWith("widgets/**")));
        assert.ok(fs.readdirSync(vis1DistDir).every(file => /\.(?:css|js|map)$/.test(file)));
    });
});

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
