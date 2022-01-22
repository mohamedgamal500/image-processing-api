import sharp from "sharp";

export const resizeImage = async (width: number, height: number, source: string, output: string) => {

    return await sharp(source).resize(width, height).toFile(output)

}