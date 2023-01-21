import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-episodios',
  templateUrl: './episodios.component.html',
  styleUrls: ['./episodios.component.scss']
})
export class EpisodiosComponent implements OnInit{

  episodios: any 
  personajes: Array<any>
  constructor(private service: ApiServiceService, private route:Router ){
    this.personajes = []
  }

  ngOnInit(): void {
    this.service.getEpisodios().subscribe(
      (res: any) => {
        this.episodios = res.results
        console.log(res)
      }
    )

    this.service.getPersonajes().subscribe(
      (res: any) => {
       
        this.personajes = res.results.filter(({id}: { id: number}) => {
          if(id >= 6 ){
            return true
          }else{
            return false
          } 

        })
      }
    );

  }


  getComponent(){
    this.route.navigateByUrl('detalles/:id')
    
  }
}
