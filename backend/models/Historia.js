const mongoose = require('mongoose');


const { Schema } = mongoose;

const HistoriaSchema = new Schema({

    question: {
        type: String,
        required: true
    },
    alternative: {
    option: [{alternative1: String, alternative2: String, alternative3: String, alternative4: String}],
    type: [],
    required: true  
    },
    response: {
        type: Number,
        required: true
    },

},
{timestamps: true}
);

const Historia = mongoose.model("Historia", HistoriaSchema);


module.exports = {Historia};