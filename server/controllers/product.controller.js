const Product = require("../models/product.model");

// Create Product
module.exports.createProduct = (req, res) => {
    const newProduct = req.body;
    Product.create(newProduct)
    .then(product => res.json({results: product}))
    .catch(err => res.status(400).json(err))
}

// Get All Products
module.exports.allProducts = (req, res) => {
    Product.find()
    .then(allProducts => res.json({results: allProducts}))
    .catch(err => res.json(err))
}

// Get One Product
module.exports.oneProduct = (req, res) => {
    const idParam = req.params.id;
    Product.findOne({_id: idParam})
    .then(oneProduct => res.json({results: oneProduct}))
    .catch(err => res.json(err))
}

// Update Product
module.exports.updateProduct = (req, res) => {
    const idParam = req.params.id;
    const updatedProduct = req.body
    Product.findByIdAndUpdate({_id: idParam}, updatedProduct, {new: true})
    .then(product => res.json({results: product}))
    .catch(err => res.json(err))
}

// Delete Product
module.exports.deleteProduct = (req, res) => {
    const idParam = req.params.id;
    Product.deleteOne({_id: idParam})
    .then(deletedProduct => res.json({results: deletedProduct}))
    .catch(err => res.json(err))
}