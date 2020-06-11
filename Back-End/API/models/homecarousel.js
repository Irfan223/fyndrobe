const mongoose = require("mongoose");

const homeCarouselSchema = new mongoose.Schema({
    images: {
        title: { type: String, required: true },
        url: { type: String, required: true },
        link: { type: String, required: true }
    },
},
    { timestamps: true }
);

module.exports = mongoose.model("HomeCarousel", homeCarouselSchema);
