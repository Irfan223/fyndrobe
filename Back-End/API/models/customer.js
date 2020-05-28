
const mongoose = require("mongoose");
mongoose.pluralize(null);
const cutomerSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    mobile: { type: Number, required: true },
    password: { type: String, required: true },
    address: {
        locality: {type: String, "default": null},
        areaOrstreet: {type: String, "default": null},
        cityOrDistOrTown: {type: String, "default": null},
        state: {type: String, "default": null},
        landmark: {type: String, "default": null},
        pincode: {type: Number, "default": null},
    },
    cart: {type: Array, "default": 0}
});
module.exports = mongoose.model('customers', cutomerSchema);