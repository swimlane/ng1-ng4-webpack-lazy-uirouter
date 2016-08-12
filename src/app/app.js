import angular from 'angular';

import 'angular-ui-router/release/angular-ui-router.js';
import 'angular-ui-router/release/stateEvents.js';
import 'ui-router-ng2';
import 'ui-router-ng1-to-ng2';
import 'ocLazyLoad';

import { configRouting, configLaziness } from '../utils/routing.js';

let app = angular.module('app', [
  'ui.router',
  'ui.router.state.events',
  'ui.router.upgrade',
  'oc.lazyLoad'
]);

app.config(configRouting);
app.run(configLaziness);

export default app;
