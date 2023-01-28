import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AllEpisodeRespon, Character, Result } from '../interfaces/episodios';
import { map } from 'rxjs';
import { AllPersonajesRespon } from '../interfaces/personajes';

@Injectable({
  providedIn: 'root',
})
export class ApiServiceService {
  url = 'https://rickandmortyapi.com/api/episode';
  urlP = 'https://rickandmortyapi.com/api/character';

  constructor(private http: HttpClient) {}

  getEpisodiosInRange(n: number, m: number) {
    let range = '';
    for (let i = n; i <= m; i++) {
      range += `${i},`;
    }
    return this.http.get<AllEpisodeRespon>(`${this.url}/${range}`);
    //.pipe(map(this.transformIntoCharecter));
  }

  getPersonajes() {
    return this.http
      .get<AllPersonajesRespon>(this.urlP)
      .pipe(map(this.transformIntoCharecter));
  }

  private transformIntoCharecter(resp: AllPersonajesRespon) {
    const rickList = resp.results.map((rick) => {
      const urlArr2 = rick.url.split('/');
      const id = urlArr2[5];
      console.log(urlArr2);

      const pic = `https://rickandmortyapi.com/api/character/avatar/${id}.jpeg`;
      return {
        id: id,
        name: rick.name,
        status: rick.status,
        specie: rick.species,
        gender: rick.gender,
        episode: rick.episode,
        pic,
      };
    });
    return rickList;
  }
  
  public getCharacter(id: number) {
    return this.http.get('https://rickandmortyapi.com/api/character/' + id);
  }
}
