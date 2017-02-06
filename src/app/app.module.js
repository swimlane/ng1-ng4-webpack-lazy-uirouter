import angular from 'angular';
import { configRouting } from '../utils/configRouting.js';
import { commonNg1Module } from './common/common-ng1.module.js';

export const appModule = angular
  .module('app', [
    'ui.router',
    // 'ui.router.state.events',
    'ui.router.upgrade',
    'oc.lazyLoad',
    commonNg1Module.name
  ])
  .config(configRouting);
