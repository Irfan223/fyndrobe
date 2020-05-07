const jwt = require('jsonwebtoken');
module.exports = (req, res, next) => {
    try {
        const token = req.header.authorization.split(" ")[1];
        const decode = jwt.verify(token, "secret");
        req.userData = decode;
        next();
    } catch (error) {
        res.json({ message: "some error in token" });
    }
}