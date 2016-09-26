import angular from 'angular';
import { configRouting } from '../utils/configRouting.js';

let app = angular.module('app', [
  'ui.router',
  'ui.router.state.events',
  'ui.router.upgrade',
  'oc.lazyLoad'
]);

app.config(configRouting);

export default app;
