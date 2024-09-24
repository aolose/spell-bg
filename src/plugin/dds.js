import fs from 'fs';
import path from 'path';
import parse from 'parse-dds';
import dxt from 'decode-dxt';
import cfg from '../../cfg.js';
import sharp from 'sharp';
import mergeImg from 'merge-img';

const resizeImage = async (sharpImage, data) => {
  data.forEach(([x, y, n]) => {
    const sharp = sharpImage
      .clone()
      .extract({ left: 48 * x, top: 48 * y, height: 48, width: 48 });
    save(sharp, n);
  });
};

const save = async (a, name) => {
  await a
    .webp({
      alphaQuality: 0,
      quality: 10
    })
    .toFile(path.resolve(cfg.assets, `${name}.webp`));
};

const readDDS = (p) => {
  const buf = fs.readFileSync(path.resolve(cfg.unpackDir, p));
  const ddsData = parse(buf.buffer);
  const image = ddsData.images[0],
    imageWidth = +image.shape[0],
    imageHeight = +image.shape[1],
    imageDataView = new DataView(buf.buffer, image.offset, image.length);
  return sharp(dxt(imageDataView, imageWidth, imageHeight, ddsData.format), {
    raw: {
      width: imageWidth,
      height: imageHeight,
      channels: 4
    }
  })
    .resize({ width: 1536 })
    .removeAlpha();
};

export const buildImg = async (dds) => {
  try {
    fs.readdirSync(cfg.assets).forEach((a) => {
      if (/^\d+\.(webp|avif)/.test(a))
        fs.unlinkSync(path.resolve(cfg.assets, a));
    });
  } catch (e) {
    console.warn(e);
  }
  const sharps = cfg.dds.map((a) => readDDS(a));
  let i = 0;
  let n = 0;
  while (1) {
    const icons = dds.slice(i, i + 128);
    if (icons.length) {
      const sps = icons.map(([x, y, i]) =>
        sharps[i]
          .clone()
          .extract({ left: 48 * x, top: 48 * y, height: 48, width: 48 })
      );
      let img;
      if (sps.length > 1) {
        const images = await Promise.all(sps.map((a) => a.jpeg().toBuffer()));
        const { data, width, height } = (await mergeImg(images)).bitmap;
        img = sharp(data, {
          raw: { width, height, channels: 4 }
        }).removeAlpha();
      } else {
        img = sps[0];
      }
      await save(img, n);
    } else break;
    i += 128;
    n += 1;
  }
};
