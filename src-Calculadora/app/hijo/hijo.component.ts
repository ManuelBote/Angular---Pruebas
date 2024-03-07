import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit{

  @Input() numeroRandom1 = 0;
  @Input() numeroRandom2 = 0;

  @Output() suma= new EventEmitter();
  @Output() producto= new EventEmitter();
  @Output() resta= new EventEmitter();
  @Output() division= new EventEmitter();

  resultadoS!:number;
  resultadoP!:number;
  resultadoR!:number;
  resultadoD!:number;


  ngOnInit(): void {
    this.generar();

  }

  generar(){
    this.resultadoS=this.numeroRandom1+this.numeroRandom2;
    this.suma.emit({resultSuma:this.resultadoS});

    this.resultadoR=this.numeroRandom1-this.numeroRandom2;
    this.resta.emit({resultResta:this.resultadoR});

    this.resultadoP=this.numeroRandom1*this.numeroRandom2;
    this.producto.emit({resultProducto:this.resultadoP});

    this.resultadoD=this.numeroRandom1/this.numeroRandom2;
    this.division.emit({resultDivision:this.resultadoD});
  }


}
