import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroesModule } from './heroes/heroes.module';
import { ContadorModule } from './contador/contador.module';



@NgModule({
  //colocar componentes creados
  declarations: [
    AppComponent,
  ],
  // importar modulos
  imports: [
    BrowserModule,
    HeroesModule,
    ContadorModule
  ],
  providers: [],//servicios especificos
  bootstrap: [AppComponent]//modulu principal 
})
export class AppModule { }
