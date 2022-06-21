import '../../polyfill/index.js'
import chunk from '../../source/array/chunk.js'

test(`Chunk fn divides the array by the specified number`,
  () => {
    expect(chunk(['a', 'b', 'c', 'd'], 2))
      .toEqual(expect.arrayContaining([['a', 'b'], ['c', 'd']]));
  });

