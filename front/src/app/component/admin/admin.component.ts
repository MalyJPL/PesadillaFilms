import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.sass']
})
export class AdminComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
  //  ----------------------

  //  import { Component, OnInit } from '@angular/core';
  //  import { Pelicula } from '../../modelo/pelicula';
  //  import { PeliculaService} from '../../service/peliculas.service';  
  //  import { Router, ActivatedRoute, Params } from '@angular/router';
   
  //  @Component({
  //    selector: 'app-admin',
  //    templateUrl: './admin.component.html',
  //    styleUrls: ['./admin.component.sass']
  //  })
  //  export class PeliculaAdmComponent implements OnInit {
  //    public pelicula : Pelicula;
     
   
  //    constructor(
  //      private peliculaService : PeliculasService
  //    ) { 
  //      this.pelicula = new Pelicula("","","","","","","","","",0,"","","",true);
       
  //    }
   
  //    ngOnInit(): void {
  //      this.pelicula = JSON.parse(localStorage.getItem('pelicula'));
  //    }
   
  //    nuevaPelicula(){
  //      this.peliculaService.PeliculaNueva(this.pelicula).subscribe(
  //        (response : any)=> {
  //          let resultado = response.pelicula;
  //          let mensaje = response.message;
   
  //         if(!resultado){
  //           alert(mensaje);
  //         } else{
  //           localStorage.setItem('pelicula',JSON.stringify(resultado));
  //           this.pelicula = new Pelicula("","","","","","","","","",0,"","","",true);
  //           alert('pelicula guardada');
  //         }
  //        },error =>{
  //          var errorMensaje = <any>error;
  //          if(errorMensaje != null){
  //            console.log(errorMensaje);
  //          }
  //        }
  //        )
  //    }
  //    subirArchivo(dato){
   
  //    }
   
  //    actualizarPelicula(){
  //      this.peliculaService.ActualizarPelicula(this.pelicula._id,this.pelicula).subscribe((response : any)=>{
  //        let respuesta = response.pelicula;
  //        let mensaje = response.message;
  //      if(!respuesta){
  //        alert(mensaje);
  //      } else{
  //        localStorage.setItem('pelicula',JSON.stringify(respuesta));
  //        alert(mensaje);
  //      }
  //      }, error =>{
  //        let errorMensaje = <any>error;
  //        if(errorMensaje != null){
  //          console.log(errorMensaje);
  //        }
  //      })
  //    }
   
  //    subirDocumento(){
   
  //    }
  //  }