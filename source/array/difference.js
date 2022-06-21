'use strict'

/**
 * @constructor
 * @return difference([2, 1], [2, 3]) => [1]
 * @param originArr
 * @param comparedArr
 */

const difference = (originArr, comparedArr) => {
  const firstElement = Array.isArray(originArr)
  const comparedElement = Array.isArray(comparedArr)
  const validation = firstElement && comparedElement

  if (validation) {
    return originArr.customFilter(item => !comparedArr.includes(item))
  }

}

export default difference
