import '../../polyfill/index.js'
import isEqual from "../../source/lang/isEqual.js";

describe('isEqual fn tests', () => {
  test('1 is equal 1', () => {
    expect(isEqual(1, 1)).toBe(true)
  })

  test('NaN is equal NaN', () => {
    expect(isEqual(NaN, NaN)).toBe(true)
  })

  test('undefined is equal undefined', () => {
    expect(isEqual(undefined, undefined)).toBe(true)
  })

  test('null is equal null', () => {
    expect(isEqual(null, null)).toBe(true)
  })

  test('null is equal null', () => {
    expect(isEqual({}, {})).toBe(true)
  })

  test('0 is not equal false', () => {
    expect(isEqual(0, false)).toBe(false)
  })

  test('null is not equal false', () => {
    expect(isEqual(null, false)).toBe(false)
  })

  test(`'' is equal ''`, () => {
    expect(isEqual('', '')).toBe(true)
  })

  test('{} is equal itself', () => {
    const a = {}
    expect(isEqual(a, a)).toBe(true)
  })

  test('[] is equal itself', () => {
    const a = []
    expect(isEqual(a, a)).toBe(true)
  })

  test('{a: 1} is equal {a: 1}', () => {
    expect(isEqual({a: 1}, {a: 1})).toBe(true)
  })

  test('{a: {b: true}} is equal {a: {b: true}}', () => {
    expect(isEqual({a: {b: true}}, {a: {b: true}})).toBe(true)
  })

  test('[circle1] is equal [circle1]', () => {
    const array1 = []
    const array2 = []

    array1.push(array1)
    array2.push(array2)

    expect(isEqual(array1, array2)).toBe(true)
  })

  test('Full comparison of objects true', () => {
    const a = {
      a: {
        b: true,
        c: false
      },
      another: [1, 3, 4]
    }
    const b = {
      a: {
        c: false,
        b: true
      },
      another: [1, 3, 4]
    }

    a.self = a
    b.self = b

    a.another.push(b)
    b.another.push(a)

    expect(isEqual(a, b)).toBe(true)
  })

  test('Full comparison of objects false', () => {
    const a = {
      a: {
        b: false,
        c: false
      },
      another: [1, 3, 4]
    }
    const b = {
      a: {
        c: false,
        b: true
      },
      another: [1, 3, 4]
    }

    a.self = a
    b.self = b

    a.another.push(b)
    b.another.push(a)

    expect(isEqual(a, b)).toBe(false)
  })

  test('[] is equal []', () => {
    expect(isEqual([], [])).toBe(true)
  })

  test('Math.PI is equal Math.PI', () => {
    expect(isEqual(Math.PI, Math.PI)).toBe(true)
  })

  test('1000.111 is equal 1000.111', () => {
    expect(isEqual(1000.111, 1000.111)).toBe(true)
  })

  test(`'1' is not equal 1'`, () => {
    expect(isEqual('1', 1)).toBe(false)
  })

  test(`'' is not equal 'Text'`, () => {
    expect(isEqual('', 'Text')).toBe(false)
  })

  test(`null is not equal undefined'`, () => {
    expect(isEqual(null, undefined)).toBe(false)
  })
})

