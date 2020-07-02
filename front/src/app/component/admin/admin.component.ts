import { Component, OnInit } from '@angular/core';
// Importar el modelo de Usuario
import { Usuario } from '../../modelo/usuario';
import { Pelicula } from '../../modelo/pelicula';
// Importar el servicio Usuario
import { UsuarioService } from '../../service/usuario.service';
import { PeliculaService } from '../../service/pelicula.service';

import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  public usuario: Usuario;
  public listaUsuarios: Usuario[];
  public peliculaRegistrada: Pelicula;
  // Declarar la variable archivoSubir de tipo File
  public archivoSubirTrailer: File;
  public archivoSubirCover: File;
  public archivoSubirWallpaper: File;
  public idPeliculaActualizada: String;
  // Declarar la variable url
  public url: String;

  constructor(
    private usuarioService: UsuarioService,
    private peliculaService: PeliculaService,
    private _router: Router
  ) {
    this.peliculaRegistrada = new Pelicula('', '', '', '', '', '', '', '', '', '', '', true);
    this.url = peliculaService.url;
  }

  ngOnInit(): void {

    this.mostrarUsuarios();
  }
  // Método subirArchivo
  subirArchivoTrailer(fileInput: any) {
    this.archivoSubirTrailer = <File>fileInput.target.files[0];
  }
  // Método subirArchivo
  subirArchivoCover(fileInput: any) {
    this.archivoSubirCover = <File>fileInput.target.files[0];
  }

  subirArchivoWallpaper(fileInput: any) {
    this.archivoSubirWallpaper = <File>fileInput.target.files[0];
  }

  //método registrar película 
  registrarPelicula() {
   
    this.peliculaService.registrarPelicula(this.peliculaRegistrada).subscribe(
      (response: any) => {
        let pelicula = response.pelicula;
        this.peliculaRegistrada = pelicula;
        this.idPeliculaActualizada = JSON.stringify(this.peliculaRegistrada._id);
        this.idPeliculaActualizada = this.idPeliculaActualizada.substring(1, this.idPeliculaActualizada.length - 1 )
        if (!this.peliculaRegistrada._id) {
          alert("Error al registrar película");
        } else {
                   alert("Registro de película exitoso");
   /*        this.peliculaRegistrada = new Pelicula('', '', '', '', '', '', '', '', '', '', '', true);
          this._router.navigate(['/admin']); */
        }
         

    //registrar archivos de película
    if (!this.archivoSubirTrailer) {
     console.log('No hay ningún trailer')
    } else {
      console.log('Has incluido el trailer')
      //llamar servicio guardar traileer
       console.log(JSON.stringify(`el id de la película es: ${this.idPeliculaActualizada}`));
      this.peliculaService.cargarTrailer(this.archivoSubirTrailer, this.idPeliculaActualizada).subscribe(
        (result: any) => {
          console.log(`trailer guardado: ${result}`)
        }
      )
    }

    if (!this.archivoSubirCover) {
      console.log('No hay ningún cover')
    } else {
      console.log('Has incluido el cover')
      //llamar servicio guardar cover
      this.peliculaService.cargarCover(this.archivoSubirCover, this.idPeliculaActualizada).subscribe(
        (result: any) => {
          console.log(`cover guardado: ${result}`)
        }
      )
    }

    if (!this.archivoSubirWallpaper) {
      console.log('No hay ningún wallpaper')
    } else {
      console.log('Has incluido el wallpaper')
      //llamar servicio guardar traileer
      this.peliculaService.cargarWallpaper(this.archivoSubirWallpaper, this.idPeliculaActualizada).subscribe(
        (result: any) => {
          console.log(`wallpaper guardado: ${result}`)
        }
      )
    }
  },
  error => {
    var errorMensaje = <any>error;
    if (errorMensaje != null) {
      console.log(`Error al registrar película: ${JSON.stringify(error)}`)
    }
  });
  }

  //funcion para mostrar lista de usuarios
mostrarUsuarios(){
  this.usuarioService.listarUsuarios().subscribe(
    (response: any)=>{
      this.listaUsuarios = response.usuarios;
    },error => {
      var errorMensaje = <any>error;
      if (errorMensaje != null) {
        console.log(`Error al listar usuarios: ${JSON.stringify(error)}`)
      }
    }
  )}
}