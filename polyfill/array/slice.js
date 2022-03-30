export default Array.prototype.customSlice = function () {
  const currentArray = this
  const from = arguments[0]
  const to = arguments[1] ? arguments[1] : currentArray.length - 1
  const generatedArray = []

  for (let i = from; i < to; i++) {
    generatedArray.customPush(currentArray[i])
  }

  if (from < 0 || to < 0 || from > to || from > currentArray.length || to > currentArray.length)
    return []
  else if (arguments.length === 0)
    return currentArray


  return generatedArray
}



