/**
 * 路由
 */

const http = require('http')
const url = require('url')
// const router = require('./')

const running = function (request,response) {

    /**
     *  page
     *  response.write(page)
     */
    // 变化的地方扔出去
    // router.send(request,response)
    // response.end()

    /**
     * 跨域问题
     */
    response.setHeader('Access-Control-Allow-Origin','*');
    response.setHeader('Access-Control-Allow-Methods','POST, GET, OPTIONS, DELETE')
    response.setHeader('Access-Control-Allow-Headers','content-type,x-requested-with,Authorization,x-ui-request,lang,accept,access-control-allow-origin')
    response.setHeader('Access-Control-Allow-Credentials','true')

    const urlObj =url.parse(request.url,true);
    console.log(urlObj)
    if(urlObj.pathname=='/login'){
        console.log(urlObj.query);

        const user = urlObj.query;
        const responseMessage={
            flag:false
        }
        if(user.username=='admin'&&user.password=='123'){
            responseMessage.flag=true;
        }
        response.end(JSON.stringify(responseMessage))
    }
    response.end();
}

http.createServer(running).listen(3000,()=>{
    console.log("3000")
})
