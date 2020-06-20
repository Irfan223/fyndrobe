const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    userId: {
        type: mongoose.Schema.Types.ObjectId, ref: 'customers'
    },
    products: [],
    active: {
        type: Boolean,
        default: true
    },
    modifiedOn: {
        type: Date,
        default: Date.now
    }
},
    { timestamps: true }
);
module.exports = mongoose.model("Orders", orderSchema);