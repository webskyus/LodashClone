'use strict'

/**
 * @constructor
 * @param {array} arr
 * @param {number} size
 * @return _.chunk(['a', 'b', 'c', 'd'], 2) => [['a', 'b'], ['c', 'd']]
 */

const chunk = (arr, size) => {
  const numberValidate = Number.isInteger(size)
  const arrValidate = Array.isArray(arr)
  const arrLength = arr.length
  const arrSize = arrLength / size
  const arrLengthValidate = arrLength >= size
  const flag = numberValidate && arrValidate && arrLengthValidate

  if (flag) {
    const result = []

    for (let i = 0; i < arrLength; i += arrSize) {
      const divedArr = arr.slice(i, i + arrSize)
      result.push(divedArr)
    }

    return result
  }

  if (!arrLengthValidate) {

    return arr
  }

  throw new Error('Please send use array and number')
}

export default chunk







