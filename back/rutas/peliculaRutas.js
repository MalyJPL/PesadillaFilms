const express = require('express');
const UsuarioControl = require('../control/peliculaControl');


// Importar el paquete connect-multiparty
const multipart = require('connect-multiparty');
// A través de connect-multiparty, apuntamos a la carpeta que deseemos en que se guarden los archivos
const subirTrailerDirectorio = multipart({uploadDir: './files/peliculas/trailer'});
const subirCoverDirectorio = multipart({uploadDir: './files/peliculas/cover'});
const subirWallpaperDirectorio = multipart({uploadDir: './files/peliculas/wallpaper'});

var api = express.Router();


//Registrar película

//Actualizar película

//Subir trailer peli

//Subir img cover peli

//Subir img wallpaper peli

// Exportar el módulo
module.exports = api;