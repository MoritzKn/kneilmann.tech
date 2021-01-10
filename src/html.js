const escapeHtml = require("escape-html");

module.exports = async function html(stringsReadOnly, ...values) {
  const strings = [...stringsReadOnly];

  const output = await strings.reduce(async (rest, string, index) => {
    let all = (await rest) + string;

    if (index < values.length) {
      const value = await values[index];
      const valueList = Array.isArray(value) ? value : [value];

      valueList.forEach(item => {
        /* eslint-disable no-underscore-dangle */
        if (typeof item === "object" && item.html) {
          all += item.html;
        } else if (item !== undefined && item !== null && item !== false) {
          all += escapeHtml(item);
        }
      });
    }

    return all;
  }, "");

  return {
    html: output
  };
};

module.exports.each = async function each(list, action) {
  return list && Promise.all(list.map(action));
};
