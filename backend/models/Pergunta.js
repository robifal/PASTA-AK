const mongoose = require('mongoose');

const { Schema } = mongoose;

const perguntaSchema = new Schema({

    question: {
        type: String,
        required: true
    },
    response: {
        type: String,
        required: true
    },

},
{timestamps: true}
);

const Perguntas = mongoose.model("Perguntas", perguntaSchema);


module.exports = Perguntas;






