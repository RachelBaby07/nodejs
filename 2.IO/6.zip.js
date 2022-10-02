/**
 * 压缩和解压缩
 *    数据仓库：source1、source2 --》转换
 * */
var fs = require('fs');
var gzip = require('zlib'); //提供转换流

function testZip() {
    fs.createReadStream('txt/input.txt')
        /**
         * 把 可读流 转换成 转换流
         */
        .pipe(gzip.createGzip())
        /**
         * 把 转换流 变成 可读流输出
         */
        .pipe(fs.createWriteStream('txt/input.txt.gz'));
}

function testZip2() {
    fs.createReadStream('txt/input.txt.gz')
        .pipe(gzip.createGzip())
        .pipe(fs.createWriteStream('txt/input3.txt'));
}
// testZip();
testZip2();