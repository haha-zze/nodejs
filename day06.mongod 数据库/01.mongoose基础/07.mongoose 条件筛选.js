const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/bilibili')


const novelsList = [
    {
        ids: "111",
        name: "西游记",
        author: "张三",
        isHot:true,
        price: 19
    },
    {
        ids: "222",
        name: "水浒传",
        author: "李四",
        isHot:true,
        price: 29
    },
    {
        ids: "333",
        name: "封神榜",
        author: "王五",
        isHot:false,
        price: 39
    },
    {
        ids: "444",
        name: "红楼梦",
        author: "赵四",
        isHot:false,
        price: 49
    },
]
mongoose.connection.once('open',()=>{
    console.log('连接成功')

    // todo 先批量新增进一个集合
  let listSchema = new mongoose.Schema({
        ids:{
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

   let listModel = mongoose.model('list',listSchema)

    listModel.insertMany(novelsList).then(res=>{
        console.log(res,"新增成功")
    })

    // fixme 运算符 在 mongodb 不能 > < >= <= !== 等运算符，需要使用替代符号

    // todo  筛选出价格小于20块钱的
    // listModel.find({price:{ $lte:20}}).then(res=>{
    //     console.log(res,"筛选出来的数据")
    // })

    // todo 筛选出价格大于20 并且小于39的图书 $and表示逻辑与
    // listModel.find({$and:[{price:{$gt:20}},{price:{ $lt:39}}]}).then(res=>{
    //     console.log(res,"筛选出来的数据")
    // })

    // todo 筛选出价格小于20或者大于30的图书 $or表示逻辑与
    // listModel.find({$or:[{price:{$lt:20}},{price:{ $gt:30}}]}).then(res=>{
    //     console.log(res,"筛选出来的数据")
    // })

    // todo 筛选出图书名称中带有 '红' 的数据
    listModel.find({name:new RegExp('红')}).then(res=>{
        console.log(res,"筛选出来的数据")
    })
})
