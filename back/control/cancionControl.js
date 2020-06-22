const Cancion = require("../modelo/cancion");
// Importar el módulo File System de Node
const fs = require("fs");
// Importar el módulo Path de Node
const path = require("path");

// Función Registro Cancion
function registrarCancion(req, res) {
  var cancion = new Cancion();
  var parametros = req.body;

  cancion.nombre = parametros.nombre;
  cancion.album = parametros.album;
  cancion.emocion = parametros.emocion;
  cancion.genero = parametros.genero;
  cancion.artista = parametros.artista; // podemos quemar en la BD el registro del cancion con rol admin
  cancion.anio = parametros.anio;
  cancion.archivo = null;
  cancion.imagen = null;

  // funcion save para interactuar con la BD
  cancion.save((err, cancionNueva) => {
    if (err) {
      res.status(500).send({ message: "Error en el servidor" });
    } else {
      if (!cancionNueva) {
        res
          .status(200)
          .send({ message: "No fue posible realizar el registro" });
      } else {
        res.status(200).send({
          message: "Canción Creada",
          cancion: cancionNueva,
        });
      }
    }
  })
}

// Función Login

// Función Actualizar Cancion
function actualizarCancion(req, res) {
  var cancionId = req.params.id;
  var nuevosDatosCancion = req.body;

  Cancion.findByIdAndUpdate(
    cancionId,
    nuevosDatosCancion,
    (err, cancionActualizada) => {
      if (err) {
        res.status(500).send({ message: "Error en el servidor" });
      } else {
        if (!cancionActualizada) {
          res
            .status(200)
            .send({ message: "No fue posible actualizar tu canción" });
        } else {
          res.status(200).send({
            message: "¡Cancion Actualizada!",
            cancion: nuevosDatosCancion,
          });
        }
      }
    }
  );
}

// Función Subir IMG
function subirImgCancion(req, res) {
  var cancionId = req.params.id;
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
      Cancion.findByIdAndUpdate(
        cancionId,
        { imagen: nombreArchivo },
        (err, cancionConImg) => {
          if (err) {
            res.status(500).send({ message: "Error en el servidor" });
          } else {
            if (!cancionConImg) {
              res
                .status(200)
                .send({ message: "No fue posible subir la imagen" });
            } else {
              res.status(200).send({
                message: "Imagen anexada!",
                imagen: nombreArchivo,
                cancion: cancionConImg,
              });
            }
          }
        }
      );
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
function mostrarImgCancion(req, res) {
  // Pedir el archivo que queremos mostrar
  // localhost:3000/api/obtenerImagen/:imageFile
  var archivo = req.params.imageFile;
  // Ubicación del archivo
  var ruta = "./archivos/canciones/imagenes/" + archivo;

  // Validar si existe o no
  // fs.exists('la ruta del archivo a buscar', (existencia)=>{})
  fs.exists(ruta, (exists) => {
    if (exists) {
      res.sendFile(path.resolve(ruta));
    } else {
      res.status(200).send({ message: "Imagen no Encontrada" });
    }
  });
}

function mostrarCanciones(req, res)  {
 
    Cancion.find((err, cancionesArchivo) => {
          if (err) {
            res.status(500).send({ message: "Error en el servidor" });
          } else {
            if (!cancionesArchivo) {
              res
                .status(200)
                .send({ message: "No fue posible recuperar canciones" });
            } else {
              res.status(200).send({
                message: "¡Canciones recuperadas!",
                canciones: cancionesArchivo,
              });
            }
          }
        }
      );
    }
// Funcion subir cancion
function subirArchivoCancion(req, res) {
  var cancionId = req.params.id;
  var nombreArchivo = "No has subido ninguna canción!";

  if (req.files) {
    var rutaArchivo = req.files.archivo.path;
    console.log(`ruta Archivo: ${rutaArchivo}`);

    var partirArchivo = rutaArchivo.split("\\");
    console.log(`partir Archivo: ${partirArchivo}`);

    // var nombreArchivo = partirArchivo[2];
    var final = partirArchivo.length - 1;
    console.log(final);
    var nombreArchivo = partirArchivo[final];
    console.log(`Posición dato: ${nombreArchivo}`);

    var extensionImg = nombreArchivo.split(".");
    console.log(`partirImg: ${extensionImg}`);

    var extensionArchivo = extensionImg[1];
    console.log(`Extensión Archivo: ${extensionArchivo}`);

    if (
      extensionArchivo == "mp3" ||
      extensionArchivo == "flac" ||
      extensionArchivo == "wav"
    ) {
      // Actualizar del usuario el campo imagen
      Cancion.findByIdAndUpdate(
        cancionId,
        { cancion: nombreArchivo },
        (err, cancionConArchivo) => {
          if (err) {
            res.status(500).send({ message: "Error en el servidor" });
          } else {
            if (!cancionConArchivo) {
              res
                .status(200)
                .send({ message: "No fue posible subir la canción" });
            } else {
              res.status(200).send({
                message: "¡Canción anexada!",
                archivo: nombreArchivo,
                cancion: cancionConArchivo,
              });
            }
          }
        }
      );
    } else {
      // Formato no válido
      res
        .status(200)
        .send({ message: "Formato inválido! El archivo no es una canción" });
    }
  } else {
    res.status(200).send({ message: "No has subido canciones" });
  }
}
// Funcion mostrar cancion
function mostrarArchivoCancion(req, res) {
  var archivo = req.params.cancionFile;
  // Ubicación del archivo
  var ruta = "./archivos/canciones/musica/" + archivo;

  // Validar si existe o no
  // fs.exists('la ruta del archivo a buscar', (existencia)=>{})
  fs.exists(ruta, (exists) => {
    if (exists) {
      res.sendFile(path.resolve(ruta));
    } else {
      res.status(200).send({ message: "Canción no Encontrada" });
    }
  });
}

// Exportar paquete de funciones
module.exports = {
  registrarCancion,
  actualizarCancion,
  subirImgCancion,
  mostrarImgCancion,
  subirArchivoCancion,
  mostrarArchivoCancion,
  mostrarCanciones
};
