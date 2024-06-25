const Order = require('../models/orders');

exports.createOrder = async (req, res) => {
  try {
    const novoOrdem = new Order(req.body);
    const ordemSalvo = await novoOrdem.save();
    res.status(201).json(ordemSalvo);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getOrders = async (req, res) => {
  try {
    const ordem = await Order.find();
    res.json(ordem);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getOrderById = async (req, res) => {
  try {
    const ordem = await Order.findById(req.params.id);
    if (!ordem) return res.status(404).json({ message: 'Ordem não encontrado' });
    res.json(ordem);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateOrder = async (req, res) => {
  try {
    const ordemAtualizado = await Order.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!ordemAtualizado) return res.status(404).json({ message: 'Ordem não encontrado' });
    res.json(ordemAtualizado);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteOrder = async (req, res) => {
  try {
    const ordemDeletado = await Order.findByIdAndDelete(req.params.id);
    if (!ordemDeletado) return res.status(404).json({ message: 'Ordem não encontrado' });
    res.json({ message: 'Ordem deletada' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
