const User = require('../models/user');

exports.createUser = async (req, res) => {
  try {
    const novoUsuario = new User(req.body);
    const usuarioSalvo = await novoUsuario.save();
    res.status(201).json(usuarioSalvo);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getUsers = async (req, res) => {
  try {
    const usuarios = await User.find();
    res.json(usuarios);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getUserById = async (req, res) => {
  try {
    const usuario = await User.findById(req.params.id);
    if (!usuario) return res.status(404).json({ message: 'Usuario não encontrado' });
    res.json(usuario);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const usuarioAtualizado = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!usuarioAtualizado) return res.status(404).json({ message: 'Usuario não encontrado' });
    res.json(usuarioAtualizado);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const usuarioDeletado = await User.findByIdAndDelete(req.params.id);
    if (!usuarioDeletado) return res.status(404).json({ message: 'Usuario não encontrado' });
    res.json({ message: 'Usuario deletado' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
