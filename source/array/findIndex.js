'use strict'

import isEqual from "../lang/isEqual.js";

/**
 * @constructor
 * @param {array} arr
 * @param [predicate=_.identity] (Function): The function invoked per iteration
 * @return {number}: Returns the index of the found element, else -1.
 */

const findIndex = (arr, ...args) => {
  const arrValidate = Array.isArray(arr)
  const argFunctionValidate = typeof args[0] === 'function'
  const argArrValidate = Array.isArray(args[0])
  const arrObjValidate = typeof args[0] === 'object'
  const arrStringValidate = typeof args[0] === 'string'
  const arg = args[0]
  const argKey = args[0][0]
  const argValue = args[0][1]

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
  } else if (arrValidate && argArrValidate) {
    return arr.customReduce((acc, item, index) => {
      if (item[argKey] === argValue && !acc.flag) {
        acc.flag = true
        acc.index = index
      }
    }, {flag: false, index: 0}).index
  } else if (arrValidate && arrObjValidate) {
    return arr.customReduce((acc, item, index) => {
      if (isEqual(item, arg)) {
        acc.flag = true
        acc.index = index
      }
    }, {flag: false, index: 0}).index
  } else if (arrValidate && arrStringValidate) {
    const argKey = args[0]
    return arr.customReduce((acc, item, index) => {
      if (item[argKey] && !acc.flag) {
        acc.flag = true
        acc.index = index
      }
    }, {flag: false, index: 0}).index
  }

  return arr
}

export default findIndex
