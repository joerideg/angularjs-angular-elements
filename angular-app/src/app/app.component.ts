import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1>
    This is a Angular 12 app utilizing an angular custom element
  </h1>

  <lib-element></lib-element>
  `,
})
export class AppComponent { }
