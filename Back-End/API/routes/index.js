var express = require("express");
var router = express.Router();

// Admin js file---
var Admin            = require('../controllers/adminLogin');
var AdminSignup     = require('../controllers/adminSignup')
var InventryAPI      = require('../controllers/inventryAPI');
var ImageUpload      = require('../controllers/imageUpload');

// User js file---
var CusLogin = require('../controllers/userLogin');
var CusRegister = require('../controllers/userSignup');
var Address = require('../controllers/address');
var clothe = require('../controllers/clotheAPI');
// var mobile_backcover = require('../controllers/mobile-backcover');

// Admin API--
router.route('/adminLogin').post(Admin.Admin);
router.route('/adminRegister').post(AdminSignup.AdminSignup);
router.route('/inventryAPI').post(InventryAPI.InventryAPI);
router.route('/imageUpload').post(ImageUpload.ImageUpload);

// User API
router.route('/userLogin').post(CusLogin.CustomerLogin);
router.route('/userRegister').post(CusRegister.CustomerRegister);
router.route('/address').get(Address.GetAddress);
router.route('/address').post(Address.AddAddress);
router.route('/address').delete(Address.DeleteAddress);
router.route('/address').put(Address.UpdateAddress);
router.route('/clotheAPI').post(clothe.clothe);
// router.route('/mobileBackcover').get(mobile_backcover.mobile_backcover);

// export routes
module.exports = router;