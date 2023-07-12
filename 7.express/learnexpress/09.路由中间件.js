/**
 * 针对 /admin /setting 的请求，要求 url 携带 code=521 参数，如未携带提示【暗号错误】
 */
// 1. 导入express
const express = require('express')

// 2. 创建应用对象
const app = express()

// 3. 创建路由
app.get('/home', (req, res) => {
  res.send('前台首页')
})

// 声明中间件
let checkCodeMiddleware = (req, res, next) => {
  // 判断URL中是否含有code = 521
  if(req.query.code === '521') {
    next()
  } else {
    res.status(401).send('您没有权限')
  }
}

app.get('/admin', checkCodeMiddleware, (req, res) => {
  res.send('后台首页')
})

app.get('/setting', checkCodeMiddleware, (req, res) => {
  res.send('系统设置')
})

app.all('*', (req, res) => {
  res.send('<h1>404 Not Found</h1>')
})

// 4. 监听端口，启动服务
app.listen(9000, () => {
  console.log('服务已经启动，端口: 9000, 链接: http://localhost:9000')
})