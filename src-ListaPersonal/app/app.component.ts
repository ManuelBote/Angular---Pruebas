import { Component, OnInit } from '@angular/core';
import { Empleado } from './empleado';
import { HttpClient} from '@angular/common/http'
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'listaPersonal';
  columnas: string[] = ['id', 'nombre', 'direccion', 'cargo' , 'edad' , 'imagen', 'eliminar', 'modificar'];
  datos: Empleado[] = [];
  urlString:string = "http://moralo.atwebpages.com/ajaxListar/getTodoPersonal.php";
  ds = new MatTableDataSource <Empleado>();


  constructor(private httpCliente: HttpClient){

   }

   ngOnInit(): void{
    this.httpCliente.get<Empleado[]>(this.urlString).subscribe((res)=>{  this.ds.data = res; this.datos=res});
   }

  dataSource: any;
}
