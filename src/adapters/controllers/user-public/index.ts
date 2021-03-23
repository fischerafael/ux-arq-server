import { Request, Response, NextFunction } from 'express'

import { userPublicUseCase } from '../../../use-cases/user-public'

export const userPublicController = {
    async create(req: Request, res: Response, next: NextFunction) {
        try {
            const { body } = req
            const user = await userPublicUseCase.create(body)
            return res.status(201).json(user)
        } catch (e) {
            next(e)
        }
    }
}
