//iphone

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    name : {type: String, required: true},
    imagePath : {type: String, required: true},
    color: {type: String, required: true},
    rom : {type: String, required: true},
    price: {type: Number, required: true}
});

module.exports = mongoose.model('iPhone', schema); 