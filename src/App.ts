import { routes, appRoutingProviders } from './Routing';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import AppComponent from './AppComponent';
import DefaultComp from './DefaultComp';

@NgModule({
  declarations: [
    AppComponent,
    DefaultComp
  ],
  imports: [ BrowserModule, routes ],
  bootstrap: [ AppComponent ]
})
export default class App {}
