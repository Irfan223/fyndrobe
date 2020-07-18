// Get Cart
const Cart = require('../../models/cart');
const Products = require('../../models/product');
module.exports.GetCart = async function (req, res) {
  const userId = req.params.userId;
  try {
    let cart = await Cart.findOne({ userId });
    return res.status(201).send(cart)
  } catch (err) {
    // console.log(err);
    res.status(500).send("Something went wrong");
  }
}
// Post Cart
module.exports.PostCart = async function (req, res, next) {
  // console.log(req.body);
  const { userId, productId, category, productTitle, coupon_discount, gst, extra_price, image, quantity, size, totalSize, color, spl_price, stock, sub_total, price, component } = req.body;
  try {
    let cart = await Cart.findOne({ userId });
    let Product = await Products.findOne({ _id: productId }); // fetching from all product 
    if (cart) {
      // checking cart exist
      let cartItemIndex = cart.products.findIndex(p => p.productId == productId);
      if (cartItemIndex > -1 && component != 'addToCart') {
        let itemIndex = cart.products.findIndex(p => p.productId == productId && p.size == size || p.quantity == quantity);
        // GST for clothes
        //
        // console.log('cart component')
        if (itemIndex > -1) {
          let productItem = cart.products[itemIndex];
          productItem.quantity = quantity;
          productItem.size = size;
          productItem.price = Product.costPrice;
          productItem.spl_price = Product.sellingPrice;
          productItem.stock = Product.size.filter(stock => stock.value == size)[0].quantity;
          productItem.sub_total = (parseInt(Product.sellingPrice) * parseInt(quantity) + parseInt(productItem.coupon_discount) + productItem.spl_price * productItem.quantity * productItem.gst * 0.01);
          cart.products[itemIndex] = productItem;
          cart = await cart.save();
          return res.status(200).send(cart);
        } else {
        }
      } else {
        //product does not exists in cart, add new item
        // console.log('add to cart component')
        let newItemIndex = cart.products.findIndex(p => p.productId == productId && p.size == size);
        if (newItemIndex > -1) {
          return res.status(200).send('product is already in your cart');
        } else {
          cart.products.push({ productId, category, productTitle, coupon_discount, extra_price, gst, image, quantity, size, totalSize, color, spl_price, stock, sub_total, price });
        cart = await cart.save();
        return res.status(201).send(cart);
        }
      }
      //cart exists for user
      // let itemIndex = cart.products.findIndex(p => p.productId == productId && p.size == size || p.quantity == quantity);

    } else {
      //no cart for user, create new cart
      const newCart = await Cart.create({
        userId,
        products: [{ productId, category, productTitle, coupon_discount, extra_price, gst, image, quantity, size, totalSize, color, spl_price, stock, sub_total, price }]
      });

      return res.status(201).send(newCart);
    }
  } catch (err) {
    // console.log(err);
    res.status(500).send("Something went wrong");
  }
}
// Update Cart
module.exports.UpdateCart = async function (req, res, next) {
//  console.log(req.body)
   const {userId, localcart} = req.body;
   try {
    let cart = await Cart.findOne({ userId });
    if (cart) {
      //cart exists for user
      if (cart.products.length === 0) { // cart exist but item not in cart
        cart.products = localcart;
      } else { // items in cart already
      let cartcopy = localcart.filter(o1 => !cart.products.some(o2 => o1.productId === o2.productId && o1.size === o2.size));
      cart.products = cart.products.concat(cartcopy);
      }
      cart = await cart.save();
      return res.status(201).send(cart);
    } else { // if cart is not availabe for user, create cart and push value from localstorage cart
      console.log('not available')
      const newCart = await Cart.create({
        userId,
        products: localcart
      });
      return res.status(201).send(newCart);
    }
  } catch (err) {
    // console.log(err);
    res.status(500).send("Something went wrong");
  }
  
}
// Delete Cart
module.exports.DeleteCart = async function (req, res) {
  const {userId, productId, size} = req.params; 
try {
    let cart = await Cart.findOne({ userId });
    if (cart) {
      //cart exists for user
      let itemIndex = cart.products.findIndex(p => p.productId == productId && p.size == size);

      if (itemIndex > -1) {
        // console.log(itemIndex)
        //product exists in the cart, delete the product from cart
        cart.products.splice(itemIndex, 1);
      } else {
        // console.log('not found')
      }
      cart = await cart.save();
      return res.status(201).send(cart);
    } else { // if cart is not availabe for user, create cart and push value from localstorage cart
      const newCart = await Cart.create({
        userId,
        products: localcart
      });
      return res.status(201).send(newCart);
    }
  } catch (err) {
    // console.log(err);
    res.status(500).send("Something went wrong");
  }
}