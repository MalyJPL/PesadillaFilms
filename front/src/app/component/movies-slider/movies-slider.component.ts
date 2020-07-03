import { Movie } from './../../interface/movie';
import { Pelicula } from '../../modelo/pelicula';
import { DatabaseService } from './../../service/database.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-movies-slider',
  templateUrl: './movies-slider.component.html',
  styleUrls: ['./movies-slider.component.sass']
})
export class MoviesSliderComponent implements OnInit {
  @Input() limit: number;
  public carrusel: any[];

  constructor(private db: DatabaseService) { }

  ngOnInit() {
    this.infoCarrusel();
  }

  infoCarrusel() {
    this.carrusel = [
      {_id:"1", titulo:"El conjuro", imgcarrusel: "https://www.xtrafondos.com/wallpapers/el-conjuro-726.jpg"},
      {_id:"2", titulo:"La masacre de Texas", imgcarrusel: "http://images2.fanpop.com/images/photos/3200000/The-Texas-Chainsaw-Massacre-2006-wallpapers-the-texas-chainsaw-massacre-3277942-1280-1024.jpg"},
      {_id:"3", titulo:"El amanecer de los muertos", imgcarrusel: "https://www.wallpaperup.com/uploads/wallpapers/2014/01/26/238033/8f4f993a878ac03bf963eaa30379e04e.jpg"}
    ]
  }
}
