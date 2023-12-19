const fs = require('fs')

// todo 文件的重命名

// todo 文件移动和文件读写利用的都是fs.rename 如果是同一文件夹内 那就是修改名字 如果是不同文件夹里面就是移动内容 移动内容的同时也可以指定移动后文件的名字

fs.rename('./test.text','./test1.text',err => {
    if(err) {
        console.log(err)
        return
    }
    console.log("修改文件名成功")
})


fs.rename('./video.mp4','./资料/我是移动过来的video.mp4',err => {
    if(err) {
        console.log(err)
        return
    }
    console.log("文件移动成功")
})
