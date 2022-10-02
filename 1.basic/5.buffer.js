/**
 * 缓存
 *    保证流畅性
 *    占用内存资源
 *
 *  Buffer
 *  1.创建
 *  2.写入 和 读取
 *  3.其他操作 --- 合并、剪裁
 */
function testEncode() {
    const buf = Buffer.from('test');
    console.log(buf.toString('utf8'));
    console.log(buf.toString('hex'));
    console.log(buf.toString('base64'));
}

function testCreate() {
    const buf1 = Buffer.from([1, 2, 3]);
    const buf2 = Buffer.from('tést');
    console.log(buf1);
    console.log(buf2);
}

function testWrite() {
    buf3 = Buffer.alloc(256);
    len = buf3.write("www.runoob.com");

    console.log("写入字节数 : "+  len);
}

function testRead() {
    buf4 = Buffer.alloc(26);
    for (var i = 0 ; i < 26 ; i++) {
        buf4[i] = i + 97;
    }
    console.log( buf4.toString('ascii'));
    console.log( buf4.toString('ascii',0,5));   //使用 'ascii' 编码, 并输出: abcde
    console.log( buf4.toString('utf8',0,5));    // 使用 'utf8' 编码, 并输出: abcde
}

/**
 *  1. 在数组中 添加函数变量
 *  2. 通过名称找到对应的函数 ，然后执行
 * */
// function funName(id,name,age) {
//              this.id=id,
//              this.name=name,
//              this.age=age
// }
// var fun = new funName('1','wang','23')
// var funcArr = [];
// funcArr.push(fun)
// funcArr.push(new funName('2','li','36'))
// console.log(funcArr)
function foo1() {
    console.log("foo1")
}
function foo2() {
    console.log("foo2")
}
function foo3() {
    console.log("foo3")
}
var funcArr=[]

//funcArr.push(foo1)
funcArr.push({
    funName:'foo1',
    fun:foo1
})

module.exports={
    testEncode,
    testCreate,
    testWrite,
    testRead
}




