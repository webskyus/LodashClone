'use strict'

/**
 * @constructor
 * @param {array} arr
 * @param number
 * @return Returns the slice of array.
 */

const drop = (arr, number) => {
  const arrValidate = Array.isArray(arr)
  const arrLength = arrValidate && arr.length
  const arrLengthValidate = arrValidate && (arrLength >= number || !number)

  if (arrValidate && arrLengthValidate) {
    if (number) {
      return arr.customSlice(number, arrLength)
    } else {
      return arr.customSlice(1, arrLength)
    }
  }

  return []
}

export default drop
