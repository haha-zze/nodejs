// fixme 在package.json中配置type为module 就可以使用import代替require

import express from 'express'

const singers = [
    {
        singername:'周杰伦',
        age:'18',
        id:1
    },
    {
        singername:'汪苏泷',
        age:'18',
        id:2
    },
    {
        singername:'张杰',
        age:'18',
        id:3
    },
    {
        singername:'伍佰',
        age:'18',
        id:4
    },
]
const app = express()

app.get('/singer/:id',(req, res) => {
    let id = req.params.id
    if(id) {
      let singer =  singers.find(v=>v.id ==id)
        if(singer) {
            res.send(singer)
            return
        }
        res.send('没有找到')
        return;
    }
    res.send('没有传入id')
})


app.listen('80',()=>{
    console.log('服务已启动，运行在80端口')
})
