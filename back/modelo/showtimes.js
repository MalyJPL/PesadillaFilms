const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Objeto Schema
var ShowtimesSchema = new Schema({
    titulo: String,
    showtimes: {type: mongoose.Schema.Types.ObjectId, ref: 'Times'}, 
});


// Exportar el modelo
module.exports = mongoose.model('Showtimes', ShowtimesSchema);