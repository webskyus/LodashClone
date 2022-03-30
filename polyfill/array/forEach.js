export default Array.prototype.customForEach = function (callback) {
  const arr = this

  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i)
  }
}
