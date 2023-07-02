// 1. 引入fs模块
const fs = require('fs')

// 2. 异步调用 appendFile
fs.appendFile('./座右铭.txt', '\n择其善者而从之，其不善者而改之', err => {
  if(err) {
    console.log("异步调用追加写入报错: ", err)
    return
  }
  console.log("异步调用追加成功");
})

// 3. 同步调用
fs.appendFileSync('./座右铭.txt', '\n温故知新，可以为师也')

// 4. writeFile也是也可以追加写入的
fs.writeFile('./座右铭.txt', 'love love love', {flag: 'a'}, err => {
  if(err) {
    console.log('writeFile追加写入报错: ', err);
    return
  }
  console.log('writeFile追加写入成功');
})