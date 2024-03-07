import { Component } from '@angular/core';
import { endWith } from 'rxjs';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent {
actualizarHoras(event: any) {
  this.horas=event.h
}
actualizaMinutos(event: any) {
  this.minutos= event.m;
}
actualizarSegundos(event: any) {
  this.segundos=event.s
}
actualizarDecimas(event: any) {
  this.decimas=event.d
}

  decimas:number = 0;
  segundos:number = 0;
  minutos:number = 0;
  horas:number = 0;

}
