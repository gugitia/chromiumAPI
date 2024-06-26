const Staff = require("../models/staff");

exports.createStaff = async (req, res) => {
  try {
    const novoStaff = new Staff(req.body);
    const StaffSalvo = await novoStaff.save();
    res.status(201).json(StaffSalvo);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getStaffs = async (req, res) => {
  try {
    const staffs = await Staff.find();
    res.json(staffs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getStaffById = async (req, res) => {
  try {
    const staff = await Staff.findById(req.params.id);
    if (!staff)
      return res.status(404).json({ message: "Staff não encontrado" });
    res.json(staff);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateStaff = async (req, res) => {
  try {
    const staffAtualizado = await Staff.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!staffAtualizado)
      return res.status(404).json({ message: "Staff não encontrado" });
    res.json(staffAtualizado);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteStaff = async (req, res) => {
  try {
    const staffDeletado = await Staff.findByIdAndDelete(req.params.id);
    if (!staffDeletado)
      return res.status(404).json({ message: "Staff não encontrado" });
    res.json({ message: "Staff deletado" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
