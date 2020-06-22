const express = require('express');
const CancionControl = require('../control/cancionControl');
// Importar el paquete connect-multiparty
const multipart = require('connect-multiparty');
// A través de connect-multiparty, apuntamos a la carpeta que deseemos en que se guarden los archivos
const subirImgCancionDirectorio = multipart({ uploadDir: './archivos/canciones/imagenes' });
const subirArchivoCancionDirectorio = multipart({ uploadDir: './archivos/canciones/musica' });

var api = express.Router();

// protección de rutas en Angular -> guards

// Ruta Registrar Usuario -> angular url http://localhost:3000/api/
api.post('/registro-Cancion', CancionControl.registrarCancion);

// Ruta Actualizar Cancion
api.put('/actualizar-cancion/:id', CancionControl.actualizarCancion);

// Ruta Subir Imagen Cancion
api.put('/subirImagenCancion/:id', subirImgCancionDirectorio, CancionControl.subirImgCancion);

// Ruta mostrar Imagen Cancion
api.get('/obtenerImagenCancion/:imageFile', CancionControl.mostrarImgCancion);

// Ruta Subir Archivo Cancion
api.put('/subirArchivoCancion/:id', subirArchivoCancionDirectorio, CancionControl.subirArchivoCancion);

// Ruta mostrar Archivo Cancion
api.get('/obtenerArchivoCancion/:cancionFile', CancionControl.mostrarArchivoCancion);

//mostrar todas las canciones
api.get('/mostrarCanciones', CancionControl.mostrarCanciones);

// Exportar el módulo
module.exports = api;