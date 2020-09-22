var Product = require('../../models/product');

var mongoose = require('mongoose');
// const { exists } = require('../models/product');
mongoose.connect("mongodb+srv://18VP:Trung@123@cluster0.xar5c.mongodb.net/18VP?retryWrites=true&w=majority", {
    useUnifiedTopology: true,
    useNewUrlParser: true
});
var iPhoneSE = [
    new Product({
        name : 'iPhone SE',
        imagePath: '/images/img_iphone/img-buy-iphone-se/buy-iphone-se.jpg',
        color: 'White',
        rom : '64GB',
        price : 399    
    }),

    new Product({
        name : 'iPhone SE',
        imagePath: '/images/img_iphone/img-buy-iphone-se/buy-iphone-se.jpg',
        color: 'White',
        rom : '128GB',
        price : 499    
    }),

    new Product({
        name : 'iPhone SE',
        imagePath: '/images/img_iphone/img-buy-iphone-se/buy-iphone-se.jpg',
        color: 'White',
        rom : '256GB',
        price : 549   
    }),

    new Product({
        name : 'iPhone SE',
        imagePath: '/images/img_iphone/img-buy-iphone-se/buy-iphone-se.jpg',
        color: 'Black',
        rom : '64GB',
        price : 399    
    }),

    new Product({
        name : 'iPhone SE',
        imagePath: '/images/img_iphone/img-buy-iphone-se/buy-iphone-se.jpg',
        color: 'Black',
        rom : '128GB',
        price : 499    
    }),

    new Product({
        name : 'iPhone SE',
        imagePath: '/images/img_iphone/img-buy-iphone-se/buy-iphone-se.jpg',
        color: 'Black',
        rom : '256GB',
        price : 549   
    }),

    new Product({
        name : 'iPhone SE',
        imagePath: '/images/img_iphone/img-buy-iphone-se/buy-iphone-se.jpg',
        color: 'Red',
        rom : '64GB',
        price : 399    
    }),

    new Product({
        name : 'iPhone SE',
        imagePath: '/images/img_iphone/img-buy-iphone-se/buy-iphone-se.jpg',
        color: 'Red',
        rom : '128GB',
        price : 499    
    }),

    new Product({
        name : 'iPhone SE',
        imagePath: '/images/img_iphone/img-buy-iphone-se/buy-iphone-se.jpg',
        color: 'Red',
        rom : '256GB',
        price : 549   
    })

];


var done=0;
for (var i = 0; i<iPhoneSE.length; i++){
    iPhoneSE[i].save(function(err, result){
        done++;
        if (done === iPhoneSE.length){
            exit();
        }
    });
}

function exit(){
    mongoose.disconnect();
}

