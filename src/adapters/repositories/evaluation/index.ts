import { IEvaluationCreateRepository } from '../../../entities/evaluation'
import Evaluation from '../../../external/database/mongo/Models/Evaluation'

export const evaluationRepository = {
    async create(data: IEvaluationCreateRepository) {
        const evaluation = await Evaluation.create(data)
        return evaluation
    },
    async index(projectId: string) {
        const evaluations = await Evaluation.find({ project: projectId })
        return evaluations
    },
    async findOne(projectId: string, evaluatorId: string) {
        const evaluation = await Evaluation.findOne({
            project: projectId
        }).where({ evaluator: evaluatorId })
        return evaluation
    }
}
