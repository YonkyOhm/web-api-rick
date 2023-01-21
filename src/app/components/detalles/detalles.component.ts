import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.scss']
})
export class DetallesComponent implements OnInit{

  personajes: any
  constructor(private service: ApiServiceService, private route:Router, private activated: ActivatedRoute){

  }
  ngOnInit(): void {
    let personajeId = this.activated.snapshot.paramMap.get('id') || '';
    console.log(personajeId)
    

    this.service.getPersonajes().subscribe(
      (res: any) => {
        this.personajes = res.results.filter(({id}: { id: number }) => {
          if(id >= 6 ){
           return true
          }else{
            return false
          } 
        })
      }
    );
  }

}
