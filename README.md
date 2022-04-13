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
<code>
differenceBy([{ 'x': 2 }, { 'x': 1 }], [{ 'x': 1 }], 'x')
</code>

__________________________________
