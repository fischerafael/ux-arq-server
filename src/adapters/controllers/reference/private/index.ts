import { Request, Response, NextFunction } from 'express'
import { referencePrivateUseCase } from '../../../../use-cases/reference/private'

export const referencePrivateController = {
    async create(req: Request, res: Response, next: NextFunction) {
        try {
            const { body, params } = req
            const user = await referencePrivateUseCase.create(body, {
                owner: params.user_id
            })
            return res.status(200).json(user)
        } catch (e) {
            next(e)
        }
    },
    async index(req: Request, res: Response, next: NextFunction) {
        try {
            const { params } = req
            const user = await referencePrivateUseCase.index({
                owner: params.user_id
            })
            return res.status(200).json(user)
        } catch (e) {
            next(e)
        }
    }
}
