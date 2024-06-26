const express = require("express");
const router = express.Router();
const AuthController = require("../controllers/authController");

router.post("/staff", AuthController.loginStaff);

module.exports = router;
