const fs = require('fs')


// todo 不管是同步还是异步 都是一次性读取指定目录的全部的文件内容
// todo 异步读取
/**
 * fs.readFile接收三个参数
 * 读取路径
 * options 配置项 可选参数
 * callback 回调函数
 */
fs.readFile('./流式写入.text', (err, data) => {
    if (err) {
        console.log("读取失败")
        return
    }
    console.log(data)  //  buffer数据
    console.log(data.toString())  // 将buffer数据转化为字符串
})


// todo 同步读取
const data = fs.readFileSync('./流式写入.text')
console.log(data)
console.log(data.toString())
