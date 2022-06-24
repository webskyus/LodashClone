import '../../polyfill/index.js'
import indexOf from '../../source/array/indexOf.js'

test('Returns the index of the matched value, else -1', () => {
  expect(indexOf([1, 2, 3, 4], 4))
    .toBe(3)
  expect(indexOf([1, 2, 3, 4, 1, 2, 3, 4], 4, 2))
    .toBe(3)
  expect(indexOf([1, 2, 3, 4, 1, 2, 3, 4], 4, 4))
    .toBe(7)
  expect(indexOf([1, 2, 1, 2], 2))
    .toBe(1)
  expect(indexOf([1, 2, 1, 2], 1, 2))
    .toBe(2)
  expect(indexOf([1, 2, 1, 2], 2, 2))
    .toBe(3)
})
