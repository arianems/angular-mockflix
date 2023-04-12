import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    MovieDetailsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule
  ],
  exports: [
    MovieDetailsComponent
  ]
})
export class MovieModule {}
