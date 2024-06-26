const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const staffSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  cell: {
    type: String,
    required: true,
  },
  senha: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

staffSchema.pre("save", async function (next) {
  if (!this.isModified("senha")) {
    return next();
  }

  try {
    const saltRounds = 10;
    this.senha = await bcrypt.hash(this.senha, saltRounds);
    next();
  } catch (err) {
    next(err);
  }
});

const Staff = mongoose.model("Staff", staffSchema);

module.exports = Staff;
