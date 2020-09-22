var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    name : {type: String, required: true},
    cpu : {type: String, required: true},
    color: {type: String, required: true},
    ram : {type: String, required: true},  
    rom : {type: String, required: true},
    graphic : {type: String},
    price: {type: Number, required: true}
});

module.exports = mongoose.model('mac', schema); 