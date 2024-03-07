import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hortaliza',
  templateUrl: './hortaliza.component.html',
  styleUrls: ['./hortaliza.component.css']
})
export class HortalizaComponent {

  enviaMensaje() {
    this.mensajeDeSalidaHortaliza.emit({mh:this.mensajeParaHuerto});
  }

  enviarSemilleros() {
    this.nsemillero.emit({s:Math.round(Math.random()*100)})
  }

    @Input() mensajeDeEntradaHortaliza:string= '';
    @Output() mensajeDeSalidaHortaliza= new EventEmitter();
    @Output() nsemillero = new EventEmitter();

    mensajeParaHuerto:string="";

    numeroSemillero:number=0;

}
