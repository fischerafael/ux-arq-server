import { Request, Response, NextFunction } from 'express'

export const evaluationReferenceController = {
    async create(req: Request, res: Response, next: NextFunction) {
        try {
            const { body, params } = req
            // // const user = await evaluationReferenceUseCase.create(body, {
            // //     evaluator: params.user_id
            // //     reference: params.project_id
            // // })
            // return res.status(200).json(user)
        } catch (e) {
            next(e)
        }
    }
}
