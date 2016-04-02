import { Component } from 'angular2/core';
import { AsyncRoute, RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';
import InlineSubComp from './InlineSubComp';

@Component({
  selector: 'yo',
  template: `
    <div>
      <h1>Code splitting in Angular 2</h1>
      <a [routerLink]="['LoadDynamicSub']">Load Sub Component</a>
      <router-outlet></router-outlet>
    </div>
  `,
  directives: [ ROUTER_DIRECTIVES ]
})
@RouteConfig([
  { path: '/public', name: 'Root', component: InlineSubComp },
  new AsyncRoute({
    path: '/public/sub',
    loader: () => System.import('./DynamicSubComp').then((comp: any) => {
      return comp.default;
    }),
    name: 'LoadDynamicSub'
  })
])
export class App {}
