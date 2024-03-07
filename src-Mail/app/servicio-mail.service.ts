import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Mensaje } from './mensaje';

@Injectable({
  providedIn: 'root'
})
export class ServicioMailService {

  constructor(private httpCliente : HttpClient) {
  }

  mostrarTodoMensaje(nombre:string):Observable<Mensaje[]>{
   return this.httpCliente.get<Mensaje[]>('http://moralo.atwebpages.com/serviciosMail/ObtenerMensajesMail_R.php?usuario='+nombre);
  }

  mostrarMensajeNoLeido(nombre:string):Observable<Mensaje[]>{
    return this.httpCliente.get<Mensaje[]>('http://moralo.atwebpages.com/serviciosMail/ObtenerMensajesMail_RN.php?usuario='+nombre);
   }

   mostrarMensajesEnviados(nombre:string):Observable<Mensaje[]>{
    return this.httpCliente.get<Mensaje[]>('http://moralo.atwebpages.com/serviciosMail/ObtenerMensajesMail_E.php?usuario='+nombre);
   }

   escribirMensaje(msg:Mensaje){
    return this.httpCliente.post('http://moralo.atwebpages.com/serviciosMail/MandarMensajeMail.php', msg, {responseType: 'text'});
   }

   leerMensaje(id:Mensaje){
    return this.httpCliente.put('http://moralo.atwebpages.com/serviciosMail/LeerMensaje.php', id, {responseType: 'text'});
   }

   borrarMensaje(msg: Mensaje){
    return this.httpCliente.delete('http://moralo.atwebpages.com/serviciosMail/eliminarMail.php?id='+ msg.id);
   }

   login(pwd: string): Observable<string>{
    return this.httpCliente.get<string>('http://moralo.atwebpages.com/serviciosMail/logeoMail.php?pwd='+pwd);
   }

}
