import angular from 'angular';
import { configState } from './login.state.js';

export default angular
  .module('login', [])
  .config(configState);
