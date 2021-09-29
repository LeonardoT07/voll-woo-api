'use strict'

const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).send({
        title: "API - Woocommerce Cartão VOLL",
        description: "Api destinada para o projeto Woocommerce e Cartão VOLL da empresa VOLL Pilates",
        version: "1.0.0"
    });
});

module.exports = router;