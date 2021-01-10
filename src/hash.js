const crypto = require("crypto");
const fs = require("fs");

function hashString(string) {
  const shasum = crypto.createHash("sha1");
  shasum.update(string);
  const hash = shasum.digest("hex");
  return hash.slice(0, 8);
}

function hashFile(filePath) {
  return new Promise((resolve, reject) => {
    const shasum = crypto.createHash("sha1");

    const s = fs.ReadStream(filePath);
    s.on("data", data => {
      shasum.update(data);
    });

    s.on("error", error => {
      reject(error);
    });

    s.on("end", () => {
      const hash = shasum.digest("hex");
      resolve(hash.slice(0, 8));
    });
  });
}

module.exports.file = hashFile;
module.exports.string = hashString;
