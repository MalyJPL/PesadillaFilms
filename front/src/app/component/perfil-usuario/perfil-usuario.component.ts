
import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../modelo/usuario';
import { UsuarioService } from '../../service/usuario.service';
import Swal from 'sweetalert2';
// Importar el manejador de rutas
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.component.html',
  styleUrls: ['./perfil-usuario.component.sass']
})
export class PerfilUsuarioComponent implements OnInit {

  imagen5 = [ 'assets/img/logo.png'] ;

  // Declarar la variable usuarioActualizar
  public usuarioActualizar : Usuario;
  // Declarar la variable archivoSubir de tipo File
  public archivoSubir : File;
  // Declarar la variable identidad
  public identidad;
  // Declarar la variable url
  public url : String;

  constructor(
    private usuarioService : UsuarioService,
    private _router : Router  //ruta para el menu
  ) { 
    this.url = usuarioService.url;
  }

  ngOnInit(): void {
    // usuarioActualizar = {nombre: 'Pepe', apellido: 'Pepito'}
    this.usuarioActualizar = JSON.parse(localStorage.getItem('sesion'));
    this.identidad = this.usuarioService.obtenerNombreUsuario();
  }
  // Método subirArchivo
  subirArchivo(fileInput : any){
    this.archivoSubir = <File>fileInput.target.files[0];
  }
  // --------------------------------------------------------
  // Método actualizarUsuario
  actualizarUsuario(){
    this.usuarioService.editarUsuario(this.usuarioActualizar._id, this.usuarioActualizar).subscribe(
      (response : any)=>{
        if(response.usuario){

            Swal.fire({           
            icon: 'success',
            title: `<h5> ¡Tus datos han sido Actualizados correctamente !!</h5>`,         
            timer: 11500
          });

          localStorage.setItem('sesion', JSON.stringify(this.usuarioActualizar));

          // Validación y consumo del servicio de la carga de imagen 
          if(!this.archivoSubir){
            

            Swal.fire({           
              icon: 'warning',
              title: `<h5> No hay ninguna imagen</h5>`,         
              timer: 11500
            });
            
          }else{            

            Swal.fire({           
              icon: 'success',
              title: `<h5> Tu imagen es ${this.archivoSubir.name}</h5>`,         
              timer: 11500
            });

            this.usuarioService.cargarImagenUsuario(this.archivoSubir, this.usuarioActualizar._id).subscribe(
              (result : any )=>{
                this.usuarioActualizar.imagen = result.imagen;
                localStorage.setItem('sesion', JSON.stringify(this.usuarioActualizar));

                // Mostrar la imagen
                let rutaImagen = this.url+'obtenerImagen/'+this.usuarioActualizar.imagen;
                // document.getElementById('mostrarImagen').setAttribute('src', rutaImagen);
                document.getElementById('imgUsuario').setAttribute('src', rutaImagen);
                // Cierre mostrar imagen

              }
            );
          }
          // Cierre Validación

           // Redireccion al perfil
           this._router.navigate(['/menu']);

        }else {
         
          Swal.fire({           
            icon: 'error',
            title: `<h5> No fue posible actualizar tus datos. </h5>`,         
            timer: 11500
          });

        } 

        // Cierre response
      }, error =>{
        if(error != null){
          console.log(error);
        } 
      }
    );
  }

}
