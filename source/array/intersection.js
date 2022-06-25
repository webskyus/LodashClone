'use strict'

import isEqual from "../lang/isEqual.js";

/**
 * @constructor
 * @param {array} arr
 * @return Returns the new array of intersecting value
 */

const intersection = (...args) => {
  const arrValidate = Array.isArray(args) && args.length > 0

  if (arrValidate) {
    for (let i = 0; i < args.length; i++) {
      const comparedItem = args[i]

      for (let j = 0; j < args.length; j++) {
        const comparedInnerItem = args[j]

       if (i !== j) {
         return comparedItem.customFilter(item => {
           if (typeof item !== "object" || item === null) {
             return comparedInnerItem.map(innerItem => isEqual(item, innerItem))
           } else {
             return false
           }
         })
       }
      }
    }
  }

  return []
}

export default intersection
