'use strict';

// Exportação do modelo para uso
const repository = require('../repositories/orders-repository');

// Controlers de GET
exports.get = async(req, res, next) => {
    try{
        var data = await repository.get();
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({
            custom_message: "Falha ao listar as Orders.",
            erro: e
        });
    }
}

// GET passando o ID
exports.getById = async(req, res, next) => {
    try{
        var data = await repository.getById(req.params.id);
        res.status(200).send(data);
    } catch(e){
        res.status(500).send({
            custom_message: "Falha ao mostrar a Order através do ID.",
            erro: e
        });
    }
}

// Controler de Criação de Studio
exports.post = async(req, res, next) => {
    try {        
        await repository.create(req.body);
        res.status(201).send({
            custom_message : "Nova Order cadastrada!"
        });
    } catch (e) {
        res.status(500).send({
            custom_message: "Falha ao cadastrar o Order",
            erro: e
        });
    }
};

// Controler de Update
exports.put = async(req, res, next) => {
    try{
        await repository.update(req.params.id, req.body);
        res.status(200).send({
            custom_message : "Order atualizada com sucesso!"
        });
    }catch (e) {
        res.status(500).send({
            custom_message: "Falha ao atualizar o produto!",
            erro: e
        });
    }
};

// Controler de Delete
exports.delete = async(req, res, next) => {
    try{
        const url_message = req.params.url;

        await repository.delete(req.params.id);
        res.status(200).send({
            custom_message : "A Order foi removida!"
        });
    } catch (e) {
        res.status(500).send({
            custom_message: "Falha ao excluir a Order!",
            erro: e
        });
    }
};