import { Component, OnInit } from '@angular/core';
import { MovieAPIService } from '../movie-api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
})
export class MovieDetailsComponent implements OnInit{

  private movieId : string | null = '';
  movie : any = [];

  constructor(
    private movieService: MovieAPIService,
    private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.movieId = this.activatedRoute.snapshot.paramMap.get('id');
    this.getMovie(this.movieId);
  }

  getMovie(id: any) {
    this.movieService.getById(id).subscribe({
      next: (n) => {
        this.movie = n;
        console.log(this.movie);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
