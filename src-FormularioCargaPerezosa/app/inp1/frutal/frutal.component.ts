import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-frutal',
  templateUrl: './frutal.component.html',
  styleUrls: ['./frutal.component.css']
})
export class FrutalComponent {

  enviaMensaje() {
    this.mensajeDeSalidaHortaliza.emit({sf:this.mensajeParaHuerto});
  }

  enviarPlantones() {
    this.nplantones.emit({p:Math.round(Math.random()*100)})
  }

    @Input() mensajeDeEntradaFrutal:string= '';
    @Output() mensajeDeSalidaHortaliza= new EventEmitter();
    @Output() nplantones = new EventEmitter();

    mensajeParaHuerto:string="";

}
