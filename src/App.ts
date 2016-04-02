import { Component } from 'angular2/core';

@Component({
  selector: 'yo',
  template: `
    <div class="foo">
      <h1>TRy First Angular 2 Ape</h1>
      <button (click)="onSelect($event)"></button>
    </div>
  `
})
export class App {
  onSelect() {
    console.log('event');
  }
}
