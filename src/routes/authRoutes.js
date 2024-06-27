const express = require("express");
const router = express.Router();
const AuthController = require("../controllers/authController");

router.post("/staff", AuthController.loginStaff);
router.post("/user", AuthController.loginUser);

module.exports = router;
