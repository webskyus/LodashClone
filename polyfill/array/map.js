export default Array.prototype.customMap = function (callback) {
  const arr = this
  const generatedArr = []

  for (let i = 0; i < arr.length; i++) {
      generatedArr.push(callback(arr[i], i, arr))
  }

  return generatedArr
}
