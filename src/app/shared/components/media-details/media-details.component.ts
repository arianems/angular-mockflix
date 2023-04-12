import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-media-details',
  templateUrl: './media-details.component.html',
  styleUrls: ['./media-details.component.css']
})
export class MediaDetailsComponent implements OnInit {
  ngOnInit(): void {
    console.log(this.media);
  }

  @Input() media : any = [];


}
