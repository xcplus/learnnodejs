// 1. 引入fs模块
const fs = require('fs')

// 2. 创建一个读取流对象
const rs = fs.createReadStream('./观书有感.txt')

// 3. 绑定data事件
rs.on('data', chunk => {
  console.log('chunk: ', chunk.length);
})

// 4. end 事件, 这个是可选事件
rs.on('end', () => {
  console.log('读取完成');
})
