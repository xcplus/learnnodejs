// 导入db
const db = require('./db/db')
const BookModel = require('./models/BookModel')

// success 函数 和 error 函数(error 可选函数)
db(() => {
  console.log('数据库链接成功')
  BookModel.create({
    name: '西游记',
    author: '吴承恩',
    price: '19.9'
  }, (err, data) => {
    // 判断是否有错误
    if(err) {
      console.log(err)
      return;
    }
    // 如果没有错误，输出插入的文档对象
    console.log(data);
  })
})




