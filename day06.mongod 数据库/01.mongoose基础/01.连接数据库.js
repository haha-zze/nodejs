// fixme mongoose 用于连接mongodb数据库  npm i mongoose

// todo 导入mongoose
const mongoose = require('mongoose')

// todo 连接mongodb服务
mongoose.connect('mongodb://127.0.0.1:27017/bilibili')

// 设置回调

// todo 可以用on绑定 也可以用once  once事件函数回调只会执行一次
mongoose.connection.once('open', () =>{
    console.log('数据库连接成功')
})

mongoose.connection.on('error', () =>{
    console.log('数据库连接失败')
})

mongoose.connection.on('close', () =>{
    console.log('数据库连接关闭')
})


/**
 * 手动关闭数据库
 */
setTimeout(()=>{
mongoose.disconnect()
},2000)
