// 1. 引入fs模块
const fs = require('fs')

// 2. 异步读取
fs.readFile('./观书有感.txt', (err, data) => {
  if(err) {
    console.log('读取有误: ', err)
    return
  }
  console.log(data.toString());
})

console.log('--------------------')

// 3. 同步读取
let data = fs.readFileSync('./观书有感.txt')
console.log('同步读取.....\n', data.toString());