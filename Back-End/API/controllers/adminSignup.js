// var config = require('../../Config/databaseConfig.js');
// var connection = config.connection;
const bcrypt = require('bcrypt');
const mongoose = require("mongoose");
const saltRounds = 10;
const Admin = require('../models/admin');
module.exports.AdminSignup  = function (req, res) {
    bcrypt.hash(req.body.password, saltRounds, function (err, hash) {
        if (err) {
            throw err;
        } else {
            let newAdmin = new Admin({
                _id: new mongoose.Types.ObjectId(),
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                mobile: req.body.mobile,
                password: hash,
            });
            Admin.countDocuments({ email: req.body.email }, function (err1, emailCount) {
                if (emailCount > 0) {
                    res.json({ msg: "Your email is already registered with us" });
                } else {
                    Admin.countDocuments({ mobile: req.body.mobile }, function (err2, mobileCount) {
                        if (mobileCount > 0) {
                            res.json({ msg: "Your mobile is already registered with us" });
                        }
                        newAdmin.save((err, data) => {
                            if (err) {
                                res.json({
                                    msg: "We're not able to register, please try after some time"
                                });
                            } else {
                                res.json({
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