const express = require('express');
const PeliculaControl = require('../control/peliculaControl');


// Importar el paquete connect-multiparty
const multipart = require('connect-multiparty');
// A través de connect-multiparty, apuntamos a la carpeta que deseemos en que se guarden los archivos
const subirTrailerDirectorio = multipart({uploadDir: './files/peliculas/trailer'});
const subirCoverDirectorio = multipart({uploadDir: './files/peliculas/cover'});
const subirWallpaperDirectorio = multipart({uploadDir: './files/peliculas/wallpaper'});

var api = express.Router();


//Registrar película
api.post('/registrar-pelicula', PeliculaControl.registrarPelicula);

//Subir trailer peli

//Subir img cover o wallpaper peli
api.put('/subir-imagen/:idPelicula/:tipoImg', PeliculaControl.registrarPelicula);

//Subir img wallpaper peli

//Actualizar película

// Exportar el módulo
module.exports = api;