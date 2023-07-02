// 1. alloc
let buf = Buffer.alloc(10) // 创建一个10字节的buffer, 并且初始值都是00的二进制
// console.log(buf)

// 2. allocUnsafe
let buf_2 = Buffer.allocUnsafe(10) // 创建的buffer可能含有旧的内存数据
// console.log(buf_2)

// 3. from
let buf_3 = Buffer.from('hello')
let buf_4 = Buffer.from([105, 108, 111, 118, 101, 121, 111, 117])
console.log(buf_4)

