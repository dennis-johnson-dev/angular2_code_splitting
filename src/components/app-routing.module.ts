import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import InlineComponent from './inline.component';

const appRoutes: Routes = [
  {
    path: 'dynamic',
    loadChildren: () => {
      return System.import('./dynamic.module').then((comp: any) => {
        return comp.default;
      });
    }
  },
  {
    path: '',
    component: InlineComponent
  }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(appRoutes);
