import { Component } from '@angular/core';

@Component({
  selector: 'app-input1',
  templateUrl: './input1.component.html',
  styleUrls: ['./input1.component.css']
})
export class Input1Component {

  title = 'ngClass';

  clase:string = "";
  claseRecibida: string = "";

  cargarClasePrincipal(e:any){
    this.claseRecibida = e.ordenHijo
  }
}
