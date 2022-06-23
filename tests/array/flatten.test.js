import '../../polyfill/index.js'
import flatten from '../../source/array/flatten.js'

test('Flatten fn returns the new flattened array', () => {
  expect(flatten([1, [2, [3, [4]], 5]]))
    .toEqual(expect.arrayContaining([1, 2, [3, [4]], 5]))
})
