'use strict'

const express = require('express');
const router = express.Router();
const controller = require('../controllers/orders-controller');

router.get('/', controller.get);
router.get('/:id', controller.getById);

router.post('/gerenciar/create', controller.post);
router.put('/gerenciar/:id', controller.put);
router.delete('/gerenciar/:id', controller.delete);

module.exports = router;