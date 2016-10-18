import { Component } from '@angular/core';

@Component({
  selector: 'inline-comp',
  template: `
  <div>
    <p>This component is the default component and was loaded inline.</p>
    <a routerLink="/dynamic" routerLinkActive="active">Load a dynamic component</a>
  </div>`
})
export default class InlineComp {}
