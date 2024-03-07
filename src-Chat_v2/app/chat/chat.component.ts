import { Component } from '@angular/core';
import { Chat } from '../chat';
import { ChatServicioService } from '../chat-servicio.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {

  constructor(private servicio : ChatServicioService){
    this.enviarMensaje();
  }

  miPrametro!: string;

  msjchat : Chat = {
    id: 0,
    usuario: '',
    fecha:'',
    mensaje:''
  };

  listaMensajes : Chat[] = [];

    listarMensajes() {
      this.servicio.leerMensajes().subscribe((msg:Chat[])=>{
        this.listaMensajes = msg;
      })
    }

    enviarMensaje() {

    }
}
