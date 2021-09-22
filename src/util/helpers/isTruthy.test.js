import {isTruthy} from './'

describe('isTruthy', () => {
    it('returns true for boolean true', () => {
        expect(isTruthy(true)).toBe(true)
    })
    it('returns false for boolean false', () => {
        expect(isTruthy(false)).toBe(false)
    })
    it('returns false for empty string', () => {
        expect(isTruthy('')).toBe(false)
    })
    it('returns false for undefined', () => {
        expect(isTruthy(undefined)).toBe(false)
    })

})
