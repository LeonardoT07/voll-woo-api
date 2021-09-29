'use strict'

const mongoose = require('mongoose');
const Orders = mongoose.model('Orders');

exports.get = async() => {
    const res = await Orders.find({}, "");

    return res;
}

exports.getById = async(id) => {
    const res = await Orders
        .findById(id);
    return res;
}

// Controler de Criação de Studio
exports.create = async(data) => {
    var orders = new Orders(data);
    await orders.save();
}

// Controler de UPDATE
exports.update = async(id, data) => {
    await Orders
        .findByIdAndUpdate(id, {
            $set: {
                woo_cpf: data.woo_cpf,
                woo_url: data.woo_url
            }
        });
}

// Controler de DELETE
exports.delete = async(id) => {
    await Orders
        .findByIdAndRemove(id);
}