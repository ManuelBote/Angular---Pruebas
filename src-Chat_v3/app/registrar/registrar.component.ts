import { Component } from '@angular/core';
import { Usuario } from '../usuario';
import { Router } from '@angular/router';
import { ServicioChatService } from '../servicio-chat.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})

export class RegistrarComponent {

  usuario: Usuario = {
    idUsuario: 0,
    nombre: '',
    email:'',
    pwd:'',
    activo: true

  };

  constructor(private router:Router,private servicio:ServicioChatService){

  }

  registrar(us:Usuario){
    this.servicio.registrarUsuario(us).subscribe((us:Usuario)=>{
      this.usuario=us
      // alert ("Usuario " + us.nombre + " registrado")
      // sessionStorage.setItem('Nombre',us.nombre);
      // this.router.navigate(['chatRegistro/']);
    })
  }

}
