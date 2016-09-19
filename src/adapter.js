import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeAdapter } from '@angular/upgrade';

import { UIRouterModule } from 'ui-router-ng2';
import { uiRouterNgUpgrade, Ng1ToNg2Module } from 'ui-router-ng1-to-ng2';

// Use @UIRouterModule instead of @NgModule to allow use of the UIRouter directives
// and add the UIRouter providers to the root ng2 injector
@UIRouterModule({
  imports: [BrowserModule, Ng1ToNg2Module]
})
class AppModule { }

// Create ngUpgrade Adapter
export const adapter = new UpgradeAdapter(AppModule);

// Bootstrap ui-router
uiRouterNgUpgrade.setUpgradeAdapter(adapter);

// Register ng1 servers as ng2 providers
upgradeAdapter.upgradeNg1Provider('$state');
