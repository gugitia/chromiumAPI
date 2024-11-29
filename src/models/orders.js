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
  cpf: {
    type: String,
    required: true,
  },
  cell: {
    type: String,
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
    },
  },
  entregue: {
    type: Boolean,
    required: true,
  },
  endereco: {
    rua: {
      type: String,
      required: true,
    },
    numero: {
      type: String,
      required: true,
    },
    cidade: {
      type: String,
      required: true,
    },
    estado: {
      type: String,
      required: true,
    },
    cep: {
      type: String,
      required: true,
    },
  },
  pagamento: {
    metodo: {
      type: String,
      enum: ["cartao", "boleto", "paypal"],
      required: true,
    },
    detalhes: {
      tipoCartao: {
        type: String,
        required: function () {
          return this.pagamento.metodo === "cartao";
        },
      },
      numeroCartao: {
        type: String,
        required: function () {
          return this.pagamento.metodo === "cartao";
        },
      },
      validade: {
        type: String,
        required: function () {
          return this.pagamento.metodo === "cartao";
        },
      },
    },
  },
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
