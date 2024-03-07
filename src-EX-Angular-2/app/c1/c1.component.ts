import { Component } from '@angular/core';

@Component({
  selector: 'app-c1',
  templateUrl: './c1.component.html',
  styleUrls: ['./c1.component.css']
})
export class C1Component {

  colorFondo:string = "";

  cambio1(){
    this.colorFondo="yellow";
  }

  cambio2(){
    this.colorFondo="red";
  }

  cambio3(){
    this.colorFondo="green";
  }

  cambio4(){
    this.colorFondo="blue";
  }

}
