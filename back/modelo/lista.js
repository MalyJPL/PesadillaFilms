const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Objeto Schema
var ListaSchema = new Schema({
    nombre: String,
    usuario: {type: mongoose.Schema.Types.ObjectId, ref : 'Usuario'},
    canciones: [
        {type: mongoose.Schema.Types.ObjectId, ref : 'Cancion'}
    ]
});

// Exportar el modelo
module.exports = mongoose.model('Lista', ListaSchema);