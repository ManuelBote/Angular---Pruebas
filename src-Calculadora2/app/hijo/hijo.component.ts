import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit{

  @Input() aleatorio1 !: number;
  @Input() aleatorio2 !: number;

  @Output() devolverNum1 = new EventEmitter();
  @Output() devolverNum2 = new EventEmitter();


  ngOnInit(): void {
    this.devolverNum1.emit({numAlt1:Math.round(Math.random()*100)});
    this.devolverNum2.emit({numAlt2:Math.round(Math.random()*100)});

  }


}
