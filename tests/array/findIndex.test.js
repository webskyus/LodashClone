import '../../polyfill/index.js'
import findIndex from "../../source/array/findIndex.js";

test(`Example findIndex(users, ['active', false]) => 0`, () => {
  const users = [
    { 'user': 'barney',  'active': false },
    { 'user': 'fred',    'active': false },
    { 'user': 'pebbles', 'active': true }
  ];

  expect(findIndex(users, ['active', false]))
    .toBe(0)
  expect(findIndex(users, { 'user': 'fred',  'active': false }))
    .toBe(1)
  expect(findIndex(users, 'active'))
    .toBe(2)
})
