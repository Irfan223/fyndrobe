// var config = require('../../Config/databaseConfig.js');
// var connection = config.connection;
const bcrypt = require('bcrypt');
const mongoose = require("mongoose");
const saltRounds = 10;
const Customer = require('../../models/customer');
module.exports.CustomerRegister = function (req, res) {
    bcrypt.hash(req.body.password, saltRounds, function (err, hash) {
        if (err) {
            throw err;
        } else {
            let newCustomer = new Customer({
                _id: new mongoose.Types.ObjectId(),
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                mobile: req.body.mobile,
                password: hash,
                address: {
                    locality: req.body.locality,
                    areaOrstreet: req.body.areaOrstreet,
                    cityOrDistOrTown: req.body.cityOrDistOrTown,
                    state: req.body.state,
                    landmark: req.body.landmark,
                    pincode: req.body.pincode
                }
            });
            Customer.countDocuments({ email: req.body.email }, function (err1, emailCount) {
                if (emailCount > 0) {
                    res.json({ 
                        code: 4,
                        msg: "Your email is already registered with us"
                     });
                } else {
                    Customer.countDocuments({ mobile: req.body.mobile }, function (err2, mobileCount) {
                        if (mobileCount > 0) {
                            res.json({
                                code: 3,
                                 msg: "Your mobile is already registered with us" 
                                });
                        }
                        newCustomer.save((err, data) => {
                            if (err) {
                                res.json({
                                    code: 2,
                                    msg: "We're not able to register, please try after some time"
                                });
                            } else {
                                res.json({
                                    code: 1,
                                    msg: "You're registered successfully"
                                });
                            }
                        });
                    });
                }
            })
        }
    });
}