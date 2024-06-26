const express = require("express");
const router = express.Router();
const StaffController = require("../controllers/staffController");

router.get("/", StaffController.getStaffs);
router.get("/:id", StaffController.getStaffById);
router.post("/", StaffController.createStaff);
router.put("/:id", StaffController.updateStaff);
router.delete("/:id", StaffController.deleteStaff);

module.exports = router;
