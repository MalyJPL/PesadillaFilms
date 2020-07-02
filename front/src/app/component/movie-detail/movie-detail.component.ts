import { Pelicula } from '../../modelo/pelicula';
import { DomSanitizer } from '@angular/platform-browser';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { DatabaseService } from './../../service/database.service';
import { PeliculaService } from '../../service/pelicula.service';
import { Component, OnInit, Input, TemplateRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.sass']
})
export class MovieDetailComponent implements OnInit {
  showAllTimes = false;
  modalRef: BsModalRef;
  movie: any;
  public url : String;
  public membresia : String;

  constructor(
    private route: ActivatedRoute,
    private db: DatabaseService,
    private modalService: BsModalService,
    private sanitizer: DomSanitizer,
    private peliculaService: PeliculaService
    ) {
      this.url = peliculaService.url;
     }

  ngOnInit() {
    this.getMovie();
  }

  getMovie(){
    //tomar id de película de la ruta url
    let urlId = window.location.href;  
    let arregloUrlId = urlId.split("/");
    var final = arregloUrlId.length - 1;
    const id= arregloUrlId[final];
    this.peliculaService.obtenerPelicula(id).subscribe(
(response: any)=>{
  this.movie = response.pelicula;
    console.log(`Esta pelicula ${JSON.stringify(this.movie)}`);
            this.movie.cover = this.url+'obtener-archivo/'+ this.movie._id+'/'+'cover';
            this.movie.wallpaper = this.url+'obtener-archivo/'+ this.movie._id+'/'+'wallpaper';
            this.movie.trailer = this.url+'obtener-archivo/'+ this.movie._id+'/'+'trailer';
            if (!this.movie) {
              console.log("No se pudo recuperar película");
             } else {
               console.log("película recuperada");
       }
      },
       error=>{
        var errorMensaje = <any>error;
    if (errorMensaje != null) {
      console.log(`Error al recuperar la pelicula: ${JSON.stringify(error)}`)
      }
    }
    );
          
//ocultar o mostrar link online
this.membresia = JSON.parse(localStorage.getItem('sesion')).membresia
if(this.membresia !== 'anabelle'){
document.getElementById('veronline').innerHTML = '<b> Accede con una membresía ANABELLE para tener acceso en línea </b>'
}

  }

  // show all showtimes
  showAllShowtimes(): void {
    this.showAllTimes = true;
  }

  // hide all showtimes
  hideAllShowtimes(): void {
    this.showAllTimes = false;
  }

  getBackdropUrl() {
    return this.movie.wallpaper;
  }

  openModal(template: TemplateRef<any>, previewUrl: string) {
    this.modalRef = this.modalService.show(template);
    this.modalRef.setClass('modal-lg');
  }

  getPreviewUrl() {
    return this.movie.trailer;
  }

  getEmbedUrl(url: string) {
    return url.replace('https://www.youtube.com/watch?v=', 'https://www.youtube.com/embed/');
  }
}
