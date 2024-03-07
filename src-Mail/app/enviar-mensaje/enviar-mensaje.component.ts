import { Component } from '@angular/core';
import { Mensaje } from '../mensaje';
import { ServicioMailService } from '../servicio-mail.service';

@Component({
  selector: 'app-enviar-mensaje',
  templateUrl: './enviar-mensaje.component.html',
  styleUrls: ['./enviar-mensaje.component.css']
})
export class EnviarMensajeComponent {

  usuario:string = "";

  psw!:string;

  fecha:string = new Date().toString();

  msg:Mensaje={
    id:0,
    origen: this.usuario,
    destinatario: "",
    mensaje: "",
    asunto: "",
    fecha: this.fecha,
    leido: 0
  }

  array: [] = [];

  constructor(private servicio: ServicioMailService){
  }

  buscarUsuario(){
    this.servicio.login(this.psw).subscribe((x)=>{
      console.log(JSON.stringify(x[0]));
      this.usuario ;
    })
  }

  enviar(){
    this.msg.origen = this.usuario;
    this.msg.fecha = this.fecha;
    this.servicio.escribirMensaje(this.msg).subscribe(()=>{
      alert("Mensaje enviado");
      this.msg = new Mensaje(0, this.usuario, '', '', '', this.fecha, 0);
    });
  }

}
