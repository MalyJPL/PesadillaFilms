const express = require('express');
const ShowtimesControl = require('../control/showtimesControl');


// Importar el paquete connect-multiparty
const multipart = require('connect-multiparty');

var api = express.Router();

//Buscar showtimes
api.get('/buscar-showtimes', ShowtimesControl.buscarShowtimes);

// Exportar el módulo
module.exports = api;