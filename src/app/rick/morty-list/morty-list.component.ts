import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Character, Result } from 'src/app/interfaces/episodios';

@Component({
  selector: 'app-morty-list',
  templateUrl: './morty-list.component.html',
  styleUrls: ['./morty-list.component.scss'],
})
export class MortyListComponent implements OnInit {
 
  morty: Array<any>;
  rick: Array<any>;

  constructor(
    private mortyService: ApiServiceService,
    private route: Router,
    private activated: ActivatedRoute
  ) {
    this.morty = [];
    this.rick = [];
    //let id = this.activated.snapshot.paramMap.get('id') || '';
   
  }
  ngOnInit(): void {
    // this.mortyService.getPersonajes().subscribe((resp: any) => {
    //   this.rick = resp.filter(({ id }: { id: number }) => {
    //     if (id >= 6) {
    //       return true;
    //     } else {
    //       return false;
    //     }
    //   });
    // });

    
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
          this.morty = resp.map((episodio: Result) => {
            return {
              id: episodio.id,
              nombre: episodio.name,
              emision: episodio.air_date,
              temporada: episodio.episode,
              personajes: episodio.characters
                .sort(() => (Math.random() > 0.5 ? 1 : -1))
                .slice(6, 9),
            };
          });
        },
        (err) => {}
      );
    }
  }

  

  getDeatlles() {
    this.route.navigateByUrl(`detalles/`);
  }
}
