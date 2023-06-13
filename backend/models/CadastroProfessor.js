const mongoose = require("mongoose");

const { Schema } = mongoose;

const CadastroProfeSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        
    }
)