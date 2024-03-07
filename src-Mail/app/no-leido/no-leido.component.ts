import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Mensaje } from '../mensaje';
import { MatTableDataSource } from '@angular/material/table';
import { ServicioMailService } from '../servicio-mail.service';

@Component({
  selector: 'app-no-leido',
  templateUrl: './no-leido.component.html',
  styleUrls: ['./no-leido.component.css']
})
export class NoLeidoComponent {

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  usuario: string = "Manuel";

  dataSource= new MatTableDataSource<Mensaje>();
  columnas : string[] = ["id", "origen", "asunto", "mensaje", "fecha", "leido"];

  constructor(private servicio: ServicioMailService){
    this.mostrarMsg();
  }

  mostrarMsg(){
    this.servicio.mostrarMensajeNoLeido(this.usuario).subscribe((x)=>{this.dataSource.data=x
      this.dataSource.paginator=this.paginator;
      this.dataSource.sort=this.sort
    });
  }

  leerMensaje(id: Mensaje) {
    this.servicio.leerMensaje(id).subscribe((x) =>{
      console.log(id);
      this.mostrarMsg();
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
