import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetallesComponent } from './components/detalles/detalles.component';
import { EpisodiosComponent } from './components/episodios/episodios.component';
import { MortyListComponent } from './rick/morty-list/morty-list.component';

const routes: Routes = [
  {path: 'home', component: MortyListComponent},
  {path: 'episodios/:id', component: EpisodiosComponent},
  {path: 'detalles/:id', component: DetallesComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
