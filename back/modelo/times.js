const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Objeto Schema
var timesSchema = new Schema({
{date: String, times: Array}
);


// Exportar el modelo
module.exports = mongoose.model('Times', ShowtimesSchema);