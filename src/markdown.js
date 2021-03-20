const marked = require("marked");
const html = require("./html");

module.exports = async function markdown(...args) {
  const str = (await html(...args)).html;

  return {
    html: marked(str)
  };
};
