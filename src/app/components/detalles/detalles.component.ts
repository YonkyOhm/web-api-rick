import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, take } from 'rxjs';
import { Character } from 'src/app/interfaces/episodios';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.scss'],
})
export class DetallesComponent implements OnInit {
 

  id: number;
  character:any = [];
  
  constructor(private service: ApiServiceService, private route: Router, private activated: ActivatedRoute) {
    this.id = 0
    activated.params.subscribe((prm) => {
      this.id = prm['id'];
    });

   
  }
  ngOnInit(): void {

    this.service.getCharacter(this.id)
        .subscribe(data => {
            this.character = data;
    }); 
  }

 
  getRegreso() {
    this.route.navigateByUrl(`home`);
  }
}
