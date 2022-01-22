import sharp from "sharp";

export const resizeImage = (width: number, height: number, source: string, output: string) => {

    return sharp(source).resize(width, height).toFile(output)

}