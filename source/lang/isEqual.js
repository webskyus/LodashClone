/**
 * @constructor
 * @param {a} any
 * @param {b} any
 * @return true if a === b
 */

const getTypeOf = x => {
    return Object.prototype.toString.call(x).slice(8, -1)
}

const isPrimitiveType = x => {
  return ['Null', 'Undefined', 'Number', 'String', 'BigInt', 'Boolean', 'Symbol'].includes(x)
}

const isEqualMaster = (a, b, pull) => {
  if (pull.has(a)) {
    return pull.get(a) === b
  }

  const typeA = getTypeOf(a)
  const typeB = getTypeOf(b)

  if (typeA !== typeB) {
    return false
  }

  if (isPrimitiveType(typeA)) {

    if (typeA === 'Number') {
      if (isNaN(a) || isNaN(b)) {
        return isNaN(a) && isNaN(b)
      }
    }

    return a === b
  }

  if (a === b) {
    return true
  }

  pull.set(a, b)
  pull.set(b, a)

  if (typeA === 'Array') {
    if (a.length !== b.length) {
      return false
    }

    for (let i = 0; i < a.length; i++) {
      if (!isEqualMaster(a[i], b[i], pull)) {
        return false
      }
    }

    return true
  } else {
    const keysA = Object.keys(a)
    const keysB = Object.keys(b)

    if (keysA.length !== keysB.length) {
      return false
    }

    for (const key of keysA) {
      if (!keysB.includes(key)) {
        return false
      }
    }

    for (const key of keysA) {
      if (!isEqualMaster(a[key], b[key], pull)) {
        return false
      }
    }

    return true
  }
}

const isEqual = (a, b) => {
  const pull = new Map()
  const result = isEqualMaster(a,b, pull)

  pull.clear()
  return result
}



export default isEqual;





