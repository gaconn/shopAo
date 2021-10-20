const express = require("express");
const router = express.Router();
const userController = require("../app/controllers/userController.js");

router.post("/api/register", userController.createUser);
router.post("/api/login", userController.getUser);

module.exports = router;
