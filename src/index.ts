import express, { Application, Request, Response } from 'express'
import logger from 'morgan'
import { resizeImage } from './resizing'




const PORT = 3000
const app: Application = express()

app.use(logger('dev'))


app.get('/', async (req: Request, res: Response) => {
  const width: number = Number(req.query.width);
  const height: number = Number(req.query.height);
  const imageName: string = String(req.query.imageName);
  const source: string = `images/${imageName}.jpg`
  const output: string = `thumbnails/${imageName}_thumbnail_${width}X${height}.jpg`

  try {
    await resizeImage(width, height, source, output)
    res.json({
      message: 'Done'
    })
  }
  catch (err) {
    console.log(err)
    res.json({
      message: 'Failed'
    })
  }

})

app.listen(PORT, () => {
  console.log(` Image Server is runing at port:${PORT}`)
})

export default app