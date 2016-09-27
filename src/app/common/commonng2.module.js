import { NgModule } from '@angular/core';
import { adapter } from 'adapter.js';

// ng2 services & components
import { AdminService } from './services/admin.service.js';
import { ToggleComponent } from './components/toggle.component.js';

// ng1 components & services
import { ButtonComponent } from './components/button.component.js';
import { LoginService } from 'app/common/services/login.service.js';

// downgraded ng1 components
const ng1ButtonComponent = adapter.upgradeNg1Component('coolButton');

// upgrade providers
adapter.upgradeNg1Provider('$http');
adapter.upgradeNg1Provider('LoginService', { asToken: LoginService });

// angular2 common module
@NgModule({
  providers: [AdminService],
  declarations: [ToggleComponent, ng1ButtonComponent],
  exports: [ToggleComponent, ng1ButtonComponent]
})
export class CommonNg2Module { }
