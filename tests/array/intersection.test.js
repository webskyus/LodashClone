import '../../polyfill/index.js'
import intersection from '../../source/array/intersection.js'

test('Returns the new array of intersecting values.', () => {
  expect(intersection([2, 1], [2, 3, 1], [2, 1, 5]))
    .toEqual(expect.arrayContaining([2, 1]))
  expect(intersection([2, 1], [2, 3, 1]))
    .toEqual(expect.arrayContaining([2, 1]))
  expect(intersection([2, 1], [2, 1]))
    .toEqual(expect.arrayContaining([2, 1]))
  expect(intersection([2, 1], []))
    .toEqual(expect.arrayContaining([]))
  expect(intersection([], []))
    .toEqual(expect.arrayContaining([]))
  expect(intersection([null, undefined], [null, undefined]))
    .toEqual(expect.arrayContaining([null, undefined]))
  expect(intersection([{}, {a: 1}], [{}, {b: 1}]))
    .toEqual(expect.arrayContaining([{}]))
})
