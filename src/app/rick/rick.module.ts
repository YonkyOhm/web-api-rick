import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MortyListComponent } from './morty-list/morty-list.component';



@NgModule({
  declarations: [
    MortyListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MortyListComponent
  ]
})
export class RickModule { }
