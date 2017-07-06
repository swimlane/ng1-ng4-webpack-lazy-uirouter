import { NgModule } from '@angular/core';
import { HybridHelper } from '../../hybrid-helper';

// ng2 services & components
import { AdminService } from './services/admin.service';
import { ToggleComponent } from './components/toggle.component';

// ng1 components & services
import { ButtonComponent } from './components/button.component';
import { CoolButtonDirective } from './components/buttonUpgraded.component';
import { LoginService } from './services/login.service';

const upgradedProviders = [
  HybridHelper.buildProviderForUpgrade('$http'),
  HybridHelper.buildProviderForUpgrade('LoginService'),
];

// angular2 common module
@NgModule({
  providers: [AdminService, ...upgradedProviders],
  declarations: [ToggleComponent, CoolButtonDirective],
  exports: [ToggleComponent, CoolButtonDirective]
})
export class CommonNg2Module { }
