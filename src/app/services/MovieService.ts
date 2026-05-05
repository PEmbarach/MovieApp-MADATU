import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor (private httpClient:HttpClient){}

  getTrendingMovies(){
    return this.httpClient.get(`${environment.apiBaseUrl}/trending/movie/day?api_key=${environment.apiKey}`);
  }

  searchMovies(query:string){
    return this.httpClient.get(`${environment.apiBaseUrl}/search/movie?query=${query}&api_key=${environment.apiKey}`)
  }

  getMovieCredits(id:number){
    return this.httpClient.get(`${environment.apiBaseUrl}/movie/${id}/credits?api_key=${environment.apiKey}`)
  }

  getPersonDetails(personId:number){
    return this.httpClient.get(`${environment.apiBaseUrl}/person/${personId}?api_key=${environment.apiKey}`)
  }

  getPersonMovieCredits(personId:number){
    return this.httpClient.get(`${environment.apiBaseUrl}/person/${personId}/movie_credits?api_key=${environment.apiKey}`)
  }
}