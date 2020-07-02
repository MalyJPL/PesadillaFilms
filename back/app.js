const express = require('express');
const app = express();
// Declaración de cors -> CORS lo dejaremos al final
const cors = require('cors');

// Declaración de la constante de las rutas de usuarios
const usuarioRutas = require('./rutas/usuarioRutas');
const peliculaRutas = require('./rutas/peliculaRutas');
const showtimesRutas = require('./rutas/showtimesRutas');

// -- MIDDLEWARES --
app.use(express.json());
app.use(cors());

// Consumo de las rutas
app.use('/api', usuarioRutas);
app.use('/api', peliculaRutas);
app.use('/api', showtimesRutas);

// -- FIN MIDDLEWARES --

// Exportación del módulo
module.exports = app;
