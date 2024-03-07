import { Component } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent {

  cadena1!:string;
  cadena2!:string;

  recibir1(e: any){
    this.cadena1= "https://randomuser.me/api/portraits/men/"+e.numAlt1+".jpg";
  }

  recibir2(e: any){
    this.cadena2= "https://randomuser.me/api/portraits/women/"+e.numAlt2+".jpg";
  }


}
