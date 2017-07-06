import { NgModule } from '@angular/core';
import { UIRouterModule } from '@uirouter/angular';
import { CommonNg2Module } from '../common';

import { ADMIN_STATES } from './admin.state';
import { AdminComponent } from './admin.component';
import { ResetComponent } from './reset/reset.component';

import { AdminService } from '../common/services/admin.service';

@NgModule({
  imports: [
    UIRouterModule.forChild({ states: ADMIN_STATES }),
    CommonNg2Module
  ],
  declarations: [AdminComponent, ResetComponent],
  providers: [AdminService]
})
export default class AdminModule { }
