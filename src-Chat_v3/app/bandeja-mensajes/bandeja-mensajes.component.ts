import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicioMsgPrivService } from '../servicio-msg-priv.service';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MensajePrivado } from '../mensaje-privado';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-bandeja-mensajes',
  templateUrl: './bandeja-mensajes.component.html',
  styleUrls: ['./bandeja-mensajes.component.css']
})
export class BandejaMensajesComponent {

  dataSource= new MatTableDataSource<MensajePrivado>();

miParametro = sessionStorage.getItem("Nombre");

msjchat : MensajePrivado = {
  id: 0,
  usuario: '',
  destinatario:'',
  fecha:'',
  mensaje:'',
  activo: true
};

columnas: string[] = ['id', 'usuario', 'destinatario', 'fecha', 'mensaje'];

@ViewChild(MatPaginator) paginator!: MatPaginator;
@ViewChild(MatSort) sort!: MatSort;


constructor(private route:ActivatedRoute, private router:Router, private servicio:ServicioMsgPrivService){
  if(this.miParametro == null){
    this.miParametro = "Sesion cerrada";
  } else{
    this.listarMensajes(this.miParametro);
  }
  // this.route.params.subscribe((x:Params)=>this.miParametro=x['name'])
  //  console.log("usuario"+this.miParametro)
}

listarMensajes(nombre: string){
  this.servicio.obtenerMsgPr(nombre).subscribe((x)=>{this.dataSource.data=x
    this.dataSource.paginator=this.paginator;
    this.dataSource.sort=this.sort;
    console.log(x);
  });
}

enviarMensaje() {
  if(this.miParametro!=null){
    this.msjchat.usuario = this.miParametro;

    this.servicio.mandarMensaje(this.msjchat).subscribe((x)=>{
    })

  }
}

cerrarSesion() {
  sessionStorage.clear();
  this.router.navigate(['login/']);
}

ngAfterViewInit() {
  this.dataSource.paginator = this.paginator;
  this.dataSource.sort = this.sort;
}

applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();

  if (this.dataSource.paginator) {
    this.dataSource.paginator.firstPage();
  }
}


}
