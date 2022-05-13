'use strict'

/**
 * @constructor
 * @param {array} arr
 * @param [predicate=_.identity] (Function): The function invoked per iteration
 * @return {Array}: Returns the index of the found element, else -1.
 */

const findIndex = (arr, ...args) => {
  const arrValidate = Array.isArray(arr)
  const argFunctionValidate = typeof args[0] === 'function'

  if (arrValidate && argFunctionValidate) {
    const argFunction = args[0]

    for (let i = 0; i < arr.length; i++) {
      argFunction.apply(arr, [arr[i]])
      if (argFunction.apply(arr, [arr[i]])) {
        return i
      } else {
        return -1
      }
    }

    return arr
  }

  return arr
}

export default findIndex
