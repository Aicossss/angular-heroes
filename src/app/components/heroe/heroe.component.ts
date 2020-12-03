import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';
@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [
  ]
})
export class HeroeComponent implements OnInit {
  heroe: any = {};

  // En minúscula para indicar que es una variable
  constructor(private activatedRoute: ActivatedRoute, private heroesService: HeroesService, private router: Router) {
    this.activatedRoute.params.subscribe(params => {
      // El params trae el idx que envié en
      // this.router.navigate(['/heroe', idx]);
      // del heroes.component.ts ya que aqui redirecciona a la ventana del heroe
      console.log(params);
      // el params me trae {id: 1}, si pongo params.id solo escribe 1
      // Me trae id porque en el path de las rutas le puse heroe/:id

      this.heroe = this.heroesService.getHeroe(params.id);
      console.log(this.heroe);
    });
  }

  ngOnInit(): void {
  }

}
