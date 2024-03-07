import { Component } from '@angular/core';
import { Usuario } from '../usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  usuario: Usuario = {
    idUsuario: 0,
    nombre: '',
    email:'',
    pwd:'',
    activo: true

  };

  loguear(arg0: any) {

  }
}
