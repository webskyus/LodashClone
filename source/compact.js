'use strict'

/**
 * @constructor
 * @param {array} arr
 * @return compact([0, 1, false, 2, '', 3]) => [1, 2, 3]
 */

const compact = arr => {
  return arr.customReduce((acc, value) => {
    const validate = value === null || !value || value === '' || value === 0

    !validate && acc.customPush(value)
    return acc
  }, [])
}

export default compact
