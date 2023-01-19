import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  url = 'https://rickandmortyapi.com/api/episode'
  urlP = 'https://rickandmortyapi.com/api/character'

  constructor(private http: HttpClient) { }

  getEpisodios(){
    return this.http.get(this.url);
  }

  getPersonajes(){
    return this.http.get(this.urlP);
  }
}
