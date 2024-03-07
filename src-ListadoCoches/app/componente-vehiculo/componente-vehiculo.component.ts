import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Vehiculo } from '../vehiculo';
import { HttpClient } from '@angular/common/http';
import { ServicioCService } from '../servicio-c.service';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-componente-vehiculo',
  templateUrl: './componente-vehiculo.component.html',
  styleUrls: ['./componente-vehiculo.component.css']
})
export class ComponenteVehiculoComponent {

dataSource= new MatTableDataSource<Vehiculo>();

displayedColumns:string[] = ['make_and_model', 'color', 'transmission', 'doors', 'fuel_type', 'kilometrage'];

@ViewChild(MatPaginator) paginator!: MatPaginator;
@ViewChild(MatSort) sort!: MatSort;

constructor(private http : ServicioCService){
  this.http.listarVehiculos().subscribe((x:Vehiculo[])=>this.dataSource.data=x)
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


