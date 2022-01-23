import express, { Application, Request, Response } from 'express'
import logger from 'morgan'
import fs from 'fs'
import resizeImage from './resizing'

const PORT = 5000
const app: Application = express()

app.use(logger('dev'))

app.get('/', async (req: Request, res: Response) => {
  const width: number = Number(req.query.width)
  const height: number = Number(req.query.height)
  const imageName: string = String(req.query.imageName)
  const source: string = `images/${imageName}.jpg`
  const output: string = `thumbnails/${imageName}_thumbnail_${width}X${height}.jpg`

  fs.readFile(output, async (err, content) => {
    try {
      if (err) {
        console.log('No such thumb image')
        await resizeImage(width, height, source, output)
        fs.readFile(output, (error, imageContent) => {
          res.end(imageContent)
        })
      } else {
        res.end(content)
      }
    } catch (sharpErr) {
      console.log(sharpErr)
      res.status(500)
      res.json({
        message: 'Faile To Resize The Img'
      })
    }
  })
})

app.listen(PORT, () => {
  console.log(` Image Server is runing at port:${PORT}`)
})

export default app
