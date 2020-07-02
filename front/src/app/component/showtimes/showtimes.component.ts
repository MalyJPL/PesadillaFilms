import { Component, OnInit, Input, SimpleChange, SimpleChanges, OnChanges } from '@angular/core';
import { Movie } from '../../interface/movie';
import { DatabaseService } from '../../service/database.service';
import { ShowtimeDate } from '../../modelo/showtime-date';
import { Pelicula} from '../../modelo/pelicula';
import { PeliculaService } from '../../service/pelicula.service';


@Component({
  selector: 'app-showtimes',
  templateUrl: './showtimes.component.html',
  styleUrls: ['./showtimes.component.sass']
})
export class ShowtimesComponent implements OnInit, OnChanges {
  @Input() movie: Pelicula;
  @Input() showAllTimes: boolean;
  @Input() filterDate: string;
  showtimes: ShowtimeDate[];

  constructor(private db: DatabaseService) { }

  ngOnInit() {
    this.getShowtimes();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['showAllTimes']) {
      this.getShowtimes();
    }
  }

  getShowtimes(): void {
    this.db.getMovieShowtimes(this.movie, this.filterDate, this.showAllTimes).subscribe(showtimes => this.showtimes = showtimes);
  }
}
