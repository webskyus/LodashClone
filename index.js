import './polyfill/index.js'
import chunk from './source/chunk.js'

console.log(
  chunk(['a', 'b', 'c', 'd'], 2),
)
