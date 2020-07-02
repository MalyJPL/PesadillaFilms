import { Showtime } from './showtime';
import { Pelicula } from '../pelicula';

export interface Database {
  movies: Pelicula[];
  showtimes: Showtime[];
}
