/**
 * 1.http服务器
 *   createServer方法来轻松创建HTTP服务
 */

const http =require('http')
/**
 *   函数式编程
 */
// const server = http.createServer((request,response)=>{
//     response.end("hello http")
// });
//
// server.listen(3000,function () {
//     console.log("3000")
// })

/**
 *   链式编程
 */
//函数通过request、response参数来接收和响应数据。
http.createServer((request,response)=>{
    console.log("hello http");
    response.end("hello http")
}).listen(3000,()=>{  // listen方法，来绑定ip和端口
    console.log("3000")
})