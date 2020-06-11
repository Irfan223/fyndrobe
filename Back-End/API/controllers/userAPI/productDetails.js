const Product = require('../../models/product');
module.exports.postProductDetails = function (req, res, next) {
    const { id } = req.body;
    console.log(req.body)
    Product.find({_id: id}, function (err, data) {
        if (err) {
            res.send(err);
        }
        res.json(data);
        // console.log(data);
    });
}