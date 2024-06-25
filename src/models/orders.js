const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  produtosId: {
    type: String,
    required: true,
  },
  usuarioId: {
    type: String,
    required: true,
  },
  local: {
    type: Number,
    required: true,
  },
  valor: {
    type: String,
    required: true,
  },
  dataCompra: {
    type: Date,
    default: Date.now,
  },
  dataEntrega: {
    type: Date,
    default: () => {
        let data = new Date();
        data.setDate(data.getDate() + 14);
        return data;
      }
  },
  entregue: {
    type: Boolean,
    required: true,
  },
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;