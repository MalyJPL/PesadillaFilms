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
api.put('/actualizar-pelicula/:id', PeliculaControl.actualizarPelicula);

//Mostrar películas en una categoría
api.get('/buscar-categoria/:categoria', PeliculaControl.mostrarCategoria);

//Mostrar películas que coincidan en algún campo en una palabra
api.get('/buscar-palabra/:palabra', PeliculaControl.busquedaPorPalabra);

//mostrar todas las películas
api.get('/buscar-todas', PeliculaControl.buscarTodas);

//borrarPelicula
api.put('/borrar-pelicula/:id', PeliculaControl.borrarPelicula);

//mostrar una película
api.get('/buscar-pelicula/:id', PeliculaControl.buscarUnaPelicula)


//Mostrar todos los usuarios
api.get('/lista-peliculas', PeliculaControl.mostrarPeliculas);




// Exportar el módulo
module.exports = api;