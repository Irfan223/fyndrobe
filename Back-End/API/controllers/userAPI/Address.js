

const Customer = require('../../models/customer');
// Get Customer Details
module.exports.GetAddress = function (req, res, next) {
    Customer.findOne({ email: 'cseirfan17@gmail.com' }, 'address', function (err, user) {
        if (err) {
            res.json({ error: err })
        }
        res.json({ address: user.address });
    })

}
// Add Customer Address
module.exports.AddAddress = function (req, res, next) {

}
// Delete Customer Address
module.exports.DeleteAddress = function (req, res, next) {
}
// Update Customer Details
module.exports.UpdateAddress = function (req, res, next) {
    Customer.findOneAndUpdate({ email: req.body.email },
        {
            "$set": {
                'address.locality': req.body.locality,
                'address.areaOrstreet': req.body.street,
                'address.cityOrDistOrTown': req.body.city,
                'address.state': req.body.state,
                'address.landmark': req.body.landmark,
                'address.pincode': req.body.pincode
            }
        },
        function (err, doc) {
            if (err) {
                console.log("update document error");
            } else {
                console.log("update document success");
                console.log(doc);
            }
        });
}