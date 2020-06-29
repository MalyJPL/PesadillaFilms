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
api.put('/subir-video/:idPelicula', subirTrailerDirectorio, PeliculaControl.subirVideo);

//Subir img cover peli
api.put('/subir-cover/:idPelicula/:tipoImg',  subirCoverDirectorio, PeliculaControl.subirImgPelicula);

//Subir img wallpaper peli
api.put('/subir-wallpaper/:idPelicula/:tipoImg',  subirWallpaperDirectorio, PeliculaControl.subirImgPelicula);

// Ruta mostrar Imagen Usuario
api.get('/obtener-archivo/:idPelicula/:tipo', PeliculaControl.mostrarArchivos);



//Actualizar película

// Exportar el módulo
module.exports = api;