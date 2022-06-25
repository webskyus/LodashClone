# LodashClone
A modern JavaScript utility library delivering modularity, performance &amp; extras.
__________________________________

#### ✅ Array / ._chunk
#### Creates an array of elements split into groups the length of size. If array can't be split evenly, the final chunk will be the remaining elements
<code>
chunk(['a', 'b', 'c', 'd'], 2) => [['a', 'b'], ['c', 'd']]
</code>

__________________________________

#### ✅ Array / ._compact
#### Creates an array with all falsey values removed. The values false, null, 0, "", undefined, and NaN are falsey
<code>
compact([0, 1, false, 2, '', 3]) => [1, 2, 3]
</code>

__________________________________

#### ✅ Array / ._concat
#### Creates a new array concatenating array with any additional arrays and/or values
<code>
concat(array, 2, [3], [[4]] => [1, 2, 3, [4]]
</code>

__________________________________

#### ✅ Array / ._difference
#### Creates an array of array values not included in the other given arrays using SameValueZero for equality comparisons. The order and references of result values are determined by the first array
<code>
difference([2, 1], [2, 3]) => [1]
</code>

__________________________________

#### ✅ Array / ._differenceBy
#### This method is like _.difference except that it accepts iteratee which is invoked for each element of array and values to generate the criterion by which they're compared. The order and references of result values are determined by the first array. The iteratee is invoked with one argument:
(value)
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
#### Creates a slice of array with n elements dropped from the beginning
<code>
drop([1, 2, 3], 1) => [2, 3]
</code>

__________________________________

#### ✅ Array / ._dropRight
#### Creates a slice of array with n elements dropped from the end
<code>
dropRight([1, 2, 3], 1) => [1, 2]
</code>

__________________________________

#### ❌ Array / .dropRightWhile

__________________________________

#### ❌ Array / .dropWhile

__________________________________

#### ✅ Array / .fill
#### Fills elements of array with value from start up to, but not including, end
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
#### Fills elements of array with value from start up to, but not including, end. This method mutates array

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
#### This method is like _.find except that it returns the index of the first element predicate returns truthy for instead of the element itself

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
#### Gets the first element of array
<code>
head([1, 2, 3]);
// => 1
</code>
<br>
<code>
head([]);
// => undefined
</code>

__________________________________
#### ✅ Array / .flatten
#### Flattens array a single level deep
<code>
flatten([1, [2, [3, [4]], 5]]);
// => [1, 2, [3, [4]], 5]
</code>

__________________________________
#### ✅ Array / .flattenDeep
#### Recursively flattens array
<code>
flatten([1, [2, [3, [4]], 5]]);
// => [1, 2, 3, 4, 5]
</code>

__________________________________
#### ✅ Array / .indexOf
#### Gets the index at which the first occurrence of value is found in array using SameValueZero for equality comparisons. If fromIndex is negative, it's used as the offset from the end of array
<code>
indexOf([1, 2, 3, 4], 4)
// => 3
</code>
<br>
<code>
indexOf([1, 2, 3, 4, 1, 2, 3, 4], 4, 2)
// => 3
</code>
<br>
<code>
indexOf([1, 2, 1, 2], 2, 20)
// => -1
</code>

__________________________________
#### ✅ Array / .initial
#### Gets all but the last element of array
<code>
initial([1,2,3]) => [1,2]
</code>


__________________________________
#### ✅ Array / .intersection
#### Returns the new array of intersecting values
<code>
intersection([1,2,3], [1,2,4]) => [1,2]
</code>

