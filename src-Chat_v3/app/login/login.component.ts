import { Component } from '@angular/core';
import { Usuario } from '../usuario';
import { Router } from '@angular/router';
import { ServicioChatService } from '../servicio-chat.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  x: Usuario[] = [];

  usuario: Usuario = {
    idUsuario: 0,
    nombre: '',
    email: '',
    pwd: '',
    activo: true,
  };

  privado: boolean = false;

  constructor(private router: Router, private servicio: ServicioChatService) {}

  loguear(us: Usuario) {
    this.servicio.loguearUsuario(us).subscribe((x) => {
      if (x !== null) {
        console.log(x[0].nombre);
        alert(x[0].nombre + ' sí está registrado');
        sessionStorage.setItem('Nombre', x[0].nombre);

        if (sessionStorage.getItem('Nombre') == 'admin') {
          this.router.navigate(['adminMensaje/']);
        } else {
          if (this.privado == true) {
            this.router.navigate(['bandejaMensaje/']);
          } else {
            this.router.navigate(['chatRegistro/']);
          }
        }
      } else {
        alert(
          'El usuario no esta registrado, los datos son incorrectos o el usuario esta bloqueado'
        );
      }
    });
  }
}
