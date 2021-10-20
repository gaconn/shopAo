const express = require("express");
const router = express.Router();
const productController = require("../app/controllers/productController");

router.post("/api/addProduct", productController.addProduct);
router.get("/api/getProducts", productController.getProducts);

module.exports = router;
