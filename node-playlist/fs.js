var fs = require('fs')
// fs.readFileSync('readMe.txt', 'utf-8')
// fs.writeFileSync('readMe.txt', 'kjfdklfdskljsdfkjljfs')
// fs.readFile('readMe.txt', 'utf8', function(err, data){
//     console.log(data)
//     fs.writeFile('readMe.txt', data)
// })
// fs.unlink('readMe.txt') // 删除文件
// fs.mkdirSync('stuff') // 创建文件夹
// fs.rmdirSync('stuff') // 删除文件夹
// fs.mkdir('stuff', function() {
//     fs.readFile('readMe.txt', 'utf-8', function(err, data){
//         fs.writeFile('./stuff/writeMe.txt', data)
//     })
// })
fs.unlink('./stuff/writeMe.txt', function(){
    fs.rmdir('stuff') // 不能删除非空文件夹，要先用unlink删除文件夹中的文件
})