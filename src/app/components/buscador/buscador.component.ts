import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';
@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html'
})
export class BuscadorComponent implements OnInit {
  // Un arreglo porque pueden ser varias coincidencias
  heroes: any[] = [];
  termino: string;
  constructor(private activatedRoute: ActivatedRoute, private heroesService: HeroesService, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.termino = params.termino;
      // Esto me retorna un array de heroes de la funcion buscarHeroes del service
      this.heroes = this.heroesService.buscarHeroes(params.termino);
      console.log(this.heroes);
    });
  }

  // Esto no va en services porque es una ruta, no un servicio que trae el heroe
  verHeroe(idx: number): void {
    this.router.navigate(['/heroe', idx]);
    // Es para que al clickear ver más lo envíe a la ruta del héroe
  }

}
