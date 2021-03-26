import { evaluationRepository } from '../../../adapters/repositories/evaluation'
import { projectRepository } from '../../../adapters/repositories/project'
import { userRepository } from '../../../adapters/repositories/user'
import {
    IEvaluationCreateBody,
    IEvaluationCreateParams
} from '../../../entities/evaluation'

export const evaluationReferenceUseCase = {
    async create(body: IEvaluationCreateBody, params: IEvaluationCreateParams) {
        const { resting, work, development, mandatory, recreation } = body

        const hasEvaluator = await userRepository.findById(params.evaluator)
        if (!hasEvaluator) throw new Error('evaluator does not exist')

        const hasReference = await projectRepository.findById(params.project)
        if (!hasReference) throw new Error('reference does not exist')

        const scores = [resting, work, development, mandatory, recreation]
        const invalidScores = scores.filter((score) => score < 0 || score > 1)
        if (invalidScores.length > 0)
            throw new Error(
                'resting, work, development, mandatory and recreation scores should be between 0 - 1 range'
            )

        const evaluation = await evaluationRepository.create({
            ...body,
            ...params
        })
        return evaluation
    }
}
