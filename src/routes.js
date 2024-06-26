const express = require("express");
const router = express.Router();

const userRoutes = require("./routes/userRoutes");
const productsRoutes = require("./routes/productsRoutes");
const orderRoutes = require("./routes/orderRoutes");
const staffRoutes = require("./routes/staffRoutes");
const authRoutes = require("./routes/authRoutes");

router.use("/usuario", userRoutes);
router.use("/produtos", productsRoutes);
router.use("/ordem", orderRoutes);
router.use("/staff", staffRoutes);
router.use("/login", authRoutes);

module.exports = router;
