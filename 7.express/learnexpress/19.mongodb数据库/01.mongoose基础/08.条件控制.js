// 1 安装 mongoose
// 2 导入 mongoose
const mongoose = require('mongoose')
// 3. 链接 mongodb 服务
mongoose.connect('mongodb://127.0.0.1:27017/bilibili')

// 4. 设置回调
// 设置链接成功的回调 once 一次  事件回调函数只执行一次
mongoose.connection.once('open', () => {
  console.log('mongodb链接成功');
  // 5. 创建文档的结构对象
  // 设置集合中文档的属性以及属性值的类型
  let bookSchema = new mongoose.Schema({
    name: String,
    author: String,
    price: Number,
    is_hot: Boolean
  })

  // 6. 创建模型对象 是一个对文档操作的封装对象
  let bookModel = mongoose.model('books', bookSchema)

  // 7. 新增
  bookModel.create({
    name: '西游记',
    author: '吴承恩',
    price: '19.9',
    is_hot: true
  }, (err, data) => {
    // 判断是否有错误
    if(err) {
      console.log(err)
      return;
    }
    // 如果没有错误，输出插入的文档对象
    console.log(data);
  })

  // 8. 条件控制
  // 价格   < 20 的图书
  bookModel.find({price: {$lt: 20}}, (err, data) => {
    // 判断是否有错误
    if(err) {
      console.log(err)
      return;
    }
    // 如果没有错误，输出插入的文档对象
    console.log(data);
  })

  // 曹雪芹 或者 余华的书
  bookModel.find({$or: [{author: "曹雪芹"}, {author: "余华"}]}, (err, data) => {
    // 判断是否有错误
    if(err) {
      console.log(err)
      return;
    }
    // 如果没有错误，输出插入的文档对象
    console.log(data);
  })

  // 价格 30 < x < 70
  bookModel.find({$and: [{price: {$gt: 30}}, {price: {$lt: 70}}]}, (err, data) => {
    // 判断是否有错误
    if(err) {
      console.log(err)
      return;
    }
    // 如果没有错误，输出插入的文档对象
    console.log(data);
  })

  // 检索书名中带有 三 的图书
  // bookModel.find({name: /三/}, (err, data) => {
  //   // 判断是否有错误
  //   if(err) {
  //     console.log(err)
  //     return;
  //   }
  //   // 如果没有错误，输出插入的文档对象
  //   console.log(data);
  // })

  bookModel.find({name: new RegExp('三')}, (err, data) => {
    // 判断是否有错误
    if(err) {
      console.log(err)
      return;
    }
    // 如果没有错误，输出插入的文档对象
    console.log(data);
  })
  

  // 关闭数据库链接 (项目运行中，不会添加该代码)
  mongoose.disconnect()
}) 

// 设置链接失败的回调
mongoose.connection.on('error', () => {
  console.log('mongodb链接失败');
}) 

// 设置链接关闭的回调
mongoose.connection.on('close', () => {
  console.log('mongodb链接关闭');
}) 

// 关闭 mongodb 的链接
// setTimeout(() => {
//   mongoose.disconnect()
// }, 2000)