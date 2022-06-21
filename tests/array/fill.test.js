import '../../polyfill/index.js'
import fill from "../../source/array/fill.js";

test(`Example fill([4, 6, 8], '*')=> [ '*', '*', '*']`, () => {
  expect(fill([4, 6, 8], '*'))
    .toEqual(expect.arrayContaining(['*', '*', '*']))
  expect(fill([4, 6, 8], '*', 1))
    .toEqual(expect.arrayContaining([4, '*', '*']))
  expect(fill([4, 6, 8], '*', 2))
    .toEqual(expect.arrayContaining([4, 6, '*']))
  expect(fill([4, 6, 8], '*', 3))
    .toEqual(expect.arrayContaining([4, 6, 8]))
  expect(fill([4, 6, 8], '*', 4))
    .toEqual(expect.arrayContaining([4, 6, 8]))
  expect(fill([1,2,3,5], '2', 1, 3))
    .toEqual(expect.arrayContaining([ 1, '2', '2', 5 ]))
})
