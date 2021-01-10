const html = require("../html");

module.exports = async function header(ctx) {
  await ctx.load("scss", __dirname, "header.scss");

  return html`
    <header class="header">
      <h1 class="header__title">kneilmann.tech</h1>

      ${ctx.state.path !== "/" &&
        html`
          <nav class="header__nav">
            <a href="/">⭠ Back Home</a>
          </nav>
        `}
    </header>
  `;
};
