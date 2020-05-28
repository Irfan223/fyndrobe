
const Product = require('../../models/clothe');
// --------------------Post Request-----------------------
module.exports.PostInventry = function (req, res, next) {
    console.log(req.body.size)
    let newProduct = new Product({
        // _id: mongoose.Schema.Types.ObjectId,
        sellerEmail: req.body.sellerEmail,
        productCategory: req.body.productCategory, // clothes or other products
        gender: req.body.gender,
        // productName: req.body.productName, // product name
        brandName: req.body.productBrandName,  // product brand name
        size: req.body.productSizeAndQuantity,
        productTitle: req.body.productTitle, // ex- kurta, leggins or t shirt, etc
        color:
            { color: req.body.productColor, image: req.body.productImages },
        costPrice: req.body.costPrice,
        sellingPrice: req.body.sellingPrice,
        description: req.body.productDescription,
        details: {
            occasion: req.body.ProductOccasion,
            kurtaFabric: req.body.productKurtaFabric,
            salwarFabric: req.body.productSalwarFabric,
            dupattaFabric: req.body.productDupattaFabric,
            work: req.body.productWork,
            neck: req.body.productNeck,
            printsAndPattern: req.body.productPrintsAndPattern,
            sleeve: req.body.productSleeve,
            washCare: req.body.productWashCare
        },
        weight: req.body.productWeight,
        shippedIn: req.body.productShippedIn,
    });
    newProduct.save((error, data) => {
        if (error) {
            res.json({ message: error });
        } else {
            res.json({
                code: 200,
                message: "your product is added Successfully",
                data: data
            });
        }
    });
}
// --------------------Get Request-----------------------
module.exports.GetInventry = function (req, res, next) {
    var id = req.params.id;
    if (id != null || undefined) {
        Product.findById(id, function (err, data) {
            res.json(data);
        });
    } else {
        Product.find({}, function (err, data) {
            res.json(data);
        })
    }
}
// --------------------Update Request-----------------------
module.exports.UpdateInventry = function (req, res, next) {
    var id = req.params.id;
    const doc = {
        description : req.body.description
      }
    if (id != null || undefined) {
        Product.findByIdAndUpdate(id, doc, function (err, data) {
            // res.json(data);
        });
        return res
        .status(200)
        .json({ message: "Updated Succesfully"});
    }
    res.status(404).json({ message: "Invalid Order Id" });
}
// --------------------Delete Request-----------------------
module.exports.DeleteInventry = function (req, res, next) {
    var id = req.params.id;
    if (id != null || undefined) {
        Product.findByIdAndDelete(id, function (err, data) {
            res.json(data);
        });
        return res.status(200).json({
            message: "Deleted Successfully"
          });
    }
    res.status(404).json({ message: "Invalid Order Id" });
}