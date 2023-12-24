const fs = require('fs')

// 第一种复制的方法 一次性整个文件夹 但是这样占用内存空间会比较大

// todo 第一步 读取文件
// const data = fs.readFileSync('./video.mp4')
// // todo 第二步 写入文件
// fs.writeFileSync('./video1.mp4',data)
//
// // todo 利用node内置模块的process来测试内存占用大小
// const process = require('process')
// console.log(process.memoryUsage().rss)  // 51183616 字节

// 第二种复制方法 流式读取 每次读取64kb 这样占用的内存空间很小
const rs = fs.createReadStream('./video.mp4')

const ws = fs.createWriteStream('./video3.mp4')

// 相当于是一边读 一边写 而且每次最多只会读取64kb的内容
rs.on('data',chunk => {
    ws.write(chunk)
})

rs.on('end',()=>{
    console.log(process.memoryUsage().rss)  // 33972224 字节
})
