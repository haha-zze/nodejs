const ejs = require('ejs')
const fs = require('fs')
const express = require('express')

const app = express()

const xiyou = ['唐僧', '孙悟空', '猪八戒', '沙和尚']

// fixme 需求：将xiyou数组以ul、li的列表形式展示出来

// todo  原生操作  这样做的缺点是代码耦合性太强 html代码和jhs代码都混合在一起了

// let str = '<ul>'
//
// xiyou.forEach(v=>{
//     str +=
//         `<li>${v}</li>`
// })
//
// str+='</ul>'
//
// console.log(str)

// fixme 读取到的html代码必须要加toString 不然会报错  因为不加toString读取的就是一个buffer文件 ejs无法识别
const html = fs.readFileSync(__dirname + '/index.html').toString()


const result = ejs.render(html, {xiyou:xiyou})

console.log(result)




// todo 通过服务发送给客户端
app.get('/',(req, res) => {
    res.send(result)
})

app.listen('80')
