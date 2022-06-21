import '../../polyfill/index.js'
import compact from '../../source/array/compact.js'

test('Clear falsy items in array', () => {
  expect(compact([0, 1, false, 2, '', 3]))
    .toEqual(expect.arrayContaining([1,2,3]))
})
