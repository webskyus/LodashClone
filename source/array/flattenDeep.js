'use strict'

/**
 * @constructor
 * @param {array} arr
 * @return (Array): Returns the new flattened array.
 */

const flattenDeep = arr => {
  const arrValidate = Array.isArray(arr)
  const flattenDeepArr = []

  if (arrValidate) {
    arr.customForEach(item => {
      const arrItemValidate = Array.isArray(item) && item.length > 0

      !arrItemValidate
        ? flattenDeepArr.customPush(item)
        : flattenDeepArr.customPush(...flattenDeep(item))
    })
  }

  return flattenDeepArr
}

export default flattenDeep
