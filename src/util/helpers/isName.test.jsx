import isName from './isName'

describe('isName', () => {
  it('is true for one name', () => {
    expect(isName('Anthony')).toBe(true)
  })

  it('is true for two names', () => {
    expect(isName('Anthony Good')).toBe(true)
  })

  it('is true with upper crust hyphenated name', () => {
    expect(isName('Anthony Barrington-Wheatley')).toBe(true)
  })

  it('is false if value contains numbers', () => {
    expect(isName('Anthony 1')).toBe(false)
  })

  it('is false if name contains punctuation marks', () => {
    expect(isName('Anthony, Good')).toBe(false)
  })

  it('is still true if name contains silly spacing', () => {
    expect(isName('Anthony         Good')).toBe(true)
  })
})
