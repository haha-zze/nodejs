const mongoose = require('mongoose')

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

// todo 利用mongoose包和mongodb数据库进行连接
mongoose.connect('mongodb://127.0.0.1:27017/bilibili')

mongoose.connection.once('open',()=>{
    console.log('mongoose连接数据库成功')

    // todo 创建文档结构对象
  let novelSchema =  new mongoose.Schema({
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

    let novelModel = mongoose.model('novel',novelSchema)

     // todo 批量新增
    // novelModel.insertMany(novelsList).then(res=>{
    //     console.log(res,"新增结果")
    // })


    // todo 更新一条
    // novelModel.updateOne({id:'111'},{price:999}).then(res=>{
    //     console.log(res,"更新结果")
    // })

    // todo 批量更新
    novelModel.updateMany({isHot:false},{isHot:true}).then(res=>{
        console.log(res,"批量修改的结果")
    })
})

mongoose.connection.on('error',()=>{
    console.log('连接失败')
})

mongoose.connection.on('close',()=>{
    console.log('断开连接')
})
