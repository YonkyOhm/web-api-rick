import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { ObjToArrayPipe } from './pipes/objToArray.pipe';
import { EpisodiosComponent } from './components/episodios/episodios.component';
import { DetallesComponent } from './components/detalles/detalles.component';
import { FormsModule } from '@angular/forms';
import { RickModule } from './rick/rick.module';
import { FiltroPipe } from './pipes/filtro.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    ObjToArrayPipe,
    EpisodiosComponent,
    DetallesComponent,
    FiltroPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RickModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
