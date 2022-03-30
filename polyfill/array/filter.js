export default Array.prototype.customFilter = function (callback) {
  const arr = this
  const generatedArr = []

  for (let i = 0; i < arr.length; i++) {
    if (callback.apply(arr, [arr[i], i, arr])) {
      generatedArr.customPush(arr[i])
    }
  }

  return generatedArr
}
