import bcrypt, { compare } from 'bcrypt'

const SALT_ROUNDS = 10

export const encryption = {
    async create(plainText: string) {
        try {
            const hash = await bcrypt.hash(plainText, SALT_ROUNDS)
            return hash
        } catch (e) {
            throw new Error('failed to encrypt')
        }
    },
    async compare(plainText: string, hash: string) {
        try {
            const isEqual = await bcrypt.compare(plainText, hash)
            return isEqual
        } catch (e) {
            throw new Error('failed to compare')
        }
    }
}
