import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import DefaultComp from './DefaultComp';

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
    component: DefaultComp
  }
];

export const appRoutingProviders: any[] = [];

export const routes: ModuleWithProviders = RouterModule.forRoot(appRoutes);
