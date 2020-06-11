const express = require("express");
const router = express.Router();

// Admin js file---
const Admin            = require('../controllers/adminAPI/adminLogin');
const AdminSignup     = require('../controllers/adminAPI/adminSignup')
const InventryAPI      = require('../controllers/adminAPI/inventory');
const ImageUpload      = require('../controllers/adminAPI/imageUpload');
const OrderAPI         = require('../controllers/adminAPI/orders');
const HomeCarousel     = require('../controllers/adminAPI/homeCarousel');
// User js file---
const CusLogin = require('../controllers/userAPI/userLogin');
const CusRegister = require('../controllers/userAPI/userSignup');
const Address = require('../controllers/userAPI/Address');
const Product = require('../controllers/userAPI/productAPI');
const Cart = require('../controllers/userAPI/cart');
const ProductDetails = require('../controllers/userAPI/productDetails');
// Admin API--
router.route('/adminLogin').post(Admin.Admin);
router.route('/adminRegister').post(AdminSignup.AdminSignup);
router.route('/inventory').post(InventryAPI.PostInventory);
router.route('/inventory').get(InventryAPI.GetInventory);
router.route('/inventory/:id').get(InventryAPI.GetInventory);
router.route('/inventory/:id').patch(InventryAPI.UpdateInventory);
router.route('/inventory/:id').delete(InventryAPI.DeleteInventory);
router.route('/imageUpload').post(ImageUpload.ImageUpload);
router.route('/order').get(OrderAPI.GetOrder);
router.route('/homeCarousel').get(HomeCarousel.GetHomeCarousel);
router.route('/homeCarousel').post(HomeCarousel.PostHomeCarousel);
// User API
router.route('/userLogin').post(CusLogin.CustomerLogin);
router.route('/userRegister').post(CusRegister.CustomerRegister);
router.route('/address/:userId').get(Address.GetAddress);
router.route('/address').post(Address.AddAddress);
router.route('/address').delete(Address.DeleteAddress);
router.route('/address').put(Address.UpdateAddress);
router.route('/product').post(Product.Product);
router.route('/cart/:userId').get(Cart.GetCart);
router.route('/cart').post(Cart.PostCart);
router.route('/cart/:userId/:productId/:size').patch(Cart.UpdateCart);
router.route('/cart/:userId').delete(Cart.DeleteCart);
router.route('/productDetails').post(ProductDetails.postProductDetails)
// export routes
module.exports = router;