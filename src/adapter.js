import { UpgradeAdapter } from '@angular/upgrade';
import { uiRouterNgUpgrade } from 'ui-router-ng1-to-ng2';
import { UpgradeModule } from 'app';

// import { AdminService } from 'app/services/admin.js';
// import { LoginService } from 'app/services/login.js';

// Create ngUpgrade Adapter
export const adapter = new UpgradeAdapter(UpgradeModule);

// Bootstrap ui-router
uiRouterNgUpgrade.setUpgradeAdapter(adapter);

// Upgrade some services
adapter.upgradeNg1Provider('$http');
// adapter.upgradeNg1Provider('LoginService', { asToken: LoginService });
