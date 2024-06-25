const mongoose = require("mongoose");

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

const User = mongoose.model("User", userSchema);

module.exports = User;