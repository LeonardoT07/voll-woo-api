'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    woo_cpf: {
        type: String, 
        trim: true 
    },
    woo_url: {
        type: String, 
        trim: true 
    },

    // cursos_presenciais: {
    //     espaco_vida_pilates: { 
    //         type: String,  
    //         required: [true, "O curso presencial espaco_vida_pilates é obrigatório"], 
    //         trim: true 
    //     },
    // },
});

module.exports = mongoose.model('Orders', schema);