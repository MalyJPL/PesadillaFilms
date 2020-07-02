import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'

// Importar el modelo de Usuario
import { Usuario } from '../../modelo/usuario';
// Importar el servicio Usuario
import { UsuarioService } from '../../service/usuario.service';

// Importar el objeto Router
// ActivatedRoute -> Nos indica una ruta activa
// Params -> Una ruta con parametros de Angular ['perfil', nombreArtista]
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {


  imagen5 = [ 'assets/img/logo.png'] ;
  imagen6 = [ 'assets/img/social/bg.jpg'] ;



  // Declaración variable usuarioRegistro
  public usuarioRegistro : Usuario;

  constructor(
    private usuarioService : UsuarioService,
    private _router : Router 
    ) {
    this.usuarioRegistro = new Usuario('', '', '', '', '', 'usuario', '', '', true);
   }

  ngOnInit(): void {
  }

  // --- Método registrarUsuario() ---
  registrarUsuario(){
    
    this.usuarioService.registro(this.usuarioRegistro).subscribe(
      (response : any) =>{
        let usuario = response.usuario;
        this.usuarioRegistro = usuario;
        console.log(JSON.stringify(this.usuarioRegistro))
        if(!this.usuarioRegistro._id){
          alert("Error al registrarse");
        }else{
          // Swal.fire(  `Registro exitoso! Inica sesión con ${this.usuarioRegistro.correo}`);

          Swal.fire({
           
            icon: 'success',
            title: `<h5> Registro exitoso! Inicia sesión con <b style="color: blue;">  ${this.usuarioRegistro.correo} </b> </h5>`,
         
            timer: 11500
          })


          this.usuarioRegistro = new Usuario('', '', '', '', '', 'usuario', '', '', true);
          this._router.navigate(['/login']);
        }
      }, 
      error =>{
        var errorMensaje = <any>error;

        if(errorMensaje != null){
          console.log(error);
        }
      }
    );
  }

  // -- Fin Método registrarUsuario() --

}
