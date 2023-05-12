const mongoose = require("mongoose");

const {Schema} = mongoose;

const {serviceSchema} = require("./Cadastro");

const cadastroSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
},
{timestamps: true}
);


const Users = mongoose.model("Users", cadastroSchema);

module.exports = Users;