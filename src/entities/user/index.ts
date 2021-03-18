type Name = string
type Email = string
type Password = string
type Role = 'admin' | 'architect' | 'client'
type Gender = 'male' | 'female' | 'other'
type Age = number

interface User {
    name: Name
    email: Email
    password: Password
    role: Role
    gender: Gender
    age: Age
}

type EmailValidator = (email: string) => boolean

export const user = {
    create(data: User, emailValidator: EmailValidator) {
        const { name, email, password, role, gender, age } = data

        const missingFields =
            !name || !email || !password || !role || !gender || !age
        if (missingFields)
            throw new Error(
                'Name, email, password, role, gender and age are required fields'
            )

        const shortFields =
            name.length < 6 || name.length < 6 || name.length < 6
        if (shortFields)
            throw new Error(
                'User fields name, email and password should be at least 6 characters long'
            )

        const negativeAge = age <= 0
        if (negativeAge)
            throw new Error('User age should not be equal or below 0')

        const isValidEmail = emailValidator(email)
        if (!isValidEmail) throw new Error('User email should be valid')

        const user = {
            name,
            email,
            password,
            role,
            gender,
            age
        }

        return user
    }
}
