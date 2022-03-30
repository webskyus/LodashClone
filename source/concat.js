'use strict'

/**
 * @constructor
 * @param {array} (array): The array to concatenate.
 * @param [values] (...*): The values to concatenate.
 * @return concat(array, 2, [3], [[4]] => [1, 2, 3, [4]]
 */

const concat = (...args) => {
  const arr = Array.isArray(args[0]) && args[0]
  args
    .customSlice(1, args.length)
    .customMap(item => Array.isArray(item) ? arr.customPush(...item) : arr.customPush((item)))

  return arr
}

export default concat
