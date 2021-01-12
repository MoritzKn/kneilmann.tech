const fetch = require("node-fetch");

class GoogleFontLoader {
  constructor() {
    this.fonts = {};
  }

  async load(ctx, dirName, fontName, options) {
    this.fonts[fontName] = options || {};
  }

  async finish(ctx) {
    const query = Object.entries(this.fonts)
      .map(([name, options]) => {
        let familyId = name;

        if (options && options.weights && options.weights.length !== 0) {
          familyId = `${familyId}:wght@${options.weights.join(";")}`;
        }

        return familyId;
      })
      .map(familyId => `family=${familyId}`)
      .join("&");

    if (query.length === 0) {
      return;
    }

    const url = `https://fonts.googleapis.com/css2?${query}&display=swap`;

    console.log("fetch url", url);

    const res = await fetch(url, {
      // Jup, Google Fonts sniffs the UA
      // This just gives us woff
      headers: {
        "user-agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36"
      }
    });
    if (!res.ok) {
      throw new Error(`Unexpected Status Code: ${res.status}`);
    }

    const responseBody = await res.text();

    console.log(responseBody);

    // Pls don't sue me
    const onlyLatain = responseBody
      .split("/* ")
      .map(entry => entry.split(" */"))
      .filter(([name]) => name === "latin")
      .map(([, entry]) => entry)
      .join();

    console.log(onlyLatain);

    // NOTE: csso destroys the font def
    // const optimizedCss = csso.minify(onlyLatain).css;
    // console.log(optimizedCss);

    ctx.headInsert += `<style>${onlyLatain}</style>\n`;
  }
}

module.exports = GoogleFontLoader;
