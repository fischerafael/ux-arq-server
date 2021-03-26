import { projectRepository } from '../../../adapters/repositories/project'
import { userRepository } from '../../../adapters/repositories/user'
import {
    IReferencePrivateCreateBody,
    IReferencePrivateCreateParams
} from '../../../entities/project'

export const referencePrivateUseCase = {
    async create(
        body: IReferencePrivateCreateBody,
        params: IReferencePrivateCreateParams
    ) {
        const stage = 'reference'
        const visibility = 'private'

        const user = await userRepository.findById(params.owner)
        if (!user) throw new Error('onwer not found')

        const isClient = user.role === 'client'
        if (isClient)
            throw new Error('only architects and admins can create references')

        const reference = await projectRepository.create({
            ...body,
            ...params,
            stage,
            visibility
        })

        return reference
    },
    async index(params: IReferencePrivateCreateParams) {
        const { owner } = params
        const references = await projectRepository.indexPrivateReferences(owner)
        return references
    }
}
