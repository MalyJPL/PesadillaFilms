import { Component, OnInit  } from '@angular/core';
import Swal from 'sweetalert2'

declare const myTest: any;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  constructor(){

  }
  public pagina = window.location.pathname;
  title = 'Angular-Cinema';



}
