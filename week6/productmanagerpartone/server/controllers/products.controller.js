const Product = require('../models/products.model');
//get all products
module.exports.findAllProducts = (req, res) => {
    Product.find()
    .then((allDaProducts) => {
        res.json({products: allDaProducts})
    })
    .catch((err) => {
        res.json({message: 'Something went wrong', error: err})
    });
}
//get one product
module.exports.findOneProduct = (req, res) => {
    Product.findOne({_id: req.params.id})
    .then(oneSingleProduct => {
        res.json({product: oneSingleProduct})
    })
    .catch((err) => {
        res.json({message: 'Something went wrong', error: err})
    });
}
//create one product 
module.exports.createNewProduct = (req, res) => {
    Product.create(req.body)
    .then(newlyCreatedProduct => {
        res.json({product: newlyCreatedProduct})
    })
    .catch((err)=>{
        res.json({message: "something went wrong", error: err})
    })
}