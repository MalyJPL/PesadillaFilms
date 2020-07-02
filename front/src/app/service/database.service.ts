import { ShowtimeDate } from '../modelo/showtime-date';
import { Observable, of } from 'rxjs';
import { map, catchError, switchMap, concatMap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Pelicula } from '../modelo/pelicula';
import { Showtime } from '../modelo/showtime';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  private moviesUrl = 'http://localhost:3000/api/buscar-todas';
  private showtimesUrl = 'http://localhost:3000/api/buscar-showtimes';

  constructor(private http: HttpClient) { }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T>  => {
      console.log(error);

      return of(result as T);
    };
  }

  // Get all movies
  getMovies(limit?: number, exclude?: String | string[]): Observable<Pelicula[]> {
    return this.http.get<Pelicula[]>(this.moviesUrl).pipe(
      map(movies => {
        let excludes: String | String[] = [];

        if (exclude) {
          if (typeof exclude === 'number') {
            excludes = [exclude];
          } else {
            excludes = exclude;
          }

                  }

        return limit ? movies.slice(0, limit) : movies;
      }),
      catchError(this.handleError<Pelicula[]>(`getMovies`, []))
    );
  }

  // Get now playing moving
  getNowPlayingMovies(filterDate: string = 'all'): Observable<Pelicula[]> {
    let today = null;
    let next6days = null;

    if (filterDate === 'all') {
      today = new Date();
      next6days = new Date();
      today.setHours(0, 0, 0, 0);
      next6days.setHours(0, 0, 0, 0);
      next6days.setDate(next6days.getDate() + 6);
    } else {
      today = new Date(filterDate);
    }

    return this.http.get<Showtime[]>(this.showtimesUrl)
      .pipe(
        map(showtimes => showtimes.filter(showtime =>
          showtime.showtimes.filter(showtimesDate => {
            const showtimeDate = new Date(showtimesDate.date);

            return filterDate === 'all' ? showtimeDate >= today && showtimeDate <= next6days : showtimeDate.getDate() === today.getDate();
          }).length > 0
        )),
        concatMap(showtimes => this.http.get<Pelicula[]>(this.moviesUrl)
          .pipe(
            map(movies => movies.filter(movie => showtimes.filter(showtime => movie.titulo === showtime.titulo).length > 0))
          )),
        catchError(this.handleError('getNowPlayingMovies', []))
      );
  }

  // Get movie showtimes
  getMovieShowtimes(movie: Pelicula | number, filterDate: string, showAllTimes: boolean = false): Observable<ShowtimeDate[]> {
    let movieTitulo = null;

    if (typeof movie === 'object') {
      movieTitulo = movie.titulo;
    } if (typeof movie === 'string') {
      movieTitulo = movie;
    }

    //
    const date = showAllTimes || filterDate === 'all' ? new Date() : new Date(filterDate);
    const next6days = new Date();
    date.setHours(0, 0, 0, 0);
    next6days.setHours(0, 0, 0, 0);
    next6days.setDate(next6days.getDate() + 6);

    return this.http.get<Showtime[]>(this.showtimesUrl)
      .pipe(
        map(showtimes => showtimes.filter(showtime => {
          let flag = 0;

          showtime.showtimes = showtime.showtimes.filter(showtimesDate => {
            const showtimeDate = new Date(showtimesDate.date);
            return showAllTimes || filterDate === 'all' && !flag++ ? showtimeDate >= date && showtimeDate <= next6days : showtimeDate.getTime() === date.getTime();
          });

          return showtime.titulo === movieTitulo;
        })),
        map(showtimes => showtimes.length ? showtimes[0].showtimes : []),
        catchError(this.handleError('getNowPlayingMovies', []))
      );
  }

  // get single movie
  getMovie(id: number): Observable<Pelicula> {
    const url = `${this.moviesUrl}/${id}`;
    return this.http.get<Pelicula>(url).pipe(
      catchError(this.handleError<Pelicula>(`getMovie id = {id}`))
    );
  }

  // search movies
  searchMovies(term: string): Observable<Pelicula[]> {
    if (!term.trim()) {
      return of([]);
    }

    return this.http.get<Pelicula[]>(`${this.moviesUrl}/?title=${term}`).pipe(
      catchError(this.handleError<Pelicula[]>(`searchMovies`, []))
    );
  }
}
