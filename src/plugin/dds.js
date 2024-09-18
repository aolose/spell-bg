import fs from 'fs';
import path from 'path';
import parse from 'parse-dds';
import dxt from 'decode-dxt';
import cfg from '../../cfg.js';
import sharp from 'sharp';

const resizeImage = async (sharpImage) => {
  let a = 0;
  const images = [];
  while (a < 1536) {
    const top = a;
    a += 192;
    const sharp = sharpImage
      .clone()
      .extract({ left: 0, top, height: 192, width: 1536 });
    images.push(sharp);
  }
  return images;
};

const createClip = async (base, images) => {
  for (const a of images) {
    const i = images.indexOf(a);
    await save(a, base + i);
  }
};

const save = async (a, name) => {
  await a
    .avif({
      quality: 5,
    })
    .toFile(path.resolve(cfg.assets, `${name}.avif`));
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
  }).resize({ width: 1536 }).removeAlpha()
};

export const buildImg = async () => {
  try {
    fs.readdirSync(cfg.assets).forEach((a) => {
      if (/^\d+\.(webp|avif)/.test(a)) fs.unlinkSync(path.resolve(cfg.assets, a));
    });
  } catch (e) {
    console.warn(e);
  }
  for (const [p, f = 0] of cfg.dds) {
    await createClip(f, await resizeImage(readDDS(p)));
  }
};
