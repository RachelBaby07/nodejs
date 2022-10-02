var fs = require('fs');

var readerStream = fs.createReadStream('img/one.jpg');
var writerStream = fs.createWriteStream('img/copy.jpg');

var data;

readerStream.on('data',function (chuck) {
    writerStream.write(chuck);
})