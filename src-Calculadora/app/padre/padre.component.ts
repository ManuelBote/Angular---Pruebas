import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit{

  numero1!:number;
  numero2!:number;

  resultadoSuma!:number;
  resultadoProducto!:number;
  resultadoResta!:number;
  resultadoDivision!:number;

  ngOnInit(): void {
    this.numero1 = Math.round(Math.random()*100);
    this.numero2 = Math.round(Math.random()*100);
  }

  sumar(event : any){
    this.resultadoSuma = event.resultSuma;
  }

  multiplicar(event : any){
    this.resultadoProducto = event.resultProducto;
  }

  restar(event : any){
    this.resultadoResta = event.resultResta;
  }

  dividir(event : any){
    this.resultadoDivision = event.resultDivision;
  }

  generar(){
    location.reload();
  }


}
