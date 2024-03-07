import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Empleado } from 'src/app/empleado';
import { ServicioEmpleadosService } from 'src/app/servicio-empleados.service';

@Component({
  selector: 'app-formulario1',
  templateUrl: './formulario1.component.html',
  styleUrls: ['./formulario1.component.css']
})
export class Formulario1Component implements OnInit{

  constructor(private service:ServicioEmpleadosService, private fb:FormBuilder){
  }

  miform!: FormGroup;

  img!: string;

  cambiarImg(){
    this.img = this.miform.get("imagen")?.value
  }

  ngOnInit(): void {
    this.cargarnumeroId();
    this.cargarnumeroEdad();
    this.obtenerEmpleados();

    this.miform = this.fb.group({
      id:['', [Validators.required]],
      nombre:['', [Validators.required]],
      direccion:['', [Validators.required]],
      cargo:['', [Validators.required]],
      edad:['', [Validators.required]],
      imagen:['', [Validators.required]]
    });

  }

  numero: number[] = [];

  cargarnumeroId(){
    for(let i = 1; i<=300; i++){
      this.numero.push(i);
    }
  }

  numeroEdad: number[] = [];

  cargarnumeroEdad(){
    for(let i = 18; i<=65; i++){
      this.numeroEdad.push(i);
    }
  }

  empleados:Empleado[] = [];

  obtenerEmpleados(){
    this.service.obtenerEmpleados().subscribe(x=>{
      this.empleados = x;
    })
  }

  empleadoEnviar:Empleado[] = [];

  enviar(){
    this.service.enviarEmpleado(this.miform.value).subscribe(()=>{
      alert("datos Enviados");
    })
  }

}
