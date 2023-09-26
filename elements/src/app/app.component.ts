import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <hr />
  <p> Below is the injection into the angular element template using a string with curly braces </p>
  <span>{{ testInjection }}</span>
  <hr />
  `,
})
export class AppComponent implements OnInit, OnChanges {
  testInjection = `{{0[a='constructor'][a]('console.log("injection from string")')()}}`;

  @Input() num?: any;

  ngOnInit(): void {
    console.log('on init', this.num);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('on changes', this.num);
  }
}
