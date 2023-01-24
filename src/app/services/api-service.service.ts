import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AllEpisodeRespon } from '../interfaces/episodios';
import { map } from 'rxjs';
import { AllPersonajesRespon } from '../interfaces/personajes';

@Injectable({
  providedIn: 'root',
})
export class ApiServiceService {
  url = 'https://rickandmortyapi.com/api/episode';
  urlP = 'https://rickandmortyapi.com/api/character';

  constructor(private http: HttpClient) {}

  getEpisodios() {
    return this.http
      .get<AllEpisodeRespon>(this.url)
      .pipe(map(this.transformIntoEpisodie));
  }

  private transformIntoEpisodie(resp: AllEpisodeRespon) {
    const mortyList = resp.results.map((morty) => {
      const urlArr = morty.url.split('/');
      const id = urlArr[5];
      return {
        id: id,
        episode: morty.air_date,
        name: morty.name,
        episodes: morty.episode,
        characters: morty.characters
      };
    });
    return mortyList;
  }

  getPersonajes() {
    return this.http
      .get<AllPersonajesRespon>(this.urlP)
      .pipe(map(this.transformIntoCharecter));
  }

  private transformIntoCharecter(resp: AllPersonajesRespon) {
    const rickList = resp.results.map((rick) => {
      const urlArr2= rick.url.split('/');
      const id = urlArr2[5];
      console.log(urlArr2)

      const pic = `https://rickandmortyapi.com/api/character/avatar/${id}.jpeg`
      return {
        id: id,
        name: rick.name,
        status: rick.status,
        specie: rick.species,
        gender: rick.gender,
        episode: rick.episode,
        pic

      };
    });
    return rickList;
  }

}
