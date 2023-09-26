import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
})
export class AppModule {
  constructor(private readonly injector: Injector) {}

  ngDoBootstrap(): void {
    const element = createCustomElement(AppComponent, { injector: this.injector });
    customElements.define('lib-element', element);
  }
}
