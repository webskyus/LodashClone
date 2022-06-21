import '../../polyfill/index.js'
import difference from "../../source/array/difference.js";

test('Example difference([2, 1], [2, 3]) => [1]', () => {
  expect(difference([2, 1], [2, 3]))
    .toEqual(expect.arrayContaining([1]))
})
