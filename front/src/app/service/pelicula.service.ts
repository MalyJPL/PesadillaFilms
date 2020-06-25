import { Injectable } from '@angular/core';

// Importar los módulos HttpClient y HttpHeaders
import { HttpClient, HttpHeaders } from '@angular/common/http';

// Importar el map
import { map } from 'rxjs/operators';

// Importar Observable
import { Observable } from 'rxjs';


import { stringify } from 'querystring';

@Injectable()
export class PeliculaService {

// Declarar la variable url de la api
url = 'http://localhost:3000/api/';


// Declarar variable privada de tipo HttpClient
  constructor(
    private _http : HttpClient
  ) {}


  // Declarar el método del servicio registro
  PeliculaNueva(nuevaPelicula){
    let params = JSON.stringify(nuevaPelicula);
    let options ={
      headers : new HttpHeaders({'Content-Type': 'application/json'})
    };
    return this._http.post(
      this.url + 'nuevaPelicula',
      params,
      options
    ).pipe(map(res => res))
  }


 //-------------------------------------------------------------
// Declarar el método del servicio Actualizar pelicula

  ActualizarPelicula(id,DatosNuevos){
    console.log(id);
    console.log(DatosNuevos);
    let params = JSON.stringify(DatosNuevos);
    let options = {
      headers : new HttpHeaders({'Content-Type' : 'application/json'})
    }
    return this._http.put(
      this.url + 'actualizarPelicula/' + id,
      params,
      options
    ).pipe(map(res => res));
  }
}