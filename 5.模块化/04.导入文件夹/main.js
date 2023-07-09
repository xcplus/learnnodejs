// 导入
const m = require('./module')
/**
 * 导入文件夹，
 * 首先会找module文件夹中的package.json中的main属性对应的文件是否存在
 *  1. 如果存在会找对应的文件,不存在会报错
 * 其次 main属性不存在，或者package.json不存在，则会尝试导入index.js和index.json,
 *  1. 如果还没找到，就会报错
 */

console.log(m);