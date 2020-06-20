const Razorpay = require('razorpay');
const shortid = require('shortid');
module.exports.razorpay = async function (req, res, next) {
    console.log('hello')
   const {amount, currency} = req.body;
   const receipt = shortid.generate();
   const  payment_capture = 1;
    var razorpay = new Razorpay({
        key_id: 'rzp_test_38RonBOwwEa2xh',
        key_secret: 'hz9XEtbi6p3xRLSrrPM9Uxko'
    })
    const data = await  razorpay.orders.create({ amount, currency, receipt, payment_capture });
    res.status(201).json({
      order_id: data.id,
      amount: data.amount,
      currency: data.curreny 
  })
}