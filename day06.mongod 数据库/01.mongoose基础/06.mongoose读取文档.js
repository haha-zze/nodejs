// todo 步骤一 导入mongoose
const mongoose = require('mongoose')

// 定义导入数据库的数据
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


// todo 步骤二 利用mongoose连接 mongodb数据库
mongoose.connect('mongodb://127.0.0.1:27017/bilibili')

// todo 步骤三  监听连接
mongoose.connection.once('open',()=>{
    console.log('连接成功')

    // 创建文档对象结构
  let bookSchema =  new mongoose.Schema({
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

   let bookModel = new mongoose.model('books',bookSchema)

    // todo 步骤四 需要先向数据库导入集合名称和数据(导入成功之后就把导入代码注释 因为再次执行会重复导入 这样导入的id值是重复的会报错)
    // bookModel.insertMany(novelsList, ).then( r =>{
    //     console.log(r, "导入数据结果")
    // })


    // todo 读取单条
    // bookModel.findOne({id:'111'}).then(res=>{
    //     console.log(res,"读取的文档")
    // })

    // todo 批量读取
    // bookModel.find({isHot:true}).then(res=>{
    //     console.log(res,"批量读取的结果")
    // })

    // todo 读取所有
    bookModel.find({}).then(res=>{
        console.log(res,"读取所有")
    })
})




