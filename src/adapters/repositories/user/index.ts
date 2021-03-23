import { IUserPublicCreateRepository } from '../../../entities/user'
import User from '../../../external/database/mongo/Models/User'

export const userRepository = {
    async create(data: IUserPublicCreateRepository) {
        const user = await User.create(data)
        return user
    }
}
