import { adapter } from 'adapter';

// ng2 services & components
import { AdminService } from './services/admin.service';
import { ToggleComponent } from './components/toggle.component';

// ng1 components & services
import { ButtonComponent } from './components/button.component';
import { LoginService } from './services/login.service';

export let commonNg1Module = angular
  .module('common', [])
  .factory('LoginService', LoginService)
  .factory('AdminService', adapter.downgradeNg2Provider(AdminService))
  .component('coolButton', ButtonComponent)
  // downgrades must use `directive`
  .directive('coolToggle', adapter.downgradeNg2Component(ToggleComponent))
