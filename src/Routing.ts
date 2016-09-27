import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import InlineComp from './InlineComp';

const appRoutes: Routes = [
  {
    path: 'dynamic',
    loadChildren: () => {
      return System.import('./DynamicSubComp').then((comp: any) => {
        console.log('here', comp.default)
        return comp.default;
      });
    }
  },
  {
    path: '',
    component: InlineComp
  }
];

export const appRoutingProviders: any[] = [];

export const routes: ModuleWithProviders = RouterModule.forRoot(appRoutes);
