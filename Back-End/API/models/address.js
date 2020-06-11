const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId, ref: 'customers'
    },
    addresses: [
      {
        firstName: { type: String, "default": null },
        lastName: { type: String, "default": null },
        mobile: { type: Number, "default": 0 },
        houseAndBuildingName: { type: String, "default": null },
        locality: { type: String, "default": null },
        landmark: { type: String, "default": null },
        pincode: { type: Number, "default": null },
        cityOrDistrict: { type: String, "default": null },
        state: { type: String, "default": null },
        country: { type: String, "default": null }
      }
    ],
    modifiedOn: {
      type: Date,
      default: Date.now
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Address", addressSchema);