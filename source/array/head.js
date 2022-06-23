'use strict'

/**
 * @constructor
 * @param {array} arr
 * @return (*): Returns the first element of array.
 */

const head = arr => {
  const arrValidate = Array.isArray(arr) && arr.length >= 1

  if (arrValidate) {
    return arr[0]
  }

  return undefined
}

export default head
