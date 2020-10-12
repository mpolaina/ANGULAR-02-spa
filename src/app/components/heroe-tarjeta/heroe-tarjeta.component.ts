import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styles: [
  ]
})
export class HeroeTarjetaComponent implements OnInit {

  @Input() heroe:any = {}
  @Input() index:number

  @Output() heroeSeleccionado: EventEmitter<number>

  constructor( private router: Router) {

    this.heroeSeleccionado = new EventEmitter()

  }

  ngOnInit(): void {
  }

  verHeroe(){
    this.router.navigate( ['/heroe', this.index])

    // EMITIR EVENTO DE HIJO A PADRE
    // this.heroeSeleccionado.emit( this.index )
  }

}
