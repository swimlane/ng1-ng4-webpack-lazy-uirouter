import { adapter } from 'adapter.js';

// ng2 services & components
import { AdminService } from './services/admin.service.js';
import { ToggleComponent } from './components/toggle.component.js';

// ng1 components & services
import { ButtonComponent } from './components/button.component.js';
import { LoginService } from 'app/common/services/login.service.js';

export let commonModule = angular
  .module('common', [])
  .factory('LoginService', LoginService)
  .factory('AdminService', adapter.downgradeNg2Provider(AdminService))
  .component('coolButton', ButtonComponent)
  .component('coolToggle', adapter.downgradeNg2Component(ToggleComponent))
