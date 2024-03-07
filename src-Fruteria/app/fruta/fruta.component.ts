import { Component } from '@angular/core';
import { Fruta } from '../fruta';
import { ServicioFService } from '../servicio-f.service';
import { Form, FormArray } from '@angular/forms';

@Component({
  selector: 'app-fruta',
  templateUrl: './fruta.component.html',
  styleUrls: ['./fruta.component.css']
})
export class FrutaComponent {

  prod!: Fruta;

  selectedProduct: Fruta = {
    id: '',
    nombre: '',
    precio: 0,
    unidades:0,
   imagen:''
 }

  frutas!: Fruta[];
  constructor(private httpCliente : ServicioFService){
    this.httpCliente.leerProductos().subscribe(result=>this.frutas=result);
  }

  crearProducto(form: { value: Fruta; }){
    this.httpCliente.crearProductos(form.value).subscribe((producto:Fruta)=>{this.prod = producto});
    //location.reload();
}

  seleccionar(f:Fruta) {
    this.selectedProduct = f;
  }

  eliminar(id:string) {
      this.httpCliente.deleteProduct(id).subscribe((producto:Fruta)=>{this.prod = producto});
      //location.reload();

  }

  actualizarProducto() {
    this.httpCliente.updateProduct(this.selectedProduct).subscribe((producto:Fruta)=>{this.prod = producto});
    //location.reload();

  }

}
