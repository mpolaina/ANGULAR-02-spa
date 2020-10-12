import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../servicios/heroes.service';
import { Router } from '@angular/router'


@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [
  ]
})
export class BusquedaComponent implements OnInit {

  heroes:any[] = []
  termino:string

  constructor( private activatedRoute: ActivatedRoute,
                private _heroesService: HeroesService,
                private router: Router) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe( params => {

      this.termino = params['termino']

      this.heroes = this._heroesService.buscarHeroes( params['termino'])

    })
  }

  verHeroe(index){
    this.router.navigate( ['/heroe', index] )
  }

}
