import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// EventEmitter va de la mano con los outputs
import { Router } from '@angular/router';
// Importamos el input para traer una propiedad de afuera
@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html'
})
export class HeroeTarjetaComponent implements OnInit {
  // El input quiere decir que el héroe puede venir de afuera
  // Lo recibimos en heroes.component.html y aque heroes.component.ts es el que tiene importado
  // el servicio y tiene el metodo para traer todos los héroes
  @Input() heroe: any = {}; // Lo inicializo como un objeto vacío
  @Input() index: number;

  @Output() heroeSeleccionado: EventEmitter<number>;

  constructor(private router: Router) {
    // Se tiene que inicializar el EventEmitter
    this.heroeSeleccionado = new EventEmitter();
   }


  ngOnInit(): void {
  }

  verHeroe(): void {
    this.router.navigate(['/heroe', this.index]);
    // emit es del EventEmitter
    // this.heroeSeleccionado.emit(this.index);
  }
}
