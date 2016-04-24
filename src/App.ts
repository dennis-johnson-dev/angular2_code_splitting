import { Component } from 'angular2/core';
import { AsyncRoute, RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';
import InlineSubComp from './InlineSubComp';

@Component({
  selector: 'yo',
  template: `
    <div>
      <h1>Code Splitting in Angular 2</h1>
      <div>
        <a [routerLink]="['LoadDynamicSub']">Load Sub Component</a>
      </div>
      <router-outlet></router-outlet>
    </div>
  `,
  directives: [ ROUTER_DIRECTIVES ]
})
@RouteConfig([
  { path: '/', name: 'Root', component: InlineSubComp },
  new AsyncRoute({
    path: '/sub',
    loader: () => System.import('./DynamicSubComp').then((comp: any) => {
      return comp.default;
    }),
    name: 'LoadDynamicSub'
  })
])
export default class App {}
