var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    name : {type: String, required: true},
    case_size : {type: String, required: true},
    connectivity : {type: String, required: true},
    price : {type: Number, required: true},
    type : {type: String, required: true}

});

module.exports = mongoose.model('watch', schema); 