import mongoose from 'mongoose'
import { IEvaluationCreateRepository } from '../../../../../entities/evaluation'

interface IEvalutionModel
    extends mongoose.Document,
        IEvaluationCreateRepository {}

const Schema = new mongoose.Schema({
    evaluator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    project: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Project',
        required: true
    },
    hasVisited: { type: Number, required: true },
    hasSeen: { type: Number, required: true },
    resting: { type: Number, required: true },
    work: { type: Number, required: true },
    development: { type: Number, required: true },
    recreation: { type: Number, required: true },
    mandatory: { type: Number, required: true }
})

export default mongoose.model<IEvalutionModel>('Evaluation', Schema)
