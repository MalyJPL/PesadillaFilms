import { FilterDate } from '../../modelo/filter-date';
import { Component, OnInit, Input } from '@angular/core';
import { Pelicula} from '../../modelo/pelicula';
import { PeliculaService } from '../../service/pelicula.service';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.sass']
})
export class MoviesComponent implements OnInit {
  filters: FilterDate[];
  selectedDate: string;

  constructor() { }

  ngOnInit() {
    this.getFilters();
  }

  // get filters value, text to display
  getFilters() {
    const weekday = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
    const date = new Date();
    this.filters = [];
    this.selectedDate = this.dateToString(date);

    for (let i = 0; i < 7; i++) {
      this.filters.push({ date: this.dateToString(date), day:  i === 0 ? 'Hoy' : weekday[date.getDay()] });
      date.setDate(date.getDate() + 1);
    }

    this.filters.push({ date: 'all', day: 'Toda la semana' });
  }

  // change filter
  changeFilter(date: string) {
    this.selectedDate = date;
  }

  // date to string mm/dd/yyyy
  private dateToString(date: Date): string {
    return (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear();
  }
}
