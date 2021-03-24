import { IReferencePublicCreateRepository } from '../../../entities/project'
import Project from '../../../external/database/mongo/Models/Project'

type ProjectStages = 'reference'

export const projectRepository = {
    async create(data: IReferencePublicCreateRepository) {
        const project = await Project.create(data)
        return project
    },
    async indexPublic(stage?: ProjectStages) {
        if (stage) {
            const filteredProjects = await Project.find({ stage })
            return filteredProjects
        }
        const allProjects = await Project.find()
        return allProjects
    },
    async indexPrivate(owner: string, stage?: ProjectStages) {
        if (stage) {
            const filteredProjects = await Project.find({ owner }).where({
                stage
            })
            return filteredProjects
        }
        const allProjects = await Project.find({ owner })
        return allProjects
    }
}
