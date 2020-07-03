import { Component, OnInit  } from '@angular/core';
import Swal from 'sweetalert2'
import { Router, ActivatedRoute, Params } from '@angular/router';
import {Usuario } from 'src/app/modelo/usuario';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  public pagina: String;
  public title: String;

  constructor(
    private _router : Router
  ){  }

  ngOnInit(){
    this.inicio();
    this.ocultar();
  }

  inicio(){

this.pagina = window.location.pathname;
  this.title = 'Angular-Cinema';
  let tipoUsuario = JSON.parse(localStorage.getItem('sesion'));

  if(!tipoUsuario || tipoUsuario==null){
    document.getElementById('menuRegistrado').style.display = 'none';
  } else if(tipoUsuario !== null) {
    
  console.log(`el usuario es ${JSON.stringify(tipoUsuario)} y el rol es ${JSON.stringify(tipoUsuario.rol)}`)
    document.getElementById('menuNoRegistrado').style.display = 'none';
    if(tipoUsuario.rol !== "admin"){
      document.getElementById('menuAdmin').style.display = 'none';
    }
  }
}

cerrarSesion(){/* 
  localStorage.removeItem('sesion'); */
  localStorage.clear();
  this._router.navigate(['/login']);
  this.inicio()
  
}

ocultar(){
  let ruta = window.location.href.split("/");
  const categoria= ruta[ruta.length-1];
  if(categoria ==="tyba-empresa" || categoria === "intro"){
    document.getElementById('encabezado').style.display='none';
    document.getElementById('footer').style.display='none';
  }

}
}
