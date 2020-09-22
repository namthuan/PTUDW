var Product = require('../../models/product');

var mongoose = require('mongoose');
// const { exists } = require('../models/product');
mongoose.connect("mongodb+srv://18VP:Trung@123@cluster0.xar5c.mongodb.net/18VP?retryWrites=true&w=majority", {
    useUnifiedTopology: true,
    useNewUrlParser: true
});
var iPhoneXR = [
    new Product({
        name : 'iPhone XR',
        imagePath: '/images/img_iphone/img-buy-iphone-xr/iphone-xr.jpg',
        color: 'White',
        rom : '64GB',
        price : 599    
    }),

    new Product({
        name : 'iPhone XR',
        imagePath: '/images/img_iphone/img-buy-iphone-xr/iphone-xr.jpg',
        color: 'White',
        rom : '128GB',
        price : 649    
    }),


    new Product({
        name : 'iPhone XR',
        imagePath: '/images/img_iphone/img-buy-iphone-xr/iphone-xr.jpg',
        color: 'Black',
        rom : '64GB',
        price : 599    
    }),

    new Product({
        name : 'iPhone XR',
        imagePath: '/images/img_iphone/img-buy-iphone-xr/iphone-xr.jpg',
        color: 'Black',
        rom : '128GB',
        price : 649    
    }),


    new Product({
        name : 'iPhone XR',
        imagePath: '/images/img_iphone/img-buy-iphone-xr/iphone-xr.jpg',
        color: 'Blue',
        rom : '64GB',
        price : 599    
    }),

    new Product({
        name : 'iPhone XR',
        imagePath: '/images/img_iphone/img-buy-iphone-xr/iphone-xr.jpg',
        color: 'Blue',
        rom : '128GB',
        price : 649    
    }),


    new Product({
        name : 'iPhone XR',
        imagePath: '/images/img_iphone/img-buy-iphone-xr/iphone-xr.jpg',
        color: 'Yellow',
        rom : '64GB',
        price : 599    
    }),

    new Product({
        name : 'iPhone XR',
        imagePath: '/images/img_iphone/img-buy-iphone-xr/iphone-xr.jpg',
        color: 'Yellow',
        rom : '128GB',
        price : 649    
    }),


    new Product({
        name : 'iPhone XR',
        imagePath: '/images/img_iphone/img-buy-iphone-xr/iphone-xr.jpg',
        color: 'Coral',
        rom : '64GB',
        price : 599    
    }),

    new Product({
        name : 'iPhone XR',
        imagePath: '/images/img_iphone/img-buy-iphone-xr/iphone-xr.jpg',
        color: 'Coral',
        rom : '128GB',
        price : 649    
    }),

    new Product({
        name : 'iPhone XR',
        imagePath: '/images/img_iphone/img-buy-iphone-xr/iphone-xr.jpg',
        color: 'Red',
        rom : '64GB',
        price : 599    
    }),

    new Product({
        name : 'iPhone XR',
        imagePath: '/images/img_iphone/img-buy-iphone-xr/iphone-xr.jpg',
        color: 'Red',
        rom : '128GB',
        price : 649    
    }),

];


var done=0;
for (var i = 0; i<iPhoneXR.length; i++){
    iPhoneXR[i].save(function(err, result){
        done++;
        if (done === iPhoneXR.length){
            exit();
        }
    });
}

function exit(){
    mongoose.disconnect();
}

