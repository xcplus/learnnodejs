// 声明一个函数
function tiemo() {
  console.log('贴膜....');
}
//捏脚
function niejiao() {
  console.log('捏脚....');
}


// 1. 暴露数据
// 暴露函数
// module.exports = tiemo
// 这个exports是一个属性，可以暴露任意数据， 不能使用exports = value的形式暴露 因为exports = module.exports = {}
// module.exports = {
//   tiemo,
//   niejiao
// }

// 2. 暴露数据
// 这个exports是一个变量
exports.niejiao = niejiao
exports.tiemo = tiemo