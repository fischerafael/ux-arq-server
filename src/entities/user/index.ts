type UserId = string
type UserRole = string
type UserName = string
type UserEmail = string
type UserPassword = string
type UserBirth = number
type UserGender = string
type UserSecretKey = string

export interface IUserPublicCreateBody {
    username: UserName
    email: UserEmail
    password: UserPassword
    birth: UserBirth
    gender: UserGender
    secretKey: UserSecretKey
}

export interface IUserPublicCreateRepository extends IUserPublicCreateBody {
    role: UserRole
}

export interface IUserPrivateDeleteParams {
    _id: UserId
}
