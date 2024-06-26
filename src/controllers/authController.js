const bcrypt = require("bcrypt");
const User = require("../models/user");
const Staff = require("../models/staff");

exports.loginStaff = async (req, res) => {
  const { email, senha } = req.body;
  try {
    const user = await Staff.findOne({ email });

    if (!user) {
      return res.status(400).json({ error: "Usuario não encontrado" });
    }
    const isMatch = await bcrypt.compare(senha, user.senha);

    if (!isMatch) {
      return res.status(400).json({ error: "Credenciais invalidas" });
    }

    return res.json({ message: "Login bem sucedido" });
  } catch (err) {
    return res.status(500).json({ error: "Erro no servidor" });
  }
};
