import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-media-grid',
  templateUrl: './media-grid.component.html',
  styleUrls: ['./media-grid.component.css']
})
export class MediaGridComponent implements OnInit {

ngOnInit(): void {
  this.checkLoadingState();
}

@Input() gridtitle : string = '';
@Input() mediaresults :any[] = [];
@Input() linkpath : string = '';
@Output() selectedMedia = new EventEmitter<any>();

hasLoaded : boolean = false;

checkLoadingState() {
  this.hasLoaded = true;
}

getSelectedMedia(mediaType:any) {
  this.selectedMedia.emit(mediaType);
}

}
