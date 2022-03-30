export default Array.prototype.customPush = function () {
  const currentArray = this
  currentArray[currentArray.length] = arguments[0]
}
