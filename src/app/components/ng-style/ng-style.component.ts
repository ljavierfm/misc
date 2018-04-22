import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `
    <p [style.fontSize.px]="tamanyo">
      Hola mundo .. esta es una etiqueta
    </p>
    <button class="btn btn-primary" (click)="tamanyo=tamanyo+5"><i class="fa-plus fa"></i></button>
    <button class="btn btn-primary" (click)="tamanyo=tamanyo-5"><i class="fa-minus fa"></i></button>
  `,
  styles: []
})
export class NgStyleComponent implements OnInit {

  tamanyo:number=20;

  constructor() { }

  ngOnInit() {
  }

}
