var Product = require('../../models/product');

var mongoose = require('mongoose');
// const { exists } = require('../models/product');
mongoose.connect("mongodb+srv://18VP:Trung@123@cluster0.xar5c.mongodb.net/18VP?retryWrites=true&w=majority", {
    useUnifiedTopology: true,
    useNewUrlParser: true
});
var iPhone11pro = [


    new Product({
        name : 'iPhone 11 Pro ',
        imagePath: '/images/img_iphone/img-buy-iphone11-pro/iphone11-pro.jpg',
        color: 'Gray',
        rom : '64GB',
        price : 999
    }),
    new Product({
        name : 'iPhone 11 Pro ',
        imagePath: '/images/img_iphone/img-buy-iphone11-pro/iphone11-pro.jpg',
        color: 'Gold',
        rom : '64GB',
        price : 999
    }),
    new Product({
        name : 'iPhone 11 Pro ',
        imagePath: '/images/img_iphone/img-buy-iphone11-pro/iphone11-pro.jpg',
        color: 'Sliver',
        rom : '64GB',
        price : 999
    }),
    new Product({
        name : 'iPhone 11 Pro ',
        imagePath: '/images/img_iphone/img-buy-iphone11-pro/iphone11-pro.jpg',
        color: 'Green',
        rom : '64GB',
        price : 999
    }),

    new Product({
        name : 'iPhone 11 Pro ',
        imagePath: '/images/img_iphone/img-buy-iphone11-pro/iphone11-pro.jpg',
        color: 'Gray',
        rom : '256GB',
        price : 1149
    }),

    new Product({
        name : 'iPhone 11 Pro ',
        imagePath: '/images/img_iphone/img-buy-iphone11-pro/iphone11-pro.jpg',
        color: 'Sliver',
        rom : '256GB',
        price : 1149
    }),
    new Product({
        name : 'iPhone 11 Pro ',
        imagePath: '/images/img_iphone/img-buy-iphone11-pro/iphone11-pro.jpg',
        color: 'Green',
        rom : '256GB',
        price : 1149
    }),
    new Product({
        name : 'iPhone 11 Pro ',
        imagePath: '/images/img_iphone/img-buy-iphone11-pro/iphone11-pro.jpg',
        color: 'Gold',
        rom : '256GB',
        price : 1149
    }),

    new Product({
        name : 'iPhone 11 Pro ',
        imagePath: '/images/img_iphone/img-buy-iphone11-pro/iphone11-pro.jpg',
        color: 'Gray',
        rom : '512GB',
        price : 1349
    }),

    new Product({
        name : 'iPhone 11 Pro ',
        imagePath: '/images/img_iphone/img-buy-iphone11-pro/iphone11-pro.jpg',
        color: 'Sliver',
        rom : '512GB',
        price : 1349
    }),

    new Product({
        name : 'iPhone 11 Pro ',
        imagePath: '/images/img_iphone/img-buy-iphone11-pro/iphone11-pro.jpg',
        color: 'Green',
        rom : '512GB',
        price : 1349
    }),
    new Product({
        name : 'iPhone 11 Pro ',
        imagePath: '/images/img_iphone/img-buy-iphone11-pro/iphone11-pro.jpg',
        color: 'Gold',
        rom : '512GB',
        price : 1349
    }),






    new Product({
        name : 'iPhone 11 Pro Max',
        imagePath: '/images/img_iphone/img-buy-iphone11-pro/iphone11-pro.jpg',
        color: 'Gray',
        rom : '64GB',
        price : 1099    
    }),

    new Product({
        name : 'iPhone 11 Pro Max',
        imagePath: '/images/img_iphone/img-buy-iphone11-pro/iphone11-pro.jpg',
        color: 'Gray',
        rom : '256GB',
        price : 1249  
    }),

    new Product({
        name : 'iPhone 11 Pro Max',
        imagePath: '/images/img_iphone/img-buy-iphone11-pro/iphone11-pro.jpg',
        color: 'Gray',
        rom : '512GB',
        price : 1449   
    }),

    new Product({
        name : 'iPhone 11 Pro Max',
        imagePath: '/images/img_iphone/img-buy-iphone11-pro/iphone11-pro.jpg',
        color: 'Silver',
        rom : '64GB',
        price : 1099    
    }),

    new Product({
        name : 'iPhone 11 Pro Max',
        imagePath: '/images/img_iphone/img-buy-iphone11-pro/iphone11-pro.jpg',
        color: 'Silver',
        rom : '256GB',
        price : 1249   
    }),

    new Product({
        name : 'iPhone 11 Pro Max',
        imagePath: '/images/img_iphone/img-buy-iphone11-pro/iphone11-pro.jpg',
        color: 'Silver',
        rom : '512GB',
        price : 1449   
    }),

    new Product({
        name : 'iPhone 11 Pro Max',
        imagePath: '/images/img_iphone/img-buy-iphone11-pro/iphone11-pro.jpg',
        color: 'Green',
        rom : '64GB',
        price : 1099    
    }),

    new Product({
        name : 'iPhone 11 Pro Max',
        imagePath: '/images/img_iphone/img-buy-iphone11-pro/iphone11-pro.jpg',
        color: 'Green',
        rom : '256GB',
        price : 1249  
    }),

    new Product({
        name : 'iPhone 11 Pro Max',
        imagePath: '/images/img_iphone/img-buy-iphone11-pro/iphone11-pro.jpg',
        color: 'Green',
        rom : '512GB',
        price : 1449   
    }),

    new Product({
        name : 'iPhone 11 Pro Max',
        imagePath: '/images/img_iphone/img-buy-iphone11-pro/iphone11-pro.jpg',
        color: 'Gold',
        rom : '64GB',
        price : 1099    
    }),

    new Product({
        name : 'iPhone 11 Pro Max',
        imagePath: '/images/img_iphone/img-buy-iphone11-pro/iphone11-pro.jpg',
        color: 'Gold',
        rom : '256GB',
        price : 1249    
    }),

    new Product({
        name : 'iPhone 11 Pro Max',
        imagePath: '/images/img_iphone/img-buy-iphone11-pro/iphone11-pro.jpg',
        color: 'Gold',
        rom : '512GB',
        price : 1449   
    })

   
];


var done=0;
for (var i = 0; i<iPhone11pro.length; i++){
    iPhone11pro[i].save(function(err, result){
        done++;
        if (done === iPhone11pro.length){
            exit();
        }
    });
}

function exit(){
    mongoose.disconnect();
}

