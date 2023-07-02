const fs = require('fs')

// 调用stat方法
fs.stat('./human.mp4', (err, data) => {
  if(err) {
    console.log('stat err: ', err);
    return
  }
  console.log('stat success: ', data);
  console.log('data isFile: ', data.isFile());
  console.log('data isDirectory: ', data.isDirectory());
})