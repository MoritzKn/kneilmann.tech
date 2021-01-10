const fs = require("fs");
const path = require("path");
const util = require("util");

const UglifyJS = require("uglify-js");

const readFile = util.promisify(fs.readFile);

class InlineJsLoader {
  constructor() {
    this.files = {};
  }

  async load(ctx, dirName, filePath) {
    const fullPath = path.join(dirName, filePath);

    if (!this.files[fullPath]) {
      const code = await readFile(fullPath, "utf8");
      const result = UglifyJS.minify(code);

      if (result.error) {
        throw new Error(result.error);
      }

      this.files[fullPath] = {
        code,
        pages: [],
        result: result.code
      };
    }

    if (!this.files[fullPath].pages.includes(ctx.state.path)) {
      ctx.state.pageData.bodyInsert = `<script type="application/javascript">${this.files[fullPath].result}</script>`;
      this.files[fullPath].pages.push(ctx.state.path);
    }
  }
}

module.exports = InlineJsLoader;
