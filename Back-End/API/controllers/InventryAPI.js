
const Product = require('../models/product');
module.exports.InventryAPI = function (req, res, next) {
    let newProduct = new Product({
        // _id: mongoose.Schema.Types.ObjectId,
        gender: req.body.gender,
        category: req.body.category, // ex- kurta, leggins or t shirt, etc
        productName: req.body.productName, // product name
        brandName: req.body.brandName,  // product brand name
        color:
            { color: req.body.color, image: req.body.image },
        size: {
            quantity: req.body.quantity,
            size: req.body.size // product size ex: small, medium
        },
        cPrice: req.body.cPrice,
        sPrice: req.body.sPrice,
        description: {
            occasion: req.body.occasion,
            kurtaLength: req.body.kurtaLength,
            salwarLength: req.body.salwarLength,
            dupattaLength: req.body.dupattaLength,
            kurtaFabric: req.body.kurtaFabric,
            salwarFabric: req.body.salwarFabric,
            dupattaFabric: req.body.dupattaFabric,
            work: req.body.work,
            neck: req.body.neck,
            printsAndPattern: req.body.printsAndPattern,
            sleeve: req.body.sleeve,
            washCare: req.body.washCare
        },
        weight: req.body.weight,
        shippedIn: req.body.shippedIn,
        disclaimer: "Product color may slightly vary due to photographic lighting sources or your monitor settings",
    });
    newProduct.save((error, data) => {
        if (error) {
            res.json({ message: error });
        } else {
            res.json({code: 200, message: "your product is added Successfully" });
        }
    });
}