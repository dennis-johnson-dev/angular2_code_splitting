import { Component } from 'angular2/core';

@Component({
  selector: 'sub-comp-inline',
  template: `
    <div>
      <div>This component was loaded inline</div>
    </div>
  `
})
export default class SubCompInline {}
