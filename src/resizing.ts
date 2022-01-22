import sharp from "sharp";

export const resizeImage = async (width: number, height: number, source: string, output: string) => {
    try {
        await sharp(source).resize(width, height).toFile(output)
    }
    catch (err) {
        console.log('sharp error', err)
    }
}