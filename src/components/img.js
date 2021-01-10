const cn = require("classnames");

const html = require("../html");

const sizes = `(min-width: 1600px) 800px,
       (max-width: 1600px) and (min-width: 425px) 50vw,
       100vw`.replace(/\s+/g, " ");

module.exports = async function img(ctx, props) {
  await Promise.all([
    ctx.load("scss", __dirname, "img.scss"),
    ctx.load("inline-js", __dirname, "lazyImages.js")
  ]);

  const { data } = props;

  return html`
    <div
      class="${cn("img", props.className)}"
      style="
        padding-top: ${((data.height / data.width) * 100).toFixed(4)}%;
        width: ${data.width}px;
      "
    >
      <noscript>
        <img
          class="${cn("img__img")}"
          alt="${props.alt}"
          src="${data.path}"
          width="${data.width}"
          height="${data.height}"
          style="width: ${data.width}px"
          srcset="${data.srcset
            .map(set => `${set.path} ${set.width}w`)
            .join(", ")}"
          sizes="${sizes}"
        />
      </noscript>
    </div>
  `;
};
