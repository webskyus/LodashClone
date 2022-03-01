'use strict'

/**
 * @constructor
 * @param {array} (array): The array to concatenate.
 * @param [values] (...*): The values to concatenate.
 * @return _.concat(array, 2, [3], [[4]] => [1, 2, 3, [4]]
 */

function concat() {
  const arr = Array.isArray(arguments[0]) && arguments[0]
  const concatItems = [...arguments]
    .slice(1, arguments.length)
    .map(item => Array.isArray(item) ? arr.push(...item) : arr.push(item))

  return arr
}

export default concat
