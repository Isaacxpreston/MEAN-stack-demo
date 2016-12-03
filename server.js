var express = require('express')
var mongoose = require('./mongoose.js')
var TempMongo = mongoose.TempMongo
var bodyParser = require('body-parser')
var app = express()
app
  .use(express.static(__dirname))
  .use(bodyParser.json())
  .listen(3000)

console.log('running on 3000')
mongoose.connect()


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