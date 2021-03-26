import { IEvaluationCreateRepository } from '../../../entities/evaluation'
import Evaluation from '../../../external/database/mongo/Models/Evaluation'

export const evaluationRepository = {
    async create(data: IEvaluationCreateRepository) {
        const evaluation = await Evaluation.create(data)
        return evaluation
    }
}
