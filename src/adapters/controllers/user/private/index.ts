import { Request, Response, NextFunction } from 'express'
import { userPrivateUseCase } from '../../../../use-cases/user/private'

export const userPrivateController = {
    async delete(req: Request, res: Response, next: NextFunction) {
        try {
            const { params } = req
            const users = await userPrivateUseCase.delete({
                _id: params.user_id
            })
            return res.status(200).json(users)
        } catch (e) {
            next(e)
        }
    }
}
