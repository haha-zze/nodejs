const fs = require('fs')

// todo 读取文件夹的内容
fs.readdir('./code', (err, data) => {
    if (err) {
        console.log(err)
        return
    }
    data.forEach(v => {
        let [num, text] = v.split('、')
        if (num <= 9) {
            num = '0' + num
        }
        let newName = num + '、' + text
        console.log(newName,v)
        fs.rename(`./code/${v}`,`./code/${newName}`, err => {
            if (err) {
                console.log(err)
                return
            }
            console.log("批量修改文件名成功")
        })
    })
})
