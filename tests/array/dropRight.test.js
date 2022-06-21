import '../../polyfill/index.js'
import dropRight from "../../source/array/dropRight.js";

test('Example dropRight([1, 2, 3], 1) => [1, 2]', () => {
  expect(dropRight([1, 2, 3], 2))
    .toEqual(expect.arrayContaining([1, 2]))
  expect(dropRight([1, 2, 3], 1))
    .toEqual(expect.arrayContaining([1]))
  expect(dropRight([1, 2, 3], 5))
    .toEqual(expect.arrayContaining([]))
})
