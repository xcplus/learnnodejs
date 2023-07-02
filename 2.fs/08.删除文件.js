const fs = require('fs')

// 2. 调用 unlink 方法
fs.unlink('./human2.mp4', err => {
  if(err) {
    console.log('unlink err: ', err);
    return
  }
  console.log('unlink success');
})

// 或者调用 rm 方法
fs.rm('./human1.mp4', err => {
  if(err) {
    console.log('rm err: ', err);
    return
  }
  console.log('rm success');
})