import { Router } from 'express'

export const routes = Router()

routes.get('/', (req, res) => res.send('Olá mundo'))
