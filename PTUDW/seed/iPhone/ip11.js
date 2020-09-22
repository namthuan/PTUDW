var Product = require('../../models/product');

var mongoose = require('mongoose');
// const { exists } = require('../models/product');
mongoose.connect("mongodb+srv://18VP:Trung@123@cluster0.xar5c.mongodb.net/18VP?retryWrites=true&w=majority", {
    useUnifiedTopology: true,
    useNewUrlParser: true
});
var iPhone11 = [
    new Product({
        name : 'iphone 11',
        imagePath: '/images/img_iphone/img-buy-iphone11/iphone11.jpg',
        color: 'White',
        rom : '64GB',
        price : 699    
    }),

    new Product({
        name : 'iphone 11',
        imagePath: '/images/img_iphone/img-buy-iphone11/iphone11.jpg',
        color: 'White',
        rom : '128GB',
        price : 749    
    }),

    new Product({
        name : 'iphone 11',
        imagePath: '/images/img_iphone/img-buy-iphone11/iphone11.jpg',
        color: 'White',
        rom : '256GB',
        price : 849   
    }),

    new Product({
        name : 'iphone 11',
        imagePath: '/images/img_iphone/img-buy-iphone11/iphone11.jpg',
        color: 'Black',
        rom : '64GB',
        price : 699    
    }),

    new Product({
        name : 'iphone 11',
        imagePath: '/images/img_iphone/img-buy-iphone11/iphone11.jpg',
        color: 'Black',
        rom : '128GB',
        price : 749    
    }),

    new Product({
        name : 'iphone 11',
        imagePath: '/images/img_iphone/img-buy-iphone11/iphone11.jpg',
        color: 'Black',
        rom : '256GB',
        price : 849   
    }),

    new Product({
        name : 'iphone 11',
        imagePath: '/images/img_iphone/img-buy-iphone11/iphone11.jpg',
        color: 'Green',
        rom : '64GB',
        price : 699    
    }),

    new Product({
        name : 'iphone 11',
        imagePath: '/images/img_iphone/img-buy-iphone11/iphone11.jpg',
        color: 'Green',
        rom : '128GB',
        price : 749    
    }),

    new Product({
        name : 'iphone 11',
        imagePath: '/images/img_iphone/img-buy-iphone11/iphone11.jpg',
        color: 'Green',
        rom : '256GB',
        price : 849   
    }),

    new Product({
        name : 'iphone 11',
        imagePath: '/images/img_iphone/img-buy-iphone11/iphone11.jpg',
        color: 'Yellow',
        rom : '64GB',
        price : 699    
    }),

    new Product({
        name : 'iphone 11',
        imagePath: '/images/img_iphone/img-buy-iphone11/iphone11.jpg',
        color: 'Yellow',
        rom : '128GB',
        price : 749    
    }),

    new Product({
        name : 'iphone 11',
        imagePath: '/images/img_iphone/img-buy-iphone11/iphone11.jpg',
        color: 'Yellow',
        rom : '256GB',
        price : 849   
    }),

    new Product({
        name : 'iphone 11',
        imagePath: '/images/img_iphone/img-buy-iphone11/iphone11.jpg',
        color: 'Purple',
        rom : '64GB',
        price : 699    
    }),

    new Product({
        name : 'iphone 11',
        imagePath: '/images/img_iphone/img-buy-iphone11/iphone11.jpg',
        color: 'Purple',
        rom : '128GB',
        price : 749    
    }),

    new Product({
        name : 'iphone 11',
        imagePath: '/images/img_iphone/img-buy-iphone11/iphone11.jpg',
        color: 'Purple',
        rom : '256GB',
        price : 849   
    }),

    new Product({
        name : 'iphone 11',
        imagePath: '/images/img_iphone/img-buy-iphone11/iphone11.jpg',
        color: 'Red',
        rom : '64GB',
        price : 699    
    }),

    new Product({
        name : 'iphone 11',
        imagePath: '/images/img_iphone/img-buy-iphone11/iphone11.jpg',
        color: 'Red',
        rom : '128GB',
        price : 749    
    }),

    new Product({
        name : 'iphone 11',
        imagePath: '/images/img_iphone/img-buy-iphone11/iphone11.jpg',
        color: 'Red',
        rom : '256GB',
        price : 849   
    })
];


var done=0;
for (var i = 0; i<iPhone11.length; i++){
    iPhone11[i].save(function(err, result){
        done++;
        if (done === iPhone11.length){
            exit();
        }
    });
}

function exit(){
    mongoose.disconnect();
}

