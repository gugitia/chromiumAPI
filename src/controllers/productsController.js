const Product = require("../models/products");
const bcrypt = require("bcrypt");

exports.createProduct = async (req, res) => {
  try {
    const novoProduto = new Product(req.body);
    const produtoSalvo = await novoProduto.save();
    res.status(201).json(produtoSalvo);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getProducts = async (req, res) => {
  try {
    const produtos = await Product.find();
    res.json(produtos);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getProductById = async (req, res) => {
  try {
    const produto = await Product.findById(req.params.id);
    if (!produto)
      return res.status(404).json({ message: "Produto não encontrado" });
    res.json(produto);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const produtoAtualizado = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!produtoAtualizado)
      return res.status(404).json({ message: "Produto não encontrado" });
    res.json(produtoAtualizado);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const produtoDeletado = await Product.findByIdAndDelete(req.params.id);
    if (!produtoDeletado)
      return res.status(404).json({ message: "Produto não encontrado" });
    res.json({ message: "Produto deletado" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
