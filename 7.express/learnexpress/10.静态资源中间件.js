/**
 * 注意: 
 * 1. index.html 文件默认为打开的资源
 * 2. 如果静态资源与路由规则同时匹配，谁先匹配谁就响应
 * 3. 路由响应动态资源，静态资源中间件响应静态资源
 */
// 1. 导入express
const express = require('express')

// 2. 创建应用对象
const app = express()

// 静态资源中间件设置
app.use(express.static(__dirname + '/public'))

// 3. 创建路由
app.get('/home', (req, res) => {
  res.send('hello express')
})

// 4. 监听端口，启动服务
app.listen(9000, () => {
  console.log('服务已经启动，端口: 9000, 链接: http://localhost:9000')
})