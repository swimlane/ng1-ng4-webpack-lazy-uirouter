import angular from 'angular';
import { configRouting } from '../utils/config-routing';
import { commonNg1Module } from './common/common-ng1.module';
import { visualizer } from "@uirouter/visualizer";
import uiRouter from "@uirouter/angularjs";
import { upgradeModule } from "@uirouter/angular-hybrid";

const appModule = angular
  .module('app', [
    uiRouter,
    upgradeModule.name,
    'oc.lazyLoad',
    commonNg1Module.name
  ])
  .config(configRouting);

appModule.config([ '$urlServiceProvider', $urlService => $urlService.deferIntercept() ]);
// appModule.run($trace => $trace.enable());
appModule.run(['$uiRouter', ($uiRouter) => visualizer($uiRouter) ]);

export default appModule;
