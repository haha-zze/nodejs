// todo 导入mongoose
const mongoose = require("mongoose");

// todo 导入配置
const {DBHOST, DBPORT, DBNAME} = require("../config");

module.exports = function checkMongoDBConnectionStatus()  {
    return new Promise((resolve, reject) => {
        // todo 连接数据库
        mongoose.connect(`mongodb://${DBHOST}:${DBPORT}/${DBNAME}`)

        // todo 监听连接数据库成功
        mongoose.connection.once('open', () => {
            console.log("数据库连接成功")
            resolve()
        })

        // todo 数据库连接失败
        mongoose.connection.on('error', () => {
            reject()
        })

        // todo 数据库连接关闭
        mongoose.connection.on('close', () => {
            console.log('数据库连接关闭')
        })
    })
}
