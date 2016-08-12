import angular from 'angular';
import { NgModule } from '@angular/core';

import { configState } from './state.js';
import { UIRouterModule } from '../../utils/routerModule.js';
import { AdminComponent } from './admin.component.js';

// ng2
@NgModule({
  imports: [UIRouterModule],
  declarations: [AdminComponent],
  entryComponents: [AdminComponent]
})
export class AdminModule { }

// ng1
export default angular
  .module('admin', [])
  .config(configState);
