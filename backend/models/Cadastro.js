const mongoose = require("mongoose");

const { Schema } = mongoose;

const CadastroSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    telephone: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
       required: true 
    },
  },
  { timestamps: true }
);

const CadastroModel = mongoose.model("Cadastro", CadastroSchema);

module.exports = {CadastroModel}
