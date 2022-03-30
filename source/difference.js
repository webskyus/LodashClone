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
    [1,3,5,6,6].customFilter(item => console.log('customFilter', item))
  }

}

export default difference
