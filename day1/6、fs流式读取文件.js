const fs = require('fs')

// todo 流式读取文件适合于读取大文件 因为他是分段、持续读取 并不会一次性读取指定文件夹全部的文件

const rs = fs.createReadStream('./video.mp4')

// 绑定data事件 相当于是监听读取的过程
rs.on('data',chunk=>{
    console.log(chunk) // buffer数据
    // console.log(chunk.toString()) // 会乱码  因为这个并不是utf-8的字符信息 只有utf-8的字符信息才能使用toString() 是视频数据 所以不能通过toString() 转化为字符串的
    console.log(chunk.length)  // 每次最多读取65536字节 65536字节 = 64kb
})

// 监听读取完成
rs.on('end',()=>{
    console.log("读取结束")
})
