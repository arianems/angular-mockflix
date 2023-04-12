import { Component, OnInit } from '@angular/core';
import { MovieAPIService } from 'src/app/movie/movie-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  mainbanner :any = [];

  trendingRow :any[] = [];

  constructor(private movieService : MovieAPIService) {

  }

  ngOnInit(): void {
    this.getDailyTrends();
    this.getWeeklyTrends();
  }

  getDailyTrends() {
    this.movieService.getDailyTrends().subscribe({
      next: (n) => {
        this.mainbanner = n.results;
        console.log(this.mainbanner);

      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  getWeeklyTrends() {
    this.movieService.getWeeklyTrends().subscribe({
      next: (n) => {
        this.trendingRow = n.results;

      },
      error: (err) => {
        console.log(err);
      }
    })
  }

}
