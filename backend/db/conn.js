const mongoose = require('mongoose')


async function main() {

    try{

        mongoose.set('strictQuery', true);

        await mongoose.connect(
            "mongodb+srv://askingStar:ec6cHtuxm8gcIC8H@cluster0.d9lrn0a.mongodb.net/?retryWrites=true&w=majority"
        );
        console.log('banco conectado');
    }   catch(error){
        console.log(`Erro: ${error}`);
    }
}

module.exports = main;