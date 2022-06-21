'use strict'

import isEqual from "../lang/isEqual.js";

/**
 * @constructor
 * @param {array} arr
 * @param [predicate=_.identity] (Function): The function invoked per iteration
 * @return {number}: Returns the index of the found element, else -1.
 */

const findLastIndex = (arr, ...args) => {
  const arrValidate = Array.isArray(arr)
  const argFunctionValidate = typeof args[0] === 'function'
  const argArrValidate = Array.isArray(args[0])
  const arrObjValidate = typeof args[0] === 'object'
  const arrStringValidate = typeof args[0] === 'string'
  const arg = args[0]
  const argKey = args[0][0]
  const argValue = args[0][1]

  if (arrValidate && argFunctionValidate) {
    for (let i = 0; i < arr.length; i++) {
      const lastIndex = !arg.apply(arr, [arr[i]]) && i === arr.length - 1

      arg.apply(arr, [arr[i]])
      if (arg.apply(arr, [arr[i]])) {
        return i
      } else if (lastIndex) {
        return -1
      }
    }


    return arr
  } else if (arrValidate && argArrValidate) {
    return arr.customReduce((acc, item, index) => {
      if (item[argKey] === argValue && !acc.flag) {
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
    return arr.customReduce((acc, item, index) => {
      if (item[argKey] && !acc.flag) {
        acc.flag = true
        acc.index = index
      }
    }, {flag: false, index: 0}).index
  }

  return arr
}

export default findLastIndex
