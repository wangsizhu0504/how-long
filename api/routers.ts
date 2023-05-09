import express from 'express'

import progressRouter from './routes/progress-router'

const router = express.Router() as any

// Profile widget
router.use('/status', progressRouter)

export default router
