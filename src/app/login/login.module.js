import angular from 'angular';
import { configState } from './login.state.js';
import { LoginService } from '../services/login.js';

export default angular
  .module('login', [])
  .config(configState)
  .factory('LoginService', LoginService)
