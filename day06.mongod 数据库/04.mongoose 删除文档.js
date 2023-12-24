// fixme mongoose 用于连接mongodb数据库  npm i mongoose

const novelsList = [
    {
        id: "111",
        name: "西游记",
        author: "张三",
        isHot:true,
        price: 19
    },
    {
        id: "222",
        name: "水浒传",
        author: "李四",
        isHot:true,
        price: 20
    },
    {
        id: "333",
        name: "封神榜",
        author: "王五",
        isHot:false,
        price: 21
    },
    {
        id: "444",
        name: "红楼梦",
        author: "赵四",
        isHot:false,
        price: 20
    },
]

// 1、todo 导入mongoose
const mongoose = require('mongoose')

// 2、 todo 连接mongodb服务                  连接的是 bilibili 数据库
mongoose.connect('mongodb://127.0.0.1:27017/bilibili')

// 3、 todo 可以用on绑定 也可以用once  once事件函数回调只会执行一次
mongoose.connection.once('open', () =>{
    console.log('数据库连接成功')

    // 4、 todo 创建文档的结构对象
    let bookSchema = new mongoose.Schema({
        id:{
            type: String,
            // unique:true
        },
        name:{
            type:String,
            enum: ['西游记', '红楼梦', '水浒传', '封神榜']
        },
        author:String,
        isHot:Boolean,
        price:Number
    })

    // 5 todo 创建模型对象 对文档操作的封装对象       需要注意的是我这里命名的集合名称是novel  但是传入mongodb数据库之后会自动将novel更名为novels  会自动将他转化为复数
    let bookModel = mongoose.model('novel',bookSchema)



    // 6 fixme insertMany 批量新增
    // bookModel.insertMany(novelsList).then((res,err)=>{
    //     console.log(res,"res", err)
    // })

    // 7 todo 演示删除一条
    // bookModel.deleteOne({id:'111'}).then(res=>{
    //     console.log(res,"删除结果")
    // })

    // 8 todo  演示批量删除
    bookModel.deleteMany({isHot:true}).then((err,res)=>{
        console.log(res,err,"批量删除结果")
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
