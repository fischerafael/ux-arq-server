import { IUserPublicCreateRepository } from '../../../entities/user'
import User from '../../../external/database/mongo/Models/User'

export const userRepository = {
    async create(data: IUserPublicCreateRepository) {
        const user = await User.create(data)
        return user
    },
    async findByEmail(email: string) {
        const user = await User.findOne({ email })
        return user
    },
    async findByUserName(username: string) {
        const user = await User.findOne({ username })
        return user
    },
    async findById(userId: string) {
        const user = await User.findById(userId)
        return user
    },
    async index() {
        const users = await User.find()
        return users
    },
    async findByIdAndRemove(userId: string) {
        const deletedUser = await User.findByIdAndRemove(userId)
        return deletedUser
    }
}
