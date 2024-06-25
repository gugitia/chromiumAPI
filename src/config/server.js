const mongoose = require("mongoose");

require('dotenv').config();

async function connect() {
  try {
    await mongoose.connect(process.env.URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Conexão com o MongoDB estabelecida com sucesso.");
  } catch (error) {
    console.error("Erro ao conectar-se ao MongoDB:", error);
  }
}

module.exports = { connect };

