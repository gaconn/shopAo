const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  userName: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  email: { type: String },
  createdAt: { type: Date, default: new Date() },
});

const model = mongoose.model("user", userSchema, "users");

module.exports = model;
