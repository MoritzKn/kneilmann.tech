const html = require("../html");

const doc = require("../components/doc");
const footer = require("../components/footer");
const header = require("../components/header");

module.exports = async function about(ctx) {
  return doc(
    ctx,
    {
      title: "Moritz Kneilmann",
      description: "Freelance Cloud and Web Consultant from Cologne, Germany"
    },
    html`
      ${header(ctx)}

      <main class="text">
        <h2>Hi there!</h2>

        <p>
          My name is <strong>Moritz Kneilmann</strong>, and I am a
          <strong>Freelance Cloud and Web Consultant</strong> from Cologne,
          Germany.
        </p>

        <p>
          I am interested in:
        </p>

        <ul>
          <li>Making slow things go fast</li>
          <li>Building reliable and scalable systems</li>
          <li>Mobile web apps that feel like native apps</li>
          <li>Building DevOps processes that make the above possible</li>
          <li>Programming languages</li>
        </ul>

        <p>
          Technologies I particularly like include:
        </p>

        <ul>
          <li>Terraform</li>
          <li>AWS</li>
          <li>Docker</li>
          <li>GitLab</li>
          <li>Node.js</li>
          <li>Rust</li>
          <li>Vue.js</li>
        </ul>

        <p>
          If you think I could help you with my skills,
          <b>let's get in touch!</b>
        </p>

        <p>
          Send me an email:
          <a href="mailto:hi@kneilmann.tech">hi@kneilmann.tech</a>
        </p>

        <p>
          You can also find me on
          <a
            rel="noopener"
            target="_blank"
            href="https://www.linkedin.com/in/moritz-kneilmann/"
          >
            LinkedIn
          </a>
          and
          <a rel="noopener" target="_blank" href="https://github.com/moritzkn">
            GitHub</a
          >.
        </p>
      </main>

      ${footer(ctx)}
    `
  );
};
