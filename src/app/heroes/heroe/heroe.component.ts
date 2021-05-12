import { Component } from "@angular/core";

@Component({
  selector: 'app-heroe',
  templateUrl: 'heroe.component.html'
})
export class HeroeComponent {
  nombre: string = 'Ironman';
  edad: number = 50;

  get nombreCapitalizado (): string {
    return this.nombre.toUpperCase();
  }

  obtenerNombre(): string {
    return `${this.nombre } - ${this.edad} `;
  }

  cambiarNombre (): void {
    this.nombre= 'Superman';
  }

  cambiarEdad (): void {
    this.edad= 25;
  }
}
