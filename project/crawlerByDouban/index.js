import https from 'https'
import cheerio from 'cheerio'
import fs from 'fs'

https.get('https://movie.douban.com/top250', function (res) {
    // 分段返回的 自己拼接
    let html = '';
    // 有数据产生的时候 拼接
    res.on('data', function (chunk) {
        html += chunk;
    })
    // 拼接完成a
    res.on('end', function () {
        const $ = cheerio.load(html);
        let allFilms = [];
        $('li .item').each(function () {
            // this 循环时 指向当前这个电影
            // 当前这个电影下面的title
            // 相当于this.querySelector
            const title = $('.title', this).text();
            const star = $('.rating_num', this).text();
            const pic = $('.pic img', this).attr('src');
            // console.log(title,star,pic);
            // 存 数据库
            // 没有数据库存成一个json文件 fs
            allFilms.push({
                title, star, pic
            })
        })
        fs.writeFile('./data.json', JSON.stringify(allFilms),err => {
            if (err) {
                console.log(err,"写入文件失败")
                return
            }
            console.log("写入成功")
        })
        downloadImage(allFilms)
        // process.exit()
    })
})

const downloadImage = (files) =>{
let imgs = files.map(v=>v.pic)
    imgs.forEach((item,index)=>{
        https.get(item,res=>{
            console.log(res)
            res.setEncoding('binary')
            let str= ''
            res.on('data',chunk => {
                str += chunk
            })
            res.on('end',()=>{
                let name = files[index].title.split('/')[0].trim()
                fs.writeFile(`./images/${name}.png`,str,'binary',err => {
                    if (err) {
                        console.log(err)
                        return
                    }
                    console.log(`第${name}封面写入成功`)
                })
            })
        })
    })
}
