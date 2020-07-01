const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Objeto Schema
var PeliculaSchema = new Schema({
    categoria: String,
    titulo: String,
    sinopsis: String,
    director: String,
    protagonistas: String,
    duracion: String,
    trailer: String,
    online: String,
    cover: String,
    wallpaper: String,
    estado: Boolean
});


// Exportar el modelo
module.exports = mongoose.model('Pelicula', PeliculaSchema);