const express = require('express')
const session = require('express-session')
const MongoStore = require('connect-mongo')

const app = express()

// 设置中间件
app.use(session({
  name: 'sid', // 设置cookie的name， 默认值是: connect.sid
  secret: 'asdfefs', 
  saveUninitialized: false, // 是否每次请求都设置一个cookie用来存储session的id
  resave: true, // 是否在每次请求时重新保存session
  store: MongoStore.create({
    mongoUrl: 'mongodb://localhost:27017/project', // 数据库连接设置
  }),
  cookie: {
    httpOnly: true, // 开启后前端无法通过 JS 操作
    maxAge: 1000*300 // 控制过期时间
  }
}))

app.get('/', (req, res) => {
  res.send('home')
})

app.get('/login', (req, res) => {
  // username=xxx&password=xxxx
  if(req.query.username === 'admin' && req.query.password === 'admin') {
    // 设置session
    req.session.username = 'admin'
    req.session.uid = '3121agfef'
    // 成功响应
    res.send('登录成功')
  } else {
    res.send('登录失败')
  }
})

// session的读取
app.get('/cart', (req, res) => {
  // 检测session是否存在用户数据
  if(req.session.username) {
    res.send('${req.session.username} 的购物车')
  } else {
    res.send('您还没有登录')
  }
})

// session 的销毁
app.get('/logout', (req, res) => {
  req.session.destroy(() => {
    res.send('您已经退出登录')
  })
})

app.listen(9000)