import {
  chunk,
  compact
} from './js/lodash-clone.js';


console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10));
console.log(compact([1, 2, 3, false, '', null]));
