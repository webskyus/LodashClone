'use strict'

/**
 * @constructor
 * @param {array} arr
 * @return (Array): Returns the new flattened array.
 */

const flatten = arr => {
  const arrValidate = Array.isArray(arr)
  const flattenArr = []

  if (arrValidate) {
    arr.customForEach(item => {
      const arrItemValidate = Array.isArray(item) && item.length > 0

      !arrItemValidate
        ? flattenArr.customPush(item)
        : flattenArr.customPush(...item)
    })
  }

  return flattenArr
}

export default flatten
