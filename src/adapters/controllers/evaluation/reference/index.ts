import { Request, Response, NextFunction } from 'express'
import { evaluationReferenceUseCase } from '../../../../use-cases/evaluation/reference'

export const evaluationReferenceController = {
    async create(req: Request, res: Response, next: NextFunction) {
        try {
            const { body, params } = req
            const evaluation = await evaluationReferenceUseCase.create(body, {
                evaluator: params.user_id,
                project: params.reference_id
            })
            return res.status(200).json(evaluation)
        } catch (e) {
            next(e)
        }
    },
    async index(req: Request, res: Response, next: NextFunction) {
        try {
            const { params } = req
            const evaluations = await evaluationReferenceUseCase.index({
                project: params.reference_id,
                evaluator: params.user_id
            })
            return res.status(200).json(evaluations)
        } catch (e) {
            next(e)
        }
    }
}
