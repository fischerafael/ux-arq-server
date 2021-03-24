import { projectRepository } from '../../../adapters/repositories/project'
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
        const reference = await projectRepository.create({
            ...body,
            ...params,
            stage
        })

        return reference
    },
    async index(params: IReferencePrivateCreateParams) {
        const { owner } = params
        const references = await projectRepository.indexPrivate(
            owner,
            'reference'
        )
        return references
    }
}
