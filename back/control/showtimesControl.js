const Showtimes = require('../modelo/showtimes');
// Importar el módulo File System de Node
const fs = require('fs');
// Importar el módulo Path de Node
const path = require('path');

function buscarShowtimes(req, res) {
    // Pedir el archivo que queremos mostrar
    // localhost:3000/api/obtenerImagen/:imageFile
    var palabra= req.params.palabra;
  
  Showtimes.find().populate('Times').exec(function(err, showtimesTodos){
    if (err) {
      res.status(500).send({ message: "Error en el servidor" });
  } else {
      if (!showtimesTodos) {
          res.status(200).send({ message: "No fue posible encontrar películas en el horario" });
      } else {
          res.status(200).send({
              message: "¡Todos los horarios recuperados!",
                showtimes: showtimesTodos
          });
      }
  }
})
}


// Exportar paquete de funciones
module.exports = {
    buscarShowtimes
  }