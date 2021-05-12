import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  heroes: string[] = ['Spiderman', 'Hulk', 'Ironman'];
  heroeBorrado: string = '';
  heroeBorradoMostrar: boolean = false;

  constructor() {}

  borrarHeroe(): void {
    this.heroeBorrado = this.heroes.shift() || '';
  }
}
