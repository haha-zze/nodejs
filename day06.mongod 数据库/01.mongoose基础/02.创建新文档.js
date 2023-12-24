// fixme mongoose 用于连接mongodb数据库  npm i mongoose

// 1、todo 导入mongoose
const mongoose = require('mongoose')

// 2、 todo 连接mongodb服务
mongoose.connect('mongodb://127.0.0.1:27017/bilibili')

// 设置回调

// 3、 todo 可以用on绑定 也可以用once  once事件函数回调只会执行一次
mongoose.connection.once('open', () =>{
    console.log('数据库连接成功')

    // 4、 todo 创建文档的解构对象
    // fixme 设置集合文档的属性以及属性值的类型
   let bookSchema = new mongoose.Schema({
        name:String,
        author:String,
        price:Number
    })

    // 5 todo 创建模型对象 对文档操作的封装对象
    let bookModel = mongoose.model('books',bookSchema)

    // 6 fixme 新增操作
    bookModel.create({
        name:"西游记",
        author:'吴承恩',
        price:19
    }).then(res=>{
        console.log(res,"res")
    })

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
