import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }

  getAllMovies(type): Observable<any> {
    return this.http.get(`https://api.themoviedb.org/3/trending/${type}/day?api_key=bdd10d2b8f52bc0a5320d5c9d88bd1ff`)

  }

  getMovieDetails(id) {
    return this.http.get(`https://api.themoviedb.org/3/movie/${id}?api_key=bdd10d2b8f52bc0a5320d5c9d88bd1ff&language=en-US`)
  }
}
