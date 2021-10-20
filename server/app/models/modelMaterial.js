const mongoose = require("mongoose");
const { Schema } = mongoose;

const modelMaterial = new Schema({
    materialName: {
        type: String,
        require: true
    },
    mProductQuantity: {
        type: Number
    }
});

module.export = mongoose.model("material", modelMaterial);
