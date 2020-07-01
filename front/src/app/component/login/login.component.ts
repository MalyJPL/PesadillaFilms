import { Component, OnInit } from '@angular/core';

import Swal from 'sweetalert2'


// Importar el modelo
import { Usuario } from '../../modelo/usuario';
// Importar el servicio
import { UsuarioService } from '../../service/usuario.service';

// Importar el manejador de rutas
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

//-------------- Insertar imagenes
  imagen1 = [ 'assets/img/social/facebook.png'] ;
  imagen2 = [ 'assets/img/social/instagram.png'] ;
  imagen3 = [ 'assets/img/social/linkedin.png'] ;
  imagen4 = [ 'assets/img/social/twitter.png'] ;
  imagen5 = [ 'assets/img/logo.png'] ;
  imagen6 = [ 'assets/img/social/bg.jpg'] ;

  // Declarar la variable login de tipo Usuario
  public login : Usuario;
  // Declarar la variable identidad
  public identidad;

  constructor(
    private usuarioService : UsuarioService,
    private _router : Router
  ) { 
    this.login = new Usuario('', '', '', '', '', 'usuario', '');
  }

  ngOnInit(): void {
  }

  

  // -- Método loginUsuario que consumirá el servicio iniciarSesion --
  loginUsuario(){
    this.usuarioService.iniciarSesion(this.login).subscribe(
      (response : any)=>{
        // this.login = response.usuario
        let usuario = response.usuario;
        this.login = usuario;

        
        if(this.login){
          let usuarioLogueado = new Usuario(
            this.login._id,
            this.login.nombre,
            this.login.apellido,
            this.login.correo,
            this.login.contrasena,
            this.login.rol,
            this.login.imagen
          );

          // Crear el objeto localStorage
          localStorage.setItem('sesion', JSON.stringify(usuarioLogueado));
          // Consumir el servicio obtenerNombreUsuario
          this.identidad = this.usuarioService.obtenerNombreUsuario();

          // alert(`Hola ${this.identidad.nombre}!! Bienvenid@`);

          Swal.fire({           
            icon: 'success',
            title: `<h5> Hola  <b> ${this.identidad.nombre}!!</b>  Bienvenid@</h5>`,         
            timer: 11500
          })



          // Redireccion al perfil
          this._router.navigate(['/cancion-todas']);

        }else{
          // alert('Usuario no identificado');

          Swal.fire({           
            icon: 'error',
            title: `Usuario no identificado`,         
            timer: 11500
          })



        }
        // Cierre validación usuario logueado
      }, error =>{
        if(error != null){
          console.log(error);
        }
      }
    );
  }
  // -- Fin Método --

}
