export default Array.prototype.customReduce = function (callback, argument) {
  for (let i = 0; i < this.length; i++) {
    callback(argument, this[i], i)
  }

  return argument
}
