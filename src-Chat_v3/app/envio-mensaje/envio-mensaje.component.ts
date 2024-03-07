import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MensajePrivado } from '../mensaje-privado';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicioMsgPrivService } from '../servicio-msg-priv.service';

@Component({
  selector: 'app-envio-mensaje',
  templateUrl: './envio-mensaje.component.html',
  styleUrls: ['./envio-mensaje.component.css']
})
export class EnvioMensajeComponent {

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
  this.servicio.obtenerMsgPrE(nombre).subscribe((x)=>{this.dataSource.data=x
    this.dataSource.paginator=this.paginator;
    this.dataSource.sort=this.sort
  });
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
