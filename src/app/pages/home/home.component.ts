import { Component, OnInit } from '@angular/core';
import { MovieAPIService } from 'src/app/movie/movie-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private movieService : MovieAPIService) {

  }

  ngOnInit(): void {
    this.movieService.getDailyTrends().subscribe({
      next: (n) => {
        console.log(n);
      },
      error: (err) => {
        console.log(err);
      }
    })

  }

  getTrendingWeekly() {

  }

}
