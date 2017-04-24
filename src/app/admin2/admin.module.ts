import { NgModule } from '@angular/core';
import { UIRouterModule } from 'ui-router-ng2';
import { CommonNg2Module } from '../common';

import { ADMIN_STATES } from './admin.state';
import { Admin2Component } from './admin.component';

@NgModule({
  imports: [
    UIRouterModule.forChild({ states: ADMIN_STATES }),
    CommonNg2Module
  ],
  declarations: [Admin2Component]
})
export default class Admin2Module { }
