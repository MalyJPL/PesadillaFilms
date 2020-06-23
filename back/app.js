const express = require('express');
const app = express();
// Declaración de cors -> CORS lo dejaremos al final
const cors = require('cors');

// Declaración de la constante de las rutas de usuarios
const usuarioRutas = require('./rutas/usuarioRutas');

// -- MIDDLEWARES --
app.use(express.json());
app.use(cors());

// Consumo de las rutas
app.use('/api', usuarioRutas);


// -- FIN MIDDLEWARES --

// Exportación del módulo
module.exports = app;
