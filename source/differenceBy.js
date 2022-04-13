'use strict'

/**
 * @constructor
 * @param originArr
 * @param comparedArr
 * @param property
 * @return differenceBy([2, 1], [2, 3], property) => [1]
 */

const differenceBy = (originArr, comparedArr, property) => {
  const firstElement = Array.isArray(originArr)
  const comparedElement = Array.isArray(comparedArr)
  const validationPropFunction = firstElement && comparedElement && typeof property === 'function'
  const validationPropObject = firstElement && comparedElement && typeof property === 'string'

  if (validationPropFunction) {
    const comparedArrUpdated = comparedArr.customMap(item => property(item))

    return originArr.customFilter(item => {
      const updatedItem = property(item)

      return updatedItem !== item && !comparedArrUpdated.includes(updatedItem)
    })
  }

  if (validationPropObject) {
    return originArr.filter((item) => {
      const currentProp = item[property]
      return !comparedArr.map(comparedItem => comparedItem[property]).includes(currentProp)
    })
  }

  return originArr
}

export default differenceBy
