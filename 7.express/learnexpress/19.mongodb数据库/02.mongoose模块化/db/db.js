/**
 * 
 * @param {*} success 数据库链接成功的回调
 * @param {*} error 数据库链接失败的回调
 */

module.exports = function(success, error) {
  // 判断 error 为其设置一个默认值
  if(typeof error !== 'function') {
    error = () => {
      console.log('mongodb链接失败')
    }
  }
  // 1 安装 mongoose
  // 2 导入 mongoose
  const mongoose = require('mongoose')
  const config = require('../config')
  // 3. 链接 mongodb 服务
  mongoose.connect(`mongodb://${config.DBHOST}:${config.DBPORT}/${config.DBNAME}`)

  // 4. 设置回调
  // 设置链接成功的回调 once 一次  事件回调函数只执行一次
  mongoose.connection.once('open', () => {
    console.log('mongodb链接成功');
    success()
  })

  // 设置链接失败的回调
  mongoose.connection.on('error', () => {
    console.log('mongodb链接失败');
    error()
  }) 

  // 设置链接关闭的回调
  mongoose.connection.on('close', () => {
    console.log('mongodb链接关闭');
  }) 

  // 关闭 mongodb 的链接
  // setTimeout(() => {
  //   mongoose.disconnect()
  // }, 2000)
}