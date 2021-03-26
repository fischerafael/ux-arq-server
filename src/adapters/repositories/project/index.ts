import { IReferencePublicCreateRepository } from '../../../entities/project'
import Project from '../../../external/database/mongo/Models/Project'

type ProjectStages = 'reference'

export const projectRepository = {
    async create(data: IReferencePublicCreateRepository) {
        const project = await Project.create(data)
        return project
    },
    async indexPublicReferences() {
        const publicReferences = await Project.find({
            stage: 'reference'
        }).where({ visibility: 'public' })
        return publicReferences
    },
    async indexPrivateReferences(owner: string) {
        const privateReferences = await Project.find({ owner })
            .where({ stage: 'reference' })
            .where({ visibility: 'private' })
        return privateReferences
    },
    async findById(projectId: string) {
        const project = await Project.findById(projectId)
        return project
    }
}
