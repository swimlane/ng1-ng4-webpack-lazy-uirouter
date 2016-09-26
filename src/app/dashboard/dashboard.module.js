import angular from 'angular';
import { configState } from './dashboard.state.js';

export default angular
  .module('dashboard', [])
  .config(configState)
