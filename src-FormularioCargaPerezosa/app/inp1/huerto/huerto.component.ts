import { Component } from '@angular/core';

@Component({
  selector: 'app-huerto',
  templateUrl: './huerto.component.html',
  styleUrls: ['./huerto.component.css']
})
export class HuertoComponent {

  mensajeDeHortaliza: any;

  peticionesSemilla: any;

  actualizaMensajeDeHortaliza(event: any) {
    this.mensajeDeHortaliza = event.mh
  }
  actualizarNumeroSemilleros(event: any) {
    this.peticionesPlantones = event.s
  }
  mensajeParaHortaliza: any;


  mensajeParaFrutal: any;

  peticionesPlantones: any;

  actualizaMensajeDeHortalizaF(event: any) {
    this.mensajeDeFrutal = event.mf
  }
  actualizarNumeroPlantones(event: any) {
    this.peticionesPlantones = event.p
  }

  mensajeDeFrutal: any;

}
