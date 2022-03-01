'use strict'

/**
 * @constructor
 * @param {array} arr
 * @return _.compact([0, 1, false, 2, '', 3]) => [1, 2, 3]
 */

const compact = arr => {
  return arr.reduce((acc, value) => {
    const validate = value === null || !value || value === '' || value === 0

    !validate && acc.push(value)
    return acc
  }, [])
}

export default compact
