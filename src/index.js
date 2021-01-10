const fs = require("fs");
const path = require("path");
const util = require("util");

const mkdirp = require("mkdirp");
const { minify } = require("html-minifier");

const FileLoader = require("./loaders/file");
const ImgLoader = require("./loaders/img");
const InlineJsLoader = require("./loaders/inline-js");
const ScssLoader = require("./loaders/scss");

const homePage = require("./pages/home");
const impressumPage = require("./pages/impressum");

const writeFile = util.promisify(fs.writeFile);

class Page {
  constructor(pagePath) {
    this.path = pagePath;
    this.referrers = [];
    this.html = null;
    this.headInsert = "";
    this.bodyInsert = "";
  }
}

class Context {
  constructor() {
    this.loaders = {};
    this.pages = {};
    this.headInsert = "";
    this.bodyInsert = "";
    this.state = null;
  }

  addLoader(key, loader) {
    this.loaders[key] = loader;
  }

  load(key, dirName, filePath, options) {
    return this.loaders[key].load(this, dirName, filePath, options);
  }

  registerPage(pagePath) {
    let page = this.pages[pagePath];

    if (!page) {
      page = new Page(pagePath);
      this.pages[pagePath] = page;
    }

    return page;
  }

  link(pagePath) {
    const page = this.registerPage(pagePath);
    if (this.state) {
      page.referrers.push(this.state.path);
    }
  }

  async renderPage(pagePath, component) {
    const page = this.registerPage(pagePath);

    this.state = { path: pagePath, pageData: page };
    const { html } = await component(this);

    page.html = html;
    this.state = null;
  }

  async dump(dir) {
    await Promise.all(
      Object.values(this.loaders)
        .filter(loader => loader.finish)
        .map(async loader => {
          await loader.finish(this);
        })
    );

    const options = {
      collapseBooleanAttributes: true,
      collapseInlineTagWhitespace: false,
      collapseWhitespace: true,
      decodeEntities: true,
      keepClosingSlash: true,
      minifyCSS: true,
      minifyJS: true,
      minifyURLs: true,
      removeAttributeQuotes: true,
      removeComments: true,
      removeOptionalTags: true,
      removeRedundantAttributes: true,
      removeScriptTypeAttributes: true,
      removeStyleLinkTypeAttributes: true,
      removeTagWhitespace: true,
      sortAttributes: true,
      sortClassName: true
    };

    await Promise.all(
      Object.values(this.pages).map(async page => {
        let { html } = page;

        const headInsert = page.headInsert + this.headInsert;
        html = html.replace("<!-- HEAD_INSERT_POINT -->", headInsert);
        const bodyInsert = page.bodyInsert + this.bodyInsert;
        html = html.replace("<!-- BODY_INSERT_POINT -->", bodyInsert);

        html = minify(html, options);

        const outPath = path.join(dir, page.path, "index.html");
        await mkdirp(path.parse(outPath).dir);
        await writeFile(outPath, html, "utf8");
      })
    );

    await Promise.all(
      Object.values(this.loaders)
        .filter(loader => loader.dump)
        .map(async loader => {
          await loader.dump(dir);
        })
    );
  }
}

async function main() {
  const ctx = new Context();

  ctx.addLoader("file", new FileLoader());
  ctx.addLoader("img", new ImgLoader());
  ctx.addLoader("inline-js", new InlineJsLoader());
  ctx.addLoader("scss", new ScssLoader());

  await ctx.renderPage("/", homePage);
  await ctx.renderPage("/impressum/", impressumPage);

  await ctx.dump(path.join(__dirname, "../dist"));
}

main().catch(e => console.error(e));
