import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

  constructor(private http: HttpClient) { }

  onGetRandomBeer() {
    console.log('here')
    return this.http.get('https://api.punkapi.com/v2/beers/random')
  }

  onGetAllBeers() {
    return this.http.get('https://api.punkapi.com/v2/beers')
  }
}
