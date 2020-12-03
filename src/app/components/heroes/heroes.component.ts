import { Component, OnInit } from '@angular/core';
// Llamo al servicio que usaré para mostrar toda la data
import { HeroesService, Heroe } from '../../services/heroes.service'; // Heroe es la interface
import { Router } from '@angular/router'; // Esto es para la funcion verHeroe()

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {
  heroes: Heroe[] = [];

  // Completando la importación del servicio mediante el constructor
  constructor(private heroesService: HeroesService, private router: Router) {
    console.log('Constructor');
  }

  ngOnInit(): void {
    this.heroes = this.heroesService.getHeroes();
    console.log(this.heroes);
  }
  // Esto no va en services porque es una ruta, no un servicio que trae el heroe
  verHeroe(idx: number): void {
    this.router.navigate(['/heroe', idx]);
    // Es para que al clickear ver más lo envíe a la ruta del héroe
  }

}
