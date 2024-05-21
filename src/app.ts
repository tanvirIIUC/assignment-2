import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import { studentRoutes } from './app/modules/students/student.router'
const app: Application = express()

//parsers
app.use(express.json())
app.use(cors())

app.use('/api/v1/students',studentRoutes)

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})

export default app
