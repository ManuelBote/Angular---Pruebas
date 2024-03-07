import { Component } from '@angular/core';

@Component({
  selector: 'app-c4',
  templateUrl: './c4.component.html',
  styleUrls: ['./c4.component.css']
})
export class C4Component {

  contenido:Array<string> = [];

  aniadirTexto(texto:string, input:HTMLInputElement){
    this.contenido.push(texto);
    input.value="";
  }

}
