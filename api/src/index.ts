import express, { json } from 'express'
import type { Request, Response } from 'express'
import cors from 'cors'

import 'dotenv/config'
import { configureDatabase } from '@/configs'
import { handleErrors } from '@/helpers'
import { streamersRouter } from '@/routers'

const { PORT, MONGODB_USER, MONGODB_HOST, MONGODB_PASSWORD, MONGODB_PORT } =
  process.env

configureDatabase({
  username: MONGODB_USER,
  password: MONGODB_PASSWORD,
  host: MONGODB_HOST,
  port: MONGODB_PORT,
})

const app = express()
app.use(cors())
app.use(json())

app.use(streamersRouter)

app.get(
  '/',
  handleErrors(async (req: Request, res: Response) => {
    res.status(200).send('<h1>Siema Streamerank API</h1>')
  }),
)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}...`)
})
