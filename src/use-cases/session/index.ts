import { userRepository } from '../../adapters/repositories/user'
import { ISessionCreateBody } from '../../entities/user'
import { encryption } from '../../external/utils/bcryptjs'

export const sessionUseCase = {
    async create(data: ISessionCreateBody) {
        const { email, password } = data

        if (!password) throw new Error('password not provided')

        const user = await userRepository.findByEmail(email)
        if (!user) throw new Error('not found')

        const isPasswordValid = await encryption.compare(
            password,
            user.password
        )
        if (!isPasswordValid) throw new Error('invalid password')

        return user
    }
}
