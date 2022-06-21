import '../../polyfill/index.js'
import concat from "../../source/array/concat.js";

test('Example concat(array, 2, [3], [[4]] => [1, 2, 3, [4]]', () => {
  expect(concat([], 1, 2, [3], [[4]]))
  .toEqual(expect.arrayContaining([1, 2, 3, [4]]))
})
