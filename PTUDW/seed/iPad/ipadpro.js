var Product = require('../../models/ipad');

var mongoose = require('mongoose');
// const { exists } = require('../models/product');
mongoose.connect("mongodb+srv://18VP:Trung@123@cluster0.xar5c.mongodb.net/18VP?retryWrites=true&w=majority", {
    useUnifiedTopology: true,
    useNewUrlParser: true
});
var iPadPro = [
    new Product({
        name : 'iPad Pro',
        inch: 11,
        color: 'grey',
        rom : '128GB',
        more : 'Wi-Fi',
        price : 799    
    }),
    new Product({
        name : 'iPad Pro',
        inch: 11,
        color: 'grey',
        rom : '256GB',
        more : 'Wi-Fi',
        price : 899    
    }),
    new Product({
        name : 'iPad Pro',
        inch: 11,
        color: 'grey',
        rom : '512GB',
        more : 'Wi-Fi',
        price : 1099    
    }),
    new Product({
        name : 'iPad Pro',
        inch: 11,
        color: 'grey',
        rom : '1T',
        more : 'Wi-Fi',
        price : 1299    
    }),
    new Product({
        name : 'iPad Pro',
        inch: 11,
        color: 'sliver',
        rom : '128GB',
        more : 'Wi-Fi',
        price : 799   
    }),
    new Product({
        name : 'iPad Pro',
        inch: 11,
        color: 'sliver',
        rom : '256GB',
        more : 'Wi-Fi',
        price : 899    
    }),
    new Product({
        name : 'iPad Pro',
        inch: 11,
        color: 'sliver',
        rom : '512GB',
        more : 'Wi-Fi',
        price : 1099    
    }),
    new Product({
        name : 'iPad Pro',
        inch: 11,
        color: 'sliver',
        rom : '1T',
        more : 'Wi-Fi',
        price : 1299    
    }),
    new Product({
        name : 'iPad Pro',
        inch: 12.9,
        color: 'grey',
        rom : '128GB',
        more : 'Wi-Fi',
        price : 899    
    }),
    new Product({
        name : 'iPad Pro',
        inch: 12.9,
        color: 'grey',
        rom : '256GB',
        more : 'Wi-Fi',
        price : 999    
    }),
    new Product({
        name : 'iPad Pro',
        inch: 12.9,
        color: 'grey',
        rom : '512GB',
        more : 'Wi-Fi',
        price : 1199    
    }),
    new Product({
        name : 'iPad Pro',
        inch: 12.9,
        color: 'grey',
        rom : '1T',
        more : 'Wi-Fi',
        price : 1299    
    }),
    new Product({
        name : 'iPad Pro',
        inch: 12.9,
        color: 'sliver',
        rom : '128GB',
        more : 'Wi-Fi',
        price : 899   
    }),
    new Product({
        name : 'iPad Pro',
        inch: 12.9,
        color: 'sliver',
        rom : '256GB',
        more : 'Wi-Fi',
        price : 999    
    }),
    new Product({
        name : 'iPad Pro',
        inch: 12.9,
        color: 'sliver',
        rom : '512GB',
        more : 'Wi-Fi',
        price : 1199    
    }),
    new Product({
        name : 'iPad Pro',
        inch: 12.9,
        color: 'sliver',
        rom : '1T',
        more : 'Wi-Fi',
        price : 1299    
    }),
    new Product({
        name : 'iPad Pro',
        inch: 12.9,
        color: 'grey',
        rom : '128GB',
        more : 'Wi-Fi + Cellular',
        price : 949    
    }),
    new Product({
        name : 'iPad Pro',
        inch: 12.9,
        color: 'grey',
        rom : '256GB',
        more : 'Wi-Fi + Cellular',
        price : 1049    
    }),
    new Product({
        name : 'iPad Pro',
        inch: 12.9,
        color: 'grey',
        rom : '512GB',
        more : 'Wi-Fi + Cellular',
        price : 1249    
    }),
    new Product({
        name : 'iPad Pro',
        inch: 12.9,
        color: 'grey',
        rom : '1T',
        more : 'Wi-Fi + Cellular',
        price : 1299    
    }),
    new Product({
        name : 'iPad Pro',
        inch: 12.9,
        color: 'sliver',
        rom : '128GB',
        more : 'Wi-Fi + Cellular',
        price : 949   
    }),
    new Product({
        name : 'iPad Pro',
        inch: 12.9,
        color: 'sliver',
        rom : '256GB',
        more : 'Wi-Fi + Cellular',
        price : 1049    
    }),
    new Product({
        name : 'iPad Pro',
        inch: 12.9,
        color: 'sliver',
        rom : '512GB',
        more : 'Wi-Fi + Cellular',
        price : 1249    
    }),
    new Product({
        name : 'iPad Pro',
        inch: 12.9,
        color: 'sliver',
        rom : '1T',
        more : 'Wi-Fi + Cellular',
        price : 1299    
    }),

    new Product({
        name : 'iPad Pro',
        inch: 11,
        color: 'grey',
        rom : '128GB',
        more : 'Wi-Fi + Cellular',
        price : 899    
    }),
    new Product({
        name : 'iPad Pro',
        inch: 11,
        color: 'grey',
        rom : '256GB',
        more : 'Wi-Fi + Cellular',
        price : 999    
    }),
    new Product({
        name : 'iPad Pro',
        inch: 11,
        color: 'grey',
        rom : '512GB',
        more : 'Wi-Fi + Cellular',
        price : 1149    
    }),
    new Product({
        name : 'iPad Pro',
        inch: 11,
        color: 'grey',
        rom : '1T',
        more : 'Wi-Fi + Cellular',
        price : 1249    
    }),
    new Product({
        name : 'iPad Pro',
        inch: 11,
        color: 'sliver',
        rom : '128GB',
        more : 'Wi-Fi + Cellular',
        price : 899   
    }),
    new Product({
        name : 'iPad Pro',
        inch: 11,
        color: 'sliver',
        rom : '256GB',
        more : 'Wi-Fi + Cellular',
        price : 999    
    }),
    new Product({
        name : 'iPad Pro',
        inch: 11,
        color: 'sliver',
        rom : '512GB',
        more : 'Wi-Fi + Cellular',
        price : 1149    
    }),
    new Product({
        name : 'iPad Pro',
        inch: 11,
        color: 'sliver',
        rom : '1T',
        more : 'Wi-Fi + Cellular',
        price : 1249    
    }),





 

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

