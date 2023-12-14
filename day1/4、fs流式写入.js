const fs = require('fs')


// todo  流失写入的应用场景适合于频繁写入和大文件写入 因为流失写入并不会断开 可以一直保持有效连接 而witeFile写入完成之后就会断开
const ws = fs.createWriteStream('./流式写入.text')

ws.write('\r\n锄禾日当午')
ws.write('\r\n汗滴禾下土')
ws.write('\r\n谁知盘中餐')
ws.write('\r\n粒粒皆辛苦')

// 断开连接诶
ws.close()
