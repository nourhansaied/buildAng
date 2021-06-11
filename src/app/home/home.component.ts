import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  baseURL = "https://image.tmdb.org/t/p/w500"
  allMovies = [];
  allTv= []
  constructor(private _moviesService: MoviesService) { }

  ngOnInit(): void {
    this._moviesService.getAllMovies("movie").subscribe(res => {
      this.allMovies = res.results.slice(0,10)
      
    })

    this._moviesService.getAllMovies('tv').subscribe(res => {
      this.allTv = res.results.slice(0, 10)
      console.log(this.allTv);

    })
  }

  sayHi(e) {
    console.log(e,"from parent");
    
  }

}
