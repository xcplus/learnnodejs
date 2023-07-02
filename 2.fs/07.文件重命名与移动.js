const fs = require('fs')

// // 2. 调用rename方法 异步
// fs.rename('./座右铭.txt', './论语.txt', err => {
//   if(err) {
//     console.log('rename err: ', err);
//     return
//   }
//   console.log('rename success');
// })

// 文件移动
fs.rename('./论语.txt', '../论语.txt', err => {
  if(err) {
    console.log('rename err: ', err);
    return
  }
  console.log('rename success');
})