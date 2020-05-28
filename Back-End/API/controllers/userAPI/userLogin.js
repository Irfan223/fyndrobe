
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Customer = require('../../models/customer');
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
            res.json({ 
                code: 3,
                message: "You're not registered with us, first sign up" 
            });
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
                    res.cookie('cart', user.cart, { maxAge: maxAge, httpOnly: false });
                    res.cookie('address', user.address, { maxAge: maxAge, httpOnly: false });
                    res.cookie('token', token, { maxAge: maxAge, httpOnly: false });
                    res.json({
                        code: 1,
                        message: 'Successfully Logged In',
                    })
                } else {
                    res.json({
                        code: 2,
                        message: 'Incorrect Password',
                    });
                }
            });
        }
    });
}