import { Component, OnInit, OnDestroy } from '@angular/core';
import {
  Subject,
  Subscription,
  debounceTime,
  distinctUntilChanged,
  switchMap,
} from 'rxjs';

import { MovieAPIService } from 'src/app/movie/movie-api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  searchresult: any[] = [];
  subscriptions: Subscription[] = [];
  private input = new Subject<string>();
  selectedMedia : any;
  linkpath = '';

  constructor(private movieService: MovieAPIService) {}

  ngOnInit(): void {}

  //#region Live Search using Subjects

  onChange(event: any) {
    this.input.next(event.target.value);
  }

  getMediaType(event: any) {
    this.selectedMedia = event;
    console.log(this.selectedMedia);

  }

  readonly subscription = this.input
    .pipe(
      debounceTime(1000),
      distinctUntilChanged(),
      switchMap((value) => this.movieService.getByName(value))
    )
    .subscribe({
      next: (n) => {
        let result: any[] = n.results;
        this.searchresult = result
          .sort((a, b) => b.popularity - a.popularity)
          .filter((value) => value.poster_path != null);
      },

      error: (err) => {
        //TODO: error handling
        console.log(err);
      },
    });

  //#endregion

  /* ------- conventional search method
  -------------- triggered when user clicks the search button [removed]

    /* reactive form declaration
  searchForm = new FormGroup({
    mediaName: new FormControl(null),
  });

  submitForm() {
    this.movieService.getByName(this.searchForm.value.mediaName).subscribe({
      next: (n) => {
        console.log(n);
        this.searchresult = n.results;
        this.searchresult.sort((a, b) => b.popularity - a.popularity);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  */

  /* ------------ livesearch using subscriptions and setTimeOut()
  updateInput(event: any) {
    this.cancelPendingRequests();

    var input = event.target.value;

    if (input.length == 0) {
      this.searchresult = [];
    }

    setTimeout(() => {
      const subscription = this.movieService.getByName(input).subscribe({
        next: (n) => {
          console.log(n);
          this.searchresult = n.results;
          this.searchresult = this.searchresult
            .sort((a, b) => b.popularity - a.popularity)
            .filter((value) => value.poster_path != null);
        },

        //TODO: error handling
        error: (err) => {
          console.log(err);
        },
      });

      this.subscriptions.push(subscription);
    }, 3000);
  }
  */

  /* unsubscribing method to be called by ngOnDestroy()
  ----------  switchMap() does not require unsubscribing
  cancelPendingRequests() {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }
  */
}
