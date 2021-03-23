type UserId = string
type UserRole = 'admin' | 'architect' | 'client'
type UserName = string
type UserEmail = string
type UserPassword = string
type UserBirth = number
type UserGender = 'male' | 'female' | 'other'
type UserSecretKey = string

export interface IUserCreateBody {
    username: UserName
    email: UserEmail
    password: UserPassword
    birth: UserBirth
    gender: UserGender
    secretKey: UserSecretKey
}
