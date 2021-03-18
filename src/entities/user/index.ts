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

        if (!name || !email || !password || !role || !gender || !age)
            throw new Error(
                'Name, email, password, role, gender and age are required fields'
            )

        if (name.length < 6 || name.length < 6 || name.length < 6)
            throw new Error(
                'User fields name, email and password should be at least 6 characters long'
            )

        if (age <= 0) throw new Error('User age should not be equal or below 0')

        const isEmailValid = emailValidator(email)
        if (!isEmailValid) throw new Error('User email should be valid')

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
