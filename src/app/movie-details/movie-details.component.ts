import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
  baseURL = "https://image.tmdb.org/t/p/w500"

  movieId: any = '';
  movieDetails:any ={}
  constructor(private _activatedRoute: ActivatedRoute, private _moviesService: MoviesService) {

    this.movieId = this._activatedRoute.snapshot.params.bl7;
    // console.log(x);


    this._moviesService.getMovieDetails(this.movieId).subscribe(res => {
      console.log(res);
      this.movieDetails  = res
      
    })
    
   }

  ngOnInit(): void {
  }

}
