/**
 * 1.导入fs模块
 * 2.创建流
 * 3.注册事件
 */

var fs = require('fs');

var readerStream = fs.createReadStream('txt/input.txt'); // 读取
var writerStream = fs.createWriteStream('txt/output.txt'); // 写入

// var data;

readerStream.on('data',function (chuck) { // chuck ：字符，通过回调

    /*data+=chuck
      writeStream.write(data)*/

    writerStream.write(chuck);
})
