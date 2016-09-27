import { NgModule } from '@angular/core';
import { UIRouterModule } from 'ui-router-ng2';
import { CommonNg2Module } from 'app/common/commonng2.module.js';

import { ADMIN_STATES } from './admin.state.js';
import { AdminComponent } from './admin.component.js';
import { ResetComponent } from './reset/reset.component.js';

@NgModule({
  imports: [
    UIRouterModule.forChild({ states: ADMIN_STATES }),
    CommonNg2Module
  ],
  declarations: [AdminComponent, ResetComponent]
})
export default class AdminModule { }
