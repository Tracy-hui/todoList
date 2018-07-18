var bodyParser = require('body-parser')
var mogoose = require('mongoose')

// connect to the database
mogoose.connect('mongodb://test:test123456@ds141611.mlab.com:41611/todo_hu')

// create a schema - this is like a blueprint,定义一个schema
var todoSchema = new mogoose.Schema({
    item: String
})
// 将schema发布为model， 查询依赖model
var Todo = mogoose.model('Todo', todoSchema)
// 数据库插入数据
// var itemOne = Todo({item: 'buy Flowers'}).save(function(err){
//     if (err) throw err;
//     console.log('item saved')
// })
// var data = [{item: 'get milk'},{item: 'walk dog'},{item: 'kick some coding ass'},]
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

module.exports = function(app){
    app.get('/todo', function(req, res){
        // res.render('todo', {todos: data})
        // res.render('todo', {todos: data})
        // get data from mogodb and pass it to view
        Todo.find({}, function(err, data){
            if (err) throw err
            res.render('todo', {todos: data})
        })
    })

    app.post('/todo', urlencodedParser, function(req, res){
        // data.push(req.body)
        // res.json(data)
        // get data from the view and add ite to mongodb
        var newTodo = Todo(req.body).save(function(err, data){
            if(err) throw err
            res.json(data)
        })
    })

    app.delete('/todo/:item', function(req, res){
        // data = data.filter(function(todo){
        //     return todo.item.replace(/ /g, '-') !== req.params.item
        // })
        // res.json(data)
        // delete the requested item from mogoosedb
        Todo.find({item: req.params.item.replace(/\-/g, " ")}).remove(function(err, data){
            if(err) throw err
            res.json(data)
        })
    })
}