import angular from 'angular';
import { NgModule } from '@angular/core';
import { UIRouterModule } from 'ui-router-ng2';

import { ADMIN_STATES } from './admin.state.js';
import { AdminComponent } from './admin.component.js';
import { ResetComponent } from './reset/reset.component.js';
import { AdminService } from '../services/admin.js';

import { adapter } from '../../adapter.js';
import { LoginService } from '../services/login.js';

adapter.upgradeNg1Provider('LoginService', { asToken: LoginService });

// angular2 module
@NgModule({
  imports: [
    UIRouterModule.forChild({ states: ADMIN_STATES })
  ],
  providers: [AdminService],
  declarations: [AdminComponent, ResetComponent]
})
export default class AdminModule { }
