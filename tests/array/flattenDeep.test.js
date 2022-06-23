import '../../polyfill/index.js'
import flattenDeep from '../../source/array/flattenDeep.js'

test('Flatten deep fn returns the new flattened array', () => {
  expect(flattenDeep([1, [2, [3, [4]], 5]]))
    .toEqual(expect.arrayContaining([1, 2, 3, 4, 5]))
  expect(flattenDeep([1, [2, [3, [4]], [5, [2, [3, 4, [4, 5, 6]]]]]]))
    .toEqual(expect.arrayContaining([1, 2, 3, 4, 5, 2, 3, 4, 4, 5, 6]))
})
