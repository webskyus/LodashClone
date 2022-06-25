'use strict'

/**
 * @constructor
 * @param {array} arr
 * @return Gets all but the last element of array.
 */

const initial = arr => {
  const arrValidate = Array.isArray(arr) && arr.length > 0

  if (arrValidate) {
    return arr.customSlice(0, arr.length - 1)
  }

  return []
}

export default initial
