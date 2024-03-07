import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent {

  @Output() devolverNum1 = new EventEmitter();


  generar(){
    this.devolverNum1.emit({numAlt1:Math.round(Math.random()*50)});

  }

}
