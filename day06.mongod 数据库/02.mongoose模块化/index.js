const novelsList = [
    {
        id: "111", name: "西游记", author: "张三", isHot: true, price: 19
    }, {
        id: "222", name: "水浒传", author: "李四", isHot: true, price: 20
    }, {
        id: "333", name: "封神榜", author: "王五", isHot: false, price: 21
    }, {
        id: "444", name: "红楼梦", author: "赵四", isHot: false, price: 20
    }]
// todo 导入基本配置信息
const db = require('./db/db')

// todo 导入模块对象
const novel = require('./module/novel')

/**
 * 直接调用db函数对需要的模块进行处理
 */
db(() => {
    // novel.insertMany(novelsList).then((res, err) => {
    //     console.log(res, "res", err)
    // })


    // todo 读取文档
    // novel.find({}).select({name: 1, price: 1, _id: 0, isHot: 1}).sort({price: -1}).then((res, err) => {
    //     console.log(res, err, "读取的数据")
    // })


    // todo 删除文档
    // novel.deleteMany({}).then((res, err) => {
    //     console.log(res,"删除文档结果")
    // })

    // todo 更新文档
    novel.updateMany({isHot:false},{isHot:true}).then((res)=>{
        console.log(res,"更新结果")
    })
})




