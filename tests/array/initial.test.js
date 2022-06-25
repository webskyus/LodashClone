import '../../polyfill/index.js'
import initial from '../../source/array/initial.js'

test('Returns the slice of array', () => {
  expect(initial([0, 1, 2, 3]))
    .toEqual(expect.arrayContaining([0, 1, 2]))
  expect(initial([0, 1]))
    .toEqual(expect.arrayContaining([0]))
  expect(initial([0]))
    .toEqual(expect.arrayContaining([]))
})
