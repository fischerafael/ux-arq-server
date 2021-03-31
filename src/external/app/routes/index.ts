import { Router } from 'express'

export const routes = Router()

import { sessionController } from '../../../adapters/controllers/session'
import { userPrivateController } from '../../../adapters/controllers/user/private'
import { userPublicController } from '../../../adapters/controllers/user/public'
import { referencePrivateController } from '../../../adapters/controllers/reference/private'
import { referencePublicController } from '../../../adapters/controllers/reference/public'
import { evaluationReferenceController } from '../../../adapters/controllers/evaluation/reference'

routes.get('/', (req, res) => res.send('Olá mundo'))

routes.post('/users', userPublicController.create)
routes.get('/users', userPublicController.index)
routes.delete('/users/:user_id', userPrivateController.delete)

routes.post('/sessions', sessionController.create)

routes.post('/users/:user_id/references', referencePrivateController.create)
routes.get('/users/:user_id/references', referencePrivateController.index)

routes.post(
    '/users/:user_id/references/:reference_id/evaluations',
    evaluationReferenceController.create
)
routes.get(
    '/users/:user_id/references/:reference_id/evaluations',
    evaluationReferenceController.index
)

routes.post('/:user_id/references', referencePublicController.create)
routes.get('/references', referencePublicController.index)
