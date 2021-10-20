const mongoose = require("mongoose");

async function connectDB() {
  try {
    await mongoose.connect("mongodb://localhost:27017/learnJS");
    console.log("connection successfully !");
  } catch (error) {
    console.log("connection failure");
  }
}

module.exports = connectDB;
