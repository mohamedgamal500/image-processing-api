import supertest from 'supertest'
import app from '../index'
import resizeImage from '../resizing'

// create a request object
const request = supertest(app)

describe('Test endpoint response', () => {
  it('test image endpoint', async () => {
    const positiveResponse = await request.get('/?imageName=icelandwaterfall&width=800&height=500')
    expect(positiveResponse.status).toBe(200)
  })

  it('test image endpoint', async () => {
    const negativeResponse = await request.get('/?imageName=wrong&width=800&height=500')
    expect(negativeResponse.status).toBe(500)
  })

  it('test sharp resizing', async () => {
    const resultImage = await resizeImage(
      800,
      900,
      `images/palmtunnel.jpg`,
      `thumbnails/palmtunnel_thumbnail_800X900.jpg`
    )
    expect(resultImage.width).toBe(800)
  })
})
