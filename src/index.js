const express = require("express");
const cors = require("cors");

require('dotenv').config();

const { connect } = require("../src/config/server");

const userRoutes = require("./routes/userRoutes");
const productsRoutes = require("./routes/ProductsRoutes");
const orderRoutes = require("./routes/orderRoutes");

const app = express();

const PORT = process.env.PORT || 3400;

app.use(cors());
app.use(express.json());

connect();

app.use('/usuario', userRoutes);
app.use('/produtos', productsRoutes);
app.use('/ordem', orderRoutes);

app.listen(PORT, () => {
    console.log(`Servidor iniciado na porta ${PORT}.`);
  });