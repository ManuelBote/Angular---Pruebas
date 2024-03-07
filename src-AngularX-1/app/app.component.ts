import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Listado Ciudades';

  pueblitodos:any;

  constructor(private http: HttpClient){

  }

  ngOnInit(): void {
    this.http.get("http://camacho.atwebpages.com/jumbotronAleatorio/getImagenes.php")
    .subscribe(
      resultado=>{this.pueblitodos=resultado;}
    );
  }
}
