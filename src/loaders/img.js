const fs = require("fs");
const path = require("path");
const util = require("util");

const mkdirp = require("mkdirp");
const sharp = require("sharp");
const sizeOf = util.promisify(require("image-size"));

const hash = require("../hash");

const copyFile = util.promisify(fs.copyFile);
const stat = util.promisify(fs.stat);

function limit(orgWidth, orgHeight, maxWidth, maxHeight = Infinity) {
  let width = orgWidth;
  let height = orgHeight;

  const aspect = width / height;

  if (width > maxWidth) {
    width = maxWidth;
    height = width / aspect;
  }

  if (height > maxHeight) {
    height = maxHeight;
    width = height * aspect;
  }

  return {
    width: Math.round(width),
    height: Math.round(height)
  };
}

function srcset(orgWidth, orgHeight, outputPrefix, type) {
  const SIZES = [620, 860, 1024, 1440, 1600, 1920];

  return SIZES.map(maxWidth => {
    const { width, height } = limit(orgWidth, orgHeight, maxWidth);

    return {
      width,
      height,
      path: `${outputPrefix}_${width}.${type}`
    };
  });
}

async function transform(image, size, outputPath, type) {
  try {
    await stat(outputPath);
  } catch (e) {
    // If there is no file

    if (type === "jpg") {
      image
        .resize(size)
        .jpeg({
          quality: 70,
          progressive: true,
          trellisQuantisation: true,
          overshootDeringing: true,
          optimizeScans: true
        })
        .toFile(outputPath);
    } else if (type === "png") {
      image
        .resize(size)
        .png({
          quality: 70,
          progressive: true
        })
        .toFile(outputPath);
    } else {
      throw new Error(`Can not transform ${type}`);
    }
  }
}

class ImgLoader {
  constructor() {
    this.files = {};
  }

  async load(ctx, dirName, filePath, options = {}) {
    const fullPath = path.join(dirName, filePath);
    if (!this.files[fullPath]) {
      const { width: orgWidth, height: orgHeight, type } = await sizeOf(
        fullPath
      );
      const outputPrefix = path.join(
        "/img",
        `${path.parse(filePath).name}_${await hash.file(fullPath)}`
      );

      const { width, height } = limit(
        orgWidth,
        orgHeight,
        options.width || 1440,
        options.height
      );

      this.files[fullPath] = {
        source: fullPath,
        path: `${outputPrefix}_${width}.${type}`,
        type,
        hash,
        width,
        height,
        original: {
          width: orgWidth,
          height: orgHeight,
          path: `${outputPrefix}_org.${type}`
        },
        srcset: srcset(orgWidth, orgHeight, outputPrefix, type)
      };
    }

    return this.files[fullPath];
  }

  async dump(dir) {
    await Promise.all(
      Object.values(this.files).map(async file => {
        await mkdirp(path.parse(path.join(dir, file.path)).dir);

        // Copy org
        await copyFile(file.source, path.join(dir, file.original.path));

        const image = sharp(file.source);

        await transform(
          image,
          { width: file.width, height: file.height },
          path.join(dir, file.path),
          file.type
        );

        await Promise.all(
          file.srcset.map(set =>
            transform(
              image,
              { width: set.width, height: set.height },
              path.join(dir, set.path),
              file.type
            )
          )
        );
      })
    );
  }
}

module.exports = ImgLoader;
