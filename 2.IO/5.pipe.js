/**
 *管道
 *   输入流 ---》管道（复制）---》输出流
 */

var fs = require('fs');

var readerStream = fs.createReadStream('txt/input1.txt');
var writerStream = fs.createWriteStream('txt/output1.txt');

// readerStream.on('data',function (chuck) { // 面向技术细节
//     writerStream.write(chuck);
// })

// 管道读写操作
// 读取 input.txt 文件内容，并将内容写入到 output.txt 文件中
readerStream.pipe(writerStream);  // 面向业务