import { Injectable } from '@angular/core';

// Importar los módulos HttpClient y HttpHeaders
import { HttpClient, HttpHeaders } from '@angular/common/http';

// Importar el map
import { map } from 'rxjs/operators';

// Importar Observable
import { Observable } from 'rxjs';


import { stringify } from 'querystring';
import { Pelicula } from '../modelo/pelicula';



@Injectable()
export class PeliculaService {

// Declarar la variable url de la api
url = 'http://localhost:3000/api/';


  // Declarar la variable pelicula registrad
 

// Declarar variable privada de tipo HttpClient
  constructor(
    private _http : HttpClient
  ) {}


  // Declarar el método del servicio registro
  registrarPelicula(peliculaRegistrada){
    let params = JSON.stringify(peliculaRegistrada);
    let options ={
      headers : new HttpHeaders({'Content-Type': 'application/json'})
    };
    return this._http.post(
      this.url + 'registrar-pelicula',
      params,
      options
    ).pipe(map(res => res))
  }

///----subir archivos
cargarTrailer(file: File, id){
  let formData = new FormData();
   formData.append('video', file);
    return this._http.put(
      this.url + 'subir-video/' + id,
      formData
    ).pipe(map(res => res));
  }

cargarCover(file: File, id){
  let formData = new FormData();
   formData.append('imagen', file);
    return this._http.put(
      this.url + 'subir-cover/' + id + '/cover',
      formData
    ).pipe(map(res => res));
  }

cargarWallpaper(file: File, id){
  let formData = new FormData();
   formData.append('imagen', file);
    return this._http.put(
      this.url + 'subir-wallpaper/' + id + '/wallpaper',
      formData
    ).pipe(map(res => res));
  }

  
  obtenerCategoria(categoria){
    return this._http
    .get(this.url + 'buscar-categoria/' + categoria)
    .pipe(map((res) => res));
  }



 todasLasPeliculas(){
    return this._http.get(
      this.url + 'buscar-todas'
      ).pipe(map(res  => res));
  }

  obtenerPelicula(id){
        return this._http.get(
      this.url + 'buscar-pelicula/'+id
      ).pipe(map(res => res));
  }


  listarPeliculas(){
    return this._http.get(
      this.url + 'lista-peliculas'
      ).pipe(map(res  => res));
  }





}

 





