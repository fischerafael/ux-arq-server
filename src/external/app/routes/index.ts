import { Router } from 'express'
import { userPublicController } from '../../../adapters/controllers/user-public'

export const routes = Router()

routes.get('/', (req, res) => res.send('Olá mundo'))

routes.post('/users', userPublicController.create)
