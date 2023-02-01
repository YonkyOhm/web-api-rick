import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MortyListComponent } from './morty-list/morty-list.component';
import { FiltroPipe } from '../pipes/filtro.pipe';
import {RouterModule} from '@angular/router'




@NgModule({
  declarations: [
    MortyListComponent,
    FiltroPipe,
    
   
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    MortyListComponent
  ]
})
export class RickModule { }
