import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { ActivatedRoute, Router } from '@angular/router';

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
      resp => {
        this.rick = resp
      }
    )
  }

  onSearchEpisodio(search: string){
    this.page = 0;
    this.search = search;
  }

}
