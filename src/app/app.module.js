import angular from 'angular';
import { configRouting } from 'utils';

export const appModule = angular
  .module('app', [
    'ui.router',
    'ui.router.state.events',
    'ui.router.upgrade',
    'oc.lazyLoad'
  ])
  .config(configRouting);
