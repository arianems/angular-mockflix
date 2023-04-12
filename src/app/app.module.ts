import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './core/components/nav-bar/nav-bar.component';
import { MainCardComponent } from './shared/components/main-card/main-card.component';
import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { MovieModule } from './movie/movie.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { MovieAPIService } from './movie/movie-api.service';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeModule } from './home/home.module';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    MovieModule,
    HomeModule,
    HttpClientModule
  ],
  providers: [MovieAPIService],
  bootstrap: [AppComponent],
})
export class AppModule {}
