const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  produto: {
    type: String,
    required: true,
  },
  tags: {
    type: [String],
    default: [],
  },
  descricao: {
    type: String,
    required: true,
  },
  valor: {
    type: Number,
    required: true,
  },
  imagems: {
    type: String,
    required: true,
  },
  tipo: {
    type: String,
    required: true,
  },
  conteudo: {
    type: [String],
    default: [],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
