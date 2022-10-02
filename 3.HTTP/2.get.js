const http =require('http')
const url = require('url')
const util = require('util')
const html = '<h1>hello http</h1>'

http.createServer((request,response)=>{
    /**
     * parse: 将字符串地址转换成URL对象
     */
    // true => 返回的URL对象中 query 为一个对象
    const urlObj = url.parse(request.url,true);
    console.log("url object: ");
    console.log(urlObj);

    console.log("query: ");
    console.log(urlObj.query);  // query是传递的参数
    //console.log(urlObj.query.username);

    /**
     * response 写入
     */
    // 1. 监听Request的end事件来处理。
    // response.end("hello http")

    // 2. write方法
    //response.write(html)
    //response.write("hello li")

    /**
     *  inspect /stringify 把json变成字符串
     */
     response.end(util.inspect(urlObj))
    // response.end(JSON.stringify(urlObj)) // 浏览器看不到

}).listen(3000,()=>{  // listen方法，来绑定ip和端口
    console.log("3000")
})