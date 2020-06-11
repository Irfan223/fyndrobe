const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId, ref: 'customers'
    },
    products: [
      {
        productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
        category: { type: String, "default": null },
        productTitle: { type: String, "default": null },
        coupon_discount: { type: Number, "default": 0 },
        extra_price: { type: Number, "default": null },
        gst: { type: Number, "default": null },
        image: { type: String, "default": null },
        quantity: { type: Number, "default": null },
        price: { type: Number, "default": null },
        totalSize: { type: Array, "default": null },
        size: { type: String, "default": null },
        color: { type: String, "default": null },
        spl_price: { type: Number, "default": null },
        stock: { type: Number, "default": null },
        sub_total: { type: Number, "default": null },
      }
    ],
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

module.exports = mongoose.model("Cart", cartSchema);