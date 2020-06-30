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
    console.log(`La pelicula enviada al servicio es: ${JSON.stringify(this.peliculaRegistrada)}`)
    this.peliculaService.registrarPelicula(this.peliculaRegistrada).subscribe(
      (response: any) => {
        let pelicula = response.pelicula;
        this.peliculaRegistrada = pelicula;
        this.idPeliculaActualizada = this.peliculaRegistrada._id;

        if (!this.peliculaRegistrada._id) {
          alert("Error al registrar película");
        } else {
          alert("Registro de película exitoso");
          this.peliculaRegistrada = new Pelicula('', '', '', '', '', '', '', '', '', '', '', true);
          this._router.navigate(['/admin']);
        }
      },
      error => {
        var errorMensaje = <any>error;
        if (errorMensaje != null) {
          console.log(`Error al registrar película: ${JSON.stringify(error)}`)
        }
      }
    );

    //registrar archivos de película
    if (!this.archivoSubirTrailer) {
      alert('No hay ningún trailer')
    } else {
      alert('Has incluido el trailer')
      //llamar servicio guardar traileer
      this.peliculaService.cargarTrailer(this.archivoSubirTrailer, this.idPeliculaActualizada).subscribe(
        (result: any) => {
          console.log(`trailer guardado: ${result}`)
        }
      )
    }

    if (!this.archivoSubirCover) {
      alert('No hay ningún cover')
    } else {
      alert('Has incluido el cover')
      //llamar servicio guardar cover
      this.peliculaService.cargarCover(this.archivoSubirCover, this.idPeliculaActualizada).subscribe(
        (result: any) => {
          console.log(`cover guardado: ${result}`)
        }
      )
    }

    if (!this.archivoSubirWallpaper) {
      alert('No hay ningún wallpaper')
    } else {
      alert('Has incluido el wallpaper')
      //llamar servicio guardar traileer
      this.peliculaService.cargarWallpaper(this.archivoSubirWallpaper, this.idPeliculaActualizada).subscribe(
        (result: any) => {
          console.log(`wallpaper guardado: ${result}`)
        }
      )
    }
  }
}