'use strict'

/**
 * @constructor
 * @param {array} arr
 * @param number
 * @return Returns the slice of array.
 */

const dropRight = (arr, number) => {
  const arrValidate = Array.isArray(arr)
  const arrLength = arrValidate && arr.length
  const arrLengthValidate = arrValidate && (arrLength >= number || !number)

  if (arrValidate && arrLengthValidate) {
    if (number) {
      return arr.customSlice(0, number)
    } else {
      return arr.customSlice(0, arrLength - 1)
    }
  }

  return []
}

export default dropRight
