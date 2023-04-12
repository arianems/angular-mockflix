import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MediaDetailsComponent } from './components/media-details/media-details.component';
import { MediaRowComponent } from './components/media-row/media-row.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MainCardComponent } from './components/main-card/main-card.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MediaGridComponent } from './components/media-grid/media-grid.component';

@NgModule({
  declarations: [
    MediaDetailsComponent,
    MediaRowComponent,
    MainCardComponent,
    MediaGridComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    MediaDetailsComponent,
    MediaRowComponent,
    MainCardComponent,
    MediaGridComponent
  ]
})
export class SharedModule { }
