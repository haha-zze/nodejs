const path = require('path')

const fs = require('fs')

// todo 拼出来的路径不是一个标准的路径 （路径中包含 \ 和 、）
console.log(__dirname + './index.html')  //C:\Users\周志恩\Desktop\nodejs\day1  fs操作文件\练习./index.html


// todo 拼出来的会是一个标准的路径 路径中全是 \
console.log(path.resolve(__dirname,'./index.html'))  // C:\Users\周志恩\Desktop\nodejs\day1  fs操作文件\练习\index.html


