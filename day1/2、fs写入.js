const fs = require('fs')

// 写入一段文本 异步写入
// todo  需要注意的是fs.writeFile是异步的
fs.writeFile('./text.text', '这是异步写入的文本', err => {
    //  todo 写入完成之后的回调 如果写入失败 那么err是错误对象 如果写入成功 err是null
    if (err) {
        console.log('写入失败')
        return
    }
    console.log("写入成功")
})

// console.log(1111)

// 写入一段文本 同步执行 同步写入的方法并没有回调函数
fs.appendFileSync('./test.text', '这是同步写入的文本')
console.log(222)
