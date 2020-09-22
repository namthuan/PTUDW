var Product = require('../../models/ipad');

var mongoose = require('mongoose');
// const { exists } = require('../models/product');
mongoose.connect("mongodb+srv://18VP:Trung@123@cluster0.xar5c.mongodb.net/18VP?retryWrites=true&w=majority", {
    useUnifiedTopology: true,
    useNewUrlParser: true
});
var iPadPro = [
    new Product({
        name : 'iPad Air',
        color: 'grey',
        rom : '64GB',
        more : 'Wi-Fi',
        price : 499    
    }),

    new Product({
        name : 'iPad Air',
        color: 'grey',
        rom : '256GB',
        more : 'Wi-Fi',
        price : 649    
    }),
    new Product({
        name : 'iPad Air',
        color: 'silver',
        rom : '64GB',
        more : 'Wi-Fi',
        price : 499    
    }),
    new Product({
        name : 'iPad Air',
        color: 'silver',
        rom : '256GB',
        more : 'Wi-Fi',
        price : 649   
    }),
    new Product({
        name : 'iPad Air',
        color: 'gold',
        rom : '64GB',
        more : 'Wi-Fi',
        price : 499    
    }),
    new Product({
        name : 'iPad Air',
        color: 'gold',
        rom : '256GB',
        more : 'Wi-Fi',
        price : 649    
    }),
  
    new Product({
        name : 'iPad Air',
        color: 'grey',
        rom : '64GB',
        more : 'Wi-Fi + Cellular',
        price : 549    
    }),

    new Product({
        name : 'iPad Air',
        color: 'grey',
        rom : '256GB',
        more : 'Wi-Fi + Cellular',
        price : 699    
    }),
    new Product({
        name : 'iPad Air',
        color: 'silver',
        rom : '64GB',
        more : 'Wi-Fi + Cellular',
        price : 549    
    }),
    new Product({
        name : 'iPad Air',
        color: 'silver',
        rom : '256GB',
        more : 'Wi-Fi + Cellular',
        price : 699   
    }),
    new Product({
        name : 'iPad Air',
        color: 'gold',
        rom : '64GB',
        more : 'Wi-Fi + Cellular',
        price : 549    
    }),
    new Product({
        name : 'iPad Air',
        color: 'gold',
        rom : '256GB',
        more : 'Wi-Fi + Cellular',
        price : 699    
    })
  


];


var done=0;
for (var i = 0; i<iPadPro.length; i++){
    iPadPro[i].save(function(err, result){
        done++;
        if (done === iPadPro.length){
            exit();
        }
    });
}

function exit(){
    mongoose.disconnect();
}

