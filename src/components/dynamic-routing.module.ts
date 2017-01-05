import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import DynamicComponent from './dynamic.component';

const dynamicRoutes: Routes = [
  { path: '', component: DynamicComponent, pathMatch: 'full' }
];

export const routes: ModuleWithProviders = RouterModule.forChild(dynamicRoutes);
