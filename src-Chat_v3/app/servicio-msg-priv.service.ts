import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, LOCALE_ID } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from './usuario';
import { MensajePrivado } from './mensaje-privado';
import { formatDate } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ServicioMsgPrivService {

  constructor(private httpCliente : HttpClient, @Inject(LOCALE_ID) public locale:string) {
   }

   obtenerMsgPr(nombreUS : string):Observable<MensajePrivado[]>{
    console.log(nombreUS);
    return this.httpCliente.get<MensajePrivado[]>("http://moralo.atwebpages.com/menuAjax/chat/ObtenerMensajesP.php?usuario="+nombreUS);
  }

  obtenerMsgPrE(nombreUS : string):Observable<MensajePrivado[]>{
    console.log(nombreUS);
    return this.httpCliente.get<MensajePrivado[]>("http://moralo.atwebpages.com/menuAjax/chat/ObtenerMensajesE.php?usuario="+nombreUS);
  }

  obtenerListaUsuarios():Observable<Usuario[]>{
    return this.httpCliente.get<Usuario[]>("http://moralo.atwebpages.com/chat/ObtenerUsuarios2.php");
  }

  mandarMensaje(msg : MensajePrivado){
    msg.fecha = formatDate(new Date, "HH:mm:ss/dd-MM-yyyy", this.locale)
    return this.httpCliente.post<MensajePrivado>("http://moralo.atwebpages.com/menuAjax/chat/AltaMensajeP.php", msg);
  }


}
