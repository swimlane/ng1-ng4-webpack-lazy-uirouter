import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeAdapter } from '@angular/upgrade';

import { UIRouterModule } from 'ui-router-ng2';
import { uiRouterNgUpgrade, Ng1ToNg2Module } from 'ui-router-ng1-to-ng2';

import { MAIN_STATES } from './app/routes.js';

// and add the UIRouter providers to the root ng2 injector
@NgModule({
  imports: [
    BrowserModule,
    Ng1ToNg2Module
    
    // this doesn't work ...
    // UIRouterModule.forChild({ states: MAIN_STATES })
  ]
})
class AppModule { }

// Create ngUpgrade Adapter
export const adapter = new UpgradeAdapter(AppModule);

// Bootstrap ui-router
uiRouterNgUpgrade.setUpgradeAdapter(adapter);

// Register ng1 servers as ng2 providers
adapter.upgradeNg1Provider('$state');
