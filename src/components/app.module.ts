import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { routes } from './app-routing.module';

import AppComponent from './app.component';
import InlineComponent from './inline.component';

@NgModule({
  declarations: [
    AppComponent,
    InlineComponent
  ],
  imports: [ BrowserModule, routes ],
  bootstrap: [ AppComponent ]
})
export default class AppModule {}
