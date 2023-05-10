import type { Request, Response } from 'express'
import express from 'express'

// import camelCase from 'lodash.camelCase'
import { generate } from '../../src'

const router = express.Router() as any
const cache: Record<string, any> = {}

router.get('/', (req: Request, res: Response) => {
  let image = cache[req.path]
  if (!image) {
    image = generate(req.query)
    cache[req.path] = image
  }

  res.header('cache-control', 'max-age=43200')
  res.type('image/svg+xml')
  res.send(image)
})
export default router
