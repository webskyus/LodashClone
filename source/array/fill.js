'use strict'

/**
 * @constructor
 * @param {array} arr
 * @param number
 * @return Returns the slice of array.
 */

const fill = (arr, ...args) => {
  const arrValidate = Array.isArray(arr)
  const argsArrLengthValidate = args.length !== 0
  const argsArrLength = argsArrLengthValidate && args.length

  if (arrValidate && argsArrLengthValidate) {
    if (argsArrLength === 1) {
      return arr.customMap(() => args[0])
    } else if (argsArrLength === 2 && Number.isInteger(args[1]) && !args[2]) {
      return arr.customMap((item, index) => {
        if (index >= args[1]) {
          return args[0]
        } else {
          return item
        }
      })
    } else if (argsArrLength === 3 && Number.isInteger(args[1]) && Number.isInteger(args[2])) {
      return arr.customMap((item, index) => {
        if (index >= args[1] && index < args[2]) {
          return args[0]
        } else {
          return item
        }
      })
    }
  }

  return arr
}

export default fill
