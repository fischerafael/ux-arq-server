import { IUserPublicCreateRepository } from '../../../../../entities/user'

import mongoose from 'mongoose'

interface IUserModel extends mongoose.Document, IUserPublicCreateRepository {}

const Schema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    birth: { type: Number, required: true },
    gender: { type: String, required: true },
    secretKey: { type: String, required: true },
    role: { type: String, required: true }
})

export default mongoose.model<IUserModel>('User', Schema)
