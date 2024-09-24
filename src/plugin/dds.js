import fs from 'fs';
import path from 'path';
import parse from 'parse-dds';
import dxt from 'decode-dxt';
import cfg from '../../cfg.js';
import sharp from 'sharp';

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
  for (let i = 0; i < cfg.dds.length; i++) {
    const data = [];
    dds.forEach((a, n) => {
      if (a && a[2] === i) {
        data.push([a[0], a[1], n]);
      }
    });
    await resizeImage(readDDS(cfg.dds[i]), data);
  }
};
