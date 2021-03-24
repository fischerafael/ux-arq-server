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
    }
}
