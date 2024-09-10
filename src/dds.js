export const resizeImage = async (sharpImage) => {
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

export const createWebP = async (base, images) => {
    for (const a of images) {
        const i = images.indexOf(a);
        const f = await a.webp({
            quality:1,
            alphaQuality:0,
        }).trim().toFile(`dist/${base+i}.webp`);
    }
};
