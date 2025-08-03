import express from 'express'
// import { PORT } from './secrete.ts'
import petRoutes from './routes/pet.ts'
import dotenv from 'dotenv'
dotenv.config()
const app = express()

app.use(express.json())

  
app.use('/api', petRoutes)

// Optional root route
app.get('/', (req, res) => {
  res.send('API is running')
})

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
