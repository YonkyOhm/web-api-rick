import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.scss']
})
export class DetallesComponent implements OnInit{
  morty: Array<any>
  rick: Array<any>

  personajes: any
  constructor(private service: ApiServiceService, private route:Router, private activated: ActivatedRoute){
    this.morty = []
    this.rick = []
  }
  ngOnInit(): void {
    this.service.getPersonajes().subscribe(
      (resp: any) => {
      
        this.rick = resp.filter(({id}: { id: number }) => {
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
