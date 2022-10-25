import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',

})
export class ListadoComponent   {

  heroes : string[] = ['Spiderman','IromMAn','Thor','Hulk','Capitan Ameria'];
  heroesBorrados : string[] = [];
  borrarHeroe(){ 
    this.heroesBorrados.push(this.heroes.shift() || '');
  }

}
