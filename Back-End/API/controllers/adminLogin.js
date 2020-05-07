
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Admin = require('../models/admin');
module.exports.Admin = function (req, res, next) {
    var userId;
    var type;
    if (req.body.email === undefined) {
        userId = req.body.mobile;
        type = "mobile";
    } else if (req.body.mobile === undefined) {
        userId = req.body.email;
        type = "email";
    }
    Admin.findOne({ [type]: userId }, function (err1, user) {
        if (err1) {
            res.json({ message: err1, code: 4 });
        }
        if (!user) {
            res.json({
                message: "You're not registered with us, first sign up",
                code: 3
            });
        } else {
            bcrypt.compare(req.body.password, user.password, function (err, result) {
                if (err) {
                    res.json({ message: err, code: 5 })
                }
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
                    // res.cookie('firstName', user.firstName).send('cookies set');
                    // res.cookie('lastName', user.lastName);
                    // res.cookie('email', user.email);
                    // res.cookie('mobile', user.mobile);
                    // res.cookie('token', token);
                    res.json({
                        message: 'Successfully Logged In',
                        code: 1,
                    });
                } else {
                    res.json({
                        message: 'Incorrect Password',
                        code: 2
                    })
                }
            });
        }
    });
}