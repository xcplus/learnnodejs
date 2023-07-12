const express = require('express')

const app = express()

app.get('/home', (req, res) => {
  res.send('hello express')
})

app.get('/', (req, res) => {
  res.send('welcome to my website')
})

app.post('/login', (req, res) => {
  res.send('login login')
})

// 只要请求路径是/test就会走这个路由
app.all('/test', (req, res) => {
  res.send('test, test')
})

// 404 响应
app.all('*', (req, res) => {
  res.send('404 not Found')
})

app.listen(9000, () => {
  console.log('服务已经启动端口号：9000, 路径: http://localhost:9000')
})