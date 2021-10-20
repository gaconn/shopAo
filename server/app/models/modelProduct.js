const mongoose = require("mongoose");
const { Schema } = mongoose;
const modelProduct = new Schema({
    nameProduct: {
        type: String,
        require: true
    },
    description: {
        type: String
    },
    price: {
        type: Number,
        require: true
    },
    kind: {
        type: Schema.Types.ObjectId,
        ref: "product"
    },
    quantity: {
        type: Number
    },
    material: {
        type: Schema.Types.ObjectId,
        ref: "material"
    },
    size: {
        type: String,
        enum: ["M", "L", "XL", "2XL", "3XL", "4XL"]
    },
    imageUrl: {
        type: String
    },
    vote: { type: Number }
});

module.export = mongoose.model("product", modelProduct);
