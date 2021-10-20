const mongoose = require("mongoose");
const { Schema } = mongoose;

const modelKind = new Schema({
    kindName: {
        type: String,
        require: true
    },
    productQuantity: {
        type: Number
    }
});

module.export = mongoose.model("kind", modelKind);
