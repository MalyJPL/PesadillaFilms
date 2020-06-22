const mongoose = require('mongoose');
/* 
    Con Schema, crearemos una estructura base de nuestra colección; definiendo campos
    y el tipo de dato de cada uno de ellos.
 */
const Schema = mongoose.Schema;

// -- Crear la instancia del objeto Schema --
var CancionSchema = new Schema({
    nombre: String,
    album: String,
    emocion: String,
    genero: String,
    artista: String,
    anio: Number,
    archivo: String,
    imagen: String
});

// -- Exportar el Schema --
// mongoose.model('Nombre de la Colección', Schema)
module.exports = mongoose.model('Cancion', CancionSchema);