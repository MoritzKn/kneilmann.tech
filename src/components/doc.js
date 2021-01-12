const html = require("../html");

const URL_ORIGIN = "https://kneilmann.tech";

module.exports = async function doc(ctx, props, slot) {
  await ctx.load("scss", __dirname, "./global.scss", true);
  const icon = await ctx.load("img", __dirname, "../favicon.png", {
    width: 128
  });

  await ctx.load("font", __dirname, "Raleway", { weights: [400, 700] });
  await ctx.load("font", __dirname, "Quicksand", { weights: [400, 700] });

  return html`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>${props.title}</title>

        ${props.description &&
          html`
            <meta name="description" content="${props.description}" />
          `}
        ${props.noIndex &&
          html`
            <meta name="robots" content="noindex" />
          `}
        ${props.ogImage &&
          html`
            <meta property="og:image" content="${URL_ORIGIN}${props.ogImage}" />
          `}

        <link href="${URL_ORIGIN}${ctx.state.path}" rel="canonical" />

        <link rel="icon" href="${icon.path}" />

        <link rel="preconnect" href="https://fonts.gstatic.com" />

        <!-- Global site tag (gtag.js) - Google Analytics -->
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-FKW0VX8ESD"
        ></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag() {
            dataLayer.push(arguments);
          }
          gtag("js", new Date());
          gtag("config", "G-FKW0VX8ESD", { anonymize_ip: true });
        </script>

        <!-- HEAD_INSERT_POINT -->
      </head>
      <body>
        ${slot}

        <!-- BODY_INSERT_POINT -->
      </body>
    </html>
  `;
};
