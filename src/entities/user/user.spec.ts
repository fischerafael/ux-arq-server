import { user } from '.'

describe('testing user entity', () => {
    test('User should have a name, email, password, role, gender and age', () => {
        const newUser = user.create({
            name: 'Rafael Fischer',
            email: 'rafaelfischer@gmail.com',
            password: '123',
            role: 'admin',
            gender: 'male',
            age: 30
        })
        expect(newUser).toEqual({
            name: 'Rafael Fischer',
            email: 'rafaelfischer@gmail.com',
            password: '123',
            role: 'admin',
            gender: 'male',
            age: 30
        })
    })

    test('Missing fied in user should throw', () => {
        const error = () =>
            user.create({
                name: '',
                email: '',
                password: '',
                role: 'admin',
                gender: 'male',
                age: 30
            })
        expect(error).toThrow(
            'Name, email, password, role, gender and age are required fields'
        )
    })

    test('User fields name, email and password should be at least 6 characters long', () => {
        const error = () =>
            user.create({
                name: 'abcde',
                email: 'abcde',
                password: 'abcde',
                role: 'admin',
                gender: 'male',
                age: 30
            })
        expect(error).toThrow(
            'User fields name, email and password should be at least 6 characters long'
        )
    })

    test('User age should not be equal or below 0', () => {
        const error = () =>
            user.create({
                name: 'abcdef',
                email: 'abcdef',
                password: 'abcdef',
                role: 'admin',
                gender: 'male',
                age: -1
            })
        expect(error).toThrow('User age should not be equal or below 0')
    })
})
