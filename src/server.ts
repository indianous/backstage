import express, { Router } from 'express'
import mainHandler from './mainHandler'

const server = express()
const router = Router()
const port = 3333

server.use(express.json())

server.get('/', mainHandler)

server.use(router)

server.listen(port, () => "Servidor rodando na porta " + port + "!")