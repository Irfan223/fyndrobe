
const Product = require('../../models/product');
module.exports.Product = function (req, res, next) {
    var {gender, productTitle} = req.body;
    var params = {};
    if (productTitle == null || undefined) {
       params = {gender}
    } else {
        // console.log(productTitle)
        productTitle = productTitle.split('-').join(' ');
        params = {gender, "productTitle": { "$regex": productTitle, "$options": "i" } }
    }
    Product.find(params, function (err, data) {
        if (err) {
            res.send(err);
        }
        // console.log(data);
        res.json(data);
    });
}