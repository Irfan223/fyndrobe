const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    productId: {type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true},
    cutomerId: {type: String, required: true},
    quantity: {type: Number, required: true}
})