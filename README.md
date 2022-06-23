# LodashClone
A modern JavaScript utility library delivering modularity, performance &amp; extras.
__________________________________

#### ✅ Array / ._chunk
<code>
chunk(['a', 'b', 'c', 'd'], 2) => [['a', 'b'], ['c', 'd']]
</code>

__________________________________

#### ✅ Array / ._compact
<code>
compact([0, 1, false, 2, '', 3]) => [1, 2, 3]
</code>

__________________________________

#### ✅ Array / ._concat
<code>
concat(array, 2, [3], [[4]] => [1, 2, 3, [4]]
</code>

__________________________________

#### ✅ Array / ._difference
<code>
difference([2, 1], [2, 3]) => [1]
</code>

__________________________________

#### ✅ Array / ._differenceBy
<code>
differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor)
</code>
<br/>
<code>
differenceBy([{ 'x': 2 }, { 'x': 1 }], [{ 'x': 1 }], 'x')
</code>

__________________________________

#### ❌ Array / ._differenceWith

__________________________________

#### ✅ Array / ._drop
<code>
drop([1, 2, 3], 1) => [2, 3]
</code>

__________________________________

#### ✅ Array / ._dropRight
<code>
dropRight([1, 2, 3], 1) => [1, 2]
</code>

__________________________________

#### ❌ Array / .dropRightWhile

__________________________________

#### ❌ Array / .dropWhile

__________________________________

#### ✅ Array / .fill
<code>
fill([4, 6, 8, 10], '*', 0, 2)=>[ '*', '*', 8, 10 ]
</code>
<br/>
<code>
fill([4, 6, 8], '*')=>[ '*', '*', '*']
</code>
<br/>
<code>
fill([4, 6, 8], '*', 1)=>[ 4, '*', '*']
</code>

__________________________________
#### ✅ Array / .findIndex

<code>
  const users = [
    <p style="margin-left: 40px; line-height: 0">{ 'user': 'barney',  'active': false },</p>
    <p style="margin-left: 40px; line-height: 0; margin-bottom: 0">{ 'user': 'fred',    'active': false },</p>
    <p style="margin-left: 40px; line-height: 0">{ 'user': 'pebbles', 'active': true },</p>
  ];
</code>
<br>
<code>
findIndex(users, ['active', false]) => 0
</code>
<br/>
<code>
findIndex(users, { 'user': 'fred',  'active': false }) => 1
</code>
<br/>
<code>
findIndex(users, 'active') => 2
</code>

__________________________________
#### ✅ Array / .findIndex

<code>
  const users = [
    <p style="margin-left: 40px; line-height: 0">{ 'user': 'barney',  'active': true },</p>
    <p style="margin-left: 40px; line-height: 0; margin-bottom: 0">{ 'user': 'fred',    'active': false },</p>
    <p style="margin-left: 40px; line-height: 0">{ 'user': 'pebbles', 'active': false },</p>
  ];
</code>
<br>
<code>
findLastIndex(users, function(o) { return o.user == 'pebbles'; }) => 2
</code>
<br/>
<code>
findLastIndex(users, { 'user': 'fred',  'active': false }) => 2
</code>
<br/>
<code>
findLastIndex(users, 'active') => 0
</code>

__________________________________
#### ✅ Array / .head
<code>
_.head([1, 2, 3]);
// => 1

_.head([]);
// => undefined
</code>

__________________________________
#### ✅ Array / .flatten
<code>
_.flatten([1, [2, [3, [4]], 5]]);
// => [1, 2, [3, [4]], 5]
</code>

__________________________________
#### ✅ Array / .flattenDeep
<code>
_.flatten([1, [2, [3, [4]], 5]]);
// => [1, 2, 3, 4, 5]
</code>
