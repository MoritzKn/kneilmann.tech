const html = require("../html");

module.exports = async function footer(ctx) {
  await ctx.load("scss", __dirname, "footer.scss", true);

  return html`
    <footer class="footer">
      <nav class="footer__nav">
        <ul>
          <li class="footer__item">
            <a href="/impressum/">Impressum</a>
          </li>
          <li class="footer__item">
            <a href="/datenschutz/">Datenschutz</a>
          </li>
        </ul>
      </nav>

      &copy; ${new Date().getFullYear()} Moritz Kneilmann
    </footer>
  `;
};
