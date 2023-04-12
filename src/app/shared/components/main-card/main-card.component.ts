import { AfterViewInit, Component, Input, OnChanges, OnInit } from '@angular/core';
import { MovieAPIService } from 'src/app/movie/movie-api.service';

@Component({
  selector: 'app-main-card',
  templateUrl: './main-card.component.html',
  styleUrls: ['./main-card.component.css'],
})
export class MainCardComponent implements OnChanges {
  ngOnChanges(): void {
    console.log(this.mediaresults);
  }
  @Input() mediaresults: any = [];
  currentIndex: number = 0;

}
