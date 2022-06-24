'use strict'

/**
 * @constructor
 * @param {array} arr
 * @param {value} (*): The value to search for.
 * @param [fromIndex=0] (number): The index to search from.
 * @return (number): Returns the index of the matched value, else -1.
 */

const indexOf = (arr, ...args) => {
  const value = args[0]
  const hasFromIndex = args[1]

  return arr.customReduce((acc, item, index) => {
    const compareValue = item === value && !acc.flag
    const hasFromIndexFlag = hasFromIndex && hasFromIndex - 1 < index

    if (hasFromIndexFlag && !acc.flag) {
      if (compareValue) {
        acc.flag = true
        return acc.index = index
      }
    } else if (!hasFromIndex && compareValue) {
      acc.flag = true
      return acc.index = index
    }

  }, {index: -1, flag: false}).index
}

export default indexOf
