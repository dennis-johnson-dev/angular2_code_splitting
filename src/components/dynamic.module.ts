import { NgModule } from '@angular/core';

import { routes } from './dynamic-routing.module';

import DynamicComponent from './dynamic.component';

@NgModule({
  declarations: [ DynamicComponent ],
  imports: [ routes ]
})
export default class DynamicModule {
  static routes = routes;
}
