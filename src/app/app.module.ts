import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { ObjToArrayPipe } from './pipes/objToArray.pipe';

import { DetallesComponent } from './components/detalles/detalles.component';
import { FormsModule } from '@angular/forms';
import { RickModule } from './rick/rick.module';

@NgModule({
  declarations: [
    AppComponent,
    ObjToArrayPipe,
    DetallesComponent,
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
