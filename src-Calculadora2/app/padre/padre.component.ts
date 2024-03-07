import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent{

  numero1: number = 0;
  numero2: number = 0;

  recibir1(event:any){
    this.numero1=event.numAlt1;
  }

  recibir2(event:any){
    this.numero2=event.numAlt2;
  }

  resultadoSuma:number = 0;
  resultadoResta:number = 0;
  resultadoProducto:number = 0;
  resultadoDivision:number = 0;

  calcular(){
    this.resultadoSuma = this.numero1+this.numero2;
    this.resultadoResta = this.numero1-this.numero2;
    this.resultadoProducto = this.numero1*this.numero2;
    this.resultadoDivision = this.numero1/this.numero2;
  }

  generar(){
    location.reload();
  }

}
