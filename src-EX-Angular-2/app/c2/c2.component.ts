import { Component } from '@angular/core';

@Component({
  selector: 'app-c2',
  templateUrl: './c2.component.html',
  styleUrls: ['./c2.component.css']
})
export class C2Component {

  contador:number=0;
  colorF1:string="";
  colorF2:string="";


  temp:NodeJS.Timeout | undefined;
  temporizador(){
    this.temp=setInterval(()=>{
      this.contador++;
    }, 1000)
  }

  iniciar(btn1:HTMLButtonElement, btn2:HTMLButtonElement){
    this.temporizador();
    btn1.disabled=true;
    btn2.disabled=false;
    this.colorF1="green";
    this.colorF2="cian";
  }

  parar(btn1:HTMLButtonElement, btn2:HTMLButtonElement){
    clearInterval(this.temp);
    this.colorF1="cian";
    this.colorF2="green";
    btn1.disabled=false;
    btn2.disabled=true;

  }

}
