const test = {
  name: 'abc'
}

module.exports = test

// 输出： 通过 arguments.callee.toString() 查看自执行函数
// console.log(arguments.callee.toString())