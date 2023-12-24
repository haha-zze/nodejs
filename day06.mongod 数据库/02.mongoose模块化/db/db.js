// todo 对mongoose的基础信息进行统一封装在一个函数里面
const mongoose = require('mongoose')
const {DBHOST, DBPORT, DBNAME} = require('../config/config')

/**
 *
 * @param success 成功的回调
 * @param error   失败的回调
 */
module.exports = (success, error) => {

    // todo 如果没有传入失败的回调 给一个默认值
    if (typeof err !== 'function') {
        error = () => {
            console.log('连接失败')
        }
    }


//  todo 连接mongodb服务
    mongoose.connect(`mongodb://${DBHOST}:${DBPORT}/${DBNAME}`)

    mongoose.connection.once('open', () => {
        success()
    })

// todo 监听连接错误
    mongoose.connection.on('error', () => {
        console.log('数据库连接失败')
    })

// todo 监听关闭
    mongoose.connection.on('close', () => {
        error()
    })
}



