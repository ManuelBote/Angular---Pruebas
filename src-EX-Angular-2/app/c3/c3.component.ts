import { Component } from '@angular/core';

@Component({
  selector: 'app-c3',
  templateUrl: './c3.component.html',
  styleUrls: ['./c3.component.css']
})
export class C3Component {

  foto:string="";
  numero:number=0;

  cambiarFoto(){
    this.numero= Math.round(Math.random()*50);

    this.foto = "https://randomuser.me/api/portraits/men/"+this.numero+".jpg";

  }

}
