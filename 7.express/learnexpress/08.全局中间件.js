/**
 * 记录每个请求的 url 与 ip 地址
 */
// 1. 导入express
const express = require('express')
const fs = require('fs')
const path = require('path')

// 2. 创建应用对象
const app = express()

// 声明中间件函数
function recordMiddleware(req, res, next) {
  // 获取url和ip
  let { url, ip } = req
  // 将信息保存在文件中 access.log
  fs.appendFileSync(path.resolve(__dirname, './access.log'), `${url} ${ip}\r\n`)
  // 继续执行后续回调
  next()
}

// 使用中间件函数
app.use(recordMiddleware)

// 3. 创建路由
app.get('/home', (req, res) => {
  res.send('前台首页')
})

app.get('/admin', (req, res) => {
  res.send('后台首页')
})

app.all('*', (req, res) => {
  res.send('<h1>404 Not Found</h1>')
})

// 4. 监听端口，启动服务
app.listen(9000, () => {
  console.log('服务已经启动，端口: 9000, 链接: http://localhost:9000')
})