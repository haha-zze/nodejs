const fs = require('fs')

// todo 创建单个文件夹
// fs.mkdir('./html',err => {
//     if(err) {
//         console.log(err)
//         return
//     }
//     console.log("创建成功")
// })

// todo 递归创建文件夹 就是创建多个嵌套层级的文件夹
// fs.mkdir('./a/b/c',{recursive:true},err => {
//     if(err) {
//         console.log(err)
//         return
//     }
//     console.log("递归创建成功")
// })

// todo 读取文件夹内容
// fs.readdir('./资料', (err, data) => {
//     if (err) {
//         console.log(err)
//         return
//     }
//     console.log(data, "读取成功")
// })

// todo 删除文件夹
// fs.rmdir('./html', err => {
//     if (err) {
//         console.log(err)
//         return
//     }
//     console.log("删除成功")
// })

// todo 递归删除文件夹 就是删除文件夹a 可以连带着把a文件夹厘米的b c文件夹一起删除  推荐使用这种方式删除文件夹
fs.rm('./a',{recursive:true}, err => {
    if (err) {
        console.log(err)
        return
    }
    console.log("删除成功")
})

// todo 递归删除文件夹  不建议使用这种方式递归删除 因为node后面会废除这种方式
// fs.rmdir('./a',{recursive:true},err => {
//     if(err) {
//         console.log(err)
//         return
//     }
//     console.log("删除成功")
// })
