const fs = require('fs')

// 一、 todo 相对路径

// 1、 在当前文件夹下写入
// fs.writeFileSync('./html.html','love')

// 2、 也是在当前文件夹下写入
// fs.writeFileSync('html.html',"1111")

// 3、 在外层文件夹下写入
// fs.writeFileSync('../html.html',"222")


// todo 二 绝对路径

// 1、在d根目录下写入  c盘因为权限问题没办法写入
// fs.writeFileSync('D:/index.html',"1111")


// todo 2、同样也是d盘根目录下写入  // 因为我文件处在c盘下 所以会直接在c盘的根目录写入index.html文件 但是因为c盘没有写入权限 所以会报错
fs.writeFileSync('/index.html',"222")
