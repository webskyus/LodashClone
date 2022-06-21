import '../../polyfill/index.js'
import differenceBy from "../../source/array/differenceBy.js";

test('Example differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor) => [1.2]', () => {
  expect(differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor))
    .toEqual(expect.arrayContaining([1.2]))
  expect(differenceBy([{ 'x': 2 }, { 'x': 1 }], [{ 'x': 1 }], 'x'))
    .toEqual(expect.arrayContaining([ { x: 2 } ]))
})
