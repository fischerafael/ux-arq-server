import { projectRepository } from '../../../adapters/repositories/project'

export const referencePublicUseCase = {
    async index() {
        const publicReferences = await projectRepository.indexPublic(
            'reference'
        )
        return publicReferences
    }
}
