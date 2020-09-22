var express = require('express');
var router = express.Router();
var Product = require('../models/product');
// var Cart = require('../models/product');
var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;
const ctrl_iphone = require('../controllers/iphone');

router.get('/', ctrl_iphone.getIphone);
router.get('/form/:name', ctrl_iphone.getForm);

// router.get('/form/:name', function(req, res, next){
//     Product.find(function(err, docs){
//         var productChunks = [];
//         var chunkSize = 3;
//         for (var i = 0; i<docs.length; i+=chunkSize){
//             productChunks.push(docs.slice(i, i+chunkSize));
//         }
//         // res.render('')
//     })
// })

// router.get('/add-to-cart/:id', function(req, res, next){
//     var productID = req.params.id;
//     var cart = new cart(req.session.cart ? req.session.cart : {items :{}});

//     Product.findById(productID, function(err, product){
//         if(err){
//             return res.redirect('/');
//         }
//         cart.add(Product,Product.id);
//         req.session.cart = cart;
//         console.log(req.session.cart);
//         res.redirect('/');
//     })
// });


const product = (req, res)=>{
    var allProduct = [];
    var priceProduct = [];
    var colorProduct = [];
    var nameProduct = [];
    var idProduct = [];
    MongoClient.connect('mongodb+srv://18VP:Trung@123@cluster0.xar5c.mongodb.net/18VP?retryWrites=true&w=majority', 
    {useNewUrlParser: true, useUnifiedTopology: true}, function(err, db){
        if(err) throw err;
        var dbo = db.db('18VP');

        dbo.collection("iphones").find({}).toArray(function(err, result) {        
            if (err) throw err;
            // console.log(result.name);
            for(var i = 0; i<result.length; i++){
                allProduct.push(result.slice(i, i+1));
            }
          
        });

        dbo.collection("iphones").find({_id: ObjectId(id)}).toArray(function(err, result) {        
            if (err) throw err;
            // console.log(result.name);
            for(var i = 0; i<result.length; i++){
                idProduct.push(result.slice(i, i+1));
            }
          
        });

        // dbo.collection("iphones").find({_id: ObjectId(id)}).toArray(function(err, result) {        
        //     if (err) throw err;
        //     // console.log(result.name);
        //     for(var i = 0; i<result.length; i++){
        //         idProduct.push(result.slice(i, i+1));
        //     }
          
        // });

    });
}

module.exports = router;