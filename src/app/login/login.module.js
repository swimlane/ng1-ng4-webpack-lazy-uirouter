import angular from 'angular';
import { adapter } from '../../adapter.js';

import { configState } from './login.state.js';
import { LoginService } from '../services/login.js';
import { AdminService } from '../services/admin.js';

export default angular
  .module('login', [])
  .config(configState)
  .factory('LoginService', LoginService)
  .factory('AdminService', adapter.downgradeNg2Provider(AdminService))
