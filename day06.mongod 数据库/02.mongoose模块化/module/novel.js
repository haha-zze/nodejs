// todo 这里是novel模块对象的信息

const mongoose = require('mongoose')

//  todo 创建文档的结构对象
let novelSchema = new mongoose.Schema({
    id: {
        type: String,
    },
    name: {
        type: String,
        enum: ['西游记', '红楼梦', '水浒传', '封神榜']
    },
    author: String,
    isHot: Boolean,
    price: Number
})

// todo 创建模型对象 对文档操作的封装对象       需要注意的是我这里命名的集合名称是novel  但是传入mongodb数据库之后会自动将novel更名为novels  会自动将他转化为复数
let novelModel = mongoose.model('novel', novelSchema)


module.exports = novelModel
