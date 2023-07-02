// buffer 与字符串的转换
let buf_4 = Buffer.from([105, 108, 111, 118, 101, 121, 111, 117])

// console.log(buf_4.toString()); // 默认是utf-8的字符转换

// buffer 的读写 类似数组[]
let buf = Buffer.from('hello')

// buffer里面单个元素获取
// console.log(buf[0]); // 输出的是10进制的
// console.log(buf[0].toString(2)); // 输出二进制的形式

// buffer里面单个元素修改
// buf[0] = 95
// console.log(buf.toString());

// 溢出
// buf[0] = 361 // 舍弃高位数字 0001 0110 1001

// 中文
let buf_1 = Buffer.from('你好')
console.log(buf_1);
