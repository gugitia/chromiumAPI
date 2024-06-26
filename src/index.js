const express = require("express");
const cors = require("cors");
const routes = require("./routes");
require("dotenv").config();

const { connect } = require("../src/config/server");

const app = express();

const PORT = process.env.PORT || 3400;

app.use(cors());
app.use(express.json());
app.use(routes);

connect();

app.listen(PORT, () => {
  console.log(`Servidor iniciado na porta ${PORT}.`);
});
