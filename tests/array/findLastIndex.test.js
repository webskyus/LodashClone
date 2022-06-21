import '../../polyfill/index.js'
import findLastIndex from "../../source/array/findLastIndex.js";

test(`Example findLastIndex(users, ['active', false]) => 0`, () => {
  const users = [
    { 'user': 'barney',  'active': true },
    { 'user': 'fred',    'active': false },
    { 'user': 'pebbles', 'active': false }
  ];

  expect(findLastIndex(users, function(o) { return o.user === 'pebbles'; }))
    .toBe(2)
  expect(findLastIndex(users, ['active', false]))
    .toBe(2)
  expect(findLastIndex(users, { 'user': 'barney',  'active': true }))
    .toBe(0)
  expect(findLastIndex(users, 'active'))
    .toBe(0)
})
