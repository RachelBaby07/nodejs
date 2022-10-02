var fs = require('fs')

fs.writeFile('txt/output.txt', "hello node", function (err) {
    if (err) {
        console.log(err);
    }
})

// 内容太长时
// var content = {
//     path: 'txt/output.txt',
//     content: 'hello  node'
// }

// function writeFile(options) {
//     fs.writeFile(content.path, options.content, function (err) {
//         if (err) {
//             console.log(err);
//         }
//     })
// }