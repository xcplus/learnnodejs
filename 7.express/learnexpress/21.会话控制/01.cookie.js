const express = require('express')
const cookieParser = require('cookie-parser')

const app = express()

app.use(cookieParser())

// 设置cookie
app.get('/set-cookie', (req, res) => {
  // res.cookie('name', 'zhangsan') // 会在浏览器关闭的时候，销毁
  res.cookie('name', 'lisi', {maxAge: 60 * 1000}) // maxAge最大存活时间 1 分钟
  res.send('set cookie')
})

// 删除cookie
app.get('/remove-cookie', (req, res) => {
  res.clearCookie('lisi')
  res.send('remove cookie')
})

// 获取cookie
app.get('/get-cookie', (req, res) => {
  console.log(req.cookies)
  res.send(`cookies: ${req.cookies}`)
})
app.listen(9000)