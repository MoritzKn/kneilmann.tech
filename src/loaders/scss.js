const fs = require("fs");
const path = require("path");
const util = require("util");

const csso = require("csso");
const mkdirp = require("mkdirp");
const sass = require("sass");

const hash = require("../hash");

const renderSass = util.promisify(sass.render);
const writeFile = util.promisify(fs.writeFile);

class ScssLoader {
  constructor() {
    this.files = {};
    this.bundlePath = null;
  }

  async load(ctx, dirName, filePath, important) {
    const fullPath = path.join(dirName, filePath);

    console.log("load", filePath, important);

    if (!this.files[fullPath]) {
      this.files[fullPath] = {
        source: fullPath,
        hash: await hash.file(fullPath),
        important: !!important
      };
    }
  }

  async finish(ctx) {
    const allHashes = Object.values(this.files)
      .filter(f => !f.important)
      .map(f => f.hash)
      .sort()
      .join();

    this.bundlePath = `/css/styles_${hash.string(allHashes)}.css`;
    ctx.headInsert += `<link rel="stylesheet" href="${this.bundlePath}">\n`;

    // inline css, this is gonna be for all pages!

    const scssResults = await Promise.all(
      Object.values(this.files)
        .filter(f => f.important)
        .map(file => renderSass({ file: file.source }))
    );

    const styleSheets = scssResults.map(r => r.css).join("\n\n");
    const result = csso.minify(styleSheets).css;

    ctx.headInsert += `<style>${result}</style>\n`;
  }

  async dump(dir) {
    console.log(this.files);
    const scssResults = await Promise.all(
      Object.values(this.files)
        .filter(f => !f.important)
        .map(file => renderSass({ file: file.source }))
    );

    const styleSheets = scssResults.map(r => r.css).join("\n\n");
    const result = csso.minify(styleSheets).css;

    if (this.bundlePath) {
      const bundleOutputPaht = path.join(dir, this.bundlePath);
      await mkdirp(path.parse(bundleOutputPaht).dir);
      await writeFile(bundleOutputPaht, result, "utf8");
    } else {
      throw new Error("No bundlePath");
    }
  }
}

module.exports = ScssLoader;
