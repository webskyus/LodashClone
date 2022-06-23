export default Array.prototype.customPush = function () {
  const currentArray = this

  for (let i = 0; i < arguments.length; i++) {
    currentArray[currentArray.length] = arguments[i]
  }

  return currentArray.length
}
