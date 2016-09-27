import { routes, appRoutingProviders } from './Routing';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import AppComponent from './AppComponent';
import InlineComp from './InlineComp';

@NgModule({
  declarations: [
    AppComponent,
    InlineComp
  ],
  imports: [ BrowserModule, routes ],
  bootstrap: [ AppComponent ]
})
export default class App {}
