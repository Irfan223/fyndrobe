
const mongoose = require("mongoose");
mongoose.pluralize(null);
const ProductSchema = new mongoose.Schema({
    sellerEmail: {type: String, "default": null},
    productCategory: {type: String, "default": null},
    gender: {type: String, "default": null},
    brandName: {type: String, "default": null},  // product brand name
    productTitle: {type: String, "default": null}, // ex- kurta, leggins or t shirt, etc
    productName: {type: String, "default": null}, // product name
    color:
        { color: String, image: [] },
    size: [{type: Object, "default": null}],
    costPrice: {type: String, "default": null},
    sellingPrice: {type: String, "default": null},
    discount: {type: Number, "default": function() {return (((this.costPrice - this.sellingPrice)/this.costPrice)*100).toFixed(0)}},
    description: {type: String, "default": null},
    details: {
        occasion: {type: String, "default": null},
        printsAndPattern: {type: String, "default": null},
        kurtaFabric: {type: String, "default": null},
        salwarFabric: {type: String, "default": null},
        dupattaFabric: {type: String, "default": null},
        work: {type: String, "default": null},
        neck: {type: String, "default": null},
        sleeve: {type: String, "default": null},
        washCare: {type: String, "default": null}
    },
    weight: {type: String, "default": null},
    shippedIn: {type: String, "default": null},
    status: {type: String, "default": "in Active"},
    disclaimer: {type: String, "default": "Product color may slightly vary due to photographic lighting sources or your monitor settings"},
    addedAt: {type: String, "default": new Date()}
});
module.exports = mongoose.model('Product', ProductSchema);