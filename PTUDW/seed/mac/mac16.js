var Product = require('../../models/mac');

var mongoose = require('mongoose');
// const { exists } = require('../models/product');
mongoose.connect("mongodb+srv://18VP:Trung@123@cluster0.xar5c.mongodb.net/18VP?retryWrites=true&w=majority", {
    useUnifiedTopology: true,
    useNewUrlParser: true
});
var mac16 = [
    new Product({
        name : 'Mac Pro 13',
        cpu: 'i5',
        color: 'gray',
        ram: '8GB',
        rom : '512GB',
	  graphic : '5300',
        price : 1800    
    }),

    new Product({
        name : 'Mac Pro 13',
        cpu: 'i5',
        color: 'gray',
        ram: '8GB',
        rom : '1T',
	  graphic : '5300',

        price : 2100    
    }),

    new Product({
        name : 'Mac Pro 13',
        cpu: 'i5',
        color: 'gray',
        ram: '8GB',
        rom : '2T',
	  graphic : '5300',

        price : 2500    
    }),

    new Product({
        name : 'Mac Pro 13',
        cpu: 'i5',
        color: 'gray',
        ram: '16GB',
        rom : '256GB',
	  graphic : '5300',

        price : 1700    
    }),

    new Product({
        name : 'Mac Pro 13',
        cpu: 'i5',
        color: 'gray',
        ram: '16GB',
        rom : '512GB',
	  graphic : '5300',

        price : 2000    
    }),

    new Product({
        name : 'Mac Pro 13',
        cpu: 'i5',
        color: 'gray',
        ram: '16GB',
        rom : '1T',
	  graphic : '5300',

        price : 2300    
    }),

    new Product({
        name : 'Mac Pro 13',
        cpu: 'i5',
        color: 'gray',
        ram: '16GB',
        rom : '2T',
	  graphic : '5300',

        price : 2700    
    }),
    new Product({
        name : 'Mac Pro 13',
        cpu: 'i7',
        color: 'gray',
        ram: '16GB',
        rom : '256GB',
	  graphic : '5300',

        price : 2100    
    }),

    new Product({
        name : 'Mac Pro 13',
        cpu: 'i7',
        color: 'gray',
        ram: '16GB',
        rom : '512GB',
	  graphic : '5300',

        price : 2400    
    }),

    new Product({
        name : 'Mac Pro 13',
        cpu: 'i7',
        color: 'gray',
        ram: '16GB',
        rom : '1T',
	  graphic : '5300',

        price : 2700    
    }),

    new Product({
        name : 'Mac Pro 13',
        cpu: 'i7',
        color: 'gray',
        ram: '16GB',
        rom : '2T',
	  graphic : '5300',

        price : 3100    
    }),
    new Product({
        name : 'Mac Pro 13',
        cpu: 'i5',
        color: 'silver',
        ram: '8GB',
        rom : '256GB',
	  graphic : '5300',

        price : 1500    
    }),

    new Product({
        name : 'Mac Pro 13',
        cpu: 'i5',
        color: 'silver',
        ram: '8GB',
        rom : '512GB',
	  graphic : '5300',

        price : 1800    
    }),

    new Product({
        name : 'Mac Pro 13',
        cpu: 'i5',
        color: 'silver',
        ram: '8GB',
        rom : '1T',
	  graphic : '5300',

        price : 2100    
    }),

    new Product({
        name : 'Mac Pro 13',
        cpu: 'i5',
        color: 'silver',
        ram: '8GB',
        rom : '2T',
	  graphic : '5300',

        price : 2500    
    }),

    new Product({
        name : 'Mac Pro 13',
        cpu: 'i5',
        color: 'silver',
        ram: '16GB',
        rom : '256GB',
	  graphic : '5300',

        price : 1700    
    }),

    new Product({
        name : 'Mac Pro 13',
        cpu: 'i5',
        color: 'silver',
        ram: '16GB',
        rom : '512GB',
	  graphic : '5300',

        price : 2000    
    }),

    new Product({
        name : 'Mac Pro 13',
        cpu: 'i5',
        color: 'silver',
        ram: '16GB',
        rom : '1T',
	  graphic : '5300',

        price : 2300    
    }),

    new Product({
        name : 'Mac Pro 13',
        cpu: 'i5',
        color: 'silver',
        ram: '16GB',
        rom : '2T',
	  graphic : '5300',

        price : 2700    
    }),
    new Product({
        name : 'Mac Pro 13',
        cpu: 'i7',
        color: 'silver',
        ram: '16GB',
        rom : '256GB',
	  graphic : '5300',

        price : 2100    
    }),

    new Product({
        name : 'Mac Pro 13',
        cpu: 'i7',
        color: 'silver',
        ram: '16GB',
        rom : '512GB',
	  graphic : '5300',

        price : 2400    
    }),

    new Product({
        name : 'Mac Pro 13',
        cpu: 'i7',
        color: 'silver',
        ram: '16GB',
        rom : '1T',
	  graphic : '5300',

        price : 2700    
    }),

    new Product({
        name : 'Mac Pro 13',
        cpu: 'i7',
        color: 'silver',
        ram: '16GB',
        rom : '2T',
	  graphic : '5300',

        price : 3100    
    })





 

];


var done=0;
for (var i = 0; i<mac16.length; i++){
    mac16[i].save(function(err, result){
        done++;
        if (done === mac16.length){
            exit();
        }
    });
}

function exit(){
    mongoose.disconnect();
}

