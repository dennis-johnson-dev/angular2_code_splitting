import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import 'zone.js/dist/zone';
import 'reflect-metadata';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './styles/style.scss';

import AppModule from './components/app.module';
platformBrowserDynamic().bootstrapModule(AppModule);
