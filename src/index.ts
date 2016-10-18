import 'reflect-metadata';
import 'zone.js/dist/zone';
import 'rxjs';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import AppModule from './components/AppModule';
const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);
