import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit{
  
  id1Seleccionado = 'id'
  id2Seleccionado = 'id'
  //seleccion: any
  episodios: any 
  constructor(private service: ApiServiceService, private route:Router, private activated: ActivatedRoute){
    
  }
  ngOnInit(): void {

    this.service.getEpisodios().subscribe(
      (res: any) => {
        this.episodios = res.results
        console.log(res)
      }
    )
  }
  // getComponent(){
  //   this.route.navigateByUrl('episodios/:id')
  //   this.seleccion = this.service.getEpisodios().subscribe(
  //     (res: any) => {
  //       res.results.filter(({id}: { id: number }) => {
         
  //       })
      
  //     }
  //   )
  // }

  buscarEpisodio(){
    this.route.navigateByUrl(`episodios/${this.id1Seleccionado}:${this.id2Seleccionado}`)
    console.log(this.id1Seleccionado)
    console.log(this.id2Seleccionado)

    fetch('https://rickandmortyapi.com/api/episode/'+this.id1Seleccionado+this.id2Seleccionado)
    .then(res => res.json())
    .then(data => {
    
  })
    
  }

}
