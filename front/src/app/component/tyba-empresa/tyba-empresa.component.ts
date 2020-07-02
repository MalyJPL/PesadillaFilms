import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tyba-empresa',
  templateUrl: './tyba-empresa.component.html',
  styleUrls: ['./tyba-empresa.component.css']
})
export class TybaEmpresaComponent implements OnInit {
  logo = [ 'assets/img/tyba/tyba.jpg'] ;
  mali = [ 'assets/img/tyba/mali.jpg'] ;
  richard = [ 'assets/img/tyba/ric.jpg'] ;
  angie = [ 'assets/img/tyba/angie.jpg'] ;
  flotante = [ 'assets/img/tyba/ma.gif'] ;
  grupo = [ 'assets/img/tyba/team.jpg'] ;
  di = [ 'assets/img/tyba/di.jpg'] ;
  diseño = [ 'assets/img/tyba/diseño.jpg'] ;
  grafico = [ 'assets/img/tyba/grafico.jpg'] ;
  eco = [ 'assets/img/tyba/eco.jpg'] ;
  servicios = [ 'assets/img/tyba/servicios.jpg'] ;
  equipo = [ 'assets/img/tyba/equipo.jpg'] ;
  compro = [ 'assets/img/tyba/comp.jpg'] ;
  tec = [ 'assets/img/tyba/tec.jpg'] ;
  camilo = [ 'assets/img/tyba/cam.jpg'] ;




  constructor() { }

  ngOnInit(): void {
  }

}
