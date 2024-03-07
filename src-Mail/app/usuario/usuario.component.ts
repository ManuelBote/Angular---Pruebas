import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent {


usuario!: string;

mensaje!: string;


iniciar(){
  if(this.usuario!=""){
    sessionStorage.setItem("nombre", this.usuario);
  } else{
    this.mensaje = "Ingresa un nombre de usuario";
  }
}

}
