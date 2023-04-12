import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environment/environment';

@Injectable({
  providedIn: 'root',
})
export class MovieAPIService {

  private dailyTrendsURL: string = `${environment.baseURL}${environment.dailyTrendsPath}${environment.apiKey}`;
  private weeklyTrendsURL: string = `${environment.baseURL}${environment.weeklyTrendsPath}${environment.apiKey}`;
  private recentlyAddedURL: string = `${environment.baseURL}${environment.moviePath}${environment.weeklyTrendsPath}${environment.apiKey}`;
  private multiSearchURL: string = `${environment.baseURL}${environment.multiSearchPath}${environment.apiKey}`;
  private movieDetailsURL : string = `${environment.baseURL}${environment.moviePath}`;

  constructor(private httpClient: HttpClient) {}

  getDailyTrends(): Observable<any> {
    return this.httpClient.get(this.dailyTrendsURL, {
      responseType: 'json',
    });
  }

  getWeeklyTrends(): Observable<any> {
    return this.httpClient.get(this.weeklyTrendsURL, {
      responseType: 'json',
    });
  }

  getByName(name: any): Observable<any> {

    let query : string = name;

    if(query.includes(' ')) {
      let result = query.replaceAll(' ', '%20');
      return this.httpClient.get(
        `${this.multiSearchURL}&query=${result}&include_adult=false`,
        {
          responseType: 'json',
        }
      );
    }
    else {
      return this.httpClient.get(
        `${environment.baseURL}${environment.multiSearchPath}${environment.apiKey}&query=${query}&include_adult=false`,
        {
          responseType: 'json',
        }
      );
    }
  }

  getById(id: string): Observable<any> {
    return this.httpClient.get(`${this.movieDetailsURL}/${id}?api_key=${environment.apiKey}`, {
      responseType: 'json',
    });
  }
}
