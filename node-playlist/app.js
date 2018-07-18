var express = require('express')
var bodyParser = require('body-parser')

var app = express()

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.set('view engine', 'ejs')
app.use('/assets', express.static('stuff'))

app.get('/', function(req, res){
    res.render('index')
})
app.get('/contact', function(req, res){
    console.log(req.query)
    res.render('contact', {qs: req.query})
})
app.post('/contact', urlencodedParser, function(req, res) {
    console.log(req.body)
    res.render('contact-success', {data: req.body}) 
})
app.get('/profile/:name', function(req, res) {
    // res.send('you requested to see a profile with the name of ' + req.params.name
    var data = {age: 29, job: 'jjinja', hobbies: ['eating', 'fighting', 'fishing']}
    res.render('profile', {person: req.params.name, data: data})
})

app.listen(3000)