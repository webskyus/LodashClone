'use strict'

/**
 * @constructor
 * @param {array} arr
 * @return compact([0, 1, false, 2, '', 3]) => [1, 2, 3]
 */

const compact = arr => {
  const arrValidate = Array.isArray(arr)

  if (arrValidate) {
    return arr.customReduce((acc, value) => {
      const validate = !Boolean(value)

      !validate && acc.customPush(value)
      return acc
    }, [])
  }

  return []
}

export default compact
