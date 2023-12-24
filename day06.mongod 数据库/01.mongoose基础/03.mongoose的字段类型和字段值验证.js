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

        // fixme Mongoose 有一些内建验证器，可以对字段值进行验证
        // todo 將字段的vlaue变更为对象 在对象中可以对值的类型进行制定
        name:{
            type:String, // 制定值的类型为字符串
            required:true  // 值类型 fixme 对传入的字段进行校验 这个name表啊是为必须穿传入
        },
        author:String,
        price:{
            type:Number,
            default:19   // fixme  设置默认值 如果没有传这个值 那么这个值将默认设置为19
        },
        gender: {   // fixme 枚举值 传入的值必须是在这个枚举当中
            type: String,
            enum: ['男', '女']
        },
        id:{
            type:Number,
            unique:true   // fixme 唯一值  传入的值必须是唯一的 unique 需要重建集合才能有效果  就是说如果这个集合是一开始就创建好了 已经对这个集合进行操作过了 再添加这个字段验证 那么是没有效果的 需要删除这个集合 再重新新建这个集合才能有效果
        }
    })

    // 5 todo 创建模型对象 对文档操作的封装对象
    let bookModel = mongoose.model('books',bookSchema)

    // 6 fixme 新增操作
    bookModel.create({
        name:"西游记",
        author:'吴承恩',
        gender:'男',
        id:1,
    }).then((res,err)=>{
        console.log(res,"res", err)
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
