// 1 安装 mongoose
// 2 导入 mongoose
const mongoose = require('mongoose')
// 3. 链接 mongodb 服务
mongoose.connect('mongodb://127.0.0.1:27017/bilibili')

// 4. 设置回调
// 设置链接成功的回调 once 一次  事件回调函数只执行一次
mongoose.connection.once('open', () => {
  console.log('mongodb链接成功');
}) 

// 设置链接失败的回调
mongoose.connection.on('error', () => {
  console.log('mongodb链接失败');
}) 

// 设置链接关闭的回调
mongoose.connection.on('close', () => {
  console.log('mongodb链接关闭');
}) 

// 关闭 mongodb 的链接
// setTimeout(() => {
//   mongoose.disconnect()
// }, 2000)