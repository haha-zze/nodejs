const fs = require('fs')

// todo 通过fs.stat 获取文件的状态

fs.stat('./video1.mp4', (err, status) => {
    if (err) {
        console.log(err)
        return
    }
    console.log(status)  //可以获取文件的大小 文件的创建、更新、更改状态等时间信息

    // todo 通过isFile判断是否是文件
    console.log(status.isFile())  // true
    // todo 判断是否是文件夹
    console.log(status.isDirectory())  // false
})
