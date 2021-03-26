import { Request, Response, NextFunction } from 'express'
import { evaluationReferenceUseCase } from '../../../../use-cases/evaluation/reference'

export const evaluationReferenceController = {
    async create(req: Request, res: Response, next: NextFunction) {
        try {
            const { body, params } = req
            const user = await evaluationReferenceUseCase.create(body, {
                evaluator: params.user_id,
                project: params.reference_id
            })
            return res.status(200).json(user)
        } catch (e) {
            next(e)
        }
    }
}
