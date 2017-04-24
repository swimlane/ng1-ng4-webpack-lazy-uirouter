import angular from 'angular';
import { configRouting } from '../utils/configRouting';
import { commonNg1Module } from './common/common-ng1.module';
import Visualizer from 'ui-router-visualizer';

export const appModule = angular
  .module('app', [
    'ui.router',
    // 'ui.router.state.events',
    'ui.router.upgrade',
    'oc.lazyLoad',
    commonNg1Module.name
  ])
  .config(configRouting);

appModule.run($trace => $trace.enable());
appModule.run($uiRouter => Visualizer.visualizer($uiRouter));
