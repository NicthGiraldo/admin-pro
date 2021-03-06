import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent implements OnInit {

  progreso: number =  30;

  constructor() { }

  ngOnInit() {
  }

  cambiarValor( valor: number ) {

    
    if ( this.progreso >= 100 && valor > 0) {
      this.progreso = 100;
      return;
    }

    if ( this.progreso <= 0 && valor < 100) {
      this.progreso = 0;
      return;
    }
    
    this.progreso = this.progreso + valor;

  }

}
