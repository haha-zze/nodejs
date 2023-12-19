const fs = require('fs')


// fs.unlink 同步方法是 fs.unlinkSync
// fs.unlink('./delete.text', err => {
//     if (err) {
//         console.log(err)
//         return
//     }
//     console.log("删除成功")
// })

// 2、rs.rm  同步方法时 fs.rmSync
fs.rm('./delete.text',err => {
    if (err) {
        console.log(err)
        return
    }
    console.log("删除成功")
})
