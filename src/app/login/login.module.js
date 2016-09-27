import angular from 'angular';
import { configState } from './login.state.js';
import { commonModule } from 'app/common';

export default angular
  .module('login', [ commonModule.name ])
  .config(configState)
