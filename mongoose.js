var mongoose = require('mongoose')

exports.TempMongo = mongoose.model('TempMongo', new mongoose.Schema({
    input: {type: String}
  })
)
exports.connect = function(){
  mongoose.connect('mongodb://localhost/temp')
}