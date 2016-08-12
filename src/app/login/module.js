import angular from 'angular';
import { configState } from './state.js';

export default angular
  .module('login', [])
  .config(configState);
