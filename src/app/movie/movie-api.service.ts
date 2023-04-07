import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environment/environment';

@Injectable({
  providedIn: 'root',
})
export class MovieAPIService {
  constructor(private httpClient: HttpClient) {}

  getWeeklyTrends(): Observable<any> {
    return this.httpClient.get(
      `${environment.baseURL}${environment.trendingMoviesWeek}${environment.apiKey}`,
      {
        responseType: 'json',
      }
    );
  }

  getDailyTrends(): Observable<any> {
    return this.httpClient.get(
      `${environment.baseURL}${environment.trendingMoviesDay}${environment.apiKey}`,
      {
        responseType: 'json',
      }
    );
  }

  getById(id: string): Observable<any> {
    return this.httpClient.get('url' + id, {
      responseType: 'json',
    });
  }
}
