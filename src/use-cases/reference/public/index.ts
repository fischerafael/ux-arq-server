import { evaluationRepository } from '../../../adapters/repositories/evaluation'
import { projectRepository } from '../../../adapters/repositories/project'
import { userRepository } from '../../../adapters/repositories/user'
import {
    IReferencePrivateCreateBody,
    IReferencePrivateCreateParams
} from '../../../entities/project'

export const referencePublicUseCase = {
    async create(
        body: IReferencePrivateCreateBody,
        params: IReferencePrivateCreateParams
    ) {
        const stage = 'reference'
        const visibility = 'public'

        const user = await userRepository.findById(params.owner)
        if (!user) throw new Error('onwer not found')

        const isAdmin = user.role === 'admin'
        if (!isAdmin)
            throw new Error('only admins can create public references')

        const reference = await projectRepository.create({
            ...body,
            ...params,
            stage,
            visibility
        })

        return reference
    },
    async index() {
        const publicReferences = await projectRepository.indexPublicReferences()

        const referencesEvaluations = publicReferences.map(
            async (reference) => {
                const evaluations = await evaluationRepository.index(
                    reference._id
                )
                return {
                    reference,
                    evaluations
                }
            }
        )

        const publicReferencesWithEvaluations = await Promise.all(
            referencesEvaluations
        )

        return publicReferencesWithEvaluations
    }
}
