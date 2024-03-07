import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, LOCALE_ID } from '@angular/core';
import { Usuario } from './usuario';
import { Observable } from 'rxjs';
import { Chat } from './chat';
import { formatDate } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ChatServicioService {

  constructor(private httpCLiente : HttpClient, @Inject(LOCALE_ID) public locale:string) {
  }

  registrarUsuario(user:Usuario):Observable<Usuario>{
    return this.httpCLiente.post<Usuario>('http://moralo.atwebpages.com/menuAjax/chat/AltaUsuario.php', user);
  }

  loguearUsuario(user:Usuario):Observable<Usuario>{
    return this.httpCLiente.get<Usuario>('http://moralo.atwebpages.com/menuAjax/chat/SeleccionarUsuario.php?email='+user.email+'&pwd='+user.pwd);
  }

  leerMensajes():Observable<Chat[]>{
    return this.httpCLiente.get<Chat[]>('http://moralo.atwebpages.com/menuAjax/chat/ObtenerMensajes.php');
  }

  insertarMensaje(msg:Chat){
    msg.fecha = formatDate(new Date, "HH:mm:ss/dd-MM-yyyy", this.locale);
    return this.httpCLiente.put<Chat>('http://moralo.atwebpages.com/menuAjax/chat/AltaMensaje.php', msg);
  }
}

