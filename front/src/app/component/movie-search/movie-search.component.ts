import { DatabaseService } from './../../service/database.service';
import { Movie } from './../../interface/movie';
import { Observable, Subject } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Pelicula} from '../../modelo/pelicula';
import { PeliculaService } from '../../service/pelicula.service';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.sass']
})
export class MovieSearchComponent implements OnInit {
  movies$: Observable<Pelicula[]>;
  private searchTerms = new Subject<string>();


  constructor(private db: DatabaseService) { }

  ngOnInit() {
    this.movies$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.db.searchMovies(term))
    );
  }

  search(term: string): void {
    this.searchTerms.next(term);
  }

}
