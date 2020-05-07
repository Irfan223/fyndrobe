
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Customer = require('../models/customer');
module.exports.CustomerLogin = function (req, res) {
    var userId;
    var type;
    if (req.body.email === undefined) {
        userId = req.body.mobile;
        type = "mobile";
    } else if (req.body.mobile === undefined) {
        userId = req.body.email;
        type = "email";
    }
    Customer.findOne({ [type]: userId }, function (err1, user) {
        if (!user) {
            res.json({ msg: "You're not registered with us, first sign up" });
        } else {
            bcrypt.compare(req.body.password, user.password, function (err, result) {
                if (result == true) {
                    // generating token
                    const token = jwt.sign({
                        email: user.email,
                        userId: user._id
                    }, "secret",
                        {
                            expiresIn: "1h"
                        }
                    );
                    // end token
                    const maxAge = 365 * 24 * 60 * 60 * 1000;
                    res.cookie('userId', user._id, { maxAge: maxAge, httpOnly: false });
                    res.cookie('firstName', user.firstName, { maxAge: maxAge, httpOnly: false });
                    res.cookie('lastName', user.lastName, { maxAge: maxAge, httpOnly: false });
                    res.cookie('email', user.email, { maxAge: maxAge, httpOnly: false });
                    res.cookie('mobile', user.mobile, { maxAge: maxAge, httpOnly: false });
                    res.cookie('address', user.address, { maxAge: maxAge, httpOnly: false });
                    res.json({
                        message: 'Successfully Logged In',
                        token: token
                    })
                } else {
                    console.log('Incorrect Password');
                }
            });
        }
    });
    // connection.query(sql, email, function (error, results, fields) {
    //     if (error) {
    //         // console.log("error ocurred",error);
    //         res.send({
    //             "code": 400,
    //             "failed": "error ocurred"
    //         })
    //     } else {
    //         if (results.length > 0) {
    //             if (results[0].customer_Pass == password) {
    //                 // console.log(results[0])
    //                 res.send({
    //                     "code": 200,
    //                     "success": "login sucessfull",
    //                     "customer_id": results[0].customer_id,
    //                     "customer_fname": results[0].customer_fname,
    //                     "customer_lname": results[0].customer_lname,
    //                     "customer_email": results[0].customer_email,
    //                     "customer_mobile": results[0].customer_mobile,
    //                     "customer_postcode1": results[0].customer_postcode1,
    //                     "customer_city1": results[0].customer_city1,
    //                     "customer_address1": results[0].customer_address1,
    //                     "customer_postcode2": results[0].customer_postcode2,
    //                     "customer_city2": results[0].customer_city2,
    //                     "customer_address2": results[0].customer_address2
    //                 });
    //             }
    //             else {
    //                 res.send({
    //                     "code": 204,
    //                     "success": "Email and password does not match"
    //                 });
    //             }
    //         }
    //         else {
    //             res.send({
    //                 "code": 204,
    //                 "success": "Email does not exits"
    //             });
    //         }
    //     }
    // });

}