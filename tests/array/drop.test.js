import '../../polyfill/index.js'
import drop from "../../source/array/drop.js";

test('Example drop([1, 2, 3], 1) => [2, 3]', () => {
  expect(drop([1, 2, 3], 2))
    .toEqual(expect.arrayContaining([3]))
  expect(drop([1, 2, 3], 1))
    .toEqual(expect.arrayContaining([2, 3]))
  expect(drop([1, 2, 3], 5))
    .toEqual(expect.arrayContaining([]))
})
