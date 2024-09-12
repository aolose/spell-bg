import fs from 'fs';
import path from 'path';
import parse from 'parse-dds';
import dxt from 'decode-dxt';
import cfg from '../cfg.js';
import sharp from 'sharp';

const resizeImage = async (sharpImage) => {
  let a = 0;
  const images = [];
  while (a < 2048) {
    const top = a;
    a += 256;
    const sharp = sharpImage
      .clone()
      .extract({ left: 0, top, height: 256, width: 2048 })
      .resize({ width: 1024 });
    images.push(sharp);
  }
  return images;
};

const createWebP = async (base, images) => {
  for (const a of images) {
    const i = images.indexOf(a);
    await save(a, base + i);
  }
};

const save = async (a, name) => {
  await a
    .webp({
      quality: 1,
      alphaQuality: 0
    })
    .trim()
    .toFile(`dist/${name}.webp`);
};

const readDDS = (p) => {
  const buf = fs.readFileSync(path.resolve(cfg.unpackDir, p));
  const ddsData = parse(buf.buffer);
  const image = ddsData.images[0],
    imageWidth = image.shape[0],
    imageHeight = image.shape[1],
    imageDataView = new DataView(buf.buffer, image.offset, image.length);
  return sharp(dxt(imageDataView, imageWidth, imageHeight, ddsData.format), {
    raw: {
      width: imageWidth,
      height: imageHeight,
      channels: 4
    }
  });
};

const buildImg = () => {
  cfg.dds.forEach(async ([p, f = 0]) => {
    await createWebP(f, await resizeImage(readDDS(p)));
  });
};
try {
  fs.readdirSync(cfg.output).forEach((a) => {
    if (/\d\.webp/.test(a)) fs.unlinkSync(path.resolve(cfg.output, a));
  });
} catch (e) {
  console.warn(e);
}
buildImg();
