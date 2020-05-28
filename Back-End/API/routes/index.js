const express = require("express");
const router = express.Router();

// Admin js file---
const Admin            = require('../controllers/adminAPI/adminLogin');
const AdminSignup     = require('../controllers/adminAPI/adminSignup')
const InventryAPI      = require('../controllers/adminAPI/InventryAPI');
const ImageUpload      = require('../controllers/adminAPI/imageUpload');

// User js file---
const CusLogin = require('../controllers/userAPI/userLogin');
const CusRegister = require('../controllers/userAPI/userSignup');
const Address = require('../controllers/userAPI/Address');
const clothe = require('../controllers/userAPI/productAPI');

// Admin API--
router.route('/adminLogin').post(Admin.Admin);
router.route('/adminRegister').post(AdminSignup.AdminSignup);
router.route('/inventryAPI').post(InventryAPI.PostInventry);
router.route('/inventryAPI').get(InventryAPI.GetInventry);
router.route('/inventryAPI/:id').get(InventryAPI.GetInventry);
router.route('/inventryAPI/:id').patch(InventryAPI.UpdateInventry);
router.route('/inventryAPI/:id').delete(InventryAPI.DeleteInventry);
router.route('/imageUpload').post(ImageUpload.ImageUpload);

// User API
router.route('/userLogin').post(CusLogin.CustomerLogin);
router.route('/userRegister').post(CusRegister.CustomerRegister);
router.route('/address').get(Address.GetAddress);
router.route('/address').post(Address.AddAddress);
router.route('/address').delete(Address.DeleteAddress);
router.route('/address').put(Address.UpdateAddress);
router.route('/clotheAPI').post(clothe.clothe);

// export routes
module.exports = router;