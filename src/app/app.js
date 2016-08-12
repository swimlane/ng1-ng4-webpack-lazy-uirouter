import angular from 'angular';

import { configRouting } from '../utils/configRouting.js';
import { configLaziness } from '../utils/configLaziness.js';

let app = angular.module('app', [
  'ui.router',
  'ui.router.state.events',
  'ui.router.upgrade',
  'oc.lazyLoad'
]);

app.config(configRouting);
app.run(configLaziness);

export default app;
