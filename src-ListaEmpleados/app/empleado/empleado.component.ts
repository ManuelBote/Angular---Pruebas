import { Component, ViewChild } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Emp } from '../emp';
import { ServicioEmpleadoService } from '../servicio-empleado.service';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { CuadroDialogoComponent } from '../cuadro-dialogo/cuadro-dialogo.component';
import { EMPTY } from 'rxjs';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css'],
})
export class EmpleadoComponent {

  @ViewChild(MatTable) tabla1!: MatTable<Emp>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  dataSource = new MatTableDataSource<Emp>();

  columnas: string[] = ['id', 'nombre', 'direccion', 'cargo', 'edad', 'imagen', 'eliminar', 'modificar'];

  empleado1!: Emp;

  cargarEmp(){
    this.httpCliente.leerEmpleados().subscribe((x)=>{this.dataSource.data=x
      this.dataSource.paginator=this.paginator;
      this.dataSource.sort=this.sort
    });
  }

  constructor(private httpCliente: ServicioEmpleadoService, public dialogo:MatDialog){
    this.cargarEmp();
  }

  modificarEmpleado(empleado: Emp) {
    const dialogo2 = this.dialogo.open(CuadroDialogoComponent, {data: new Emp(empleado.id, empleado.nombre, empleado.direccion, empleado.cargo, empleado.edad, empleado.imagen)});
    dialogo2.afterClosed().subscribe(x=>{this.httpCliente.modificarEmpleado(x).subscribe(resultado=>this.cargarEmp())})

  }

  crear() {
    const dialogo1 = this.dialogo.open(CuadroDialogoComponent, {data: new Emp(0, '', '', '', 0, '')});
    dialogo1.afterClosed().subscribe(x=>{console.log("aaaa " + x);
    if(x!=undefined){
      this.httpCliente.insertarEmpleado(x).subscribe(x=>{this.cargarEmp});
    }});

  }

  eliminarEmpleado(id: number) {
    if(confirm ("¿Estás sguro que quieres eliminar al empleado?")){
      this.httpCliente.eliminarEmpleado(id).subscribe(x=>{alert("Se ha eliminado al empleado"); this.cargarEmp})
    }
  }

  applyFilter(event: KeyboardEvent) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


}
