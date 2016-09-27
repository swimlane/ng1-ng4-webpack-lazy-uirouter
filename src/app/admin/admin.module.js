import angular from 'angular';
import { NgModule } from '@angular/core';
import { UIRouterModule } from 'ui-router-ng2';

import { AdminService } from 'app/services';
import { ADMIN_STATES } from './admin.state.js';
import { AdminComponent } from './admin.component.js';
import { ResetComponent } from './reset/reset.component.js';

// angular2 module
@NgModule({
  imports: [
    UIRouterModule.forChild({ states: ADMIN_STATES })
  ],
  providers: [AdminService],
  declarations: [AdminComponent, ResetComponent]
})
export default class AdminModule { }
