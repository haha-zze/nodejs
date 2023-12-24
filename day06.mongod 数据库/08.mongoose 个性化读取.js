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
        price: 20
    },
    {
        ids: "333",
        name: "封神榜",
        author: "王五",
        isHot:false,
        price: 21
    },
    {
        ids: "444",
        name: "红楼梦",
        author: "赵四",
        isHot:false,
        price: 22
    },
]
mongoose.connection.once('open',()=>{
    console.log('连接成功')


   let listsSchema =  new mongoose.Schema({
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

    let listModel =  mongoose.model('lists',listsSchema)
    //
    // listModel.insertMany(novelsList).then(res=>{
    //     console.log(res,"数据添加结果")
    // })

     // todo 利用select函数制定需要哪些字段 但是注意 数据库中的id字段会默认带出来 如果不需要 需要特别指定 id:0

    // todo 需求一 返回数据中的name字段数据
    // listModel.find().select({name:1}).then(res=>{
    //     console.log(res,"res")
    // })

    // todo 需求二 返回数据中name和price  并且对price进行排序  升序 1 降序-1
    // listModel.find().select({name:1,price:1,_id:0}).sort({price: -1}).then(res=>{
    //     console.log(res,"res")
    // })

    // todo 需求三 返回数据中根据price进行排序 并且返回第二条到第四条  skip 从多少条开始 limit截取多少条  可以用来实现分页
    listModel.find().select({name:1,price:1,_id:0}).sort({price:1}).skip(1).limit(3).then(res=>{
        console.log(res,"res")
    })

})
