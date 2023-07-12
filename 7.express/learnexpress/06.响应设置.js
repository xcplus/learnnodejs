// 1. 导入express
const express = require('express')

// 2. 创建应用对象
const app = express()

// 3. 创建路由
app.get('/response', (req, res) => {
  // // 原生响应
  // res.statusCode = 404
  // res.statusMessage = 'love'
  // res.write('hello response')
  // res.end('response')

  // express 的响应
  // res.status(500)
  // res.set('aaa', 'bbb')
  // res.send('你好 express')
  // 等同于下面
  // res.status(500).set('abc', 'def').send('你好 Express')

  // 其他响应
  // res.redirect('http://baidu.com') // 重定向
  // res.download('./package.json') // 下载响应
  // res.json() // 响应json
  res.sendFile(__dirname + '/package.json') // 响应文件内容
})

// 4. 监听端口，启动服务
app.listen(9000, () => {
  console.log('服务已经启动，端口: 9000, 链接: http://localhost:9000')
})