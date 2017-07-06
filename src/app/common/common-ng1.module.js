import { HybridHelper } from '../../hybrid-helper';

// ng2 services & components
import { AdminService } from './services/admin.service';
import { ToggleComponent } from './components/toggle.component';

// ng1 components & services
import { ButtonComponent } from './components/button.component';
import { LoginService } from './services/login.service';

export let commonNg1Module = angular
  .module('common', [])
  .factory('LoginService', LoginService)
  .component('coolButton', ButtonComponent)

HybridHelper.downgradeProvider(commonNg1Module.name, 'AdminService', AdminService);

HybridHelper.downgradeComponent(commonNg1Module.name, 'coolToggle', ToggleComponent, {
  inputs: ['age'],
  outputs: []
});
