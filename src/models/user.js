const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  nomeCompleto: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  cpf: {
    type: String,
    required: true,
  },
  nasc: {
    type: Date,
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
  usuario: {
    type: String,
    required: false,
  },
  endereco: {
    type: String,
    required: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }

  try {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
    next();
  } catch (err) {
    next(err);
  }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
