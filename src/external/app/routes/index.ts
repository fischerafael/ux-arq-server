import { Router } from 'express'
import { userPrivateController } from '../../../adapters/controllers/user-private'
import { userPublicController } from '../../../adapters/controllers/user-public'

export const routes = Router()

routes.get('/', (req, res) => res.send('Olá mundo'))

routes.post('/users', userPublicController.create)
routes.get('/users', userPublicController.index)
routes.delete('/users/:user_id', userPrivateController.delete)
