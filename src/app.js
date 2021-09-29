'use strict'

const express = require('express');         //para utillizar o MVC 
const bodyParser = require('body-parser');  // auxilia a converter o corpo da requisição em JSON
const mongoose = require('mongoose');       // pacote para o gerenciamento do banco 
const cors = require('cors');

const app = express(); // constante para a aplicação
const router = express.Router(); // constante para a criação de rotas

// Conexão com o Banco
// conta mongodb: web2@grupovoll.com.br | ghx@2021
// db: woovoll | woovoll123 
mongoose.connect('mongodb+srv://woovoll:woovoll123@cluster0.eubr2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true });

// Carregar os Models
const Orders = require('./models/order');

// Carrega as Rotas
const indexRoute = require('./routes/index-route');
const ordersRoute = require('./routes/orders-route');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(cors());

app.use('/', indexRoute);
app.use('/orders', ordersRoute);

module.exports = app;