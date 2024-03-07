import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hortaliza',
  templateUrl: './hortaliza.component.html',
  styleUrls: ['./hortaliza.component.css']
})
export class HortalizaComponent {
enviaMensaje() {
  this.mensajeDeSalidaHortaliza.emit();
}

enviarPlantones() {
  this.nSemillero.emit({numAlt1:Math.round(Math.random()*100)})
}

  @Input() mensajeDeEntradaHortaliza:string= '';
  @Output() mensajeDeSalidaHortaliza= new EventEmitter();
  @Output() nSemillero = new EventEmitter();

  mensajeParaHuerto:string="";

  numeroSemillero:number=0;

}
