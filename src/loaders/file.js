const util = require("util");
const fs = require("fs");
const path = require("path");

const mkdirp = require("mkdirp");

const copyFile = util.promisify(fs.copyFile);

class FileLoader {
  constructor() {
    this.files = {};
  }

  async load(ctx, dirName, filePath) {
    const fullPath = path.join(dirName, filePath);
    if (!this.files[fullPath]) {
      const outputPath = path.join("/", path.parse(filePath).base);

      this.files[fullPath] = {
        source: fullPath,
        path: outputPath
      };
    }

    return this.files[fullPath];
  }

  async dump(dir) {
    await Promise.all(
      Object.values(this.files).map(async file => {
        await mkdirp(path.parse(path.join(dir, file.path)).dir);
        await copyFile(file.source, path.join(dir, file.path));
      })
    );
  }
}

module.exports = FileLoader;
