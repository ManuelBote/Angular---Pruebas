import { Component, ViewChild } from '@angular/core';
import { Usuario } from '../usuario';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicioAdminUserService } from '../servicio-admin-user.service';

@Component({
  selector: 'app-admin-usuario',
  templateUrl: './admin-usuario.component.html',
  styleUrls: ['./admin-usuario.component.css']
})
export class AdminUsuarioComponent {

  user : Usuario = {
    idUsuario: 0,
    nombre: '',
    email:'',
    pwd:'',
    activo: true
  };

  columnas: string[] = ['id', 'nombre', 'email', 'pwd', 'bloquear', 'activar'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  dataSource = new MatTableDataSource<Usuario>();

  datos:Usuario[] = [];


constructor(private route:ActivatedRoute, private router:Router, private servicio:ServicioAdminUserService){
    this.listarUsuarios();
  // this.route.params.subscribe((x:Params)=>this.miParametro=x['name'])
  //  console.log("usuario"+this.miParametro)
}

listarUsuarios() {
  this.servicio.obtenerUsuarios().subscribe((x:Usuario[])=>{
    console.log(x);
    this.datos=x;
    this.dataSource.data=x;
    this.dataSource.paginator=this.paginator;
    this.dataSource.sort=this.sort;
  });
}

activarUs(us: Usuario) {
  this.servicio.activarUsuario(us).subscribe((x)=>{
    alert("Mensaje "+ us.idUsuario + " activado");
  });
}

bloquearUs(us: Usuario) {
  this.servicio.bloquearUsuario(us).subscribe((x)=>{
    alert("Mensaje "+ us.idUsuario + " activado");
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
