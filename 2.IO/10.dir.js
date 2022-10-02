var fs =require('fs');
console.log("创建目录 txt/new/");

// fs.mkdir("txt/new",function (err) {
//     if (err){
//         console.log(err);
//     }
// })

fs.readdir('txt',function (err,files) {
    files.forEach(function (file) {   //遍历打印
        console.log(file);
    })
})
