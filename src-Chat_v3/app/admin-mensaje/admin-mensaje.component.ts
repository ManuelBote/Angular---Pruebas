import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Mensaje } from '../mensaje';
import { ActivatedRoute, Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { ServicioAdminMsgService } from '../servicio-admin-msg.service';

@Component({
  selector: 'app-admin-mensaje',
  templateUrl: './admin-mensaje.component.html',
  styleUrls: ['./admin-mensaje.component.css']
})
export class AdminMensajeComponent {

  miParametro = sessionStorage.getItem("Nombre");

  msjchat : Mensaje = {
    id: 0,
    usuario: '',
    fecha:'',
    mensaje:'',
    activo: true
  };

  columnas: string[] = ['id', 'usuario', 'fecha', 'mensaje', 'bloquear', 'activar'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  dataSource = new MatTableDataSource<Mensaje>();


constructor(private route:ActivatedRoute, private router:Router, private servicio:ServicioAdminMsgService){
  if(this.miParametro == null){
    this.miParametro = "Sesion cerrada";
  } else{
    this.listarMensajes();
  }
  // this.route.params.subscribe((x:Params)=>this.miParametro=x['name'])
  //  console.log("usuario"+this.miParametro)
}

listarMensajes() {
  this.servicio.obtenerMensajes().subscribe((x)=>{this.dataSource.data=x
    this.dataSource.paginator=this.paginator;
    this.dataSource.sort=this.sort
  });
}

activarMsg(msg: Mensaje) {
  this.servicio.activarMensaje(msg).subscribe((x)=>{
    alert("Mensaje "+ msg.id + " activado");
  });
}

bloquearMsg(msg: Mensaje) {
  this.servicio.bloquearMensaje(msg).subscribe((x)=>{
    alert("Mensaje "+ msg.id + " activado");
  });
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
