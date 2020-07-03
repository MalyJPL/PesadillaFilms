/* import { Movie } from './../../interface/movie'; */
import { Pelicula} from '../../modelo/pelicula';
/* import { DatabaseService } from './../../service/database.service'; */
import { PeliculaService } from '../../service/pelicula.service';

import { Component, OnInit, Input, TemplateRef } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-movies-grid',
  templateUrl: './movies-grid.component.html',
  styleUrls: ['./movies-grid.component.sass']
})
export class MoviesGridComponent implements OnInit {
  @Input() limit: number;
  @Input() columns: number;
  @Input() exclude?: number | number[];
  public peliculas: any[];
  public archivoMostrar: String;
  modalRef: BsModalRef;
  previewUrl = '';
    // Declarar la variable url
  public url : String;

  constructor(
    private peliculaService : PeliculaService, 
    private modalService: BsModalService, 
    private sanitizer: DomSanitizer) { 
      this.url = peliculaService.url;
    }

  ngOnInit() {
    this.getMovies();
    
  }

  getMovies() {
    this.peliculaService.todasLasPeliculas().subscribe(
      (response: any)=>{
        this.peliculas = response.peliculas;
         for(let i = 0; i< this.peliculas.length; i++){
          this.peliculas[i].cover = this.url+'obtener-archivo/'+ this.peliculas[i]._id+'/'+'cover';
          this.peliculas[i].wallpaper = this.url+'obtener-archivo/'+ this.peliculas[i]._id+'/'+'wallpaper';
          this.peliculas[i].trailer = this.url+'obtener-archivo/'+ this.peliculas[i]._id+'/'+'trailer';
  //obtener la rut completa y no solo el nombre
  console.log(`La pelicula ${i} tiene datos: ${JSON.stringify(this.peliculas[i])}`)
  }
        if (!this.peliculas) {
         console.log("No se pudo recuperar películas");
        } else {
          console.log("películas recuperadas");
        }
      },
      error=>{
        var errorMensaje = <any>error;
    if (errorMensaje != null) {
      console.log(`Error al recuperar todas las peliculas: ${JSON.stringify(error)}`)
      }
    }
    );
  }


  openModal(template: TemplateRef<any>, previewUrl: string) {
    this.previewUrl = previewUrl;
    this.modalRef = this.modalService.show(template);
    this.modalRef.setClass('modal-lg');
  }

  getPreviewUrl() {
    return this.previewUrl;
  }

  getEmbedUrl(url: string) {
    return url.replace('https://www.youtube.com/watch?v=', 'https://www.youtube.com/embed/');
  }
}
