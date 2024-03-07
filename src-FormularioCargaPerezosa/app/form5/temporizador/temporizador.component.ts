import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-temporizador',
  templateUrl: './temporizador.component.html',
  styleUrls: ['./temporizador.component.css']
})
export class TemporizadorComponent implements OnInit{

  segundos:number=0;
  minutos:number=0;
  horas:number=0;

  @Input() decimas:number=0;
  @Output() contadorDecimas = new EventEmitter();
  @Output() contadorSegundos = new EventEmitter();
  @Output() contadorMinutos = new EventEmitter();
  @Output() contadorHoras = new EventEmitter();


  ngOnInit(): void {
    setInterval(()=>{
      this.decimas++
      this.contadorDecimas.emit({d:this.decimas});

      if(this.decimas==10){
        this.decimas=0;
        this.segundos++;
        this.contadorSegundos.emit({s:this.segundos})
      }

      if(this.segundos==60){
        this.segundos=0;
        this.minutos++;
        this.contadorMinutos.emit({ m:this.minutos })
      }

      if(this.minutos==60){
        this.minutos=0;
        this.horas++;
        this.contadorHoras.emit({ h:this.horas })
      }


    },100)
  }

}
