var express = require('express')
var bodyParser = require('body-parser')
var mongoose = require('mongoose')
var mongooseModels = require('./mongoose.js')
var TempMongo = mongooseModels.TempMongo
var app = express()
app
  .use(express.static(__dirname))
  .use(bodyParser.json())
  .listen(3000)

console.log('running on 3000')
// mongoose.connect() --mongoose export version
mongoose.connect('mongodb://localhost/temp')


app.post('/route', function(req, res){ //post
  //temp
  var temp = new TempMongo({
    input: req.body.input
  })
  //find and insert
  TempMongo.find({input: req.body.input}, function(err, data){
    if(err){
      throw err
    }
    if(!data.length){ //if not found
      temp.save(function(err){ //save to db
        if(err){
          throw err
        }
        //send data back from db
        TempMongo.find({input: req.body.input}, function(err, data){
          if(err){
            throw err
          }
          res.send('saved: ' + data[0].input) //send response to client
        })
      })
    } else {
      res.send('"' + req.body.input + '"' + ' is already saved')
    }
  })
})

app.post('/drop', function(req, res){
  mongoose.connection.db.dropDatabase(function(err) {
    if(err){
      console.log(err)
      throw err
    }
    res.send('db cleared')
  });
})

app.post('/show', function(req, res){
  TempMongo.find(function(err, data){
    if(err){
      throw err
    }
    var temp = []

    data.forEach(function(obj){
      temp.push(obj.input)
    })
    res.send(temp)
  })
})