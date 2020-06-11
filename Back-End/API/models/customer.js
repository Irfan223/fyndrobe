
const mongoose = require("mongoose");
mongoose.pluralize(null);
const cutomerSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    mobile: { type: Number, required: true },
    password: { type: String, required: true }
});
module.exports = mongoose.model('customers', cutomerSchema);