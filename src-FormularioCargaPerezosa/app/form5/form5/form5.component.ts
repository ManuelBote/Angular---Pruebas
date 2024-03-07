import { Component } from '@angular/core';

@Component({
  selector: 'app-form5',
  templateUrl: './form5.component.html',
  styleUrls: ['./form5.component.css']
})
export class Form5Component {

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
