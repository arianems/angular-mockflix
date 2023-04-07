import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './core/components/nav-bar/nav-bar.component';
import { MainCardComponent } from './components/main-card/main-card.component';
import { HomeComponent } from './pages/home/home.component';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './pages/search/search.component';
import { MovieModule } from './movie/movie.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { MovieAPIService } from './movie/movie-api.service';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    MainCardComponent,
    HomeComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    MovieModule,
    HttpClientModule
  ],
  providers: [MovieAPIService],
  bootstrap: [AppComponent],
})
export class AppModule {}
