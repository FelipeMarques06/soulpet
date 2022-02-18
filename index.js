// config inicial
require('dotenv/config') //Definindo variavel de ambiente
require('./database')
const express = require('express')
const app = express();

app.use(express.urlencoded({ extended: true })); //Url fica dentro do código
app.use(express.json()); //Aplicação consegue ler json
app.listen(3000);