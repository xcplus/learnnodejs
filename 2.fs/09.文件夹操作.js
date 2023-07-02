const fs = require('fs')

// 2. 创建文件夹
// fs.mkdir('./html', err => {
//   if(err) {
//     console.log('mkdir err: ', err);
//     return
//   }
//   console.log('mkdir success');
// })

// 2-2 递归创建目录
// fs.mkdir('./a/b/c', {recursive: true}, err => {
//   if(err) {
//     console.log('mkdir err: ', err);
//     return
//   }
//   console.log('mkdir success');
// })

// 2-3 读取文件夹
// fs.readdir('./', (err, data) => {
//   if(err) {
//     console.log('readdir err: ', err);
//     return
//   }
//   console.log('readdir success: ', data);
// })

// 2-4 删除文件夹
// fs.rmdir('./html', err => {
//   if(err) {
//     console.log('rmdir err: ', err);
//     return
//   }
//   console.log('rmdir success: ');
// })

// 删除含有子文件的文件夹
fs.rm('./a', {recursive: true}, err => {
  if(err) {
    console.log('rm err: ', err);
    return
  }
  console.log('rm success: ');
})