import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-episodios',
  templateUrl: './episodios.component.html',
  styleUrls: ['./episodios.component.scss'],
})
export class EpisodiosComponent implements OnInit {
  episodios: any;
  personajes: Array<any>;
  constructor(private service: ApiServiceService, private route: Router) {
    this.personajes = [];
  }

  ngOnInit(): void {
    this.service.getEpisodios().subscribe(
      (res: any) => {
      
      this.episodios = res;
      console.log(res);
    });

    this.service.getPersonajes().subscribe((res: any) => {
      
      this.personajes = res.filter(({ id }: { id: number }) => {
        if (id >= 6) {
          return true;
        } else {
          return false;
        }
      });
    });
  }

  getComponent(id1: number, id2: number): any {
    
    if(id1 < id2){
      return this.route.navigateByUrl('detalles/:id');
    }else{
      let contArray = this.getComponent(id1, id2 - 1)
      contArray?.push(id2)

      return contArray
    }
  }
}
