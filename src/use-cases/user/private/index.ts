import { userRepository } from '../../../adapters/repositories/user'
import { IUserPrivateDeleteParams } from '../../../entities/user'

export const userPrivateUseCase = {
    async delete(data: IUserPrivateDeleteParams) {
        const { _id } = data

        const deletedUser = await userRepository.findByIdAndRemove(_id)
        if (!deletedUser) throw new Error('not found')

        return deletedUser
    }
}
