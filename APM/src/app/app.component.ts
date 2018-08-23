import { Component } from "@angular/core";

@Component({
  selector: 'pm-root',
  template: `
  <nav class='navbar navbar-expand navbar-light bg-light'>
  <a class='navar-brand'>{{pageTitle}}</a>
  <ul class='nav nav-pills'>
      <li><a class='nav-link' [routerLink]="['/welcome']">Home</a></li>
      <li><a class='nav-link' [routerLink]="['/products']">Product List</a></li>
  </ul>`
})

export class AppComponent {
  pageTitle: string = 'Acme Product Management';
}