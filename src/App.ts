import { Component } from 'angular2/core';
import { AsyncRoute, RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';
import SubComp from './SubComp';

@Component({
  selector: 'yo',
  template: `
    <div class="foo">
      <h1>TRy first Angular 2 Ape</h1>
      <a [routerLink]="['Foo']">Crisis Center</a>
      <router-outlet></router-outlet>
    </div>
  `,
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  { path:'/public/sub', name: 'Foo', component: SubComp }
])
export class App {}
