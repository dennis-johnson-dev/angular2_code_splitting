import { Component } from 'angular2/core';
import './styles/DynamicSubComp.scss';

@Component({
  selector: 'dynamic-sub-comp',
  template: `
    <div class="addMargin">
      <div><strong>Sub Sandwiches!</strong></div>
      <div>This sub component was loaded dynamically... along with its corresponding CSS styles</div>
    </div>
  `
})
export default class DynamicSubComp {}
