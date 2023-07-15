const express = require('express')
const path = require('path')

const app = express()

// 设置模版引擎
app.set('view engine', 'ejs')

// 设置模版文件存放位置 模版文件: 具有模版语法内容的文件
app.set('views', path.resolve(__dirname, './views'))

app.get('/home', (req, res) => {
  // 通过 render 方法响应
  let title = '大侠请留步'
  res.render('home', {title})
})

app.listen(9000, () => {
  console.log('服务已经启动, 端口: 9000');
})