const mongoose = require("mongoose");

const { Schema } = mongoose;

const CadastroProfeSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    telephone: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    curriculo: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const CadastroProfeModel = mongoose.model(
  "CadastroProfessor",
  CadastroProfeSchema
);

module.exports = { CadastroProfeModel };
