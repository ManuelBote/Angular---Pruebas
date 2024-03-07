import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Mensaje } from '../mensaje';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { ServicioMailService } from '../servicio-mail.service';

@Component({
  selector: 'app-bandeja-entrada',
  templateUrl: './bandeja-entrada.component.html',
  styleUrls: ['./bandeja-entrada.component.css']
})
export class BandejaEntradaComponent {

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  usuario: string = "Manuel";

  dataSource= new MatTableDataSource<Mensaje>();
  columnas : string[] = ["id", "origen", "asunto", "mensaje", "fecha", "leido", "borrar"];

  constructor(private servicio: ServicioMailService){
    this.mostrarMsg();
  }

  mostrarMsg(){
    this.servicio.mostrarTodoMensaje(this.usuario).subscribe((x)=>{this.dataSource.data=x
      this.dataSource.paginator=this.paginator;
      this.dataSource.sort=this.sort
    });
  }

  borrarMensaje(msg: Mensaje) {
    this.servicio.borrarMensaje(msg).subscribe((x)=>{
      this.mostrarMsg();
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
