import angular from 'angular';
import { adapter } from '../../adapter.js';

import { DashboardComponent } from './dashboard.component.js';
import { configState } from './dashboard.state.js';

// const dashboardComponent =
//  adapter.downgradeNg2Component(DashboardComponent));

export default angular
  .module('dashboard', [])
  .config(configState)
