import { formatDate } from '@angular/common';
import { Component, Inject, LOCALE_ID, inject } from '@angular/core';
import { Chat } from '../chat';
import { ServicioMensajeService } from '../servicio-mensaje.service';

@Component({
  selector: 'app-chat-mensaje',
  templateUrl: './chat-mensaje.component.html',
  styleUrls: ['./chat-mensaje.component.css']
})
export class ChatMensajeComponent {



  mensaje : Chat = {
    id: 0,
    usuario: '',
    fecha: '',
    mensaje: ''
  }

  mensajes!: Chat[];

  msg!: Chat;

  enviarMensaje(){
    this.httpCliente.enviarMensaje(this.mensaje).subscribe((mensaje:Chat)=>{this.msg=mensaje})
  }

  constructor(private httpCliente : ServicioMensajeService){
    this.httpCliente.obtenerMensajes().subscribe((result)=>(this.mensajes=result));
  }



}
