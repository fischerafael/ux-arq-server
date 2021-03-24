import { Router } from 'express'

export const routes = Router()

import { sessionController } from '../../../adapters/controllers/session'
import { userPrivateController } from '../../../adapters/controllers/user/private'
import { userPublicController } from '../../../adapters/controllers/user/public'

routes.get('/', (req, res) => res.send('Olá mundo'))

routes.post('/users', userPublicController.create)
routes.get('/users', userPublicController.index)
routes.delete('/users/:user_id', userPrivateController.delete)

routes.post('/sessions', sessionController.create)
