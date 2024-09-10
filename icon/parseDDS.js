import sharp from "sharp";
import fs from 'fs'
import path from 'path'
import dxt from 'decode-dxt'
import parse from 'parse-dds'

const resizeImage = async (sharpImage) => {
    let a = 0
    const images = []
    while (a<2048) {
        const top = a
        a+=256
        const sharp =
            sharpImage.clone()
                .extract({left: 0, top, height: 256, width: 2048})
                .resize({width:1024})
        images.push(sharp)
    }
    return images
}

const createWebP = async (base, images) => {
    for (const a of images) {
        const i = images.indexOf(a);
        const f = await a.webp({
            quality:1,
            alphaQuality:0,
        }).trim().toFile(`img/${base+i}.webp`);
    }
};

const unpackData = 'D:/Program Files (x86)/GOG Galaxy/Games/bg3mmd/UnpackedData/'
const icons = [
    ['Icons/Public/Shared/Assets/Textures/Icons/Icons_Skills.dds'],
    ['Icons/Public/SharedDev/Assets/Textures/Icons/Icons_Skills.dds', 8]
]

icons.forEach(async ([p, f = 0]) => {
    const buf = fs.readFileSync(path.resolve(unpackData, p))
    const ddsData = parse(buf.buffer)
    const image = ddsData.images[0],
        imageWidth = image.shape[0],
        imageHeight = image.shape[1],
        imageDataView = new DataView(buf.buffer, image.offset, image.length)
    const dds = dxt(imageDataView, imageWidth, imageHeight, ddsData.format);
    await createWebP(f, await resizeImage(sharp(dds, {
        raw: {
            width: imageWidth,
            height: imageHeight,
            channels: 4
        }
    })))
})
