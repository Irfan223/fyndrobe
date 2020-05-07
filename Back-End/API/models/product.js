
const mongoose = require("mongoose");
mongoose.pluralize(null);
const ProductSchema = new mongoose.Schema({
    gender: {type: String, default: null},
    brandName: {type: String, default: null},  // product brand name
    category: {type: String, default: null}, // ex- kurta, leggins or t shirt, etc
    productName: {type: String, default: null}, // product name
    color:
        { color: String, image: [] },
    size: {
        quantity: String,
        size: []
    },
    cPrice: {type: String, default: null},
    sPrice: {type: String, default: null},
    description: {
        occasion: {type: String, default: null},
        printsAndPattern: {type: String, default: null},
        kurtaLength: {type: String, default: null},
        salwarLength: {type: String, default: null},
        dupattaLength: {type: String, default: null},
        kurtaFabric: {type: String, default: null},
        salwarFabric: {type: String, default: null},
        dupattaFabric: {type: String, default: null},
        work: {type: String, default: null},
        neck: {type: String, default: null},
        sleeve: {type: String, default: null},
        washCare: {type: String, default: null}
    },
    weight: {type: String, default: null},
    shippedIn: {type: String, default: null},
    disclaimer: String,
    addedAt: {type: String, default: new Date()}
});
module.exports = mongoose.model('Product', ProductSchema);