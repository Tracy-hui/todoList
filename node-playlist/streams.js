var http = require('http')
var fs = require('fs')
// var myReadString = fs.createReadStream(__dirname + '/readMe.txt', 'utf-8')
// var myWriteStream = fs.createWriteStream(__dirname + '/writeMe.txt' )
// myReadString.on('data',function(chunk){
//     // console.log('new chunk received:')
//     // console.log(chunk)
//     myWriteStream.write(chunk)
// })
// myReadString.pipe(myWriteStream)


// var server = http.createServer(function(req, res){
//     console.log('request was made: ' + req.url)
//     res.writeHead(200, {'Content-Type': 'text/plain'})
//     var myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf-8')
//     myReadStream.pipe(res)
// })
// html
// var server = http.createServer(function(req, res){
//     console.log('request was made: ' + req.url)
//     res.writeHead(200, {'Content-Type': 'text/html'})
//     var myReadStream = fs.createReadStream(__dirname + '/index.html', 'utf-8')
//     myReadStream.pipe(res)
// })
// json
// var server = http.createServer(function(req, res){
//     console.log('request was made: ' + req.url)
//     res.writeHead(200, {'Content-Type': 'application/json'})
//     var myObj = {
//         name: 'Ryu',
//         job: 'Ninja',
//         age: 29
//     }
//     res.end(JSON.stringify(myObj))
// })
var server = http.createServer(function(req, res){
    console.log('request was made: ' + req.url)
    if (req.url === '/home' || req.url === '/') {
        res.writeHead(200, {'Content-Type': 'text/html'})
        fs.createReadStream(__dirname + '/index.html').pipe(res)
    } else if (req.url === '/contact') {
        res.writeHead(200, {'Content-Type': 'text/html'})
        fs.createReadStream(__dirname + '/contact.html').pipe(res)
    } else if (req.url === '/api/ninjas') {
        res.writeHead(200, {'Content-Type': 'application/json'})
        var ninjas = [
            {
                name: 'ryu',
                age: 29
            },
            {
                name: 'youshi',
                age: 32
            },
            {
                name: 'shuan',
                age: 26
            }
        ]
        res.end(JSON.stringify(ninjas))
    } else {
        res.writeHead(200, {'Content-Type': 'text/html'})
        fs.createReadStream(__dirname + '/404.html').pipe(res) 
    }
})
server.listen(3000, '127.0.0.1')
console.log('yo dawgs, now listening to port 3000')