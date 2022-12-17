import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ApiResponse } from '../interfaces/apiResponse';
import { Movie } from '../interfaces/movies';

@Injectable({
  providedIn: 'root'
})
export class MovieService {


  private Api_url = 'https://www.omdbapi.com/?apikey=a51da8e0'

  constructor( private http: HttpClient ) { }

  getMovies( term: string ): Observable<Movie[]> {

    // const url = this.Api_url + '&s=' + term
    // return this.http.get(url)
    return this.http.get<ApiResponse>(`${this.Api_url}&s=${term}`).pipe(
      map(resp => {

        return resp.Search

      })

    )


  }



}
