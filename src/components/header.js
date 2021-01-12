const html = require("../html");

module.exports = async function header(ctx) {
  await ctx.load("scss", __dirname, "header.scss", true);

  return html`
    <header class="header">
      ${ctx.state.path === "/"
        ? html`
            <h1 class="header__title"><a href="/">kneilmann.tech</a></h1>
          `
        : html`
            <div class="header__title"><a href="/">kneilmann.tech</a></div>

            <nav class="header__nav">
              <a href="/">⭠ Back Home</a>
            </nav>
          `}
    </header>
  `;
};
