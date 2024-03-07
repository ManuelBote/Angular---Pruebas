import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Proyecto3';
  ciclo:string = 'DAW';
  nombreUsuario:string = '';

  cambiarNombre(){
    this.ciclo = 'Desarrollo de Aplicaciones Web';
  }

  retornarNombre(){
    this.ciclo = 'DAW';
  }

  cargarNombreUsuario(user:string){
    this.nombreUsuario = user.toUpperCase();
  }
}
