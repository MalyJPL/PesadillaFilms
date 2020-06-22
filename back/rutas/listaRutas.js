const express = require('express');
const ListaControl = require('../control/listaControl');
// Importar el paquete connect-multiparty
const multipart = require('connect-multiparty');

var api = express.Router();

// Ruta Registrar Lista-> angular url http://localhost:3000/api/

api.post('/registroLista', ListaControl.registrarLista);

api.put('/guardarCancionEnLista/:idLista', ListaControl.guardarCancionEnLista);

api.get('/mostrarListaCanciones/:idLista', ListaControl.mostrarListaCanciones);

api.get('/mostrarListasUsuario/:idUsuario', ListaControl.mostrarListasUsuario);


// Exportar el módulo
module.exports = api;