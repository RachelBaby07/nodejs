const url = require('url')
const fs = require('fs')

// const routes=[
//     {
//     path:'/login',
//     component: '../website/login.html'  // 如何变成绝对路径
// }
// ,{
//     path: '/index',
//         component: '../website/index.html'
//     }
// ]

function send(request,response) {
    const urlObj = url.parse(request.url,true);
    console.log(urlObj);

    // if(urlObj.pathname=='/submit'){
    //     const user = urlObj.query;
    //     if(user.username=='admin'&&user.password=='123'){
    //         fs.readFile(routes[2].component,function (err,data) {
    //             // console.log(data)
    //             response.end(data.toString())
    //         })
    //     }else {
    //        response.end()
    //     }
    // }

    if(urlObj.pathname!='/favicon.ico'){
        let component= routes.find((route)=>{
            return  route.path == urlObj.pathname;
        }).component;

        fs.readFile(component,function (err,data) {
            // console.log(data)
            response.end(data.toString())
        })

        //response.write(component);
    }else {
        response.end()
    }
}

module.exports={
    send
}