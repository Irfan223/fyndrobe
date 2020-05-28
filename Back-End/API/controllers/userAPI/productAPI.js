
const Product = require('../../models/clothe');
module.exports.clothe = function (req, res, next) {
    Product.find({ gender: req.body.gender, category: req.body.category }, function (err, data) {
        if (err) {
            res.send(err);
        }
        // console.log(data);
        res.json(data);
    });
}