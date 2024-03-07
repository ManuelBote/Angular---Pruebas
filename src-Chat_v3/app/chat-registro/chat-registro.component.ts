import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ServicioChatService } from '../servicio-chat.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Mensaje } from '../mensaje';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-chat-registro',
  templateUrl: './chat-registro.component.html',
  styleUrls: ['./chat-registro.component.css']
})

export class ChatRegistroComponent {

  miParametro = sessionStorage.getItem("Nombre");

  msjchat : Mensaje = {
    id: 0,
    usuario: '',
    fecha:'',
    mensaje:'',
    activo: true
  };

  columnas: string[] = ['id', 'usuario', 'fecha', 'mensaje'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  dataSource = new MatTableDataSource<Mensaje>();


constructor(private route:ActivatedRoute, private router:Router, private servicio:ServicioChatService){
  if(this.miParametro == null){
    this.miParametro = "Sesion cerrada";
  } else{
    this.listarMensajes();
  }
  // this.route.params.subscribe((x:Params)=>this.miParametro=x['name'])
  //  console.log("usuario"+this.miParametro)
}

listarMensajes() {
  this.servicio.leerMensajes().subscribe((x)=>{this.dataSource.data=x
    this.dataSource.paginator=this.paginator;
    this.dataSource.sort=this.sort
  });
}

enviarMensaje() {
  if(this.miParametro!=null){
    this.msjchat.usuario = this.miParametro;

    this.servicio.insertarMensaje(this.msjchat).subscribe((x)=>{
      this.listarMensajes();
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
