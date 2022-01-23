import sharp from 'sharp'

const resizeImage = (width: number, height: number, source: string, output: string) =>
  sharp(source).resize(width, height).toFile(output)

export default resizeImage
