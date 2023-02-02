import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Character, Result } from 'src/app/interfaces/episodios';
import { AllPersonajesRespon, ResultP } from 'src/app/interfaces/personajes';

@Component({
  selector: 'app-morty-list',
  templateUrl: './morty-list.component.html',
  styleUrls: ['./morty-list.component.scss'],
})
export class MortyListComponent implements OnInit {
  morty: Array<any>;
  rick: Array<any>;

  id: string[];
  character: any = [];


  personaje: Array<any>

  constructor(
    private mortyService: ApiServiceService,
    private route: Router,
    private activated: ActivatedRoute
  ) {
    this.morty = [];
    this.rick = [];
    this.id = [];

   
    this.personaje = []
  }

  ngOnInit(): void {
    // this.activated.params.subscribe((prm) => {
    //   this.id = prm['id'];
    // });
    // this.activated.snapshot.paramMap.get('id')
    
    // this.mortyService.getData().subscribe(
    //   (data:any) => {
    //     this.character = data
    // });
    // this.mortyService.getCharacter(this.id).subscribe((data) => {
    //   this.character = data['results']
    // });
    //   this.mortyService.getPersonajes().subscribe((resp: any) => {
    //     this.rick = resp
    //       .filter(({ id }: { id: number }) => id >= 6)
    //       // .map((personaje: ResultP)=>{
    //       //   return{
    //       //     id: personaje.id,
    //       //     name: personaje.name,
    //       //     status: personaje.status,
    //       //     species: personaje.species,
    //       //     gender: personaje.gender,
    //       //     image: personaje.image
    //       //   }
    //       // })
    //       .sort(() => (Math.random() > 0.5 ? 1 : -1))
    //       .slice(0, 3);
    //   });
  }

  listarEp(inicio: string, final: string) {
    let n = Number(inicio);
    let m = Number(final);

    if (!Number.isNaN(n) && n > 0 && !Number.isNaN(m) && m > 0) {
      if (n > m) {
        [n, m] = [m, n];
      }
      this.mortyService.getEpisodiosInRange(n, m).subscribe(
        (resp: any) => {
          let morty = resp.map((episodio: Result) => {
            return {
              id: episodio.id,
              name: episodio.name,
              air_date: episodio.air_date,
              episode: episodio.episode,
              character: episodio.characters
                .sort(() => (Math.random() > 0.5 ? 1 : -1))
                .slice(6,9),
            };
          });
          this.morty = morty
          console.log(morty)
        },
        (err) => {}
      );
    }

    this.mortyService.getPersonajes(n, m).subscribe(
      (resp: any) => {
        this.rick = resp
          .filter(({ id }: { id: number }) => id >= 6)
          .sort(() => (Math.random() > 0.5 ? 1 : -1))
          .slice(0, 3);
      },
      (err) => {}
    );
  }

  getDeatlles() {
    this.route.navigateByUrl(`detalles/${this.id}`);
  }
}
