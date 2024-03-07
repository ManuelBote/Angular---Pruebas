import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, LOCALE_ID } from '@angular/core';
import { Observable } from 'rxjs';
import { Chat } from './chat';
import { formatDate } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ServicioMensajeService {

  constructor(private httpCliente : HttpClient, @Inject(LOCALE_ID) public locale: string) {}

    obtenerMensajes():Observable<Chat[]>{
      return this.httpCliente.get<Chat[]>("http://moralo.atwebpages.com/menuAjax/chat/ObtenerMensajes.php");
    }

    enviarMensaje(mensaje:Chat):Observable<Chat>{
      mensaje.fecha= formatDate(Date.now(),"HH:mm:ss / dd-MM-yy", this.locale)
      console.log(mensaje)
      return this.httpCliente.post<Chat>("http://moralo.atwebpages.com/menuAjax/chat/AltaMensaje.php", mensaje);
    }

  }


