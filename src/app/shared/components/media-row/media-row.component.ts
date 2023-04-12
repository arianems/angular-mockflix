import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieAPIService } from 'src/app/movie/movie-api.service';

@Component({
  selector: 'app-media-row',
  templateUrl: './media-row.component.html',
  styleUrls: ['./media-row.component.css']
})
export class MediaRowComponent implements OnInit {

  @Input() rowtitle : string = '';
  @Input() mediaresults : any[] = [];

  constructor(private movieService : MovieAPIService) {

  }

  ngOnInit(): void {

  }


}
