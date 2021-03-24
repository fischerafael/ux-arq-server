import mongoose from 'mongoose'
import { IReferencePublicCreateRepository } from '../../../../../entities/project'

interface IProjectModel
    extends mongoose.Document,
        IReferencePublicCreateRepository {}

const Schema = new mongoose.Schema({
    name: { type: String, required: true },
    location: { type: String, required: true },
    thumbnail: { type: String, required: true },
    category: [{ type: String, required: true }],
    visibility: { type: String, required: true },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    stage: { type: String, required: true }
})

export default mongoose.model<IProjectModel>('Project', Schema)
