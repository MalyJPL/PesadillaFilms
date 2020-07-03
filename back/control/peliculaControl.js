const Pelicula = require('../modelo/pelicula');
// Importar el módulo File System de Node
const fs = require('fs');
// Importar el módulo Path de Node
const path = require('path');




//Funcion registrar película
function registrarPelicula(req, res) {

  var pelicula = new Pelicula;
  var parametros = req.body;

  pelicula.categoria = parametros.categoria;
  pelicula.titulo = parametros.titulo;
  pelicula.sinopsis = parametros.sinopsis;
  pelicula.director = parametros.director;
  pelicula.protagonistas = parametros.protagonistas;
  pelicula.duracion = parametros.duracion;
  pelicula.trailer = null;
  pelicula.online = parametros.online;
  pelicula.cover = null;
  pelicula.wallpaper = null;
  pelicula.estado = 1;

  pelicula.save((err, peliculaNueva) => {
    if (err) {
      res.status(500).send({ message: "Error en el servidor" });
    } else {
      if (!peliculaNueva) {
        res.status(200).send({ message: "No fue posible realizar el registro de la película" });
      } else {
        res.status(200).send({
          message: "Película registrada",
          pelicula: peliculaNueva
        });
      }
    }
  });
}

//Función subir trailer
function subirVideo(req, res) {
  var peliculaId = req.params.idPelicula;
  var nombreArchivo = "No has subido ningún video...";
  // Validar si efectivamente se está enviando un archivo

  if (req.files) {
    // Vamos a ir analizando la ruta del archivo, el nombre y la extensión
    // C:\\cancions\descargas\imagen.png
    var rutaArchivo = req.files.video.path;
    console.log(`ruta Archivo: ${rutaArchivo}`);

    // Haremos un split para separar elementos
    // Esto nos generará un arreglo de datos
    var partirArchivo = rutaArchivo.split("\\");
    console.log(`partir Archivo: ${partirArchivo}`);

    // Acceder a la posición que contiene el nombre del archivo
    var final = partirArchivo.length - 1;
    console.log(final);
    var nombreArchivo = partirArchivo[final];
    console.log(`Posición dato: ${nombreArchivo}`);

    // Haremos un split para separar el nombre del archivo de la extensión
    // ['imagen', 'png']
    var extensionVideo = nombreArchivo.split(".");
    console.log(`partirImg: ${extensionVideo}`);

    // Accedemos a la posición de la extensión del archivo
    var extensionArchivo = extensionVideo[1];
    console.log(`Extensión Archivo: ${extensionArchivo}`);

    // Validar si el formato del archivo es aceptable
    if (
      extensionArchivo == "mp4" ||
      extensionArchivo == "3gp"
    ) {
      // Actualizar del cancion el campo imagen
        Pelicula.findByIdAndUpdate(
          peliculaId,
          { trailer: nombreArchivo },
          (err, peliculaConVideo) => {
            if (err) {
              res.status(500).send({ message: "Error en el servidor" });
            } else {
              if (!peliculaConVideo) {
                res
                  .status(200)
                  .send({ message: "No fue posible subir el video" });
              } else {
                res.status(200).send({
                  message: "¡Video anexado!",
                  trailer: nombreArchivo,
                });
              }
            }
          }
        );      
    } else {
           // Formato no válido
      res
        .status(200)
        .send({ message: "¡Formato inválido! El archivo no es un video válido" });
    }
  } else {
      res.status(200).send({ message: "No has subido video" });
  }
}

// Función Subir IMG cover y wallpaper
function subirImgPelicula(req, res) {
  var peliculaId = req.params.idPelicula;
  var tipoImg = req.params.tipoImg;
  var nombreArchivo = "No has subido ninguna imagen...";
  // Validar si efectivamente se está enviando un archivo
  if (req.files) {
    // Vamos a ir analizando la ruta del archivo, el nombre y la extensión
    // C:\\cancions\descargas\imagen.png
    var rutaArchivo = req.files.imagen.path;
    console.log(`ruta Archivo: ${rutaArchivo}`);

    // Haremos un split para separar elementos
    // Esto nos generará un arreglo de datos
    var partirArchivo = rutaArchivo.split("\\");
    console.log(`partir Archivo: ${partirArchivo}`);

    // Acceder a la posición que contiene el nombre del archivo
    var final = partirArchivo.length - 1;
    console.log(final);
    var nombreArchivo = partirArchivo[final];
    console.log(`Posición dato: ${nombreArchivo}`);

    // Haremos un split para separar el nombre del archivo de la extensión
    // ['imagen', 'png']
    var extensionImg = nombreArchivo.split(".");
    console.log(`partirImg: ${extensionImg}`);

    // Accedemos a la posición de la extensión del archivo
    var extensionArchivo = extensionImg[1];
    console.log(`Extensión Archivo: ${extensionArchivo}`);

    // Validar si el formato del archivo es aceptable
    if (
      extensionArchivo == "jpeg" ||
      extensionArchivo == "png" ||
      extensionArchivo == "jpg" ||
      extensionArchivo == "svg"
    ) {
      // Actualizar del cancion el campo imagen
      if (tipoImg = "cover") {
        Pelicula.findByIdAndUpdate(
          peliculaId,
          { cover: nombreArchivo },
          (err, peliculaConImg) => {
            if (err) {
              res.status(500).send({ message: "Error en el servidor" });
            } else {
              if (!peliculaConImg) {
                res
                  .status(200)
                  .send({ message: "No fue posible subir la imagen" });
              } else {
                res.status(200).send({
                  message: "¡Imagen anexada!",
                  imagen: nombreArchivo,
                });
              }
            }
          }
        );
      } else if (tipoImg = "wallpaper") {
        Pelicula.findByIdAndUpdate(
          peliculaId,
          { wallpaper: nombreArchivo },
          (err, peliculaConImg) => {
            if (err) {
              res.status(500).send({ message: "Error en el servidor" });
            } else {
              if (!peliculaConImg) {
                res
                  .status(200)
                  .send({ message: "No fue posible subir la imagen" });
              } else {
                res.status(200).send({
                  message: "¡Imagen anexada!",
                  imagen: nombreArchivo,
                });
              }
            }
          }
        );
      }
    } else {
           // Formato no válido
      res
        .status(200)
        .send({ message: "¡Formato inválido! El archivo no es una imagen" });
    }
  } else {
      res.status(200).send({ message: "No has subido imagenes" });
  }
}

// Función Mostrar Imagen
function mostrarArchivos(req, res) {
  // Pedir el archivo que queremos mostrar
  // localhost:3000/api/obtenerImagen/:imageFile
  var idPelicula = req.params.idPelicula;
  var tipo = req.params.tipo;
  var ruta ='';
  var pelicula = '';
  var archivo = '';


Pelicula.findById(idPelicula, 'cover wallpaper trailer', function (err, pelicula){
  if(tipo === 'cover'){
  archivo = pelicula.cover;
   ruta = "./files/peliculas/cover/" + archivo;
  } 
  // Ubicación del archivo    
if(tipo === 'wallpaper'){
  archivo = pelicula.wallpaper;
  ruta = "./files/peliculas/wallpaper/" + archivo;
}
if(tipo === 'trailer'){
  archivo = pelicula.trailer;
  ruta = "./files/peliculas/trailer/" + archivo;
}
  // Validar si existe o no
  // fs.exists('la ruta del archivo a buscar', (existencia)=>{})
  fs.exists(ruta, (exists) => {
    if (exists) {
      res.sendFile(path.resolve(ruta));
    } else {
      res.status(200).send({ message: "Archivo no Encontrado" });
    }
  });
})
}
//Función actualizar datos pelicula
function actualizarPelicula(req, res) {
  var usuarioId = req.params.id;
  var nuevosDatosPelicula = req.body;

  Pelicula.findByIdAndUpdate(usuarioId, nuevosDatosPelicula, (err, peliculaActualizada) => {
      if (err) {
          res.status(500).send({ message: "Error en el servidor" });
      } else {
          if (!peliculaActualizada) {
              res.status(200).send({ message: "No fue posible actualizar la película" });
          } else {
              res.status(200).send({
                  message: "¡Pelicula Actualizada!",
                  pelicula: peliculaActualizada
              });
          }
      }
  });
}

//mostrar peliculas por categorias 

function mostrarCategoria(req, res) {
  // Pedir el archivo que queremos mostrar
  // localhost:3000/api/obtenerImagen/:imageFile
  var categoriaSeleccionada = req.params.categoria;
  console.log("Categoria seleccionada:" + categoriaSeleccionada);
Pelicula.find({'categoria' : categoriaSeleccionada}, function (err, peliculasEncontradas){
  if (err) {
    res.status(500).send({ message: "Error en el servidor" });
} else {
    if (!peliculasEncontradas) {
        res.status(200).send({ message: "No fue posible encontrar películas en la categoría" });
    } else {
        res.status(200).send({
            message: "¡Categoría recuperada!",
            peliculas: peliculasEncontradas
        });
    }
}
  });
}

//mostrar películas por palabra

function busquedaPorPalabra(req, res) {
  // Pedir el archivo que queremos mostrar
  // localhost:3000/api/obtenerImagen/:imageFile
  var palabra= req.params.palabra;

Pelicula.find({
   $or:[{ categoria: {$regex: palabra}}, 
    {titulo: {$regex : palabra}} , 
    {sinopsis: {$regex : palabra}} ,
    {director: {$regex : palabra}} ,
     {protagonistas: {$regex : palabra}}
   ]
}
, 
  function (err, peliculasEncontradas){
  if (err) {
    res.status(500).send({ message: "Error en el servidor" });
} else {
    if (!peliculasEncontradas) {
        res.status(200).send({ message: "No fue posible encontrar películas para este criterio de búsqueda" });
    } else {
        res.status(200).send({
            message: "¡Búsqueda exitosa!",
            peliculas: peliculasEncontradas
        });
    }
}
  });
}

//mostrar todas las películas

function buscarTodas(req, res) {
  // Pedir el archivo que queremos mostrar
  // localhost:3000/api/obtenerImagen/:imageFile
  var palabra= req.params.palabra;

Pelicula.find(function (err, peliculasEncontradas){
  if (err) {
    res.status(500).send({ message: "Error en el servidor" });
} else {
    if (!peliculasEncontradas) {
        res.status(200).send({ message: "No fue posible encontrar películas en la categoría" });
    } else {
        res.status(200).send({
            message: "¡Todas las películas recuperadas!",
            peliculas: peliculasEncontradas
        });
    }
}
  });
}

//borrarPelicula
function borrarPelicula(req, res) {
  var peliculaId= req.params.id;


  Pelicula.findByIdAndDelete(peliculaId, (err, peliculaBorrada) => {
      if (err) {
          res.status(500).send({ message: "Error en el servidor" });
      } else {
              res.status(200).send({
                  message: "¡Pelicula Borrada!",
                  pelicula: peliculaBorrada
              });
          }
        });
}
 
//buscar una película

function buscarUnaPelicula(req, res){
  var peliculaId= req.params.id;
  Pelicula.findById(peliculaId, (err, peliculaEncontrada) => {
    if (err) {
        res.status(500).send({ message: "Error en el servidor" });
    } else {
            res.status(200).send({
                message: "¡Pelicula Encontrada!",
                pelicula: peliculaEncontrada
            });
        }
      });
}



// Exportar paquete de funciones
module.exports = {
  registrarPelicula,
  subirImgPelicula,
  mostrarArchivos,
  subirVideo,
  actualizarPelicula,
  mostrarCategoria,
  busquedaPorPalabra,
  buscarTodas,
  borrarPelicula, 
  buscarUnaPelicula
}