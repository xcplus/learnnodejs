// 1. 导入express
const express = require('express')

// 2. 创建应用对象
const app = express()

// 3. 创建路由
app.get('/:id.html', (req, res) => {
  console.log(req.params)
  res.send('商品详情')
})

// 4. 监听端口，启动服务
app.listen(9000, () => {
  console.log('服务已经启动，端口: 9000, 链接: http://localhost:9000')
})