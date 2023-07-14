// 1. 导入express
const express = require('express')
const homeRouter = require('./routes/homeRouter')
const adminRouter = require('./routes/adminRouter')

// 2. 创建应用对象
const app = express()

app.use(homeRouter)
app.use(adminRouter)

app.all('*', (req, res) => {
  res.send('<h1>404 Not Found</h1>')
})

// 4. 监听端口，启动服务
app.listen(9000, () => {
  console.log('服务已经启动，端口: 9000, 链接: http://localhost:9000')
})