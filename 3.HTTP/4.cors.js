/**
 *   2. 处理get请求
 * */

const http = require('http');
const url = require('url')
const util =require('util')
const html = "<h1>hello html</h1>";
const  server = http.createServer(function (req,res) {

    console.log(url.parse(req.url,true));


    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','POST, GET, OPTIONS, DELETE')
    res.setHeader('Access-Control-Allow-Headers','content-type,x-requested-with,Authorization,x-ui-request,lang,accept,access-control-allow-origin')
    res.setHeader('Access-Control-Allow-Credentials','true')

    const content = JSON.stringify({flag:true});

    res.write(content)

    res.end();

}).listen(3000,function () {
    console.log("the server is running on :3000");
})
