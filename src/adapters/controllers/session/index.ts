import { Request, Response, NextFunction } from 'express'
import { sessionUseCase } from '../../../use-cases/session'

export const sessionController = {
    async create(req: Request, res: Response, next: NextFunction) {
        try {
            const { body } = req
            const user = await sessionUseCase.create(body)
            return res.status(200).json(user)
        } catch (e) {
            next(e)
        }
    }
}
