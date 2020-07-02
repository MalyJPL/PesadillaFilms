import { DatabaseService } from './../../service/database.service';
import { Component, OnInit, Input, SimpleChanges, OnChanges, TemplateRef } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Pelicula} from '../../modelo/pelicula';
import { PeliculaService } from '../../service/pelicula.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.sass']
})
export class MoviesListComponent implements OnInit, OnChanges {
  movies: Pelicula[];
  showAllTimes: boolean[] = [];
  @Input() filterDate: string;
  modalRef: BsModalRef;
  previewUrl = '';
  public url : String;

  constructor(
    private db: DatabaseService, 
    private modalService: BsModalService,
     private sanitizer: DomSanitizer,
     private peliculaService: PeliculaService
     ) { 
      this.url = peliculaService.url;
     }

  ngOnInit() {
    this.getMovies();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['filterDate']) {
      this.getMovies();
    }
  }

  // get playing movie based on filter date

  getMovies() {
    this.peliculaService.todasLasPeliculas().subscribe(
      (response: any)=>{
        this.movies = response.peliculas;
         //obtener la rut completa y no solo el nombre
         for(let i = 0; i< this.movies.length; i++){
          this.movies[i].cover = this.url+'obtener-archivo/'+ this.movies[i]._id+'/'+'cover';
          this.movies[i].wallpaper = this.url+'obtener-archivo/'+ this.movies[i]._id+'/'+'wallpaper';
          this.movies[i].trailer = this.url+'obtener-archivo/'+ this.movies[i]._id+'/'+'trailer';
  }
  
        if (!this.movies) {
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
  // show all showtimes
  showAllShowtimes(titulo: string): void {
    this.showAllTimes[titulo] = true;
  }

  // hide all showtimes
  hideAllShowtimes(titulo: string): void {
    this.showAllTimes[titulo] = false;
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
