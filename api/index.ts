import express from 'express'
import routes from './routes/progress-router'

const app = express()
// Use routing on the /api prefix
app.use('/api', routes)

// Start listening on defined port
app.listen(3101, () => {
  console.log(
    'How-Long listening at http://localhost:3101',
  )
})
