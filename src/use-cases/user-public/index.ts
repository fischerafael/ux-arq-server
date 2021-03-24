import { userRepository } from '../../adapters/repositories/user'
import { IUserPublicCreateBody } from '../../entities/user'
import { DEFAULT_USER_ROLE } from '../../external/app/constants'

export const userPublicUseCase = {
    async create(body: IUserPublicCreateBody) {
        const { email, password, username, birth, gender, secretKey } = body

        const existingEmail = await userRepository.findByEmail(email)
        if (existingEmail) throw new Error('email already exists')

        const existingUserName = await userRepository.findByUserName(username)
        if (existingUserName) throw new Error('username already exists')

        const missingFields =
            !email || !password || !username || !birth || !gender || !secretKey
        if (missingFields) throw new Error('missing fields')

        const defaultRole = DEFAULT_USER_ROLE || 'client'

        const user = await userRepository.create({
            ...body,
            role: defaultRole
        })

        return user
    },
    async index() {
        const users = await userRepository.index()

        return users
    }
}
