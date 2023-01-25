import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Episodios } from 'src/app/interfaces/episodios';

@Component({
  selector: 'app-morty-list',
  templateUrl: './morty-list.component.html',
  styleUrls: ['./morty-list.component.scss']
})
export class MortyListComponent implements OnInit{

  page: number = 0
  search: string = '';
 
  morty: Array<any>
  rick: Array<any>

  constructor(private mortyService: ApiServiceService, private route: Router, private activated: ActivatedRoute){
    this.morty = []
    this.rick = []
  
  }
  ngOnInit(): void {
    this.mortyService.getEpisodios().subscribe(
      resp => {
        this.morty = resp
      }
    )

    this.mortyService.getPersonajes().subscribe(
      (resp:any) => {
        this.rick = resp.filter(({id}: {id: number }) => {
          if(id >= 6 ){
           return true
         }else{
          return false
         } 
         })
      }
    )
  }

  onSearchEpisodio(search: string){
    this.page = 0;
    this.search = search;
  }

  getDeatlles(){
    this.route.navigateByUrl(`detalles`)
  }

}
