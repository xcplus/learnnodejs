// 1. 导入express
const express = require('express')

// 2. 创建应用对象
const app = express()

// 3. 创建路由
app.get('/request', (req, res) => {
  // 原生操作
  console.log(req.method) // 请求的方法
  console.log(req.url) // 请求url
  console.log(req.httpVersion) // 请求协议版本
  console.log(req.headers) // 请求头

  // express 操作
  console.log(req.path) // 请求path
  console.log(req.query) // 查询字符串
  console.log(req.ip) // 获取IP
  console.log(req.get('host')); // 获取某个请求头
  res.send('hello express')
})

// 4. 监听端口，启动服务
app.listen(9000, () => {
  console.log('服务已经启动，端口: 9000, 链接: http://localhost:9000')
})