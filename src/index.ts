import 'reflect-metadata';
import 'zone.js/dist/zone';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import App from './App';
const platform = platformBrowserDynamic();
platform.bootstrapModule(App);
