import { Request, Response, NextFunction } from 'express'
import { referencePublicUseCase } from '../../../../use-cases/reference/public'

export const referencePublicController = {
    async index(req: Request, res: Response, next: NextFunction) {
        try {
            const user = await referencePublicUseCase.index()
            return res.status(200).json(user)
        } catch (e) {
            next(e)
        }
    },
    async create(req: Request, res: Response, next: NextFunction) {
        try {
            const { body, params } = req
            const user = await referencePublicUseCase.create(body, {
                owner: params.user_id
            })
            return res.status(200).json(user)
        } catch (e) {
            next(e)
        }
    }
}
