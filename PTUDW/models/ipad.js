var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    name : {type: String, required: true},
    inch : {type: Number, required: true},
    more : {type: String, required: true},  // wifi or wifi + cellular
    color: {type: String, required: true},
    rom : {type: String, required: true},
    price: {type: Number, required: true}
});

module.exports = mongoose.model('iPad', schema); 