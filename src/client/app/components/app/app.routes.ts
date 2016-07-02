import {provideRouter, RouterConfig} from '@angular/router';

import {AboutRoutes} from '../about/about.routes';
import {HomeRoutes} from '../home/home.routes';
import {AuthRoutes} from '../auth/auth.routes';

export const routes: RouterConfig = [
  ...HomeRoutes,
  ...AboutRoutes,
  ...AuthRoutes
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
