const Lista = require('../modelo/lista');
// Importar el módulo File System de Node
const fs = require('fs');
// Importar el módulo Path de Node
const path = require('path');

function registrarLista(req, res) {
    var lista = new Lista;
    var parametros = req.body;

    lista.nombre = parametros.nombre;
    lista.usuario = parametros.usuario;
    lista.canciones = null;

    lista.save((err, listaNueva) => {
        if (err) {
            res.status(500).send({ message: "Error en el servidor" });
        } else {
            if (!listaNueva) {
                res.status(200).send({ message: "No fue posible realizar el registro" });
            } else {
                res.status(200).send({
                    message: "Lista Creada",
                    lista: listaNueva
                });
            }
        }
    });
}

function guardarCancionEnLista(req, res){
    //llamar id de lista del url y datos de canción del body
   var idLista = req.params.idLista;
   var cancion = req.body;

   //buscar en la lista de canciones si hay datos en canciones
   Lista.findById(idLista,'canciones', function (err, haycancion){

if(haycancion.canciones===null){
    console.log("entro");

   Lista.findByIdAndUpdate(idLista, 
       {canciones: cancion.idCancion},
       (err, listaActualizada)=> {
        if (err) {
            res.status(500).send({ message: "Error en el servidor" });
        } else {
            if (!listaActualizada) {
                res.status(200).send({ message: "No fue posible agregar tu canción a la lista" });
            } else {
                res.status(200).send({
                    message: "Cancion Agregada a la lista!",
                    lista: listaActualizada
                });
            }
        }
       });
    }else {
        Lista.findOne({canciones : cancion.idCancion}, function(err, estaLista) {
            if (err) {
                res.status(500).send({ message: "Error en el servidor" });
            }else{
            if(estaLista.canciones.length === 0){
                Lista.findByIdAndUpdate(idLista, 
            {$push: {canciones: cancion.idCancion}},
            (err, listaActualizada)=> {
             if (err) {
                 res.status(500).send({ message: "Error en el servidor" });
             } else {
                 if (!listaActualizada) {
                     res.status(200).send({ message: "No fue posible agregar tu canción a la lista" });
                 } else {
                     res.status(200).send({
                         message: "¡Cancion Agregada a la lista!",
                         lista: listaActualizada
                     });
                 }
             }
            });
        }else{
            res.status(200).send({
                message: "¡La canción ya existe en esta lista!",
                lista: estaLista
            });
        }
    }
        });
    }
    });
}

function mostrarListaCanciones(req, res){
var idLista = req.params.idLista;

Lista.findOne({_id: idLista}).populate('canciones').exec(function(err, listaCanciones){
    if (err) {
        res.status(500).send({ message: "Error en el servidor" });
    } else {
        if (!listaCanciones) {
            res.status(200).send({ message: "No es posible acceder a la lista de canciones" });
        } else {
            res.status(200).send({
            message: "Lista disponible",
            lista: listaCanciones
           });
            }
        }
    });
}

function mostrarListasUsuario(req,res){
    var idUsuario = req.params.idUsuario;


    Lista.find({usuario: idUsuario}).populate('canciones').exec(function(err, listasUsuario){
        if (err) {
            res.status(500).send({ message: "Error en el servidor" });
        } else {
            if (!listasUsuario) {
                res.status(200).send({ message: "No es posible acceder a la listas del usuario" });
            } else {
                res.status(200).send({
                message: "Listas disponibles",
                lista: listasUsuario
               });
                }
            }
        });
}

module.exports = {
    registrarLista,
    guardarCancionEnLista,
    mostrarListaCanciones,
    mostrarListasUsuario
}