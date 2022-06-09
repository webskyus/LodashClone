import '../polyfill/index.js'
import chunk from '../source/chunk.js'

test(`chunk(['a', 'b', 'c', 'd'], 2) => [['a', 'b'], ['c', 'd']]`, () => {
  expect(chunk(['a', 'b', 'c', 'd'], 2))
    .toEqual(expect.arrayContaining([['a', 'b'], ['c', 'd']]));
});

