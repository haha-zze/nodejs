const mongoose= require('mongoose');

// todo 定义文档结构对象
let accountSchema = new mongoose.Schema({
    matter:{
        type:String,
        required:true, // 必须
        unique:true // 唯一值
    },
    type:{
        type:String,
        require:true,
        enum:['-1','1']
    },
    money:{
        type:Number,
        default:29.9  // 默认
    },
    date:String,
    remake:String
})

// todo 创建模型对象
let accountModel =  mongoose.model('model',accountSchema)

module.exports = accountModel
