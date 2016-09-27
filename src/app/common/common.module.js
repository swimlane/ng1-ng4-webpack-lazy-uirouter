import { AdminService } from './admin.service.js';
import { LoginService } from './login.service.js';

export let commonModule = angular
  .module('common', [])
  .factory('LoginService', LoginService);
