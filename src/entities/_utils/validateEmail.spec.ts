import { validateEmail } from '.'

describe('testing user entity', () => {
    test('rafael should not be a valid email', () => {
        const result = validateEmail('rafael')
        expect(result).toEqual(false)
    })

    test('rafael@ should not be a valid email', () => {
        const result = validateEmail('rafael@')
        expect(result).toEqual(false)
    })

    test('rafael@gmail should not be a valid email', () => {
        const result = validateEmail('rafael@gmail')
        expect(result).toEqual(false)
    })

    test('rafael@.c should not be a valid email', () => {
        const result = validateEmail('rafael@.c')
        expect(result).toEqual(false)
    })

    test('r@c.c should not be a valid email', () => {
        const result = validateEmail('r@c.c')
        expect(result).toEqual(false)
    })

    test('rafael@gmail.com be a valid email', () => {
        const result = validateEmail('rafael@gmail.com')
        expect(result).toEqual(true)
    })
})
