var Product = require('../../models/ipad');

var mongoose = require('mongoose');
// const { exists } = require('../models/product');
mongoose.connect("mongodb+srv://18VP:Trung@123@cluster0.xar5c.mongodb.net/18VP?retryWrites=true&w=majority", {
    useUnifiedTopology: true,
    useNewUrlParser: true
});
var iPadMini = [
    new Product({
        name : 'iPad Mini',
        color: 'grey',
        rom : '64GB',
        more : 'Wi-Fi',
        price : 399    
    }),

    new Product({
        name : 'iPad Mini',
        color: 'grey',
        rom : '256GB',
        more : 'Wi-Fi',
        price : 499    
    }),
    new Product({
        name : 'iPad Mini',
        color: 'silver',
        rom : '64GB',
        more : 'Wi-Fi',
        price : 399    
    }),
    new Product({
        name : 'iPad Mini',
        color: 'silver',
        rom : '256GB',
        more : 'Wi-Fi',
        price : 499   
    }),
    new Product({
        name : 'iPad Mini',
        color: 'gold',
        rom : '64GB',
        more : 'Wi-Fi',
        price : 399    
    }),
    new Product({
        name : 'iPad Mini',
        color: 'gold',
        rom : '256GB',
        more : 'Wi-Fi',
        price : 499    
    }),
    new Product({
        name : 'iPad Mini',
        color: 'grey',
        rom : '64GB',
        more : 'Wi-Fi + Cellular',
        price : 549    
    }),

    new Product({
        name : 'iPad Mini',
        color: 'grey',
        rom : '256GB',
        more : 'Wi-Fi + Cellular',
        price : 629    
    }),
    new Product({
        name : 'iPad Mini',
        color: 'silver',
        rom : '64GB',
        more : 'Wi-Fi + Cellular',
        price : 549    
    }),
    new Product({
        name : 'iPad Mini',
        color: 'silver',
        rom : '256GB',
        more : 'Wi-Fi + Cellular',
        price : 629   
    }),
    new Product({
        name : 'iPad Mini',
        color: 'gold',
        rom : '64GB',
        more : 'Wi-Fi + Cellular',
        price : 549    
    }),
    new Product({
        name : 'iPad Mini',
        color: 'gold',
        rom : '256GB',
        more : 'Wi-Fi + Cellular',
        price : 629    
    })
  






  


];


var done=0;
for (var i = 0; i<iPadMini.length; i++){
    iPadMini[i].save(function(err, result){
        done++;
        if (done === iPadMini.length){
            exit();
        }
    });
}

function exit(){
    mongoose.disconnect();
}

