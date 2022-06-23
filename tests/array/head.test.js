import '../../polyfill/index.js'
import head from '../../source/array/head.js'

test('Head fn returns the first element of array', () => {
  expect(head([0, 1, false, 2, '', 3])).toBe(0)
  expect(head([])).toBe(undefined)
})
