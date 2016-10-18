import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import InlineComp from './InlineComp';

const appRoutes: Routes = [
  {
    path: 'dynamic',
    loadChildren: () => {
      return System.import('./DynamicSubComp').then((comp: any) => {
        return comp.default;
      });
    }
  },
  {
    path: '',
    component: InlineComp
  }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(appRoutes);
