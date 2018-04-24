import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <app-ng-style></app-ng-style>
<hr><hr>
<app-css></app-css>
<p>Hola mundo desde app.component</p>
<hr><hr>
<app-clases></app-clases>
<hr><hr>
<p [appResaltado]="'orange'">Hola mundo</p>
<hr><hr>
<app-ng-switch></app-ng-switch>
  `,
  styles: []
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
