var Product = require('../../models/watch');

var mongoose = require('mongoose');
// const { exists } = require('../models/product');
mongoose.connect("mongodb+srv://18VP:Trung@123@cluster0.xar5c.mongodb.net/18VP?retryWrites=true&w=majority", {
    useUnifiedTopology: true,
    useNewUrlParser: true
});
var watch = [


    new Product({ name : "Gold Aluminum Case with Sport Band (Orange)", case_size : "40mm", connectivity : "GPS", price : "399", "type: " : "series 5" }),












        
    new Product({name : "Gold Aluminum Case with Sport Band (Orange)", case_size : "40mm", connectivity : "GPS + Cellular", price : "499", "type: " : "series 5"}),
    new Product({name : "Gold Aluminum Case with Sport Band (Orange)", case_size : "44mm", connectivity : "GPS", price : "429", "type: " : "series 5" }),
    new Product({name : "Gold Aluminum Case with Sport Band (Orange)", case_size : "44mm", connectivity : "GPS + Cellular", price : "529", "type: " : "series 5"}),
    new Product({name : "Space Gray Aluminum Case with Sport Loop (Vitamin C)", case_size : "40mm", connectivity : "GPS", price : "399", "type: " : "series 5" }),
    new Product({name : "Space Gray Aluminum Case with Sport Loop (Vitamin C)", case_size : "40mm", connectivity : "GPS + Cellular", price : "499", "type: " : "series 5" }),
    new Product({name : "Space Gray Aluminum Case with Sport Loop (Vitamin C)", case_size : "44mm", connectivity : "GPS", price : "429", "type: " : "series 5" }),
    new Product({name : "Space Gray Aluminum Case with Sport Loop (Vitamin C)", case_size : "44mm",  connectivity : "GPS + Cellular", price : "529", "type: " : "series 5" }),
    new Product({name : "Stainless Steel Case with Leather Loop (Meyer Lemon)", case_size : "40mm",  connectivity : "GPS", price : "399", "type: " : "series 5" }),
    new Product({ name : "Stainless Steel Case with Leather Loop (Meyer Lemon)", case_size : "40mm",  connectivity : "GPS + Cellular", price : "499", "type: " : "series 5" }),
    new Product({ name : "Stainless Steel Case with Leather Loop (Meyer Lemon)", case_size : "44mm",  connectivity : "GPS", price : "429", "type: " : "series 5" }),
    new Product({ name : "Stainless Steel Case with Leather Loop (Meyer Lemon)", case_size : "44mm", connectivity : "GPS + Cellular", price : "529", "type: " : "series 5" }),




    new Product({name: "Gold Aluminum Case with Sport Band (Rose)", case_size: "40mm", connectivity: "GPS", price: "399", type: "series 5"}),


    new Product({name: "Gold Aluminum Case with Sport Band (Rose)", case_size: "40mm", connectivity: "GPS + Cellular", price: "499", type: "series 5"}),
    new Product({name: "Gold Aluminum Case with Sport Band (Rose)", case_size: "44mm", connectivity: "GPS", price: "429", type: "series 5"}),
    new Product({name: "Gold Aluminum Case with Sport Band (Rose)", case_size: "44mm", connectivity: "GPS + Cellular", price: "529", type: "series 5"}),
    new Product({name: "Silver Aluminum Case with Sport Loop (Blue Yellow)", case_size: "40mm", connectivity: "GPS", price: "399", type: "series 5"}),
    new Product({name: "Silver Aluminum Case with Sport Loop (Blue Yellow)", case_size: "40mm", connectivity: "GPS + Cellular", price: "499", type: "series 5"}),
    new Product({name: "Silver Aluminum Case with Sport Loop (Blue Yellow)", case_size: "44mm", connectivity: "GPS", price: "429", type: "series 5"}),
    new Product({name: "Silver Aluminum Case with Sport Loop (Blue Yellow)", case_size: "44mm", connectivity: "GPS + Cellular", price: "529", type: "series 5"}), 
    new Product({name: "Silver Aluminum Case with Sport Loop (Pink Red)", case_size: "40mm", connectivity: "GPS", price: "399", type: "series 5"}),
    new Product({name: "Silver Aluminum Case with Sport Loop (Pink Red)", case_size: "40mm", connectivity: "GPS + Cellular", price: "499", type: "series 5"}),
    new Product({name: "Silver Aluminum Case with Sport Loop (Pink Red)", case_size: "44mm", connectivity: "GPS", price: "429", type: "series 5"}),
    new Product({name: "Silver Aluminum Case with Sport Loop (Pink Red)", case_size: "44mm", connectivity: "GPS + Cellular", price: "529", type: "series 3"}),
    new Product({name: "Space Gray Aluminum Case with Black Sport Band (Black with red button)", case_size: "38mm", connectivity: "GPS", price: "199", type: "series 3"}),
    new Product({name: "Space Gray Aluminum Case with Black Sport Band (Black with red button)", case_size: "38mm", connectivity: "GPS + Cellular", price: "299", type: "series 3"}),
    new Product({name: "Space Gray Aluminum Case with Black Sport Band (Black with red button)", case_size: "42mm", connectivity: "GPS", price: "229", type: "series 3"}),
    new Product({name: "Space Gray Aluminum Case with Black Sport Band (Black with red button)", case_size: "42mm", connectivity: "GPS + Cellular", price: "329", type: "series 3"}),
    new Product({name: "Space Gray Aluminum Case with Anthracite/Black Nike Sport Band (Black)", case_size: "38mm", connectivity: "GPS", price: "199", type: "series 3"}),
    new Product({name: "Space Gray Aluminum Case with Anthracite/Black Nike Sport Band (Black)", case_size: "38mm", connectivity: "GPS + Cellular", price: "299", type: "series 3"}),
    new Product({name: "Space Gray Aluminum Case with Anthracite/Black Nike Sport Band (Black)", case_size: "42mm", connectivity: "GPS", price: "229", type: "series 3"}),
    new Product({name: "Space Gray Aluminum Case with Anthracite/Black Nike Sport Band (Black)", case_size: "42mm", connectivity: "GPS + Cellular", price: "329", type: "series 3"}),
    new Product({name: "Space Gray Aluminum Case with Anthracite/Black Nike Sport Band (Black with red button)", case_size: "38mm", connectivity: "GPS", price: "199", type: "series 3"}),
    new Product({name: "Space Gray Aluminum Case with Anthracite/Black Nike Sport Band (Black with red button)", case_size: "38mm", connectivity: "GPS + Cellular", price: "299", type: "series 3"}),
    new Product({name: "Space Gray Aluminum Case with Anthracite/Black Nike Sport Band (Black with red button)", case_size: "42mm", connectivity: "GPS", price: "229", type: "series 3"}),
    new Product({name: "Space Gray Aluminum Case with Anthracite/Black Nike Sport Band (Black with red button)", case_size: "42mm", connectivity: "GPS + Cellular", price: "329", type: "series 3"}),
    new Product({name: "Silver Aluminum Case with White Sport Band", case_size: "38mm", connectivity: "GPS", price: "199", type: "series 3"}),
    new Product({name: "Silver Aluminum Case with White Sport Band", case_size: "38mm", connectivity: "GPS + Cellular", price: "299", type: "series 3"}),
    new Product({name: "Silver Aluminum Case with White Sport Band", case_size: "42mm", connectivity: "GPS", price: "229", type: "series 3"}),
    new Product({name: "Silver Aluminum Case with White Sport Band", case_size: "42mm", connectivity: "GPS + Cellular", price: "329", type: "series 3"}),
    new Product({name: "Space Gray Aluminum Case with Black Sport Band", case_size: "38mm", connectivity: "GPS", price: "199", type: "series 3"}),
    new Product({name: "Space Gray Aluminum Case with Black Sport Band", case_size: "38mm", connectivity: "GPS + Cellular", price: "299", type: "series 3"}),
    new Product({name: "Space Gray Aluminum Case with Black Sport Band", case_size: "42mm", connectivity: "GPS", price: "229", type: "series 3"}),
    new Product({name: "Space Gray Aluminum Case with Black Sport Band", case_size: "42mm", connectivity: "GPS + Cellular", price: "329", type: "series 3"}), 
    new Product({name: "Silver Aluminum Case with White Sport Band (with red button)", case_size: "38mm", connectivity: "GPS", price: "199", type: "series 3"}),
    new Product({name: "Silver Aluminum Case with White Sport Band (with red button)", case_size: "38mm", connectivity: "GPS + Cellular", price: "299", type: "series 3"}),
    new Product({name: "Silver Aluminum Case with White Sport Band (with red button)", case_size: "42mm", connectivity: "GPS", price: "229", type: "series 3"}),
    new Product({name: "Silver Aluminum Case with White Sport Band (with red button)", case_size: "42mm", connectivity: "GPS + Cellular", price: "329", type: "series 3"}),
    new Product({name: "Silver Aluminum Case with White Sport Band (with red button)", case_size: "40mm", connectivity: "GPS", price: "399", type: "nike"}),
    new Product({name: "Silver Aluminum Case with White Sport Band (with red button)", case_size: "40mm", connectivity: "GPS + Cellular", price: "499", type: "nike"}),
    new Product({name: "Silver Aluminum Case with White Sport Band (with red button)", case_size: "44mm", connectivity: "GPS", price: "429", type: "nike"}),
    new Product({name: "Silver Aluminum Case with White Sport Band (with red button)", case_size: "44mm", connectivity: "GPS + Cellular", price: "529", type: "nike"}),
    new Product({name: "Space Gray Aluminum Case with Nike Sport Band (Midnight Turquoise/Aurora Green)", case_size: "40mm", connectivity: "GPS", price: "399", type: "nike"}),
    new Product({name: "Space Gray Aluminum Case with Nike Sport Band (Midnight Turquoise/Aurora Green)", case_size: "40mm", connectivity: "GPS + Cellular", price: "499", type: "nike"}),
    new Product({name: "Space Gray Aluminum Case with Nike Sport Band (Midnight Turquoise/Aurora Green)", case_size: "44mm", connectivity: "GPS", price: "429", type: "nike"}),
    new Product({name: "Space Gray Aluminum Case with Nike Sport Band (Midnight Turquoise/Aurora Green)", case_size: "44mm", connectivity: "GPS + Cellular", price: "529", type: "nike"}),
    new Product({name: "Space Gray Aluminum Case with Nike Sport Band (Black/Lime Blast)", case_size: "40mm", connectivity: "GPS", price: "399", type: "nike"}),
    new Product({name: "Space Gray Aluminum Case with Nike Sport Band (Black/Lime Blast)", case_size: "40mm", connectivity: "GPS + Cellular", price: "499", type: "nike"}),
    new Product({name: "Space Gray Aluminum Case with Nike Sport Band (Black/Lime Blast)", case_size: "44mm", connectivity: "GPS", price: "429", type: "nike"}),
    new Product({name: "Space Gray Aluminum Case with Nike Sport Band (Black/Lime Blast)", case_size: "44mm", connectivity: "GPS + Cellular", price: "529", type: "nike"}),
    new Product({name: "Silver Aluminum Case with Nike Sport Band", case_size: "40mm", connectivity: "GPS", price: "399", type: "nike"}),
    new Product({name: "Silver Aluminum Case with Nike Sport Band", case_size: "40mm", connectivity: "GPS + Cellular", price: "499", type: "nike"}),
    new Product({name: "Silver Aluminum Case with Nike Sport Band", case_size: "44mm", connectivity: "GPS", price: "429", type: "nike"}),
    new Product({name: "Silver Aluminum Case with Nike Sport Band", case_size: "44mm", connectivity: "GPS + Cellular", price: "529", type: "nike"}),
    new Product({name: "Silver Aluminum Case with Nike Sport Loop (caro)", case_size: "40mm", connectivity: "GPS", price: "399", type: "nike"}),
    new Product({name: "Silver Aluminum Case with Nike Sport Loop (caro)", case_size: "40mm", connectivity: "GPS + Cellular", price: "499", type: "nike"}),
    new Product({name: "Silver Aluminum Case with Nike Sport Loop (caro)", case_size: "44mm", connectivity: "GPS", price: "429", type: "nike"}),
    new Product({name: "Silver Aluminum Case with Nike Sport Loop (caro)", case_size: "44mm", connectivity: "GPS + Cellular", price: "529", type: "nike"}),
    new Product({name: "Silver Aluminum Case with Nike Sport Loop (Black)", case_size: "40mm", connectivity: "GPS", price: "399", type: "nike"}),
    new Product({name: "Silver Aluminum Case with Nike Sport Loop (Black)", case_size: "40mm", connectivity: "GPS + Cellular", price: "499", type: "nike"}),
    new Product({name: "Silver Aluminum Case with Nike Sport Loop (Black)", case_size: "44mm", connectivity: "GPS", price: "429", type: "nike"}),
    new Product({name: "Silver Aluminum Case with Nike Sport Loop (Black)", case_size: "44mm", connectivity: "GPS + Cellular", price: "529", type: "nike"}),
    new Product({name: "Silver Aluminum Case with Nike Sport Band (Black)", case_size: "40mm", connectivity: "GPS", price: "399", type: "nike"}),
    new Product({name: "Silver Aluminum Case with Nike Sport Band (Black)", case_size: "40mm", connectivity: "GPS + Cellular", price: "499", type: "nike"}),
    new Product({name: "Silver Aluminum Case with Nike Sport Band (Black)", case_size: "44mm", connectivity: "GPS", price: "429", type: "nike"}),
    new Product({name: "Silver Aluminum Case with Nike Sport Band (Black)", case_size: "44mm", connectivity: "GPS + Cellular", price: "529", type: "nike"}),
    new Product({name: "Stainless Steel Case with Single Tour", case_size: "44mm", connectivity: "GPS + Cellular", price: "1299", type: "hermes"}),
    new Product({name: "Space Black Stainless Steel Case with Single Tour", case_size: "40mm", connectivity: "GPS + Cellular", price: "1249", type: "hermes"}),
    new Product({name: "Space Black Stainless Steel Case with Single Tour", case_size: "44mm", connectivity: "GPS + Cellular", price: "1299", type: "hermes"}),
    new Product({name: "Space Black Stainless Steel Case with Double Tour", case_size: "40mm", connectivity: "GPS", price: "1399", type: "hermes"}),
    new Product({name: "Stainless Steel Case with Single Tour (Brown)", case_size: "40mm", connectivity: "GPS + Cellular", price: "1249", type: "hermes"}),
    new Product({name: "Stainless Steel Case with Single Tour (Brown)", case_size: "44mm", connectivity: "GPS + Cellular", price: "1299", type: "hermes"}),
    new Product({name: "Stainless Steel Case with Double Tour (Brown)", case_size: "40mm", connectivity: "GPS + Cellular", price: "1399", type: "hermes"}),
    new Product({name: "Stainless Steel Case with Single Tour Deployment Buckle (Brown)", case_size: "44mm", connectivity: "GPS + Cellular", price: "1499", type: "hermes"})




 
];


var done=0;
for (var i = 0; i<watch.length; i++){
    watch[i].save(function(err, result){
        done++;
        if (done === watch.length){
            exit();
        }
    });
}

function exit(){
    mongoose.disconnect();
}

