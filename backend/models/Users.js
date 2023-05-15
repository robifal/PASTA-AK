const mongoose = require("mongoose");

const {Schema} = mongoose;

const {cadatroSchema} = require("./Cadastro");

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },

},
{timestamps: true}
);


const Users = mongoose.model("Users", userSchema);

module.exports = Users;