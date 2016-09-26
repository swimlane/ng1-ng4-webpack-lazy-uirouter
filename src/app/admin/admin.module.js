import angular from 'angular';
import { NgModule } from '@angular/core';

import { UIRouterModule } from 'ui-router-ng2';
import { BrowserModule } from '@angular/platform-browser';

import { ADMIN_STATES } from './admin.state.js';
import { AdminComponent } from './admin.component.js';
import { ResetComponent } from './reset/reset.component.js';

@NgModule({
  imports: [
    BrowserModule,
    UIRouterModule.forChild({ states: ADMIN_STATES })
  ],
  declarations: [AdminComponent, ResetComponent]
})
export class AdminModule { }
