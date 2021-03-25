import mongoose from 'mongoose'
import {
    IProjectFeaturesPrivateCreateBody,
    IReferencePublicCreateRepository
} from '../../../../../entities/project'

interface IProjectModel
    extends mongoose.Document,
        IReferencePublicCreateRepository {
    features: IProjectFeaturesPrivateCreateBody
}

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
    stage: { type: String, required: true },
    features: {
        type: { type: Number, required: true },
        terrain: { type: Number, required: true },
        projectHeightLow: { type: Number, required: true },
        projectSize: { type: Number, required: true },
        cover: { type: Number, required: true },
        opennings: { type: Number, required: true },
        composition: { type: Number, required: true },
        architecturalElementsAmount: { type: Number, required: true },
        architecturalElementsVariety: { type: Number, required: true },
        architecturalElementsOrganisation: { type: Number, required: true },
        material: { type: Number, required: true },
        texture: { type: Number, required: true },
        tone: { type: Number, required: true },
        lightItensity: { type: Number, required: true },
        lightDistribution: { type: Number, required: true },
        ligthSource: { type: Number, required: true },
        ligthTemperature: { type: Number, required: true },
        soundIntensity: { type: Number, required: true },
        soundFrequency: { type: Number, required: true },
        soundQuality: { type: Number, required: true },
        flavorIntensity: { type: Number, required: true },
        flavorFrequency: { type: Number, required: true },
        flavorQuality: { type: Number, required: true },
        elementsAmount: { type: Number, required: true },
        elementsVariety: { type: Number, required: true },
        elementsDisposition: { type: Number, required: true },
        contextDensity: { type: Number, required: true },
        population: { type: Number, required: true },
        movement: { type: Number, required: true },
        period: { type: Number, required: true },
        wind: { type: Number, required: true },
        weather: { type: Number, required: true },
        temperature: { type: Number, required: true },
        contextInterest: { type: Number, required: true },
        colorRed: { type: Number, required: true },
        colorOrange: { type: Number, required: true },
        colorYellow: { type: Number, required: true },
        colorGreen: { type: Number, required: true },
        colorBlue: { type: Number, required: true },
        colorPurple: { type: Number, required: true },
        colorPink: { type: Number, required: true },
        live: { type: Number, required: true },
        workAndStudy: { type: Number, required: true },
        reacreationAndLeisure: { type: Number, required: true },
        mandatory: { type: Number, required: true }
    }
})

export default mongoose.model<IProjectModel>('Project', Schema)
