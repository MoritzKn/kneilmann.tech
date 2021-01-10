const html = require("../html");

const URL_ORIGIN = "https://kneilmann.tech";

module.exports = async function doc(ctx, props, slot) {
  await ctx.load("scss", __dirname, "./global.scss");
  const icon = await ctx.load("img", __dirname, "../favicon.png", {
    width: 128
  });

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

        <link
          rel="preload"
          href="https://fonts.gstatic.com/s/quicksand/v20/6xK-dSZaM9iE8KbpRA_LJ3z8mH9BOJvgkP8o58a-xDwxUD2GFw.woff"
          as="font"
          type="font/woff"
          crossorigin
        />

        <style>
          @font-face {
            font-family: "Quicksand";
            font-style: normal;
            font-weight: 400;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/quicksand/v20/6xK-dSZaM9iE8KbpRA_LJ3z8mH9BOJvgkP8o58a-xDwxUD2GFw.woff)
              format("woff");
            unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6,
              U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191,
              U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
          }

          body {
            font-family: "Quicksand", sans-serif;
          }
        </style>

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
