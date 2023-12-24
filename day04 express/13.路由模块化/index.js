const express = require('express')
const app = express()

const homeRouter = require('./homeRouter/homeRouter.js')
const adminRouter = require('./adminRouter/adminRouter.js')

app.use(homeRouter)
app.use(adminRouter)

app.listen('80',()=>{
    console.log('服务已启动')
})
