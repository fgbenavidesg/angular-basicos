import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  heroes : string [] = ['spiderman','goku','krilin'];
  heroeBorrado: string = '';
  
  borrarHeroe() {
    //this.heroes = [];
      this.heroeBorrado =this.heroes.shift() || '';
    //shift() borrar el primer elemento
  } 

}