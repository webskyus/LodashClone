import {
  chunk,
  compact,
  concat
} from './js/lodash-clone.js';


console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10));
console.log(compact([1, 2, 3, false, '', null]));
console.log(concat([1, 3, 5], 1, 3, 5, 6, 6, [4], [[300]]));
