import { Component, OnInit } from '@angular/core';
import { Pelicula } from "../../modelo/pelicula";
import { PeliculaService } from "../../service/pelicula.service";
import Swal from 'sweetalert2';

// Importar el manejador de rutas
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.sass']
})

export class CategoriasComponent implements OnInit {
  public identidad;
  public categorias : any=[];
  public url : string;
  public membresia : string;
  constructor(
      public peliculaService : PeliculaService,
          private _router: Router

  ) {      this.url = peliculaService.url
 }



  ngOnInit(){
      this.mostrarCategoria();
  }

  mostrarCategoria(){
  
    
   let urlCategoria = window.location.href;  
    let arregloUrlCategoria = urlCategoria.split("/");
    var final = arregloUrlCategoria.length - 1;
    const categoria= arregloUrlCategoria[final];
    this.peliculaService.obtenerCategoria(categoria).subscribe(
      (response : any)=>{
        this.categorias = response.peliculas;
                 for(let i = 0; i< this.categorias.length; i++){

          this.categorias[i].cover = this.url+'obtener-archivo/'+ this.categorias[i]._id+'/'+'cover';
          this.categorias[i].wallpaper = this.url+'obtener-archivo/'+ this.categorias[i]._id+'/'+'wallpaper';
          this.categorias[i].trailer = this.url+'obtener-archivo/'+ this.categorias[i]._id+'/'+'trailer';
          console.log("pelicula categoria " + JSON.stringify(this.categorias[i]) )
  }
      }
    )
      this.membresia = JSON.parse(localStorage.getItem('sesion')).membresia
if(this.membresia !== 'anabelle'){
document.getElementById('ver').innerHTML = ''
}
   }
   }
