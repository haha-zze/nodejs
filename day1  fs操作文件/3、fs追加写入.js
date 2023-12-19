const fs= require('fs')

// todo 异步追加写入
fs.appendFile('./text.text',"我是异步追加写入的内容",err=>{
    if(err) {
        console.log("写入失败")
        return
    }
    console.log("写入成功")
})

// todo 同步追加写入  \r\n表示换行
fs.appendFileSync('./text.text',"\r\n我是同步追加写入的内容")


// todo 其实通过fs.writeFile也可以追加写入内容 但是需要配置第三个参数
fs.writeFile('./text.text',"\r\n我是通过fs.writeFile写入的内容",{flag:'a'},err=>{
    if(err) {
        console.log("写入失败")
        return
    }
    console.log("写入成功")
})
