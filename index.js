import './polyfill/index.js'
import flattenDeep from "./source/array/flattenDeep.js";

console.log('flattenDeep', flattenDeep([1, [2, [3, [4]], 5]]))
console.log('flattenDeep', flattenDeep([]))
