import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, take } from 'rxjs';
import { Character } from 'src/app/interfaces/episodios';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.scss']
})
export class DetallesComponent implements OnInit{
  morty: Array<any>
  rick: Array<any>

  character$: Observable<Character> | undefined;
  personajes: any
  constructor(private service: ApiServiceService, private route:Router, private activated: ActivatedRoute){
    this.morty = []
    this.rick = []
    
  }
  ngOnInit(): void {
    // this.service.getPersonajes(n,m).subscribe(
    //   (resp: any) => {
      
    //     this.rick = resp.filter(({id}: { id: number }) => {
    //        if(id >= 6 ){
    //         return true
    //       }else{
    //        return false
    //       } 
    //       })
    //   }
    // );

    
    this.activated.params.pipe(take(1)).subscribe((params) => {
      const id = params['id'];
      this.character$ = this.service.getDetails(id);
    });
  }

  getRegreso(){
    this.route.navigateByUrl(`home`)
  }

}
