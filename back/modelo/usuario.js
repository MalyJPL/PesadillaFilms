const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Objeto Schema
var UsuarioSchema = new Schema({
    nombre: String,
    apellido: String,
    correo: String,
    contrasena: String,
    rol: String,
    membresia: String,
    imagen: String,
    estado: Boolean
});

// Exportar el modelo
module.exports = mongoose.model('Usuario', UsuarioSchema);