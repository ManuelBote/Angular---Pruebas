import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Mensaje } from '../mensaje';
import { ServicioMailService } from '../servicio-mail.service';

@Component({
  selector: 'app-enviados',
  templateUrl: './enviados.component.html',
  styleUrls: ['./enviados.component.css']
})
export class EnviadosComponent {

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  usuario: string = "Manuel";

  dataSource= new MatTableDataSource<Mensaje>();
  columnas : string[] = ["id", "destinatario", "asunto", "mensaje", "fecha", "leido"];

  constructor(private servicio: ServicioMailService){
    this.mostrarMsg();
  }

  mostrarMsg(){
    this.servicio.mostrarMensajesEnviados(this.usuario).subscribe((x)=>{this.dataSource.data=x
      this.dataSource.paginator=this.paginator;
      this.dataSource.sort=this.sort
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


}
