import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngClass';

  clase:string = "";
  claseRecibida: string = "";

  cargarClasePrincipal(e:any){
    this.claseRecibida = e.ordenHijo
  }
}
