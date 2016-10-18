import { Component, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import '../styles/DynamicSubComp.scss';

@Component({
  selector: 'dynamic-sub-comp',
  template: `
    <div class="addMargin">
      <div><strong>Sub Sandwiches!</strong></div>
      <div>This sub component was loaded dynamically... along with its corresponding CSS styles</div>
    </div>
  `
})
class DynamicSubComp {}

export const routes = [
  { path: '', component: DynamicSubComp, pathMatch: 'full' }
];

@NgModule({
  declarations: [
    DynamicSubComp
  ],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export default class DynamicModule {
  static routes = routes;
}
